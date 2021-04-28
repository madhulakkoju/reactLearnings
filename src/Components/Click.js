import React from 'react'
import UpdatedComponent from './HigherOrder';

class Click extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count:0
        };
    }

    updateCount = ()=> {
        this.setState({count : this.state.count+1});
        console.log(this.state.count);
    }

    render(){
        const {count} = this.state;
        return <div>
            <p>{this.props.children }</p>
            <button onClick={this.updateCount} > {this.props.name} + click me</button>
            <h1>{count}</h1>
        </div>
    }

}

export default Click;
