This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Angela's steps and notes
## Dependencies:
 - heroku CLI
 - nodejs (I'm using v12)
 - create react app (installed as a global (`-g`) dependency)

## Development:
For local development:
- `npm run build` - build files to host (the webpages)
- `node server` - (start the server (endpoints) and host the webpages)
- `http://localhost:5000/` - view this link in browser

Might have to:
- `heroku create --buildpack mars/create-react-app` to create heroku github remote (https://github.com/mars/create-react-app-buildpack)

For Heroku deployment: (Manual)
- `git push heroku master`
- `heroku open` - open the deployed application
