(()=>{
    "use strict";
    var e = {}
      , t = {};
    function r(o) {
        var n = t[o];
        if (void 0 !== n)
            return n.exports;
        var a = t[o] = {
            id: o,
            loaded: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, r),
        a.loaded = !0,
        a.exports
    }
    r.m = e,
    r.amdO = {},
    (()=>{
        var e = [];
        r.O = ((t,o,n,a)=>{
            if (!o) {
                var d = 1 / 0;
                for (f = 0; f < e.length; f++) {
                    for (var [o,n,a] = e[f], c = !0, i = 0; i < o.length; i++)
                        (!1 & a || d >= a) && Object.keys(r.O).every(e=>r.O[e](o[i])) ? o.splice(i--, 1) : (c = !1,
                        a < d && (d = a));
                    if (c) {
                        e.splice(f--, 1);
                        var s = n();
                        void 0 !== s && (t = s)
                    }
                }
                return t
            }
            a = a || 0;
            for (var f = e.length; f > 0 && e[f - 1][2] > a; f--)
                e[f] = e[f - 1];
            e[f] = [o, n, a]
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
        451: "38478d8724172872de24",
        856: "c20abb82dda2cc56dde4",
        900: "1de3f30946e268a77a78",
        1285: "bb55d80bcbd0db3b52f7",
        1840: "7d7d8fe0dfb1b93dc358",
        1866: "c03e5d3de34543b82e3c",
        1918: "9cd6d4a024ad28751ff6",
        2868: "32d95b022f100564ab80",
        3383: "4c9483c0e228f2f61b55",
        3693: "fc97fc15cbe32aa6529e",
        3754: "9bd39e973ae0c7792483",
        3775: "7b0397b9a63e07f82e43",
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
        7203: "44904dd64970d90937a1",
        7452: "7055e6c07c5795209a00",
        7713: "7021eeb121e4c7eb999b",
        8317: "b4c35b8be722bd2463dd",
        8445: "6df6dacb24115308ac14",
        8460: "95715b6b0b036c793ccc",
        9014: "582d57a829bbc3e4165f",
        9295: "bfe98caa5c71ff7974db",
        9322: "742b00116a95e29cd550",
        9642: "cf83da60bc45da264cfd",
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
        r.l = ((t,o,n,a)=>{
            if (e[t])
                e[t].push(o);
            else {
                var d, c;
                if (void 0 !== n)
                    for (var i = document.getElementsByTagName("script"), s = 0; s < i.length; s++) {
                        var f = i[s];
                        if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == "blank-board:" + n) {
                            d = f;
                            break
                        }
                    }
                d || (c = !0,
                (d = document.createElement("script")).charset = "utf-8",
                d.timeout = 120,
                r.nc && d.setAttribute("nonce", r.nc),
                d.setAttribute("data-webpack", "blank-board:" + n),
                d.src = t),
                e[t] = [o];
                var l = (r,o)=>{
                    d.onerror = d.onload = null,
                    clearTimeout(b);
                    var n = e[t];
                    if (delete e[t],
                    d.parentNode && d.parentNode.removeChild(d),
                    n && n.forEach(e=>e(o)),
                    r)
                        return r(o)
                }
                  , b = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: d
                }), 12e4);
                d.onerror = l.bind(null, d.onerror),
                d.onload = l.bind(null, d.onload),
                c && document.head.appendChild(d)
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
            var n = r.miniCssF(e)
              , a = r.p + n;
            if (((e,t)=>{
                for (var r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                    var n = (d = r[o]).getAttribute("data-href") || d.getAttribute("href");
                    if ("stylesheet" === d.rel && (n === e || n === t))
                        return d
                }
                var a = document.getElementsByTagName("style");
                for (o = 0; o < a.length; o++) {
                    var d;
                    if ((n = (d = a[o]).getAttribute("data-href")) === e || n === t)
                        return d
                }
            }
            )(n, a))
                return t();
            ((e,t,r,o)=>{
                var n = document.createElement("link");
                n.rel = "stylesheet",
                n.type = "text/css";
                n.onerror = n.onload = (a=>{
                    if (n.onerror = n.onload = null,
                    "load" === a.type)
                        r();
                    else {
                        var d = a && ("load" === a.type ? "missing" : a.type)
                          , c = a && a.target && a.target.href || t
                          , i = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                        i.code = "CSS_CHUNK_LOAD_FAILED",
                        i.type = d,
                        i.request = c,
                        n.parentNode.removeChild(n),
                        o(i)
                    }
                }
                ),
                n.href = t,
                document.head.appendChild(n)
            }
            )(e, a, t, o)
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
            var n = r.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    o.push(n[2]);
                else if (3666 != t) {
                    var a = new Promise((r,o)=>n = e[t] = [r, o]);
                    o.push(n[2] = a);
                    var d = r.p + r.u(t)
                      , c = new Error;
                    r.l(d, o=>{
                        if (r.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                        n)) {
                            var a = o && ("load" === o.type ? "missing" : o.type)
                              , d = o && o.target && o.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + a + ": " + d + ")",
                            c.name = "ChunkLoadError",
                            c.type = a,
                            c.request = d,
                            n[1](c)
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
            var n, a, [d,c,i] = o, s = 0;
            if (d.some(t=>0 !== e[t])) {
                for (n in c)
                    r.o(c, n) && (r.m[n] = c[n]);
                if (i)
                    var f = i(r)
            }
            for (t && t(o); s < d.length; s++)
                a = d[s],
                r.o(e, a) && e[a] && e[a][0](),
                e[a] = 0;
            return r.O(f)
        }
          , o = self.webpackChunkblank_board = self.webpackChunkblank_board || [];
        o.forEach(t.bind(null, 0)),
        o.push = t.bind(null, o.push.bind(o))
    }
    )()
}
)();
