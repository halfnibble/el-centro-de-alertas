# El Centro de Alerta!

Example usage of this plugin in a WP Post:
`public/wp.html`

Basically, you will need to upload the contents of `build/js/` and `/build/css` to the JS and CSS folders of your theme. In our case, the theme name is `maishawp`. Then to apply this popup, include the relevent JS and CSS in the footer.php for the theme.

Example:
```
<script type="text/javascript" src="/wp-content/themes/maishawp/js/runtime-main.aaaaca6c.js"></script>
<script type="text/javascript" src="/wp-content/themes/maishawp/js/2.eabf89f0.chunk.js"></script>
<script type="text/javascript" src="/wp-content/themes/maishawp/js/main.6266548b.chunk.js"></script>
<link href="/wp-content/themes/maishawp/css/main.269a721a.chunk.css" rel="stylesheet">
```

## Local development
Clone this repo and change into it.
```
npm install
```

```
HTTPS=true npm start
```

## Modify the alert popup text

Edit the alert content (or make it "Private" to disable the alert) here:
[Edit Page "COVID-19 Alert Popup"](http://www.elcentrodelaraza.org/wp-admin/post.php?post=9482&action=edit)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
