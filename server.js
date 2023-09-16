const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., CSS)
app.use(express.static('client'));

// Serve the index page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

/*app.get('/Register', (req, res) => {
  res.sendFile(__dirname + '/client/Register.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/client/login.html');
});*/




// Handle the POST request from the toDoList2 form
app.post('/index', (req, res) => {

    /*const dashboard = req.body.dashboard;
    const reports = req.body.reports;
    const users = req.body.users;
    
  

  // In a real application, you should validate the credentials 
  // and authenticate the user here.
  // For simplicity, we'll just print the credentials for this example.
  console.log('Received dashbord:', dashboard);
  console.log('Received reports:', reports);
  console.log('Received users:', users);
  // Redirect the user to a success or failure page
  // For simplicity, we'll always redirect to the success page.
  res.redirect('/success.html');*/
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});