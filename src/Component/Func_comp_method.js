import { useState } from "react"

function Func_comp_method()
{
    let [data, setData]=useState("")
    function ChangeData()
    {
        setData("World")
    }
    return(
        <div>
            <p >The text value is {data}</p>
            <button  data-testid="TextValue" onClick={ChangeData}>Update</button>
        </div>
    )
}
export default Func_comp_method
//data-testid is used when we want to get the data on the basis of testid and this id we cannot use inside css