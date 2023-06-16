import { makeAutoObservable } from 'mobx'

export default class ProductStore{
  constructor () {
    this._products = []
    this._categories = []
    this._subcategories = []
    this._selectedCategory = []
    this._selectedProduct = []
    this._selectedSubCategories = []
    this._selectedManufacturers = []
    this._manufacturers = []
    makeAutoObservable(this)
  }
  setManufacturers(manufacturers){
    this._manufacturers = manufacturers
  }
  Clean(){
    this._selectedSubCategories = []
  }
  setProducts(products){
    this._products = products
  }
  setCategories(categories){
    this._categories = categories
}
  setSubCategories(subcategories){
    this._subcategories = subcategories
  }
  setSelectedCategories(categories){
    this._selectedCategory = categories
  }
  setSelectedProduct(product){
    this._selectedProduct = product
  }
  setSelectedSubCategories(subcategories){
    this._selectedSubCategories = subcategories
  }
  setSelectedManufacturers(manufacturers){
    this._selectedManufacturers = manufacturers
  }
  get manufacturers(){
    return this._manufacturers
  }

  get products(){
    return this._products
  }
  get categories(){
    return this._categories
  }

  get subcategories(){
    return this._subcategories
  }
  get SelectedCategories(){
    return this._selectedCategory
  }
  get SelectedProduct(){
    return this._selectedProduct
  }
  get SelectedSubCategories(){
    return this._selectedSubCategories
  }
  get SelectedManufacturers(){
    return this._selectedManufacturers
  }
}