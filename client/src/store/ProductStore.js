import { makeAutoObservable } from 'mobx'

export default class ProductStore{
  constructor () {
    this._products = []
    this._categories = []
    this._subcategories = []
    this._selectedCategory = []
    makeAutoObservable(this)
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
  setSelectedSubCategories(subcategories){
    this._selectedSubCategories = subcategories
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
  get SelectedSubCategories(){
    return this._selectedSubCategories
  }
}