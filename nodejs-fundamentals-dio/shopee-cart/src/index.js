import { createItem } from "./services/item.js"
import { addItem, displayCart, deleteItem, removeItem, calculateTotal } from "./services/cart.js"

const userCart = []
const favoriteItems = []

const item1 = await createItem("Celular", 1000, 1)
const item2 = await createItem("Tablet", 2000, 2)
const item3 = await createItem("IPhone", 3000, 3)

addItem(userCart, item1)
addItem(userCart, item2)
addItem(userCart, item3)

deleteItem(userCart, "Tablet")

removeItem(userCart, item3)

displayCart(userCart)

console.log(await calculateTotal(userCart))


