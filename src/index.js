import React, {  useEffect } from "react";
import { render } from "react-dom";
import * as webpackNumbers from 'webpackNumbers';//webpack es module
function App() {
    useEffect (() =>{
         window.input = document.getElementsByTagName('input')[0];
         window.span = document.getElementsByTagName('span')[0];
         window.btn1 = document.getElementsByTagName('button')[0];
         window.btn2 = document.getElementsByTagName('button')[1];
         window.btn3 = document.getElementsByTagName('button')[2];
         window.btn4 = document.getElementsByTagName('button')[3];
         window.frame = document.getElementById('child').contentWindow;
        webpackNumbers.attachEvent(frame,'https://sso-iframe-page.onrender.com',span,btn4);
        btn1.onclick = function () {
            var msg = input.value;
            // ...
            // Global variable
            webpackNumbers.sendMsg(frame,'https://sso-iframe-page.onrender.com',msg);
            // ...
        }
        btn2.onclick = function () {
            // ...
            // Global variable
            webpackNumbers.login(frame,'https://sso-iframe-page.onrender.com');
            // ...
        }
        btn3.onclick = function () {
            // ...
            // Global variable
            webpackNumbers.logout(frame,'https://sso-iframe-page.onrender.com');
            // ...
        }
        btn4.onclick = function () {
            window.open("https://sso-iframe-page.onrender.com/index.html?backpath="+window.location.pathname,"","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");
        }
        console.log(webpackNumbers.numToWord(2));
    })

    return (
        <div id="father">
            <p>这里登录入口</p>
            <input type="text" />
            <button>发送信息</button>
            <button>Login</button>
            <button>Logout</button>
            <button>popup</button>
            <p >message : <span></span></p>
        </div>
    );
}

render(<App />, document.getElementById("root"));