import React, { Component } from 'react';

class TwitterForm extends Component {
    state = { 
        name: '',
        message: '',
        nameErr: '',
        messageErr: ''        
     }

    constructor(props) {
        super(props);
    }

    changeHandle = (e) => {        
        this.setState({[e.target.name]: e.target.value });
    }

    submitedHandle = (event) => {

        event.preventDefault();        

        if(this.state.name.trim().length == 0) {
            this.setState({nameErr: 'Please, enter your name above.'});
            return null;
        }else {
            this.setState({nameErr: ''});
        }

        if(this.state.message.trim().length == 0) {
            this.setState({messageErr: 'Please, write some message.'});
            return null;
        }else {
            this.setState({messageErr: ''});
        }

        const msgData = {
            name: this.state.name,
            message: this.state.message
        };

        this.props.submited(msgData);  
        
        this.setState({message: ''});
    } 

    render() { 
        const {name, message} = this.state;

        return ( 
            <form onSubmit={this.submitedHandle}>
                    <div className="form-group m-0">
                        <label className="m-0">Name</label>
                        <input type="text" name="name" value={name} onChange={this.changeHandle} className="form-control"></input>
                        {
                            this.state.nameErr.trim().length > 0 ? (
                                <small class="form-text text-danger">* {this.state.nameErr}</small>
                            ): ('')
                        }                        
                    </div>
                    <div className="form-group m-0">
                        <label className="m-0">Message</label>
                        <textarea name="message" value={message} onChange={this.changeHandle} className="form-control"></textarea>
                        {
                            this.state.messageErr.trim().length > 0 ? (
                                <small class="form-text text-danger">* {this.state.messageErr}</small>
                            ): ('')
                        }                        
                    </div>
                    <div className="form-group mt-2">
                        <button type="submit" disabled={this.props.disableSubmit} className="btn btn-primary" style={{width: '100px'}}>Send</button>
                    </div>
            </form>            
         );
    }
}
 
export default TwitterForm;