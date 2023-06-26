import { $authHost, $host } from './index'

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
export const fetchSubcategory = async (IDCategory) => {
  const { data } = await $host.get('api/subcategory', { params: { IDCategory } });
  return data;
};
export const createProduct = async (Product) => {
  const {data} =  await $authHost.post('api/product', Product)
  return data
}
export const fetchProduct = async (IDSubcategory, page, limit, sortType, searchBar) => {
  const {data} =  await $host.get( 'api/product', {params:{
      IDSubcategory,limit, page, sortType, searchBar
    }});
  return data;
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
export  const addToBasket = async (Product) =>{
  const {data} = await $host.post('api/basket/', Product)
  return data
}
export const getAllProductBasket = async (IDUser) => {
  const {data} =  await $host.get( 'api/basket/get-all/', {params: {IDUser}} );
  return data;
}
export const getOneProductBasket = async (IDUser, IDProduct) => {
  const {data} =  await $host.get( 'api/basket/get-one/', {params: {IDUser, IDProduct}} );
  return data;
}
export const deleteFromBasket = async (IDProduct, IDUser) => {
  const {data} =  await $host.delete( 'api/basket/delete', {params:
  {IDProduct, IDUser} });
  return data;
}
export const plusQuantityBasket = async (Basket) => {
  const {data} =  await $host.patch( 'api/basket/plus-quantity', Basket)
  return data
}
export const minusQuantityBasket = async (Basket) => {
  const {data} =  await $host.patch( 'api/basket/minus-quantity', Basket )
  return data
}
export const createPayment = async (payment) => {
  const {data} =  await $host.post( 'api/payment/', payment )
  return data
}
export const getAllHistory = async (IDUser) => {
  const {data} =  await $host.get( `api/payment?IDUser=${IDUser}`)
  return data
}