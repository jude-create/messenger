import React, {useEffect, useState} from 'react';
import './App.css';
import {  Input } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Message from './Message';
import { db } from './firebase';
import IconButton from '@mui/material/IconButton';
import { collection, onSnapshot, addDoc, serverTimestamp, orderBy, query } from "firebase/firestore";
import SendIcon from '@mui/icons-material/Send';
import FlipMove from 'react-flip-move';





function App() {
  const [input, setInput] =useState('');
   const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
  

    useEffect(() => {
   
    
      setUsername(prompt('Please enter your name'));
  
      //if blank [] run once
     }, [] )
    
   useEffect( () => {
  // run once when an app components load
  
  const q = query(collection(db, "messages"),orderBy("timestamp","desc"));
const unsubscribe = onSnapshot(
 q,(snapshot) => {
   setMessages(snapshot.docs.map(doc =>({id: doc.id,message: doc.data()})));
  
  });
  
  return unsubscribe;

  
     }, [] );

    
   const sendMessage =  async (event) => {
     //all logic to send a message goes here
     event.preventDefault();
    
  

// Add a new document in collection "cities"

  await addDoc(collection(db, "messages"), {
    message: input,
    username: username,
    timestamp: serverTimestamp()
  });

      
     //set before db collection firebase
    //setMessages([...messages,{username: username, text: input}]);
    setInput('');
   }

  return (
    <div className="App">
      <h1>MESSENGER</h1>
      <h2>Welcome {username}</h2>
<form className='app_form'>
<FormControl className='app_formControl'>
  <Input className='app_input' placeholder='Enter a message...'   value={input} onChange={event => setInput(event.target.value)}  />

<IconButton className='app_iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>send message
 <SendIcon/>
</IconButton >
</FormControl>
   
</form>
     {/**input fields */}
         {/**button */}
             {/** going through all messages  display through message.js*/}
           <FlipMove>
             {
               messages.map(({id,message} )=> (
                <Message key={id} username={username} message={message}/>
               ))
             }
            </FlipMove>
    </div>
  );
}

export default App;
