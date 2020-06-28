# Blog Reading App using Wordpress Rest API

## Usage
This app uses the Wordpress Rest API to fetch blogs from it and view in the web app.
Things to know:
- By default, the API requests will work for this app only. To enable apis from different origins, please add ; seperated values to **ALLOWED_ORIGIN** in .env file
- The App currently allows posts with atmost 1 tag and 1 category selected simultaneosly
- The related posts api returns list of posts ids, which needs to be queried back to get the individual data 

## Installation

> [!NOTE]
> Please copy env-example to .env, which is required to load Environment Variables

#### Development Server

```bash
yarn install
yarn client:dev
yarn server:dev
```

#### Production Server

```bash
yarn install
yarn client:build
yarn server:start
yarn server:stop // to stop the server
```