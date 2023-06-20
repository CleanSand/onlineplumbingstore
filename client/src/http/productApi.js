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
  const {data} =  await $host.get('api/subcategory', {params: id})
  return data
}
export const createProduct = async (Product) => {
  const {data} =  await $authHost.post('api/product', Product)
  return data
}
export const fetchProduct = async (IDSubCategory, page, limit = 5) => {
  const {data} =  await $host.get( 'api/product', {params:{
      IDSubCategory,limit, page
    }})
  return data
}
export const fetchOneProduct = async (IDProduct) => {
  return await $host.get('api/product/' + IDProduct)
}
export  const deleteProduct = async (IDProduct) =>{
  const {data} = await $authHost.delete('api/product/' + IDProduct)
  return data
}
export  const updateProduct = async (Product) =>{
  const {data} = await $authHost.patch('api/product/', Product)
  return data
}
export  const addToBasket = async (Basket) =>{
  const {data} = await $host.post('api/basket/', Basket)
  return data
}
export const getAllProductBasket = async (IDUser) => {
  const {data} =  await $host.get( 'api/basket/get-all/', {params: {IDUser}} )
  return data
}
export const getOneProductBasket = async (IDUser, IDProduct) => {
  const {data} =  await $host.get( 'api/basket/get-one/', {params: {IDUser, IDProduct}} )
  return data
}