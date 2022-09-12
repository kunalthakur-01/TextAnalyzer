import React, {useState} from 'react'

export default function TextForms(props) {

  const handleUpClick= () => {
  //  console.log("Uppercase was Clicked");
   let newText = text.toUpperCase();
   setText(newText);
 }
 
 const handleResetClick= () => {
  //  console.log("Uppercase was Clicked");
   let newText = "";
   setText(newText);
 }
 

 const handleOnChange= (event) => {
  // console.log("On Change");
  setText(event.target.value);
}

 
  const [text,setText] = useState("");


  return (
    <>
    <div className="container">
      <h1 className = "text-center my-3"> {props.heading}</h1>
      <div className="container ">
  <textarea className="form-control" value = {text} onChange={handleOnChange} placeholder="Enter your text" id="floatingTextarea" rows= "12"></textarea>
<button className="btn btn-primary my-3"onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2"onClick={handleResetClick}> Reset </button>
</div>

</div>
<div className="container my-3">
  {/* <h1>Your Text Summary</h1> */}
   {/* <p>{text.split(" ").length} words and {text.length} characters</p>  */}
</div>
</>
  )
}
