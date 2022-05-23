import React, { Component } from 'react';

class Profile extends Component {

    constructor(){
        super()
        this.state = {
            name: 'Roshni',
            emailId: 'roshni@gmail.com',
            count: 0
        }
    }

    updateState(){
        this.setState({
            name: 'Arjun',
            emailId: 'arjun@gmail.vom',
            count: this.state.count+1
        })
        console.log("State change")
    }

    render() {
        return (
            <div>
                <h1>My Name: {this.state.name}</h1>
                <h1>My Email ID: {this.state.emailId}</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {this.updateState()}}>Update</button>
            </div>
        );
    }
}

export default Profile;