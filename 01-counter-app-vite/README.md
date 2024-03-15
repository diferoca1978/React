# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Single & integration test with Jest + React

1. Install jest ``` npm install --save-dev jest ```.
2. Create a new script in to package.json ``` "test": "jest --watchAll" ```.
3. Add in to the file .eslintrc.cjs add jest in to env object.
  
  ```
  env: { 
    browser: true,
    es2020: true,
    jest: true
  },

  ```
