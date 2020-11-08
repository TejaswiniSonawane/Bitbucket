import React, { Component } from 'react';

import {DeleteOutlined } from '@ant-design/icons' ; // I only used antD for icons and templates

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="header">
        <nav class="navbar flex-md-nowrap p-0" style={{height:"40px"}}>
          <a class="col-sm-6 col-md-2 col-lg-2 col-xs-6 mr-0" href="/">
            <svg data-name="plus (2)" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 15 15">
              <g data-name="Group 5367">
                <path data-name="Path 17138" d="M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z" fill="currentColor"></path>
              </g>
            </svg>
            <a className="pl-1 font-semibold" href="/newMail">New message</a>
          </a>

          <a class="col-sm-6 col-md-10 col-lg-10 col-xs-6 mr-0" href="/" style={{display : 'inline-block'}}>
            <div style={{display : 'inline-block'}} className="px-3">
              <DeleteOutlined  />
              <span className="pl-1 font-semibold">Delete</span>
            </div>
            <div style={{display : 'inline-block'}} className="px-3">
            <i class="fa fa-archive" aria-hidden="true"></i>
              <span className="pl-1 font-semibold">Archive</span>
            </div>
            <div style={{display : 'inline-block'}} className="px-3">
            <i class="fa fa-ban" aria-hidden="true"></i>
              <span className="pl-1 font-semibold">Junk</span>
            </div>
            <div style={{display : 'inline-block'}} className="px-3">
              <DeleteOutlined />
              <span className="pl-1 font-semibold">Sweep</span>
            </div>
            <div style={{display : 'inline-block'}} className="px-3">
              <i class="fa fa-suitcase" aria-hidden="true"></i>
              <span className="pl-1 font-semibold">Move to</span>
            </div>
          </a>

         
        </nav>
      </div>
    );
  }
}

export default Header;