/**
 * humanReadable
 * @param seconds
 Write a function, which takes a non-negative integer (seconds) as input and
 returns the time in a human-readable format (HH:MM:SS)

 HH = hours, padded to 2 digits, range: 00 - 99
 MM = minutes, padded to 2 digits, range: 00 - 59
 SS = seconds, padded to 2 digits, range: 00 - 59
 The maximum time never exceeds 359999 (99:59:59)
 */
const humanReadable1 = seconds => {
    const fillZero = x => x>9?Math.floor(x):'0'+x;
    if (!seconds) {
        return '00:00:00';
    }
    if (seconds > 360000) {
        return '99:59:59';
    }
    const hours = Math.floor(seconds/3600);
    seconds -= hours * 3600;

    const minutes = Math.floor(seconds/60);
    seconds -= minutes * 60;
    return [fillZero(hours),fillZero(minutes),fillZero(seconds)].join(":");
};

const humanReadable = seconds => {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
};

export default humanReadable;