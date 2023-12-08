export default {
    jump: new KeyboardEvent('kaydown', {key: 'Space', keyCode: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}