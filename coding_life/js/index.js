body = document.querySelector("body")
night_day = document.querySelector("#night_day")


changeThema = () => {
    if (night_day.value === "night") {
        body.classList.add("night");
        night_day.value = "day";
    }
    else {
        body.classList.remove("night")
        night_day.value = "night"
    }
}