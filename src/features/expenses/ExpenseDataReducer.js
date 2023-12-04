function ExpenseDataReducer(state, action) {
  switch (action.type) {
    case 'loaded': {
      return action.state
    }

    case 'added': {
      return [
        ...state,
        {
          id: '_client',
          name: '',
          amount: 0,
          category: '',
          origin: '',
          type: '',
          current: 0,
          installment: 0,
        },
      ]
    }

    case 'changed': {
      return state.map((item) => {
        if (item.id === action.state.id) {
          return action.state
        } else {
          return item
        }
      })
    }

    case 'deleted': {
      return state.filter((item) => item.id !== action.id)
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export default ExpenseDataReducer
