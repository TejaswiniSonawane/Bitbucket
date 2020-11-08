import React, { Component } from 'react';

import'./ErrorPage.css';
class ErrorPage extends Component {
    render() {
        return (
            <div className="bg1">
                <img alt="404_Error_code"  src="/images/errorimg.png" className="imgData" height="500px" width="500px"/>
            </div>
        );
    }
}
export default ErrorPage;