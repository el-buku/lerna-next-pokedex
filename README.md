# Monorepo Next.js Pokedex
This is a monorepo containing a sample Next.js app, a storybook instance and some shared packages.
## Features
`next-redux-wrapper`, `@emotion` styling, `@mui/x-data-grid` with server side pagination, SSR + SSG`@reduxjs/toolkit/query`, shared CommonJS packages, and more.
## Usage
```
yarn
lerna bootstrap
lerna link
yarn dev
```
Or:
```
docker-compose up -d
```
Storybook:
```
yarn start:storybook
```
