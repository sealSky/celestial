import * as types from './action-type'

interface StatusStateFace {
  name: string;
  age: number | string;
}

const statusState: StatusStateFace = {
  name: '姓名',
  age: 18
}

export const setUser = (state = statusState, action: any = {}) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...state, ...{user_data: action.user_data} }
    default:
      return state;
  }
}

export default {
  setUser
}