import { useEffect, useState } from "react"


function FindBy()
{
    let[flag, setFlag]=useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setFlag(true)
        },5000)
    },[])
    return(
        <div>
            {flag && <p>Hello world</p>}
        </div>
    )
}
export default FindBy