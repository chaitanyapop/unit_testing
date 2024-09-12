function First()
{
    return(
        <div>
            <p>Hello world</p>
            <input type="text" placeholder="Enter your name" name="UserName" value="Chaitanya" readOnly></input>{/*readOnly means the
            value present inside it will not change and it will remain as it is theere is no need to use onChnage event */}
        </div>
    )
}
export default First