const { it, expect } = require('@jest/globals')
const {startVibrate, stopVibrate, isVibrating} = require('../index')

describe('basic test that the code completes', () => {

    it('should vibrate', () => {
        startVibrate()
        const active = isVibrating()
        expect(active).toBe(true)
    })

    it('should stop vibrating', () => {
        startVibrate()
        stopVibrate()
        const active = isVibrating()
        expect(active).toBe(false)
    })

    it('should toggle vibrating on', () => {
        toggleVibrate()
        const active = isVibrating()
        expect(active).toBe(true)
    })

    it('should toggle vibrating on and off', () => {
        toggleVibrate()
        toggleVibrate()
        const active = isVibrating()
        expect(active).toBe(false)
    })
})