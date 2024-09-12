import { screen, render } from "@testing-library/react";
import App from "./App";

describe("Testing multiple assertions",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Testing positive scenarios",()=>{
        let element= screen.getByRole("textbox")
        expect(element).toBeInTheDocument()
        expect(element).toBeEnabled()
        //expect(element).toBeDisabled()
        expect(element).toHaveValue("Chaitanya")
        expect(element).toHaveAttribute('id')
        expect(element).toHaveAttribute('class') // Instead of className 'class' will come
        expect(element).toHaveAttribute('data-testid')
    })

    test("Testing negative scenarios",()=>{
        let element= screen.getByRole("textbox")
        expect(element).not.toHaveValue("haitanya")

        /*Here we are just maintioning that DOM element should not have haitanya value. To check this we just need to put "not" before 
        assertion command */
        /*
        toBe and toEqual are basic assertions */

    })
})