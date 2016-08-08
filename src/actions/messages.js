export const DISPLAY_MESSAGE="DISPLAY_MESSAGE"

export function displayMessage(message){
    return {
        type: DISPLAY_MESSAGE,
        payload: message
    }
}