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
                categoryStore: action.data.categoryStore,
                nameStore: action.data.nameStore,
                priceStore: action.data.priceStore,
                dateStore: action.data.dateStore
            }
        case "ADD_CATEGORY":
            return {
                addCategoryStore: action.data.addCategoryStore
            }
        case "ADD_BUDGET":
            return {
                addBudget: action.data.addBudget
            }
        default: return state
    }
}