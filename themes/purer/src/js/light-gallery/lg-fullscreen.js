/** !
 * lg-fullscreen.js | 1.1.0 | February 23rd 2019
 * http://sachinchoolur.github.io/lg-fullscreen.js
 * Copyright (c) 2016 Sachin N;
 * @license GPLv3
 */
!(function (e) { if (typeof exports === 'object' && typeof module !== 'undefined')module.exports = e(); else if (typeof define === 'function' && define.amd)define([], e); else { let n; n = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this, n.LgFullscreen = e(); } }(() => {
  let e; let n; let l; return (function () { function e(n, l, t) { function r(o, c) { if (!l[o]) { if (!n[o]) { const s = typeof require === 'function' && require; if (!c && s) return s(o, !0); if (u) return u(o, !0); const i = new Error(`Cannot find module '${o}'`); throw i.code = 'MODULE_NOT_FOUND', i; } const f = l[o] = { exports: {} }; n[o][0].call(f.exports, (e) => r(n[o][1][e] || e), f, f.exports, e, n, l, t); } return l[o].exports; } for (var u = typeof require === 'function' && require, o = 0; o < t.length; o++)r(t[o]); return r; } return e; }())({
    1: [function (n, l, t) {
      !(function (n, l) { if (typeof e === 'function' && e.amd)e([], l); else if (void 0 !== t)l(); else { const r = { exports: {} }; l(), n.lgFullscreen = r.exports; } }(this, () => {
        function e() { return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement; } const n = Object.assign || function (e) { for (let n = 1; n < arguments.length; n++) { const l = arguments[n]; for (const t in l)Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]); } return e; }; const l = { fullScreen: !0 }; const t = function e(t) { return this.el = t, this.core = window.lgData[this.el.getAttribute('lg-uid')], this.core.s = { ...l, ...this.core.s }, this.init(), this; }; t.prototype.init = function () { let e = ''; if (this.core.s.fullScreen) { if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return; e = '<span class="lg-fullscreen lg-icon"></span>', this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', e), this.fullScreen(); } }, t.prototype.requestFullscreen = function () { const e = document.documentElement; e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen(); }, t.prototype.exitFullscreen = function () { document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(); }, t.prototype.fullScreen = function () { const n = this; utils.on(document, 'fullscreenchange.lgfullscreen webkitfullscreenchange.lgfullscreen mozfullscreenchange.lgfullscreen MSFullscreenChange.lgfullscreen', () => { utils.hasClass(n.core.outer, 'lg-fullscreen-on') ? utils.removeClass(n.core.outer, 'lg-fullscreen-on') : utils.addClass(n.core.outer, 'lg-fullscreen-on'); }), utils.on(this.core.outer.querySelector('.lg-fullscreen'), 'click.lg', () => { e() ? n.exitFullscreen() : n.requestFullscreen(); }); }, t.prototype.destroy = function () { e() && this.exitFullscreen(), utils.off(document, '.lgfullscreen'); }, window.lgModules.fullscreen = t;
      }));
    }, {}],
  }, {}, [1])(1);
}));
