## Uni-Chat
Uni Chat is essentially a reddit clone that uses the MERN stack. It allows for account creation, posting, commenting, and browsing a timeline.The main topics that 
were addressed with this project were: authentication, storage, choice of server, and post listings. The goal of the project was to create a forum for a University's
student body could discuss events and stay connected.

## Technical Details
As previously stated, I used a MERN stack. To store user information and post information, I used a local instance of MongoDB. The framework I went with for the server is Node.js because it complimented 
react fairly well. React was the java framework that I went with because it made it easier to organize models, server requests, and some minor aesthetic choices.
NodeJS was my choice of server because it is what I am familiar with. Most of the front end of the project was completed using HTML5 and tailwind CSS to allow for 
better inline styling. This made it easier to keep the number of files down. 	

The project was done entirely in VSCode. The project was split up into two main folders, one for the client-side design and then one folder for API / server components.
The design of the web app was very compartmentalized. The bar across the top of the screen is part of the header, the boardheader is the next section, followed by the 
new post section. These design choices were to keep the app.js as clear as possible. 


## Basic Flow Uni-Chat

1.) User creates an account; registration post request is sent via the server to save to the local instance of the database. The database contains a user collection which saves the users pertinent information. 

2.) The newly created user can create a new post using the new post option. This consists of a title, and text.  A post request is sent to the database via the server. Information about the post is stored as author, title, body, and posted At. When a user comments, they are brought to a screen with all of the comments associated with their account. 

3.) Comments are posted on the front page using an axios get request. This retrieves the data associated with the post and organizes it using some react and html. 

4.) Once the user logs off, they can still view comments that have been posted, but they cannot post any new ones. Because comments are not stored locally on the client side, they can continue to browse all the comments. 

## Server Details
All of the components of the server were stored under a folder called API. In there I created the data models for Users, and Comments. The user was associated with a series of strings: email, username, and password. 
The comments were associated with author, title, body, and datePosted. The actual server was written using the express framework. Post requests are routed for Registration, user, login, logout, comments, 
and then comment ID’s. The server was listening on port 4000. A Cross origin scripting library was used to get passed browser issues as well.

## Database Details (MongoDB)
The Database was set up using the command line tool. After ssh’ing into the mongo, a new db was created. I initialized collections for the users and the comments.
The endpoint for the database was then used in the server to connect the two. Once I had them connected, I tested the connection by uploading comments from the command 
line and then viewing them from the webapp. 

## Client-side details
The client side took up most of the work. From the app.js, the program would initially check to see if there is a user signed in via an axios get request. For the body of the
website, a router component is returned that contains all the contents of the header section. If the user is signed in, the login/signup buttons disappear. This is done
by checking the state of user credentials using React. The box that pops up when you click “sign in” uses AuthModal and AuthModalContext. When signing in, if the credentials do not
match what is in the database, nothing happens. If the username and password matches the database, the login function is then performed. This entire file utilized the state functions 
built into React to make sure someone who is signed in can post comments. Finally, when a user wants to post something new, they are accessing the postform file. This performs a post request to the comments endpoint 
of the API. The information is then stored in the database. Posts are displayed through the PostsListing file. This file just performs a get request for all the of the comments in the database and maps them each to a
post object which is formatted with some html and react. Once the user wants to logout, they hit the top right button and this triggers a post request to the logout endpoint. This clears the current states of the web application and you continue browsing without a user token.

## Screen Shots
![1](/images/Create Post.png)
