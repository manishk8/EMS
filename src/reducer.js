let initialState = {
    categoryStore: '',
    nameStore: '',
    priceStore: '',
    dateStore: '',
}

export const reducerName = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                categoryStore: action.data.categoryStore,
                nameStore: action.data.nameStore,
                priceStore: action.data.priceStore,
                dateStore: action.data.dateStore,
            }
        default: return state
    }
}