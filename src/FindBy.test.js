import { screen, render, fireEvent} from "@testing-library/react";
import App from "./App";

describe("Testing findBy RTL",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Testing using setTimeOut",async()=>{
        let ele= await screen.findByText("Hello world",{},{timeout:6000})
        expect(ele).toBeInTheDocument()
    })

    /*Here it is waiting for that element to appear in the DOM and then assertion happens. The defaut wait time is 1 sec but we can set it
    in the 3rd argument as timeout to 6000 or anytbing we want.
    
    Main difference between getByText and findByText is, getByText is an synschronous operation and try to find an element immediately
    whereas findByText is an asynchronous operation and it can wait for an element to appear on the screen*/
})