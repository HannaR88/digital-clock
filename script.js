function updateClock() {
  const now = new Date(); // Get current date and time

  let hours = now.getHours();     // Get hours (0-23)
  let minutes = now.getMinutes(); // Get minutes (0-59)
  let seconds = now.getSeconds(); // Get seconds (0-59)

  // Add leading zero if the number is less than 10
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Create time string in HH:MM:SS format
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Update the clock element in HTML
  document.getElementById('clock').textContent = timeString;
}

// Call updateClock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Call it once right away so clock shows immediately
updateClock();
