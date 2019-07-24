export function addExpense(data) {
    return {
        type: 'ADD_EXPENSE',
        data
    }
}

export function addCategoryName(data) {
    return {
        type: "ADD_CATEGORY",
        data
    }
}

export function addBudgetName(data) {
    return {
        type: "ADD_BUDGET",
        data
    }
}