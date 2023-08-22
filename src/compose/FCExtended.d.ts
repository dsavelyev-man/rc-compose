import {FC} from "react";

export type FCExtended = {
    state: {
        [key: string]: [any, {[key: string]: (state: any) => any}]
    }
} & FC