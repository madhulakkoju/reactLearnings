import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import React, { Component } from 'react';
import { Document, Page } from "react-pdf";

import GetPdfPages from './pdfReader';

class ScrollPage extends Component{

    constructor(props){
        super(props);
        this.state={
            currentPage : 1,
            pages:["dsd","dasdasd df gdfg dg dfg dg dfg dgdfg dfg","dsd","dasdasd","dsd","dasdasd","dsd","dasdasd","dsd","dasdasd","dsd","dasdasd"],
            colors: ["white"],
            pdfPages: GetPdfPages(props)
        }
    }

    prevPage = () =>{
        console.log("up");
        if(this.state.currentPage == 1){
            return this.setState({ 
            });
        }
        return this.setState({currentPage : this.state.currentPage - 1});
    }

    nextPage = () => {
        console.log("down");
        if(this.state.pages.length == this.state.currentPage)
            return this.setState({});
        return this.setState({currentPage: this.state.currentPage+1});
    }

    render(){
        return <div>
            <ReactScrollWheelHandler
                upHandler = {this.prevPage}
                downHandler = {this.nextPage}
                style={{
            width: "100%",
            height: "40vh",
            backgroundColor: "green",
            transition: "background-color.4s ease-out",
          }}
            >
            <h1>{this.state.currentPage}</h1>
            
            {this.state.pages[this.state.currentPage-1]}
            {this.state.pdfPages[this.state.currentPage-1]}
            

            </ReactScrollWheelHandler>
            
        </div>
    }
}

export default ScrollPage;