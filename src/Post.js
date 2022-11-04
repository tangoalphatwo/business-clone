import React from 'react'
import './Post.css'
import {Avatar} from '@mui/material'
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

function Post( {name, photoUrl, description, message} ) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpOffAltIcon} title='Like' color='grey' />
            <InputOption Icon={ChatBubbleOutlineIcon} title='Comment' color='grey' />
            <InputOption Icon={RepeatIcon} title='Share' color='grey' />
            <InputOption Icon={SendIcon} title='Send' color='grey' />
        </div>
    </div>
  )
}

export default Post