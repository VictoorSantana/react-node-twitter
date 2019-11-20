import React, { Component } from 'react';

class TwitterMsg extends Component {
    state = {  }

    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className="border-top">
                <h4 className="m-0"> {this.props.name}:</h4>
                <p  className="m-0">{this.props.message}</p>
            </div>
         );
    }
}
 
export default TwitterMsg;