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
export const createManufacturer = async (manufacturer) => {
  const {data} =  await $authHost.post('api/manufacturer', manufacturer)
  return data
}
export const fetchManufacturer = async () => {
  const {data} =  await $host.get('api/manufacturer')
  return data
}
export const createSubcategory = async (subcategory) => {
  const {data} =  await $authHost.post('api/subcategory', subcategory)
  return data
}
export const fetchSubcategory = async (id) => {
  const base_url = 'api/subcategory'
  const {data} =  await $host.get(id ? (base_url + '?IDCategory=' + id) : base_url)
  return data
}
export const createProduct = async (Product) => {
  const {data} =  await $authHost.post('api/product', Product)
  return data
}
export const fetchProduct = async (IDSubCategory) => {
  const base_url = 'api/product'
  const {data} =  await $host.get( IDSubCategory ? (base_url + '?IDSubcategory=' + IDSubCategory ) : base_url)
  return data
}
export const fetchOneProduct = async (IDProduct) => {
  const {data} =  await $host.get('api/product/' + IDProduct)
  return data
}
export  const deleteProduct = async (IDProduct) =>{
  const {data} = await $authHost.delete('api/product/' + IDProduct)
  return data
}
export  const updateProduct = async (IDProduct) =>{
  const {data} = await $authHost.patch('api/product/' + IDProduct)
  return data
}