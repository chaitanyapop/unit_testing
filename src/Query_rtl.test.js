import { render, screen} from "@testing-library/react";
import App from "./App";

describe("Testing using queyBy",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Testing using queryBy",()=>{
        let element= screen.queryByText("Login")// if we use getByText here then it will give the error because it checks in dom but
        // query checks inside the code therefore we are not getting an error
        expect(element).not.toBeInTheDocument()
    })
    /*The above test is getting passed. In our DOM the "Logout" button is visible but "Login" button is not visible still our test is passing
    the reason is Query RTL queuries looks into the code. If we do not use "not" then it will fail because in DOM the login is not present
    but in the code it is present. If we use getByText and use not in expect then that will fail because when we use getByText it compres
    only at DOM level but in query it compares at code level as well.
    
    let element= screen.getByText("Login") if we write this then without assertion only it will throw an error that element cannot be found
    because it compares at DOM level but in query it compares at code level*/
})