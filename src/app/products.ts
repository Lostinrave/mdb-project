export interface Product {
    id: number;
    photo: string;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {id: 1, photo: 'https://images.kaina24.lt/43/63/iphone-13-128gb.jpg', name: 'Iphone 13', price: 1599, description: "Apple's new iPhone isn't radically different, but that's part of its charm"},
    {id: 2, photo: 'https://images.kaina24.lt/43/14/samsung-galaxy-s21-128gb-2.jpg', name: 'Samsung s21', price: 699, description: 'Top-of-the-line Android smartphone'},
    {id: 3, photo: 'https://images.kaina24.lt/43/93/oneplus-9-pro-2.jpg', name: 'One plus 9', price: 730, description: 'Flagship phone with a great value'},
    {id: 4, photo: 'https://images.kaina24.lt/43/19/google-pixel-5a.jpg', name: 'Google Pixel 5a 5G', price: 599, description: 'Best phone for affordable 5G'},
    {id: 5, photo: 'https://images.kaina24.lt/43/82/motorola-edge-plus.jpg', name: 'Motorola Edge Plus', price: 500, description: ''},
    {id: 6, photo: 'https://images.kaina24.lt/43/42/apple-iphone-se-64gb.jpg', name: 'Apple iPhone SE', price: 399, description: ''},
    {id: 7, photo: 'https://images.kaina24.lt/43/13/samsung-galaxy-s21-ultra-128gb.jpg', name: 'Samsung Galaxy S21 Ultra', price: 1250, description: ''},
    {id: 8, photo: 'https://images.kaina24.lt/43/63/samsung-galaxy-s20-fe.jpg', name: 'Samsung Galaxy S20 FE', price: 650, description: ''},
    {id: 9, photo: 'https://images.kaina24.lt/43/74/google-pixel-4a.jpg', name: 'Google Pixel 4A', price: 485, description: ''},
    {id: 10, photo: 'https://images.kaina24.lt/43/70/apple-iphone-12-pro-max-128gb.jpg', name: 'iPhone 12 Pro Max', price: 1099, description: 'The all-around best phone'},
  ];