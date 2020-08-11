This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Angela's steps and notes
## Dependencies:
 - heroku CLI
 - nodejs (I'm using v12)
 - create react app (installed as a global (`-g`) dependency)

## Development:
First time setup:
- `npm install` - install dependencies
- `npm run build` - build files to host (the webpages)
- `heroku create --buildpack mars/create-react-app` to create heroku github remote (https://github.com/mars/create-react-app-buildpack)
- `git push heroku master`
- `heroku open`
- Run `heroku addons`. If you do not see a message indicating postgresql db is provisioned, complete the following step:
- `heroku addons:create heroku-postgresql:hobby-dev`
- Verify successful provisioning via: `heroku addons`
- We need to find the connection string so we can reuse the same DB locally.
  - Visit: https://dashboard.heroku.com/
  - Click on your heroku application
  - Under `Installed add-ons` you should see your Postgresql instance. Click it
  - Once the page fully loads, Click the tab `settings`
  - Click `view credentials`
- `DATABASE_URL=<your creds here> node server` - (start the server (endpoints) and host the webpages)
- `http://localhost:5000/` - view this link in browser

Local Development:
- `npm install` - install dependencies
- `npm run build` - build files to host (the webpages)
- `DATABASE_URL=<your creds here> node server` - (start the server (endpoints) and host the webpages)
- `http://localhost:5000/` - view this link in browser

Populating your database:
- `DATABASE_URL=<your creds here> node dev-tools/drop-all-dbs.js` - Drop all databases
- `DATABASE_URL=<your creds here> node dev-tools/populate-category.js` - Create Category Table and insert 4 basic rows.

For Heroku deployment: (Manual)
- `git push heroku master`
- `heroku open` - open the deployed application

## Demo
Note, I don't pay for heroku, so this demo link will only be available for a 30 minute interval after my last manual push.
[View demo here!](https://polar-brushlands-76256.herokuapp.com/)
