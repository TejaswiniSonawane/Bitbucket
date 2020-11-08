import React, { Component } from 'react';
import axios 					from 'axios';
import swal						from 'sweetalert';


import'./Login.css';
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:'',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem("token");
    }

    handleSubmit(event){
        console.log('here call');
        event.preventDefault();
        var formValues = {
            username : this.state.username,
            password  : this.state.password,
        };
			if(this.state.username.length > 0 && this.state.password.length > 0){
                // given api is not working need base url to get data
                // axios
				// 	.post('/login',formValues)
				// 	.then((response)=>{
                //         console.log("response in mobile = ",response.data);
        		// 		axios.defaults.headers.common['Authorization'] = 'Bearer '+response.data.token;
                //         localStorage.setItem('token',response.data.token)
                //         this.props.history.push("/inbox");
                //             this.setState({
                //                 username: "",
                //                 password:""
                //             });
                //     })
				// 	.catch((error)=>{
                //         swal("Something went wrong", "", "error");
				//         console.log("error = ",error);
				                       
                //     });
                                
                this.props.history.push("/inbox");
                this.setState({
                                    username: "",
                                    password:""
                                });
                
            } else{
                swal("Please enter Username and Password", "", "warning");
            }
    }
    handleChange(event){
        event.preventDefault();
        const {name,value} = event.target;
        let formerrors = this.state.formerrors;
        this.setState({ formerrors,
            [name]:value
        } );
    }

    render() {
        return (
            <div >
                <div className="fluid-container" id="loginScreen">
                    <div className="main">
                        <div className="box">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <form className="login">
                                        <div className="form-group">
                                            <input type="text"  className="form-control" name="username" value={this.state.username} onChange={this.handleChange.bind(this)} placeholder="Username"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="passwod" className="form-control" name="password" value={this.state.password}  onChange={this.handleChange.bind(this)} placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="checkbox col-md-8 col-lg-8 col-sm-12 colxs-12 noleftpadding">
                                                <label>
                                                <input type="checkbox"/> Remember Me.
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                                <button type="button" className="btn btn-block btn-primary" onClick={(this.handleSubmit.bind(this))}>Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;