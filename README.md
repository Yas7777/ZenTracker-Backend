# Record Your Zen - BackEnd

Inspired by a tracker we built in school and the Daylio app, I wanted to track my ever changing moods in a very simplified manner. 

In its essence, this is a web application using  MongoDB,  Express, React and Node.js to do CRUD operations to keep track of user's moods.  The app is comprised of a react front-end application and an express back-end REST api. This api will be used in conjunction with the React app which provides a user-interface for the web app. 

Details|Languages|Framework|
|--|--|--|
|FrontEnd  |JavaScript |HTML, CSS, React |
|BackEnd  | JavaScript| ExpressJs, NodeJS, MongoDB |

This readme will describe the backend. The front end user interface is located in  [ZenTracker-Frontend](https://github.com/Yas7777/ZenTracker-Frontend)

If you don't care to install it - this is how the overall app looks:
![Alt Text](https://github.com/Yas7777/ZenTracker-Backend/blob/master/readme_assets/%20Light%20Mode.gif)

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
 * [ ] Add more relevant form inputs.
 * [ ] Add data analysis graphs, given that I would like to the moods to be tracked with time.
