import { screen, render } from "@testing-library/react";
import App from "./App";

test("Take snapshot",()=>{
    let app= render(<App/>)
    expect(app).toMatchSnapshot() /*we do not use any command for snapshot this code is enough to create a snapshot file */
})

/*How snapshot testing works?
1)Snapshot testing is mainly dependent on the timing when we do it. The snapshot testing is mainly done when our coding/developement is
completed and we are ready to move it to the production or when our developement part is done and it is yet to move to the production. 
2) When app goes to the production and it gets crashed or any major bug is reported then there are chances that while moving it
to the developmenet there might be some issue occured and some changes have been made after taking the snapshot and that change is
causing an issue
3) Now when build comes back to development because of an issue then we can easly compare it with the snapshot which we have 
stored in our system. 
4)Snapshot is basically a normal code which is stored under the __snapshot__ folder with the extention of Snapshot.test.js.snap
5)After taking some snapshot and we make some valid changes to our file and when we run our test files then it will fail because 
our earlier snapshot is different and bacause of changes which we made it is causing an issue. 
6) Now changes are valid, so we can press "w" in CLI and there we will get multiple options to update the snapshot file and some
other options as well*/