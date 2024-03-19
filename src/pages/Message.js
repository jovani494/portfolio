import { Component } from "react";

class Message extends Component{
    submitMessage = () =>{
        
    }

    render(){
        return(
            <div className="message">
                <form onSubmit={this.submitMessage}>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Message;