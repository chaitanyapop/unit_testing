import { screen, render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { act } from "react";

describe("Testing events",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Testing on click event",()=>{
        let ele=screen.getByText("Click me")
        act(()=>{userEvent.click(ele)})
        expect(screen.getByText("Second data")).toBeInTheDocument()

    })
    test("Testing on change event",()=>{
        let ele=screen.getByRole("textbox")
        act(()=>{userEvent.type(ele,"Chaitanya")})
        expect(screen.getByText("Chaitanya")).toBeInTheDocument()

    })
    /*Here we have used 'userEvent to handle the events or actions performed by the user. Earler we have used fireEvent but isntead of
    using that the userEvent is a RTL library and it is an efficient approach than earlier one. We have wrapped our userEvent under the
    act function the reason is userEvent takes some time to perform the userEvent but before userEvent happens the assertions gets called
    and in conside we can see the warning to avoid it we wrap userEvent under the act functio whcih first executes the userEvent then only
    it calls the assertions. */
})