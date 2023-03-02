# Nblocks NextJS example project

This project contains a simple demonstration app to showcase how easily Nblocks can be integrated into your existing stack.

This is a running example of the [Cloud Login Quickstart](https://nebulr-group.github.io/nblocks-docs/docs/essentials/quickstart-cloud-views).

**Files of interest:**
- `pages/me.js` (Shows your user profile info)
- `pages/auth/login.js` (Starts the login flow)
- `pages/auth/oauth-callback.js` (Finishes the login flow)
- `auth_service.js` (Util, add your `APP_ID` here)

Read more about Nblocks [here](https://nblocks.dev)

## Credits
This project is based on the `nextjs-docker` template for [NextJS](https://nextjs.org/)

## Setup
The project is shipped with a Dockerfile so you can easily create a Docker container.
Just open VS Code and the edit should ask if you want to open this in a container.

### Installing

```
npm install
```

### Compiles and hot-reloads for development on port 8080
```
npm run dev
```

## Use it
After you've started the NextJS application it will be available `http://localhost:8080`.

Edit the file `/auth_service.js` and set `APP_ID` to your Nblocks app id.

To showcase the login flow, navigate to `http://localhost:8080/me`.

If you're already logged in, the user profile will be shown, otherwise you will start the login flow.