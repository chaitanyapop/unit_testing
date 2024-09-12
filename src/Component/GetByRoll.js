function GetByRoll()
{
    return(
        <div>
            <p>This is all about getByRoll</p>
            <label htmlFor="username">User name</label> 
            {/* this html is for the element whose id is "username" because in input tag we cannot write HTML*/}
            <input type="text" id="username"></input>
            <button>Sign in</button>
            <label htmlFor="password">User password</label>
            <input type="text" id="password"></input>
            <button>Sign up</button>
            <div role="simpleText">Hello word</div>
        </div>
    )
}
export default GetByRoll