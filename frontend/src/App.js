import {Routes,Route} from 'react-router-dom'
import React from 'react';
import HomePage from './Pages/HomePage';
import './App.css'
import ChatPage from './Pages/ChatPage';
// import ChatProvider from './Context/ChatProvider';



const App = () => {

  return <>
    <div className='App'>
    
      
      
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/chats' element={<ChatPage/>}/>
        </Routes>
      
    
      
      </div>
  </>;
};

export default App;
