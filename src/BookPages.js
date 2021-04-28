import React, { Component } from "react";
    import logo from "./logo.svg";
    import "./App.css";
    
    import InfiniteScroll from "react-infinite-scroller";
    
    

    class Scroll2 extends Component {
      constructor(props) {
        super(props);
        this.state = {
          items: 20,
          hasMoreItems: true,
          pageNo :1,
        };
      }
    
      showItems() {
        var items = [];
        for (var i = 0; i < this.state.items; i++) {
          items.push(<li key={i}> Item {i} </li>);
        }
        return items;
      }
    
      loadMore() {
        if(this.state.items===200){
          
          this.setState({ hasMoreItems: false});
        }else{
            setTimeout(() => {
            this.setState({ items: this.state.items + 20, pageNo : this.state.pageNo + 1});
        }, 2000);
        }
        
      }
    
      render() {
        return (
          <div className="App">
              <div id = "pgNo">

               <h1>{this.state.pageNo}</h1>

              </div>
            <div style={{height:'200px', overflow:'auto'}}>
              <InfiniteScroll
                loadMore={this.loadMore.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={<div className="loader"> Loading... </div>}
                useWindow={false}
              >
                {this.showItems()}{" "}
              </InfiniteScroll>{" "}
            </div>{" "}
          </div>
        );
      }
    }
    
export default Scroll2;