function show(tc) {
    tc.querySelector('.cp').style.display = 'block';
}

function hide(tc){
    tc.querySelector('.cp').style.display = 'none';
}

const currentTimeDisplay = document.getElementById('curr-time');
const timeSlider = document.getElementById('music-slider');
const endTimeDisplay = document.getElementById('tot-time');

// Define the duration in seconds
const duration = 195;

function formatTime(seconds) {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = Math.floor(seconds % 60); 
return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Set the maximum value of the slider to the duration
timeSlider.max = duration;

// Display the end time
endTimeDisplay.textContent = formatTime(duration);

// Update the current time display as the slider is moved
timeSlider.addEventListener('input', () => {
const sliderValue = Math.floor(timeSlider.value);
currentTimeDisplay.textContent = formatTime(sliderValue);
});