import { makeAutoObservable } from 'mobx'

export default class ProductStore{
  constructor () {
    this._prosucts = [
      { IDProduct: 13,
        Name: "13",
        Weight: "2",
        Height: "3",
        Lenght: "4",
        Description: "5",
        Price: "6,00 ?",
        ProductType: "7",
        TypeOfInstallation: "8",
        Colour: "9",
        DesignStyle: "0",
        HousingMaterial: "12",
        VendorCode: "12",
        InStock: 10,
        IDManufacturer: 4,
        Image: "092efa65-56b4-4bbc-b102-bd188210b619.jpg"}
    ]
    this._category = [
      {id: 1, name: 'Залупа'},
      {id: 2, name: 'Залупа2'},
      {id: 3, name: 'Залупа3'},
    ]
    this._subcategories = [
      {id: 1, name: 'подЗалупа'},
      {id: 2, name: 'подЗалупа2'},
      {id: 3, name: 'подЗалупа3'},
    ]
    this._selectedCategory = []
    makeAutoObservable(this)
  }
  setProducts(products){
    this._prosucts = products
  }

  setCategories(categories){
    this._category = categories
}
  setSubCategories(subcategories){
    this._subcategories = subcategories
  }
  setSelectedCategories(categories){
    this._selectedCategory = categories
  }
  setSelectedSubCategories(SubCategories){
    this._selectedSubCategory = SubCategories
  }
  get products(){
    return this._prosucts
  }
  get categories(){
    return this._category
  }

  get subcategories(){
    return this._subcategories
  }
  get SelectedCategories(){
    return this._selectedCategory
  }
  get SelectedSubCategories(){
    return this._selectedSubCategory
  }
}