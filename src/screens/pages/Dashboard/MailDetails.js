import React, { Component } from 'react';

class MailDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        // axios call for geting selectd index data which came as prop from inbox component
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                        <div className=" col-lg-12 col-md-12" style={{display:"inline-block"}}>
                        {this.props.mailData ? 
                            <div className="col-lg-2 col-md-2" style={{display:"inline-block", paddingTop:'-20px'}}>
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" className="center rounded-circle mr-2" height="50px" width="50px" alt="avatar" />
                            </div>
                            : 'Click On Mail to Show Details' }
                            <div className="col-lg-10 col-md-10" style={{display:"inline-block", paddingTop:'30px'}}>
                                <p class="card-text m-2">{this.props.mailData ? this.props.mailData.name : null}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{textAlign:'center'}}>
                    <p class="font-20 my-4 px-4">{this.props.mailData ? `Subject: ${this.props.mailData.subject}` : null}</p>
                    </div>
                    <div className="row">
                    <p class="font-18 my-2 px-4">{this.props.mailData ? this.props.mailData.content : null}</p>
                    </div>
            </div>
        );
    }
}

export default MailDetails;