import { screen, render } from "@testing-library/react";
import App from "./App";

describe("This is all about getAlByRoll",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("multiple buttons testing",()=>{
        let buttons=screen.getAllByRole("button")
        //console.log(buttons)
        for(let i=0;i<buttons.length;i++)
        {
            expect(buttons[i]).toBeInTheDocument() // buttons are in the form of an array
        }
    })
    test("multiple option select",()=>{
        let options=screen.getAllByRole("option")
        for(let i=0;i<options.length;i++)
            {
                expect(options[i]).toBeInTheDocument()
            }
    })
})