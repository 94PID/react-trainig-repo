
export function testReducer(state = null, action) {
    switch (action.type) {
        case "TEST":
            return "TEST";
        default:
            return state
    }
}