(()=>{
    "use strict";
    var e = {}
      , t = {};
    function r(o) {
        var a = t[o];
        if (void 0 !== a)
            return a.exports;
        var n = t[o] = {
            id: o,
            loaded: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, r),
        n.loaded = !0,
        n.exports
    }
    r.m = e,
    r.amdO = {},
    (()=>{
        var e = [];
        r.O = ((t,o,a,n)=>{
            if (!o) {
                var c = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    for (var [o,a,n] = e[s], d = !0, i = 0; i < o.length; i++)
                        (!1 & n || c >= n) && Object.keys(r.O).every(e=>r.O[e](o[i])) ? o.splice(i--, 1) : (d = !1,
                        n < c && (c = n));
                    if (d) {
                        e.splice(s--, 1);
                        var f = a();
                        void 0 !== f && (t = f)
                    }
                }
                return t
            }
            n = n || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > n; s--)
                e[s] = e[s - 1];
            e[s] = [o, a, n]
        }
        )
    }
    )(),
    r.F = {},
    r.E = (e=>{
        Object.keys(r.F).map(t=>{
            r.F[t](e)
        }
        )
    }
    ),
    r.n = (e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ),
    r.d = ((e,t)=>{
        for (var o in t)
            r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
    }
    ),
    r.f = {},
    r.e = (e=>Promise.all(Object.keys(r.f).reduce((t,o)=>(r.f[o](e, t),
    t), []))),
    r.u = (e=>({
        327: "PrivacyPolicy",
        451: "StemUpload",
        856: "PasswordChange",
        900: "npm.slugify",
        1840: "components-CloseButton",
        1866: "components-DevMenuTrigger",
        1918: "Account",
        2868: "MusicVideos",
        3383: "AccountLogin",
        3693: "components-AlbumPreviewLogin",
        3754: "components-DeviceFirmwareDemo",
        3775: "TrackManager",
        4513: "npm.react-fast-compare",
        4958: "DeviceConfig",
        5009: "FactoryReset",
        5083: "FAQ",
        5508: "npm.jszip",
        5735: "Updating",
        5779: "npm.react-helmet",
        5908: "RefundPolicy",
        6130: "components-Menu",
        6150: "Registration",
        6521: "Controls",
        6630: "PasswordReset",
        6743: "Terms",
        7203: "Platform",
        7452: "ConfirmEmailUpdate",
        7713: "components-ProductVideo",
        8317: "npm.file-saver",
        8460: "HomePage",
        9014: "Info",
        9295: "npm.react-side-effect",
        9322: "Remix",
        9642: "DevMenu",
        9679: "ShopifyButton",
        9708: "npm.ios-inner-height",
        9945: "Video"
    }[e] || e) + "." + {
        327: "8384ec15659dfd649140",
        451: "b94719131e8c1d97e617",
        856: "c20abb82dda2cc56dde4",
        900: "1de3f30946e268a77a78",
        1285: "32df5fad3d6ca0ee42d4",
        1840: "7d7d8fe0dfb1b93dc358",
        1866: "c03e5d3de34543b82e3c",
        1918: "9cd6d4a024ad28751ff6",
        2868: "32d95b022f100564ab80",
        3383: "4c9483c0e228f2f61b55",
        3693: "fc97fc15cbe32aa6529e",
        3754: "89f7c53f94647ce2b760",
        3775: "cd2f29bf1b8675688855",
        4513: "b2a68272d1acc29af610",
        4771: "d6d8c5de0ba2d2afdca2",
        4958: "124a9706c70acabae79c",
        5009: "1ead0778779e281ccc70",
        5083: "550ad6251df41f00b318",
        5508: "521494634b39c402bc77",
        5735: "70ac1524b3ed6f50ba41",
        5779: "91bfe73698bd66213a1e",
        5908: "2ebfafce22cbd83c4b06",
        6130: "ded402ee2d0427224ec5",
        6150: "e0c30ce718927883ff3d",
        6521: "76844330d6e8e1800250",
        6630: "97c3cdf3a16506238c64",
        6743: "fc7507a783f3381102f6",
        7203: "8a737148c0fb49f0cc15",
        7452: "7055e6c07c5795209a00",
        7713: "7021eeb121e4c7eb999b",
        8317: "b4c35b8be722bd2463dd",
        8445: "6df6dacb24115308ac14",
        8460: "a9b7d9f2222a97411191",
        9014: "582d57a829bbc3e4165f",
        9295: "bfe98caa5c71ff7974db",
        9322: "348b00d384a3009765c5",
        9642: "e7f0f112e44a2d8492a4",
        9679: "23f5fe41dfc4db5bc882",
        9708: "f4dc577f1c2ee2b32bf5",
        9713: "482b24dd113d6260aacc",
        9945: "6247bec53f82b8de2c79"
    }[e] + ".chunk.js"),
    r.miniCssF = (e=>({
        327: "PrivacyPolicy",
        1866: "components-DevMenuTrigger",
        2868: "MusicVideos",
        3693: "components-AlbumPreviewLogin",
        3754: "components-DeviceFirmwareDemo",
        3775: "TrackManager",
        4958: "DeviceConfig",
        5009: "FactoryReset",
        5083: "FAQ",
        5735: "Updating",
        5908: "RefundPolicy",
        6130: "components-Menu",
        6521: "Controls",
        6743: "Terms",
        7203: "Platform",
        7713: "components-ProductVideo",
        8460: "HomePage",
        9014: "Info",
        9322: "Remix",
        9642: "DevMenu",
        9679: "ShopifyButton",
        9945: "Video"
    }[e] || e) + ".css"),
    r.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window)
                return window
        }
    }(),
    r.hmd = (e=>((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: ()=>{
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e)),
    r.o = ((e,t)=>Object.prototype.hasOwnProperty.call(e, t)),
    (()=>{
        var e = {};
        r.l = ((t,o,a,n)=>{
            if (e[t])
                e[t].push(o);
            else {
                var c, d;
                if (void 0 !== a)
                    for (var i = document.getElementsByTagName("script"), f = 0; f < i.length; f++) {
                        var s = i[f];
                        if (s.getAttribute("src") == t || s.getAttribute("data-webpack") == "blank-board:" + a) {
                            c = s;
                            break
                        }
                    }
                c || (d = !0,
                (c = document.createElement("script")).charset = "utf-8",
                c.timeout = 120,
                r.nc && c.setAttribute("nonce", r.nc),
                c.setAttribute("data-webpack", "blank-board:" + a),
                c.src = t),
                e[t] = [o];
                var l = (r,o)=>{
                    c.onerror = c.onload = null,
                    clearTimeout(u);
                    var a = e[t];
                    if (delete e[t],
                    c.parentNode && c.parentNode.removeChild(c),
                    a && a.forEach(e=>e(o)),
                    r)
                        return r(o)
                }
                  , u = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
                c.onerror = l.bind(null, c.onerror),
                c.onload = l.bind(null, c.onload),
                d && document.head.appendChild(c)
            }
        }
        )
    }
    )(),
    r.r = (e=>{
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ),
    r.nmd = (e=>(e.paths = [],
    e.children || (e.children = []),
    e)),
    r.p = "/",
    (()=>{
        var e = e=>new Promise((t,o)=>{
            var a = r.miniCssF(e)
              , n = r.p + a;
            if (((e,t)=>{
                for (var r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                    var a = (c = r[o]).getAttribute("data-href") || c.getAttribute("href");
                    if ("stylesheet" === c.rel && (a === e || a === t))
                        return c
                }
                var n = document.getElementsByTagName("style");
                for (o = 0; o < n.length; o++) {
                    var c;
                    if ((a = (c = n[o]).getAttribute("data-href")) === e || a === t)
                        return c
                }
            }
            )(a, n))
                return t();
            ((e,t,r,o)=>{
                var a = document.createElement("link");
                a.rel = "stylesheet",
                a.type = "text/css";
                a.onerror = a.onload = (n=>{
                    if (a.onerror = a.onload = null,
                    "load" === n.type)
                        r();
                    else {
                        var c = n && ("load" === n.type ? "missing" : n.type)
                          , d = n && n.target && n.target.href || t
                          , i = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                        i.code = "CSS_CHUNK_LOAD_FAILED",
                        i.type = c,
                        i.request = d,
                        a.parentNode.removeChild(a),
                        o(i)
                    }
                }
                ),
                a.href = t,
                document.head.appendChild(a)
            }
            )(e, n, t, o)
        }
        )
          , t = {
            3666: 0
        };
        r.f.miniCss = ((r,o)=>{
            t[r] ? o.push(t[r]) : 0 !== t[r] && {
                327: 1,
                1285: 1,
                1866: 1,
                2868: 1,
                3693: 1,
                3754: 1,
                3775: 1,
                4958: 1,
                5009: 1,
                5083: 1,
                5735: 1,
                5908: 1,
                6130: 1,
                6521: 1,
                6743: 1,
                7203: 1,
                7713: 1,
                8445: 1,
                8460: 1,
                9014: 1,
                9322: 1,
                9642: 1,
                9679: 1,
                9713: 1,
                9945: 1
            }[r] && o.push(t[r] = e(r).then(()=>{
                t[r] = 0
            }
            , e=>{
                throw delete t[r],
                e
            }
            ))
        }
        )
    }
    )(),
    (()=>{
        var e = {
            3666: 0
        };
        r.f.j = ((t,o)=>{
            var a = r.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    o.push(a[2]);
                else if (3666 != t) {
                    var n = new Promise((r,o)=>a = e[t] = [r, o]);
                    o.push(a[2] = n);
                    var c = r.p + r.u(t)
                      , d = new Error;
                    r.l(c, o=>{
                        if (r.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var n = o && ("load" === o.type ? "missing" : o.type)
                              , c = o && o.target && o.target.src;
                            d.message = "Loading chunk " + t + " failed.\n(" + n + ": " + c + ")",
                            d.name = "ChunkLoadError",
                            d.type = n,
                            d.request = c,
                            a[1](d)
                        }
                    }
                    , "chunk-" + t, t)
                } else
                    e[t] = 0
        }
        ),
        r.F.j = (t=>{
            if ((!r.o(e, t) || void 0 === e[t]) && 3666 != t) {
                e[t] = null;
                var o = document.createElement("link");
                r.nc && o.setAttribute("nonce", r.nc),
                o.rel = "prefetch",
                o.as = "script",
                o.href = r.p + r.u(t),
                document.head.appendChild(o)
            }
        }
        ),
        r.O.j = (t=>0 === e[t]);
        var t = (t,o)=>{
            var a, n, [c,d,i] = o, f = 0;
            if (c.some(t=>0 !== e[t])) {
                for (a in d)
                    r.o(d, a) && (r.m[a] = d[a]);
                if (i)
                    var s = i(r)
            }
            for (t && t(o); f < c.length; f++)
                n = c[f],
                r.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return r.O(s)
        }
          , o = self.webpackChunkblank_board = self.webpackChunkblank_board || [];
        o.forEach(t.bind(null, 0)),
        o.push = t.bind(null, o.push.bind(o))
    }
    )()
}
)();
