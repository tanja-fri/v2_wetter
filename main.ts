let hum = 0
let pres = 0
let temp = 0
weatherbit.startWeatherMonitoring()
basic.forever(function () {
    temp = weatherbit.temperature()
    serial.writeValue("t", temp / 100)
    pres = weatherbit.pressure()
    serial.writeValue("p", pres / 256)
    hum = weatherbit.humidity()
    serial.writeValue("h", hum / 1024)
    basic.pause(2000)
})
