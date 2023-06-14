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
export const check = async () => {
  try {
    const {data} = await $authHost.get('api/user/auth', )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
  }
  catch (e) {
    console.log(e)
  }
}