import { Icons } from "../../../utils/iconConfig";

export const sidebarData = [
  {
    title: 'Main Menu',
    items: [
      { name: 'Dashboard', icon: Icons.FaHome, path: '/dashboard' },
      { name: 'Order Management', icon: Icons.CartIcon, path: '/orders' },
      { name: 'Brand', icon: Icons.PathIcon, path: '/brand' },
    ]
  },
  {
    title: 'Products',
    items: [
      { name: 'Add Products', icon: Icons.CirclePlusIcon, path: '/add-products' },
      { name: 'Product List', icon: Icons.BoxIcon, path: '/product-list' },
    ]
  }
];
