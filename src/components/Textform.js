import React, { useState } from 'react'

export default function Textform(props) {
const [text,setText]=useState(" ");
const handleOnChange=(event)=>{
         setText(event.target.value)
}
const handleUpText=(event)=>{
    let newtext= text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase" ,"success")
}
const handletoText=(event)=>{
  let newtext= text.toLowerCase();
  setText(newtext)
  props.showAlert("Converted to lowercase " ,"success")
}
 const handlecleartext=(event)=>{
  let newtext= ("");
  setText(newtext)
  props.showAlert("Text has been cleared " ,"success")
}
const handlecopytext=()=>{
  navigator.clipboard.writeText(text)
  props.showAlert("Text copy to clipboard" ,"success")
}
const handleremove=()=>{
  let newText= text.split(/[ ]+/)
 setText(newText.join(" "))
 props.showAlert("Spaced removed from text" ,"success")
}
  return (
    <>
    <div className='container' style={{color: props.mode==="dark"? "white":"#224650"}}>
      <h1>{props.heading}</h1>
      <div className="mb-5"  >
   <label for="mybox" className="form-label" >Textarea</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"? "rgb(90 120 129)":"white", color:props.mode==="dark"? "white":"black"}} id="mybox" rows="8"></textarea>
</div>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpText}>Convert to Uppercase</button>
   <button  disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handletoText}>Convert to lowerCase</button>
   <button  disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handlecleartext}>Clear text</button>
   <button  disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handlecopytext}>Copy text</button>
   <button disabled={text.length===0}className="btn btn-primary  mx-1 my-1" onClick={handleremove}>Remove space</button>
    </div >
    <div className='container' style={{color:props.mode==="dark"? "white":"#042743"}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} character</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!== 0}).length}Minutes read</p>
     <h2>Preview</h2>
    <p>{text.length>0?  text:"Nothing to preview"}</p> 
    </div>
    </>        
  )

}
