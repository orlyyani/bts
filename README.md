# Bench Team Tracking System Front-End Documentation

## Overview

The Bench Team Tracking System is a web application designed to streamline the management and tracking of bench team members within an organization. It provides functionality for both administrators, bench supervisors, and bench members to efficiently manage bench resources, track learning progress, record accomplishments, and facilitate communication within the team.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/orlyyani/bts.git
   ```

2. Navigate into the project directory:

   ```
   cd bts-fe
   ```

3. Install dependencies using npm or yarn:

   ```
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```
   npm run serve
   # or
   yarn serve
   ```

5. Open your web browser and navigate to `http://localhost:8080` to view the application.

## Folder Structure

The project follows a standard folder structure for a Vue.js application:

```
bts-fe/
│
├── public/
│   └── (auto generated files)
│
├── src/
│   ├── assets/
│   │   └── (images, fonts, etc.)
│   │
│   ├── components/
│   │   └── (Vue components)
│   │
│   ├── router/
│   │   └── index.js
│   │
│   ├── views/
│   │   ├── LoginPage.vue
│   │   └── RegisterPage.vue
│   │
│   ├── App.vue
│   └── main.js
│
├── .gitignore
├── package.json
└── README.md
```

- **`public/`**: Contains the auto generated files
- **`src/`**: Contains the source code of the application.
  - **`assets/`**: Contains static assets like images, fonts, etc.
  - **`components/`**: Contains reusable Vue components.
  - **`router/`**: Contains the router configuration (`index.js`) for Vue Router.
  - **`views/`**: Contains Vue components representing different views or pages of the application (`LoginPage.vue`, `RegisterPage.vue`).
  - **`App.vue`**: The root Vue component where the application structure is defined.
  - **`main.js`**: The entry point of the application where Vue is initialized and mounted to the DOM.
- **`.gitignore`**: Specifies intentionally untracked files to ignore in Git.
- **`package.json`**: Defines the project's metadata and dependencies.
- **`README.md`**: Contains information about the project and how to set it up.

## Usage

1. Visit the login page by clicking on the "Login" link.
2. If you don't have an account, navigate to the register page by clicking on the "Register" link.
3. Fill in the required information and submit the form to create an account.
4. Once registered, you can log in using your credentials.
5. After logging in, you will be redirected to the dashboard or home page.

## License

This project is licensed under the MIT License.
