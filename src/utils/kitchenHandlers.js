const { orders, menu } = require('../data/cart');

// Checklist pesanan
const checklistOrder = (req, res) => {
  const { orderId } = req.body;
  if (!orderId) {
    return res.status(400).json({ message: 'Order ID is required.' });
  }

  // Hapus pesanan dari daftar
  const index = orders.findIndex((order) => order.id === orderId);
  if (index === -1) {
    return res.status(404).json({ message: 'Order not found.' });
  }
  orders.splice(index, 1);

  res.json({ message: 'Order has been checked.', orders });
};

// Tandai menu habis
const markMenuUnavailable = (req, res) => {
  const { menuId } = req.body;
  if (!menuId) {
    return res.status(400).json({ message: 'Menu ID is required.' });
  }

  const menuItem = menu.find((item) => item.id === menuId);
  if (!menuItem) {
    return res.status(404).json({ message: 'Menu not found.' });
  }

  menuItem.available = false;

  res.json({ message: 'Menu marked as unavailable.', menu });
};

module.exports = {
  checklistOrder,
  markMenuUnavailable,
};