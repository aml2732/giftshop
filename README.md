This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Angela's steps and notes
## Dependencies:
 - heroku CLI
 - nodejs (I'm using v12)
 - create react app (installed as a global (`-g`) dependency)

## Development:
For local development:
- `npm install` - install dependencies
- `npm run build` - build files to host (the webpages)
- `node server` - (start the server (endpoints) and host the webpages)
- `http://localhost:5000/` - view this link in browser

Might have to:
- `heroku create --buildpack mars/create-react-app` to create heroku github remote (https://github.com/mars/create-react-app-buildpack)

For Heroku deployment: (Manual)
- `git push heroku master`
- `heroku open` - open the deployed application

## Demo
Note, I don't pay for heroku, so this demo link will only be available for a 30 minute interval after my last manual push.
[View demo here!](https://polar-brushlands-76256.herokuapp.com/)
