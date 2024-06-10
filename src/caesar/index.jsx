import React, { useEffect, useRef } from 'react';
import "./styles.css";
import { caesarCipher, caesarDecipher, handleClick,handleClick1 } from "./app.js";

function Caesar() {
  const passRef = useRef(null);
  const messageRef = useRef(null);
  const plainTextRef = useRef(null);
  const encryptedTextRef = useRef(null);
  const btnRef = useRef(null);
  const btn1Ref = useRef(null);

  useEffect(() => {
    const pass = passRef.current;
    const message = messageRef.current;
    const plainText = plainTextRef.current;
    const encryptedText = encryptedTextRef.current;
    const btn = btnRef.current;
    const btn1 = btn1Ref.current;

    btn.addEventListener('click', () => handleClick(pass, message, plainText, encryptedText, caesarCipher));
    btn1.addEventListener('click', () => handleClick1(pass, message,plainText, encryptedText, caesarDecipher));
  }, []);
  

  return (
    <div className="main_container">
      <div className="wraper_container">
        <div className="title">Caesar Cypher</div>
        <div className="central_containers">
          <div className="container">
            <label htmlFor="password">Enter Password</label>
            <input type="password" id="pass" name="password" ref={passRef} />
            <label htmlFor="message">Enter Message</label>
            <textarea name="message" id="mess" ref={messageRef}></textarea>
            <button id="btn" className="button" ref={btnRef}>Encrypt Text</button>
          </div>
          <div className="container">
            <h3>Plain Message:</h3>
            <p id="plainText" ref={plainTextRef}></p>
            <h3>Encrypted Message:</h3>
            <p id="encryptedText" ref={encryptedTextRef}></p>
            <button id="btn1" className="button1" ref={btn1Ref}>Decript Text</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Caesar;