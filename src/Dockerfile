# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Set environment variables (you can modify this or use .env in the container)
# If using dotenv, make sure to load the environment variables before starting the app
ENV NODE_ENV=production
ENV API_KEY=your_openweather_api_key_here

# Command to run the application
CMD ["node", "server.js"]
