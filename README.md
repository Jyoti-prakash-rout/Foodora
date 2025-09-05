# 🍕 Foodora - Explore Art of Food 🥗

<div align="center">

![Foodora Logo](https://img.shields.io/badge/Foodora-Explore%20Art%20of%20Food-green?style=for-the-badge&logo=restaurant&logoColor=white)

### 🌟 A Modern Food Ordering Experience Built with React 🌟

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8.2-764ABC?style=flat-square&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[🔗 Live Demo](#) | [📖 Documentation](#features) | [🚀 Quick Start](#installation)

</div>

---

## 📸 Preview

![Foodora App Screenshot](https://github.com/user-attachments/assets/dfb627c9-450d-4b21-8052-82da30319aaa)

---

## ✨ About Foodora

**Foodora** is a modern, responsive food ordering application that brings the art of food to your fingertips! 🎨🍽️ Built with cutting-edge technologies, it offers a seamless and delightful user experience for browsing, selecting, and ordering your favorite meals.

Whether you're craving a hearty breakfast 🥞, a satisfying lunch 🍔, an elegant dinner 🍝, or just some tasty snacks 🍿, Foodora has got you covered with a diverse menu of delicious options!

---

## 🚀 Features

### 🎯 Core Functionality
- **🛒 Smart Shopping Cart** - Add, remove, and manage your orders with ease
- **🔍 Real-time Search** - Find your favorite dishes instantly
- **📱 Category Filtering** - Browse by meal type (Breakfast, Lunch, Dinner, Snacks)
- **⭐ Rating System** - View ratings for each dish to make informed choices
- **💰 Dynamic Pricing** - Real-time price calculations and totals
- **📦 Order Management** - Complete checkout process with order confirmation

### 🎨 User Experience
- **📱 Fully Responsive Design** - Perfect on mobile, tablet, and desktop
- **🎨 Modern UI/UX** - Clean, intuitive interface with Tailwind CSS
- **🔥 Hot Toast Notifications** - Instant feedback for user actions
- **⚡ Lightning Fast** - Optimized with Vite for blazing performance
- **🌐 SPA Navigation** - Smooth single-page application experience

### 🛠️ Technical Features
- **🏗️ State Management** - Robust Redux Toolkit implementation
- **🔒 Route Protection** - Secure navigation and order protection
- **📊 Real-time Updates** - Live cart updates and price calculations
- **🎭 Loading States** - Elegant loading animations and spinners
- **🔧 ESLint Integration** - Code quality and consistency

---

## 🛠️ Technology Stack

<div align="center">

| Frontend | State Management | Styling | Build Tool | Icons & UI |
|----------|------------------|---------|------------|------------|
| ![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white) | ![Redux](https://img.shields.io/badge/Redux_Toolkit-2.8.2-764ABC?style=for-the-badge&logo=redux&logoColor=white) | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white) | ![Lucide](https://img.shields.io/badge/Lucide_React-0.542.0-FF6B6B?style=for-the-badge&logo=feather&logoColor=white) |

</div>

### 📦 Key Dependencies
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "@reduxjs/toolkit": "^2.8.2",
  "react-redux": "^9.2.0",
  "react-router-dom": "^7.8.2",
  "tailwindcss": "^4.1.12",
  "lucide-react": "^0.542.0",
  "react-hot-toast": "^2.6.0",
  "react-spinners": "^0.17.0"
}
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v18 or higher) 📦
- **npm** or **yarn** package manager 🧶

### Quick Start

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Jyoti-prakash-rout/Foodora.git

# 2️⃣ Navigate to project directory
cd Foodora

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start development server
npm run dev

# 5️⃣ Open your browser and visit
# 🌐 http://localhost:5173
```

### Available Scripts

```bash
# 🚀 Start development server
npm run dev

# 🏗️ Build for production
npm run build

# 👀 Preview production build
npm run preview

# 🔍 Run ESLint
npm run lint
```

---

## 📁 Project Structure

```
Foodora/
├── 📄 index.html                 # Main HTML template
├── 📦 package.json              # Dependencies and scripts
├── ⚙️ vite.config.js            # Vite configuration
├── 🎨 eslint.config.js          # ESLint rules
├── 📁 public/
│   └── 🖼️ logo.png              # App logo
├── 📁 src/
│   ├── 🎯 main.jsx               # App entry point
│   ├── 📱 App.jsx                # Main app component
│   ├── 🎨 index.css              # Global styles
│   ├── 📁 components/
│   │   ├── 🧭 Navbar.jsx         # Navigation header
│   │   ├── 🍽️ FoodCard.jsx       # Individual food item
│   │   ├── 📋 FoodItems.jsx      # Food items container
│   │   ├── 📂 CategoryMenu.jsx   # Category filter
│   │   ├── 🛒 Cart.jsx           # Shopping cart
│   │   ├── 🎫 ItemCard.jsx       # Cart item card
│   │   └── 🔒 ProtectedRoute.jsx # Route protection
│   ├── 📁 pages/
│   │   ├── 🏠 Home.jsx           # Main homepage
│   │   ├── ✅ Success.jsx        # Order success page
│   │   └── ❌ Error.jsx          # Error page
│   ├── 📁 redux/
│   │   ├── 🏪 Store.js           # Redux store
│   │   └── 📁 slices/
│   │       ├── 🛒 CartSlice.jsx  # Cart state management
│   │       ├── 📂 CategorySlice.jsx # Category filtering
│   │       └── 🔍 SearchSlice.jsx # Search functionality
│   └── 📁 data/
│       └── 🍕 FoodData.js        # Food items database
```

---

## 🎮 Usage Guide

### 🍽️ Browsing Food Items
1. **View All Items**: Browse through our extensive menu on the homepage
2. **Filter by Category**: Click on category buttons (All, Breakfast, Lunch, Dinner, Snacks)
3. **Search**: Use the search bar to find specific dishes
4. **View Details**: Each card shows item name, price, rating, and description

### 🛒 Shopping Cart
1. **Add Items**: Click "Add to cart" button on any food card
2. **Manage Quantity**: Use +/- buttons in cart to adjust quantities
3. **Remove Items**: Click the delete icon to remove items
4. **Checkout**: Click "Checkout" button when ready to order

### 📱 Navigation
- **Home Page**: Main food browsing and ordering interface
- **Success Page**: Order confirmation after successful checkout
- **Protected Routes**: Secure access to sensitive pages

---

## 🎨 Design Highlights

### 🌈 Color Palette
- **Primary Green**: `#059669` - Fresh and appetizing
- **Secondary Green**: `#10b981` - Call-to-action buttons
- **Background**: `#f4f4f4` - Clean and modern
- **Text**: Dark grays for excellent readability

### 🎭 UI Components
- **Food Cards**: Hover effects with smooth transitions
- **Category Buttons**: Active states with visual feedback
- **Shopping Cart**: Slide-in panel with real-time updates
- **Toast Notifications**: Non-intrusive success messages
- **Loading Spinners**: Engaging loading states

---

## 🤝 Contributing

We welcome contributions to make Foodora even better! 🎉

### 🔄 How to Contribute

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **💾 Commit your changes**: `git commit -m 'Add amazing feature'`
4. **📤 Push to the branch**: `git push origin feature/amazing-feature`
5. **🔀 Open a Pull Request**

### 📋 Contribution Guidelines
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes thoroughly
- Update documentation as needed
- Ensure responsive design principles

---

## 🐛 Issues & Support

Encountered a bug or have a feature request? We'd love to hear from you!

- **🐞 Report Bugs**: [Open an issue](https://github.com/Jyoti-prakash-rout/Foodora/issues)
- **💡 Feature Requests**: [Suggest new features](https://github.com/Jyoti-prakash-rout/Foodora/issues)
- **❓ Questions**: [Start a discussion](https://github.com/Jyoti-prakash-rout/Foodora/discussions)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Jyoti Prakash Rout**
- 🐙 GitHub: [@Jyoti-prakash-rout](https://github.com/Jyoti-prakash-rout)
- 📧 Email: [Contact](mailto:your-email@example.com)
- 💼 Portfolio: [Visit Portfolio](#)

---

## 🙏 Acknowledgments

Special thanks to:
- 🎨 **React Team** for the amazing framework
- 🔥 **Vite** for the lightning-fast build tool
- 🎨 **Tailwind CSS** for the utility-first CSS framework
- 🏪 **Redux Toolkit** for state management
- 🎭 **Lucide React** for beautiful icons
- 🔥 **React Hot Toast** for elegant notifications

---

<div align="center">

### 🌟 Star this repo if you found it helpful! 🌟

![GitHub stars](https://img.shields.io/github/stars/Jyoti-prakash-rout/Foodora?style=social)
![GitHub forks](https://img.shields.io/github/forks/Jyoti-prakash-rout/Foodora?style=social)

**Made with ❤️ and lots of ☕**

---

*Explore the Art of Food with Foodora!* 🍕✨

</div>
