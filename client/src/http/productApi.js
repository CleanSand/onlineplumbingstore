import { $authHost, $host } from './index'
import jwtDecode from 'jwt-decode'

export const createCategory = async (category) => {
  const {data} =  await $authHost.post('api/category', category)
  return data
}
export const fetchCategory = async () => {
  const {data} =  await $host.get('api/category')
  return data
}
export const createSubcategory = async (subcategory) => {
  const {data} =  await $authHost.post('api/subcategory', subcategory)
  return data
}
export const fetchSubcategory = async () => {
  const {data} =  await $host.get('api/subcategory')
  return data
}
export const createProduct = async (Product) => {
  const {data} =  await $authHost.post('api/product', Product)
  return data
}
export const fetchProduct = async () => {
  const {data} =  await $host.get('api/product')
  return data
}
export const fetchOneProduct = async (IDProduct) => {
  const {data} =  await $host.get('api/product/' + IDProduct)
  return data
}