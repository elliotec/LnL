import React from 'react';
import fetch from 'isomorphic-fetch';
import Index from 'pages/index';
import { config } from 'config';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const contentfulApiUrl = `https://cdn.contentful.com/spaces/jg5tu42w97lj/entries?access_token=${config.contentfulAccessToken}`;

// Action Types
const RECEIVE_CONTENTFUL = 'RECEIVE_CONTENTFUL';
const REQUEST_CONTENTFUL = 'REQUEST_CONTENTFUL';

// builds redux store
function configureStore(preloadedState) {
  return createStore(
    appReducer,
    preloadedState,
    composeWithDevTools(
        applyMiddleware(
          thunkMiddleware
        )
    )
  )
}
const store = configureStore();

// Action Creators
function requestContentful() {
    return {
        type: REQUEST_CONTENTFUL
    }
}

function receiveContentful(json) {
    return {
        type: RECEIVE_CONTENTFUL,
        receivedAt: Date.now(),
        contentful: json
    }
}

export function fetchContentful() {
  return dispatch => {
    dispatch(requestContentful())
    return fetch(contentfulApiUrl)
        .then(
            response => response.json(),
            error => console.log('An error occured.', error)
        )
        .then(json => dispatch(receiveContentful(json)))
    }
}

function appReducer(state = {}, action = {}){
    switch (action.type){

        case REQUEST_CONTENTFUL:
          return {
            ...state,
            isFetching: true
          }
          
        case RECEIVE_CONTENTFUL:
          const oldContentfulItems = action.contentful.items;
          const oldContentfulAssets = action.contentful.includes.Asset;
          const productImages = oldContentfulAssets.reduce(
            (assetsAccum, asset) => {
              const assetId = asset.sys.id;
              const imageUrl = asset.fields.file.url;
              assetsAccum[assetId] = imageUrl;

              return assetsAccum;
            }, {}
          );
          const itemsWithImages = oldContentfulItems.map(
            (item) => {
              const imageId = item.fields.image[0].sys.id;

              return {
                  ...item,
                  ...item.fields,
                  imageUrl: productImages[imageId]
              }
            }
          );
          const featured = itemsWithImages.filter(
            (item) => {
              if(item.tags.includes('featured')){
                return item;
              }
            }
          );

          return {
            ...state,
            isFetching: false,
            contentful: action.contentful,
            lastUpdated: action.receivedAt,
            itemsWithImages,
            featured
          }
        default:
            return state
    }
}

export default class App extends React.Component {
  render () {
    return (
        <Provider store={store} >
            <Index />
        </Provider>
    )
  }
}
