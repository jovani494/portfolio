import { Component } from "react";

class Message extends Component{
    submitMessage = () =>{
        
    }

    render(){
        return(
            <div className="message">
                <form onSubmit={this.submitMessage}>
                    <input type="submit" value="Envoyer"/>
                </form>
            </div>
        )
    }
}

export default Message;