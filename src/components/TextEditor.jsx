import React, { useState } from 'react';
import '../Styles/TextArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold } from '@fortawesome/free-solid-svg-icons';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

import {
    addDoc,
    collection
} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';

function TextEditor() {

    const NotesCollection = collection(db, "notes");
    const navigate = useNavigate();

    const [titleFocused, setTtitleFocused] = useState(false);
    const [paraFocused, setparaFocused] = useState(false);
    const [fontSize, setfontSize] = useState(4);
    const [user, setuser] = useState("");
    const [title, settitle] = useState("");
    const [para, setpara] = useState("");
    const [message, setmessage] = useState("");
    const onFocus = () => {
        setTtitleFocused(true);
        setparaFocused(false);
    }

    const onBlur = () => {
        setparaFocused(true);
        setTtitleFocused(false);
    }

    // function for bold
    function handleBold() {
        if (titleFocused == true) {
            document.getElementById('titleArea').style.fontWeight = 'bold';
        } else {
            document.getElementById('textArea').style.fontWeight = 'bold';
        }
    }

    // function for italic
    function handleItalic() {
        if (titleFocused == true) {
            document.getElementById('titleArea').style.fontStyle = 'Italic';
        } else {
            document.getElementById('textArea').style.fontStyle = 'Italic';
        }
    }

    // function for Upper case
    function handleUpper() {
        if (titleFocused == true) {
            document.getElementById('titleArea').style.textTransform = 'Uppercase';
        } else {
            document.getElementById('textArea').style.textTransform = 'Uppercase';
        }
    }

    // function for Lower case
    function handleLower() {
        if (titleFocused == true) {
            document.getElementById('titleArea').style.textTransform = 'Lowercase';
        } else {
            document.getElementById('textArea').style.textTransform = 'Lowercase';
        }
    }

    // function for capital case
    function handleCapitalize() {
        if (titleFocused == true) {
            document.getElementById('titleArea').style.textTransform = 'Capitalize';
        } else {
            document.getElementById('textArea').style.textTransform = 'Capitalize';
        }
    }

    // function for font size
    function handleFontSize() {
        if (titleFocused == true) {
            document.getElementById('titleArea').style.fontSize = fontSize + 'px';
        } else {
            document.getElementById('textArea').style.fontSize = fontSize + 'px';
        }
    }

    let LocalUser = window.localStorage.getItem("noteByUser");


    async function handleText() {

        if (user === '' && LocalUser === null) {
            setmessage("we do not remeber you, please enter your name.")
        } else if (para === '' && title.length < 10) {
            setmessage("para should be filled if title lenght is less than 10");
        } else if (title === '') {
            setmessage("title should be written.")
        } else {

            window.localStorage.setItem('noteByUser', LocalUser === null ? user : LocalUser);

            await addDoc(NotesCollection, {
                user: LocalUser === null ? user.split(' ').join('-') : LocalUser,
                para: para,
                title: title,
                paraBold: document.getElementById('textArea').style.fontWeight === 'bold' ? true : false,
                paraCapital: document.getElementById('textArea').style.textTransform === 'Capitalize' ? true : false,
                paraFont: document.getElementById('textArea').style.fontSize === '' ? '8px' : document.getElementById('textArea').style.fontSize,
                paraItalic: document.getElementById('textArea').style.fontStyle === 'Italic' ? true : false,
                paraLower: document.getElementById('textArea').style.textTransform === 'Lowercase' ? true : false,
                paraUpper: document.getElementById('textArea').style.textTransform === 'Uppercase' ? true : false,
                titleBold: document.getElementById('titleArea').style.fontWeight === 'bold' ? true : false,
                titleCapital: document.getElementById('titleArea').style.textTransform === 'Capitalize' ? true : false,
                titleFont: document.getElementById('titleArea').style.fontSize === '' ? '16px' : document.getElementById('titleArea').style.fontSize,
                titleItalic: document.getElementById('titleArea').style.fontStyle === 'Italic' ? true : false,
                titleLower: document.getElementById('titleArea').style.textTransform === 'Lowercase' ? true : false,
                titleUpper: document.getElementById('titleArea').style.textTransform === 'Uppercase' ? true : false

            })
                .then(() => {
                    navigate(`/YourNote/${LocalUser === null ? user : LocalUser}`)
                })
                .catch((err) => {
                    console.log(err);
                })


        }
    }


    return (
        <div id='Note' className="container">
            <h2>Write whatever you lived and what you thought.</h2>
            <p style={{ color: 'red' }}>{message}</p>
            <div className="char">
                <button onClick={handleBold} className="bold"><FontAwesomeIcon icon={faBold} /></button>
                <button onClick={handleItalic} className="italic"><FontAwesomeIcon icon={faItalic} /></button>
                <button onClick={handleUpper} className="upperCase">A</button>
                <button onClick={handleLower} className="lowerCase">a</button>
                <button onClick={handleCapitalize} className="camelCase">Capitalize</button>
                <button onClick={handleFontSize} className="font">fonts <select className="form-control" id="sel1" onChange={(e) => setfontSize(e.target.value)}>
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                    <option value={24}>24</option>
                    <option value={28}>28</option>
                    <option value={32}>32</option>
                    <option value={36}>36</option>
                    <option value={40}>40</option>
                    <option value={44}>44</option>
                    <option value={48}>48</option>
                    <option value={52}>52</option>
                    <option value={56}>56</option>
                    <option value={58}>58</option>
                </select></button>
                {LocalUser === null ? <p>Enter Your Name: <input onChange={(e) => setuser(e.target.value)} /></p> : null}
            </div>
            <textarea onChange={(e) => settitle(e.target.value)} onFocus={onFocus} name="" id="titleArea" placeholder='Add Title...' cols="100" rows="5"></textarea>
            <textarea onChange={(e) => setpara(e.target.value)} onFocus={onBlur} name="" id="textArea" cols="100" placeholder='Write Description...' rows="30"></textarea>
            <button onClick={handleText} className='addBtn' >Add This</button>
        </div>
    )
}

export default TextEditor;