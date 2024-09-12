import { getByText, render, screen, within} from "@testing-library/react";
import App from "./App";

describe("Testing inner ele",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Testing inner elements",()=>{
        let ele=screen.getByText("I am Chaitanya")
        expect(ele).toBeInTheDocument()
        let inner=within(ele).getByText("Hello")
        expect(inner).toBeInTheDocument()
    })
    /*within is a function present inside the react testing library which helps us to test that under the parent tag whether particular
    text or particular element is present or not */
})