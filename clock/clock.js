 // Function to update the clock display
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let format = 'AM';
  
    // Convert to 12-hour format and set AM/PM indicator
    if (hours >= 12) {
      format = 'PM';
      hours -= 12;
    }
    if (hours === 0) {
      hours = 12;
    }
  
    // Add leading zeros to single-digit minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Update clock display
    const clock = document.getElementById('clock');
    clock.textContent = `${hours}:${minutes}:${seconds} ${format}`;
  }
  
  // Function to toggle between 12-hour and 24-hour format
  function toggleFormat() {
    const formatToggleCheckbox = document.getElementById('format-toggle-checkbox');
    const clock = document.getElementById('clock');
  
    if (formatToggleCheckbox.checked) {
      clock.textContent = clock.textContent.replace('AM', '').replace('PM', '');
    } else {
      updateClock();
    }
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  
  // Add event listener to format toggle checkbox
  document.getElementById('format-toggle-checkbox').addEventListener('change', toggleFormat);
  
  // Initial clock update
  updateClock();
  