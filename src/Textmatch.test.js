import { screen, render } from "@testing-library/react";
import App from "./App";

describe("Learning how to match the text",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Matching text",()=>{
        let data=screen.getByText("el",{exact:false})
        expect(data).toBeInTheDocument()
    })
    /*There is a functional approach as well to test the text present in an element */
    test("functional appraoch",()=>{
        let a= screen.getByText((content, element)=>{return content.startsWith("He")})
        let b= screen.getByText((content, element)=>{return content.endsWith("lo")})
        let c= screen.getByText((content, element)=>{return content.includes("el")})
    })
    /*these a, b, c has internal assertions performed when it is checking startswith endswith etc and it returns a boolean value. */
})

/*What does exact false do ?
when we are getting a dom element using getByText and if we do not want to perform a exact comparison with the text present in the DOM 
then we can set the flag as false. Now in DOM it has 'hello' but here we are telling we just need to have "el" in else anything can
be there. */