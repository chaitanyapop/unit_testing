import { render, screen } from "@testing-library/react";
import Handeling_prop from "./Component/Handeling_prop";

describe("Testing props",()=>{
    beforeEach(()=>{
        render(<Handeling_prop data="Chaitanya"/>)
    })
    test("Testing props we have passed above",()=>{
        let test_name="Chaitanya"
        let ele= screen.getByText(`the prop data is : ${test_name}`)
        expect(ele).toBeInTheDocument()
    })
})