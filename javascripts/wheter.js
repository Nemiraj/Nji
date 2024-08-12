document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '5252861ea0a90dadf64f2ca0077f5655'; // Replace with your OpenWeatherMap API key
    const city = 'Bengaluru';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('condition').textContent = `Condition: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error('Detailed Error:', error);
            document.getElementById('weather-widget').innerHTML = '<p>Error fetching weather data. Check the console for details.</p>';
        });
});