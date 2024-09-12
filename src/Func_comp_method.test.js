import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";
import Sum from "./Function/TestSetup";

describe("Running test cases for methods of functional comp",()=>{
    beforeEach(()=>{
        console.log("I am executing this .................................................")
        render(<App/>)
    })
    test("Tess text present on the click event",()=>{
        let Dom_element=screen.getByTestId("TextValue")
        //console.log(Dom_element)
        fireEvent.click(Dom_element)
        expect(screen.getByText("The text value is World")).toBeInTheDocument()
    })
    test("Testing a function which is outside functional component",()=>{
        expect(Sum()).toMatch("Hi") // function is returning something and we are checking whether returned value is equal to expected or not
    })
}) 

/* This is the way to check functional component method in unit testing but to test pure methods only which are present inside the
functional component then we cannot do it. There is a way to test those fucntions is we can take those functions outside the functional
component and then we can test them */