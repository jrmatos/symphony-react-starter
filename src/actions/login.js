import { LOGIN } from './types'

export const doLogin = payload => ({
  type: LOGIN,
  payload
})
