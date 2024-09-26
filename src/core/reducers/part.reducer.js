const initialState = {
    selectedPartIds: [],
    selectedPart: null,
    parts: []
}

export const partReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SELECTED_ROBOT':
            return {
                ...state,
                selectedPartIds: action.payload?.parts ?? []
            }

        case 'ADD_PARTS':
            return {
                ...state,
                parts: action.payload
            }

        case 'UPDATE_SELECTED_PART':
            return {
                ...state,
                selectedPart: action.payload
            }

        default:
            return state;
    }
}