import React from "react";
import {FCExtended} from "../FCExtended";

export type State = {
    [key: string]: <T,>() => {
        value: T
        actions: {
            [key: string]: (value: T, ...args: any) => T
        }
    }
}

const appendUseState = (computed: { state: any }, state: State) => {
    computed.state = {}

    for (const key in state) {
        const data = state[key]();

        computed.state[key] = {
            value: React.useState(data.value),
            actions: {}
        }

        for(const keyAction in data.actions) {
            //@ts-ignore
            computed.state[key].actions[keyAction] = (...args: any) => computed.state[key].value[1]((s) => data.actions[keyAction](s, ...args))
        }
    }
}

export default appendUseState