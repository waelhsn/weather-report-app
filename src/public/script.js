document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/weather');
    const weatherData = await response.json();

    const tableBody = document.querySelector('#weather-table tbody');
    tableBody.innerHTML = '';

    weatherData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.city}</td>
            <td>${data.temperature}°C</td>
            <td>${data.description}</td>
        `;
        tableBody.appendChild(row);
    });
});