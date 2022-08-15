import React from 'react';
import './index.css';
import googlelogo from './images/google-logo.png';
import googlesearch from './images/google-search.svg';
import googlemic from './images/google_mic_icon.png';

import outlookicon from './images/outlook.png';
import gmailicon from './images/gmail.png';
import phpmyadminicon from './images/phpmyadmin.png';
import webstoreicon from './images/webstore.png';
import addshortcuticon from './images/add.png';

function App() {
  return (
    <div>
        <Header />
    </div>
  );
}
class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <div className="gmail-img user"></div>
        <div className="header-icons">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fa-th bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
            </svg>
          </div>
          <div className="header-text-container">
            <a className="header-text-2 hover" href="index.html">Gmail</a>
            <a className="header-text hover" href="index.html">Images</a>
          </div>
        </div>
        <ClearFix />
        <Logo />
        <SearchBar />
        <Shortcuts />
      </div>
    )
  }
}
const ClearFix = () => {
  return (
    <div className="clearfix">
    </div>
  )
}

const Logo = () => {
  return (
    <div className="mt-50 d-flex justify-content-center">
      <img className="logo-width" src={googlelogo} alt="logo.png"/>
    </div>
  )
}
const SearchBar = () => {
  return (
    <div className="google-search">
        <div className="input-group text-center">
          <img className="search-icon" src={googlesearch} alt="google-search.svg"/>
          <input type="text" className="form-control" placeholder="Search Google or type a URL"></input>
          <img className="mic-icon" src={googlemic} alt="google_mic_icon.png"></img>
        </div>
      </div>
  )
}
const Shortcuts = () => {
  return(
    <div className="shortcuts d-flex justify-content-center wrap">
      <Icons icon={outlookicon} name="Outlook"/>
      <Icons icon={gmailicon} name="Gmail"/>
      <Icons icon={phpmyadminicon} name="phpMyAdmin"/>
      <Icons icon={webstoreicon} name="Web Store"/>
      <div className="d-flex justify-content-center">
        <div className="box">
            <div className="d-flex justify-content-center circle">
              <div className="addplusicon-margin">
                <img src={addshortcuticon} alt="addshortcut"/>
              </div>
            </div>
            <p className="box-text">Add shortcut</p>
        </div>
       </div>
    </div>
  )
}
const Icons = (variable1) => {
  return(
    <div className="d-flex justify-content-center">
        <div className="box">
            <div className="d-flex justify-content-center circle">
                <img src={variable1.icon} alt={variable1.name}/>
            </div>
            <p className="box-text">{variable1.name}</p>
        </div>
    </div>
  )
}

// class Card extends React.Component{
//   render(){
//     return (
//       <div>
//           <h1 className="title">Person</h1>
//           <p>Person's detail</p>
//       </div>
//     )
//   }
// }
// const NewText = () => {
//   return (
//       <div>
//           <h1>Person</h1>
//       </div>
//   )
// }

export default App;
