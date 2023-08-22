import React, {useEffect} from "react";
import compose from "./index";
import {render} from "@testing-library/react";
import forwardRef from "./ref";

test("basic compose init", () => {
    //@ts-ignore
    const Component = (props, ref) => {

        useEffect(() => {
            console.log(ref)
        }, [])

        return <div ref={ref}>Hello rc-compose</div>
    }
    // const ComposedComponent = compose(Component, {
    //     state: {
    //         show: () => ({
    //             //@ts-ignore
    //             value: false
    //         })
    //     }
    // })

    const Data = forwardRef(Component)

    //@ts-ignore
    const component = render(<Data/>)
})