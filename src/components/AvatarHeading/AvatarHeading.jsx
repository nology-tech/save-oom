import React from 'react'
import './AvatarHeading.scss'

const AvatarHeading = ({avatarHeadingText}) => {
  return (
    <div className='avatar-heading'>
        <h1 className='avatar-heading__text'>{avatarHeadingText}</h1>
    </div>
  )
}

export default AvatarHeading