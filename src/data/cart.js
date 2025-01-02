const cart = []; // Keranjang belanja
const orders = [
  { id: 1, items: [{ name: "Nasi Goreng", quantity: 2 }], status: "Pending" },
  { id: 2, items: [{ name: "Mie Ayam", quantity: 1 }], status: "Pending" },
]; // Daftar pesanan
const menu = [
  { id: 1, name: "Nasi Goreng", price: 25000, available: true },
  { id: 2, name: "Mie Ayam", price: 20000, available: true },
  { id: 3, name: "Ayam Goreng", price: 30000, available: true },
];

module.exports = {
  cart,
  orders,
  menu,
};