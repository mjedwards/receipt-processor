# Receipt Processor Application

This project is a receipt processing application built using Node.js. It allows you to extract and process information from digital receipts.

## Prerequisites

- **Node.js and npm (or yarn)**: Installed on your machine. You can download them from the official website: [https://nodejs.org/en](https://nodejs.org/en). By downloading Node.js on your machine, you will have access to npm.

## Getting Started

### 1. Clone the Project

In a terminal run:

```bash
git clone <project-url>

### 2. Install Dependencies
Open a terminal and navigate to the project root directory and run:

bash
npm install

### 3. Run Locally
After installing the dependencies in the previous step, run the following command:

bash
npm run dev

### 4. Verify Application Running
You should see output in the terminal indicating that the server is running on port 8080.

Once the application is running, you can test the API endpoints using tools like Postman or Insomnia.

### Running the Application with Docker
A Dockerfile is provided, so follow the steps below to run the application.

### 1. Install Docker
If you don't have Docker installed, follow the official installation instructions: https://docs.docker.com/get-docker/

### 2. Build the Docker Image
Open Docker after installation and open a terminal and navigate to the project root directory where the Dockerfile is located and run:

bash
docker build -t receipt-processor .

### 3. Start the Docker Container
Run the following command to start the container:

bash
docker run -p 8080:8080 receipt-processor

This command maps the container's port 8080 to your host machine's port 8080.

### 4. Verify Application Running
You should see output in the terminal indicating that the server is running on port 8080.

### Testing the API
Once the application is running, you can test the API endpoints using tools like Postman or Insomnia.

### Available Endpoints
POST - /receipts/process: This endpoint processes a new receipt.
GET - /receipts/:id/process: This endpoint retrieves a processed receipt with the specified ID.

Request Body Schema (for POST /receipts/process)
json

{
  "retailer": "string",          // Name of the retailer (e.g., "Target")
  "purchaseDate": "string",      // Date of purchase (YYYY-MM-DD format)
  "purchaseTime": "string",      // Time of purchase (e.g., "13:01")
  "items": [
    {
      "shortDescription": "string", // Brief description of the item
      "price": "string"             // Price of the item
    }
    // ... additional items
  ],
  "total": "string"              // Total amount of the receipt
}

Example Request Body
json

{
  "retailer": "Target",
  "purchaseDate": "2022-01-01",
  "purchaseTime": "13:01",
  "items": [
    { "shortDescription": "Mountain Dew 12PK", "price": "6.49" },
    { "shortDescription": "Emils Cheese Pizza", "price": "12.25" },
    { "shortDescription": "Knorr Creamy Chicken", "price": "1.26" },
    { "shortDescription": "Doritos Nacho Cheese", "price": "3.35" },
    { "shortDescription": "Klarbrunn 12-PK 12 FL OZ", "price": "12.00" }
  ],
  "total": "35.35"
}

### Sources
Fetch Rewards Receipt Processor Challenge - https://github.com/fetch-rewards/receipt-processor-challenge?tab=readme-ov-file
```
