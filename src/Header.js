import React from 'react'

class Header extends React.Component {
    render(){
        return (
            <h2 className='header-tag' style={{color: Math.random() < 0.5 ? 'green': 'blue'}}>
            {this.props.title}
            </h2>
        )
    }
}

export default Header