/*
In React Testing library there are certain ways to find ot the element which present in our DOM.
1)To find single element-
 a)getBy
 b)queryBy
 c)findBy
2)To find multiple element-
 a)getAllBy
 b)queryAllBy
 c)findAllBy
 */

import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Here we are testing getByRoll",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Testing the text box present on screen by its role",()=>{
        let inputDom=screen.getByRole("textbox",{name:"User name"}) // when it comes to the input box the name belongs to the label of that input box
        let buttonDom=screen.getByRole("button",{name:"Sign in"})
        let buttonDomInnerHtml=screen.getByRole("button",{name:"Sign in"}).innerHTML
        expect(inputDom).toBeInTheDocument()
        expect(buttonDom).toBeInTheDocument()
        expect(buttonDomInnerHtml).toEqual("Sign in")
        //expect(buttonDom).toHaveValue("Click me")
    })
    test("Elements which are of same type and appeared multiple time",()=>{
       let buttonDomSignin=screen.getByRole("button",{name:"Sign in"}) 
       let buttonDomSignup=screen.getByRole("button",{name:"Sign up"}) 
       let inputTextUsername=screen.getByRole("textbox",{name:"User name"})
       let inputTextPassword=screen.getByRole("textbox",{name:"User password"})

       expect(buttonDomSignin).toBeInTheDocument()
       expect(buttonDomSignup).toBeInTheDocument()
       expect(inputTextUsername).toBeInTheDocument()
       expect(inputTextPassword).toBeInTheDocument()


    })

    test("Testing non-semantic elements",()=>{
        let simpleTextDom=screen.getByRole("simpleText")
        expect(simpleTextDom).toBeInTheDocument()
    })
})