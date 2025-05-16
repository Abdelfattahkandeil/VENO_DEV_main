export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  stock: number
  brand: string
  tags: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 14 Pro",
    description: "Apple's latest flagship smartphone with advanced camera system",
    price: 999.99,
    image: "/products/iphone-14-pro.jpg",
    category: "Smartphones",
    rating: 4.8,
    stock: 50,
    brand: "Apple",
    tags: ["electronics", "smartphone", "apple"]
  },
  {
    id: "2",
    name: "Samsung Galaxy S23 Ultra",
    description: "Premium Android smartphone with S Pen support",
    price: 1199.99,
    image: "/products/galaxy-s23-ultra.jpg",
    category: "Smartphones",
    rating: 4.7,
    stock: 45,
    brand: "Samsung",
    tags: ["electronics", "smartphone", "samsung"]
  },
  {
    id: "3",
    name: "MacBook Pro 16",
    description: "Powerful laptop for professionals with M2 Pro chip",
    price: 2499.99,
    image: "/products/macbook-pro-16.jpg",
    category: "Laptops",
    rating: 4.9,
    stock: 30,
    brand: "Apple",
    tags: ["electronics", "laptop", "apple"]
  },
  {
    id: "4",
    name: "Sony WH-1000XM5",
    description: "Premium noise-cancelling headphones",
    price: 399.99,
    image: "/products/sony-wh1000xm5.jpg",
    category: "Audio",
    rating: 4.8,
    stock: 60,
    brand: "Sony",
    tags: ["electronics", "audio", "headphones"]
  },
  {
    id: "5",
    name: "iPad Air",
    description: "Versatile tablet with M1 chip",
    price: 599.99,
    image: "/products/ipad-air.jpg",
    category: "Tablets",
    rating: 4.7,
    stock: 40,
    brand: "Apple",
    tags: ["electronics", "tablet", "apple"]
  },
  {
    id: "6",
    name: "Dell XPS 15",
    description: "Premium Windows laptop with 4K display",
    price: 1999.99,
    image: "/products/dell-xps-15.jpg",
    category: "Laptops",
    rating: 4.6,
    stock: 25,
    brand: "Dell",
    tags: ["electronics", "laptop", "dell"]
  }
] 