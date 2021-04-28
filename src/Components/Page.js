import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";


class Page extends Component{  
    constructor(props){
        super(props);
        this.state={activePage:1};
    }
    
    handlePageChange(pageNumber){
        console.log("number page : "+pageNumber);
        this.setState({activePage:pageNumber});
    }

    render(){
        return <div>
            <Pagination activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                        
            >
            </Pagination>
        </div>
        ;
    }
}

export default Page;
