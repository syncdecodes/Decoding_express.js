// SSR - server side rendering
// API - application programming interface


/* In express or http case when we talk about API we mean setting up an http interface to interact with our data
data is send using JSON and in order to send back our response we use res.json() method which sets up the proper content type and strigify the data 
In server side rendering we set up templates and send entire html, css and js.. files using res.render() method */

/* we will use API as it lets up focus more on the actual express since SSR adds a more bit unnecessary overhead 
if we grasp the concept of API, we will have no problem implementing them with templates(SSR) */

// In API the server provides the data => we will create API