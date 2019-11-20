
import axios from 'axios';
const URL_BASE = 'http://192.168.0.8:5000';


export default {

    getAllMessages: async () => {
        return await fetch(URL_BASE + '/getMessages')
        .then(response => response.json())
        .then(data => {
            return(data);
        });
    },

    addMessage: async (data = {}) => {
        return await axios 
        .post(URL_BASE + '/addMessage', data)
        .then(response => {
            if(response.status == 200) {
                return ({
                    messageAdd: true
                });
            }
        })
        .catch(error => {
            console.error(error.response.status);
            console.error(error.response.statusText);            
            return ({
                messageAdd: false
            });
        });
    }

}