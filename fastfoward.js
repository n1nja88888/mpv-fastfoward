'use strict'
var speed = -1, isRepeated = false
mp.add_key_binding('right', null, function(event) {
    var type = event.event
    if (type == 'down')
        speed = mp.get_property('speed')
    else if (type == 'repeat') {
        mp.set_property('pause', 'no')
        mp.set_property('speed', 3)
        mp.osd_message('>>>3.0', 0.1)
    }
    else if (type == 'up') {
        if (mp.get_property('speed') == 3)
            mp.set_property('speed', speed)
        else
            mp.command('seek +5')
    }
}, {
    repeatable: true,
    complex: true
})
