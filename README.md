# 🚀  Shop 🚀 

This repo houses the assets used to build the [**shop**](https://shop-ns.herokuapp.com/) website.

## Technologies 

- Design website: [**Figma**](https://www.figma.com/).
- Main library: [**React**](https://reactjs.org/docs/getting-started.html).
- Redux:[**Redux**](https://redux.js.org/).
- Bundler: [**Webpack**](https://webpack.js.org/).
- Linter: [**Eslint**](https://eslint.org/).  
- Typing: [**Typescript**](https://www.typescriptlang.org/). 
- Backend: [**NodeJS**](https://nodejs.org/en/). 
- Version control: [**GIT**](https://git-scm.com/doc). 
- Database: [**Mysql**](https://www.mysql.com).

## Structure

### Frontend
The **frontend** is implemented as following:

- asset: images, videos (which is not used for this app).
- component: components of the app.
- service: services related to components with their logics, data, reducer & type.

The following picture shows how **components** have been implemented:

![nab](https://miro.medium.com/max/1400/1*fOVQj8dgr1Oobj3Uta24JQ.png)

>*Pages are hydrated with datas ([**redux**](https://redux.js.org/) is used to manage datas) that will then be passed throw the different steps of the **atomic design** .*

 ### Backend
The **backend** is implemented as following:

./asset/:
- Image: all pictures of the app.
- Mysql: the script to build your relational database + each tables's data under the format 'csv'.

./apis/store:
- Controller: this is where routes are defined.
- Model:
  - Repos: functions and datas related to mysql.
  - Service: all different services of the application

 ### Version control

**Git: workflow**

![gitflow](https://i.stack.imgur.com/RSAAo.png)

**Convention commits**
- **Feat** Commits, that adds a new feature.
- **Fix** Commits, that fixes a bug.
- **Refactor** Commits, that rewrite/restructure your code, however - does not change any behaviour.
- **Perf** Commits are special refactor commits, that improves performance.
- **Style** Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc).
- **Test** Commits, that add missing tests or correcting existing tests.
- **Docs** Commits, that affect documentation only.
- **Build** Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
- **ocd_ps** Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
- **Chore** Miscellaneous commits e.g. modifying .gitignore, eslint, prettier.
- **Merge** Merge branches.

### The application

#### Features:
- Simple  shop website inspired by [**nike**](https://www.nike.com) (it is far away from being a mock).
- Display products (shoes) & filtering them.
- Add products to the bag + keep tract of it using indexDB.


## Installation
#### Terminal
```
# Install dependencies 

Frontend (root level):
yarn 
Backend:
cd ./backend/apis/netflix
yarn 
```
#### Configuration

Create **.env** file in ***frontend/*** and add:
```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_DEVELOPMENT=true
HOST=LOCAL
```
Create a second **.env** file in *** backend/apis/tnwc/dist*** and add:
```
DEVELOPMENT=true
HOST_PORT=LOCAL
HTTPS_LOCAL=true
HOST_DATABASE_LOCAL=localhost
DB_USER_STORE_LOCAL=**
PASSWORD_STORE_LOCAL=**
DATA_BASE_NAME_STORE_LOCAL=store
HOST_DATABASE_REMOTE=**
DB_USER_STORE_REMOTE=**
PASSWORD_STORE_REMOTE=**
DATA_BASE_NAME_STORE_REMOTE=**
HOST_PORT=LOCAL

```
> Note: at this stage, the folder 'dist' is not here yet. It will be created once you run 'yarn tsc'. See the point 'Usage' just bellow.

> Note: variables *_REMOTE are not needed for local.
#### Database

- Connect to your mysql and copy past the script from backend/asset/mysql/tablesAndRelationShip.
- Populate all tables with their datas available at backend/asset/mysql/datas/(pick the name of the table).csv

> Note: you might need to disable a rule in case if no products are displayed, see [**stackoverflow**](https://stackoverflow.com/questions/23921117/disable-only-full-group-by).


## Usage

#### Backend
- Terminal, path to be in:
```
cd backend/apis/store
```

- Run typescript

```
yarn tsc 
```
- Run node.js

```
nodemon dist/app
```
> Note: those commands must run simultaneously. Therefore, two sessions of the terminal should be opened.

#### Frontend 

- Terminal, path to be in
```
Root of the application
```
- Run application

```
yarn dev
```
## Contributing
Pull requests or advises are always welcome. 


