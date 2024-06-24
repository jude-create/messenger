import { Card, CardContent, Typography } from '@mui/material';
import React, {forwardRef} from 'react';
import './Message.css';



const Message = forwardRef(({message, username}, ref) => {
    //logged in user on device
    const isUser = username === message.username;
  return (

  
    
       <div ref={ref}  className={`message ${isUser && 'message_user'}`}>
        <Card className={isUser ? 'message_userCard' :'message_guestCard'}>  {/**to be able to style  main user oneside  */}
            <CardContent>
                <Typography
                color='black'
                variant='h5'
                component='h2'
                >
                {!isUser && `${message.username ||'Unknown User'}: `} {message.message}  
                </Typography>
            </CardContent>
        </Card>
  
    
  </div>
 

  )

  }
)

export default Message
