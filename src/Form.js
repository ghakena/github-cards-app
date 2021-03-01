// Component to handle user input
import React from 'react'
import axios from 'axios';

class Form extends React.Component {
    // userNameInput = React.createRef()
    state = {
        userName:'' 
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(response.data)
        this.setState({userName: ''})
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    placeholder='Enter GitHub username' 
                    value = {this.state.userName}
                    onChange = {event => this.setState({userName: event.target.value})} 
                    required/>
                    <button>Add User</button>
                </form>
            </div>
        )
    }
    
}

export default Form
