"use strict";
(self.webpackChunkblank_board = self.webpackChunkblank_board || []).push([[8460], {
    dd5c825fad9a8b9fa5e0: (e,t,_)=>{
        _.d(t, {
            ZP: ()=>O
        });
        var o = _("de098c4daf91477f9cbc")
          , n = _("8af190b70a6bc55c6f1b")
          , r = _("657c5d0bc31a26770cad")
          , a = _.n(r)
          , s = _("9c2db445b2a1a7a1cf6d")
          , c = _("8a5d22dd0b24a6092d3e")
          , i = _("ad21e61587d47603cd1c")
          , d = _("f60aef9fa88f4e9ce07a")
          , u = _("50adafd66d905a6a5399")
          , l = _("5347e167343c470dbdfe")
          , E = _("804fe702b68cd889ff76")
          , m = _("f1a7a812adff716e7475");
        e = _.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        var P = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        const b = (0,
        s.ZP)({
            resolved: {},
            chunkName: ()=>"components-AlbumPreviewLogin",
            isReady(e) {
                const t = this.resolve(e);
                return !0 === this.resolved[t] && !!_.m[t]
            },
            importAsync: ()=>Promise.all([_.e(8445), _.e(3693)]).then(_.bind(_, "dae53088ddf6cdfcdd30")),
            requireAsync(e) {
                const t = this.resolve(e);
                return this.resolved[t] = !1,
                this.importAsync(e).then(e=>(this.resolved[t] = !0,
                e))
            },
            requireSync(e) {
                const t = this.resolve(e);
                return _(t)
            },
            resolve() {
                return "dae53088ddf6cdfcdd30"
            }
        })
          , f = "Use Chrome or Edge"
          , h = "CONNECT STEMPLAYER"
          , p = ({accountClient: e, imagesLoaded: t, config: _, tracking: {trackEvent: a}, webUSBClient: s})=>{
            const c = (0,
            r.useHistory)()
              , [i,d] = (0,
            n.useState)(h)
              , [P,p] = (0,
            n.useState)(!1)
              , [g,M] = (0,
            n.useState)(!1)
              , [O,D] = (0,
            n.useState)(!1)
              , [L,v] = (0,
            n.useState)("")
              , [C,A] = (0,
            n.useState)("")
              , [U,w] = (0,
            n.useState)(!1)
              , R = (0,
            l.qs)()
              , T = "Chrome" !== R && "Edge" !== R && f
              , [k,I] = (0,
            n.useState)(T);
            (0,
            n.useEffect)(()=>{
                let e;
                return i !== h && (I(i === f && i),
                e = setTimeout(()=>d(h), 3e3)),
                ()=>{
                    clearTimeout(e)
                }
            }
            , [i]);
            const K = function() {
                var e = (0,
                o.Z)(function*() {
                    if (k === f)
                        return I(!0),
                        void d(f);
                    if (s.deviceConnected)
                        try {
                            yield s.disconnect()
                        } catch (e) {
                            I(!0),
                            d("Failed to connect"),
                            console.error(`Error: ${e}`)
                        }
                    else
                        try {
                            yield s.connect(),
                            c.push("/connect/stem")
                        } catch (e) {
                            I(!0);
                            const t = yield(0,
                            u.Xb)();
                            d(t ? "Connected in another tab" : "Failed to connect")
                        }
                });
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , B = e=>{
                const t = location.search
                  , _ = new URLSearchParams(t);
                if (0 === t.length || !t.includes("temporaryPassword"))
                    return;
                const o = (e,t)=>e.length > t ? e.substring(0, t) : e;
                switch (e) {
                case "temporaryPassword":
                    return o(_.get(e), 8);
                case "username":
                    return o(_.get(e), 255);
                default:
                    return ""
                }
            }
            ;
            return (0,
            n.useEffect)(()=>{
                v(B("username")),
                A(B("temporaryPassword"))
            }
            , []),
            (0,
            n.useEffect)(()=>{
                L && L.length && C && C.length && (D(!0),
                M(!1))
            }
            , [L, C]),
            n.createElement(n.Fragment, null, n.createElement("div", {
                className: `col-centered buy-button-demo-container ${t ? "buy-button-demo-container--show" : ""}`
            }, n.createElement(E.default, {
                className: "menu-button",
                text: "INFO",
                onClick: ()=>c.push("/info")
            }), !e.session && !g && !O && n.createElement(E.default, {
                brackets: P,
                className: "menu-button",
                text: "Signup",
                onClick: ()=>{
                    p(!1),
                    M(!0)
                }
            }), O && n.createElement(m.Z, {
                userEmail: L,
                verificationCode: C,
                registrationSuccessful: ()=>D(!1)
            }), !U && n.createElement(n.Fragment, null, e.session ? n.createElement(E.default, {
                text: "Login",
                id: "loginButton",
                className: "menu-button",
                onClick: ()=>c.push("/connect/stem")
            }) : n.createElement(b, {
                config: _,
                loaded: t,
                onConnectCb: ()=>K(),
                onLoginSuccessCb: ()=>{
                    c.push("/connect/stem")
                }
                ,
                userActionText: i,
                accountLogin: !0,
                accountNotFoundCb: ()=>{
                    p(!0)
                }
            })), g && n.createElement(n.Fragment, null, n.createElement(b, {
                config: _,
                onLoginSuccessCb: ()=>{
                    c.push("/connect/stem")
                }
                ,
                loaded: !0,
                subscription: !0,
                accountNotFoundCb: ()=>{}
                ,
                accountFoundCb: ()=>w(!0)
            })), !(0,
            l.gn)() && n.createElement(E.default, {
                className: "menu-button",
                text: i,
                onClick: ()=>K()
            })))
        }
        ;
        P(p, "useHistory{history}\nuseState{[userActionText, setUserActionText](DEFAULT_USER_ACTION)}\nuseState{[accountLoginFailed, setAccountLoginFailed](false)}\nuseState{[showSubscriptionLogin, setShowSubscriptionLogin](false)}\nuseState{[showSubscriptionForm, setShowSubscriptionForm](false)}\nuseState{[email, setEmail]('')}\nuseState{[verificationCode, setVerificationCode]('')}\nuseState{[userLoggingIn, setUserLoggingIn](false)}\nuseState{[error, setError](browserError)}\nuseEffect{}\nuseEffect{}\nuseEffect{}", ()=>[r.useHistory]);
        const g = (0,
        i.o)((0,
        d.MM)(p))
          , M = (0,
        c.j)({
            module: "menu"
        })((0,
        i.o)((0,
        d.MM)(p)))
          , O = M;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(b, "AlbumPreviewLogin", "/home/vsts/work/1/s/src/components/Menu/index.tsx"),
            e.register(f, "BROWSER_ERROR", "/home/vsts/work/1/s/src/components/Menu/index.tsx"),
            e.register(h, "DEFAULT_USER_ACTION", "/home/vsts/work/1/s/src/components/Menu/index.tsx"),
            e.register(p, "Menu", "/home/vsts/work/1/s/src/components/Menu/index.tsx"),
            e.register(g, "__TEST__Menu", "/home/vsts/work/1/s/src/components/Menu/index.tsx"),
            e.register(M, "default", "/home/vsts/work/1/s/src/components/Menu/index.tsx"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    c264d995fc39a6b750a2: (e,t,_)=>{
        _.d(t, {
            Z: ()=>u
        });
        var o = _("8af190b70a6bc55c6f1b")
          , n = _("9c2db445b2a1a7a1cf6d")
          , r = _("8a5d22dd0b24a6092d3e");
        e = _.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        var a = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        const s = (0,
        n.ZP)({
            resolved: {},
            chunkName: ()=>"Button",
            isReady(e) {
                const t = this.resolve(e);
                return !0 === this.resolved[t] && !!_.m[t]
            },
            importAsync: ()=>Promise.resolve().then(_.bind(_, "804fe702b68cd889ff76")),
            requireAsync(e) {
                const t = this.resolve(e);
                return this.resolved[t] = !1,
                this.importAsync(e).then(e=>(this.resolved[t] = !0,
                e))
            },
            requireSync(e) {
                const t = this.resolve(e);
                return _(t)
            },
            resolve() {
                return "804fe702b68cd889ff76"
            }
        })
          , c = (0,
        n.ZP)({
            resolved: {},
            chunkName: ()=>"Loader",
            isReady(e) {
                const t = this.resolve(e);
                return !0 === this.resolved[t] && !!_.m[t]
            },
            importAsync: ()=>Promise.resolve().then(_.bind(_, "abf12094d6dd744112a4")),
            requireAsync(e) {
                const t = this.resolve(e);
                return this.resolved[t] = !1,
                this.importAsync(e).then(e=>(this.resolved[t] = !0,
                e))
            },
            requireSync(e) {
                const t = this.resolve(e);
                return _(t)
            },
            resolve() {
                return "abf12094d6dd744112a4"
            }
        })
          , i = ({isUK: e, tracking: {trackEvent: t}})=>{
            const [_,n] = (0,
            o.useState)(e ? "UK" : "US")
              , [r,a] = (0,
            o.useState)(!1);
            (0,
            o.useEffect)(()=>{
                "UK" !== _ || e || (t({
                    event: "region_select",
                    data: {
                        region: _.toLowerCase()
                    }
                }),
                window.location.href = "/uk"),
                "US" !== _ && "ROW" !== _ || !e || (t({
                    event: "region_select",
                    data: {
                        region: _.toLowerCase()
                    }
                }),
                window.location.href = "/us")
            }
            , [_]),
            (0,
            o.useEffect)(()=>{
                let e;
                return e = setTimeout(()=>a(!1), 500),
                ()=>{
                    clearTimeout(e)
                }
            }
            , [r]);
            const i = e=>{
                a(!0),
                n(e)
            }
            ;
            return o.createElement("div", {
                className: "inline-buttons"
            }, o.createElement(s, {
                className: "menu-item",
                text: "REGION"
            }), r ? o.createElement(c, {
                size: "small"
            }) : o.createElement(o.Fragment, null, o.createElement(s, {
                className: "menu-button",
                text: "US",
                onClick: ()=>i("US")
            }), o.createElement(s, {
                className: "menu-button",
                text: "UK",
                onClick: ()=>i("UK")
            }), o.createElement(s, {
                className: "menu-button",
                text: "WORLD",
                onClick: ()=>i("ROW")
            })))
        }
        ;
        a(i, "useState{[region, setRegion](isUK ? 'UK' : 'US')}\nuseState{[regionLoading, setRegionLoading](false)}\nuseEffect{}\nuseEffect{}");
        const d = (0,
        r.v8)(i)
          , u = d;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(s, "Button", "/home/vsts/work/1/s/src/components/RegionSelector/index.tsx"),
            e.register(c, "Loader", "/home/vsts/work/1/s/src/components/RegionSelector/index.tsx"),
            e.register(i, "RegionSelector", "/home/vsts/work/1/s/src/components/RegionSelector/index.tsx"),
            e.register(d, "default", "/home/vsts/work/1/s/src/components/RegionSelector/index.tsx"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    c109a9d128dff7bfbd45: (module,__webpack_exports__,__webpack_require__)=>{
        __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
            HomePage: ()=>HomePage,
            default: ()=>__WEBPACK_DEFAULT_EXPORT__
        });
        var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("de098c4daf91477f9cbc")
          , react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8af190b70a6bc55c6f1b")
          , ios_inner_height__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b72df42ddc6948bd1893")
          , ios_inner_height__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(ios_inner_height__WEBPACK_IMPORTED_MODULE_1__)
          , react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("657c5d0bc31a26770cad")
          , react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__)
          , _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9c2db445b2a1a7a1cf6d")
          , react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0d7f0986bcd2f33d8a2a")
          , _kano_kbc_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8a5d22dd0b24a6092d3e")
          , _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8390a660195ca787c81e")
          , _components_RegionSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("c264d995fc39a6b750a2")
          , _contexts_webusb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("f60aef9fa88f4e9ce07a")
          , _contexts_account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ad21e61587d47603cd1c")
          , _contexts_audio_engine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("77d9647920c06e8befd6")
          , _components_MaskedContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("08c81dbcae52f1066fef")
          , _utils_browser_detection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("5347e167343c470dbdfe")
          , _components_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("dd5c825fad9a8b9fa5e0");
        module = __webpack_require__.hmd(module),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            e && e(module)
        }();
        var __signature__ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        const ProductDetail = (0,
        _loadable_component__WEBPACK_IMPORTED_MODULE_2__.ZP)({
            resolved: {},
            chunkName: ()=>"components-ProductDetail",
            isReady(e) {
                const t = this.resolve(e);
                return !0 === this.resolved[t] && !!__webpack_require__.m[t]
            },
            importAsync: ()=>__webpack_require__.e(5317).then(__webpack_require__.bind(__webpack_require__, "a1592a4dc777083d267e")),
            requireAsync(e) {
                const t = this.resolve(e);
                return this.resolved[t] = !1,
                this.importAsync(e).then(e=>(this.resolved[t] = !0,
                e))
            },
            requireSync(e) {
                const t = this.resolve(e);
                return __webpack_require__(t)
            },
            resolve() {
                return "a1592a4dc777083d267e"
            }
        });
        class HomePageComp extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
            constructor(e) {
                super(e),
                this.debouncedUpdateHeight = (0,
                _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_5__.Ds)(this.updateAppHeight, 250),
                this.nextProduct = (()=>{
                    const {currentProductIndex: e} = this.state
                      , {products: t} = this.props
                      , _ = e + 1;
                    _ >= t.length ? this.setState({
                        currentProductIndex: 0
                    }) : this.setState({
                        currentProductIndex: _
                    })
                }
                ),
                this.onVideoLoaded = (e=>{
                    this.setState({
                        loadedProducts: [...this.state.loadedProducts, e]
                    })
                }
                ),
                this.state = {
                    loading: !0,
                    pause: !1,
                    imagesLoaded: !1,
                    loadedProducts: [],
                    isIPhone: (0,
                    _utils_browser_detection__WEBPACK_IMPORTED_MODULE_11__.gn)() && window.innerWidth < 600 && ios_inner_height__WEBPACK_IMPORTED_MODULE_1___default()() > 700,
                    isIOSSafari: (0,
                    _utils_browser_detection__WEBPACK_IMPORTED_MODULE_11__.nz)(),
                    currentProductIndex: 0
                }
            }
            updateAppHeight() {
                document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`)
            }
            componentDidMount() {
                var e = this;
                return (0,
                _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__.Z)(function*() {
                    const {tracking: {trackEvent: t}} = e.props;
                    e.updateAppHeight(),
                    window.addEventListener("resize", e.debouncedUpdateHeight),
                    window.addEventListener("orientationchange", e.debouncedUpdateHeight),
                    e.props.onLoaded(),
                    e.props.onImagesLoaded(),
                    e.setState({
                        loading: !1,
                        imagesLoaded: !0
                    }),
                    document.body.classList.add("loaded"),
                    t({
                        event: "images_loaded"
                    })
                })()
            }
            componentWillUnmount() {
                window.removeEventListener("resize", this.debouncedUpdateHeight),
                window.removeEventListener("orientationchange", this.debouncedUpdateHeight)
            }
            render() {
                const {imagesLoaded: e, loading: t, isIPhone: _, isIOSSafari: o, currentProductIndex: n, loadedProducts: r} = this.state
                  , {isUK: a, hidden: s, config: c, products: i, audioEngine: d, history: u} = this.props;
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: `home-wrapper${s ? " home-wrapper--hidden" : ""}${d.currentTrack || d.isNavigating ? " home-wrapper__padding-bottom" : ""}`
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.ql, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, c.KB_APP_TITLE), react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
                    name: "twitter:title",
                    content: c.KB_APP_TITLE
                }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
                    property: "og:title",
                    content: c.KB_APP_TITLE
                }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
                    property: "og:url",
                    content: c.KB_APP_URL
                })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: `home${t ? "" : " home--loaded"}${_ ? " home--iphone" : ""}`
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
                    className: "full-height-section"
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: "home__highlighted-video"
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MaskedContainer__WEBPACK_IMPORTED_MODULE_10__.h, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: "home__highlighted-video--video-container"
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", {
                    autoPlay: !0,
                    playsInline: !0,
                    muted: !0,
                    loop: !0
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
                    src: "/video/highlighted-video.webm"
                }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("source", {
                    src: "/video/highlighted-video.mov"
                }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_12__.ZP, {
                    config: c,
                    imagesLoaded: e,
                    onNextProductClicked: this.nextProduct
                })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: "product-wrapper"
                }, i.map((e,t)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProductDetail, {
                    key: e.name,
                    config: c,
                    product: e,
                    isUK: a,
                    isCurrent: t === n,
                    areVideosLoaded: r.length === i.map(e=>e.variants).flat(1).length,
                    onVideoLoadedCb: this.onVideoLoaded
                }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
                    className: "full-height-section"
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: `col-centered buy-button-demo-container ${e ? "buy-button-demo-container--show" : ""}`
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_RegionSelector__WEBPACK_IMPORTED_MODULE_6__.Z, {
                    isUK: a
                }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
                    className: "button menu-button info__button",
                    onClick: ()=>u.push("/faq")
                }, "FAQ"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
                    href: "http://discord.gg/stemplayer",
                    target: "_blank",
                    className: "button menu-button info__button"
                }, "DISCORD"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
                    className: "button menu-button info__button",
                    onClick: ()=>u.push("/info/terms")
                }, "T&C")))))
            }
            __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code)
            }
        }
        const HomePage = (0,
        _kano_kbc_telemetry__WEBPACK_IMPORTED_MODULE_4__.j)({
            module: "home"
        })((0,
        _contexts_account__WEBPACK_IMPORTED_MODULE_8__.o)((0,
        _contexts_webusb__WEBPACK_IMPORTED_MODULE_7__.MM)((0,
        react_router_dom__WEBPACK_IMPORTED_MODULE_14__.withRouter)((0,
        _contexts_audio_engine__WEBPACK_IMPORTED_MODULE_9__.f)(HomePageComp)))))
          , _default = HomePage
          , __WEBPACK_DEFAULT_EXPORT__ = _default;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(ProductDetail, "ProductDetail", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"),
            e.register(HomePageComp, "HomePageComp", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"),
            e.register(HomePage, "HomePage", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"),
            e.register(_default, "default", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"))
        }(),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            e && e(module)
        }()
    }
}]);
