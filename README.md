### Creating a single JS file output

1. Scaffold a [Vite](https://vitejs.dev/) project with the React template:

   ```shell
   npm init vite my-react-project -- --template react
   ```

2. Install [`vite-plugin-css-injected-by-js`](https://www.npmjs.com/package/vite-plugin-css-injected-by-js?activeTab=readme) to automatically inject the app's styles into the document `<head>`:

   ```shell
   cd my-react-project
   npm i -D vite-plugin-css-injected-by-js
   ```

3. Configure Vite to use that plugin via [`plugins`](https://vitejs.dev/config/#plugins); and to disable CSS code splitting via [`build.cssCodeSplit`](https://vitejs.dev/config/#build-csscodesplit):

   ```js
   // vite.config.js
   import { defineConfig } from 'vite'
   import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

   export default defineConfig({
     plugins: [
       cssInjectedByJsPlugin(),
     ],
     build: {
       cssCodeSplit: false,
     },
   })
   ```

4. Configure Vite to build a single JavaScript file (i.e., the `main.jsx` file) via [`build.rollupOptions.input`](https://vitejs.dev/config/#build-rollupoptions):

   ```js
   // vite.config.js
   import { defineConfig } from 'vite'

   export default defineConfig({
     build: {
       rollupOptions: {
         input: {
           app: './src/main.jsx',
         },
       },
     },
   })
   ```

5. Configure Vite to specify the deployment target's base URL via [`base`](https://vitejs.dev/config/#base):

   ```js
   // vite.config.js
   import { defineConfig } from 'vite'

   export default defineConfig({
     base: 'https://cdn.jsdelivr.net/gh/tony19-sandbox/vite-react-single-js-file/dist/',
   })
   ```

   The base URL is ideally a CDN link for optimum load performance. For example, if the app files were hosted on GitHub at `https://github.com/tony19-sandbox/vite-react-single-js-file/tree/main/dist`, the CDN link would be `https://cdn.jsdelivr.net/gh/tony19-sandbox/vite-react-single-js-file/dist/`.

6. Build the app:

   ```shell
   cd my-react-project
   npm run build
   ```

   The build then produces a `dist` directory containing these files:

   ```none
   dist/assets/app.d91c60c0.js
   dist/assets/logo.ecc203fb.svg
   ```

## Usage in Ghost

1. In your blog page, insert a [custom HTML block](https://ghost.org/help/using-the-editor/#adding-custom-html).

<img src="https://i.stack.imgur.com/8j16M.png" width="250" height="300">

2. In the HTML block, add a `div` with an ID that matches the mounting point in `src/main.jsx` from your app's original source (the default ID is `"root"`).

    ```html
    <div id="root">App loading...</div>
    ```

3. Add a `<script>` that pulls in the `app.js` file previously built. For example, if you've hosted the script on GitHub, you could use a CDN link like this:

    ```html
    <script src="https://cdn.jsdelivr.net/gh/tony19-sandbox/vite-react-single-js-file/dist/assets/app.d91c60c0.js"></script>
    ```

The result looks like this:

<img src="https://i.stack.imgur.com/3Nj2l.png" width="160" height="600">

[GitHub](https://github.com/tony19-sandbox/vite-react-single-js-file)

[Ghost page](https://react-app-in-ghost.ghost.io/p/bcab0f9f-070c-4dbf-bfed-11edf121d38a/)
