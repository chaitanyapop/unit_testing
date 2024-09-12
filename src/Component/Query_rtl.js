function Query_rtl()
{
    let flag=false
    return(
        <div>
            <p>Getting the component using the query selector</p>
            {flag ? <button>Login</button> :<button>Logout</button>}
        </div>
    )
}
export default Query_rtl