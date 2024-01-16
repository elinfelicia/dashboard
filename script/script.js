function dateTimeFn() {
    const now = new Date();
    
    const currentDate = now.toDateString();
    document.querySelector("#currentDate").textContent = currentDate;

    let hour = now.getHours()
    let minute = now.getMinutes()
    document.querySelector("#currentTime").textContent = `${hour}:${minute}`
}
setInterval(dateTimeFn, 1000)

const axios = require('axios');