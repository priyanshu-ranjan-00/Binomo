# Binance Futures Trading Page

This project is a clone of the Binance Futures Trading page, built using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS for styling.

## Setup Instructions

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

First, clone the repository to your local machine:

```
git clone https://github.com/priyanshu-ranjan-00/Binomo.git
cd binance-futures-trading-clone
```

### 2. Install Dependencies

Backend :Navigate to the backend directory and install the required dependencies:

```
cd backend
npm install

```

Next, go to the frontend directory and install the dependencies:

```
cd ../frontend
npm install
```

### 3. Configure the Backend

Make sure MongoDB is running on your machine, or use a cloud-based MongoDB instance like MongoDB Atlas.
Create a .env file in the backend folder with the following content:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-database-name
```

Replace your-database-name with your desired MongoDB database name.

### 4. Run the Backend

Navigate to the backend folder and start the backend server:

```
cd ../backend
npm run dev 
```

The backend server will run at http://localhost:5000.

### 5. Run the Frontend

Now, navigate to the frontend folder and start the frontend server:

```
cd ../frontend
npm run dev
```

