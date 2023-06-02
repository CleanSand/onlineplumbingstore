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
    makeAutoObservable(this)
  }
  setProducts(products){
    this._prosucts = products
  }

  get products(){
    return this._prosucts
  }
}