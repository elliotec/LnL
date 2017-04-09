import React from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';

export default class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <a href="https://www.facebook.com/groups/1830648883849106/" target="_blank">
          <FaFacebookSquare className='fb-button' />
        </a>
      </div>
    )
  }
}
