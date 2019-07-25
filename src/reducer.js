let initialState = {
    categoryStore: '',
    nameStore: '',
    priceStore: '',
    dateStore: '',
    addCategoryStore: '',
    addBudget: ''
}

export const reducerName = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                categoryStore: action.data,
                nameStore: action.data,
                priceStore: action.data,
                dateStore: action.data
            }
        case "ADD_CATEGORY":
            return {
                ...state,
                addCategoryStore: action.data
            }
        case "ADD_BUDGET":
            return {
                ...state,
                addBudget: action.data
            }
        default: return state
    }
}