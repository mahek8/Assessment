import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import "./css/content.css";
function Content(){
    const upload =() => {
        const url = prompt("Enter the URL");
        alert(url);
    }
    return (
        <div className="content">
        <div  className="header"></div>
        <div className="context">
        <div className="video"><ArrowLeftIcon className="icon" />Videos</div>
        <p><input className="url" type="text" value="Insert URL Here"></input></p>
        <p className="word">or</p>
        <div><button className="upload" onClick={upload}>Upload</button></div>
        </div>
        </div>
    );
}
export default Content;