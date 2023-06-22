import { makeAutoObservable } from 'mobx'

export default class ProductStore{
  constructor () {
    this._basket = []
    this._products = []
    this._historyproducts = []
    this._productsSecond = []
    this._categories = []
    this._subcategories = []
    this._selectedCategory = []
    this._selectedProduct = []
    this._selectedProductSecond = []
    this._selectedSubCategories = []
    this._selectedManufacturers = []
    this._manufacturers = []
    this._page = 1
    this._totalCount = 0
    this._limit = 3
    makeAutoObservable(this)
  }
  setBasket(basket) {
    this._basket = basket
  }
  setManufacturers(manufacturers){
    this._manufacturers = manufacturers
  }
  Clean(){
    this._selectedSubCategories = []
  }
  CleanBasket(){
    this._basket = []
  }

  setProducts(products){
    this._products = products
  }

  setHistoryProduct(historyProducts){
    this._historyproducts = historyProducts
  }
  setProductsSecond(productsSecond){
    this._productsSecond = productsSecond
  }
  setPage(page){
    this._page = page
  }
  setTotalCount(totalCount){
    this._totalCount = totalCount
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
  setSelectedProductSecond(productSecond){
    this._selectedProductSecond = productSecond
  }
  setSelectedSubCategories(subcategories){
    this.setPage(1)
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
  get historyProduct(){
    return this._historyproducts
  }

  get productsSecond(){
    return this._productsSecond
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
  get SelectedProductSecond(){
    return this._selectedProductSecond
  }
  get SelectedSubCategories(){
    return this._selectedSubCategories
  }
  get SelectedManufacturers(){
    return this._selectedManufacturers
  }
  get SelectedProduct() {
    return this._selectedProduct
  }
  get totalCount() {
    return this._totalCount
  }
  get page() {
    return this._page
  }
  get limit() {
    return this._limit
  }
  get basket() {
    return this._basket
  }
}