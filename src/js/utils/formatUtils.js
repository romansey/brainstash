export function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = (seconds % 3600) % 60;
    return padNumber(hours, 2) + ':' + padNumber(minutes, 2) + ':' + padNumber(remainingSeconds, 2);
}

export function padNumber(number, minDigits) {
    let paddedNumber = '' + number;
    while (paddedNumber.length < minDigits) {
        paddedNumber = '0' + paddedNumber;
    }
    return paddedNumber;
}
