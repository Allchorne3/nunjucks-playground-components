function isValidTime(timeString) {
    // Define a regular expression pattern to match time in HH:mm:ss format
    const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/

    // Check if the time string matches the pattern
    return timeRegex.test(timeString)
}

export default isValidTime