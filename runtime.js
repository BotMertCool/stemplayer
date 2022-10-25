(()=>{
    "use strict";
    var e = {}
      , t = {};
    function r(a) {
        var o = t[a];
        if (void 0 !== o)
            return o.exports;
        var n = t[a] = {
            id: a,
            loaded: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, r),
        n.loaded = !0,
        n.exports
    }
    r.m = e,
    r.amdO = {},
    (()=>{
        var e = [];
        r.O = ((t,a,o,n)=>{
            if (!a) {
                var c = 1 / 0;
                for (f = 0; f < e.length; f++) {
                    for (var [a,o,n] = e[f], d = !0, i = 0; i < a.length; i++)
                        (!1 & n || c >= n) && Object.keys(r.O).every(e=>r.O[e](a[i])) ? a.splice(i--, 1) : (d = !1,
                        n < c && (c = n));
                    if (d) {
                        e.splice(f--, 1);
                        var s = o();
                        void 0 !== s && (t = s)
                    }
                }
                return t
            }
            n = n || 0;
            for (var f = e.length; f > 0 && e[f - 1][2] > n; f--)
                e[f] = e[f - 1];
            e[f] = [a, o, n]
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
        407: "Info-stem3",
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
        5317: "components-ProductDetail",
        5508: "npm.jszip",
        5735: "Updating",
        5779: "npm.react-helmet",
        5908: "RefundPolicy",
        6027: "Info-stem2",
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
        9855: "Info-stem1",
        9945: "Video"
    }[e] || e) + "." + {
        327: "8384ec15659dfd649140",
        407: "ba06c58bdc91e719c685",
        451: "e8518bc08f3e490d0bb0",
        856: "c20abb82dda2cc56dde4",
        900: "1de3f30946e268a77a78",
        1840: "8c33bc03eeecfd462ed4",
        1866: "c03e5d3de34543b82e3c",
        1918: "9cd6d4a024ad28751ff6",
        2792: "37b86fd41f9caa4d4b5c",
        2868: "aeaa0e666484a9d05fc8",
        3383: "4c9483c0e228f2f61b55",
        3693: "3bc1c3d056b26dc5a0b5",
        3754: "9bd39e973ae0c7792483",
        3775: "82ba3d5d1bb80bc29cb7",
        3930: "25c7a26446c9cbd5e49c",
        4513: "b2a68272d1acc29af610",
        4640: "c9a13f59db2f10bef73c",
        4771: "d6d8c5de0ba2d2afdca2",
        4958: "124a9706c70acabae79c",
        5009: "dff1826c1038dc750892",
        5083: "1893a59829e162fc5431",
        5316: "87860247c459cf0df1e7",
        5317: "ab28fd59d10867e9e0bb",
        5508: "521494634b39c402bc77",
        5735: "21227e35e18a34b46ddc",
        5779: "91bfe73698bd66213a1e",
        5908: "2ebfafce22cbd83c4b06",
        6027: "e68dd9fb8daaf498c3e8",
        6150: "1e0c663d603edaa901c1",
        6521: "76844330d6e8e1800250",
        6630: "97c3cdf3a16506238c64",
        6743: "59c650981ab8f29a5933",
        7203: "886e0e024537e7eb78c4",
        7452: "7055e6c07c5795209a00",
        7713: "5334a24251ae4e56c2c4",
        8317: "b4c35b8be722bd2463dd",
        8445: "814b765348097e6a777b",
        8460: "a181663058328e698eb3",
        8680: "e0fbb9e47c2fc9de95a0",
        9014: "128a680a1fd1f5d12e21",
        9036: "65f473c942e006665f65",
        9295: "bfe98caa5c71ff7974db",
        9322: "742b00116a95e29cd550",
        9642: "eb8973f1cf9b8e79dd19",
        9679: "ac9749e454ef881c95dd",
        9708: "f4dc577f1c2ee2b32bf5",
        9713: "482b24dd113d6260aacc",
        9855: "dc80197b83fc54691e84",
        9945: "5374146b4572f60d9c13"
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
        6521: "Controls",
        6743: "Terms",
        7203: "Platform",
        7713: "components-ProductVideo",
        8460: "HomePage",
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
        r.l = ((t,a,o,n)=>{
            if (e[t])
                e[t].push(a);
            else {
                var c, d;
                if (void 0 !== o)
                    for (var i = document.getElementsByTagName("script"), s = 0; s < i.length; s++) {
                        var f = i[s];
                        if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == "blank-board:" + o) {
                            c = f;
                            break
                        }
                    }
                c || (d = !0,
                (c = document.createElement("script")).charset = "utf-8",
                c.timeout = 120,
                r.nc && c.setAttribute("nonce", r.nc),
                c.setAttribute("data-webpack", "blank-board:" + o),
                c.src = t),
                e[t] = [a];
                var l = (r,a)=>{
                    c.onerror = c.onload = null,
                    clearTimeout(b);
                    var o = e[t];
                    if (delete e[t],
                    c.parentNode && c.parentNode.removeChild(c),
                    o && o.forEach(e=>e(a)),
                    r)
                        return r(a)
                }
                  , b = setTimeout(l.bind(null, void 0, {
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
        var e = e=>new Promise((t,a)=>{
            var o = r.miniCssF(e)
              , n = r.p + o;
            if (((e,t)=>{
                for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                    var o = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                    if ("stylesheet" === c.rel && (o === e || o === t))
                        return c
                }
                var n = document.getElementsByTagName("style");
                for (a = 0; a < n.length; a++) {
                    var c;
                    if ((o = (c = n[a]).getAttribute("data-href")) === e || o === t)
                        return c
                }
            }
            )(o, n))
                return t();
            ((e,t,r,a)=>{
                var o = document.createElement("link");
                o.rel = "stylesheet",
                o.type = "text/css";
                o.onerror = o.onload = (n=>{
                    if (o.onerror = o.onload = null,
                    "load" === n.type)
                        r();
                    else {
                        var c = n && ("load" === n.type ? "missing" : n.type)
                          , d = n && n.target && n.target.href || t
                          , i = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                        i.code = "CSS_CHUNK_LOAD_FAILED",
                        i.type = c,
                        i.request = d,
                        o.parentNode.removeChild(o),
                        a(i)
                    }
                }
                ),
                o.href = t,
                document.head.appendChild(o)
            }
            )(e, n, t, a)
        }
        )
          , t = {
            3666: 0
        };
        r.f.miniCss = ((r,a)=>{
            t[r] ? a.push(t[r]) : 0 !== t[r] && {
                327: 1,
                1866: 1,
                2792: 1,
                2868: 1,
                3693: 1,
                3754: 1,
                3775: 1,
                3930: 1,
                4640: 1,
                4958: 1,
                5009: 1,
                5083: 1,
                5316: 1,
                5735: 1,
                5908: 1,
                6521: 1,
                6743: 1,
                7203: 1,
                7713: 1,
                8445: 1,
                8460: 1,
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
            var o = r.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o)
                    a.push(o[2]);
                else if (/^(2792|3666)$/.test(t))
                    e[t] = 0;
                else {
                    var n = new Promise((r,a)=>o = e[t] = [r, a]);
                    a.push(o[2] = n);
                    var c = r.p + r.u(t)
                      , d = new Error;
                    r.l(c, a=>{
                        if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0),
                        o)) {
                            var n = a && ("load" === a.type ? "missing" : a.type)
                              , c = a && a.target && a.target.src;
                            d.message = "Loading chunk " + t + " failed.\n(" + n + ": " + c + ")",
                            d.name = "ChunkLoadError",
                            d.type = n,
                            d.request = c,
                            o[1](d)
                        }
                    }
                    , "chunk-" + t, t)
                }
        }
        ),
        r.F.j = (t=>{
            if ((!r.o(e, t) || void 0 === e[t]) && !/^(2792|3666)$/.test(t)) {
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
            var o, n, [c,d,i] = a, s = 0;
            if (c.some(t=>0 !== e[t])) {
                for (o in d)
                    r.o(d, o) && (r.m[o] = d[o]);
                if (i)
                    var f = i(r)
            }
            for (t && t(a); s < c.length; s++)
                n = c[s],
                r.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return r.O(f)
        }
          , a = self.webpackChunkblank_board = self.webpackChunkblank_board || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )()
}
)();
