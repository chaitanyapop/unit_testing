import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Testing events in the DOM",()=>{
    beforeAll(()=>{
        console.log("Before all is running............")
    })
    beforeEach(()=>{
        console.log("....running before each")
        render(<App/>)
    })
    /* like beforeEach and beforeAll we have afterEach and afterAll which behaves in a same way just they execute after the test case
    execution */
    test("Testing onChange event for text box",()=>{
        
        let textBoxDOM=screen.getByRole("textbox")
        fireEvent.change(textBoxDOM,{target:{value:"abc"}})
        /*FireEvent is from react testing library. What we are saying here, when we want to fire an OnChange event on DOM element 
        which we get by using screen.getByRole() then we use fireEvenet.change() function. Inside that, we have to pass textBoxDom as 
        our argument and target-->value-->"value" we have tp pass */
        expect(textBoxDOM.value).toBe("abc")
    })
    test("Testing click event",()=>{
       
        let buttonDom=screen.getByRole("button")
        fireEvent.click(buttonDom)
        expect(screen.getByText("Hello world")).toBeInTheDocument() 
    })
})