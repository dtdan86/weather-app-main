/*
 * JavaScript Boilerplate for Weather Dashboard Assignment
 * 
 * This JavaScript file is part of the Asynchronous JavaScript assignment.
 * Your task is to complete the functions with appropriate async/await,
 * handle errors, and update the DOM with the fetched data.
 * 
 * Follow the TODO prompts and complete each section to ensure the
 * weather dashboard works as expected.
 */

// Function: Fetch Weather Data
async function fetchWeatherData(location) {
    const url = `https://wttr.in/${location}?format=j1`;
    try {
        // TODO: Fetch data from the API using async/await
        // Hint: Use the fetch() method and await its response
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        // TODO: Handle errors gracefully
        // Hint: Log the error to the console and rethrow it
        console.error('Fetching weather data failed:', error);
        throw error;
    }
}

// Function: Display Weather Data
function displayWeatherData(data) {
    // TODO: Update the DOM with weather data
    // Hint: Use document.getElementById() to select the element and update its innerHTML
    const currentCondition = data.current_condition[0];
    document.getElementById('weatherData').innerHTML = 'Weather: ' + currentCondition.weatherDesc[0].value + '&nbsp;&nbsp;&nbsp;' + 'Temperature: ' + currentCondition.temp_F + '°F';
    
    
}

// Function: Get Weather
async function getWeather(location) {
    try {
        // TODO: Fetch weather data and display it
        // Hint: Call fetchWeatherData() and displayWeatherData()
        const weatherData = await fetchWeatherData(location);
        displayWeatherData(weatherData);
    } catch (error) {
        // TODO: Display an error message in the DOM
        // Hint: Use document.getElementById() to select the element and update its innerHTML
        document.getElementById('weatherData').innerHTML = error;
    }
}

// Event Listener for Form Submission
document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    await getWeather(location);
});
