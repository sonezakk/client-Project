import {SHRIMP_ACTION_ADD} from "../Constants"


export const setStateShrimps = () => ({
    type: SHRIMP_ACTION_ADD
    
})
export const ProductAdd = {
    createShrimp:(data) =>
    {
        return {type: SHRIMP_ACTION_ADD, payload: data}
    }
}

