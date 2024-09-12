import { screen, render } from "@testing-library/react";
import App from "./App";

describe.skip("Test group 1",()=>{
    test("Testing react App",()=>{
        render(<App/>)
        let text=screen.getByText("Hello world")
        expect(text).toBeInTheDocument() // this checks wheather the text is there in DOM or not and like getByText we have multiple function
        // getByTitle etc..
    })
    
})
describe.only("Test group 2",()=>{
    test("Testing the user input box",()=>{
        render(<App/>)
        let textbox=screen.getByRole("textbox")/*by using this we can capture the DOM element. Example if we want button then instead 
        of textbox the "button" will come. Here we get all the attibutes of the given DOM elements */
        let placeholder=screen.getByPlaceholderText("Enter your name")
    
        expect(textbox).toBeInTheDocument()
        //expect(placeholder).toBeInTheDocument()
        expect(textbox).toHaveAttribute("placeholder","Enter your name")
        expect(textbox).toHaveAttribute("name","UserName")
        expect(textbox).toHaveAttribute("value","Chaitanya")/*Here we have set the default value therefore it will give us an error that
        you have not mentioned onChange event but is is fine as we are expecting a default value and to not to get an error in our react
        file we can mention 'read only' then this error will not be shwon */
    
    
    })
})

/*.only and .skip suffix tells that which test group should execute. If .only is present then only that test group should execute
if .skip is present then it means that test group should be excluded */
