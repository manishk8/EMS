let initialState = {
    category: [],
    name: '',
    price: '',
    date: '',
    budget: '',
    expense: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expense: action.data
            }
        case "ADD_CATEGORY":
            return {
                ...state,
                category: action.data
            }
        case "ADD_BUDGET":
            return {
                ...state,
                budget: action.data
            }
        default: return state
    }
}