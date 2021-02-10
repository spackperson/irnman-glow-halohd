input.onButtonPressed(Button.A, function () {
    BacktoBlack()
    BacktoBlack()
})
function BacktoBlack () {
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(208, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(233, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Half))
}
let fade = 0
let white = 0
kitronik_halo_hd.setBuzzerPin()
music.setTempo(77)
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.range(0, 60).showColor(white)
haloDisplay.setBrightness(200)
white = 255
basic.forever(function () {
    haloDisplay.showColor(kitronik_halo_hd.rgb(white, white, 255))
    if (fade == 0) {
        white += -8
        if (white == 47) {
            fade = 1
            basic.pause(400)
        }
    } else {
        white += 8
        if (white == 255) {
            fade = 0
            basic.pause(400)
        }
    }
    basic.pause(100)
})
