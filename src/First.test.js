import { screen, render } from "@testing-library/react";
import App from "./App";


test("Testing react App",()=>{
    render(<App/>)
    let text=screen.getByText("Hello world")
    expect(text).toBeInTheDocument() // this checks wheather the text is there in DOM or not and like getByText we have multiple function
    // getByTitle etc..
})

test("Testing the user input box",()=>{
    render(<App/>)
    let textbox=screen.getByRole("textbox")/*by using this we can capture the DOM element. Example if we want button then instead 
    of textbox the "button" will come. Here we get all the attibutes of the given DOM elements */
    let placeholder=screen.getByPlaceholderText("Enter your name")/*Using this method as well we can get the placeholder */

    expect(textbox).toBeInTheDocument()
    //expect(placeholder).toBeInTheDocument()
    expect(textbox).toHaveAttribute("placeholder","Enter your name")
    expect(textbox).toHaveAttribute("name","UserName")
    expect(textbox).toHaveAttribute("value","Chaitanya")/*Here we have set the default value therefore it will give us an error that
    you have not mentioned onChange event but is is fine as we are expecting a default value and to not to get an error in our react
    file we can mention 'read only' then this error will not be shwon */


})