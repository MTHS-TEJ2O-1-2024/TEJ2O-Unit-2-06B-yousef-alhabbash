/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: Sep 2024
 * This program turns led on and off using microbit.
*/


basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})

basic.showString('Yousef')