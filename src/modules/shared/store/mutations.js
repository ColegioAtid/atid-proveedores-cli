export const setShowErrorOrSuccessAlert = (state, value) => {
    if (state.successError === value.success) {
        state.successError = !state.successError;
    } else {
        state.successError = value.success;
    }
    state.activeAlert = !state.activeAlert
    state.successError = value.success;
    state.messageAlert = value.message;
}

export const setActiveSheetAlert = (state) => {
    state.successError = null,
        state.activeAlert = !state.activeAlert
}

export const setOverlayState = (state, payload) => {
    state.overlayState.text = payload.text
    state.overlayState.visible = payload.visible
}