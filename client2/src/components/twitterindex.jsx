import React, { Component } from 'react';
import TwitterForm from './twitterform';
import TwitterMsg from './twittermsg';
import Api from '../helper/Api';

class TwitterIndex extends Component {
    state = { 
        roll: [],
        submitDisabled: false
     }

     async componentDidMount() {         
         const resp = await Api.getAllMessages();         
         this.setState({ roll:resp });         
     }

     onSubmited = async (data) => {    
        this.setState({submitDisabled: true});              

        const isOk = await Api.addMessage(data);
        if(isOk) {
            let rollOfMessages = this.state.roll;              
            rollOfMessages.push(data);
        
            this.setState({ roll: rollOfMessages });
        } else {
            alert('server error');
        }
        
        this.setState({submitDisabled: false});
     }

    render() { 
        return ( 
            <div className="mt-3">                
                <div className="border p-2 m-auto" style={{width: '370px'}}>                
                    <h2 className="text-center">MyTwitter</h2>
                    <TwitterForm submited={this.onSubmited} disableSubmit={this.state.submitDisabled}></TwitterForm>     
                    <div style={{height: '250px', overflowY: 'auto'}}>
                    {
                        this.state.roll.reverse().map((msg) =>                        
                            <TwitterMsg name={msg.name} message={msg.message} key={Math.random(2,100)}></TwitterMsg>
                        )
                    }
                    </div>                               
                </div>       
            </div>   
         );
    }
}
 
export default TwitterIndex;