// Hold info about specific users.
import React from 'react'

class Card extends React.Component {
    render(){
        const profile = this.props
        return (
            <div className='github-profile'>
                <img  className='profile-photo' src={profile.avatar_url} />
                <div className='info'>
                    <div>{profile.name}</div>
                    <div>{profile.company}</div>
                </div>
            </div>
        )
    }
}

export default Card