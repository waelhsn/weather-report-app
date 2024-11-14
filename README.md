# Weather Report



## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [OpenWeatherMap API Key](https://openweathermap.org/api)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/weather-report-app.git
    cd weather-report
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the project and add your OpenWeatherMap API key:

    ```env
    API_KEY=your_openweathermap_api_key
    ```

## Running the Application

1. Start the server:

    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `server.js`: The main server file that sets up the Express server and handles API requests.
- `cities.js`: A module that exports an array of city names.
- `public/`: The directory containing static files (HTML, CSS, JavaScript).
  - `index.html`: The main HTML file.
  - `styles.css`: The CSS file for styling the application.
  - `script.js`: The JavaScript file for fetching and displaying weather data.

# Docker

## Prerequisites

- Docker
- Docker Compose

## Docker Instructions

### 1. Build the Docker image
```cmd
docker build -t list-js .
 ```

### 2. Run the iamge with Environment variable



```cmd
docker run -p 3000:3000 -e API_KEY=your_openweathermap_api_key
 ```
 