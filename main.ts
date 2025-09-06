let 임슬기 = 0
input.onButtonPressed(Button.A, function () {
    임슬기 = randint(1, 4)
    if (임슬기 == 1) {
        basic.showNumber(1)
    } else if (임슬기 == 2) {
        basic.showNumber(2)
    } else if (임슬기 == 3) {
        basic.showNumber(3)
    } else {
        basic.showNumber(4)
    }
})
