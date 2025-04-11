# Car Raffling Website

Welcome to the Car Raffling Website project! This application allows users to participate in car raffles by purchasing tickets online. Once a specified number of entries is reached, a random winner will be selected.

## Features

- User-friendly interface for viewing raffle details and purchasing tickets.
- Secure ticket purchasing process.
- Random winner selection once the raffle reaches the required number of entries.
- Responsive design for optimal viewing on various devices.

## Project Structure

```
car-raffling-website
├── public
│   ├── index.html          # Main HTML document
│   ├── styles              # Contains CSS styles
│   │   └── main.css
│   └── scripts             # Contains client-side JavaScript
│       └── main.js
├── src
│   ├── app.js              # Initializes the Express application
│   ├── routes              # Defines routes for the application
│   │   └── raffleRoutes.js
│   ├── controllers         # Contains business logic for raffles
│   │   └── raffleController.js
│   ├── models              # Defines data structures for raffles
│   │   └── raffleModel.js
│   └── views               # Contains EJS templates for rendering
│       ├── raffle.ejs
│       └── winner.ejs
├── package.json            # NPM configuration file
├── .env                    # Environment variables
├── README.md               # Project documentation
└── server.js               # Entry point for the server
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/car-raffling-website.git
   ```
2. Navigate to the project directory:
   ```
   cd car-raffling-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Set up your environment variables in the `.env` file.

## Usage

1. Start the server:
   ```
   node server.js
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.