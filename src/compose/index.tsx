import {FC} from "react";
import appendUseState, {State} from "./hooks/appendUseState";
import {FCExtended} from "./FCExtended";

export type ComposeData = {
    state?: State
}

const dataFunctions = {
    state: appendUseState
}


const compose = <T, P>(component: FC, data: ComposeData) => {
    let key: keyof ComposeData;

    const computed: any = {

    }

    //ts-ignore
    return (props: Parameters<typeof component>) => {
        for (key in data) {
            dataFunctions[key](computed, data[key] as State)
        }

        return component({ ...props }, computed)
    }
}

export default compose