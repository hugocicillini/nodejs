async function addItem(userCart, item) {
  userCart.push(item)
}

async function displayCart(userCart) {
  userCart.map(item => console.log(item.name, item.price, item.quantity, item.total))
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex(item => item.name === name)
  if (index !== -1) {
    userCart.splice(index, 1)
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex(element => element.name === item.name)

  if (indexFound === -1) {
    return console.log("Item não encontrado!")
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1
  }

  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1)
  }

}

async function calculateTotal(userCart) {
  return "Total: R$" + userCart.reduce((total, item) => total + item.total, 0)
}

export { addItem, displayCart, deleteItem, removeItem, calculateTotal }