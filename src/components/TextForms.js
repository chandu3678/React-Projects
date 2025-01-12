import React, { useState } from 'react'


export default function TextForms(props) {
    const [text, setText] = useState("")
    const UpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to UpperCase", "success")
    }
    const LowerCase =()=>{
        let newText= text.toLowerCase();
        setText(newText)
    }
    const ClearText = () => {
        let newText = "";
        setText(newText)
        //props.showAlert("Text Cleared", "success")
    }
    const copyText = () => {
        let copyText = document.getElementById('textBox')
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText.value);
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }


    return (
        <>
            <div className='container my-3'>
                <h2>Enter Your text Here</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
                </div>
                <div className="container">
                    <h3>Your Text summary</h3>
                    <h6>{text.split(" ").length} words and {text.length} characters</h6>
                </div>
                <button className="btn btn-primary my-3 " onClick={UpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary ms-3" onClick={LowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={ClearText}>Clear Text</button>
                <button className="btn btn-primary " onClick={copyText}>Copy Text</button>
                

            </div>

        </>
    )
}
