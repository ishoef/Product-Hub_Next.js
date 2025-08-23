# 🛍️ Next.js 15 Product Management App  

A simple **Next.js 15 (App Router)** application with **NextAuth.js authentication**, featuring public and protected pages. Users can browse products, view details, and (after logging in) add new products via a protected dashboard.  

---

## 🚀 Features  

### Public Pages  
- **Landing Page (/**)  
  - Includes Navbar, Hero, Product Highlights, and Footer  
  - Navigation links to Login and Products  

- **Login (/login)**  
  - Authentication with **NextAuth.js** (Google or Credentials)  
  - Redirects to `/products` after successful login  

- **Products List (/products)**  
  - Fetch and display product list from mock backend  
  - Each product shows: name, description, price, and details button  

- **Product Details (/products/[id])**  
  - Public details page for each product  

### Protected Pages  
- **Add Product (/dashboard/add-product)**  
  - Only accessible when logged in  
  - Form to add a new product (stored in database or API route)  
  - Redirects unauthenticated users to `/login`  

---

## ✨ Optional Enhancements  
- Loading spinner when submitting forms  
- Toast messages on successful product add  
- Light/Dark mode toggle  

---

## 🛠️ Tech Stack  
- [Next.js 15 (App Router)](https://nextjs.org/)  
- [NextAuth.js](https://next-auth.js.org/) for authentication  
- Route Handlers (`/api`) for backend  
- Mock database (JSON/file-based) or Express server  

---

## 📂 Routes Summary  

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Landing Page with Hero + Product Highlights |
| `/login` | Public | Login with NextAuth (Google / Credentials) |
| `/products` | Public | Product List |
| `/products/[id]` | Public | Product Details |
| `/dashboard/add-product` | Protected | Add Product (requires login) |

---

## ⚡ Getting Started  

### 🔹 Clone the repository  
```bash
git clone https://github.com/your-username/nextjs-product-app.git
cd nextjs-product-app
