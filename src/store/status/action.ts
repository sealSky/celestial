import * as types from './action-type'

// 设置用户状态
export const setUser = (user_data) => {
  return {
    type: types.SET_USER,
    user_data,
  }
}