# CS-465

## Architecture

For the customer side, Express with HTML and JavaScript handled the initial rendering and routing, making it straightforward for simpler pages. Angular was used where the SPA approach made more sense—allowing dynamic updates without a full page reload. 

The backend uses a NoSQL MongoDB database because it’s schema-less, making it easy to store and retrieve flexible trip data. It also integrates well with JavaScript-based backends like Express, and its document-oriented structure maps naturally to JSON for communication with the frontend.

## Functionality

JSON differs from JavaScript in that it’s purely a data format with no functions or logic, just text to be imported via javascript and converted into a usable object. It acts as the bridge between frontend and backend where data is sent from the backend as JSON, which the frontend parses and renders into UI elements like trip cards.

Throughout the build, I refactored code to make UI components reusable, especially for creating trip cards and the edit buttons attached to them. These reusable portions made it much easier to add or update functionality without rewriting code in multiple places. This improved maintainability and reduced bugs.

## Testing

For API testing, I had to check various endpoints of GET, POST, PUT, DELETE to make sure data was being sent and received correctly. With admin authentication in place, I also needed to account for how security layers affected testing, since some endpoints required tokens or credentials before allowing access we used an endpoint to retrieve our admin token and use that for further endpoint testing on the admin side through Postman. Understanding HTTP methods, endpoint structure, and role-based restrictions was key to making the system work as intended.

## Reflection

This course helped me sharpen my ability to connect the dots between frontend and backend development while also thinking about security, scalability, and maintainability. I’ve gotten more comfortable working with Express, Angular, MongoDB, and secure authentication flows. I’ve also learned how to write cleaner, more reusable code and how to design an application with both functionality and user experience in mind. These skills make me a stronger candidate for software development roles that require full stack knowledge.
