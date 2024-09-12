import { useState } from "react"

function Event()
{
    let [text_value, setText]=useState("")
    let[text, setDomText]=useState("")
    function Change_text(e)
    {
        setText(e.target.value)
    }
    function Change_button_text()
    {
        setDomText("Hello world")
    }
    return(
        <div>
            <input type="text" value={text_value} onChange={Change_text}></input>
            <button onClick={Change_button_text}>Click me</button>
            <p>{text}</p>
        </div>
    )
}
export default Event