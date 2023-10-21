# Git Commit History Project

This is a project that displays the commit history of a public GitHub repository. It allows you to fetch and display
commits in a table.

## Requirements

Ensure you have the following versions of the tools installed on your system:

- Node.js 18
- Angular 16
- Nest 10

## Steps to Run the Project

1. Clone this repository from GitHub:

   ```bash
   git clone https://github.com/kiranitor123/git-commit-v2.git
2. Install the initial dependencies from the project's root directory:
    ```bash
   npm install
3. Install dependencies for both the frontend and backend:
    ```bash
   npm run install
4. Run the project from the project's root directory without entering any specific folder:
    ```bash
   npm run start:dev

## Running Unit Tests

To run unit tests, use the following command from the project's root directory:

    npm run start:dev

If you want to run tests individually for the frontend and backend, you can do so from their respective folders:

## Frontend

    cd client
    npm install //install dependencies
    ng serve //init the app
    ng test //run tests

## Backend

    cd server
    npm install //install dependencies
    npm run start:dev //init the server
    npm run test //run tests

## Using the Project

Upon starting the frontend, default values will be loaded automatically.
If you have another public repository, you can make changes, and this project will retrieve the commits made.

## License

This project is licensed under the MIT License.
