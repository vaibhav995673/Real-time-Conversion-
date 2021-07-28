import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
let currDate=new Date();
currDate=currDate.getHours();
let greetings="";
const cssStyle={}

if (currDate>=1 && currDate<12){
    greetings="Good Morning";
    cssStyle.color="green";

}
else if 
    (currDate>=12 && currDate<20)
    {
        greetings="Good Afternoon";
        cssStyle.color="Red";
    }
    else
    {
        greetings="Good Night";
        cssStyle.color="Black";
    }


ReactDom.render(
    <>
    <div>
    <h1>
      hello sir, <span style={cssStyle}>{greetings}</span>
    </h1>
    </div>
   
    
    
   
    </>,
    document.getElementById("root")
);