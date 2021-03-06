import React from 'react';
import { OutboundLink } from 'react-ga';

const Header = ({reset}) => {
  return (
    <div className="header_container">
      <div className="header">
        <span className="landscape-logo"><img  onClick={reset} src="/images/left-logo.svg" /></span>
          <OutboundLink eventLabel="product" to="https://https://deeplearningfoundation.org/" target="_blank" rel="noopener noreferrer" className="lfdl-logo">
    <img src="/images/right-logo.svg" />
  </OutboundLink>

      </div>
    </div>
  );
};

export default Header;
