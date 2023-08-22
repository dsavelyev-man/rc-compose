import {FC} from "react";
import {FCExtended} from "../FCExtended";

export type State = {
    [key: string]: <T,>() => {
        value: T
        actions: (state: T) => T
    }
}

const appendUseState = (component: FCExtended, state: State) => {
    component.state = {}

    for (const key in state) {
        const data = state[key]();

        component.state[key] = [data.value, {}]
    }
}

export default appendUseState