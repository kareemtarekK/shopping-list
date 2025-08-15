# 🛒 Veggy – Shopping List React App

Veggy is a simple and interactive **🛍️ shopping list web app** built with **⚛️ React**.  
It allows users to browse 🥦 vegetables and 🍎 fruits, search for items 🔍, view details 👀, add them to a cart 🛒, and manage their shopping list in real-time ⏳.

---

## ✨ Features

- 🌐 **Fetch live data** of vegetables and fruits from external APIs.
- 🔍 **Search functionality** to quickly find items by name.
- 👀 **View details** of any fruit or vegetable before adding it to the cart.
- ➕ **Add to cart** with adjustable quantities.
- ❌ **Remove items** from the cart.
- 📊 **Dynamic cart preview** with:
  - 🛍️ Number of items
  - 💰 Subtotal price
- 📱 **Responsive design** for a smooth experience across devices.

---

## 🛠️ Tech Stack

- **Frontend:** ⚛️ React (with Hooks)
- **Language:** 🟨 JavaScript (ES6+)
- **Data Fetching:** 🌐 Fetch API
- **Styling:** 🎨 CSS (custom)

---

## 🌍 APIs Used

1. 🥦 **Vegetables API**  
   [https://gist.githubusercontent.com/ChrisNjubi/1d3c5ac9974b8cac73d48a756d3b7a42/raw/0db36c0ed658d91140714c459e7a5c0570d9e537/gistfile1.txt](https://gist.githubusercontent.com/ChrisNjubi/1d3c5ac9974b8cac73d48a756d3b7a42/raw/0db36c0ed658d91140714c459e7a5c0570d9e537/gistfile1.txt)

2. 🍎 **Fruits API**  
   [https://gist.githubusercontent.com/amlcurran/6d174c472e2523be5f9cad7092e1d7ab/raw/fruits.json](https://gist.githubusercontent.com/amlcurran/6d174c472e2523be5f9cad7092e1d7ab/raw/fruits.json)

---
src/
│── App.js # ⚙️ Main app logic
│── index.js # 🚪 React entry point
│── App.css # 🎨 Styling
└── ...

---

## ⚙️ How It Works

1. **📡 Data Fetching**  
   - On load, the app fetches vegetable 🥦 and fruit 🍎 data from the provided APIs.
   - Merges them into one unified list 📋.

2. **🔍 Searching**  
   - Filters items in real-time based on user input ⌨️.

3. **🛍️ Cart Management**  
   - Users can add items ➕ with custom quantities.
   - Items already in the cart get their quantity 🔢 and price 💵 updated.
   - Removing items ❌ updates the cart and subtotal instantly.

4. **👀 Item View**  
   - Clicking on a product image opens a detail view with price 💰 and image 🖼️.

---

## 🖥️ Installation & Usage

```bash
# 📥 Clone the repository
git clone https://github.com/k/veggy-shopping-list.git

# 📂 Go into the project directory
cd veggy-shopping-list

# 📦 Install dependencies
npm install

# ▶️ Start the development server
npm start

## 📂 Project Structure

