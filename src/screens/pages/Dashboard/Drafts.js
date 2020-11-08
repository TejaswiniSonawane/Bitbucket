import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import $ from 'jquery';

import NewMail from './NewMail.js';
import {DownOutlined } from '@ant-design/icons' ;

class Drafts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    // axios call for drafts list
  }
  render() {
    return (
      <div className="d-flex" >
      <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 m-0 noPad border-right row" style={{backgroundColor:'#F3F2F1', height:'800px'}}>
          <div className="w-100">
              <div className="p-2 d-flex w-100 flex-row" style={{backgroundColor:'#fff'}} >
                  <div className="container col-lg-8 col-md-8 col-sm-12 col-xs-12 m-2" style={{display : 'inline-block'}}>
                    <b class="card-text text-black-50 m-2 ">Drafts</b>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="row col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                      <h6 className="activeColor"> Filters </h6> 
                      <DownOutlined className="m-2" style={{color:'#000', paddingTop:'10px', fontSize:'12px'}} />
                  </div>
              </div>
          </div>
      </div>
      <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12 pl-2 noPad">
          <NewMail/>
      </div>
  </div>
    );
  }
}

export default Drafts;