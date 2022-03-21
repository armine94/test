To get you started you can simply clone the repository

git clone [https://github.com/armine94/frontend]

## Prerequisites
you need `git` to `clone` the repository. You can get git from [http://git-scm.com/].
you need `node`, you can `download` here [https://nodejs.org/en/download/]
you need `npm`, you can `install`  npm install npm@latest -g

## Available Scripts

In the `project` directory, you can `run`:
The first `install` dependencies nmp ci , then

1) Run project for `development`

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000] to view it in the browser.

2) Run project for `production`

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:5000] to view it in the browser.

## Project structure

├── frontend
|  ├── public - Contains main index.js files.
|  └── src - Contains all components and logic files.
|  |  └── components - All components for this project.
|  |  |  └──  Search
|  |  |  |  ├──  Search.jsx
|  |  |  |  └──  Search.css
|  |  └── assets - Assets for application .
|  |  |  └──  bg.jpeg
|  |  └── DAO Sending requests .
|  |  |  └──  image.DAO.js
|  |  ├── app.js - Start .
|  |  └── index.js - App component render this.
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md