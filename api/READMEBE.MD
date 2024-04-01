## BackEnd Commands 
| Command  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                        |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| npm run database| Excecute all commands for deploy database |
| npm start| Run the api |

## BackEnd .Env File 

>These are the variables that backend need

| Variable Name  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                        |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| PORT | Port number which back end will be deployed
|EMAIL_USER| Necessary to send emails notifications|
|EMAIL_PASSWORD| Necessary to send emails notifications|
| JWT_SECRET | The salt necessary for the token|
|NODE_ENV| The currently enviroment|
|PRO_DB_USER| Production user database|
|PRO_DB_HOST| Production host database|
|PRO_DB_PASSWORD| Production password database|
|PRO_DB_PORT| Production port database|
|PRO_DB_NAME| Production name database|
|DEV_DB_USER| Development user database|
|DEV_DB_HOST| Development host database|
|DEV_DB_PASSWORD| development password database|
|DEV_DB_PORT| development port database|
|DEV_DB_NAME| development name database|
|PRO_STRIPE_BE_PAGE_SUCCESS| production url success return backend stripe
|PRO_STRIPE_BE_PAGE_CANCEL| production url cancel return backend stripe
|DEV_STRIPE_BE_PAGE_SUCCESS| development  url success return backend stripe
|DEV_STRIPE_BE_PAGE_CANCEL|development url cancel return backend stripe
|PRO_STRIPE_FE_PAGE_SUCCESS| production url success return frontend stripe
|PRO_STRIPE_FE_PAGE_CANCEL| production url cancel return frontend stripe
|DEV_STRIPE_FE_PAGE_SUCCESS| development url success return frontend stripe
|DEV_STRIPE_FE_PAGE_CANCEL|development url cancel return frontend stripe

## Node Installation :space_invader:


### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Installation Steps

**1.** Clone the repository

**2.** Set up environment variables:

- Create a file with `.env` extension in the root directory of the project.
- Open the `.env` file and update the necessary variables:

```env
PORT=5000
NODE_ENV=development
PRO_DB_USER=
PRO_DB_HOST=
PRO_DB_PASSWORD=
PRO_DB_NAME=
DEV_DB_USER=
DEV_DB_HOST=
DEV_DB_PASSWORD=
DEV_DB_NAME=
JWT_SECRET=
EMAIL_USER=
EMAIL_PASSWORD=
```

- If the `.env` file doesn't export the variables correctly, you can manually export them by running the following commands in the terminal:

```bash
export PORT=5000
export NODE_ENV=development
export PRO_DB_USER=
export PRO_DB_HOST=
export PRO_DB_PASSWORD=
export PRO_DB_USER=
export DEV_DB_USER=
export DEV_DB_HOST=
export DEV_DB_PASSWORD=
export DEV_DB_NAME=
export JWT_SECRET=
export EMAIL_USER=
export EMAIL_PASSWORD=
```
