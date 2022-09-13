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
          , _contexts_webusb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f60aef9fa88f4e9ce07a")
          , _utils_browser_detection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5347e167343c470dbdfe")
          , _contexts_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ad21e61587d47603cd1c")
          , _contexts_audio_engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("77d9647920c06e8befd6")
          , _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8390a660195ca787c81e");
        module = __webpack_require__.hmd(module),
        function() {
            var _ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            _ && _(module)
        }();
        var __signature__ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(_) {
            return _
        }
        ;
        const ProductVideo = (0,
        _loadable_component__WEBPACK_IMPORTED_MODULE_2__.ZP)({
            resolved: {},
            chunkName: ()=>"components-ProductVideo",
            isReady(_) {
                const e = this.resolve(_);
                return !0 === this.resolved[e] && !!__webpack_require__.m[e]
            },
            importAsync: ()=>__webpack_require__.e(7713).then(__webpack_require__.bind(__webpack_require__, "b16554fc9785500898b2")),
            requireAsync(_) {
                const e = this.resolve(_);
                return this.resolved[e] = !1,
                this.importAsync(_).then(_=>(this.resolved[e] = !0,
                _))
            },
            requireSync(_) {
                const e = this.resolve(_);
                return __webpack_require__(e)
            },
            resolve() {
                return "b16554fc9785500898b2"
            }
        })
          , Menu = (0,
        _loadable_component__WEBPACK_IMPORTED_MODULE_2__.ZP)({
            resolved: {},
            chunkName: ()=>"components-Menu",
            isReady(_) {
                const e = this.resolve(_);
                return !0 === this.resolved[e] && !!__webpack_require__.m[e]
            },
            importAsync: ()=>__webpack_require__.e(6130).then(__webpack_require__.bind(__webpack_require__, "dd5c825fad9a8b9fa5e0")),
            requireAsync(_) {
                const e = this.resolve(_);
                return this.resolved[e] = !1,
                this.importAsync(_).then(_=>(this.resolved[e] = !0,
                _))
            },
            requireSync(_) {
                const e = this.resolve(_);
                return __webpack_require__(e)
            },
            resolve() {
                return "dd5c825fad9a8b9fa5e0"
            }
        });
        class HomePageComp extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
            constructor(_) {
                super(_),
                this.debouncedUpdateHeight = (0,
                _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_9__.Ds)(this.updateAppHeight, 500),
                this.onVideoLoaded = (()=>{
                    this.props.onLoaded(),
                    this.props.onImagesLoaded(),
                    this.setState({
                        loading: !1,
                        imagesLoaded: !0
                    }),
                    document.body.classList.add("loaded")
                }
                ),
                this.state = {
                    loading: !0,
                    pause: !1,
                    imagesLoaded: !1,
                    isIPhone: (0,
                    _utils_browser_detection__WEBPACK_IMPORTED_MODULE_6__.gn)() && window.innerWidth < 600 && ios_inner_height__WEBPACK_IMPORTED_MODULE_1___default()() > 700,
                    isIOSSafari: (0,
                    _utils_browser_detection__WEBPACK_IMPORTED_MODULE_6__.nz)()
                }
            }
            updateAppHeight() {
                document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`)
            }
            componentDidMount() {
                var _ = this;
                return (0,
                _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__.Z)(function*() {
                    _.updateAppHeight(),
                    window.addEventListener("resize", _.debouncedUpdateHeight)
                })()
            }
            componentWillUnmount() {
                window.removeEventListener("resize", this.debouncedUpdateHeight)
            }
            componentDidUpdate(_, e, t) {
                const {history: r, audioEngine: o} = this.props;
                "/" === r.location.pathname && o.trackIsLoaded && o.unload()
            }
            render() {
                const {imagesLoaded: _, loading: e, isIPhone: t, isIOSSafari: r} = this.state
                  , {isUK: o, hidden: a, config: n} = this.props;
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: `home-wrapper${a ? " home-wrapper--hidden" : ""}`
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.ql, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, n.KB_APP_TITLE), react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
                    name: "twitter:title",
                    content: n.KB_APP_TITLE
                }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
                    property: "og:title",
                    content: n.KB_APP_TITLE
                }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
                    property: "og:url",
                    content: n.KB_APP_URL
                })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: `home${e ? "" : " home--loaded"}${t ? " home--iphone" : ""}`
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                    className: `player player--show${t && r ? " player--iphone-safari" : ""}`,
                    onClick: ()=>this.props.history.push("/video")
                }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProductVideo, {
                    onVideoLoadedCb: this.onVideoLoaded
                })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Menu, {
                    config: this.props.config,
                    isUK: o,
                    imagesLoaded: _,
                    classList: "home__buy",
                    onConnectClicked: ()=>this.props.connectToDevice()
                }))))
            }
            __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code)
            }
        }
        const HomePage = (0,
        _kano_kbc_telemetry__WEBPACK_IMPORTED_MODULE_4__.j)({
            module: "home"
        })((0,
        _contexts_account__WEBPACK_IMPORTED_MODULE_7__.o)((0,
        _contexts_webusb__WEBPACK_IMPORTED_MODULE_5__.MM)((0,
        react_router_dom__WEBPACK_IMPORTED_MODULE_11__.withRouter)((0,
        _contexts_audio_engine__WEBPACK_IMPORTED_MODULE_8__.f)(HomePageComp)))))
          , _default = HomePage
          , __WEBPACK_DEFAULT_EXPORT__ = _default;
        !function() {
            var _ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            _ && (_.register(ProductVideo, "ProductVideo", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"),
            _.register(Menu, "Menu", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"),
            _.register(HomePageComp, "HomePageComp", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"),
            _.register(HomePage, "HomePage", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"),
            _.register(_default, "default", "/home/vsts/work/1/s/src/containers/HomePage/index.tsx"))
        }(),
        function() {
            var _ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            _ && _(module)
        }()
    }
}]);
