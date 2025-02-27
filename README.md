# React Authentication with Clerk and Conditional Layouts

## 📌 Project Overview
This is a React authentication project using **Clerk** for user authentication, with a structured layout system. The project ensures that:
- **Main pages** (Home, About, etc.) include a **header (`Nav`) and footer (`Footer`)**.
- **Authentication pages** (Signin & Signup) exclude the header and footer for a cleaner UI.
- **Google authentication** is enabled using Clerk OAuth.

## 🏗️ Project Structure
```
📂 src
 ├── 📂 components
 │    ├── Nav.js
 │    ├── Footer.js
 ├── 📂 layouts
 │    ├── MainLayout.js  (Includes Header & Footer)
 │    ├── AuthLayout.js  (Excludes Header & Footer)
 ├── 📂 pages
 │    ├── Home.js
 │    ├── About.js
 │    ├── Signin.js
 │    ├── Signup.js
 ├── App.js
 ├── index.js
```

## 🚀 Features
✅ **User Authentication** (Signin & Signup via Clerk)  
✅ **Google Sign-In Integration**  
✅ **Conditional Rendering of Layouts**  
✅ **React Router for Navigation**  
✅ **Tailwind CSS for Styling**  

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo-name.git
cd your-project-name
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Clerk Authentication
1. Create an account on [Clerk](https://clerk.dev/).
2. Get your **API keys** from the Clerk dashboard.
3. Create a `.env` file in the root and add:
   ```env
   REACT_APP_CLERK_FRONTEND_API=your-clerk-frontend-api-key
   ```

### 4️⃣ Start the Development Server
```sh
npm run dev
```

## 🌍 Routing Setup
### **Main Routes** (Includes Nav & Footer)
```jsx
<Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Route>
```

### **Auth Routes** (No Nav & Footer)
```jsx
<Route element={<AuthLayout />}>
  <Route path="/signin" element={<Signin />} />
  <Route path="/signup" element={<Signup />} />
</Route>
```

## 📜 License
This project is licensed under the MIT License.

---
🔗 **Made with ❤️ using React & Clerk**

