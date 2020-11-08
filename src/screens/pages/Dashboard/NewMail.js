import React, { Component } from 'react';
import swal						from 'sweetalert';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


class NewMail extends Component {
    constructor(props){
        super(props);
            this.modules = {
                toolbar: [
                  [{ 'font': [] }],
                  [{ 'size': ['small', false, 'large', 'huge'] }],
                  ['bold', 'italic', 'underline'],
                  [{'list': 'ordered'}, {'list': 'bullet'}],
                  [{ 'align': [] }],
                  [{ 'color': [] }, { 'background': [] }],
                  ['clean']
                ]
            };
        
            this.formats = [
                'font',
                'size',
                'bold', 'italic', 'underline',
                'list', 'bullet',
                'align',
                'color', 'background'
              ];
              this.state = {
                content: '',
                recepient: ''
            }
            this.rteChange = this.rteChange.bind(this);
            this.handleChange = this.handleChange.bind(this);
    }

    rteChange = (content, delta, source, editor) => {
        console.log(editor.getHTML()); // HTML/rich text
        console.log(editor.getText()); // plain text
        console.log(editor.getLength()); // number of characters
        this.setState({
            content: editor.getText(),
        })
    }

    handleChange(event){
        event.preventDefault();
        const {name,value} = event.target;
        let formerrors = this.state.formerrors;
        this.setState({ formerrors,
            [name]:value
        } );
    }

    handleSubmit(e){
        if(this.state.comments && this.state.recepient){
            swal("Email send Successfully!", "", "success");
            this.setState({
                content: '',
                recepient: ''
            });
        } else {
        swal("Please Enter Recipient Name and Content!", "", "error");
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                        <div className="col-lg-12 col-md-12 py-4" style={{display:"inline-block"}}>
                            <div className="col-lg-12 col-md-12" style={{display:"inline-block", paddingTop:'-20px'}}>
                              <span className="Left" style={{display:"inline-block",backgroundColor:'#ace5ee', color:"#498EC8",fontWeight:'bold', padding:'3px 15px'}}>To</span>
                              <div className="float-right" style={{display:"inline-block"}}>
                                <span style={{color:'#498EC8', fontWeight:'bold'}}>Cc </span>
                                <span style={{color:'#498EC8', fontWeight:'bold'}}> Bcc</span>
                              </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12" style={{backgroundColor:"#fff"}}>
                            <input type="text" data-text="recepient" className="form-control vanish" name="recepient" style={{borderColor:"#fff"}} value={this.state.recepient} onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="col-lg-12 col-md-12" style={{height:"10px",backgroundColor:"#F3F2F1"}}></div>
                        <div className="col-lg-12 col-md-12 py-4" style={{backgroundColor:"#fff"}}>
                            <ReactQuill theme="snow" modules={this.modules}
                            formats={this.formats}  onChange={this.rteChange}
                            value={this.state.content || ''}/>
                        </div>
                        <button type="button" className="btn btn-left btn-primary mx-3" onClick={(this.handleSubmit.bind(this))}>send</button>
                </div>
            </div>
        );
    }
}

export default NewMail;