"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonce = (function () {
    let prev = 0;
    return function () {
        const n = Date.now();
        if (n <= prev) {
            prev += 1;
            return prev.toString();
        }
        prev = n;
        return prev.toString();
    };
})();
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
exports.delay = delay;
