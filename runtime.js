(()=>{
    "use strict";
    var e = {}
      , t = {};
    function r(a) {
        var n = t[a];
        if (void 0 !== n)
            return n.exports;
        var o = t[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        return e[a].call(o.exports, o, o.exports, r),
        o.loaded = !0,
        o.exports
    }
    r.m = e,
    r.amdO = {},
    (()=>{
        var e = [];
        r.O = ((t,a,n,o)=>{
            if (!a) {
                var c = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [a,n,o] = e[l], d = !0, i = 0; i < a.length; i++)
                        (!1 & o || c >= o) && Object.keys(r.O).every(e=>r.O[e](a[i])) ? a.splice(i--, 1) : (d = !1,
                        o < c && (c = o));
                    if (d) {
                        e.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (t = s)
                    }
                }
                return t
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--)
                e[l] = e[l - 1];
            e[l] = [a, n, o]
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
        for (var a in t)
            r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ),
    r.f = {},
    r.e = (e=>Promise.all(Object.keys(r.f).reduce((t,a)=>(r.f[a](e, t),
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
        9036: "Signup",
        9295: "npm.react-side-effect",
        9322: "Remix",
        9642: "DevMenu",
        9679: "ShopifyButton",
        9708: "npm.ios-inner-height",
        9945: "Video"
    }[e] || e) + "." + {
        327: "8384ec15659dfd649140",
        451: "a8d1e6388d1cfd394ae6",
        856: "c20abb82dda2cc56dde4",
        900: "1de3f30946e268a77a78",
        1840: "336d1414b80228d6760d",
        1866: "c03e5d3de34543b82e3c",
        1918: "9cd6d4a024ad28751ff6",
        2868: "32d95b022f100564ab80",
        3383: "4c9483c0e228f2f61b55",
        3693: "453a335deb2490d26856",
        3754: "9bd39e973ae0c7792483",
        3775: "7b0397b9a63e07f82e43",
        3930: "25c7a26446c9cbd5e49c",
        4513: "b2a68272d1acc29af610",
        4771: "d6d8c5de0ba2d2afdca2",
        4958: "124a9706c70acabae79c",
        5009: "1ead0778779e281ccc70",
        5083: "006860e673abbf7f29b6",
        5508: "521494634b39c402bc77",
        5735: "70ac1524b3ed6f50ba41",
        5779: "91bfe73698bd66213a1e",
        5908: "2ebfafce22cbd83c4b06",
        6130: "de20aa4429b473a869dd",
        6150: "e0c30ce718927883ff3d",
        6521: "76844330d6e8e1800250",
        6630: "97c3cdf3a16506238c64",
        6743: "fc7507a783f3381102f6",
        7203: "4242dc5128a997f60db4",
        7452: "7055e6c07c5795209a00",
        7713: "7021eeb121e4c7eb999b",
        8317: "b4c35b8be722bd2463dd",
        8445: "d04c631a1e7afa99ce56",
        8460: "c3190b5053097fbed776",
        9014: "a3e1a7a0c3f65a3b7c81",
        9036: "c7bc948167082b3cdcc9",
        9295: "bfe98caa5c71ff7974db",
        9322: "742b00116a95e29cd550",
        9642: "ab95fa58e9641ceed535",
        9679: "f179e82cb5919be96abd",
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
        9036: "Signup",
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
        r.l = ((t,a,n,o)=>{
            if (e[t])
                e[t].push(a);
            else {
                var c, d;
                if (void 0 !== n)
                    for (var i = document.getElementsByTagName("script"), s = 0; s < i.length; s++) {
                        var l = i[s];
                        if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == "blank-board:" + n) {
                            c = l;
                            break
                        }
                    }
                c || (d = !0,
                (c = document.createElement("script")).charset = "utf-8",
                c.timeout = 120,
                r.nc && c.setAttribute("nonce", r.nc),
                c.setAttribute("data-webpack", "blank-board:" + n),
                c.src = t),
                e[t] = [a];
                var f = (r,a)=>{
                    c.onerror = c.onload = null,
                    clearTimeout(b);
                    var n = e[t];
                    if (delete e[t],
                    c.parentNode && c.parentNode.removeChild(c),
                    n && n.forEach(e=>e(a)),
                    r)
                        return r(a)
                }
                  , b = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
                c.onerror = f.bind(null, c.onerror),
                c.onload = f.bind(null, c.onload),
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
        var e = e=>new Promise((t,a)=>{
            var n = r.miniCssF(e)
              , o = r.p + n;
            if (((e,t)=>{
                for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                    var n = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                    if ("stylesheet" === c.rel && (n === e || n === t))
                        return c
                }
                var o = document.getElementsByTagName("style");
                for (a = 0; a < o.length; a++) {
                    var c;
                    if ((n = (c = o[a]).getAttribute("data-href")) === e || n === t)
                        return c
                }
            }
            )(n, o))
                return t();
            ((e,t,r,a)=>{
                var n = document.createElement("link");
                n.rel = "stylesheet",
                n.type = "text/css";
                n.onerror = n.onload = (o=>{
                    if (n.onerror = n.onload = null,
                    "load" === o.type)
                        r();
                    else {
                        var c = o && ("load" === o.type ? "missing" : o.type)
                          , d = o && o.target && o.target.href || t
                          , i = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                        i.code = "CSS_CHUNK_LOAD_FAILED",
                        i.type = c,
                        i.request = d,
                        n.parentNode.removeChild(n),
                        a(i)
                    }
                }
                ),
                n.href = t,
                document.head.appendChild(n)
            }
            )(e, o, t, a)
        }
        )
          , t = {
            3666: 0
        };
        r.f.miniCss = ((r,a)=>{
            t[r] ? a.push(t[r]) : 0 !== t[r] && {
                327: 1,
                1866: 1,
                2868: 1,
                3693: 1,
                3754: 1,
                3775: 1,
                3930: 1,
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
                9036: 1,
                9322: 1,
                9642: 1,
                9679: 1,
                9713: 1,
                9945: 1
            }[r] && a.push(t[r] = e(r).then(()=>{
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
        r.f.j = ((t,a)=>{
            var n = r.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n)
                    a.push(n[2]);
                else if (3666 != t) {
                    var o = new Promise((r,a)=>n = e[t] = [r, a]);
                    a.push(n[2] = o);
                    var c = r.p + r.u(t)
                      , d = new Error;
                    r.l(c, a=>{
                        if (r.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                        n)) {
                            var o = a && ("load" === a.type ? "missing" : a.type)
                              , c = a && a.target && a.target.src;
                            d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + c + ")",
                            d.name = "ChunkLoadError",
                            d.type = o,
                            d.request = c,
                            n[1](d)
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
                var a = document.createElement("link");
                r.nc && a.setAttribute("nonce", r.nc),
                a.rel = "prefetch",
                a.as = "script",
                a.href = r.p + r.u(t),
                document.head.appendChild(a)
            }
        }
        ),
        r.O.j = (t=>0 === e[t]);
        var t = (t,a)=>{
            var n, o, [c,d,i] = a, s = 0;
            if (c.some(t=>0 !== e[t])) {
                for (n in d)
                    r.o(d, n) && (r.m[n] = d[n]);
                if (i)
                    var l = i(r)
            }
            for (t && t(a); s < c.length; s++)
                o = c[s],
                r.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return r.O(l)
        }
          , a = self.webpackChunkblank_board = self.webpackChunkblank_board || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )()
}
)();
