"use strict";
(self.webpackChunkblank_board = self.webpackChunkblank_board || []).push([[8460], {
    c109a9d128dff7bfbd45: (module,__webpack_exports__,__webpack_require__)=>{
        __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
            HomePage: ()=>HomePage,
            default: ()=>__WEBPACK_DEFAULT_EXPORT__
        });
        var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("de098c4daf91477f9cbc")
          , react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8af190b70a6bc55c6f1b")
          , ios_inner_height__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b72df42ddc6948bd1893")
          , ios_inner_height__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(ios_inner_height__WEBPACK_IMPORTED_MODULE_1__)
          , react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("657c5d0bc31a26770cad")
          , react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__)
          , _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9c2db445b2a1a7a1cf6d")
          , react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0d7f0986bcd2f33d8a2a")
          , _kano_kbc_telemetry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8a5d22dd0b24a6092d3e")
          , _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8390a660195ca787c81e")
          , _contexts_webusb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("f60aef9fa88f4e9ce07a")
          , _utils_browser_detection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("5347e167343c470dbdfe")
          , _contexts_account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ad21e61587d47603cd1c")
          , _contexts_audio_engine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("77d9647920c06e8befd6");
        module = __webpack_require__.hmd(module),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            e && e(module)
        }();
        var __signature__ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        const ProductVideo = (0,
        _loadable_component__WEBPACK_IMPORTED_MODULE_2__.ZP)({
            resolved: {},
            chunkName: ()=>"components-ProductVideo",
            isReady(e) {
                const _ = this.resolve(e);
                return !0 === this.resolved[_] && !!__webpack_require__.m[_]
            },
            importAsync: ()=>__webpack_require__.e(7713).then(__webpack_require__.bind(__webpack_require__, "b16554fc9785500898b2")),
            requireAsync(e) {
                const _ = this.resolve(e);
                return this.resolved[_] = !1,
                this.importAsync(e).then(e=>(this.resolved[_] = !0,
                e))
            },
            requireSync(e) {
                const _ = this.resolve(e);
                return __webpack_require__(_)
            },
            resolve() {
                return "b16554fc9785500898b2"
            }
        })
          , Menu = (0,
        _loadable_component__WEBPACK_IMPORTED_MODULE_2__.ZP)({
            resolved: {},
            chunkName: ()=>"components-Menu",
            isReady(e) {
                const _ = this.resolve(e);
                return !0 === this.resolved[_] && !!__webpack_require__.m[_]
            },
            importAsync: ()=>__webpack_require__.e(6130).then(__webpack_require__.bind(__webpack_require__, "dd5c825fad9a8b9fa5e0")),
            requireAsync(e) {
                const _ = this.resolve(e);
                return this.resolved[_] = !1,
                this.importAsync(e).then(e=>(this.resolved[_] = !0,
                e))
            },
            requireSync(e) {
                const _ = this.resolve(e);
                return __webpack_require__(_)
            },
            resolve() {
                return "dd5c825fad9a8b9fa5e0"
            }
        });
        class HomePageComp extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
            constructor(e) {
                super(e),
                this.debouncedUpdateHeight = (0,
                _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_5__.Ds)(this.updateAppHeight, 250),
                this.onVideoLoaded = (()=>{
                    const {tracking: {trackEvent: e}} = this.props;
                    this.props.onLoaded(),
                    this.props.onImagesLoaded(),
                    this.setState({
                        loading: !1,
                        imagesLoaded: !0
                    }),
                    document.body.classList.add("loaded"),
                    e({
                        event: "images_loaded"
                    })
                }
                ),
                this.nextProduct = (()=>{
                    const {currentProductIndex: e} = this.state
                      , {products: _} = this.props
                      , t = e + 1;
                    t >= _.length ? this.setState({
                        currentProductIndex: 0
                    }) : this.setState({
                        currentProductIndex: t
                    })
                }
                ),
                this.state = {
                    loading: !0,
                    pause: !1,
                    imagesLoaded: !1,
                    isIPhone: (0,
                    _utils_browser_detection__WEBPACK_IMPORTED_MODULE_7__.gn)() && window.innerWidth < 600 && ios_inner_height__WEBPACK_IMPORTED_MODULE_1___default()() > 700,
                    isIOSSafari: (0,
                    _utils_browser_detection__WEBPACK_IMPORTED_MODULE_7__.nz)(),
                    currentProductIndex: 0
                }
            }
            updateAppHeight() {
                document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`)
            }
            componentDidMount() {
                var e = this;
                return (0,
                _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.Z)(function*() {
                    e.updateAppHeight(),
                    window.addEventListener("resize", e.debouncedUpdateHeight),
                    window.addEventListener("orientationchange", e.debouncedUpdateHeight)
                })()
            }
            componentWillUnmount() {
                window.removeEventListener("resize", this.debouncedUpdateHeight),
                window.removeEventListener("orientationchange", this.debouncedUpdateHeight)
            }
            render() {
                const {imagesLoaded: e, loading: _, isIPhone: t, isIOSSafari: r, currentProductIndex: o} = this.state
                  , {isUK: a, hidden: n, config: i, products: d, audioEngine: c} = this.props;
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: `home-wrapper${n ? " home-wrapper--hidden" : ""}${c.currentTrack || c.isNavigating ? " home-wrapper__padding-bottom" : ""}`
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.ql, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, i.KB_APP_TITLE), react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
                    name: "twitter:title",
                    content: i.KB_APP_TITLE
                }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
                    property: "og:title",
                    content: i.KB_APP_TITLE
                }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
                    property: "og:url",
                    content: i.KB_APP_URL
                })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: `home${_ ? "" : " home--loaded"}${t ? " home--iphone" : ""}`
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: `player player--show${t && r ? " player--iphone-safari" : ""}`,
                    onClick: ()=>this.props.history.push("/video")
                }, d.map((e,_)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProductVideo, {
                    key: e.sku,
                    product: e,
                    isVisible: _ === o,
                    onVideoLoadedCb: this.onVideoLoaded
                }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Menu, {
                    config: i,
                    products: d,
                    isUK: a,
                    currentProductIndex: o,
                    imagesLoaded: e,
                    onNextProductClicked: this.nextProduct
                })))
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
        _contexts_webusb__WEBPACK_IMPORTED_MODULE_6__.MM)((0,
        react_router_dom__WEBPACK_IMPORTED_MODULE_11__.withRouter)((0,
        _contexts_audio_engine__WEBPACK_IMPORTED_MODULE_9__.f)(HomePageComp)))))
          , _default = HomePage
          , __WEBPACK_DEFAULT_EXPORT__ = _default;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(ProductVideo, "ProductVideo", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"),
            e.register(Menu, "Menu", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"),
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
