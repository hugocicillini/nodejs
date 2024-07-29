export async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    total: price * quantity
  }
}