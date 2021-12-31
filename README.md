# mern-server

A basic ME*N stack server-side including:
 - express server
 - passport local authentication (with express-session), with login/logout/isAuth routes and isAuth middleware
 - mongoose
 - winston + morgan logging
 - mocha + chai + nock testing environment
 - joi schema validation
 
Create a `.env.development` and `.env.test` files with the following variables: 
```
PORT=<server port>
MONGO_URI=<mongo connection uri>
SESSION_SECRET=<session secret>
```
