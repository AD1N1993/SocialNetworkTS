import React from "react";

import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("Profile Status component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} updateUserStatusThunk={()=>{}}/>);
        const instance = component.getInstance();
       if(instance)  expect(instance.state.status).toBe("it-kamasutra.com");
    });
    test("component element should be span", () => {
        const component = create(<ProfileStatus status={"it-kamasutra.com"} updateUserStatusThunk={()=>{}}/>);
        const instance = component.getInstance();
        // @ts-ignore
        let span = instance.findByType("span")
        // @ts-ignore
        expect(span.length).toBe(1);
    });
});