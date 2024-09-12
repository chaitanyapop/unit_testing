import { render, screen } from "@testing-library/react";
import Handeling_func from "./Component/Handeling_func";
import { act } from "react";
import userEvent from "@testing-library/user-event";

describe("Testing how to handle functio prop",()=>{
    let call_func
    beforeEach(()=>{
        call_func=jest.fn()
        render(<Handeling_func func={call_func}/>) // passing a function as a prop
    })
    test("Tetsing function prop",()=>{
        let ele=screen.getByText("Click me")
        act(()=>{userEvent.click(ele)}) // on click event function is called
        expect(call_func).toHaveBeenCalled() // we are checking whether it is called or not
    })

    /*jest.fn() creates a dummy function which we are passing as a prop to the rendered component and we are just checking that after 
    userEvent click whether than function is being called or not. Here we are not passing the original function just a dummy one. */
})