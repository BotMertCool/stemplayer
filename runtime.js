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
                for (s = 0; s < e.length; s++) {
                    for (var [a,n,o] = e[s], d = !0, i = 0; i < a.length; i++)
                        (!1 & o || c >= o) && Object.keys(r.O).every(e=>r.O[e](a[i])) ? a.splice(i--, 1) : (d = !1,
                        o < c && (c = o));
                    if (d) {
                        e.splice(s--, 1);
                        var f = n();
                        void 0 !== f && (t = f)
                    }
                }
                return t
            }
            o = o || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > o; s--)
                e[s] = e[s - 1];
            e[s] = [a, n, o]
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
        451: "d4b03515e7bc78ff500d",
        856: "c20abb82dda2cc56dde4",
        900: "1de3f30946e268a77a78",
        1840: "8c33bc03eeecfd462ed4",
        1866: "c03e5d3de34543b82e3c",
        1918: "9cd6d4a024ad28751ff6",
        2868: "9c929971685d10ee2d51",
        3383: "4c9483c0e228f2f61b55",
        3693: "0e010719cf7e3d93a6e2",
        3754: "9bd39e973ae0c7792483",
        3775: "7b0397b9a63e07f82e43",
        3930: "25c7a26446c9cbd5e49c",
        4513: "b2a68272d1acc29af610",
        4771: "d6d8c5de0ba2d2afdca2",
        4958: "db4044e1a23f9f5aee0a",
        5009: "b5883f5d65701b607341",
        5083: "3c6059cc6078bdd37301",
        5508: "521494634b39c402bc77",
        5735: "70ac1524b3ed6f50ba41",
        5779: "91bfe73698bd66213a1e",
        5908: "2ebfafce22cbd83c4b06",
        6130: "13c8f12c3846c0e77e06",
        6150: "e0c30ce718927883ff3d",
        6521: "15a75aef6a7a86a8f55f",
        6630: "97c3cdf3a16506238c64",
        6743: "fc7507a783f3381102f6",
        7203: "e49ddbac2f26cb0cc02b",
        7452: "7055e6c07c5795209a00",
        7713: "e611c2aa1417f4f45fee",
        8317: "b4c35b8be722bd2463dd",
        8445: "814b765348097e6a777b",
        8460: "0fd67432f88abb86532b",
        9014: "901d2ee62ef5d0f38aac",
        9036: "65f473c942e006665f65",
        9295: "bfe98caa5c71ff7974db",
        9322: "b7ea1f4f93e07acb7bd0",
        9642: "eb8973f1cf9b8e79dd19",
        9679: "3f96848e17a29c1fc65e",
        9708: "f4dc577f1c2ee2b32bf5",
        9713: "482b24dd113d6260aacc",
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
                    for (var i = document.getElementsByTagName("script"), f = 0; f < i.length; f++) {
                        var s = i[f];
                        if (s.getAttribute("src") == t || s.getAttribute("data-webpack") == "blank-board:" + n) {
                            c = s;
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
                var l = (r,a)=>{
                    c.onerror = c.onload = null,
                    clearTimeout(u);
                    var n = e[t];
                    if (delete e[t],
                    c.parentNode && c.parentNode.removeChild(c),
                    n && n.forEach(e=>e(a)),
                    r)
                        return r(a)
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
            var n, o, [c,d,i] = a, f = 0;
            if (c.some(t=>0 !== e[t])) {
                for (n in d)
                    r.o(d, n) && (r.m[n] = d[n]);
                if (i)
                    var s = i(r)
            }
            for (t && t(a); f < c.length; f++)
                o = c[f],
                r.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return r.O(s)
        }
          , a = self.webpackChunkblank_board = self.webpackChunkblank_board || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )()
}
)();
