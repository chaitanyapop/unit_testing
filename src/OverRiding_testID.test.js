import { screen, configure, render } from "@testing-library/react";
import App from "./App";

describe("Overriding an attribute for getByTestId",()=>{
    beforeEach(()=>{
        configure({testIdAttribute:"id"})
        /*What I am doing here is, instead of creating new attribute called data-testID, I am using existing "id" as a test-id parameter.
        using that I can use RTL Query getByTestID and I can put "id" of that DOM element inside it */
        render(<App/>)
    })
    test("Testing an element with ID",()=>{
        let data= screen.getByTestId("para")
        expect(data).toBeInTheDocument()
    })
})
/*Earlier we have to use new attribute in tags which is data-testID which mainly used to set testID and then we can get the element using
the testID in unit testing. It creates one more attribute in an element instead of doing that we have id classes present in an element
we can ustilise them only as our testID. To use ID CLASSES as a testID we have configure them first using a configure method.
In configure method we have to pass one object and inside that object we have to pass a parameter which is testIdAttribute and we can
give any value to it curretly I want to use "ID" as a testID therefore I have put ID there else we can put class as well etc.. */