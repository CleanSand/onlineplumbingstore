import { $authHost, $host } from './index'
import jwtDecode from 'jwt-decode'

export const registration = async (PhoneNumber, Password, Email, LastName, SecondName, FirstName, BirthDate) => {
  const {data} = await $host.post('api/user/registration', { PhoneNumber, Password, Email, LastName, SecondName, FirstName, BirthDate, IDRole: 2 })
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}
export const login = async ( PhoneNumber, Password  ) => {
  const {data} =  await $host.post('api/user/login', { PhoneNumber, Password})
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}
export const updateUser = async (user) => {
  const {data} =  await $host.patch('api/user/', user)
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}
export const ChangePassword = async (user) => {
  const {data} =  await $host.patch('api/user/changePassword', user)
}
export const check = async (User) => {
  try {
    const {data} = await $authHost.get('api/user/auth', User)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
  }
  catch (e) {
    console.log(e)
  }
}