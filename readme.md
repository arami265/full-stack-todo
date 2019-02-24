# full-stack-todo

This app is a full-stack version of my to-do list project; its purpose is for me to learn more about full-stack development by building out a functioning full-stack app.

I used multiple tutorials from the Internet as well as official documentation from the following packages in order to build this app and gain an understanding of how these components work with each other.

This project utilizes a MongoDB database and mainly uses the following Node packages:

- Mongoose to connect to the database
- Express to build a routing API
- body-parser as middleware to parse data from HTTP requests
- React for a responsive front-end
- Bootstrap for quick front-end styling
- Reactstrap to import and easily use Bootstrap components as React components
- Redux (& React Redux) to enable a global state in a redux store
- Axios to easily make fetch requests to the backend API

## Examples

![Screenshot 1](/docs/img/screen1.png)
![Screenshot 2](/docs/img/screen2.png)

## How to run in "development mode"

After cloning, run `npm install` then `npm client-install` in the root folder to install all Node dependencies.

Then add a .env file to the root folder with the line `MONGO_URI = "YourConnectionStringHere"` where "YourConnectionStringHere" is your connection string to your MongoDB database.

Then you can run `npm run dev` to start the back and front-end scripts concurrently. While the dev script is running, any changes to either the back or front-end will automatically restart the server or front-end.

## How to deploy to a Heroku app

First ensure that the aforementioned .env file is configured properly.

Then you can deploy to Heroku by running `heroku create` in the Heroku CLI and following the instructions on the corresponding app's page in the Heroku dashboard online; this can be found in the "Deploy" tab. I created a remote Heroku Git branch and pushed to it in my command line.

# TODO:

Although this app works, it is not suitable for actual use in deployment as there is no support for multiple users, so every user would share the same list. As such, these are the items to do for this app:

- Add authentication and users to make this actually useful
  - This should be relatively painless due to the existing Redux store
- Add editing to to-do items
- Add custom sorting to the list
- Tweak styling to add more flavor
