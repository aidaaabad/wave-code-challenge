# Invoicing System App

This project uses **React** and **TypeScript** .The application is a simple invoicing system that allows users to view a list of customers and their details. The app fetches customer data from a mock API and displays it in a list format. Users can also edit information about a customer by clicking on a Edit button in the list. 
The application uses custom hooks to manage state and data fetching logic.

In implementing this task, 
I focused on a fully modular approach with the foresight that the project might need to be extended and scaled in the future. The UI components are broken down into smaller, manageable parts, with styles separated for each one, 
making the structure very atomic and easy to maintain. Each component has a single responsibility, following SOLID principles, so they’re not multitasking and can be expanded individually as needed. For cross-browser compatibility,
I used the **browserstack** to test runing Linux or Mac OS X and **Normalize.css** package to ensure consistent styling across different browsers.
I used **Axios** making HTTP requests from web browsers.
I tried to keep the codebase clean and maintainable by following best practices and using TypeScript to catch errors at compile time
and also separate logic from the UI components.


## Project Structure
```bash
Wave-frontend-Challenge/
│
├── public/
│   └── (standard public folder for static assets)
│
src/
├── components/ # Contains reusable UI components
│   ├── ui/
│   │   ├── button/ # Button component
│   │   │   ├── Button.module.css # Button component styles
│   │   │   └── Button.tsx
│   │   ├── form/
│   │   │   ├── Form.module.css # Form component styles
│   │   │   └── Form.tsx # Form component-Combines Input, Select, and Button components
│   │   ├── input/
│   │   │   ├── Input.module.css # Input component styles
│   │   │   └── Input.tsx # Input component
│   │   ├── select/
│   │   │   ├── Input.module.css # Shared with Input component styles
│   │   │   └── Select.tsx # Input component
│   │   ├── list/
│   │   │   ├── List.module.css # List component styles
│   │   │   └── List.tsx # List component
│   │   └── modal/
│   │       ├── Modal.module.css # Modal component styles
│   │       └── Modal.tsx # Modal component
├── hooks/
│   └── useGetCustomers.ts # Custom hook for fetching customer data
├── pages/
│   ├── customerListPage.module.css # Customer list page styles
│   └── customerListPage.tsx # Customer list page
├── services/
│   └── getCustomers.ts # Mock API service for fetching customer data
├── types/
│   ├── customer.ts # Customer type definition
│   └── uiTypes.ts # store all types related to UI components to avoid repetition
├── App.css # App component styles
├── App.test.tsx # App component test
├── App.tsx # App component
├── index.css
└── index.tsx
```

## Available Scripts

In the project directory, you can run the following commands:
### `npm install`

Installs all necessary dependencies defined in the `package.json` file. Run this command before starting or testing the app for the first time.
### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make changes to the code.

### `npm run build`

Builds the app for production into the `build` folder. The production build is optimized and ready to be deployed.

## Learn More

For more information about how to use or extend this project, refer to the following resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)


