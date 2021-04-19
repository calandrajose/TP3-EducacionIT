const setMessage = hour => {
    let message = 'Buenas Noches!'
    if (hour > 5) {
        if (hour < 12) {
            message = 'Buenos Dias!'
        } else if (hour < 19) {
            message = 'Buenas Tardes!'
        }
    }
    return message
}

export default setMessage