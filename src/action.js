export function addExpense(data) {
    return {
        type: 'ADD_EXPENSE',
        data
    }
}

export function addCategory(data) {
    return {
        type: "ADD_CATEGORY",
        data
    }
}

export function addBudget(data) {
    return {
        type: "ADD_BUDGET",
        data
    }
}