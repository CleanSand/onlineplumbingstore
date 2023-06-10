import { $host } from './index'

export const registration = async (Email, Password, LastName, SecondName, FirstName, BirthDate, PhoneNumber ) => {
  const {data} = await $host.post('api/user/registration', { Email, Password, LastName, SecondName, FirstName, BirthDate, PhoneNumber, IDRole: '1' })
  return data
}
export const login = async (Email, Password, PhoneNumber ) => {
  return await $host.post('api/user/registration', { Email, Password, PhoneNumber})
}
export const check = async () => {
  return await $host.post('api/user/registration', )
}