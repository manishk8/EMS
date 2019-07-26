let initialState = {
    category: [],
    name: '',
    price: '',
    date: '',
    budget: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                category: action.data,
                name: action.data,
                price: action.data,
                date: action.data
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