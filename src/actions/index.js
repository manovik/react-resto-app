export const menuLoaded = (newMenuValue) => {
  return {
    type:"MENU_LOADED", 
    payload: newMenuValue
  }
}
export const menuRequested = () => {
  return {
    type:"MENU_REQUESTED"
  }
}
export const menuError = () => {
  return {
    type:"MENU_ERROR"
  }
}
export const addedToCart = (id) => {
  return {
    type:"ADD_TO_CART",
    payload: id
  }
}
export const deleteFromCart = (id) => {
  return {
    type:"DELETE_FROM_CART",
    payload: id
  }
}