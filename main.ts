radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (item.compare("A") == 0) {
        FLAG2 = 1
    } else if (item.compare("0") == 0) {
        FLAG2 = 0
    } else if (item.compare("E") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    } else if (item.compare("F") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (item.compare("G") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
    } else if (item.compare("H") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
    } else if (item.compare("I") == 0) {
        FLAG2 = 3
    }
})
let FLAG2 = 0
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
let flag1 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (FLAG2 == 1) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    } else if (FLAG2 == 3) {
        flag1 += 1
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (false) {
    	
    }
})
