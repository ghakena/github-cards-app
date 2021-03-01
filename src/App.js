import React from 'react'

import './App.css'
import Header from './Header'
import CardList from './CardList'
import Form from './Form'

const testData = [
  {name: 'Dan Abramov', avatar_url: 
"https://avatars0.githubusercontent.com/u/810438?v=4", 
company: 'Facebook'},
{name: 'Sophie Alpert', avatar_url: 
"https://avatars2.githubusercontent.com/u/6820?v=4", 
company: 'Facebook'},
{name: 'Sebastian Markbage', avatar_url: 
"https://avatars0.githubusercontent.com/u/63648?v=4", 
company: 'Facebook'},

]

class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     profiles: testData
  //   }
  // }
  state = {
    // profiles: testData
    profiles: []
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render(){
    return (
      <div className="App">
        <br />
        <Header title='The GitHub Cards App'/>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
  
  
  
}

export default App;
