import React,  { Component }     from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Login        from '../pages/Login/Login.js';
import ErrorPage    from '../pages/ErrorPage/ErrorPage.js';
import Header       from '../pages/Dashboard/Header.js';
import Sidebar      from '../pages/Dashboard/Sidebar.js';
import Inbox        from '../pages/Dashboard/Inbox.js';
import Drafts       from '../pages/Dashboard/Drafts.js';
import NewMail      from '../pages/Dashboard/NewMail.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

class Layout extends Component{

  constructor(props) {
      super();
      this.state = {
          loggedIn: false,
      }
  }


  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log("this.state.token===>",token);
    if (token !== null && token !== "undefined") {
        this.setState({
            loggedIn: true
        })
    } else { }

}

logout() {
  var token = localStorage.removeItem("token");
  if (token !== null && token !== "undefined") {
      this.setState({
          loggedIn: false
      })
  }
}

render(){
  if(this.state.loggedIn ){
      console.log("IF this.state.loggedIn ===>",this.state.loggedIn);
      return(
        <Router>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-0 noPad row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 noPad row m-0">
                        <div className="wrapper">
                          <Header />
                        </div> 
                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-10 noPad">
                          <Sidebar />
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-10 noPad">
                          <Switch >
                            <Route path="/inbox"        exact strict component={Inbox}/>
                            <Route path="/drafts"       exact strict component={Drafts}/>
                            <Route path="/newMail"       exact strict component={NewMail}/>
                            
                          </Switch> 
                        </div>
                    </div>
                  </div>
        </Router>
        );
    } else {
      console.log("ELSE this.state.passwordreset ===>",this.state.passwordreset);   
            console.log("ELSE this.state.loggedIn ===>",this.state.loggedIn);   
            return (
                <div>
                    <Router >
                        <Switch >
                            <Route path="/"        exact  component={Login}  /> 
                            <Route path='/error'   exact  component={ErrorPage} />
                        </Switch>
                    </Router>
                </div>
            );
    }
  }
}

export default Layout;