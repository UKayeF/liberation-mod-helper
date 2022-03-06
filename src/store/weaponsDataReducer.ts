import {Action} from "redux";

interface WeaponsDataAction extends Action {
    payload: string;
}
export enum WeaponsDataActions {
    SET_WEAPONS_DATA,
}
const INITIAL_STATE = '';
export default function weaponsDataReducer(state: string = INITIAL_STATE, action: WeaponsDataAction): string {
    switch (action.type) {
        case WeaponsDataActions.SET_WEAPONS_DATA:
            return action.payload
        default: return state;
    }
}