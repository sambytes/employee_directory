# Employee Directory Application

Hello there and welcome to my employee directory application.  With this application you will be able to create an employee directory with the ability to add and delete employees.

## Booting up the local environment

The .env files should be included in the zip folder, these contain the mongoDB connection information for the server, as well as the api environment target for the client.

To start the local environment run the following to start the server:

```
cd server
npm run build
npm start
```

The server should now be hosted at http://localhost:10010.

Next start the client by running the following:

```
cd ../client
npm start
```

The client application should now be hosted at http://localhost:3002.

## Using your employee directory

### Adding a employee

In order to add an employee click the "Add Employee" blue button on the top right of the screen.  The following validations are applied to the fields:

- All fields in the form with the expection of the picture field must be filled out.
- The picture url field must end in .jpg, .png, or .gif
- The email field must be in the form xxx@xxx
- The phone field must be in the form xxx-xxx-xxxx

### Viewing employee information

Click on a employee in the data table at the application's home page to get to the employee detail view

### Deleting an employee

Go to the employee detail page for the desired user you wish to delete, next click on the red button that says "Delete Employee"

## Swagger api view

To test or debug the server api you can run swagger ui tools.  To start swagger ui tools go to the server folder and run the following:

```
npm run swagger-ui
```

## Technical Information

### Client Side

The client application was created using create-react-app.  For state management I chose to use redux as one way data flows are beneficial in decreasing the complexity of the overall application.  React thunk was used to help with the dispatch of async actions.  Lastly semantic-ui-css was choosen to speed up the process of styling simplistic elements.

### Server Side

The server application was bootstrapped using the [swagger express mw](https://www.npmjs.com/package/swagger-express-mw) tool.  The database calls are handled by mongoose.

## Other comments

If given more time on this project the next updates would include the following:

- Create a view for updating an employee's information as the endpoint is all set up
- Create tests using jest
- Add dependancy injection to the backend


