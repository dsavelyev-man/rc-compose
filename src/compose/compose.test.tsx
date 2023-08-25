import React, {useEffect} from "react";
import compose from "./index";
import {render} from "@testing-library/react";

test("basic compose init", () => {
    //@ts-ignore
    const Component = (props, data) => {

        useEffect(() => {
            data.state.count.actions.add()
        }, [])

        useEffect(() => {
            console.log(data.state)
        })

        return <div>Hello rc-compose</div>
    }
    // const ComposedComponent = compose(Component, {
    //     state: {
    //         show: () => ({
    //             //@ts-ignore
    //             value: false
    //         })
    //     }
    // })

    const Data = compose(Component, {
        state: {
            //@ts-ignore
            count: () => ({ value: 1, actions: {
                add: (value: any) => value+1
            } })
        }
    })

    //@ts-ignore
    const component = render(<Data/>)
})