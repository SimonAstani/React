import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading";
import ReactPlayer from "react-player/youtube"
import {useState} from 'react'



function App() {

  return ( 
      <div>
        <button id = 'bt1'>
          Accpet 
        </button>
        <button  id='bt2'>Reject</button>
      </div>

  ); 

}

export default App;
