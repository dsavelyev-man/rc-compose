import {FC} from "react";
import appendUseState, {State} from "./hooks/appendUseState";
import {FCExtended} from "./FCExtended";

export type ComposeData = {
    state?: State
}

const dataFunctions = {
    state: appendUseState
}


const compose = <T,>(component: FC, data: ComposeData): T => {
    let key: keyof ComposeData;

    // for (key in data) {
    //     dataFunctions[key](component as FCExtended, data[key] as State)
    // }

    const elementType = {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: component,
    };

    return component as T
}

export default compose