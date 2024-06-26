# Nyntax Junior MERN Developer Assessment

This project is an invoice generator for a car rental service built using the MERN stack. It allows users to input customer details, rental duration, discounts, additional charges, and generates/print an invoice based on this information.

## API Integration

- Used the provided API to fetch details of available cars.
- Parsed the API response to extract relevant information such as car details, hourly rates, daily rates, and weekly rates.

## Frontend Development

- Designed a user-friendly interface where users can input customer details (name, email, address, etc.), pickup date, drop-off date, discounts, and additional charges.
- Displayed the fetched car details with options for the user to select a car.

## Backend Development

- Calculated the total rental charges considering the rental duration, selected car rates, discounts, and additional charges. Ensured the smallest amount is taken into consideration if the total amount using the hourly rate exceeds the amount using the daily rate. The daily rate to weekly rate is the same.

## Invoice Generation ( I am working on this, 50 % Done)

- Created an invoice based on the inputs provided. Every modification is visible to the user instantly.
- Formatted the invoice with all necessary details including customer information, car details, rental duration, charges, discounts, additional charges, and total amount payable.

## Printing Functionality

- Implemented a feature to print/download the generated invoice.
- Used integrated a third-party library for printing `react-to-print` .

## Testing

- Thoroughly tested the application to ensure all functionalities work as expected. ( Execpt Printing Functionality )
- Tested different scenarios such as different rental durations, discounts, and additional charges.

## Installation

### Client

```bash
# Install dependencies
npm install

# Navigate to client directory
cd client

# Run the client
npm start
```

### Server

```
# Install dependencies
npm install

# Navigate to server directory
cd server

# Run the server
npm start
```

### API DOCUMENTATION

API documentation can be found [here](https://documenter.getpostman.com/view/12853812/2sA35G4N6v).
