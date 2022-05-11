export const getMessageAlertState = ( state ) => () => {
    return state.messageAlert
}
export const getActiveAlertState = ( state ) => () => {
    return state.activeAlert
}
export const getActiveSuccesAlertState = ( state ) => () => {
    return state.activeScuccesAlert
}
export const getSuccessErrorState = ( state ) => () => {
    return state.successError
}
