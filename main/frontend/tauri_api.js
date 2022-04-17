var navigator = {userAgent:[], appVersion:[]}
var parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire
                if (!n && i) return i(t, !0)
                if (o) return o(t, !0)
                if (u && "string" == typeof t) return u(t)
                var c = new Error("Cannot find module '" + t + "'")
                throw ((c.code = "MODULE_NOT_FOUND"), c)
            }
            ;(p.resolve = function (r) {
                return e[t][1][r] || r
            }),
                (p.cache = {})
            var l = (r[t] = new f.Module(t))
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports
        function p(e) {
            return f(p.resolve(e))
        }
    }
    ;(f.isParcelRequire = !0),
        (f.Module = function (e) {
            ;(this.id = e), (this.bundle = f), (this.exports = {})
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t
                },
                {},
            ]
        })
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1])
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l
              })
            : n && (this[n] = l)
    }
    if (((parcelRequire = f), i)) throw i
    return f
})(
    {
        mJuL: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports._ = o), (exports.a = c), (exports.b = void 0), (exports.c = e), (exports.d = n), (exports.e = a)
                var t = function (e, r) {
                    return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, e) {
                                t.__proto__ = e
                            }) ||
                        function (t, e) {
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                        })(e, r)
                }
                function e(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null")
                    function n() {
                        this.constructor = e
                    }
                    t(e, r), (e.prototype = null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()))
                }
                var r = function () {
                    return (exports.b = r =
                        Object.assign ||
                        function (t) {
                            for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                            return t
                        }).apply(this, arguments)
                }
                function n(t, e) {
                    var r = {}
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n])
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var o = 0
                        for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]])
                    }
                    return r
                }
                function o(t, e, r, n) {
                    return new (r || (r = Promise))(function (o, c) {
                        function a(t) {
                            try {
                                i(n.next(t))
                            } catch (t) {
                                c(t)
                            }
                        }
                        function l(t) {
                            try {
                                i(n.throw(t))
                            } catch (t) {
                                c(t)
                            }
                        }
                        function i(t) {
                            var e
                            t.done
                                ? o(t.value)
                                : ((e = t.value),
                                  e instanceof r
                                      ? e
                                      : new r(function (t) {
                                            t(e)
                                        })).then(a, l)
                        }
                        i((n = n.apply(t, e || [])).next())
                    })
                }
                function c(t, e) {
                    var r,
                        n,
                        o,
                        c,
                        a = {
                            label: 0,
                            sent: function () {
                                if (1 & o[0]) throw o[1]
                                return o[1]
                            },
                            trys: [],
                            ops: [],
                        }
                    return (
                        (c = { next: l(0), throw: l(1), return: l(2) }),
                        "function" == typeof Symbol &&
                            (c[Symbol.iterator] = function () {
                                return this
                            }),
                        c
                    )
                    function l(c) {
                        return function (l) {
                            return (function (c) {
                                if (r) throw new TypeError("Generator is already executing.")
                                for (; a; )
                                    try {
                                        if (((r = 1), n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done)) return o
                                        switch (((n = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                                            case 0:
                                            case 1:
                                                o = c
                                                break
                                            case 4:
                                                return a.label++, { value: c[1], done: !1 }
                                            case 5:
                                                a.label++, (n = c[1]), (c = [0])
                                                continue
                                            case 7:
                                                ;(c = a.ops.pop()), a.trys.pop()
                                                continue
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || (6 !== c[0] && 2 !== c[0]))) {
                                                    a = 0
                                                    continue
                                                }
                                                if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                                                    a.label = c[1]
                                                    break
                                                }
                                                if (6 === c[0] && a.label < o[1]) {
                                                    ;(a.label = o[1]), (o = c)
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    ;(a.label = o[2]), a.ops.push(c)
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop()
                                                continue
                                        }
                                        c = e.call(t, a)
                                    } catch (t) {
                                        ;(c = [6, t]), (n = 0)
                                    } finally {
                                        r = o = 0
                                    }
                                if (5 & c[0]) throw c[1]
                                return { value: c[0] ? c[1] : void 0, done: !0 }
                            })([c, l])
                        }
                    }
                }
                function a(t, e, r) {
                    if (r || 2 === arguments.length) for (var n, o = 0, c = e.length; o < c; o++) (!n && o in e) || (n || (n = Array.prototype.slice.call(e, 0, o)), (n[o] = e[o]))
                    return t.concat(n || Array.prototype.slice.call(e))
                }
                exports.b = r
            },
            {},
        ],
        yZsp: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.a = void 0), (exports.c = r), (exports.i = o), (exports.t = t)
                var e = require("./tslib.es6-6e0f8414.js")
                function t(e, t) {
                    void 0 === t && (t = !1)
                    var o = window.crypto.getRandomValues(new Uint32Array(1))[0],
                        r = "_".concat(o)
                    return (
                        Object.defineProperty(window, r, {
                            value: function (o) {
                                return t && Reflect.deleteProperty(window, r), null == e ? void 0 : e(o)
                            },
                            writable: !1,
                            configurable: !0,
                        }),
                        o
                    )
                }
                function o(o, r) {
                    return (
                        void 0 === r && (r = {}),
                        (0, e._)(this, void 0, void 0, function () {
                            return (0, e.a)(this, function (n) {
                                return [
                                    2,
                                    new Promise(function (n, i) {
                                        var c = t(function (e) {
                                                n(e), Reflect.deleteProperty(window, a)
                                            }, !0),
                                            a = t(function (e) {
                                                i(e), Reflect.deleteProperty(window, c)
                                            }, !0)
                                        window.__TAURI_IPC__((0, e.b)({ cmd: o, callback: c, error: a }, r))
                                    }),
                                ]
                            })
                        })
                    )
                }
                function r(e, t) {
                    return void 0 === t && (t = "asset"), navigator.userAgent.includes("Windows") ? "https://".concat(t, ".localhost/").concat(e) : "".concat(t, "://").concat(e)
                }
                var n = Object.freeze({ __proto__: null, transformCallback: t, invoke: o, convertFileSrc: r })
                exports.a = n
            },
            { "./tslib.es6-6e0f8414.js": "mJuL" },
        ],
        Zozp: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.i = t)
                var e = require("./tslib.es6-6e0f8414.js"),
                    r = require("./tauri-94e4ec1e.js")
                function t(t) {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, r.i)("tauri", t)]
                        })
                    })
                }
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-94e4ec1e.js": "yZsp" },
        ],
        GSNR: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.B = void 0), (exports.a = r), (exports.b = u), (exports.c = s), (exports.d = a), (exports.e = c), (exports.f = void 0), (exports.g = d), (exports.h = p), (exports.i = f), (exports.r = o), (exports.w = n)
                var e,
                    t = require("./tslib.es6-6e0f8414.js"),
                    i = require("./tauri-c3f7456b.js")
                function o(e, o) {
                    return (
                        void 0 === o && (o = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return [2, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "readTextFile", path: e, options: o } })]
                            })
                        })
                    )
                }
                function r(e, o) {
                    return (
                        void 0 === o && (o = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            var r
                            return (0, t.a)(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "readFile", path: e, options: o } })]
                                    case 1:
                                        return (r = t.sent()), [2, Uint8Array.from(r)]
                                }
                            })
                        })
                    )
                }
                function n(e, o) {
                    return (
                        void 0 === o && (o = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return "object" == typeof o && Object.freeze(o), "object" == typeof e && Object.freeze(e), [2, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "writeFile", path: e.path, contents: Array.from(new TextEncoder().encode(e.contents)), options: o } })]
                            })
                        })
                    )
                }
                function u(e, o) {
                    return (
                        void 0 === o && (o = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return "object" == typeof o && Object.freeze(o), "object" == typeof e && Object.freeze(e), [2, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "writeFile", path: e.path, contents: Array.from(e.contents), options: o } })]
                            })
                        })
                    )
                }
                function s(e, o) {
                    return (
                        void 0 === o && (o = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return [2, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "readDir", path: e, options: o } })]
                            })
                        })
                    )
                }
                function a(e, o) {
                    return (
                        void 0 === o && (o = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return [2, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "createDir", path: e, options: o } })]
                            })
                        })
                    )
                }
                function c(e, o) {
                    return (
                        void 0 === o && (o = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return [2, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "removeDir", path: e, options: o } })]
                            })
                        })
                    )
                }
                function d(e, o, r) {
                    return (
                        void 0 === r && (r = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return [2, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "copyFile", source: e, destination: o, options: r } })]
                            })
                        })
                    )
                }
                function p(e, o) {
                    return (
                        void 0 === o && (o = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return [2, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "removeFile", path: e, options: o } })]
                            })
                        })
                    )
                }
                function f(e, o, r) {
                    return (
                        void 0 === r && (r = {}),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return [2, (0, i.i)({ __tauriModule: "Fs", message: { cmd: "renameFile", oldPath: e, newPath: o, options: r } })]
                            })
                        })
                    )
                }
                ;(exports.B = e),
                    (function (e) {
                        ;(e[(e.Audio = 1)] = "Audio"), (e[(e.Cache = 2)] = "Cache"), (e[(e.Config = 3)] = "Config"), (e[(e.Data = 4)] = "Data"), (e[(e.LocalData = 5)] = "LocalData"), (e[(e.Desktop = 6)] = "Desktop"), (e[(e.Document = 7)] = "Document"), (e[(e.Download = 8)] = "Download"), (e[(e.Executable = 9)] = "Executable"), (e[(e.Font = 10)] = "Font"), (e[(e.Home = 11)] = "Home"), (e[(e.Picture = 12)] = "Picture"), (e[(e.Public = 13)] = "Public"), (e[(e.Runtime = 14)] = "Runtime"), (e[(e.Template = 15)] = "Template"), (e[(e.Video = 16)] = "Video"), (e[(e.Resource = 17)] = "Resource"), (e[(e.App = 18)] = "App"), (e[(e.Log = 19)] = "Log"), (e[(e.Temp = 20)] = "Temp")
                    })(e || (exports.B = e = {}))
                var l = Object.freeze({
                    __proto__: null,
                    get BaseDirectory() {
                        return e
                    },
                    get Dir() {
                        return e
                    },
                    readTextFile: o,
                    readBinaryFile: r,
                    writeFile: n,
                    writeBinaryFile: u,
                    readDir: s,
                    createDir: a,
                    removeDir: c,
                    copyFile: d,
                    removeFile: p,
                    renameFile: f,
                })
                exports.f = l
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp" },
        ],
        kBp1: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.a = exports.R = exports.C = exports.B = void 0), (exports.f = a), (exports.g = s), (exports.h = void 0)
                var t,
                    e = require("./tslib.es6-6e0f8414.js"),
                    r = require("./tauri-c3f7456b.js")
                ;(exports.a = t),
                    (function (t) {
                        ;(t[(t.JSON = 1)] = "JSON"), (t[(t.Text = 2)] = "Text"), (t[(t.Binary = 3)] = "Binary")
                    })(t || (exports.a = t = {}))
                var n = (function () {
                        function t(t, e) {
                            ;(this.type = t), (this.payload = e)
                        }
                        return (
                            (t.form = function (e) {
                                var r = {}
                                for (var n in e) {
                                    var o = e[n]
                                    r[n] = "string" == typeof o ? o : Array.from(o)
                                }
                                return new t("Form", r)
                            }),
                            (t.json = function (e) {
                                return new t("Json", e)
                            }),
                            (t.text = function (e) {
                                return new t("Text", e)
                            }),
                            (t.bytes = function (e) {
                                return new t("Bytes", Array.from(e))
                            }),
                            t
                        )
                    })(),
                    o = function (t) {
                        ;(this.url = t.url), (this.status = t.status), (this.ok = this.status >= 200 && this.status < 300), (this.headers = t.headers), (this.rawHeaders = t.rawHeaders), (this.data = t.data)
                    },
                    i = (function () {
                        function n(t) {
                            this.id = t
                        }
                        return (
                            (n.prototype.drop = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, r.i)({ __tauriModule: "Http", message: { cmd: "dropClient", client: this.id } })]
                                    })
                                })
                            }),
                            (n.prototype.request = function (n) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    var i
                                    return (0, e.a)(this, function (e) {
                                        return (
                                            (i = !n.responseType || n.responseType === t.JSON) && (n.responseType = t.Text),
                                            [
                                                2,
                                                (0, r.i)({ __tauriModule: "Http", message: { cmd: "httpRequest", client: this.id, options: n } }).then(function (t) {
                                                    var e = new o(t)
                                                    if (i) {
                                                        try {
                                                            e.data = JSON.parse(e.data)
                                                        } catch (i) {
                                                            if (e.ok && "" === e.data) e.data = {}
                                                            else if (e.ok) throw Error("Failed to parse response `".concat(e.data, "` as JSON: ").concat(i, ";\n              try setting the `responseType` option to `ResponseType.Text` or `ResponseType.Binary` if the API does not return a JSON response."))
                                                        }
                                                        return e
                                                    }
                                                    return e
                                                }),
                                            ]
                                        )
                                    })
                                })
                            }),
                            (n.prototype.get = function (t, r) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (n) {
                                        return [2, this.request((0, e.b)({ method: "GET", url: t }, r))]
                                    })
                                })
                            }),
                            (n.prototype.post = function (t, r, n) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (o) {
                                        return [2, this.request((0, e.b)({ method: "POST", url: t, body: r }, n))]
                                    })
                                })
                            }),
                            (n.prototype.put = function (t, r, n) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (o) {
                                        return [2, this.request((0, e.b)({ method: "PUT", url: t, body: r }, n))]
                                    })
                                })
                            }),
                            (n.prototype.patch = function (t, r) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (n) {
                                        return [2, this.request((0, e.b)({ method: "PATCH", url: t }, r))]
                                    })
                                })
                            }),
                            (n.prototype.delete = function (t, r) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (n) {
                                        return [2, this.request((0, e.b)({ method: "DELETE", url: t }, r))]
                                    })
                                })
                            }),
                            n
                        )
                    })()
                function s(t) {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [
                                2,
                                (0, r.i)({ __tauriModule: "Http", message: { cmd: "createClient", options: t } }).then(function (t) {
                                    return new i(t)
                                }),
                            ]
                        })
                    })
                }
                ;(exports.C = i), (exports.R = o), (exports.B = n)
                var u = null
                function a(t, r) {
                    var n
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return null !== u ? [3, 2] : [4, s()]
                                case 1:
                                    ;(u = o.sent()), (o.label = 2)
                                case 2:
                                    return [2, u.request((0, e.b)({ url: t, method: null !== (n = null == r ? void 0 : r.method) && void 0 !== n ? n : "GET" }, r))]
                            }
                        })
                    })
                }
                var p = Object.freeze({
                    __proto__: null,
                    getClient: s,
                    fetch: a,
                    Body: n,
                    Client: i,
                    Response: o,
                    get ResponseType() {
                        return t
                    },
                })
                exports.h = p
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp" },
        ],
        ie8k: [
            function (require, module, exports) {
                "use strict"
                function e() {
                    return navigator.appVersion.includes("Win")
                }
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.i = e)
            },
            {},
        ],
        eo6y: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.A = k), (exports.B = z), (exports.C = w), (exports.a = o), (exports.b = n), (exports.c = u), (exports.d = a), (exports.e = s), (exports.f = c), (exports.g = d), (exports.h = h), (exports.i = f), (exports.j = v), (exports.k = _), (exports.l = p), (exports.m = l), (exports.n = m), (exports.o = x), (exports.p = void 0), (exports.q = D), (exports.r = P), (exports.s = void 0), (exports.t = g), (exports.u = void 0), (exports.v = M), (exports.w = b), (exports.x = j), (exports.y = q), (exports.z = A)
                var t = require("./tslib.es6-6e0f8414.js"),
                    r = require("./tauri-c3f7456b.js"),
                    e = require("./fs-9194ac62.js"),
                    i = require("./os-check-094ffe86.js")
                function o() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.App } })]
                        })
                    })
                }
                function n() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Audio } })]
                        })
                    })
                }
                function u() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Cache } })]
                        })
                    })
                }
                function a() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Config } })]
                        })
                    })
                }
                function s() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Data } })]
                        })
                    })
                }
                function c() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Desktop } })]
                        })
                    })
                }
                function d() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Document } })]
                        })
                    })
                }
                function h() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Download } })]
                        })
                    })
                }
                function f() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Executable } })]
                        })
                    })
                }
                function v() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Font } })]
                        })
                    })
                }
                function _() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Home } })]
                        })
                    })
                }
                function p() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.LocalData } })]
                        })
                    })
                }
                function l() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Picture } })]
                        })
                    })
                }
                function m() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Public } })]
                        })
                    })
                }
                function P() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Resource } })]
                        })
                    })
                }
                function x() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Runtime } })]
                        })
                    })
                }
                function g() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Template } })]
                        })
                    })
                }
                function M() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Video } })]
                        })
                    })
                }
                function D() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolvePath", path: "", directory: e.B.Log } })]
                        })
                    })
                }
                var y = (0, i.i)() ? "\\" : "/",
                    B = (0, i.i)() ? ";" : ":"
                function b() {
                    for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i]
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "resolve", paths: e } })]
                        })
                    })
                }
                function j(e) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "normalize", path: e } })]
                        })
                    })
                }
                function q() {
                    for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i]
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "join", paths: e } })]
                        })
                    })
                }
                function A(e) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "dirname", path: e } })]
                        })
                    })
                }
                function k(e) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "extname", path: e } })]
                        })
                    })
                }
                function z(e, i) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "basename", path: e, ext: i } })]
                        })
                    })
                }
                function w(e) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Path", message: { cmd: "isAbsolute", path: e } })]
                        })
                    })
                }
                ;(exports.u = B), (exports.s = y)
                var C = Object.freeze({
                    __proto__: null,
                    appDir: o,
                    audioDir: n,
                    cacheDir: u,
                    configDir: a,
                    dataDir: s,
                    desktopDir: c,
                    documentDir: d,
                    downloadDir: h,
                    executableDir: f,
                    fontDir: v,
                    homeDir: _,
                    localDataDir: p,
                    pictureDir: l,
                    publicDir: m,
                    resourceDir: P,
                    runtimeDir: x,
                    templateDir: g,
                    videoDir: M,
                    logDir: D,
                    get BaseDirectory() {
                        return e.B
                    },
                    sep: y,
                    delimiter: B,
                    resolve: b,
                    normalize: j,
                    join: q,
                    dirname: A,
                    extname: k,
                    basename: z,
                    isAbsolute: w,
                })
                exports.p = C
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp", "./fs-9194ac62.js": "GSNR", "./os-check-094ffe86.js": "ie8k" },
        ],
        MFOK: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.a = exports.E = exports.C = void 0), (exports.o = u), (exports.s = void 0)
                var t = require("./tslib.es6-6e0f8414.js"),
                    e = require("./tauri-c3f7456b.js"),
                    n = require("./tauri-94e4ec1e.js")
                function r(r, i, o, s) {
                    return (
                        void 0 === o && (o = []),
                        (0, t._)(this, void 0, void 0, function () {
                            return (0, t.a)(this, function (t) {
                                return "object" == typeof o && Object.freeze(o), [2, (0, e.i)({ __tauriModule: "Shell", message: { cmd: "execute", program: i, args: o, options: s, onEventFn: (0, n.t)(r) } })]
                            })
                        })
                    )
                }
                var i = (function () {
                        function t() {
                            this.eventListeners = Object.create(null)
                        }
                        return (
                            (t.prototype.addEventListener = function (t, e) {
                                t in this.eventListeners ? this.eventListeners[t].push(e) : (this.eventListeners[t] = [e])
                            }),
                            (t.prototype._emit = function (t, e) {
                                if (t in this.eventListeners) for (var n = 0, r = this.eventListeners[t]; n < r.length; n++) (0, r[n])(e)
                            }),
                            (t.prototype.on = function (t, e) {
                                return this.addEventListener(t, e), this
                            }),
                            t
                        )
                    })(),
                    o = (function () {
                        function n(t) {
                            this.pid = t
                        }
                        return (
                            (n.prototype.write = function (n) {
                                return (0, t._)(this, void 0, void 0, function () {
                                    return (0, t.a)(this, function (t) {
                                        return [2, (0, e.i)({ __tauriModule: "Shell", message: { cmd: "stdinWrite", pid: this.pid, buffer: "string" == typeof n ? n : Array.from(n) } })]
                                    })
                                })
                            }),
                            (n.prototype.kill = function () {
                                return (0, t._)(this, void 0, void 0, function () {
                                    return (0, t.a)(this, function (t) {
                                        return [2, (0, e.i)({ __tauriModule: "Shell", message: { cmd: "killChild", pid: this.pid } })]
                                    })
                                })
                            }),
                            n
                        )
                    })(),
                    s = (function (e) {
                        function n(t, n, r) {
                            void 0 === n && (n = [])
                            var o = e.call(this) || this
                            return (o.stdout = new i()), (o.stderr = new i()), (o.program = t), (o.args = "string" == typeof n ? [n] : n), (o.options = null != r ? r : {}), o
                        }
                        return (
                            (0, t.c)(n, e),
                            (n.sidecar = function (t, e, r) {
                                void 0 === e && (e = [])
                                var i = new n(t, e, r)
                                return (i.options.sidecar = !0), i
                            }),
                            (n.prototype.spawn = function () {
                                return (0, t._)(this, void 0, void 0, function () {
                                    var e = this
                                    return (0, t.a)(this, function (t) {
                                        return [
                                            2,
                                            r(
                                                function (t) {
                                                    switch (t.event) {
                                                        case "Error":
                                                            e._emit("error", t.payload)
                                                            break
                                                        case "Terminated":
                                                            e._emit("close", t.payload)
                                                            break
                                                        case "Stdout":
                                                            e.stdout._emit("data", t.payload)
                                                            break
                                                        case "Stderr":
                                                            e.stderr._emit("data", t.payload)
                                                    }
                                                },
                                                this.program,
                                                this.args,
                                                this.options
                                            ).then(function (t) {
                                                return new o(t)
                                            }),
                                        ]
                                    })
                                })
                            }),
                            (n.prototype.execute = function () {
                                return (0, t._)(this, void 0, void 0, function () {
                                    var e = this
                                    return (0, t.a)(this, function (t) {
                                        return [
                                            2,
                                            new Promise(function (t, n) {
                                                e.on("error", n)
                                                var r = [],
                                                    i = []
                                                e.stdout.on("data", function (t) {
                                                    r.push(t)
                                                }),
                                                    e.stderr.on("data", function (t) {
                                                        i.push(t)
                                                    }),
                                                    e.on("close", function (e) {
                                                        t({ code: e.code, signal: e.signal, stdout: r.join("\n"), stderr: i.join("\n") })
                                                    }),
                                                    e.spawn().catch(n)
                                            }),
                                        ]
                                    })
                                })
                            }),
                            n
                        )
                    })(i)
                function u(n, r) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, e.i)({ __tauriModule: "Shell", message: { cmd: "open", path: n, with: r } })]
                        })
                    })
                }
                ;(exports.C = s), (exports.a = o), (exports.E = i)
                var a = Object.freeze({ __proto__: null, Command: s, Child: o, EventEmitter: i, open: u })
                exports.s = a
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp", "./tauri-94e4ec1e.js": "yZsp" },
        ],
        edea: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.e = r), (exports.l = u), (exports.o = o)
                var t = require("./tslib.es6-6e0f8414.js"),
                    e = require("./tauri-c3f7456b.js"),
                    n = require("./tauri-94e4ec1e.js")
                function i(n, i) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, e.i)({ __tauriModule: "Event", message: { cmd: "unlisten", event: n, eventId: i } })]
                        })
                    })
                }
                function r(n, i, r) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return [4, (0, e.i)({ __tauriModule: "Event", message: { cmd: "emit", event: n, windowLabel: i, payload: "string" == typeof r ? r : JSON.stringify(r) } })]
                                case 1:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }
                function u(r, u, o) {
                    return (0, t._)(this, void 0, void 0, function () {
                        var s = this
                        return (0, t.a)(this, function (c) {
                            return [
                                2,
                                (0, e.i)({ __tauriModule: "Event", message: { cmd: "listen", event: r, windowLabel: u, handler: (0, n.t)(o) } }).then(function (e) {
                                    return function () {
                                        return (0, t._)(s, void 0, void 0, function () {
                                            return (0, t.a)(this, function (t) {
                                                return [2, i(r, e)]
                                            })
                                        })
                                    }
                                }),
                            ]
                        })
                    })
                }
                function o(e, n, r) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [
                                2,
                                u(e, n, function (t) {
                                    r(t), i(e, t.id).catch(function () {})
                                }),
                            ]
                        })
                    })
                }
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp", "./tauri-94e4ec1e.js": "yZsp" },
        ],
        LpnK: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.b = exports.a = exports.W = exports.U = exports.P = exports.L = void 0), (exports.c = d), (exports.f = exports.e = exports.d = void 0), (exports.g = s), (exports.h = f), (exports.i = y), (exports.p = _), (exports.w = void 0)
                var t,
                    e = require("./tslib.es6-6e0f8414.js"),
                    i = require("./tauri-c3f7456b.js"),
                    n = require("./event-975cbc7a.js"),
                    o = function (t, e) {
                        ;(this.type = "Logical"), (this.width = t), (this.height = e)
                    },
                    r = (function () {
                        function t(t, e) {
                            ;(this.type = "Physical"), (this.width = t), (this.height = e)
                        }
                        return (
                            (t.prototype.toLogical = function (t) {
                                return new o(this.width / t, this.height / t)
                            }),
                            t
                        )
                    })(),
                    a = function (t, e) {
                        ;(this.type = "Logical"), (this.x = t), (this.y = e)
                    },
                    u = (function () {
                        function t(t, e) {
                            ;(this.type = "Physical"), (this.x = t), (this.y = e)
                        }
                        return (
                            (t.prototype.toLogical = function (t) {
                                return new a(this.x / t, this.y / t)
                            }),
                            t
                        )
                    })()
                function s() {
                    return new m(window.__TAURI_METADATA__.__currentWindow.label, { skip: !0 })
                }
                function d() {
                    return window.__TAURI_METADATA__.__windows.map(function (t) {
                        return new m(t.label, { skip: !0 })
                    })
                }
                ;(exports.f = u),
                    (exports.e = a),
                    (exports.P = r),
                    (exports.L = o),
                    (exports.U = t),
                    (function (t) {
                        ;(t[(t.Critical = 1)] = "Critical"), (t[(t.Informational = 2)] = "Informational")
                    })(t || (exports.U = t = {}))
                var l,
                    c = ["tauri://created", "tauri://error"],
                    h = (function () {
                        function t(t) {
                            ;(this.label = t), (this.listeners = Object.create(null))
                        }
                        return (
                            (t.prototype.listen = function (t, i) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    var o = this
                                    return (0, e.a)(this, function (e) {
                                        return this._handleTauriEvent(t, i)
                                            ? [
                                                  2,
                                                  Promise.resolve(function () {
                                                      var e = o.listeners[t]
                                                      e.splice(e.indexOf(i), 1)
                                                  }),
                                              ]
                                            : [2, (0, n.l)(t, this.label, i)]
                                    })
                                })
                            }),
                            (t.prototype.once = function (t, i) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    var o = this
                                    return (0, e.a)(this, function (e) {
                                        return this._handleTauriEvent(t, i)
                                            ? [
                                                  2,
                                                  Promise.resolve(function () {
                                                      var e = o.listeners[t]
                                                      e.splice(e.indexOf(i), 1)
                                                  }),
                                              ]
                                            : [2, (0, n.o)(t, this.label, i)]
                                    })
                                })
                            }),
                            (t.prototype.emit = function (t, i) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    var o, r
                                    return (0, e.a)(this, function (e) {
                                        if (c.includes(t)) {
                                            for (o = 0, r = this.listeners[t] || []; o < r.length; o++) (0, r[o])({ event: t, id: -1, windowLabel: this.label, payload: i })
                                            return [2, Promise.resolve()]
                                        }
                                        return [2, (0, n.e)(t, this.label, i)]
                                    })
                                })
                            }),
                            (t.prototype._handleTauriEvent = function (t, e) {
                                return !!c.includes(t) && (t in this.listeners ? this.listeners[t].push(e) : (this.listeners[t] = [e]), !0)
                            }),
                            t
                        )
                    })(),
                    p = (function (n) {
                        function o() {
                            return (null !== n && n.apply(this, arguments)) || this
                        }
                        return (
                            (0, e.c)(o, n),
                            (o.prototype.scaleFactor = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "scaleFactor" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.innerPosition = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [
                                            2,
                                            (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "innerPosition" } } } }).then(function (t) {
                                                var e = t.x,
                                                    i = t.y
                                                return new u(e, i)
                                            }),
                                        ]
                                    })
                                })
                            }),
                            (o.prototype.outerPosition = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [
                                            2,
                                            (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "outerPosition" } } } }).then(function (t) {
                                                var e = t.x,
                                                    i = t.y
                                                return new u(e, i)
                                            }),
                                        ]
                                    })
                                })
                            }),
                            (o.prototype.innerSize = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [
                                            2,
                                            (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "innerSize" } } } }).then(function (t) {
                                                var e = t.width,
                                                    i = t.height
                                                return new r(e, i)
                                            }),
                                        ]
                                    })
                                })
                            }),
                            (o.prototype.outerSize = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [
                                            2,
                                            (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "outerSize" } } } }).then(function (t) {
                                                var e = t.width,
                                                    i = t.height
                                                return new r(e, i)
                                            }),
                                        ]
                                    })
                                })
                            }),
                            (o.prototype.isFullscreen = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isFullscreen" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.isMaximized = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isMaximized" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.isDecorated = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isDecorated" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.isResizable = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isResizable" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.isVisible = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "isVisible" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.center = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "center" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.requestUserAttention = function (n) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    var o
                                    return (0, e.a)(this, function (e) {
                                        return (o = null), n && (o = n === t.Critical ? { type: "Critical" } : { type: "Informational" }), [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "requestUserAttention", payload: o } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setResizable = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setResizable", payload: t } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setTitle = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setTitle", payload: t } } } })]
                                    })
                                })
                            }),
                            (o.prototype.maximize = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "maximize" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.unmaximize = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "unmaximize" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.toggleMaximize = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "toggleMaximize" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.minimize = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "minimize" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.unminimize = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "unminimize" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.show = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "show" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.hide = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "hide" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.close = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "close" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setDecorations = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setDecorations", payload: t } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setAlwaysOnTop = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setAlwaysOnTop", payload: t } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setSize = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        if (!t || ("Logical" !== t.type && "Physical" !== t.type)) throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance")
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setSize", payload: { type: t.type, data: { width: t.width, height: t.height } } } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setMinSize = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        if (t && "Logical" !== t.type && "Physical" !== t.type) throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance")
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setMinSize", payload: t ? { type: t.type, data: { width: t.width, height: t.height } } : null } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setMaxSize = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        if (t && "Logical" !== t.type && "Physical" !== t.type) throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance")
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setMaxSize", payload: t ? { type: t.type, data: { width: t.width, height: t.height } } : null } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setPosition = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        if (!t || ("Logical" !== t.type && "Physical" !== t.type)) throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance")
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setPosition", payload: { type: t.type, data: { x: t.x, y: t.y } } } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setFullscreen = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setFullscreen", payload: t } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setFocus = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setFocus" } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setIcon = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setIcon", payload: { icon: "string" == typeof t ? t : Array.from(t) } } } } })]
                                    })
                                })
                            }),
                            (o.prototype.setSkipTaskbar = function (t) {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (e) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "setSkipTaskbar", payload: t } } } })]
                                    })
                                })
                            }),
                            (o.prototype.startDragging = function () {
                                return (0, e._)(this, void 0, void 0, function () {
                                    return (0, e.a)(this, function (t) {
                                        return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { label: this.label, cmd: { type: "startDragging" } } } })]
                                    })
                                })
                            }),
                            o
                        )
                    })(h),
                    m = (function (t) {
                        function n(n, o) {
                            void 0 === o && (o = {})
                            var r = t.call(this, n) || this
                            return (
                                (null == o ? void 0 : o.skip) ||
                                    (0, i.i)({ __tauriModule: "Window", message: { cmd: "createWebview", data: { options: (0, e.b)({ label: n }, o) } } })
                                        .then(function () {
                                            return (0, e._)(r, void 0, void 0, function () {
                                                return (0, e.a)(this, function (t) {
                                                    return [2, this.emit("tauri://created")]
                                                })
                                            })
                                        })
                                        .catch(function (t) {
                                            return (0, e._)(r, void 0, void 0, function () {
                                                return (0, e.a)(this, function (e) {
                                                    return [2, this.emit("tauri://error", t)]
                                                })
                                            })
                                        }),
                                r
                            )
                        }
                        return (
                            (0, e.c)(n, t),
                            (n.getByLabel = function (t) {
                                return d().some(function (e) {
                                    return e.label === t
                                })
                                    ? new n(t, { skip: !0 })
                                    : null
                            }),
                            n
                        )
                    })(p)
                function f() {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (t) {
                            return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { cmd: { type: "currentMonitor" } } } })]
                        })
                    })
                }
                function _() {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (t) {
                            return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { cmd: { type: "primaryMonitor" } } } })]
                        })
                    })
                }
                function y() {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (t) {
                            return [2, (0, i.i)({ __tauriModule: "Window", message: { cmd: "manage", data: { cmd: { type: "availableMonitors" } } } })]
                        })
                    })
                }
                ;(exports.W = m), (exports.b = p), (exports.a = h), (exports.d = l), "__TAURI_METADATA__" in window ? (exports.d = l = new m(window.__TAURI_METADATA__.__currentWindow.label, { skip: !0 })) : (console.warn('Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.\nNote that this is not an issue if running this frontend on a browser instead of a Tauri window.'), (exports.d = l = new m("main", { skip: !0 })))
                var g = Object.freeze({
                    __proto__: null,
                    WebviewWindow: m,
                    WebviewWindowHandle: h,
                    WindowManager: p,
                    getCurrent: s,
                    getAll: d,
                    get appWindow() {
                        return l
                    },
                    LogicalSize: o,
                    PhysicalSize: r,
                    LogicalPosition: a,
                    PhysicalPosition: u,
                    get UserAttentionType() {
                        return t
                    },
                    currentMonitor: f,
                    primaryMonitor: _,
                    availableMonitors: y,
                })
                exports.w = g
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp", "./event-975cbc7a.js": "edea" },
        ],
        vfb5: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.E = void 0), (exports.a = s), (exports.b = c), (exports.o = void 0), (exports.p = o), (exports.t = u), (exports.v = n)
                var t = require("./tslib.es6-6e0f8414.js"),
                    e = require("./os-check-094ffe86.js"),
                    r = require("./tauri-c3f7456b.js"),
                    i = (0, e.i)() ? "\r\n" : "\n"
                function o() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Os", message: { cmd: "platform" } })]
                        })
                    })
                }
                function n() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Os", message: { cmd: "version" } })]
                        })
                    })
                }
                function u() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Os", message: { cmd: "osType" } })]
                        })
                    })
                }
                function s() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Os", message: { cmd: "arch" } })]
                        })
                    })
                }
                function c() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "Os", message: { cmd: "tempdir" } })]
                        })
                    })
                }
                exports.E = i
                var d = Object.freeze({ __proto__: null, EOL: i, platform: o, version: n, type: u, arch: s, tempdir: c })
                exports.o = d
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./os-check-094ffe86.js": "ie8k", "./tauri-c3f7456b.js": "Zozp" },
        ],
        ydqC: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.a = void 0), (exports.b = r), (exports.c = n), (exports.g = i)
                var e = require("./tslib.es6-6e0f8414.js"),
                    t = require("./tauri-c3f7456b.js")
                function r() {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.i)({ __tauriModule: "App", message: { cmd: "getAppVersion" } })]
                        })
                    })
                }
                function i() {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.i)({ __tauriModule: "App", message: { cmd: "getAppName" } })]
                        })
                    })
                }
                function n() {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.i)({ __tauriModule: "App", message: { cmd: "getTauriVersion" } })]
                        })
                    })
                }
                var o = Object.freeze({ __proto__: null, getName: i, getVersion: r, getTauriVersion: n })
                exports.a = o
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp" },
        ],
        Naec: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.c = void 0), (exports.g = r)
                var e = require("./tslib.es6-6e0f8414.js"),
                    t = require("./tauri-c3f7456b.js")
                function r() {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.i)({ __tauriModule: "Cli", message: { cmd: "cliMatches" } })]
                        })
                    })
                }
                var i = Object.freeze({ __proto__: null, getMatches: r })
                exports.c = i
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp" },
        ],
        sHBo: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.c = void 0), (exports.r = i), (exports.w = t)
                var e = require("./tslib.es6-6e0f8414.js"),
                    r = require("./tauri-c3f7456b.js")
                function t(t) {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, r.i)({ __tauriModule: "Clipboard", message: { cmd: "writeText", data: t } })]
                        })
                    })
                }
                function i() {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, r.i)({ __tauriModule: "Clipboard", message: { cmd: "readText" } })]
                        })
                    })
                }
                var o = Object.freeze({ __proto__: null, writeText: t, readText: i })
                exports.c = o
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp" },
        ],
        UEiH: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.a = n), (exports.c = s), (exports.d = void 0), (exports.m = r), (exports.o = i), (exports.s = o)
                var e = require("./tslib.es6-6e0f8414.js"),
                    t = require("./tauri-c3f7456b.js")
                function i(i) {
                    return (
                        void 0 === i && (i = {}),
                        (0, e._)(this, void 0, void 0, function () {
                            return (0, e.a)(this, function (e) {
                                return "object" == typeof i && Object.freeze(i), [2, (0, t.i)({ __tauriModule: "Dialog", message: { cmd: "openDialog", options: i } })]
                            })
                        })
                    )
                }
                function o(i) {
                    return (
                        void 0 === i && (i = {}),
                        (0, e._)(this, void 0, void 0, function () {
                            return (0, e.a)(this, function (e) {
                                return "object" == typeof i && Object.freeze(i), [2, (0, t.i)({ __tauriModule: "Dialog", message: { cmd: "saveDialog", options: i } })]
                            })
                        })
                    )
                }
                function r(i) {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.i)({ __tauriModule: "Dialog", message: { cmd: "messageDialog", message: i } })]
                        })
                    })
                }
                function n(i, o) {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.i)({ __tauriModule: "Dialog", message: { cmd: "askDialog", title: o, message: i } })]
                        })
                    })
                }
                function s(i, o) {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.i)({ __tauriModule: "Dialog", message: { cmd: "confirmDialog", title: o, message: i } })]
                        })
                    })
                }
                var u = Object.freeze({ __proto__: null, open: i, save: o, message: r, ask: n, confirm: s })
                exports.d = u
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp" },
        ],
        sE69: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.a = i), (exports.e = void 0), (exports.l = r), (exports.o = n)
                var e = require("./tslib.es6-6e0f8414.js"),
                    t = require("./event-975cbc7a.js")
                function r(r, n) {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.l)(r, null, n)]
                        })
                    })
                }
                function n(r, n) {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.o)(r, null, n)]
                        })
                    })
                }
                function i(r, n) {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, t.e)(r, void 0, n)]
                        })
                    })
                }
                var o = Object.freeze({ __proto__: null, listen: r, once: n, emit: i })
                exports.e = o
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./event-975cbc7a.js": "edea" },
        ],
        JpD9: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.a = u), (exports.b = s), (exports.g = void 0), (exports.i = o), (exports.r = i), (exports.u = n)
                var t = require("./tslib.es6-6e0f8414.js"),
                    r = require("./tauri-c3f7456b.js"),
                    e = require("./tauri-94e4ec1e.js")
                function i(i, u) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "GlobalShortcut", message: { cmd: "register", shortcut: i, handler: (0, e.t)(u) } })]
                        })
                    })
                }
                function u(i, u) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "GlobalShortcut", message: { cmd: "registerAll", shortcuts: i, handler: (0, e.t)(u) } })]
                        })
                    })
                }
                function o(e) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "GlobalShortcut", message: { cmd: "isRegistered", shortcut: e } })]
                        })
                    })
                }
                function n(e) {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "GlobalShortcut", message: { cmd: "unregister", shortcut: e } })]
                        })
                    })
                }
                function s() {
                    return (0, t._)(this, void 0, void 0, function () {
                        return (0, t.a)(this, function (t) {
                            return [2, (0, r.i)({ __tauriModule: "GlobalShortcut", message: { cmd: "unregisterAll" } })]
                        })
                    })
                }
                var c = Object.freeze({ __proto__: null, register: i, registerAll: u, isRegistered: o, unregister: n, unregisterAll: s })
                exports.g = c
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp", "./tauri-94e4ec1e.js": "yZsp" },
        ],
        LNFr: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.i = e), (exports.n = void 0), (exports.r = o), (exports.s = n)
                var i = require("./tslib.es6-6e0f8414.js"),
                    t = require("./tauri-c3f7456b.js")
                function e() {
                    return (0, i._)(this, void 0, void 0, function () {
                        return (0, i.a)(this, function (i) {
                            return "default" !== window.Notification.permission ? [2, Promise.resolve("granted" === window.Notification.permission)] : [2, (0, t.i)({ __tauriModule: "Notification", message: { cmd: "isNotificationPermissionGranted" } })]
                        })
                    })
                }
                function o() {
                    return (0, i._)(this, void 0, void 0, function () {
                        return (0, i.a)(this, function (i) {
                            return [2, window.Notification.requestPermission()]
                        })
                    })
                }
                function n(i) {
                    "string" == typeof i ? new window.Notification(i) : new window.Notification(i.title, i)
                }
                var r = Object.freeze({ __proto__: null, sendNotification: n, requestPermission: o, isPermissionGranted: e })
                exports.n = r
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp" },
        ],
        dWio: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.e = t), (exports.p = void 0), (exports.r = i)
                var e = require("./tslib.es6-6e0f8414.js"),
                    r = require("./tauri-c3f7456b.js")
                function t(t) {
                    return (
                        void 0 === t && (t = 0),
                        (0, e._)(this, void 0, void 0, function () {
                            return (0, e.a)(this, function (e) {
                                return [2, (0, r.i)({ __tauriModule: "Process", message: { cmd: "exit", exitCode: t } })]
                            })
                        })
                    )
                }
                function i() {
                    return (0, e._)(this, void 0, void 0, function () {
                        return (0, e.a)(this, function (e) {
                            return [2, (0, r.i)({ __tauriModule: "Process", message: { cmd: "relaunch" } })]
                        })
                    })
                }
                var o = Object.freeze({ __proto__: null, exit: t, relaunch: i })
                exports.p = o
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp" },
        ],
        BFud: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.c = o), (exports.i = r), (exports.u = void 0)
                var t = require("./tslib.es6-6e0f8414.js"),
                    n = require("./event-f97424d7.js")
                function r() {
                    return (0, t._)(this, void 0, void 0, function () {
                        function r() {
                            o && o(), (o = void 0)
                        }
                        var o
                        return (0, t.a)(this, function (t) {
                            return [
                                2,
                                new Promise(function (t, e) {
                                    ;(0, n.l)("tauri://update-status", function (n) {
                                        var o
                                        ;(o = null == n ? void 0 : n.payload).error ? (r(), e(o.error)) : "DONE" === o.status && (r(), t())
                                    })
                                        .then(function (t) {
                                            o = t
                                        })
                                        .catch(function (t) {
                                            throw (r(), t)
                                        }),
                                        (0, n.a)("tauri://update-install").catch(function (t) {
                                            throw (r(), t)
                                        })
                                }),
                            ]
                        })
                    })
                }
                function o() {
                    return (0, t._)(this, void 0, void 0, function () {
                        function r() {
                            o && o(), (o = void 0)
                        }
                        var o
                        return (0, t.a)(this, function (t) {
                            return [
                                2,
                                new Promise(function (t, e) {
                                    ;(0, n.o)("tauri://update-available", function (n) {
                                        var o
                                        ;(o = null == n ? void 0 : n.payload), r(), t({ manifest: o, shouldUpdate: !0 })
                                    }).catch(function (t) {
                                        throw (r(), t)
                                    }),
                                        (0, n.l)("tauri://update-status", function (n) {
                                            var o
                                            ;(o = null == n ? void 0 : n.payload).error ? (r(), e(o.error)) : "UPTODATE" === o.status && (r(), t({ shouldUpdate: !1 }))
                                        })
                                            .then(function (t) {
                                                o = t
                                            })
                                            .catch(function (t) {
                                                throw (r(), t)
                                            }),
                                        (0, n.a)("tauri://update").catch(function (t) {
                                            throw (r(), t)
                                        })
                                }),
                            ]
                        })
                    })
                }
                var e = Object.freeze({ __proto__: null, installUpdate: r, checkUpdate: o })
                exports.u = e
            },
            { "./tslib.es6-6e0f8414.js": "mJuL", "./event-f97424d7.js": "sE69" },
        ],
        gKBI: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }),
                    Object.defineProperty(exports, "app", {
                        enumerable: !0,
                        get: function () {
                            return u.a
                        },
                    }),
                    Object.defineProperty(exports, "cli", {
                        enumerable: !0,
                        get: function () {
                            return c.c
                        },
                    }),
                    Object.defineProperty(exports, "clipboard", {
                        enumerable: !0,
                        get: function () {
                            return f.c
                        },
                    }),
                    Object.defineProperty(exports, "dialog", {
                        enumerable: !0,
                        get: function () {
                            return s.d
                        },
                    }),
                    Object.defineProperty(exports, "event", {
                        enumerable: !0,
                        get: function () {
                            return l.e
                        },
                    }),
                    Object.defineProperty(exports, "fs", {
                        enumerable: !0,
                        get: function () {
                            return t.f
                        },
                    }),
                    Object.defineProperty(exports, "globalShortcut", {
                        enumerable: !0,
                        get: function () {
                            return h.g
                        },
                    }),
                    Object.defineProperty(exports, "http", {
                        enumerable: !0,
                        get: function () {
                            return r.h
                        },
                    }),
                    (exports.invoke = void 0),
                    Object.defineProperty(exports, "notification", {
                        enumerable: !0,
                        get: function () {
                            return p.n
                        },
                    }),
                    Object.defineProperty(exports, "os", {
                        enumerable: !0,
                        get: function () {
                            return a.o
                        },
                    }),
                    Object.defineProperty(exports, "path", {
                        enumerable: !0,
                        get: function () {
                            return n.p
                        },
                    }),
                    Object.defineProperty(exports, "process", {
                        enumerable: !0,
                        get: function () {
                            return y.p
                        },
                    }),
                    Object.defineProperty(exports, "shell", {
                        enumerable: !0,
                        get: function () {
                            return o.s
                        },
                    }),
                    Object.defineProperty(exports, "tauri", {
                        enumerable: !0,
                        get: function () {
                            return e.a
                        },
                    }),
                    Object.defineProperty(exports, "updater", {
                        enumerable: !0,
                        get: function () {
                            return d.u
                        },
                    }),
                    Object.defineProperty(exports, "window", {
                        enumerable: !0,
                        get: function () {
                            return i.w
                        },
                    })
                var e = require("./tauri-94e4ec1e.js"),
                    t = require("./fs-9194ac62.js"),
                    r = require("./http-0b777fc2.js"),
                    n = require("./path-8b82d11e.js"),
                    o = require("./shell-606f3ca2.js"),
                    i = require("./window-bdb78264.js"),
                    a = require("./os-08466882.js"),
                    u = require("./app-42cc3d2d.js"),
                    c = require("./cli-10ae93fb.js"),
                    f = require("./clipboard-9faaff6b.js"),
                    s = require("./dialog-6470b656.js"),
                    l = require("./event-f97424d7.js"),
                    h = require("./globalShortcut-3e27c211.js"),
                    p = require("./notification-f9090ece.js"),
                    y = require("./process-c56a56ee.js"),
                    d = require("./updater-9b96cf6f.js")
                function g(e) {
                    return (g =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                              })(e)
                }
                require("./tslib.es6-6e0f8414.js"),
                    require("./tauri-c3f7456b.js"),
                    require("./os-check-094ffe86.js"),
                    require("./event-975cbc7a.js"),
                    (function (e) {
                        var t = (function (e) {
                            var t,
                                r = Object.prototype,
                                n = r.hasOwnProperty,
                                o = "function" == typeof Symbol ? Symbol : {},
                                i = o.iterator || "@@iterator",
                                a = o.asyncIterator || "@@asyncIterator",
                                u = o.toStringTag || "@@toStringTag"
                            function c(e, t, r) {
                                return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t]
                            }
                            try {
                                c({}, "")
                            } catch (e) {
                                c = function (e, t, r) {
                                    return (e[t] = r)
                                }
                            }
                            function f(e, t, r, n) {
                                var o = t && t.prototype instanceof b ? t : b,
                                    i = Object.create(o.prototype),
                                    a = new S(n || [])
                                return (
                                    (i._invoke = (function (e, t, r) {
                                        var n = l
                                        return function (o, i) {
                                            if (n === p) throw new Error("Generator is already running")
                                            if (n === y) {
                                                if ("throw" === o) throw i
                                                return G()
                                            }
                                            for (r.method = o, r.arg = i; ; ) {
                                                var a = r.delegate
                                                if (a) {
                                                    var u = E(a, r)
                                                    if (u) {
                                                        if (u === d) continue
                                                        return u
                                                    }
                                                }
                                                if ("next" === r.method) r.sent = r._sent = r.arg
                                                else if ("throw" === r.method) {
                                                    if (n === l) throw ((n = y), r.arg)
                                                    r.dispatchException(r.arg)
                                                } else "return" === r.method && r.abrupt("return", r.arg)
                                                n = p
                                                var c = s(e, t, r)
                                                if ("normal" === c.type) {
                                                    if (((n = r.done ? y : h), c.arg === d)) continue
                                                    return { value: c.arg, done: r.done }
                                                }
                                                "throw" === c.type && ((n = y), (r.method = "throw"), (r.arg = c.arg))
                                            }
                                        }
                                    })(e, r, a)),
                                    i
                                )
                            }
                            function s(e, t, r) {
                                try {
                                    return { type: "normal", arg: e.call(t, r) }
                                } catch (e) {
                                    return { type: "throw", arg: e }
                                }
                            }
                            e.wrap = f
                            var l = "suspendedStart",
                                h = "suspendedYield",
                                p = "executing",
                                y = "completed",
                                d = {}
                            function b() {}
                            function v() {}
                            function m() {}
                            var j = {}
                            c(j, i, function () {
                                return this
                            })
                            var w = Object.getPrototypeOf,
                                x = w && w(w(k([])))
                            x && x !== r && n.call(x, i) && (j = x)
                            var O = (m.prototype = b.prototype = Object.create(j))
                            function L(e) {
                                ;["next", "throw", "return"].forEach(function (t) {
                                    c(e, t, function (e) {
                                        return this._invoke(t, e)
                                    })
                                })
                            }
                            function P(e, t) {
                                function r(o, i, a, u) {
                                    var c = s(e[o], e, i)
                                    if ("throw" !== c.type) {
                                        var f = c.arg,
                                            l = f.value
                                        return l && "object" === g(l) && n.call(l, "__await")
                                            ? t.resolve(l.__await).then(
                                                  function (e) {
                                                      r("next", e, a, u)
                                                  },
                                                  function (e) {
                                                      r("throw", e, a, u)
                                                  }
                                              )
                                            : t.resolve(l).then(
                                                  function (e) {
                                                      ;(f.value = e), a(f)
                                                  },
                                                  function (e) {
                                                      return r("throw", e, a, u)
                                                  }
                                              )
                                    }
                                    u(c.arg)
                                }
                                var o
                                this._invoke = function (e, n) {
                                    function i() {
                                        return new t(function (t, o) {
                                            r(e, n, t, o)
                                        })
                                    }
                                    return (o = o ? o.then(i, i) : i())
                                }
                            }
                            function E(e, r) {
                                var n = e.iterator[r.method]
                                if (n === t) {
                                    if (((r.delegate = null), "throw" === r.method)) {
                                        if (e.iterator.return && ((r.method = "return"), (r.arg = t), E(e, r), "throw" === r.method)) return d
                                        ;(r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"))
                                    }
                                    return d
                                }
                                var o = s(n, e.iterator, r.arg)
                                if ("throw" === o.type) return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), d
                                var i = o.arg
                                return i ? (i.done ? ((r[e.resultName] = i.value), (r.next = e.nextLoc), "return" !== r.method && ((r.method = "next"), (r.arg = t)), (r.delegate = null), d) : i) : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), d)
                            }
                            function q(e) {
                                var t = { tryLoc: e[0] }
                                1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t)
                            }
                            function _(e) {
                                var t = e.completion || {}
                                ;(t.type = "normal"), delete t.arg, (e.completion = t)
                            }
                            function S(e) {
                                ;(this.tryEntries = [{ tryLoc: "root" }]), e.forEach(q, this), this.reset(!0)
                            }
                            function k(e) {
                                if (e) {
                                    var r = e[i]
                                    if (r) return r.call(e)
                                    if ("function" == typeof e.next) return e
                                    if (!isNaN(e.length)) {
                                        var o = -1,
                                            a = function r() {
                                                for (; ++o < e.length; ) if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r
                                                return (r.value = t), (r.done = !0), r
                                            }
                                        return (a.next = a)
                                    }
                                }
                                return { next: G }
                            }
                            function G() {
                                return { value: t, done: !0 }
                            }
                            return (
                                (v.prototype = m),
                                c(O, "constructor", m),
                                c(m, "constructor", v),
                                (v.displayName = c(m, u, "GeneratorFunction")),
                                (e.isGeneratorFunction = function (e) {
                                    var t = "function" == typeof e && e.constructor
                                    return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                                }),
                                (e.mark = function (e) {
                                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : ((e.__proto__ = m), c(e, u, "GeneratorFunction")), (e.prototype = Object.create(O)), e
                                }),
                                (e.awrap = function (e) {
                                    return { __await: e }
                                }),
                                L(P.prototype),
                                c(P.prototype, a, function () {
                                    return this
                                }),
                                (e.AsyncIterator = P),
                                (e.async = function (t, r, n, o, i) {
                                    void 0 === i && (i = Promise)
                                    var a = new P(f(t, r, n, o), i)
                                    return e.isGeneratorFunction(r)
                                        ? a
                                        : a.next().then(function (e) {
                                              return e.done ? e.value : a.next()
                                          })
                                }),
                                L(O),
                                c(O, u, "Generator"),
                                c(O, i, function () {
                                    return this
                                }),
                                c(O, "toString", function () {
                                    return "[object Generator]"
                                }),
                                (e.keys = function (e) {
                                    var t = []
                                    for (var r in e) t.push(r)
                                    return (
                                        t.reverse(),
                                        function r() {
                                            for (; t.length; ) {
                                                var n = t.pop()
                                                if (n in e) return (r.value = n), (r.done = !1), r
                                            }
                                            return (r.done = !0), r
                                        }
                                    )
                                }),
                                (e.values = k),
                                (S.prototype = {
                                    constructor: S,
                                    reset: function (e) {
                                        if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(_), !e)) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                                    },
                                    stop: function () {
                                        this.done = !0
                                        var e = this.tryEntries[0].completion
                                        if ("throw" === e.type) throw e.arg
                                        return this.rval
                                    },
                                    dispatchException: function (e) {
                                        if (this.done) throw e
                                        var r = this
                                        function o(n, o) {
                                            return (u.type = "throw"), (u.arg = e), (r.next = n), o && ((r.method = "next"), (r.arg = t)), !!o
                                        }
                                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                            var a = this.tryEntries[i],
                                                u = a.completion
                                            if ("root" === a.tryLoc) return o("end")
                                            if (a.tryLoc <= this.prev) {
                                                var c = n.call(a, "catchLoc"),
                                                    f = n.call(a, "finallyLoc")
                                                if (c && f) {
                                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                                } else if (c) {
                                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                                } else {
                                                    if (!f) throw new Error("try statement without catch or finally")
                                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                                }
                                            }
                                        }
                                    },
                                    abrupt: function (e, t) {
                                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                            var o = this.tryEntries[r]
                                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                                var i = o
                                                break
                                            }
                                        }
                                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null)
                                        var a = i ? i.completion : {}
                                        return (a.type = e), (a.arg = t), i ? ((this.method = "next"), (this.next = i.finallyLoc), d) : this.complete(a)
                                    },
                                    complete: function (e, t) {
                                        if ("throw" === e.type) throw e.arg
                                        return "break" === e.type || "continue" === e.type ? (this.next = e.arg) : "return" === e.type ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end")) : "normal" === e.type && t && (this.next = t), d
                                    },
                                    finish: function (e) {
                                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                            var r = this.tryEntries[t]
                                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), _(r), d
                                        }
                                    },
                                    catch: function (e) {
                                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                            var r = this.tryEntries[t]
                                            if (r.tryLoc === e) {
                                                var n = r.completion
                                                if ("throw" === n.type) {
                                                    var o = n.arg
                                                    _(r)
                                                }
                                                return o
                                            }
                                        }
                                        throw new Error("illegal catch attempt")
                                    },
                                    delegateYield: function (e, r, n) {
                                        return (this.delegate = { iterator: k(e), resultName: r, nextLoc: n }), "next" === this.method && (this.arg = t), d
                                    },
                                }),
                                e
                            )
                        })({})
                        try {
                            regeneratorRuntime = t
                        } catch (e) {
                            "object" === ("undefined" == typeof globalThis ? "undefined" : g(globalThis)) ? (globalThis.regeneratorRuntime = t) : Function("r", "regeneratorRuntime = r")(t)
                        }
                    })()
                var b = e.i
                exports.invoke = b
            },
            { "./tauri-94e4ec1e.js": "yZsp", "./fs-9194ac62.js": "GSNR", "./http-0b777fc2.js": "kBp1", "./path-8b82d11e.js": "eo6y", "./shell-606f3ca2.js": "MFOK", "./window-bdb78264.js": "LpnK", "./os-08466882.js": "vfb5", "./app-42cc3d2d.js": "ydqC", "./cli-10ae93fb.js": "Naec", "./clipboard-9faaff6b.js": "sHBo", "./dialog-6470b656.js": "UEiH", "./event-f97424d7.js": "sE69", "./globalShortcut-3e27c211.js": "JpD9", "./notification-f9090ece.js": "LNFr", "./process-c56a56ee.js": "dWio", "./updater-9b96cf6f.js": "BFud", "./tslib.es6-6e0f8414.js": "mJuL", "./tauri-c3f7456b.js": "Zozp", "./os-check-094ffe86.js": "ie8k", "./event-975cbc7a.js": "edea" },
        ],
        xMru: [
            function (require, module, exports) {
                "use strict"
                Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.tauriApi = void 0)
                var e = t(require("@tauri-apps/api"))
                function t(e) {
                    return e && e.__esModule ? e : { default: e }
                }
                const r = e.default
                globalThis.tauriApi = e
                exports.tauriApi = e
            },
            { "@tauri-apps/api": "gKBI" },
        ],
    },
    {},
    ["xMru"],
    null
)
//# sourceMappingURL=/bundle_me.js.map