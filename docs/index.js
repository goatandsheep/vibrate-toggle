var vibrateInterval;

// Starts vibration at passed in level
function startVibrate(duration) {
    navigator.vibrate(duration);
}

// Stops vibration
function stopVibrate() {
    // Clear interval and stop persistent vibrating
    if(vibrateInterval) clearInterval(vibrateInterval);
    navigator.vibrate(0);
    document.getElementById('state').innerHTML = 'idle'
}

// Start persistent vibration at given duration and interval
// Assumes a number value is given
function startPersistentVibrate(duration=10, interval=5) {
    document.getElementById('state').innerHTML = 'active'
    vibrateInterval = setInterval(function() {
        startVibrate(duration);
    }, interval);
}