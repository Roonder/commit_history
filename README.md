# GitHub Commit History

Hi! In this repository I'm going to present you a GitHub Commit History tool, specifically made for this project (but adjustable for any project on the go).

## Why this specific project?

This project was made as a Technical Task for the FULLTIMEFORCE company, and it was a nice task to practice my fullstack skills.

## Technology Used

[Nest.js](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Octokit.js](https://github.com/octokit/octokit.js) The all-batteries-included GitHub SDK for Browsers, Node.js, and Deno.

[Vite](https://github.com/vitejs/vite) frontend tool for improving development (and deploying) experience.

[React.js](https://github.com/facebook/react) frontend library for web, and native, user interfaces.

[TailwindCSS](https://github.com/tailwindlabs/tailwindcss) A utility-first CSS framework for rapid UI development.

[React-Icons](https://github.com/react-icons/react-icons) svg react icons of popular icon packs.

[Axios](https://github.com/axios/axios/tree/main) Promise based HTTP client for the browser and node.js.

[SWR](https://github.com/vercel/swr) React Hooks for Data Fetching.

[TypeScript](https://github.com/microsoft/TypeScript/) TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

## How to install and run the project (locally)

This application was made from two different frameworks to work (Nest.js for backend, React.js for frontend) so, following this idea, we need to run these two parts by separate. The instructions would be:

1. Clone this repository to your desired folder.

2. Open the folder where you cloned the repository, and open it with your IDE of preference. In there, go to:
    - `backend` folder and create an `.env` file in the root of that folder, where you're gonna add a field called `FRONTEND_URL` and add the frontend's localhost address _(for Vite's case, usually the default is: `http://localhost:5173`)_.
    - for `frontend` folder's case, we will do the same of creating an `.env` file in the root of that folder, where you're gonna add a field called `VITE_BACKEND_URL` and add the frontend's localhost address _(for Nest.js's case, usually the default is: `http://localhost:3000`)_.

    > [!NOTE]
    > Make sure that, in both URLs, the address does not end with `/`, as this character is already declared in code and it could lead to an undesired error when trying to do the API calls.

3. Now, after declaring the Environment Variables, and following the same idea of previous step, we will install the needed dependencies in two different terminals (or just one if it's possible):
    - The first terminal (or our first opened directory) is going to be for `backend` folder. We will open `backend` folder in this terminal and run `npm i` _(or `npm install`)_ for installing the dependencies.
    - Now, on our second terminal (or just moving to the next directory on our first one), we will open `frontend` folder and run the same script  `npm i` _(or `npm install`)_ for installing the dependencies.

4. After the dependencies are installed, and Environment Variables are declared, it's finally time to run our project. Now it is going to be necessary to have both terminals opened with each folder.
    - For the terminal with `backend` folder opened, we will run the following script: `npm run start:prod`, and we will minimize it.
    - For the terminal with `frontend` folder opened, we will run the following script: `npm run dev`, and also we will minimize it.

After doing these steps, the project should be running properly and showing the Commit's History interface with all the logs done during the project's development.

