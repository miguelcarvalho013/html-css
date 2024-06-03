function getWeather() {
    // Simulating weather data retrieval
    var weatherData = {
        temperature: '25°C',
        description: 'Sunny',
        icon: '☀️'
    };

    // Update weather information on the page
    document.getElementById('temperature').textContent = 'Temperature: ' + weatherData.temperature;
    document.getElementById('description').textContent = 'Description: ' + weatherData.description;
    document.getElementById('weatherIcon').textContent = weatherData.icon;
}
