
export function testReducer(state = "initialValue", action) {
    switch (action.type) {
        case "TEST":
            return "TEST";
        case "NOTE_FETCH_SUCCEEDED":
            return "SUCCEEDED";
        case "NOTE_FETCH_FAILED":
            return "FAILED";
        default:
            return state
    }
}