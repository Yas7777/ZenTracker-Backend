
# Record Your Zen - Backend

Inspired by a tracker we built in school and the Daylio app, I wanted to track my ever changing moods in a very simplified manner.

In its essence, this is a web application using  MongoDB, Express, React and Node.js to do CRUD operations that keeps track of user's moods.  The app is comprised of a react frontend application and an express back-end REST api. 

Details|Languages|Framework|
|--|--|--|
|Frontend  |JavaScript |HTML, CSS, React |
|Backend  | JavaScript| ExpressJs, NodeJS, MongoDB |

**This readme describes the backend. For this app to work in all its glory, the backend and frontend ( [ZenTracker-Frontend](https://github.com/Yas7777/ZenTracker-Frontend)) needs to be opened in two seperate windows and run concurrently.**

If you don't care to install it - this is how the overall app looks:
(in Dark Mode):
<img src="https://github.com/Yas7777/ZenTracker-Backend/blob/master/readme_assets/DarkMode.gif" width="860" height="360" />

## Installation and Tools

TLDR: If these instructions aren't followed, this web app is just not going to work  🤷‍♀️

1.  Install Node.Js
 >https://nodejs.org/en/download/
 2. Install Express
 > https://expressjs.com/
 3. Install MongoDB (see pdf for more setup info)
 >https://www.mongodb.com/
 4. Install an IDE of your choice.
   > I prefer Webstorm: https://www.jetbrains.com/pycharm/download/
 5. Clone this repository. 
 6. Open the terminal for IDE (preferred to avoid issues) 
 7. Use command `npm install` 
 8. Once its installed, use command `npm start` 
 9. Create a `.env` file and type the following:
	 -  `<PORT=3000>`. This will  start the Express server for REST API which listens at port  `3000`
	 - `MONGODB_CONNECT_STRING=""` (Atlas Cluster URL- see above for installation steps)

The backend will run on `localhost:3000`.

##  🔥My Hot Takes🔥

* Using MongoDB in this manner is fairly rudimentary and does not allow for easy deployment. 
* Validating the inputs has been quite tricky for me. I intend to include more robust checks as I continue working on this app.

##  Future Improvements
 * [ ] Deploy this app.
 * [ ] Given the sensitive nature of the app, I would like to add a secure login and authentication page.
 * [ ] Add a test suite.
 * [ ] Validate inputs thoroughly
 
