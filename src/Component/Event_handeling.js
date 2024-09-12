import { useState } from "react"

function Event_handeling()
{
    let[data, setData]=useState("First data")
    let [val,setVal]=useState()
    function click()
    {
        setData("Second data")
    }
    function change(e)
    {
        setVal(e.target.value)
    }
    return(
        <div>
            <p>{data}</p>
            <button onClick={click}>Click me</button>
            <p>Testing input on change</p>
            <input type="text" value={val} onChange={change}></input>
            <p>{val}</p>
        </div>
    )
}
export default Event_handeling