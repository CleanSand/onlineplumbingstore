import { makeAutoObservable } from 'mobx'
import jwtDecode from 'jwt-decode'

export default class UserStore{
  constructor () {
    this._isAuth = localStorage.token ? true : false
    this._user = localStorage.token ? jwtDecode(localStorage.token) : {}
    makeAutoObservable(this)
  }
  setIsAuth(bool){
    this._isAuth = bool
  }
  setUser(user){
    this._user = user
  }
  onLogout() {
    this._user = {}
    this._isAuth = false
    localStorage.removeItem('token')
  }
  get isAuth(){
    return this._isAuth
  }
  get user(){
    return this._user
  }
}