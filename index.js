const ERROR_NO_NAV_VIBRATE = 'No vibration API present'

let _vibrateInterval
let vibrating = false

/**
 * Starts vibration at passed in level
 * @param {Number} duration milliseconds
 */
function _repeatVibrate(duration) {
    navigator.vibrate(duration);
}
    
/**
 * Clear interval and stop persistent vibrating
 * @param {Boolean} [verbose=false]
 */
function stopVibrate(verbose=false) {
    if (verbose && !navigator.vibrate) {
        throw new Error(ERROR_NO_NAV_VIBRATE)
    }
    if(_vibrateInterval) clearInterval(_vibrateInterval);
    navigator.vibrate(0);
    vibrating = false
}

/**
 * getter
 * @returns {Boolean}
 */
function isVibrating() {
    return vibrating
}

/**
 * @param {Number} [duration=2] milliseconds
 * @param {Number} [interval=1] milliseconds
 * @param {Boolean} [verbose=false]
 */
function toggleVibrate(duration=2, interval=1, verbose=false) {
    if (vibrating) {
        stopVibrate()
    } else {
        startVibrate(duration, interval, verbose)
    }
}

    /**
     * Start persistent vibration at given duration and interval
     * @param {Number} [duration=2] milliseconds
     * @param {Number} [interval=1] milliseconds
     * @param {Boolean} [verbose=false]
     */
    function startVibrate(duration=10000, interval=10000, verbose=false) {
        if (verbose && !navigator.vibrate) {
            throw new Error(ERROR_NO_NAV_VIBRATE)
        }
        _repeatVibrate(duration);
        _vibrateInterval = setInterval(function() {
            _repeatVibrate(duration);
        }, interval);
        vibrating = true
    }

module.exports = {
    isVibrating,
    startVibrate,
    stopVibrate,
    toggleVibrate
}
