import React, { Component } from 'react';

import {DownOutlined } from '@ant-design/icons' ;

import MailDetails from './MailDetails.js';
import'./Inbox.css';

class Inbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mailList:[{
                id:1,
                name:'Kristin Patterson',
                subject:'Reminder: Submit expences',
                content:'Please submit your expenses from yout last...',
                tag:'imp',
                day:'today'
            },
            {
                id:2,
                name:'Tim Deboir',
                subject:'Project review',
                content:'Hi all, should we meetearly next week to discuss...',
                tag:'imp',
                day:'today'
            },
            {
                id:3,
                name:'Kristin Patterson',
                subject:'Reminder: Submit expences',
                content:'Please submit your expenses from yout last...',
                tag:'imp',
                day:'yesterday'
            },
            {
                id:4,
                name:'Tim Deboir',
                subject:'Project review',
                content:'Hi all, should we meetearly next week to discuss...',
                tag:'other',
                day:'yesterday'
            },
            {
                id:5,
                name:'Kristin Patterson',
                subject:'Reminder: Submit expences',
                content:'Please submit your expenses from yout last...',
                tag:'other',
                day:'yesterday'
            }],
            setData: null,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        // axios call for get mail list
    }

    handleClick(e){
        let index = e.currentTarget.id;
        let mailListdata = this.state.mailList.find(x => x.id === parseInt(index,10));
        console.log('data-------------', mailListdata);
        this.setState({
            setData : mailListdata,
        });
    }

    render() {
        return (
            <div className="d-flex">
                <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 m-0 noPad border-right row">
                    <div className="w-100">
                        <div className="p-2 d-flex w-100 flex-row">
                            {/* <b class="card-text text-black-50 m-0">Focused</b> */}
                            <div class="container col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div class="switch">
                                <input type="radio" class="switch-input" name="view" value="week" id="week" checked/>
                                <label for="week" class="switch-label switch-label-off">Focused</label>
                                <input type="radio" class="switch-input" name="view" value="month" id="month"/>
                                <label for="month" class="switch-label switch-label-on">Others</label>
                                <span class="switch-selection"></span>
                                </div>
                            </div>
                            <div className="row col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                                <h6 className="activeColor"> Filters </h6> 
                                <DownOutlined className="m-2" style={{color:'#000', paddingTop:'10px', fontSize:'12px'}} />
                            </div>
                        </div>
                    </div>
                    {this.state.mailList.length > 0 ? 
                    // eslint-disable-next-line array-callback-return
                    this.state.mailList.map((data, i) => {
                    if(data.tag === 'imp') {
                    return (
                    <div key={i} class="card promoting-card custom-border w-100" id={data.id} onClick={this.handleClick.bind(this)} >
                        <div class="p-2 d-flex w-100 flex-row card-inside">
                            <div className="">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" class="rounded-circle mr-2" height="25px" width="25px" alt="avatar" />
                            </div>
                            <div className="">
                                <p class="card-text m-0">{data.name}</p>
                                <p class="font-12 m-0">{data.subject}</p>
                                <p class="font-12 m-0">{data.content}</p>
                            </div>
                        </div>
                    </div>
                    )}
                    }
                    )
                     : null }

                    <div class="w-100">
                        <div class="p-2 d-flex w-100 flex-row">
                            <b class="card-text text-black-50 m-0">Today</b>
                        </div>
                    </div>
                    
                    {this.state.mailList.length > 0 ? 
                    // eslint-disable-next-line array-callback-return
                    this.state.mailList.map((data, i) => {
                    if(data.day === 'today') {
                    return (
                    <div key={i} class="card promoting-card custom-border w-100" id={data.id} onClick={this.handleClick.bind(this)}>
                        <div class="p-2 d-flex w-100 flex-row card-inside">
                            <div className="">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" class="rounded-circle mr-2" height="25px" width="25px" alt="avatar" />
                            </div>
                            <div className="">
                                <p class="card-text m-0">{data.name}</p>
                                <p class="font-12 m-0">{data.subject}</p>
                                <p class="font-12 m-0">{data.content}</p>
                            </div>
                        </div>
                    </div>
                    )}
                    })
                    : null }
                   
                    <div class="w-100">
                        <div class="p-2 d-flex w-100 flex-row">
                            <b class="card-text text-black-50 m-0">Yesterday</b>
                        </div>
                    </div>
                    
                    {this.state.mailList.length > 0 ? 
                    // eslint-disable-next-line array-callback-return
                    this.state.mailList.map((data, i) => {
                    if(data.day === 'yesterday') {
                    return (
                    <div key={i} class="card promoting-card custom-border w-100" id={data.id} onClick={this.handleClick.bind(this)}>
                        <div class="p-2 d-flex w-100 flex-row card-inside">
                            <div className="">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" class="rounded-circle mr-2" height="25px" width="25px" alt="avatar" />
                            </div>
                            <div className="">
                                <p class="card-text m-0">{data.name}</p>
                                <p class="font-12 m-0">{data.name}</p>
                                <p class="font-12 m-0">{data.name}</p>
                            </div>
                        </div>
                    </div>
                     )}
                    })
                     : null }
    
                </div>
                <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12 pl-2 noPad">
                    <MailDetails mailData={this.state.setData}/> 
                    {/* here we can send the selected data index and then in MailDetails will get selected index data by axios call */}
                </div>
            </div>
        );
    }
}

export default Inbox;