! function(n) {
    function e(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return n[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var t = {};
    e.m = n, e.c = t, e.d = function(n, t, i) {
        e.o(n, t) || Object.defineProperty(n, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return e.d(t, "a", t), t
    }, e.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, e.p = "", e(e.s = 2)
}([function(n, e, t) {
    "use strict";
    var i = {
        loader: "unity",
        maxRatio: 16 / 9,
        minRatio: 9 / 16,
        thumbnail: "https://img.poki.com/cdn-cgi/image/quality=80,width=100,height=100,fit=cover,g=0.5x0.5,f=auto/a398cd4e645b76810031bd97f8697414.png",
        numScreenshots: 4,
        commentChangeTime: 5e3,
        spinnerRemoveDelay: 1e3,
        fullImageMaxWidth: .6,
        fullImageMaxHeight: .7,
        smallImageSizeOfFullImage: .8,
        animationTargetSizeOfSmallImage: .5,
        transitionDuration: .5,
        slideshowInterval: 5
    };
    window.config.title || console.error(new Error("No title on window.config"));
    var o = Object.assign(i, window.config);
    e.a = o
}, function(n, e, t) {
    "use strict";

    function i(n, e, t, i, o, r, a) {
        try {
            var s = n[r](a),
                c = s.value
        } catch (n) {
            return void t(n)
        }
        s.done ? e(c) : Promise.resolve(c).then(i, o)
    }

    function o(n) {
        return function() {
            var e = this,
                t = arguments;
            return new Promise(function(o, r) {
                function a(n) {
                    i(c, o, r, a, s, "next", n)
                }

                function s(n) {
                    i(c, o, r, a, s, "throw", n)
                }
                var c = n.apply(e, t);
                a(void 0)
            })
        }
    }

    function r() {
        return a.apply(this, arguments)
    }

    function a() {
        return a = o(x.a.mark(function n() {
            var e, t, i, o, r, a, c;
            return x.a.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        return m = document.getElementById("slideshow"), p = document.getElementById("slideshow-top"), g = document.getElementById("slideshow-nav"), w = document.getElementById("slideshow-images"), p.className = "active", n.prev = 5, n.next = 8, f("".concat(B, "screenshots/1-small.jpg").concat(I));
                    case 8:
                        e = n.sent, n.next = 16;
                        break;
                    case 11:
                        return n.prev = 11, n.t0 = n.catch(5), n.next = 15, f("".concat(B, "screenshots/1.jpg").concat(I));
                    case 15:
                        e = n.sent;
                    case 16:
                        for (t = h(), t.className = "".concat(L, " middle"), t.setAttribute("fullImageLoaded", !0), t.setAttribute("data-idx", 0), t.appendChild(e), w.appendChild(t), m.className = "active", v = e.width / e.height, y = document.createElement("style"), u(), document.body.appendChild(y), window.addEventListener("resize", u), i = 0; i <= S.a.numScreenshots - 1; i++) o = document.createElement("div"), o.className = "bullet".concat(0 === i ? " active" : ""), o.setAttribute("data-idx", i), g.appendChild(o);
                        return n.next = 31, f("".concat(B, "screenshots/1.jpg").concat(I));
                    case 31:
                        for (r = n.sent, t.querySelector("img").src = r.src, a = function(n) {
                                var e = h(),
                                    t = new Image;
                                t.src = "".concat(B, "screenshots/").concat(n + 1, "-small.jpg").concat(I), e.appendChild(t), e.setAttribute("data-idx", n), 1 === n ? e.className = "".concat(L, " right") : n === S.a.numScreenshots - 1 ? e.className = "".concat(L, " left") : e.className = "".concat(L, " inactive"), w.appendChild(e)
                            }, c = 1; c <= S.a.numScreenshots - 1; c++) a(c);
                        s();
                    case 36:
                    case "end":
                        return n.stop()
                }
            }, n, null, [
                [5, 11]
            ])
        })), a.apply(this, arguments)
    }

    function s() {
        return c.apply(this, arguments)
    }

    function c() {
        return c = o(x.a.mark(function n() {
            var e, t, i, o, r, a;
            return x.a.wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                    case 0:
                        if (e = 1e3 * S.a.slideshowInterval, t = w.querySelector("#slideshow-images .right"), i = t.getAttribute("data-idx") << 0, t.getAttribute("fullImageLoaded")) {
                            n.next = 16;
                            break
                        }
                        return o = Date.now(), n.next = 7, f("".concat(B, "screenshots/").concat(i + 1, ".jpg").concat(I));
                    case 7:
                        r = n.sent, t.querySelector("img").src = r.src, t.setAttribute("fullImageLoaded", !0), clearTimeout(window.slideShowMoveTransitionID), clearTimeout(window.slideShowTimeoutID), a = Date.now() - o, a > e ? l() : window.slideShowTimeoutID = window.setTimeout(l, e - a), n.next = 19;
                        break;
                    case 16:
                        clearTimeout(window.slideShowMoveTransitionID), clearTimeout(window.slideShowTimeoutID), window.slideShowTimeoutID = window.setTimeout(l, e);
                    case 19:
                    case "end":
                        return n.stop()
                }
            }, n)
        })), c.apply(this, arguments)
    }

    function l() {
        if (!E) {
            var n = k + 1;
            n > S.a.numScreenshots - 1 && (n = 0), d(n)
        }
    }

    function d(n) {
        k = n << 0;
        var e = k > 0 ? k - 1 : S.a.numScreenshots - 1,
            t = k < S.a.numScreenshots - 1 ? k + 1 : 0;
        w.querySelectorAll(".image").forEach(function(n) {
            n.className === "".concat(L, " left") && (n.className = "".concat(L, " fromLeft")), n.className === "".concat(L, " right") && (n.className = "".concat(L, " fromRight")), -1 === n.className.indexOf("inactive") && (n.className += " inactive")
        }), w.querySelector('[data-idx="'.concat(k, '"]')).className = "".concat(L, " middle"), w.querySelector('[data-idx="'.concat(e, '"]')).className = "".concat(L, " left"), w.querySelector('[data-idx="'.concat(t, '"]')).className = "".concat(L, " right"), g.querySelectorAll(".bullet").forEach(function(n, e) {
            n.className = "bullet", e === k && (n.className += " active")
        }), window.slideShowMoveTransitionID = window.setTimeout(function() {
            w.querySelectorAll(".inactive").forEach(function(n) {
                n.className = "".concat(L, " inactive fromRight")
            })
        }, 1e3 * S.a.transitionDuration), s()
    }

    function u() {
        var n = window.innerWidth / window.innerHeight,
            e = S.a.fullImageMaxWidth / v * n,
            t = S.a.fullImageMaxWidth;
        e > S.a.fullImageMaxHeight && (e = S.a.fullImageMaxHeight, t = e * v / n);
        var i = t * S.a.smallImageSizeOfFullImage,
            o = .5 - t / 2,
            r = t * S.a.animationTargetSizeOfSmallImage,
            a = -2 * r,
            s = 1 + r,
            c = (1 - t) / 4 - t / 2,
            l = .5 - .5 * t - (i + t) / 2,
            d = 1 - (1 - t) / 4 - t / 2,
            u = .5 + .5 * i,
            f = Math.min(c, l),
            h = Math.max(d, u);
        y.innerHTML = "\n\t\t#slideshow-images {\n\t\t\theight: ".concat(100 * e, "vh;\n\t\t}\n\t\t#slideshow-images .image {\n\t\t\ttransition-duration: ").concat(S.a.transitionDuration, "s;\n\t\t\twidth: ").concat(100 * t, "vw;\n\t\t\theight: ").concat(100 * e, "vh;\n\t\t}\n\t\t#slideshow-images .middle {\n\t\t\ttransform: translateX(").concat(100 * o, "vw);\n\t\t}\n\t\t#slideshow-images .left {\n\t\t\ttransform: translateX(").concat(100 * f, "vw) scale(").concat(S.a.smallImageSizeOfFullImage, ");\n\t\t}\n\t\t#slideshow-images .right {\n\t\t\ttransform: translateX(").concat(100 * h, "vw) scale(").concat(S.a.smallImageSizeOfFullImage, ");\n\t\t}\n\t\t#slideshow-images .inactive.fromLeft {\n\t\t\ttransform: translateX(").concat(100 * a, "vw) scale(").concat(S.a.smallImageSizeOfFullImage * S.a.animationTargetSizeOfSmallImage, ");\n\t\t}\n\t\t#slideshow-images .inactive.fromRight {\n\t\t\ttransform: translateX(").concat(100 * s, "vw) scale(").concat(S.a.smallImageSizeOfFullImage * S.a.animationTargetSizeOfSmallImage, ");\n\t\t}\n\t")
    }

    function f(n) {
        return new Promise(function(e, t) {
            var i = new Image;
            i.addEventListener("load", function() {
                return e(i)
            }), i.addEventListener("error", function(n) {
                i.src.indexOf(".jpg") > 0 ? i.src = i.src.replace(".jpg", ".png") : t(n)
            }), i.src = n
        })
    }

    function h() {
        var n = document.createElement("div");
        return n.className = L, n
    }
    e.a = r;
    var m, p, g, w, v, y, b = t(10),
        x = t.n(b),
        S = t(0),
        L = "image",
        k = 0,
        E = !1,
        I = S.a.screenshotsVersion ? "?v".concat(S.a.screenshotsVersion) : "",
        T = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")),
        C = window.location.hostname.endsWith("game-cdn.poki.com") || window.location.hostname.endsWith(".poki-gdn.com"),
        B = C ? "/cdn-cgi/image/f=auto,quality=78".concat(T, "/") : "";
    window.navigateNext = l, window.removeSlideshowEventListeners = function() {
        E = !0
    }
}, function(n, e, t) {
    n.exports = t(3)
}, function(n, e, t) {
    "use strict";

    function i(n) {
        var e = document.createElement("div");
        return e.id = n, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = t(4),
        r = (t.n(o), t(0)),
        a = (t(9), t(1), t(11)),
        s = (t.n(a), i("loader")),
        c = i("slideshow"),
        l = i("slideshow-top"),
        d = document.createElement("img");
    d.id = "thumbnail", d.alt = r.a.title, d.title = r.a.title;
    var u = r.a.thumbnail;
    u.startsWith("https://img.poki.com/") && (u = "https://img.poki.com/cdn-cgi/image/quality=78,width=40,height=40,fit=cover,g=0.5x0.5,f=auto/".concat(u.substr(21))), d.src = u;
    var f = i("slideshow-top-container"),
        h = i("game-title");
    h.innerText = r.a.title;
    var m = i("progress-spinner");
    m.innerHTML = '<div class="bounce0"></div><div class="bounce1"></div><div class="bounce2">', m.setAttribute("class", "spinner");
    var p = i("progress-container"),
        g = i("progress-bar"),
        w = i("progress-fill");
    w.style.width = "0%";
    var v = i("progress-amount");
    v.innerText = "0%";
    var y = i("progress-comment");
    y.innerText = "Loading";
    var b = i("slideshow-images"),
        x = i("slideshow-nav"),
        S = i("game-container"),
        L = document.createElement("canvas");
    L.setAttribute("id", "game"), s.appendChild(c), c.appendChild(l), c.appendChild(b), c.appendChild(x), l.appendChild(d), l.appendChild(f), f.appendChild(h), f.appendChild(m), f.appendChild(p), p.appendChild(g), p.appendChild(v), f.appendChild(y), g.appendChild(w), S.appendChild(L), document.body.appendChild(s), document.body.appendChild(S)
}, function(n, e, t) {
    var i = t(5);
    "string" == typeof i && (i = [
        [n.i, i, ""]
    ]);
    var o = {
        hmr: !0
    };
    o.transform = void 0, o.insertInto = void 0;
    t(7)(i, o);
    i.locals && (n.exports = i.locals)
}, function(n, e, t) {
    e = n.exports = t(6)(!1), e.push([n.i, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody {\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    background: #002B50;\n    font-family: Torus, Arial, Helvetica, sans-serif;\n    color: #fff;\n}\n\n#game-container {\n    position: absolute !important;\n    left: 50%;\n    top: 50%;\n    display: none;\n}\n\n#game,\n#game canvas {\n    width: 100%;\n    height: 100%;\n}\n\n#loader {\n    width: 100%;\n    height: 100%;\n}\n\n/**\n   * Slideshow\n   */\n\n#slideshow {\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    display: flex;\n    user-select: none;\n}\n\n@font-face {\n    font-family: Torus;\n    src:\n        url('//a.poki.com/fonts/torus-bold-webfont.woff2') format('woff2'),\n        url('//a.poki.com/fonts/torus-bold-webfont.woff') format('woff');\n    font-style: bold;\n    font-weight: 700;\n}\n\n/**\n   * Slideshow - Top section\n   */\n#progress-spinner{\n    margin-left: 0;\n    margin-top: 0;\n    left: 0px;\n    display:none;\n    transform: translate(100%, -50%);\n    width:10vh;\n}\n#progress-spinner >div{\n    width:2vh;\n    height:2vh;\n}\n#thumbnail {\n    box-shadow: 0 1vh 2vh rgba(0, 0, 0, 0.4);\n    /* box-shadow: 0 6px 12px rgba(0, 0, 0, 0.24); */\n    border-radius: 16.667%;\n}\n\n#slideshow-top {\n    display: flex;\n    margin: 2.5vh 0;\n}\n\n#slideshow-top-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    flex-grow: 1;\n}\n\n#game-title, #progress-comment {\n    display: flex;\n    flex-grow: 1;\n    align-items: center;\n    font-size:2vh;\n}\n\n#progress-container {\n    display: flex;\n    align-items: center;\n    flex-grow: 1;\n    transition: 0.2s ease-out all;\n}\n\n#progress-container.done {\n    opacity: 0;\n}\n\n#progress-bar {\n    background: #fff;\n    width: 100%;\n    overflow: hidden;\n}\n\n#progress-fill {\n    background: #3CF7DC;\n    height: 100%;\n    transition: 0.2s ease-out all;\n    animation-name: fillColor;\n    animation-duration: 3.5s;\n    animation-iteration-count: infinite;\n    animation-fill-mode: both;\n}\n\n@keyframes fillColor {\n    0% {\n        background-color: #3CF7DC;\n    }\n\n    25% {\n        background-color: #FFA9BE;\n    }\n\n    50% {\n        background-color: #FFDC00;\n    }\n\n    75% {\n        background-color: #E0AEF5;\n    }\n\n    100% {\n        background-color: #3CF7DC;\n    }\n}\n\n@media (orientation: portrait) {\n    #thumbnail {\n        margin-right: 2.4vh;\n    }\n\n    #game-title h1 {\n        font-size: 2vh;\n    }\n\n    #slideshow-top {\n        width: 70vw;\n    }\n\n    #progress-bar {\n        height: 1vh;\n        border-radius: 0.5vh;\n    }\n\n    #progress-fill {\n        border-radius: 0.5vh;\n    }\n\n    #thumbnail {\n        width: 5vh;\n        height: 5vh;\n    }\n\n    #progress-amount {\n        font-size: 2vh;\n        margin-left: 1.5vh;\n        width: 3vh;\n    }\n}\n\n@media (orientation: landscape) {\n    #thumbnail {\n        margin-right: 3vh;\n    }\n\n    #game-title h1 {\n        font-size: 3vh;\n    }\n\n    #slideshow-top {\n        width: 50vw;\n    }\n\n    #progress-bar {\n        height: 1.2vh;\n        border-radius: 0.6vh;\n    }\n\n    #progress-fill {\n        border-radius: 0.6vh;\n    }\n\n    #thumbnail {\n        width: 7.5vh;\n        height: 7.5vh;\n    }\n\n    #progress-amount {\n        font-size: 2.5vh;\n        margin-left: 1.875vh;\n        width: 3.75vh;\n    }\n}\n\n/**\n   * Slideshow - Images section\n   */\n\n#slideshow-images {\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n}\n\n#slideshow-images .image {\n    position: absolute;\n    box-shadow: 0 2.4vh 3.6vh rgba(0, 0, 0, 0.4);\n    transition-property: transform;\n    transition-timing-function: ease-in-out;\n    perspective: 1000px;\n    left: 0;\n    overflow: hidden;\n    /* border: 1vh solid; */\n}\n\n#slideshow-images .image img {\n    width: 100%;\n    height: 100%;\n}\n\n#slideshow-images .image:nth-of-type(1n) {\n    border-color: #3BE8B0;\n}\n\n#slideshow-images .image:nth-of-type(2n) {\n    border-color: #FF6D92;\n}\n\n#slideshow-images .image:nth-of-type(3n) {\n    border-color: #A177FF;\n}\n\n#slideshow-images .image:nth-of-type(4n) {\n    border-color: #FFD200;\n}\n\n#slideshow-images .left {\n    z-index: 2;\n}\n#slideshow-images .right {\n    z-index: 1;\n}\n\n#slideshow-images .middle {\n    z-index: 3;\n}\n\n#slideshow-images .left img,\n#slideshow-images .right img {\n    transform: scale(1.05);\n}\n\n#slideshow-images .left img,\n#slideshow-images .right img,\n#slideshow-images .fromLeft img,\n#slideshow-images .fromRight img {\n    filter: blur(1vh);\n}\n\n#slideshow-images .inactive {\n    display: none;\n}\n\n#slideshow-images .inactive.fromLeft,\n#slideshow-images .inactive.fromRight {\n    display: block;\n}\n\n/**\n   * Slideshow - Navigation section\n   */\n\n#slideshow-nav {\n    display: flex;\n    justify-content: center;\n    margin: 2.5vh 0;\n}\n\n#slideshow-nav .bullet {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#slideshow-nav .bullet:after {\n    content: '';\n    background: #fff;\n    border-radius: 0.4vh;\n    width: 0.8vh;\n    height: 0.8vh;\n}\n\n#slideshow-nav .bullet.active:after {\n    background: #009CFF;\n}\n\n#slideshow-nav .bullet {\n    width: 2.5vh;\n    height: 2.5vh;\n}\n\n#slideshow-nav .bullet:after {\n    border-radius: 50%;\n    width: 50%;\n    height: 50%;\n}\n\n/**\n   * Pop-in animation\n   */\n\n#slideshow-nav,\n#slideshow-images {\n    opacity: 0;\n    transition: 0.4s all ease-out;\n    transform: translateY(2vh);\n    perspective: 1000px;\n    transition-delay: 400ms;\n}\n\n#slideshow-nav {\n    transition-delay: 600ms;\n}\n\n#slideshow.active #slideshow-images,\n#slideshow.active #slideshow-nav {\n    opacity: 1;\n    transform: translateY(0);\n}\n\n@keyframes bounceInDown {\n\n    from,\n    60%,\n    75%,\n    90%,\n    to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n\n    0% {\n        transform: translate3d(0, -100vh, 0);\n    }\n\n    40% {\n        transform: translate3d(0, 0.5vh, 0);\n    }\n\n    65% {\n        transform: translate3d(0, -0.2vh, 0);\n    }\n\n    80% {\n        transform: translate3d(0, 0.1vh, 0);\n    }\n\n    to {\n        transform: translate3d(0, 0, 0);\n    }\n}\n\n#slideshow-top {\n    transform: translate3d(0, -20vh, 0);\n    opacity: 0;\n}\n\n#slideshow-top.active {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n    animation-name: bounceInDown;\n    animation-duration: 0.5s;\n}\n\n/**\n   * Loading dots\n   */\n.spinner {\n    position: relative;\n    left: -9999px;\n    animation: dot-pulse 1.5s infinite linear;\n    animation-delay: .25s;\n    transform:translate(50vw, 50vh) translate(-130%, -130%);\n  }\n\n  .spinner:before, .spinner:after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n  }\n  .spinner, .spinner:before, .spinner:after{\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n  }\n\n  .spinner:before {\n    animation: dot-pulse 1.5s infinite linear;\n    animation-delay: 0s;\n    left:-20px;\n  }\n\n  .spinner:after {\n    animation: dot-pulse 1.5s infinite linear;\n    animation-delay: .5s;\n    left:20px;\n  }\n\n  @keyframes dot-pulse {\n    0% {\n      box-shadow: 9999px 0 0 -5px #FFF;\n    }\n    30% {\n      box-shadow: 9999px 0 0 2px #FFF;\n    }\n    60%,\n    100% {\n      box-shadow: 9999px 0 0 -5px #FFF;\n    }\n  }\n", ""])
}, function(n, e, t) {
    "use strict";

    function i(n, e) {
        var t = n[1] || "",
            i = n[3];
        if (!i) return t;
        if (e && "function" == typeof btoa) {
            var r = o(i);
            return [t].concat(i.sources.map(function(n) {
                return "/*# sourceURL=" + i.sourceRoot + n + " */"
            })).concat([r]).join("\n")
        }
        return [t].join("\n")
    }

    function o(n) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"
    }
    n.exports = function(n) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var t = i(e, n);
                return e[2] ? "@media " + e[2] + "{" + t + "}" : t
            }).join("")
        }, e.i = function(n, t) {
            "string" == typeof n && (n = [
                [null, n, ""]
            ]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                null != r && (i[r] = !0)
            }
            for (o = 0; o < n.length; o++) {
                var a = n[o];
                null != a[0] && i[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), e.push(a))
            }
        }, e
    }
}, function(n, e, t) {
    function i(n, e) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t],
                o = p[i.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                for (; r < i.parts.length; r++) o.parts.push(u(i.parts[r], e))
            } else {
                for (var a = [], r = 0; r < i.parts.length; r++) a.push(u(i.parts[r], e));
                p[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function o(n, e) {
        for (var t = [], i = {}, o = 0; o < n.length; o++) {
            var r = n[o],
                a = e.base ? r[0] + e.base : r[0],
                s = r[1],
                c = r[2],
                l = r[3],
                d = {
                    css: s,
                    media: c,
                    sourceMap: l
                };
            i[a] ? i[a].parts.push(d) : t.push(i[a] = {
                id: a,
                parts: [d]
            })
        }
        return t
    }

    function r(n, e) {
        var t = v(n.insertInto);
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = x[x.length - 1];
        if ("top" === n.insertAt) i ? i.nextSibling ? t.insertBefore(e, i.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), x.push(e);
        else if ("bottom" === n.insertAt) t.appendChild(e);
        else {
            if ("object" != typeof n.insertAt || !n.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = v(n.insertAt.before, t);
            t.insertBefore(e, o)
        }
    }

    function a(n) {
        if (null === n.parentNode) return !1;
        n.parentNode.removeChild(n);
        var e = x.indexOf(n);
        e >= 0 && x.splice(e, 1)
    }

    function s(n) {
        var e = document.createElement("style");
        if (void 0 === n.attrs.type && (n.attrs.type = "text/css"), void 0 === n.attrs.nonce) {
            var t = d();
            t && (n.attrs.nonce = t)
        }
        return l(e, n.attrs), r(n, e), e
    }

    function c(n) {
        var e = document.createElement("link");
        return void 0 === n.attrs.type && (n.attrs.type = "text/css"), n.attrs.rel = "stylesheet", l(e, n.attrs), r(n, e), e
    }

    function l(n, e) {
        Object.keys(e).forEach(function(t) {
            n.setAttribute(t, e[t])
        })
    }

    function d() {
        return t.nc
    }

    function u(n, e) {
        var t, i, o, r;
        if (e.transform && n.css) {
            if (!(r = "function" == typeof e.transform ? e.transform(n.css) : e.transform.default(n.css))) return function() {};
            n.css = r
        }
        if (e.singleton) {
            var l = b++;
            t = y || (y = s(e)), i = f.bind(null, t, l, !1), o = f.bind(null, t, l, !0)
        } else n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = c(e), i = m.bind(null, t, e), o = function() {
            a(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = s(e), i = h.bind(null, t), o = function() {
            a(t)
        });
        return i(n),
            function(e) {
                if (e) {
                    if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) return;
                    i(n = e)
                } else o()
            }
    }

    function f(n, e, t, i) {
        var o = t ? "" : i.css;
        if (n.styleSheet) n.styleSheet.cssText = L(e, o);
        else {
            var r = document.createTextNode(o),
                a = n.childNodes;
            a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(r, a[e]) : n.appendChild(r)
        }
    }

    function h(n, e) {
        var t = e.css,
            i = e.media;
        if (i && n.setAttribute("media", i), n.styleSheet) n.styleSheet.cssText = t;
        else {
            for (; n.firstChild;) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t))
        }
    }

    function m(n, e, t) {
        var i = t.css,
            o = t.sourceMap,
            r = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || r) && (i = S(i)), o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([i], {
                type: "text/css"
            }),
            s = n.href;
        n.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
    }
    var p = {},
        g = function(n) {
            var e;
            return function() {
                return void 0 === e && (e = n.apply(this, arguments)), e
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        w = function(n, e) {
            return e ? e.querySelector(n) : document.querySelector(n)
        },
        v = function(n) {
            var e = {};
            return function(n, t) {
                if ("function" == typeof n) return n();
                if (void 0 === e[n]) {
                    var i = w.call(this, n, t);
                    if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                        i = i.contentDocument.head
                    } catch (n) {
                        i = null
                    }
                    e[n] = i
                }
                return e[n]
            }
        }(),
        y = null,
        b = 0,
        x = [],
        S = t(8);
    n.exports = function(n, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = g()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var t = o(n, e);
        return i(t, e),
            function(n) {
                for (var r = [], a = 0; a < t.length; a++) {
                    var s = t[a],
                        c = p[s.id];
                    c.refs--, r.push(c)
                }
                if (n) {
                    i(o(n, e), e)
                }
                for (var a = 0; a < r.length; a++) {
                    var c = r[a];
                    if (0 === c.refs) {
                        for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                        delete p[c.id]
                    }
                }
            }
    };
    var L = function() {
        var n = [];
        return function(e, t) {
            return n[e] = t, n.filter(Boolean).join("\n")
        }
    }()
}, function(n, e) {
    n.exports = function(n) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!n || "string" != typeof n) return n;
        var t = e.protocol + "//" + e.host,
            i = t + e.pathname.replace(/\/[^\/]*$/, "/");
        return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(n, e) {
            var o = e.trim().replace(/^"(.*)"$/, function(n, e) {
                return e
            }).replace(/^'(.*)'$/, function(n, e) {
                return e
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)) return n;
            var r;
            return r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? t + o : i + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")"
        })
    }
}, function(n, e, t) {
    "use strict";

    function i() {
        var n = window.innerWidth,
            e = window.innerHeight,
            t = n / e;
        d.style.width = "".concat(n, "px"), d.style.height = "".concat(e, "px"), t > w.a.maxRatio ? d.style.width = "".concat(e * w.a.maxRatio, "px") : t < w.a.minRatio && (d.style.height = "".concat(n / w.a.minRatio, "px"));
        var i = d.getBoundingClientRect();
        d.style.marginLeft = "".concat(-.5 * i.width, "px"), d.style.marginTop = "".concat(-.5 * i.height, "px")
    }

    function o() {
        d = document.getElementById("game-container"), u = document.getElementById("loader"), f = document.getElementById("progress-container"), h = document.getElementById("progress-fill"), m = document.getElementById("progress-amount"), p = document.getElementById("progress-comment"), window.addEventListener("resize", i), window.addEventListener("focus", i), window.PokiSDK.init().then(function() {
            window.pokiBridge ? window.unityGame.SendMessage(window.pokiBridge, "ready") : window.pokiReady = !0
        }).catch(function() {
            window.pokiBridge ? window.unityGame.SendMessage(window.pokiBridge, "adblock") : window.pokiAdBlock = !0, console.info("AdBlocker active")
        }), window.PokiSDK.setDebug(w.a && w.a.debug)
    }

    function r() {
        d.style.display = "block", u.style.display = "none", i(), PokiSDK.gameLoadingFinished(), window.removeSlideshowEventListeners(), g && clearTimeout(g)
    }

    function a(n) {
        var e = 100 * n;
        h.style.width = "".concat(e, "%"), m.innerHTML = "".concat(e << 0, "%"), w.a.fileSize && (m.innerHTML += " of ".concat(w.a.fileSize, "MB"));
        var t = {
            percentageDone: n
        };
        PokiSDK.gameLoadingProgress(t), n >= 1 && "done" !== f.className && (f.className = "done", document.getElementById("progress-comment").innerHTML = "Preparing game...", document.getElementById("progress-spinner").style.display = "flex", g && clearTimeout(g))
    }

    function s() {
        var n = w.a.loadingComments || ["Loading..."];
        n ? (p.innerHTML = n[y], y++, y >= n.length && (y = 0), g = setTimeout(s, w.a.commentChangeTime)) : p.innerHTML = ""
    }

    function c() {
        var n = document.createElement("script");
        n.src = "".concat("Build", "/").concat(w.a.metadata.loader_filename), w.a.dataUrl = "".concat("Build", "/").concat(w.a.metadata.data_filename), w.a.frameworkUrl = "".concat("Build", "/").concat(w.a.metadata.framework_filename), w.a.codeUrl = "".concat("Build", "/").concat(w.a.metadata.code_filename), w.a.streamingAssetsUrl = "StreamingAssets", n.addEventListener("load", function() {
            var n = document.querySelector("#game");
            createUnityInstance(n, w.a, a).then(function(n) {
                window.unityGame = n, r()
            }).catch(function(n) {
                console.error(n)
            })
        }), document.body.appendChild(n), PokiSDK.gameLoadingStart(), w.a.fileSize && (m.innerHTML += " of ".concat(w.a.fileSize, "MB"), m.style.width = "12vh", m.style.whiteSpace = "nowrap"), s()
    }

    function l() {
        window.setTimeout(function() {
            var n = document.getElementById("spinner");
            n && n.parentNode && n.parentNode.removeChild(n)
        }, w.a.spinnerRemoveDelay)
    }
    var d, u, f, h, m, p, g, w = t(0),
        v = t(1),
        y = 0;
    ! function() {
        var n = document.createElement("div");
        n.setAttribute("id", "spinner"), n.className = "spinner", document.body.appendChild(n)
    }(), window.onload = function() {
        o();
        try {
            Object(v.a)().then(function() {
                l()
            })
        } catch (n) {
            console.info("Slideshow loading error", n), l()
        }
        c()
    }
}, function(n, e, t) {
    var i = function(n) {
        "use strict";

        function e(n, e, t, o) {
            var r = e && e.prototype instanceof i ? e : i,
                a = Object.create(r.prototype),
                s = new f(o || []);
            return a._invoke = c(n, t, s), a
        }

        function t(n, e, t) {
            try {
                return {
                    type: "normal",
                    arg: n.call(e, t)
                }
            } catch (n) {
                return {
                    type: "throw",
                    arg: n
                }
            }
        }

        function i() {}

        function o() {}

        function r() {}

        function a(n) {
            ["next", "throw", "return"].forEach(function(e) {
                n[e] = function(n) {
                    return this._invoke(e, n)
                }
            })
        }

        function s(n) {
            function e(i, o, r, a) {
                var s = t(n[i], n, o);
                if ("throw" !== s.type) {
                    var c = s.arg,
                        l = c.value;
                    return l && "object" == typeof l && w.call(l, "__await") ? Promise.resolve(l.__await).then(function(n) {
                        e("next", n, r, a)
                    }, function(n) {
                        e("throw", n, r, a)
                    }) : Promise.resolve(l).then(function(n) {
                        c.value = n, r(c)
                    }, function(n) {
                        return e("throw", n, r, a)
                    })
                }
                a(s.arg)
            }

            function i(n, t) {
                function i() {
                    return new Promise(function(i, o) {
                        e(n, t, i, o)
                    })
                }
                return o = o ? o.then(i, i) : i()
            }
            var o;
            this._invoke = i
        }

        function c(n, e, i) {
            var o = S;
            return function(r, a) {
                if (o === k) throw new Error("Generator is already running");
                if (o === E) {
                    if ("throw" === r) throw a;
                    return m()
                }
                for (i.method = r, i.arg = a;;) {
                    var s = i.delegate;
                    if (s) {
                        var c = l(s, i);
                        if (c) {
                            if (c === I) continue;
                            return c
                        }
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                        if (o === S) throw o = E, i.arg;
                        i.dispatchException(i.arg)
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    o = k;
                    var d = t(n, e, i);
                    if ("normal" === d.type) {
                        if (o = i.done ? E : L, d.arg === I) continue;
                        return {
                            value: d.arg,
                            done: i.done
                        }
                    }
                    "throw" === d.type && (o = E, i.method = "throw", i.arg = d.arg)
                }
            }
        }

        function l(n, e) {
            var i = n.iterator[e.method];
            if (i === p) {
                if (e.delegate = null, "throw" === e.method) {
                    if (n.iterator.return && (e.method = "return", e.arg = p, l(n, e), "throw" === e.method)) return I;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return I
            }
            var o = t(i, n.iterator, e.arg);
            if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, I;
            var r = o.arg;
            return r ? r.done ? (e[n.resultName] = r.value, e.next = n.nextLoc, "return" !== e.method && (e.method = "next", e.arg = p), e.delegate = null, I) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, I)
        }

        function d(n) {
            var e = {
                tryLoc: n[0]
            };
            1 in n && (e.catchLoc = n[1]), 2 in n && (e.finallyLoc = n[2], e.afterLoc = n[3]), this.tryEntries.push(e)
        }

        function u(n) {
            var e = n.completion || {};
            e.type = "normal", delete e.arg, n.completion = e
        }

        function f(n) {
            this.tryEntries = [{
                tryLoc: "root"
            }], n.forEach(d, this), this.reset(!0)
        }

        function h(n) {
            if (n) {
                var e = n[y];
                if (e) return e.call(n);
                if ("function" == typeof n.next) return n;
                if (!isNaN(n.length)) {
                    var t = -1,
                        i = function e() {
                            for (; ++t < n.length;)
                                if (w.call(n, t)) return e.value = n[t], e.done = !1, e;
                            return e.value = p, e.done = !0, e
                        };
                    return i.next = i
                }
            }
            return {
                next: m
            }
        }

        function m() {
            return {
                value: p,
                done: !0
            }
        }
        var p, g = Object.prototype,
            w = g.hasOwnProperty,
            v = "function" == typeof Symbol ? Symbol : {},
            y = v.iterator || "@@iterator",
            b = v.asyncIterator || "@@asyncIterator",
            x = v.toStringTag || "@@toStringTag";
        n.wrap = e;
        var S = "suspendedStart",
            L = "suspendedYield",
            k = "executing",
            E = "completed",
            I = {},
            T = {};
        T[y] = function() {
            return this
        };
        var C = Object.getPrototypeOf,
            B = C && C(C(h([])));
        B && B !== g && w.call(B, y) && (T = B);
        var j = r.prototype = i.prototype = Object.create(T);
        return o.prototype = j.constructor = r, r.constructor = o, r[x] = o.displayName = "GeneratorFunction", n.isGeneratorFunction = function(n) {
            var e = "function" == typeof n && n.constructor;
            return !!e && (e === o || "GeneratorFunction" === (e.displayName || e.name))
        }, n.mark = function(n) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : (n.__proto__ = r, x in n || (n[x] = "GeneratorFunction")), n.prototype = Object.create(j), n
        }, n.awrap = function(n) {
            return {
                __await: n
            }
        }, a(s.prototype), s.prototype[b] = function() {
            return this
        }, n.AsyncIterator = s, n.async = function(t, i, o, r) {
            var a = new s(e(t, i, o, r));
            return n.isGeneratorFunction(i) ? a : a.next().then(function(n) {
                return n.done ? n.value : a.next()
            })
        }, a(j), j[x] = "Generator", j[y] = function() {
            return this
        }, j.toString = function() {
            return "[object Generator]"
        }, n.keys = function(n) {
            var e = [];
            for (var t in n) e.push(t);
            return e.reverse(),
                function t() {
                    for (; e.length;) {
                        var i = e.pop();
                        if (i in n) return t.value = i, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, n.values = h, f.prototype = {
            constructor: f,
            reset: function(n) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = p, this.done = !1, this.delegate = null, this.method = "next", this.arg = p, this.tryEntries.forEach(u), !n)
                    for (var e in this) "t" === e.charAt(0) && w.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = p)
            },
            stop: function() {
                this.done = !0;
                var n = this.tryEntries[0],
                    e = n.completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(n) {
                function e(e, i) {
                    return r.type = "throw", r.arg = n, t.next = e, i && (t.method = "next", t.arg = p), !!i
                }
                if (this.done) throw n;
                for (var t = this, i = this.tryEntries.length - 1; i >= 0; --i) {
                    var o = this.tryEntries[i],
                        r = o.completion;
                    if ("root" === o.tryLoc) return e("end");
                    if (o.tryLoc <= this.prev) {
                        var a = w.call(o, "catchLoc"),
                            s = w.call(o, "finallyLoc");
                        if (a && s) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                        } else if (a) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(n, e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var i = this.tryEntries[t];
                    if (i.tryLoc <= this.prev && w.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === n || "continue" === n) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var r = o ? o.completion : {};
                return r.type = n, r.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, I) : this.complete(r)
            },
            complete: function(n, e) {
                if ("throw" === n.type) throw n.arg;
                return "break" === n.type || "continue" === n.type ? this.next = n.arg : "return" === n.type ? (this.rval = this.arg = n.arg, this.method = "return", this.next = "end") : "normal" === n.type && e && (this.next = e), I
            },
            finish: function(n) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var t = this.tryEntries[e];
                    if (t.finallyLoc === n) return this.complete(t.completion, t.afterLoc), u(t), I
                }
            },
            catch: function(n) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var t = this.tryEntries[e];
                    if (t.tryLoc === n) {
                        var i = t.completion;
                        if ("throw" === i.type) {
                            var o = i.arg;
                            u(t)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(n, e, t) {
                return this.delegate = {
                    iterator: h(n),
                    resultName: e,
                    nextLoc: t
                }, "next" === this.method && (this.arg = p), I
            }
        }, n
    }(n.exports);
    try {
        regeneratorRuntime = i
    } catch (n) {
        Function("r", "regeneratorRuntime = r")(i)
    }
}, function(n, e) {
    window.initPokiBridge = function(n) {
        if (!window.unityGame) return void setTimeout(function() {
            window.initPokiBridge(n)
        }, 100);
        window.pokiReady || window.pokiAdBlock ? window.pokiReady ? window.unityGame.SendMessage(n, "ready") : window.pokiAdBlock && window.unityGame.SendMessage(n, "adblock") : window.pokiBridge = n, window.commercialBreak = function() {
            PokiSDK.commercialBreak().then(function() {
                window.unityGame.SendMessage(n, "commercialBreakCompleted")
            })
        }, window.rewardedBreak = function() {
            var e;
            (e = PokiSDK).rewardedBreak.apply(e, arguments).then(function(e) {
                window.unityGame.SendMessage(n, "rewardedBreakCompleted", e.toString())
            })
        }, window.shareableURL = function(e) {
            PokiSDK.shareableURL(e).then(function(e) {
                window.unityGame.SendMessage(n, "shareableURLResolved", e)
            }).catch(function() {
                window.unityGame.SendMessage(n, "shareableURLRejected")
            })
        }
    }
}]);