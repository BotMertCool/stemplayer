(self.webpackChunkblank_board = self.webpackChunkblank_board || []).push([[8142], {
    b2b922375814bbdc5154: (e,t,r)=>{
        "use strict";
        r.d(t, {
            nP: ()=>c,
            FF: ()=>l
        });
        var o = r("fc3f305ca5af6d428015")
          , n = function() {
            function e() {
                this.queue = Promise.resolve()
            }
            return e.prototype.queueTask = function(e, t, r) {
                void 0 === r && (r = 0);
                var n, s, i = t || e;
                o.kg.debug("Queuing task", i);
                var a = new Promise(function(e, t) {
                    n = e,
                    s = t
                }
                );
                return this.queue = this.queue.then(function() {
                    o.kg.debug("Starting task", i);
                    var a = !1;
                    return r > 0 && setTimeout(function() {
                        if (!a) {
                            var e = "task" + (t ? " " + t : "") + " timed out after " + r + "ms";
                            o.kg.error(e),
                            a = !0,
                            s(new Error(e))
                        }
                    }, r),
                    e().then(function(e) {
                        o.kg.debug("Task finished", i),
                        n(e)
                    }).catch(function(e) {
                        o.kg.debug("Task failed", i),
                        s(e)
                    }).finally(function() {
                        a = !0
                    })
                }),
                a
            }
            ,
            e
        }()
          , s = r("c06425711428c102cd57")
          , i = r("a8a8948619489f84f5bf")
          , a = function() {
            return (a = Object.assign || function(e) {
                for (var t, r = 1, o = arguments.length; r < o; r++)
                    for (var n in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }
            ).apply(this, arguments)
        }
          , u = function(e, t, r, o) {
            return new (r || (r = Promise))(function(n, s) {
                function i(e) {
                    try {
                        u(o.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(o.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(i, a)
                }
                u((o = o.apply(e, t || [])).next())
            }
            )
        }
          , d = function(e, t) {
            var r, o, n, s, i = {
                label: 0,
                sent: function() {
                    if (1 & n[0])
                        throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (r = 1,
                                o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o),
                                0) : o.next) && !(n = n.call(o, s[1])).done)
                                    return n;
                                switch (o = 0,
                                n && (s = [2 & s[0], n.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    n = s;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < n[1]) {
                                        i.label = n[1],
                                        n = s;
                                        break
                                    }
                                    if (n && i.label < n[2]) {
                                        i.label = n[2],
                                        i.ops.push(s);
                                        break
                                    }
                                    n[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                s = t.call(e, i)
                            } catch (e) {
                                s = [6, e],
                                o = 0
                            } finally {
                                r = n = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }
          , c = "Unknown"
          , l = function() {
            function e() {
                this.taskQueue = new n,
                this.usb = new s.m$
            }
            return e.prototype.queueTask = function(e, t, r) {
                return void 0 === r && (r = 0),
                this.taskQueue.queueTask(e, t, r)
            }
            ,
            e.prototype.findPairedDevice = function() {
                return u(this, void 0, void 0, function() {
                    var e = this;
                    return d(this, function(t) {
                        return [2, this.queueTask(function() {
                            return e.usb.findPairedDevice()
                        }, "findPairedDevice")]
                    })
                })
            }
            ,
            e.prototype.connect = function() {
                return u(this, void 0, void 0, function() {
                    var e = this;
                    return d(this, function(t) {
                        return [2, this.queueTask(function() {
                            return e.usb.ensureDevice()
                        }, "connect")]
                    })
                })
            }
            ,
            e.prototype.disconnect = function() {
                return u(this, void 0, void 0, function() {
                    var e = this;
                    return d(this, function(t) {
                        return [2, this.queueTask(function() {
                            return e.usb.reset()
                        }, "disconnect")]
                    })
                })
            }
            ,
            Object.defineProperty(e.prototype, "connected", {
                get: function() {
                    return this.usb.connected
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.startSession = function() {
                return u(this, void 0, void 0, function() {
                    var e, t = this;
                    return d(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return r.trys.push([0, 3, , 5]),
                            [4, this.queueTask(function() {
                                return t.usb.startSession()
                            }, "startSession", 5e3)];
                        case 1:
                            return r.sent(),
                            [4, this.queueTask(function() {
                                return t.deviceMigration()
                            }, "deviceCheck")];
                        case 2:
                            return [2, r.sent()];
                        case 3:
                            return e = r.sent(),
                            o.kg.error("startSession failed", e),
                            o.kg.debug("Trying to reboot"),
                            [4, this.usb.reboot()];
                        case 4:
                            return r.sent(),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.endSession = function() {
                return u(this, void 0, void 0, function() {
                    var e = this;
                    return d(this, function(t) {
                        return [2, this.queueTask(function() {
                            return e.usb.endSession()
                        }, "endSession")]
                    })
                })
            }
            ,
            e.prototype.onConnect = function(e) {
                this.usb.onConnect(e)
            }
            ,
            e.prototype.onDisconnect = function(e) {
                this.usb.onDisconnect(e)
            }
            ,
            e.prototype.reboot = function() {
                return u(this, void 0, void 0, function() {
                    var e = this;
                    return d(this, function(t) {
                        return [2, this.queueTask(function() {
                            return e.usb.reboot()
                        }, "reboot")]
                    })
                })
            }
            ,
            e.prototype.getDeviceInfo = function() {
                return u(this, void 0, void 0, function() {
                    var e, t = this;
                    return d(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.queueTask(function() {
                                return t.usb.getDeviceInfo()
                            }, "getDeviceInfo")];
                        case 1:
                            return [2, {
                                bootloaderVersion: (e = r.sent()).blver,
                                bluetoothVersion: e.btver,
                                appVersion: e.appver,
                                serialNumber: e.sn
                            }]
                        }
                    })
                })
            }
            ,
            e.prototype.getStorageInfo = function() {
                return u(this, void 0, void 0, function() {
                    var e, t = this;
                    return d(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.queueTask(function() {
                                return t.usb.getStorageInfo()
                            }, "getStorageInfo")];
                        case 1:
                            return e = r.sent(),
                            [2, {
                                size: parseInt(e.size),
                                free: parseInt(e.free)
                            }]
                        }
                    })
                })
            }
            ,
            e.prototype.listTracks = function(e) {
                return void 0 === e && (e = !1),
                u(this, void 0, void 0, function() {
                    var t, r = this;
                    return d(this, function(n) {
                        return t = function() {
                            return u(r, void 0, void 0, function() {
                                var e, t, r, n, s, a, u, l, f, _, h, v;
                                return d(this, function(d) {
                                    switch (d.label) {
                                    case 0:
                                        return o.kg.debug("listTracks: before getTrackList"),
                                        [4, this.usb.getTrackList()];
                                    case 1:
                                        e = d.sent(),
                                        o.kg.debug("listTracks: after getTrackList"),
                                        t = {},
                                        r = {},
                                        n = 0,
                                        d.label = 2;
                                    case 2:
                                        if (!(n < e.l.length))
                                            return [3, 11];
                                        s = e.l[n],
                                        a = s.a,
                                        r[a] = r[a] || {},
                                        d.label = 3;
                                    case 3:
                                        return d.trys.push([3, 5, , 6]),
                                        o.kg.debug("listTracks: before getAlbumConfig for " + a),
                                        u = t,
                                        l = a,
                                        [4, this.usb.getAlbumConfig(a)];
                                    case 4:
                                        return u[l] = d.sent(),
                                        o.kg.debug("listTracks: received albumConfig", t[a]),
                                        [3, 6];
                                    case 5:
                                        return d.sent(),
                                        [3, 6];
                                    case 6:
                                        f = 0,
                                        d.label = 7;
                                    case 7:
                                        return f < s.c.length ? (_ = s.c[f].t,
                                        o.kg.debug("listTracks: before getTrackInfo for " + _),
                                        h = r[a],
                                        v = _,
                                        [4, this.usb.getTrackInfo(a, _)]) : [3, 10];
                                    case 8:
                                        h[v] = d.sent(),
                                        o.kg.debug("listTracks: received trackInfo for " + _, r[a][_]),
                                        d.label = 9;
                                    case 9:
                                        return f += 1,
                                        [3, 7];
                                    case 10:
                                        return n += 1,
                                        [3, 2];
                                    case 11:
                                        return o.kg.debug("listTracks: formatting result"),
                                        [2, {
                                            albums: e.l.map(function(e) {
                                                var o, n;
                                                return {
                                                    id: e.a,
                                                    version: t[e.a] ? t[e.a].version : null,
                                                    artist: (null === (o = t[e.a]) || void 0 === o ? void 0 : o.artist) || c,
                                                    title: (null === (n = t[e.a]) || void 0 === n ? void 0 : n.title) || "Unknown",
                                                    tracks: e.c.map(function(o) {
                                                        var n, s = null;
                                                        t[e.a] && (s = null === (n = t[e.a].tracks) || void 0 === n ? void 0 : n.find(function(e) {
                                                            return (0,
                                                            i.O8)(e.id, o.t)
                                                        }));
                                                        var a = r[e.a][o.t].metadata
                                                          , u = (null === a || void 0 === a ? void 0 : a.global_id) || (null === s || void 0 === s ? void 0 : s.global_id) || "Unknown"
                                                          , d = (null === a || void 0 === a ? void 0 : a.meta_version) || (null === s || void 0 === s ? void 0 : s.meta_version) || "1"
                                                          , c = (null === a || void 0 === a ? void 0 : a.stems_version) || (null === s || void 0 === s ? void 0 : s.stems_version) || "1"
                                                          , l = (null === a || void 0 === a ? void 0 : a.artist) || (null === s || void 0 === s ? void 0 : s.artist) || ""
                                                          , f = (null === a || void 0 === a ? void 0 : a.title) || (null === s || void 0 === s ? void 0 : s.title) || "Unknown";
                                                        return {
                                                            id: o.t,
                                                            bpm: r[e.a][o.t].tempos[0].tempo_bpm,
                                                            colors: r[e.a][o.t].TrackColour,
                                                            TrackGain_dB: r[e.a][o.t].TrackGain_dB,
                                                            title: f,
                                                            global_id: u,
                                                            meta_version: d,
                                                            stems_version: c,
                                                            artist: l
                                                        }
                                                    })
                                                }
                                            })
                                        }]
                                    }
                                })
                            })
                        }
                        ,
                        [2, e ? t() : this.queueTask(t, "listTracks")]
                    })
                })
            }
            ,
            e.prototype.uploadFirmwareUpdate = function(e, t) {
                return u(this, void 0, void 0, function() {
                    var r, o, n, s = this;
                    return d(this, function(i) {
                        return r = e.name,
                        o = e.size,
                        n = {
                            size: o,
                            type: "config.txt" === r ? "device-config" : "dfu",
                            name: r
                        },
                        [2, this.queueTask(function() {
                            return s.usb.uploadFile(n, e, t).promise
                        }, "uploadFirmwareUpdate")]
                    })
                })
            }
            ,
            e.prototype.getDeviceConfig = function() {
                return u(this, void 0, void 0, function() {
                    var e = this;
                    return d(this, function(t) {
                        return [2, this.queueTask(function() {
                            return u(e, void 0, void 0, function() {
                                var e, t;
                                return d(this, function(r) {
                                    switch (r.label) {
                                    case 0:
                                        e = null,
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]),
                                        [4, this.usb.getDeviceConfig()];
                                    case 2:
                                        return e = r.sent(),
                                        [3, 4];
                                    case 3:
                                        if (!((t = r.sent())instanceof Error) || !t.message.startsWith("Parsing device config failed"))
                                            throw t;
                                        return [3, 4];
                                    case 4:
                                        return [2, e]
                                    }
                                })
                            })
                        }, "getDeviceConfig")]
                    })
                })
            }
            ,
            e.prototype.getAlbums = function() {
                return u(this, void 0, void 0, function() {
                    var e = this;
                    return d(this, function(t) {
                        return [2, this.queueTask(function() {
                            return u(e, void 0, void 0, function() {
                                var e, t, r, o, n, s;
                                return d(this, function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return [4, this.usb.getTrackList()];
                                    case 1:
                                        e = i.sent(),
                                        t = e.l.map(function(e) {
                                            return e.a
                                        }),
                                        r = t.map(function(e) {
                                            return {
                                                id: e,
                                                title: void 0,
                                                artist: void 0
                                            }
                                        }),
                                        o = 0,
                                        i.label = 2;
                                    case 2:
                                        return o < t.length ? (n = t[o],
                                        [4, this.getOrGenerateAlbumConfig(n)]) : [3, 5];
                                    case 3:
                                        (s = i.sent()) && (r[o].artist = s.artist,
                                        r[o].title = s.title),
                                        i.label = 4;
                                    case 4:
                                        return o += 1,
                                        [3, 2];
                                    case 5:
                                        return [2, r]
                                    }
                                })
                            })
                        }, "getAlbums")]
                    })
                })
            }
            ,
            e.prototype.getNextAvailableAlbumId = function(e) {
                return "A" + (e.reduce(function(e, t) {
                    var r = t.id.match(/a([0-9]+)/i)
                      , o = 0;
                    return r && (o = parseInt(r[1])),
                    Math.max(e, o)
                }, 0) + 1)
            }
            ,
            e.prototype.ensureAlbum = function(e, t, r) {
                return void 0 === t && (t = c),
                u(this, void 0, void 0, function() {
                    var o, n, s, a;
                    return d(this, function(u) {
                        switch (u.label) {
                        case 0:
                            return [4, this.getAlbums()];
                        case 1:
                            return o = u.sent(),
                            (n = o.find(function(r) {
                                return (0,
                                i.qP)(r.title, e) && (t === c || r.artist === t)
                            })) ? [2, n.id] : (s = this.getNextAvailableAlbumId(o),
                            a = r || "1",
                            [4, this.addAlbum(s, t, e, a)]);
                        case 2:
                            return u.sent(),
                            [2, s]
                        }
                    })
                })
            }
            ,
            e.prototype.generateDefaultAlbumConfig = function(e) {
                return u(this, void 0, void 0, function() {
                    var t, r;
                    return d(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, this.listTracks(!0)];
                        case 1:
                            if (t = o.sent(),
                            !(r = t.albums.find(function(t) {
                                return (0,
                                i.o7)(t.id, e)
                            })))
                                throw new Error("Album " + e + " not found.");
                            return [2, {
                                id: e,
                                version: r.version || null,
                                artist: r.artist,
                                title: r.title,
                                tracks: null
                            }]
                        }
                    })
                })
            }
            ,
            e.prototype.getOrGenerateAlbumConfig = function(e) {
                return u(this, void 0, void 0, function() {
                    var t, r;
                    return d(this, function(n) {
                        switch (n.label) {
                        case 0:
                            t = null,
                            n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, , 4]),
                            [4, this.usb.getAlbumConfig(e)];
                        case 2:
                            return t = n.sent(),
                            [3, 4];
                        case 3:
                            if (!((r = n.sent())instanceof Error) || !r.message.startsWith("Parsing album info failed"))
                                throw r;
                            return [3, 4];
                        case 4:
                            return t ? [3, 6] : (o.kg.debug("Generating default album config for " + e),
                            [4, this.generateDefaultAlbumConfig(e)]);
                        case 5:
                            t = n.sent(),
                            n.label = 6;
                        case 6:
                            return [2, t]
                        }
                    })
                })
            }
            ,
            e.prototype.updateAlbumTitle = function(e, t, r) {
                return u(this, void 0, void 0, function() {
                    var o = this;
                    return d(this, function(n) {
                        return [2, this.queueTask(function() {
                            return u(o, void 0, void 0, function() {
                                var o;
                                return d(this, function(n) {
                                    switch (n.label) {
                                    case 0:
                                        return [4, this.getOrGenerateAlbumConfig(e)];
                                    case 1:
                                        return (o = n.sent()).title = t,
                                        r && (o.artist = r),
                                        [4, this.usb.uploadAlbumConfig(e, o)];
                                    case 2:
                                        return n.sent(),
                                        [2, o]
                                    }
                                })
                            })
                        }, "updateAlbumTitle")]
                    })
                })
            }
            ,
            e.prototype.updateAlbumVersion = function(e, t) {
                return u(this, void 0, void 0, function() {
                    var r = this;
                    return d(this, function(o) {
                        return [2, this.queueTask(function() {
                            return u(r, void 0, void 0, function() {
                                var r;
                                return d(this, function(o) {
                                    switch (o.label) {
                                    case 0:
                                        return [4, this.getOrGenerateAlbumConfig(e)];
                                    case 1:
                                        return (r = o.sent()).version = t,
                                        [4, this.usb.uploadAlbumConfig(e, r)];
                                    case 2:
                                        return o.sent(),
                                        [2, r]
                                    }
                                })
                            })
                        }, "updateAlbumVersion")]
                    })
                })
            }
            ,
            e.prototype.getNextTrackId = function(e) {
                return u(this, void 0, void 0, function() {
                    var t = this;
                    return d(this, function(r) {
                        return [2, this.queueTask(function() {
                            return u(t, void 0, void 0, function() {
                                var t, r;
                                return d(this, function(o) {
                                    switch (o.label) {
                                    case 0:
                                        return [4, this.usb.getTrackList()];
                                    case 1:
                                        if (t = o.sent(),
                                        !(r = t.l.find(function(t) {
                                            return (0,
                                            i.o7)(t.a, e)
                                        })))
                                            throw new Error("Album " + r + " not found");
                                        return [2, "t" + (r.c.reduce(function(e, t) {
                                            var r = t.t.match(/t([0-9]+)/i)
                                              , o = 0;
                                            return r && (o = parseInt(r[1])),
                                            Math.max(e, o)
                                        }, 0) + 1)]
                                    }
                                })
                            })
                        }, "getNextTrackId")]
                    })
                })
            }
            ,
            e.prototype.addTrack = function(e, t) {
                var r = this
                  , n = null
                  , a = !1
                  , c = {
                    total: 0,
                    vocals: 0,
                    bass: 0,
                    drums: 0,
                    other: 0,
                    config: 0
                };
                function l(e, r) {
                    c[e] = r,
                    c.total = Math.floor((100 * c.vocals + 100 * c.bass + 100 * c.drums + 100 * c.other + 1 * c.config) / 401 * 100) / 100,
                    Number.isNaN(c.total) && (o.kg.debug("updateProgress isNan"),
                    c.total = 0),
                    t && t(c)
                }
                return {
                    promise: new Promise(function(t, c) {
                        return u(r, void 0, void 0, function() {
                            var r, f, _, h, v, p, b, m = this;
                            return d(this, function(g) {
                                switch (g.label) {
                                case 0:
                                    return g.trys.push([0, 5, , 6]),
                                    [4, this.ensureAlbum(e.album, e.getMetadata().artist, e.album_version)];
                                case 1:
                                    return r = g.sent(),
                                    (_ = e.id) ? [3, 3] : [4, this.getNextTrackId(r)];
                                case 2:
                                    _ = g.sent(),
                                    g.label = 3;
                                case 3:
                                    return f = _,
                                    h = e.global_id || (0,
                                    i.k$)(),
                                    v = e.meta_version || "1",
                                    p = e.stems_version || "1",
                                    [4, this.queueTask(function() {
                                        return u(m, void 0, void 0, function() {
                                            var u, _, b, m, g, k, y, E, w;
                                            return d(this, function(O) {
                                                switch (O.label) {
                                                case 0:
                                                    if (a)
                                                        return c(new Error("Cancelled")),
                                                        [2];
                                                    u = [{
                                                        id: s.Le.vocals,
                                                        stem: e.vocals,
                                                        type: "vocals"
                                                    }, {
                                                        id: s.Le.bass,
                                                        stem: e.bass,
                                                        type: "bass"
                                                    }, {
                                                        id: s.Le.drums,
                                                        stem: e.drums,
                                                        type: "drums"
                                                    }, {
                                                        id: s.Le.other,
                                                        stem: e.other,
                                                        type: "other"
                                                    }],
                                                    _ = function(e) {
                                                        return d(this, function(t) {
                                                            switch (t.label) {
                                                            case 0:
                                                                return [4, (n = b.usb.uploadStem(f, r, u[e].id, u[e].stem.file, u[e].stem.format, function(t) {
                                                                    return l(u[e].type, t)
                                                                })).promise];
                                                            case 1:
                                                                return t.sent(),
                                                                n = null,
                                                                a ? (o.kg.debug("addTrack chain cancelled"),
                                                                c(new Error("Cancelled")),
                                                                [2, {
                                                                    value: void 0
                                                                }]) : [2]
                                                            }
                                                        })
                                                    }
                                                    ,
                                                    b = this,
                                                    m = 0,
                                                    O.label = 1;
                                                case 1:
                                                    return m < u.length ? [5, _(m)] : [3, 4];
                                                case 2:
                                                    if ("object" === typeof (g = O.sent()))
                                                        return [2, g.value];
                                                    O.label = 3;
                                                case 3:
                                                    return m += 1,
                                                    [3, 1];
                                                case 4:
                                                    if (k = e.getMetadata(),
                                                    y = k.trackConfig,
                                                    (null === (E = null === k || void 0 === k ? void 0 : k.artist) || void 0 === E ? void 0 : E.length) > s.h1)
                                                        throw new Error("Track artist longer than " + s.h1 + " characters");
                                                    if ((null === (w = null === y || void 0 === y ? void 0 : y.title) || void 0 === w ? void 0 : w.length) > s.h1)
                                                        throw new Error("Track title longer than " + s.Kz + " characters");
                                                    if (!k.trackConfig.bpm && !k.trackConfig.temposConfig)
                                                        throw new Error("Track config error: Either bpm or temposConfig required");
                                                    if (!Array.isArray(k.trackConfig.colors) || 2 !== k.trackConfig.colors.length || !(0,
                                                    i.K_)(k.trackConfig.colors[0]) || !(0,
                                                    i.K_)(k.trackConfig.colors[1]))
                                                        throw new Error("Track config error: Invalid colors");
                                                    if (k.trackConfig.TrackGain_dB && !(0,
                                                    i.hj)(k.trackConfig.TrackGain_dB))
                                                        throw new Error("Track config error: TrackGain_dB must be a number");
                                                    return [4, this.usb.uploadTrackConfig(f, r, {
                                                        TrackColour: y.colors,
                                                        tempos: y.temposConfig || [{
                                                            time_ms: 0,
                                                            tempo_bpm: y.bpm
                                                        }],
                                                        TrackGain_dB: y.TrackGain_dB,
                                                        metadata: {
                                                            artist: k.artist,
                                                            title: y.title,
                                                            global_id: h,
                                                            meta_version: v,
                                                            stems_version: p
                                                        }
                                                    })];
                                                case 5:
                                                    return O.sent(),
                                                    l("config", 100),
                                                    t({
                                                        album: r,
                                                        id: f
                                                    }),
                                                    [2]
                                                }
                                            })
                                        })
                                    }, "uploadStems")];
                                case 4:
                                    return g.sent(),
                                    [3, 6];
                                case 5:
                                    return "Cancelled" === (b = g.sent()).message && c(b),
                                    c(new Error("addTrack failed: " + b)),
                                    [3, 6];
                                case 6:
                                    return [2]
                                }
                            })
                        })
                    }
                    ),
                    cancel: function() {
                        a = !0,
                        n && n.cancel()
                    }
                }
            }
            ,
            e.prototype.downloadTrackStem = function(e, t, r, o) {
                var n = this
                  , s = !1
                  , i = null;
                return {
                    promise: this.queueTask(function() {
                        return u(n, void 0, void 0, function() {
                            return d(this, function(n) {
                                return s ? [2, Promise.reject(new Error("Cancelled"))] : [2, (i = this.usb.downloadStem(e, t, r, o)).promise]
                            })
                        })
                    }, "downloadTrackStem"),
                    cancel: function() {
                        s = !0,
                        i && i.cancel()
                    }
                }
            }
            ,
            e.prototype.editTrackMetadata = function(e, t, r) {
                var o, n;
                return u(this, void 0, void 0, function() {
                    var i, a = this;
                    return d(this, function(c) {
                        switch (c.label) {
                        case 0:
                            if (c.trys.push([0, 2, , 3]),
                            !r.bpm && 0 !== r.bpm && !r.temposConfig)
                                throw new Error("Either `bpm` or `temposConfig` required");
                            if ((null === (o = null === r || void 0 === r ? void 0 : r.artist) || void 0 === o ? void 0 : o.length) > s.h1)
                                throw new Error("Track artist longer than " + s.h1 + " characters");
                            if ((null === (n = null === r || void 0 === r ? void 0 : r.title) || void 0 === n ? void 0 : n.length) > s.h1)
                                throw new Error("Track title longer than " + s.Kz + " characters");
                            return [4, this.queueTask(function() {
                                return u(a, void 0, void 0, function() {
                                    return d(this, function(o) {
                                        return [2, this.usb.uploadTrackConfig(t, e, {
                                            TrackColour: r.colors,
                                            tempos: r.temposConfig || [{
                                                time_ms: 0,
                                                tempo_bpm: r.bpm
                                            }],
                                            TrackGain_dB: r.TrackGain_dB,
                                            metadata: {
                                                artist: r.artist,
                                                title: r.title,
                                                global_id: r.global_id,
                                                meta_version: r.meta_version,
                                                stems_version: r.stems_version
                                            }
                                        })]
                                    })
                                })
                            }, "uploadTrackConfig")];
                        case 1:
                            return c.sent(),
                            [3, 3];
                        case 2:
                            throw i = c.sent(),
                            new Error("Track edit failed: " + i);
                        case 3:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.deleteTrack = function(e, t) {
                return u(this, void 0, void 0, function() {
                    var r = this;
                    return d(this, function(o) {
                        return [2, this.queueTask(function() {
                            return u(r, void 0, void 0, function() {
                                var r, o, n;
                                return d(this, function(s) {
                                    switch (s.label) {
                                    case 0:
                                        return s.trys.push([0, 5, , 6]),
                                        [4, this.usb.deleteTrack(e, t)];
                                    case 1:
                                        return s.sent(),
                                        [4, this.listTracks(!0)];
                                    case 2:
                                        return r = s.sent(),
                                        (o = r.albums.find(function(t) {
                                            return (0,
                                            i.o7)(t.id, e)
                                        })) && 0 === o.tracks.length ? [4, this.usb.deleteAlbum(e)] : [3, 4];
                                    case 3:
                                        s.sent(),
                                        s.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        throw n = s.sent(),
                                        new Error("Deleting track failed: " + n);
                                    case 6:
                                        return [2]
                                    }
                                })
                            })
                        }, "deleteTrack")]
                    })
                })
            }
            ,
            e.prototype.addAlbum = function(e, t, r, o) {
                return u(this, void 0, void 0, function() {
                    var n, s, i = this;
                    return d(this, function(a) {
                        switch (a.label) {
                        case 0:
                            return (n = e) ? [3, 2] : (s = this.getNextAvailableAlbumId,
                            [4, this.getAlbums()]);
                        case 1:
                            n = s.apply(this, [a.sent()]),
                            a.label = 2;
                        case 2:
                            return [2, this.queueTask(function() {
                                return u(i, void 0, void 0, function() {
                                    return d(this, function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return [4, this.usb.addAlbum(n.toUpperCase())];
                                        case 1:
                                            return e.sent(),
                                            [4, this.usb.uploadAlbumConfig(n, {
                                                id: n.toUpperCase(),
                                                artist: t,
                                                title: r,
                                                version: o || null,
                                                tracks: null
                                            })];
                                        case 2:
                                            return e.sent(),
                                            [2, n]
                                        }
                                    })
                                })
                            }, "addAlbum")]
                        }
                    })
                })
            }
            ,
            e.prototype.deleteAlbum = function(e) {
                return u(this, void 0, void 0, function() {
                    var t = this;
                    return d(this, function(r) {
                        return [2, this.queueTask(function() {
                            return t.usb.deleteAlbum(e)
                        }, "deleteAlbum")]
                    })
                })
            }
            ,
            e.prototype.renameAlbum = function(e, t) {
                return u(this, void 0, void 0, function() {
                    var r = this;
                    return d(this, function(o) {
                        return [2, this.queueTask(function() {
                            return u(r, void 0, void 0, function() {
                                var r;
                                return d(this, function(o) {
                                    switch (o.label) {
                                    case 0:
                                        return [4, this.getOrGenerateAlbumConfig(e)];
                                    case 1:
                                        return r = o.sent(),
                                        [4, this.usb.renameAlbum(e, t)];
                                    case 2:
                                        return o.sent(),
                                        r.id = t,
                                        [4, this.usb.uploadAlbumConfig(t, r)];
                                    case 3:
                                        return o.sent(),
                                        [2]
                                    }
                                })
                            })
                        }, "renameAlbum")]
                    })
                })
            }
            ,
            e.prototype.moveTrack = function(e, t, r, n) {
                return u(this, void 0, void 0, function() {
                    var s = this;
                    return d(this, function(a) {
                        return [2, this.queueTask(function() {
                            return u(s, void 0, void 0, function() {
                                var s, a;
                                return d(this, function(u) {
                                    switch (u.label) {
                                    case 0:
                                        return [4, this.usb.moveTrack(e, t, r, n)];
                                    case 1:
                                        return u.sent(),
                                        e === r ? [3, 4] : [4, this.listTracks(!0)];
                                    case 2:
                                        return s = u.sent(),
                                        (a = s.albums.find(function(t) {
                                            return (0,
                                            i.o7)(t.id, e)
                                        })) && 0 === a.tracks.length ? (o.kg.debug("moveTrack - caused album delete"),
                                        [4, this.usb.deleteAlbum(e)]) : [3, 4];
                                    case 3:
                                        u.sent(),
                                        u.label = 4;
                                    case 4:
                                        return [2]
                                    }
                                })
                            })
                        }, "moveTrack")]
                    })
                })
            }
            ,
            e.prototype.getRecordedSlots = function() {
                return u(this, void 0, void 0, function() {
                    var e, t = this;
                    return d(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.queueTask(function() {
                                return u(t, void 0, void 0, function() {
                                    return d(this, function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return [4, this.usb.getRecordedSlots()];
                                        case 1:
                                            return [2, e.sent()]
                                        }
                                    })
                                })
                            }, "getRecordedSlots")];
                        case 1:
                            return [2, {
                                slot1: (e = r.sent())["slot-1"],
                                slot2: e["slot-2"],
                                slot3: e["slot-3"],
                                slot4: e["slot-4"]
                            }]
                        }
                    })
                })
            }
            ,
            e.prototype.getChargeState = function() {
                return u(this, void 0, void 0, function() {
                    var e = this;
                    return d(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this.queueTask(function() {
                                return u(e, void 0, void 0, function() {
                                    return d(this, function(e) {
                                        switch (e.label) {
                                        case 0:
                                            return [4, this.usb.getChargeState()];
                                        case 1:
                                            return [2, e.sent()]
                                        }
                                    })
                                })
                            }, "getChargeState")];
                        case 1:
                            return [2, t.sent()]
                        }
                    })
                })
            }
            ,
            e.prototype.updateDeviceConfig = function(e) {
                return u(this, void 0, void 0, function() {
                    var t = this;
                    return d(this, function(r) {
                        return [2, this.queueTask(function() {
                            return u(t, void 0, void 0, function() {
                                var t;
                                return d(this, function(r) {
                                    switch (r.label) {
                                    case 0:
                                        return t = {
                                            name: "Stem Player Configuration",
                                            parameters: e
                                        },
                                        [4, this.usb.uploadDeviceConfig(t, function() {})];
                                    case 1:
                                        return r.sent(),
                                        [2]
                                    }
                                })
                            })
                        }, "updateDeviceConfig")]
                    })
                })
            }
            ,
            e.prototype.deviceMigration = function() {
                return u(this, void 0, void 0, function() {
                    var e, t, r, n, s, u, c, l, f;
                    return d(this, function(_) {
                        switch (_.label) {
                        case 0:
                            return [4, this.usb.getTrackList()];
                        case 1:
                            e = _.sent(),
                            t = 0,
                            _.label = 2;
                        case 2:
                            if (!(t < e.l.length))
                                return [3, 16];
                            if (r = e.l[t],
                            n = r.a,
                            s = void 0,
                            (0,
                            i.o7)(n, "RECORD"))
                                return [3, 15];
                            _.label = 3;
                        case 3:
                            return _.trys.push([3, 5, , 6]),
                            [4, this.usb.getAlbumConfig(n)];
                        case 4:
                            return s = _.sent(),
                            [3, 6];
                        case 5:
                            return _.sent(),
                            [3, 6];
                        case 6:
                            if (!s)
                                return [3, 15];
                            _.label = 7;
                        case 7:
                            if (_.trys.push([7, 14, , 15]),
                            null === s.tracks)
                                return [3, 13];
                            o.kg.info("Converting " + n + " (" + s.title + ") to the new format..."),
                            u = function(e) {
                                var t, o, u, l;
                                return d(this, function(d) {
                                    switch (d.label) {
                                    case 0:
                                        return t = r.c[e].t,
                                        [4, c.usb.getTrackInfo(n, t)];
                                    case 1:
                                        return o = d.sent(),
                                        u = s.tracks.find(function(e) {
                                            return (0,
                                            i.O8)(e.id, t)
                                        }),
                                        l = void 0,
                                        l = a(a({}, o), u ? {
                                            metadata: {
                                                title: u.title,
                                                artist: u.artist,
                                                global_id: u.global_id,
                                                meta_version: u.meta_version,
                                                stems_version: u.stems_version
                                            }
                                        } : {
                                            metadata: {
                                                title: "Unknown",
                                                global_id: "Unknown",
                                                meta_version: "1",
                                                stems_version: "1"
                                            }
                                        }),
                                        [4, c.usb.uploadTrackConfig(t, n, l)];
                                    case 2:
                                        return d.sent(),
                                        [2]
                                    }
                                })
                            }
                            ,
                            c = this,
                            l = 0,
                            _.label = 8;
                        case 8:
                            return l < r.c.length ? [5, u(l)] : [3, 11];
                        case 9:
                            _.sent(),
                            _.label = 10;
                        case 10:
                            return l += 1,
                            [3, 8];
                        case 11:
                            return s.tracks = null,
                            [4, this.usb.uploadAlbumConfig(n, s)];
                        case 12:
                            _.sent(),
                            _.label = 13;
                        case 13:
                            return [3, 15];
                        case 14:
                            return f = _.sent(),
                            o.kg.error("Album conversion failed: " + f),
                            [3, 15];
                        case 15:
                            return t += 1,
                            [3, 2];
                        case 16:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.deviceAuth = function(e) {
                return u(this, void 0, void 0, function() {
                    var t = this;
                    return d(this, function(r) {
                        return [2, this.queueTask(function() {
                            return u(t, void 0, void 0, function() {
                                return d(this, function(t) {
                                    return [2, this.usb.deviceAuth(e)]
                                })
                            })
                        }, "deviceAuth")]
                    })
                })
            }
            ,
            e
        }()
    }
    ,
    "5bed4c2c2c85e5553a5d": (e,t,r)=>{
        "use strict";
        r.d(t, {
            FF: ()=>o.FF,
            h1: ()=>n.h1,
            Kz: ()=>n.Kz,
            o7: ()=>s.o7,
            qP: ()=>s.qP,
            wO: ()=>s.wO,
            O8: ()=>s.O8
        });
        var o = r("b2b922375814bbdc5154")
          , n = r("c06425711428c102cd57")
          , s = r("a8a8948619489f84f5bf");
        r("fc3f305ca5af6d428015")
    }
    ,
    fc3f305ca5af6d428015: (e,t,r)=>{
        "use strict";
        r.d(t, {
            B$: ()=>o,
            hw: ()=>a,
            kg: ()=>c
        });
        var o, n = function(e, t) {
            for (var r = 0, o = t.length, n = e.length; r < o; r++,
            n++)
                e[n] = t[r];
            return e
        };
        !function(e) {
            e[e.DEBUG = 0] = "DEBUG",
            e[e.INFO = 1] = "INFO",
            e[e.WARNING = 2] = "WARNING",
            e[e.ERROR = 3] = "ERROR",
            e[e.OFF = 4] = "OFF"
        }(o || (o = {}));
        var s = {
            debug: 0,
            info: 1,
            warning: 2,
            error: 3,
            off: 4
        }
          , i = "spLogLevel"
          , a = o.ERROR
          , u = localStorage.getItem(i);
        function d(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            s[e] >= a && console.log.apply(console, n([(new Date).toISOString() + " " + e.toUpperCase() + ":"], t))
        }
        Object.keys(s).indexOf(u) >= 0 && (a = s[u]);
        var c = {
            debug: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return d.apply(void 0, n(["debug"], e))
            },
            info: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return d.apply(void 0, n(["info"], e))
            },
            warning: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return d.apply(void 0, n(["warning"], e))
            },
            error: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return d.apply(void 0, n(["error"], e))
            }
        }
    }
    ,
    c06425711428c102cd57: (e,t,r)=>{
        "use strict";
        r.d(t, {
            h1: ()=>d,
            Kz: ()=>c,
            Le: ()=>o,
            m$: ()=>w
        });
        var o, n, s = r("fc3f305ca5af6d428015"), i = r("a8a8948619489f84f5bf"), a = function(e, t, r, o) {
            return new (r || (r = Promise))(function(n, s) {
                function i(e) {
                    try {
                        u(o.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(o.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(i, a)
                }
                u((o = o.apply(e, t || [])).next())
            }
            )
        }, u = function(e, t) {
            var r, o, n, s, i = {
                label: 0,
                sent: function() {
                    if (1 & n[0])
                        throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (r = 1,
                                o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o),
                                0) : o.next) && !(n = n.call(o, s[1])).done)
                                    return n;
                                switch (o = 0,
                                n && (s = [2 & s[0], n.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    n = s;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < n[1]) {
                                        i.label = n[1],
                                        n = s;
                                        break
                                    }
                                    if (n && i.label < n[2]) {
                                        i.label = n[2],
                                        i.ops.push(s);
                                        break
                                    }
                                    n[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                s = t.call(e, i)
                            } catch (e) {
                                s = [6, e],
                                o = 0
                            } finally {
                                r = n = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        }, d = 250, c = 250, l = {
            1: "other",
            2: "vocals",
            3: "bass",
            4: "drums"
        };
        !function(e) {
            e[e.other = 1] = "other",
            e[e.vocals = 2] = "vocals",
            e[e.bass = 3] = "bass",
            e[e.drums = 4] = "drums"
        }(o || (o = {})),
        function(e) {
            e[e.ACK = 0] = "ACK",
            e[e.NAK = 1] = "NAK",
            e[e.CONNECT = 2] = "CONNECT",
            e[e.DISCONNECT = 3] = "DISCONNECT",
            e[e.CONTROL = 4] = "CONTROL",
            e[e.RESPONSE = 5] = "RESPONSE",
            e[e.FILE_HEADER = 6] = "FILE_HEADER",
            e[e.FILE_BODY = 7] = "FILE_BODY",
            e[e.ABORT = 8] = "ABORT"
        }(n || (n = {}));
        var f, _ = ["ACK", "NAK", "CONNECT", "DISCONNECT", "CONTROL", "RESPONSE", "FILE_HEADER", "FILE_BODY", "ABORT"];
        !function(e) {
            e[e.REBOOT = 0] = "REBOOT",
            e[e.VERSION = 1] = "VERSION",
            e[e.GET_STORAGE_INFO = 2] = "GET_STORAGE_INFO",
            e[e.GET_TRACKS_INFO = 3] = "GET_TRACKS_INFO",
            e[e.GET_DEVICE_CONFIG = 4] = "GET_DEVICE_CONFIG",
            e[e.GET_ALBUM_CONFIG = 5] = "GET_ALBUM_CONFIG",
            e[e.GET_TRACK_CONFIG = 6] = "GET_TRACK_CONFIG",
            e[e.GET_ALBUM_COVER = 7] = "GET_ALBUM_COVER",
            e[e.ADD_ALBUM = 8] = "ADD_ALBUM",
            e[e.DELETE_ALBUM = 9] = "DELETE_ALBUM",
            e[e.DELETE_TRACK = 10] = "DELETE_TRACK",
            e[e.GET_MUSIC_FILE = 11] = "GET_MUSIC_FILE",
            e[e.GET_RECORDING_SLOTS = 12] = "GET_RECORDING_SLOTS",
            e[e.GET_RECORDING = 13] = "GET_RECORDING",
            e[e.DELETE_RECORDING = 14] = "DELETE_RECORDING",
            e[e.RENAME_ALBUM = 15] = "RENAME_ALBUM",
            e[e.MOVE_TRACK = 16] = "MOVE_TRACK",
            e[e.GET_STATE_OF_CHARGE = 17] = "GET_STATE_OF_CHARGE",
            e[e.CHALLENGE = 18] = "CHALLENGE"
        }(f || (f = {}));
        var h, v = ["REBOOT", "VERSION", "GET_STORAGE_INFO", "GET_TRACKS_INFO", "GET_DEVICE_CONFIG", "GET_ALBUM_CONFIG", "GET_TRACK_CONFIG", "GET_ALBUM_COVER", "ADD_ALBUM", "DELETE_ALBUM", "DELETE_TRACK", "GET_MUSIC_FILE", "GET_RECORDING_SLOTS", "GET_RECORDING", "DELETE_RECORDING", "RENAME_ALBUM", "MOVE_TRACK", "GET_STATE_OF_CHARGE", "CHALLENGE"];
        !function(e) {
            e[e.BUSY = 0] = "BUSY",
            e[e.SYNTAX_ERROR = 1] = "SYNTAX_ERROR",
            e[e.STATE_ERROR = 2] = "STATE_ERROR",
            e[e.RESOURCE_ERROR = 3] = "RESOURCE_ERROR"
        }(h || (h = {}));
        var p = ["BUSY", "SYNTAX_ERROR", "STATE_ERROR", "RESOURCE_ERROR"]
          , b = [];
        function m(e, t, r) {
            if (s.hw <= s.B$.DEBUG) {
                var o = {
                    transfer: e,
                    type: t.type,
                    success: r
                };
                switch (t.type) {
                case n.CONTROL:
                case n.RESPONSE:
                    o.operation = t.payload[0];
                case n.NAK:
                    o.error = t.payload[0]
                }
                b.push(o)
            }
        }
        if (s.hw <= s.B$.DEBUG) {
            var g = function() {
                for (var e = [], t = 0, r = b; t < r.length; t++) {
                    var o = r[t]
                      , n = "" + ("in" === o.transfer ? " " : "") + o.transfer.toUpperCase() + ": " + _[o.type];
                    void 0 !== o.operation ? n += " " + v[o.operation] : void 0 !== o.error && (n += " " + p[o.error]),
                    void 0 !== o.success && (n += o.success ? "" : " [FAIL]"),
                    e.push(n)
                }
                return e
            };
            window.printStemPlayerPacketLog = function() {
                for (var e = 0, t = g(); e < t.length; e++) {
                    var r = t[e];
                    console.log(r)
                }
            }
            ,
            window.downloadStemPlayerPacketLog = function() {
                var e, t, r;
                e = "stem-player-packet-log.txt",
                t = g().join("\n"),
                (r = document.createElement("a")).setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)),
                r.setAttribute("download", e),
                r.style.display = "none",
                document.body.appendChild(r),
                r.click(),
                document.body.removeChild(r)
            }
        }
        function k(e) {
            if (e < 0 || e > 65535)
                throw new Error("Invalid packet length.");
            return [255 & e, e >> 8 & 255]
        }
        function y(e, t) {
            return (t << 8) + e
        }
        function E(e, t) {
            var r = String.fromCharCode(e) + JSON.stringify(t) + "\0";
            return (new TextEncoder).encode(r)
        }
        var w = function() {
            function e() {
                var e = this;
                this.sendReceivePacket = function(t, r, o, s) {
                    return new Promise(function(i) {
                        return a(e, void 0, void 0, function() {
                            var e;
                            return u(this, function(a) {
                                switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]),
                                    [4, this.sendPacket(t)];
                                case 1:
                                    return a.sent(),
                                    i(null),
                                    [3, 3];
                                case 2:
                                    return e = a.sent(),
                                    console.error(e),
                                    s("file upload error: transfering block at position " + (r - o) + " failed."),
                                    [2];
                                case 3:
                                    return this.receivePacket().then(function(e) {
                                        e.type === n.ACK || s("file upload error: transfering file block at postition " + (r - o) + " failed. failed.")
                                    }),
                                    [2]
                                }
                            })
                        })
                    }
                    )
                }
                ,
                this.sendAndAcknowledgeReceivePacket = function(t, r, o, s) {
                    return a(e, void 0, void 0, function() {
                        var e;
                        return u(this, function(i) {
                            switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]),
                                [4, this.sendPacket(t)];
                            case 1:
                                return i.sent(),
                                [3, 3];
                            case 2:
                                return e = i.sent(),
                                console.error(e),
                                s("file upload error: transfering block at position " + (r - o) + " failed."),
                                [2];
                            case 3:
                                return [4, this.receivePacket()];
                            case 4:
                                return i.sent().type !== n.ACK ? (s("file upload error: transfering file block at postition " + (r - o) + " failed. failed."),
                                [2]) : [2]
                            }
                        })
                    })
                }
                ,
                this.onUSBConnect = this.onUSBConnect.bind(this),
                this.onUSBDisconnect = this.onUSBDisconnect.bind(this),
                navigator && navigator.usb && (navigator.usb.addEventListener("connect", this.onUSBConnect),
                navigator.usb.addEventListener("disconnect", this.onUSBDisconnect))
            }
            return Object.defineProperty(e.prototype, "connected", {
                get: function() {
                    return this.usb && this.usb.opened
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onUSBConnect = function() {
                return a(this, void 0, void 0, function() {
                    return u(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return this.usb ? [3, 2] : [4, (0,
                            i.wO)(2e3)];
                        case 1:
                            e.sent(),
                            this.findPairedDevice(),
                            e.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.onUSBDisconnect = function() {
                return a(this, void 0, void 0, function() {
                    var e, t = this;
                    return u(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return this.usb ? [4, navigator.usb.getDevices()] : [3, 2];
                        case 1:
                            e = r.sent(),
                            e.find(function(e) {
                                return e.serialNumber === t.usb.serialNumber
                            }) || this.reset(),
                            r.label = 2;
                        case 2:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.destroy = function() {
                navigator && navigator.usb && (navigator.usb.removeEventListener("connect", this.onUSBConnect),
                navigator.usb.removeEventListener("disconnect", this.onUSBDisconnect)),
                this.usb = void 0
            }
            ,
            e.prototype.ensureDevice = function() {
                return a(this, void 0, void 0, function() {
                    return u(this, function(e) {
                        switch (e.label) {
                        case 0:
                            if (this.usb) {
                                if (this.usb.opened)
                                    return [2];
                                this.usb = void 0
                            }
                            return [4, this.findPairedDevice()];
                        case 1:
                            return e.sent() ? [2] : [4, this.requestDevice()];
                        case 2:
                            if (!e.sent())
                                throw new Error("No device found");
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.openConnection = function() {
                return a(this, void 0, void 0, function() {
                    return u(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return this.usb ? [4, this.usb.open()] : [3, 5];
                        case 1:
                            return e.sent(),
                            [4, this.usb.selectConfiguration(1)];
                        case 2:
                            return e.sent(),
                            [4, this.usb.claimInterface(0)];
                        case 3:
                            return e.sent(),
                            [4, (0,
                            i.wO)(500)];
                        case 4:
                            return e.sent(),
                            this.onConnectHandler && this.onConnectHandler(),
                            [2, !0];
                        case 5:
                            return [2, !1]
                        }
                    })
                })
            }
            ,
            e.prototype.findPairedDevice = function() {
                return a(this, void 0, void 0, function() {
                    var e, t;
                    return u(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return navigator && navigator.usb ? [4, navigator.usb.getDevices()] : [3, 2];
                        case 1:
                            for (e = r.sent(),
                            t = 0; t < e.length; t += 1)
                                4617 === e[t].vendorId && (this.usb = e[t]);
                            r.label = 2;
                        case 2:
                            return [2, this.openConnection()]
                        }
                    })
                })
            }
            ,
            e.prototype.requestDevice = function(e) {
                return void 0 === e && (e = !1),
                a(this, void 0, void 0, function() {
                    var t, r, o, n;
                    return u(this, function(i) {
                        switch (i.label) {
                        case 0:
                            if (!this.usb)
                                return [3, 9];
                            if (!e)
                                return [3, 8];
                            i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]),
                            [4, this.endSession()];
                        case 2:
                            return i.sent(),
                            [3, 4];
                        case 3:
                            return t = i.sent(),
                            s.kg.error("Error ignored while disconnecting: " + t),
                            [3, 4];
                        case 4:
                            return i.trys.push([4, 6, , 7]),
                            [4, this.reset()];
                        case 5:
                            return i.sent(),
                            [3, 7];
                        case 6:
                            return r = i.sent(),
                            s.kg.error("Error ignored while disconnecting: " + r),
                            [3, 7];
                        case 7:
                            return [3, 9];
                        case 8:
                            throw new Error("Device already initialised.");
                        case 9:
                            return i.trys.push([9, 11, , 12]),
                            o = this,
                            [4, navigator.usb.requestDevice({
                                filters: [{
                                    vendorId: 4617
                                }]
                            })];
                        case 10:
                            return o.usb = i.sent(),
                            [3, 12];
                        case 11:
                            if ("NotFoundError" !== (n = i.sent()).name)
                                throw n;
                            return [3, 12];
                        case 12:
                            return [2, this.openConnection()]
                        }
                    })
                })
            }
            ,
            e.prototype.reset = function() {
                return a(this, void 0, void 0, function() {
                    return u(this, function(e) {
                        switch (e.label) {
                        case 0:
                            if (!this.usb)
                                return [3, 5];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]),
                            [4, this.usb.close()];
                        case 2:
                            return e.sent(),
                            [3, 4];
                        case 3:
                            return e.sent(),
                            [3, 4];
                        case 4:
                            this.usb = void 0,
                            this.onDisconnectHandler && this.onDisconnectHandler(),
                            e.label = 5;
                        case 5:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.onConnect = function(e) {
                this.onConnectHandler = e
            }
            ,
            e.prototype.onDisconnect = function(e) {
                this.onDisconnectHandler = e
            }
            ,
            e.prototype.startSession = function() {
                return a(this, void 0, void 0, function() {
                    var e;
                    return u(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return s.kg.debug("startSession called"),
                            [4, this.ensureDevice()];
                        case 1:
                            return t.sent(),
                            [4, this.sendPacket({
                                type: n.CONNECT,
                                payload: []
                            })];
                        case 2:
                            return t.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (e = t.sent(),
                            s.kg.debug("startSession respose received", _[e.type]),
                            e.type !== n.ACK)
                                throw new Error("`startSession` failed.");
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.endSession = function() {
                return a(this, void 0, void 0, function() {
                    var e;
                    return u(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return s.kg.debug("endSession called"),
                            [4, this.ensureDevice()];
                        case 1:
                            return t.sent(),
                            [4, this.sendPacket({
                                type: n.DISCONNECT,
                                payload: []
                            })];
                        case 2:
                            return t.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (e = t.sent(),
                            s.kg.debug("endSession respose received", _[e.type]),
                            e.type !== n.ACK)
                                throw new Error("`endSession` failed.");
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.reboot = function() {
                return a(this, void 0, void 0, function() {
                    var e;
                    return u(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return t.sent(),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: [f.REBOOT]
                            })];
                        case 2:
                            return t.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            return (e = t.sent()).type !== n.RESPONSE ? [3, 5] : e.payload[0] === f.REBOOT ? [2] : [4, this.reset()];
                        case 4:
                            return t.sent(),
                            [2];
                        case 5:
                            throw new Error("`control` operation " + f.REBOOT + " failed.")
                        }
                    })
                })
            }
            ,
            e.prototype.getDeviceInfo = function() {
                return a(this, void 0, void 0, function() {
                    var e, t;
                    return u(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return r.sent(),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: [f.VERSION]
                            })];
                        case 2:
                            return r.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if ((e = r.sent()).type === n.RESPONSE && e.payload[0] === f.VERSION)
                                return t = (new TextDecoder).decode(e.payload.slice(1, e.payload.length - 1)),
                                [2, JSON.parse(t)];
                            throw new Error("`control` operation " + f.VERSION + " failed.")
                        }
                    })
                })
            }
            ,
            e.prototype.getStorageInfo = function() {
                return a(this, void 0, void 0, function() {
                    var e, t;
                    return u(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return r.sent(),
                            s.kg.debug("getStorageInfo: sending"),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: [f.GET_STORAGE_INFO]
                            })];
                        case 2:
                            return r.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (e = r.sent(),
                            s.kg.debug("getStorageInfo: res", e),
                            e.type === n.RESPONSE) {
                                if (e.payload[0] === f.GET_STORAGE_INFO)
                                    return t = (new TextDecoder).decode(e.payload.slice(1, e.payload.length - 1)),
                                    s.kg.debug("getStorageInfo return", t),
                                    [2, JSON.parse(t)]
                            } else
                                s.kg.error("getStorageInfo: Received " + _[e.type]);
                            throw new Error("`control` operation " + v[f.GET_STORAGE_INFO] + " failed.")
                        }
                    })
                })
            }
            ,
            e.prototype.getTrackList = function() {
                return a(this, void 0, void 0, function() {
                    var e, t, r;
                    return u(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return s.kg.debug("getTrackList: before ensure device"),
                            [4, this.ensureDevice()];
                        case 1:
                            return o.sent(),
                            s.kg.debug("getTrackList: after ensure device"),
                            s.kg.debug("getTrackList: sending " + _[n.CONTROL] + ": " + v[f.GET_TRACKS_INFO]),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: [f.GET_TRACKS_INFO]
                            })];
                        case 2:
                            return o.sent(),
                            s.kg.debug("getTrackList: listening for response"),
                            [4, this.receivePacket()];
                        case 3:
                            if (e = o.sent(),
                            s.kg.debug("getTrackList: response received"),
                            e.type === n.RESPONSE) {
                                if (e.payload[0] === f.GET_TRACKS_INFO)
                                    return t = (new TextDecoder).decode(e.payload.slice(1, e.payload.length - 1)),
                                    r = JSON.parse(t),
                                    s.kg.debug("getTrackList: response", r),
                                    [2, r]
                            } else
                                s.kg.error("getTrackList: Received " + _[e.type]);
                            throw new Error("`control` operation " + v[f.GET_TRACKS_INFO] + " failed.")
                        }
                    })
                })
            }
            ,
            e.prototype.deleteTrack = function(e, t) {
                return a(this, void 0, void 0, function() {
                    return u(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return r.sent(),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: E(f.DELETE_TRACK, {
                                    album: e,
                                    track: t
                                })
                            })];
                        case 2:
                            return r.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (r.sent().type !== n.RESPONSE)
                                throw new Error("`deleteTrack` failed.");
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.getTrackInfo = function(e, t) {
                return a(this, void 0, void 0, function() {
                    var r, o, s, i;
                    return u(this, function(a) {
                        switch (a.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return a.sent(),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: E(f.GET_TRACK_CONFIG, {
                                    album: e,
                                    track: t
                                })
                            })];
                        case 2:
                            return a.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            return (r = a.sent()).type !== n.RESPONSE ? [3, 8] : r.payload[0] !== f.GET_TRACK_CONFIG ? [3, 8] : [4, this.sendPacket({
                                type: n.ACK,
                                payload: []
                            })];
                        case 4:
                            a.sent(),
                            a.label = 5;
                        case 5:
                            return a.trys.push([5, 7, , 8]),
                            [4, this.downloadFile().promise];
                        case 6:
                            return o = a.sent(),
                            0 === (s = (new TextDecoder).decode(o.data)).charCodeAt(s.length - 1) && (s = s.substr(0, s.length - 1)),
                            [2, JSON.parse(s)];
                        case 7:
                            throw i = a.sent(),
                            console.error(i),
                            new Error("Getting track info failed: " + i);
                        case 8:
                            throw new Error("`control` operation " + f.GET_TRACK_CONFIG + " failed.")
                        }
                    })
                })
            }
            ,
            e.prototype.addAlbum = function(e) {
                return a(this, void 0, void 0, function() {
                    return u(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return t.sent(),
                            s.kg.debug("addAlbum", e),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: E(f.ADD_ALBUM, {
                                    album: e
                                })
                            })];
                        case 2:
                            return t.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (t.sent().type !== n.RESPONSE)
                                throw new Error("`addAlbum` failed.");
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.deleteAlbum = function(e) {
                return a(this, void 0, void 0, function() {
                    return u(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return t.sent(),
                            s.kg.debug("deleteAlbum", e),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: E(f.DELETE_ALBUM, {
                                    album: e
                                })
                            })];
                        case 2:
                            return t.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (t.sent().type !== n.RESPONSE)
                                throw new Error("`deleteAlbum` failed.");
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.getDeviceConfig = function() {
                return a(this, void 0, void 0, function() {
                    var e, t, r, o;
                    return u(this, function(s) {
                        switch (s.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return s.sent(),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: [f.GET_DEVICE_CONFIG]
                            })];
                        case 2:
                            return s.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            return (e = s.sent()).type !== n.RESPONSE ? [3, 10] : e.payload[0] !== f.GET_DEVICE_CONFIG ? [3, 9] : [4, this.sendPacket({
                                type: n.ACK,
                                payload: []
                            })];
                        case 4:
                            s.sent(),
                            t = null,
                            s.label = 5;
                        case 5:
                            return s.trys.push([5, 7, , 8]),
                            [4, this.downloadFile().promise];
                        case 6:
                            return t = s.sent(),
                            [3, 8];
                        case 7:
                            throw r = s.sent(),
                            new Error("Getting device config failed: " + r);
                        case 8:
                            try {
                                return o = (new TextDecoder).decode(t.data),
                                [2, JSON.parse(o)]
                            } catch (e) {
                                throw new Error("Parsing device config failed: " + e)
                            }
                            s.label = 9;
                        case 9:
                            return [3, 11];
                        case 10:
                            if (e.type === n.NAK && e.payload[0] === h.RESOURCE_ERROR)
                                return [2, null];
                            s.label = 11;
                        case 11:
                            throw new Error("`control` operation " + f.GET_DEVICE_CONFIG + " failed.")
                        }
                    })
                })
            }
            ,
            e.prototype.getAlbumConfig = function(e) {
                return a(this, void 0, void 0, function() {
                    var t, r, o, s, i;
                    return u(this, function(a) {
                        switch (a.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return a.sent(),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: E(f.GET_ALBUM_CONFIG, {
                                    album: e
                                })
                            })];
                        case 2:
                            return a.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            return (t = a.sent()).type !== n.RESPONSE ? [3, 10] : t.payload[0] !== f.GET_ALBUM_CONFIG ? [3, 9] : [4, this.sendPacket({
                                type: n.ACK,
                                payload: []
                            })];
                        case 4:
                            a.sent(),
                            r = null,
                            a.label = 5;
                        case 5:
                            return a.trys.push([5, 7, , 8]),
                            [4, this.downloadFile().promise];
                        case 6:
                            return r = a.sent(),
                            [3, 8];
                        case 7:
                            throw o = a.sent(),
                            new Error("Getting album info failed: " + o);
                        case 8:
                            try {
                                return s = (new TextDecoder).decode(r.data),
                                (i = JSON.parse(s)).id && (i.id = i.id.toUpperCase()),
                                i.tracks && i.tracks.forEach(function(e) {
                                    e.id && (e.id = e.id.toUpperCase())
                                }),
                                [2, i]
                            } catch (e) {
                                throw new Error("Parsing album info failed: " + e)
                            }
                            a.label = 9;
                        case 9:
                            return [3, 11];
                        case 10:
                            if (t.type === n.NAK && t.payload[0] === h.RESOURCE_ERROR)
                                return [2, null];
                            a.label = 11;
                        case 11:
                            throw new Error("`control` operation " + f.GET_ALBUM_CONFIG + " failed.")
                        }
                    })
                })
            }
            ,
            e.prototype.downloadFile = function(e) {
                var t = this
                  , r = !1;
                return {
                    promise: new Promise(function(o, s) {
                        return a(t, void 0, void 0, function() {
                            var t, a, d, c, l, f, _, h, v, p, b, m;
                            return u(this, function(u) {
                                switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 12, , 13]),
                                    [4, this.receivePacket()];
                                case 1:
                                    if ((t = u.sent()).type !== n.FILE_HEADER)
                                        throw new Error("Receiving file failed: Expected FILE_HEADER");
                                    return a = (new TextDecoder).decode(t.payload.slice(0, t.payload.length - 1)),
                                    d = JSON.parse(a),
                                    [4, this.sendPacket({
                                        type: n.ACK,
                                        payload: []
                                    })];
                                case 2:
                                    u.sent(),
                                    c = 0,
                                    l = new Uint8Array(d.size),
                                    f = Date.now(),
                                    e && e(0),
                                    u.label = 3;
                                case 3:
                                    return [4, this.receivePacket()];
                                case 4:
                                    return (_ = u.sent()).type !== n.FILE_BODY ? (s("Receiving file failed: Expected FILE_BODY"),
                                    [2]) : (h = y(_.payload[0], _.payload[1]),
                                    v = _.payload.slice(5, h + 2 + 3),
                                    l.set(v, c),
                                    c += h,
                                    p = Date.now(),
                                    e && p - f > 250 && (b = Math.round(c / d.size * 100) / 100,
                                    e(Math.min(b, 1)),
                                    f = p),
                                    c >= d.size ? [3, 11] : r ? [4, (0,
                                    i.wO)(250)] : [3, 9]);
                                case 5:
                                    return u.sent(),
                                    [4, this.sendPacket({
                                        type: n.ABORT,
                                        payload: []
                                    })];
                                case 6:
                                    return u.sent(),
                                    [4, this.receivePacket()];
                                case 7:
                                    return u.sent().type !== n.ACK ? (s(new Error("Cancelling download failed")),
                                    [2]) : [4, (0,
                                    i.wO)(250)];
                                case 8:
                                    return u.sent(),
                                    s(new Error("Cancelled")),
                                    [2];
                                case 9:
                                    return [4, this.sendPacket({
                                        type: n.ACK,
                                        payload: []
                                    })];
                                case 10:
                                    return u.sent(),
                                    [3, 3];
                                case 11:
                                    return o({
                                        size: d.size,
                                        type: d.type,
                                        data: l
                                    }),
                                    [3, 13];
                                case 12:
                                    return m = u.sent(),
                                    s(m),
                                    [3, 13];
                                case 13:
                                    return [2]
                                }
                            })
                        })
                    }
                    ),
                    cancel: function() {
                        r = !0
                    }
                }
            }
            ,
            e.prototype.uploadFile = function(e, t, r) {
                var o = this;
                s.kg.debug("Upload file called", e, t.name);
                var d = !1;
                return {
                    promise: new Promise(function(c, l) {
                        return a(o, void 0, void 0, function() {
                            var o, f, _, h, v, p, b = this;
                            return u(this, function(m) {
                                switch (m.label) {
                                case 0:
                                    return o = JSON.stringify(e) + "\0",
                                    f = new TextEncoder,
                                    _ = f.encode(o),
                                    h = {
                                        type: n.FILE_HEADER,
                                        payload: _
                                    },
                                    s.kg.debug("before send header"),
                                    [4, this.sendPacket(h)];
                                case 1:
                                    return m.sent(),
                                    s.kg.debug("after send header"),
                                    [4, this.receivePacket()];
                                case 2:
                                    return v = m.sent(),
                                    s.kg.debug("header res", v),
                                    v.type !== n.ACK ? (s.kg.error("Response: ", v),
                                    l(new Error("file upload error: sending `file-header` failed.")),
                                    [2]) : ((p = new FileReader).addEventListener("load", function(t) {
                                        return a(b, void 0, void 0, function() {
                                            var o, a, f, _, h, v, p, b, m, g, y;
                                            return u(this, function(u) {
                                                switch (u.label) {
                                                case 0:
                                                    o = t.target.result,
                                                    a = new Uint8Array(o),
                                                    f = e.size,
                                                    _ = Date.now(),
                                                    r && r(0),
                                                    u.label = 1;
                                                case 1:
                                                    if (!(f > 0))
                                                        return [3, 8];
                                                    for (h = Math.min(f, 8192),
                                                    v = k(h),
                                                    (p = new Uint8Array(h + 2 + 3))[0] = v[0],
                                                    p[1] = v[1],
                                                    b = 0; b < h; b += 1)
                                                        p[5 + b] = a[e.size - f + b];
                                                    return d && f > h ? [4, (0,
                                                    i.wO)(250)] : [3, 6];
                                                case 2:
                                                    return u.sent(),
                                                    [4, this.sendPacket({
                                                        type: n.ABORT,
                                                        payload: []
                                                    })];
                                                case 3:
                                                    return u.sent(),
                                                    [4, this.receivePacket()];
                                                case 4:
                                                    return u.sent().type !== n.ACK ? (l(new Error("Cancelling upload failed")),
                                                    [2]) : [4, (0,
                                                    i.wO)(250)];
                                                case 5:
                                                    return u.sent(),
                                                    l(new Error("Cancelled")),
                                                    [2];
                                                case 6:
                                                    return m = {
                                                        type: n.FILE_BODY,
                                                        payload: p
                                                    },
                                                    [4, this.sendReceivePacket(m, e.size, f, l)];
                                                case 7:
                                                    return u.sent(),
                                                    g = Date.now(),
                                                    r && g - _ > 250 && (y = Math.round((e.size - f) / e.size * 100) / 100,
                                                    r(y),
                                                    _ = g),
                                                    f -= h,
                                                    [3, 1];
                                                case 8:
                                                    return r && r(1),
                                                    s.kg.debug("file transfer complete"),
                                                    c(),
                                                    [2]
                                                }
                                            })
                                        })
                                    }),
                                    p.addEventListener("error", function() {
                                        throw new Error("file upload error: reading source file failed.")
                                    }),
                                    p.readAsArrayBuffer(t),
                                    [2])
                                }
                            })
                        })
                    }
                    ),
                    cancel: function() {
                        d = !0
                    }
                }
            }
            ,
            e.prototype.uploadStem = function(e, t, r, o, n, i) {
                void 0 === n && (n = "wav");
                var a = o.size;
                s.kg.debug("uploadStem", e);
                var u = {
                    size: a,
                    type: "mp3" === n ? "stem-audio-mp3" : "stem-audio",
                    track: e,
                    album: t,
                    stem: r
                };
                return this.uploadFile(u, o, i)
            }
            ,
            e.prototype.uploadTrackConfig = function(e, t, r, o) {
                return a(this, void 0, void 0, function() {
                    var n, i, a, d, c;
                    return u(this, function(u) {
                        if (n = new TextEncoder,
                        (i = JSON.stringify(r, null, 2)).length > 1024)
                            throw new Error("Track config too big: " + i.length + "B");
                        return a = n.encode(i),
                        d = new File([a, "\0"],"trackconfig.json"),
                        c = {
                            size: d.size,
                            type: "track-config",
                            track: e,
                            album: t
                        },
                        s.kg.debug("uploadTrackConfig", c, r),
                        [2, this.uploadFile(c, d, o).promise]
                    })
                })
            }
            ,
            e.prototype.uploadAlbumConfig = function(e, t, r) {
                return a(this, void 0, void 0, function() {
                    var o, n, i, a;
                    return u(this, function(u) {
                        return o = new TextEncoder,
                        t.id = t.id.toUpperCase(),
                        n = o.encode(JSON.stringify(t, null, 2)),
                        i = new File([n],"albumconfig.json"),
                        a = {
                            size: i.size,
                            type: "album-config",
                            album: e
                        },
                        s.kg.debug("Upload album config: ", a, t),
                        [2, this.uploadFile(a, i, r).promise]
                    })
                })
            }
            ,
            e.prototype.uploadDeviceConfig = function(e, t) {
                return a(this, void 0, void 0, function() {
                    var r, o, n, i;
                    return u(this, function(a) {
                        return r = new TextEncoder,
                        o = r.encode(JSON.stringify(e, null, 2)),
                        n = new File([o],"config.txt"),
                        i = {
                            size: n.size,
                            type: "device-config"
                        },
                        s.kg.debug("uploadDeviceConfig", i, n),
                        [2, this.uploadFile(i, n, t).promise]
                    })
                })
            }
            ,
            e.prototype.downloadStem = function(e, t, r, o) {
                var s = this
                  , i = null;
                return {
                    promise: new Promise(function(d, c) {
                        return a(s, void 0, void 0, function() {
                            var s, a, _, h, v;
                            return u(this, function(u) {
                                switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 9, , 10]),
                                    [4, this.ensureDevice()];
                                case 1:
                                    return u.sent(),
                                    [4, this.sendPacket({
                                        type: n.CONTROL,
                                        payload: E(f.GET_MUSIC_FILE, {
                                            album: e,
                                            track: t,
                                            stem: r
                                        })
                                    })];
                                case 2:
                                    return u.sent(),
                                    [4, this.receivePacket()];
                                case 3:
                                    return (s = u.sent()).type !== n.RESPONSE ? [3, 8] : s.payload[0] !== f.GET_MUSIC_FILE ? [3, 8] : [4, this.sendPacket({
                                        type: n.ACK,
                                        payload: []
                                    })];
                                case 4:
                                    u.sent(),
                                    u.label = 5;
                                case 5:
                                    return u.trys.push([5, 7, , 8]),
                                    [4, (i = this.downloadFile(o)).promise];
                                case 6:
                                    return a = u.sent(),
                                    _ = new File([a.data],l[r] + ".wav"),
                                    d(_),
                                    [2];
                                case 7:
                                    if ("Cancelled" === (h = u.sent()).message)
                                        return c(h),
                                        [2];
                                    throw h;
                                case 8:
                                    return c(new Error("`control` operation " + f.GET_MUSIC_FILE + " failed.")),
                                    [3, 10];
                                case 9:
                                    return v = u.sent(),
                                    console.error(v),
                                    c(new Error("Getting stem failed: " + v)),
                                    [2];
                                case 10:
                                    return [2]
                                }
                            })
                        })
                    }
                    ),
                    cancel: function() {
                        if (!i)
                            throw new Error("Unable to cancel: transfer not started yet");
                        i.cancel()
                    }
                }
            }
            ,
            e.prototype.getRecordedSlots = function() {
                return a(this, void 0, void 0, function() {
                    var e, t;
                    return u(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return r.sent(),
                            s.kg.debug("getRecordedSlots - started"),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: [f.GET_RECORDING_SLOTS]
                            })];
                        case 2:
                            return r.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (e = r.sent(),
                            s.kg.debug("getRecordedSlots", e),
                            e.type === n.RESPONSE && e.payload[0] === f.GET_RECORDING_SLOTS)
                                return t = (new TextDecoder).decode(e.payload.slice(1, e.payload.length - 1)),
                                [2, JSON.parse(t)];
                            throw new Error("`getRecordedSlots` failed.")
                        }
                    })
                })
            }
            ,
            e.prototype.renameAlbum = function(e, t) {
                return a(this, void 0, void 0, function() {
                    return u(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return r.sent(),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: E(f.RENAME_ALBUM, {
                                    "album-old": e,
                                    "album-new": t
                                })
                            })];
                        case 2:
                            return r.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (r.sent().type !== n.RESPONSE)
                                throw new Error("`renameAlbum` failed.");
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.moveTrack = function(e, t, r, o) {
                return a(this, void 0, void 0, function() {
                    return u(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return i.sent(),
                            s.kg.debug("moveTrack - started", e, t, r, o),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: E(f.MOVE_TRACK, {
                                    "album-old": e,
                                    "album-new": r,
                                    "track-old": t,
                                    "track-new": o
                                })
                            })];
                        case 2:
                            return i.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (i.sent().type !== n.RESPONSE)
                                throw new Error("`moveTrack` - failed.");
                            return s.kg.debug("moveTrack - complete"),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.getChargeState = function() {
                return a(this, void 0, void 0, function() {
                    var e, t;
                    return u(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return r.sent(),
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: [f.GET_STATE_OF_CHARGE]
                            })];
                        case 2:
                            return r.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if ((e = r.sent()).type === n.RESPONSE && e.payload[0] === f.GET_STATE_OF_CHARGE)
                                return t = (new TextDecoder).decode(e.payload.slice(1, e.payload.length - 1)),
                                [2, JSON.parse(t)];
                            throw new Error("`getChargeState` failed.")
                        }
                    })
                })
            }
            ,
            e.prototype.deviceAuth = function(e) {
                return a(this, void 0, void 0, function() {
                    var t, r;
                    return u(this, function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, this.ensureDevice()];
                        case 1:
                            return o.sent(),
                            s.kg.debug("getChallengeResponse - start"),
                            e = (2147483648 & (i = e)) > 0 ? i - 4294967296 & 4294967295 : 4294967295 & i,
                            [4, this.sendPacket({
                                type: n.CONTROL,
                                payload: E(f.CHALLENGE, {
                                    challenge: e
                                })
                            })];
                        case 2:
                            return o.sent(),
                            [4, this.receivePacket()];
                        case 3:
                            if (t = o.sent(),
                            s.kg.debug("getChallengeResponse: res", t),
                            t.type === n.RESPONSE && t.payload[0] === f.CHALLENGE)
                                return r = (new TextDecoder).decode(t.payload.slice(1, t.payload.length - 1)),
                                s.kg.debug("getChallengeResponse: validated payload", JSON.parse(r)),
                                [2, JSON.parse(r).response];
                            throw new Error("`control` operation " + f.CHALLENGE + " failed.")
                        }
                        var i
                    })
                })
            }
            ,
            e.prototype.sendPacket = function(e) {
                return a(this, void 0, void 0, function() {
                    var t, r, o, i, a;
                    return u(this, function(u) {
                        switch (u.label) {
                        case 0:
                            t = function(e) {
                                var t = e.payload.length + 1
                                  , r = k(t)
                                  , o = 2 + t;
                                o % 64 === 0 && (o += 1);
                                var n = new Uint8Array(o);
                                return n[0] = r[0],
                                n[1] = r[1],
                                n[2] = e.type,
                                n.set(e.payload, 3),
                                n
                            }(e),
                            o = void 0,
                            u.label = 1;
                        case 1:
                            u.trys.push([1, 6, 7, 8]),
                            e.type === n.FILE_HEADER && (s.kg.debug("about to send file-header"),
                            s.kg.debug(e.payload.length, t)),
                            u.label = 2;
                        case 2:
                            return u.trys.push([2, 4, , 5]),
                            [4, this.usb.transferOut(1, t)];
                        case 3:
                            return r = u.sent(),
                            e.type === n.FILE_HEADER && s.kg.debug("file-header sent", r),
                            [3, 5];
                        case 4:
                            throw "NotFoundError" === (i = u.sent()).name && this.reset(),
                            i;
                        case 5:
                            if ("ok" !== r.status)
                                throw new Error("USB data transfer failed.");
                            return o = !0,
                            [3, 8];
                        case 6:
                            throw a = u.sent(),
                            o = !1,
                            a;
                        case 7:
                            return m("out", e, o),
                            [7];
                        case 8:
                            return [2]
                        }
                    })
                })
            }
            ,
            e.prototype.receivePacket = function() {
                return a(this, void 0, void 0, function() {
                    var e, t, r, o;
                    return u(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]),
                            [4, this.usb.transferIn(1, 8210)];
                        case 1:
                            return e = n.sent(),
                            [3, 3];
                        case 2:
                            throw "NotFoundError" === (t = n.sent()).name && this.reset(),
                            t;
                        case 3:
                            if ("ok" !== e.status)
                                throw new Error("USB data transfer failed.");
                            return r = new Uint8Array(e.data.buffer),
                            m("in", o = function(e) {
                                var t = y(e[0], e[1])
                                  , r = {
                                    type: e[2],
                                    payload: []
                                };
                                return t > 1 && (r.payload = e.slice(3, t + 2)),
                                r
                            }(r), !0),
                            [2, o]
                        }
                    })
                })
            }
            ,
            e
        }()
    }
    ,
    a8a8948619489f84f5bf: (e,t,r)=>{
        "use strict";
        r.d(t, {
            wO: ()=>(function(e) {
                return o(this, void 0, void 0, function() {
                    return n(this, function(t) {
                        return [2, new Promise(function(t) {
                            return setTimeout(t, e)
                        }
                        )]
                    })
                })
            }
            ),
            o7: ()=>(function(e, t) {
                return s(e, t)
            }
            ),
            O8: ()=>(function(e, t) {
                return s(e, t)
            }
            ),
            qP: ()=>(function(e, t) {
                return s(e, t)
            }
            ),
            k$: ()=>(function() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(e) {
                    return (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
                })
            }
            ),
            K_: ()=>(function(e) {
                return /^#[0-9A-F]{6}$/i.test(e)
            }
            ),
            hj: ()=>(function(e) {
                return Number(e) === e
            }
            )
        });
        var o = function(e, t, r, o) {
            return new (r || (r = Promise))(function(n, s) {
                function i(e) {
                    try {
                        u(o.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        u(o.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(i, a)
                }
                u((o = o.apply(e, t || [])).next())
            }
            )
        }
          , n = function(e, t) {
            var r, o, n, s, i = {
                label: 0,
                sent: function() {
                    if (1 & n[0])
                        throw n[1];
                    return n[1]
                },
                trys: [],
                ops: []
            };
            return s = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }
            ),
            s;
            function a(s) {
                return function(a) {
                    return function(s) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; i; )
                            try {
                                if (r = 1,
                                o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o),
                                0) : o.next) && !(n = n.call(o, s[1])).done)
                                    return n;
                                switch (o = 0,
                                n && (s = [2 & s[0], n.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    n = s;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    o = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                        i.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && i.label < n[1]) {
                                        i.label = n[1],
                                        n = s;
                                        break
                                    }
                                    if (n && i.label < n[2]) {
                                        i.label = n[2],
                                        i.ops.push(s);
                                        break
                                    }
                                    n[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                s = t.call(e, i)
                            } catch (e) {
                                s = [6, e],
                                o = 0
                            } finally {
                                r = n = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, a])
                }
            }
        };
        function s(e, t) {
            return (e ? e.toUpperCase() : e) === (t ? t.toUpperCase() : t)
        }
    }
    ,
    a48309e68714456ffccb: (e,t,r)=>{
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function o(e, t, r, o, n, s, i) {
            try {
                var a = e[s](i)
                  , u = a.value
            } catch (e) {
                return void r(e)
            }
            a.done ? t(u) : Promise.resolve(u).then(o, n)
        }
        function n(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, s) {
                    var i = e.apply(t, r);
                    function a(e) {
                        o(i, n, s, a, u, "next", e)
                    }
                    function u(e) {
                        o(i, n, s, a, u, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        e.exports = n,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "asyncGeneratorStep", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/node_modules/@babel/runtime/helpers/asyncToGenerator.js"),
            e.register(n, "_asyncToGenerator", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/node_modules/@babel/runtime/helpers/asyncToGenerator.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "6f187f73a51c6304e7d6": (e,t,r)=>{
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function o(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        e.exports = o,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(o, "_defineProperty", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/node_modules/@babel/runtime/helpers/defineProperty.js")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    ceea40cb320efd487259: (e,t,r)=>{
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function o() {
            return e.exports = o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r)
                        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            }
            ,
            o.apply(this, arguments)
        }
        e.exports = o,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(o, "_extends", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/node_modules/@babel/runtime/helpers/extends.js")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "8c32303422aadf36cbf3": (e,t,r)=>{
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        var o = r("0e2cb0586908e240e659");
        function n(e, t) {
            if (null == e)
                return {};
            var r, n, s = o(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
            }
            return s
        }
        e.exports = n,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(n, "_objectWithoutProperties", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/node_modules/@babel/runtime/helpers/objectWithoutProperties.js")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "0e2cb0586908e240e659": (e,t,r)=>{
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function o(e, t) {
            if (null == e)
                return {};
            var r, o, n = {}, s = Object.keys(e);
            for (o = 0; o < s.length; o++)
                r = s[o],
                t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n
        }
        e.exports = o,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(o, "_objectWithoutPropertiesLoose", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "5e06711fc204c8cc9b3a": (e,t,r)=>{
        "use strict";
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        const o = r.g;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(o, "default", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/@types/global.d.ts")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    d6531ad49d2742e2387a: ()=>{
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature
    }
    ,
    "8a5d22dd0b24a6092d3e": (e,t,r)=>{
        "use strict";
        r.d(t, {
            Yi: ()=>n.ZP,
            j: ()=>o.j,
            v8: ()=>o.v8
        });
        r("5e06711fc204c8cc9b3a"),
        r("d6531ad49d2742e2387a");
        var o = r("1ccf057766bc7fd4a574")
          , n = r("5679d3d5fd3ced4243e1");
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature,
        r("3c7d3c701ef55206f5a7"),
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature
    }
    ,
    b5a6793b1fbe56728969: (module,__unused_webpack___webpack_exports__,__webpack_require__)=>{
        "use strict";
        var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f187f73a51c6304e7d6")
          , _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__)
          , react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8af190b70a6bc55c6f1b")
          , _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("76e801c56e29117c1f5c");
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, o)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        module = __webpack_require__.hmd(module),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            e && e(module)
        }();
        var __signature__ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        class OfflineClientConsumer extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
            render() {
                return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_utils_context__WEBPACK_IMPORTED_MODULE_2__.g.Consumer, null, e=>{
                    const t = _objectSpread({}, e)
                      , {children: r} = this.props
                      , o = [];
                    return react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(r, e=>{
                        react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(e) && o.push(react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(e, t))
                    }
                    ),
                    o || null
                }
                )
            }
            __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code)
            }
        }
        const _default = OfflineClientConsumer;
        var __WEBPACK_DEFAULT_EXPORT__ = _default;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(OfflineClientConsumer, "OfflineClientConsumer", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/offlineClient/consumer.tsx"),
            e.register(_default, "default", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/offlineClient/consumer.tsx"))
        }(),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            e && e(module)
        }()
    }
    ,
    "08abf5351c8674495f94": (e,t,r)=>{
        "use strict";
        var o = r("ceea40cb320efd487259")
          , n = r.n(o)
          , s = r("8c32303422aadf36cbf3")
          , i = r.n(s)
          , a = r("8af190b70a6bc55c6f1b")
          , u = r("5ef9de3df8d92ea0e41c")
          , d = r.n(u)
          , c = r("76e801c56e29117c1f5c");
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function l(e) {
            const t = `withOfflineClient(${e.displayName || e.name})`
              , r = t=>{
                const {wrappedComponentRef: r} = t
                  , o = i()(t, ["wrappedComponentRef"]);
                return a.createElement(c.g.Consumer, null, t=>a.createElement(e, n()({}, o, t, {
                    ref: r
                })))
            }
            ;
            return r.displayName = t,
            r.WrappedComponent = e,
            d()(r, e)
        }
        const f = l;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(l, "withOfflineClient", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/offlineClient/hoc.tsx"),
            e.register(f, "default", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/offlineClient/hoc.tsx"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "3c7d3c701ef55206f5a7": (e,t,r)=>{
        "use strict";
        r.d(t, {
            yi: ()=>o.Z
        });
        r("b5a6793b1fbe56728969");
        var o = r("356aea238549c3ac1a7c");
        r("08abf5351c8674495f94"),
        r("76e801c56e29117c1f5c"),
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature
    }
    ,
    "356aea238549c3ac1a7c": (module,__webpack_exports__,__webpack_require__)=>{
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Z: ()=>__WEBPACK_DEFAULT_EXPORT__
        });
        var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f187f73a51c6304e7d6")
          , _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__)
          , react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8af190b70a6bc55c6f1b")
          , react_detect_offline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("e90ffebabba709c7f296")
          , _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("76e801c56e29117c1f5c");
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, o)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        module = __webpack_require__.hmd(module),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            e && e(module)
        }();
        var __signature__ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        const inBrowser = "undefined" !== typeof navigator;
        class OfflineClientProvider extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
            constructor(e) {
                super(e),
                this.state = {
                    online: !inBrowser || "boolean" !== typeof navigator.onLine || navigator.onLine
                },
                this.getOnlineStatus = (()=>this.state.online)
            }
            render() {
                const {children: e} = this.props
                  , t = {
                    offlineClient: _objectSpread(_objectSpread({}, {
                        getOnlineStatus: this.getOnlineStatus
                    }), this.state)
                };
                return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_utils_context__WEBPACK_IMPORTED_MODULE_3__.g.Provider, {
                    value: t
                }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_detect_offline__WEBPACK_IMPORTED_MODULE_2__.gU, {
                    render: ()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null),
                    onChange: e=>this.setState({
                        online: e
                    })
                }), e ? e(t) : null)
            }
            __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code)
            }
        }
        const _default = OfflineClientProvider
          , __WEBPACK_DEFAULT_EXPORT__ = _default;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(inBrowser, "inBrowser", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/offlineClient/provider.tsx"),
            e.register(OfflineClientProvider, "OfflineClientProvider", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/offlineClient/provider.tsx"),
            e.register(_default, "default", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/offlineClient/provider.tsx"))
        }(),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            e && e(module)
        }()
    }
    ,
    bc232552341112f68615: (module,__webpack_exports__,__webpack_require__)=>{
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            e: ()=>TelemetryClient
        });
        var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f187f73a51c6304e7d6")
          , _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__)
          , _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a48309e68714456ffccb")
          , _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__)
          , fingerprintjs2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ed0cde5521b40c88175e")
          , fingerprintjs2__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(fingerprintjs2__WEBPACK_IMPORTED_MODULE_2__)
          , _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8390a660195ca787c81e")
          , _utils_react_tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1ccf057766bc7fd4a574")
          , _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5679d3d5fd3ced4243e1");
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, o)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        module = __webpack_require__.hmd(module),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            e && e(module)
        }();
        var __signature__ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        window.telemetryLayerHistory = [],
        window.stackTraceId = (0,
        _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.do)();
        const debugTimingDivider = 1
          , defaultConfig = {
            trackingInterval: 1e4 / debugTimingDivider,
            refreshIdleSessionInterval: 3e4 / debugTimingDivider,
            sessionSoftTimeout: 6e4 / debugTimingDivider,
            sessionHardTimeout: 18e4 / debugTimingDivider,
            refreshCookieInterval: 6e4 / debugTimingDivider,
            deviceIdCookieTimeout: 864e5,
            disableCookies: !1
        };
        class TelemetryClient {
            constructor({config: e, tracking: t, getCookiePermissions: r}) {
                var o = this;
                this.config = void 0,
                this.trackEvent = void 0,
                this.getCookiePermissions = void 0,
                this.sessionId = void 0,
                this.userId = void 0,
                this.deviceId = void 0,
                this.expiryingSessionId = void 0,
                this.lastTrackedEvent = void 0,
                this.lastInteractionTimestamp = void 0,
                this.pageChanged = void 0,
                this.kit_id = void 0,
                this.kit_session_id = void 0,
                this.kit_sku = void 0,
                this.kit_user_id = void 0,
                this.is_uwp_app = void 0,
                this.telemetryStarted = void 0,
                this.sessionPaused = void 0,
                this.sendingInProgress = void 0,
                this.offlineStoreName = void 0,
                this.deviceIdStoreName = void 0,
                this.acceptedEnv = void 0,
                this.online = void 0,
                this.refreshIdleSession = void 0,
                this.refreshCookie = void 0,
                this.sessionEnd = void 0,
                this.tracking = void 0,
                this._hasCookiePermissions = void 0,
                this._sendTrackingData = void 0,
                this.initTracking = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e) {
                        const {url: t} = o.config;
                        if (!t || !o.acceptedEnv)
                            return void console.log(`telemetry-client:: tracking is not supported for env: ${o.config.env}`);
                        if (o.userId = e,
                        o.telemetryStarted)
                            return;
                        o.telemetryStarted = !0,
                        window.Windows && (o.is_uwp_app = !0,
                        o.setWindowsKitInfo()),
                        yield _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.mM.remove(o.config.cookieSessionName);
                        const {sessionId: r, sessionType: n} = o.getSession();
                        o.sessionId = r;
                        const s = yield o.getDeviceId();
                        o.deviceId = s,
                        o.pageIsHidden() || (o.trackSessionEvent({
                            event: n,
                            userId: e,
                            sessionId: r,
                            deviceId: s
                        }),
                        yield o.startTracking(),
                        yield o.startCookieSession(r)),
                        o.addEventListeners()
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.getSession = (()=>{
                    const e = _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.eR.read({
                        name: this.config.cookieSessionName
                    });
                    if (e)
                        return {
                            sessionId: e,
                            sessionType: "resume_session"
                        };
                    if (this.expiryingSessionId)
                        return {
                            sessionId: this.expiryingSessionId,
                            sessionType: "resume_session"
                        };
                    let t = "";
                    if (window.Windows) {
                        t = (new window.KanoComputing.KpcUwpCore.WinRT.PlatformDetection.PlatformIdentifiers).getAppSessionId()
                    } else
                        t = (0,
                        _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.do)();
                    return {
                        sessionId: t,
                        sessionType: "start_session"
                    }
                }
                ),
                this.resumeSession = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e) {
                        if (!o.tracking || o.sessionPaused) {
                            o.sessionPaused = !1;
                            const {sessionId: t, sessionType: r} = o.getSession();
                            o.sessionId = t,
                            o.deviceId = yield o.getDeviceId(),
                            o.trackSessionEvent({
                                event: r
                            }),
                            yield o.startTracking(),
                            yield o.startCookieSession(t),
                            e && o.trackEvent(e),
                            o.sessionEnd && (clearTimeout(o.sessionEnd),
                            o.expiryingSessionId = null)
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.pauseSession = (()=>{
                    this.tracking && !this.sessionPaused && (this.sessionPaused = !0,
                    this.clearCookieSession(),
                    this.clearRefreshIdleSession(),
                    this.trackSessionEvent({
                        event: "pause_session"
                    }),
                    this.expiryingSessionId = this.sessionId,
                    this.sessionEnd = setTimeout(()=>{
                        this.expiryingSessionId = null
                    }
                    , this.config.sessionHardTimeout))
                }
                ),
                this.setWindowsKitInfo = (()=>{
                    if (!window.Windows)
                        return;
                    const e = new window.KanoComputing.KpcUwpApp.WinRT.PlatformDetection.KanoPlatformDetector;
                    this.kit_sku = e.getDeviceSku();
                    const t = new window.KanoComputing.KpcUwpCore.WinRT.PlatformDetection.PlatformIdentifiers;
                    this.kit_user_id = t.getUserId(),
                    this.kit_id = t.getDeviceId(),
                    this.kit_session_id = t.getSessionId()
                }
                ),
                this.startTracking = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*() {
                    const {url: e, trackingInterval: t} = o.config;
                    e && o.acceptedEnv && (o.tracking || (o._tracking(),
                    o.tracking = setInterval(o._tracking, t)))
                }),
                this._tracking = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*() {
                    if (window[_provider__WEBPACK_IMPORTED_MODULE_5__.Ez] && window[_provider__WEBPACK_IMPORTED_MODULE_5__.Ez].length > 0 && !o.sendingInProgress) {
                        const e = [...window[_provider__WEBPACK_IMPORTED_MODULE_5__.Ez]]
                          , t = e[e.length - 1];
                        if (o.setLastTrackedEvent(t),
                        window[_provider__WEBPACK_IMPORTED_MODULE_5__.Ez] = [],
                        !o.online)
                            return o.updateLocalStorage(e);
                        yield o.triggerDataSend(e, o.tracking)
                    } else
                        o.sessionPaused || o.startRefreshIdleSession(!0)
                }),
                this.startCookieSession = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e) {
                        if (!(yield o.hasCookiePermissions()) || o.refreshCookie)
                            return;
                        const t = e || o.sessionId;
                        yield o.setSessionCookie({
                            sessionId: t
                        }),
                        o.refreshCookie = setInterval(()=>{
                            o.setSessionCookie({
                                sessionId: t
                            })
                        }
                        , o.config.refreshCookieInterval)
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.setSessionCookie = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*({sessionId: e=o.sessionId, expiryTime: t}) {
                        if (!(yield o.hasCookiePermissions()))
                            return;
                        const r = new Date((new Date).getTime() + (t || o.config.refreshCookieInterval));
                        _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.eR.create({
                            name: o.config.cookieSessionName,
                            value: e,
                            expires: r
                        })
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.clearCookieSession = (()=>{
                    null !== this.refreshCookie && (clearInterval(this.refreshCookie),
                    this.refreshCookie = null)
                }
                ),
                this.stopCookieSession = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e) {
                        (yield o.hasCookiePermissions()) && null !== o.refreshCookie && (o.setSessionCookie({
                            expiryTime: e || 0
                        }),
                        o.clearCookieSession())
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.startRefreshIdleSession = (e=>{
                    this.refreshIdleSession || (e && this._refreshIdleSession(),
                    document.body.addEventListener("mousedown", this.handleMouseDown),
                    this.refreshIdleSession = setInterval(this._refreshIdleSession, this.config.refreshIdleSessionInterval))
                }
                ),
                this._refreshIdleSession = (()=>{
                    const e = new Date;
                    if (null !== this.lastTrackedEvent) {
                        if (null !== this.lastInteractionTimestamp)
                            return this.trackSessionEvent({
                                event: "refresh_session"
                            }),
                            this.lastInteractionTimestamp = null,
                            this.lastTrackedEvent.date = e,
                            void document.body.addEventListener("mousedown", this.handleMouseDown);
                        const t = this.lastTrackedEvent.date.getTime();
                        if (t && e.getTime() - t > this.config.sessionSoftTimeout)
                            return void (this.pageChanged && (this.stopCookieSession(),
                            this.pauseSession()));
                        this.sessionPaused || this.trackSessionEvent({
                            event: "refresh_session"
                        })
                    }
                }
                ),
                this.clearRefreshIdleSession = (()=>{
                    null !== this.refreshIdleSession && (clearInterval(this.refreshIdleSession),
                    this.refreshIdleSession = null)
                }
                ),
                this.addEventListeners = (()=>{
                    window.addEventListener("beforeunload", ()=>this.handleBeforeUnload),
                    document.addEventListener("visibilitychange", this.handleVisibilityChange, !1),
                    window.addEventListener("blur", this.handleVisibilityChange),
                    window.addEventListener("focus", this.handleVisibilityChange)
                }
                ),
                this.handleBeforeUnload = (()=>{
                    this.sessionPaused || null === this.refreshCookie || this.pageIsHidden() || this.stopCookieSession(5e3)
                }
                ),
                this.handleVisibilityChange = (e=>{
                    this.pageIsHidden() ? this.pauseSession() : this.resumeSession()
                }
                ),
                this.handleMouseDown = (()=>{
                    (this.refreshIdleSession || this.sessionPaused) && null === this.lastInteractionTimestamp && (this.lastInteractionTimestamp = new Date,
                    document.body.removeEventListener("mousedown", this.handleMouseDown),
                    this.sessionPaused && this.resumeSession())
                }
                ),
                this.trackSessionEvent = (({event: e, sessionId: t=this.sessionId, userId: r=this.userId, deviceId: o=this.deviceId, additionalEventData: n={}},s)=>{
                    const {platform: i, vendor: a, language: u} = window.navigator ? window.navigator : {
                        platform: null,
                        vendor: null,
                        language: null
                    };
                    let d = {
                        sessionId: t,
                        userId: r,
                        deviceId: o,
                        platform: i,
                        vendor: a,
                        language: u,
                        windowSize: window.innerWidth
                    };
                    switch (e) {
                    case "pause_session":
                        const t = {
                            currentPage: this.pageChanged.page,
                            duration: (new Date).getTime() - this.pageChanged.time.getTime()
                        };
                        d = _objectSpread(_objectSpread({}, d), t)
                    }
                    const c = _objectSpread({
                        event: e,
                        data: d
                    }, n);
                    return !1 !== s && this.trackEvent(c),
                    c
                }
                ),
                this.trackSessionError = ((e,t,r)=>{
                    this.trackEvent({
                        error: {
                            message: e,
                            name: t,
                            stack: r
                        }
                    })
                }
                ),
                this.setLastTrackedEvent = (e=>{
                    e.event && "refresh_session" !== e.event && (this.lastTrackedEvent = {
                        date: e.date,
                        event: e.event
                    })
                }
                ),
                this.updateOnline = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e) {
                        if (o.online && !e)
                            o.online = e;
                        else if (!o.online && e && (o.online = e,
                        o.acceptedEnv)) {
                            const e = JSON.parse(_kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.mM.read(o.offlineStoreName));
                            e && (yield o.triggerDataSend(e),
                            _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.mM.remove(o.offlineStoreName))
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.hasCookiePermissions = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*() {
                    if (o.config.disableCookies)
                        return !1;
                    if (null !== o._hasCookiePermissions)
                        return o._hasCookiePermissions;
                    const e = yield o.getCookiePermissions()
                      , t = JSON.parse(e)
                      , r = t && "allow" === t.permission;
                    return o._hasCookiePermissions = r,
                    r
                }),
                this.handleOnSaveCookie = (()=>{
                    this._hasCookiePermissions = !0,
                    this.startCookieSession(),
                    this.createCookieDeviceId(this.deviceId),
                    this.addEventListeners()
                }
                ),
                this.pageIsHidden = (()=>document.hidden || !document.hasFocus()),
                this.getDeviceId = (()=>new Promise(e=>{
                    const t = null !== this.deviceId ? this.deviceId : _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.mM.read(this.deviceIdStoreName);
                    if (t)
                        return e(t);
                    const r = _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.eR.read({
                        name: this.config.cookieDeviceIdName
                    });
                    return r ? e(r) : this.createDeviceId().then(t=>e(t))
                }
                )),
                this.createDeviceId = (()=>new Promise(function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e) {
                        const t = yield new Promise(e=>{
                            window.requestIdleCallback ? window.requestIdleCallback(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*() {
                                fingerprintjs2__WEBPACK_IMPORTED_MODULE_2___default().get(t=>e(o.createBrowserFingerprintHash(t)))
                            })) : setTimeout(()=>{
                                fingerprintjs2__WEBPACK_IMPORTED_MODULE_2___default().get(t=>e(o.createBrowserFingerprintHash(t)))
                            }
                            , 500)
                        }
                        );
                        _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.mM.write(o.deviceIdStoreName, t),
                        yield o.createCookieDeviceId(t),
                        e(t)
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }())),
                this.createBrowserFingerprintHash = (e=>{
                    const t = e.map(function(e) {
                        return e.value
                    });
                    return fingerprintjs2__WEBPACK_IMPORTED_MODULE_2___default().x64hash128(t.join(""), 31)
                }
                ),
                this.createCookieDeviceId = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e) {
                        if (yield o.hasCookiePermissions()) {
                            const t = new Date((new Date).getTime() + o.config.deviceIdCookieTimeout);
                            _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.eR.create({
                                name: o.config.cookieDeviceIdName,
                                value: e,
                                expires: t
                            })
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.updateLocalStorage = (e=>{
                    const t = _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.mM.read(this.offlineStoreName)
                      , r = t ? [...JSON.parse(t), ...e] : [...e];
                    _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.mM.write(this.offlineStoreName, JSON.stringify(r))
                }
                ),
                this.updatePageChanged = (e=>{
                    this.pageChanged = {
                        page: e.page,
                        time: e.date
                    }
                }
                ),
                this.triggerDataSend = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e, t) {
                        const {url: r, env: n} = o.config;
                        o.sendingInProgress = !0;
                        try {
                            yield o.sendData(r, {
                                data: e,
                                collection: n
                            }),
                            o.sendingInProgress = !1
                        } catch (e) {
                            console.error(e),
                            t && clearInterval(t),
                            o.sendingInProgress = !1
                        }
                    });
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.sendData = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e="", t) {
                        let r = !1;
                        const n = t.data.map(e=>{
                            let t = null;
                            (0,
                            _utils_react_tracking__WEBPACK_IMPORTED_MODULE_4__.y0)(e) ? (r = !0,
                            t = {
                                name: "error",
                                properties: e.error
                            }) : t = {
                                name: e.event,
                                properties: e.data,
                                action: e.action,
                                module: e.module
                            };
                            let n = null;
                            o.is_uwp_app && (n = {
                                kit_id: o.kit_id,
                                kit_session_id: o.kit_session_id,
                                kit_sku: o.kit_sku,
                                kit_user_id: o.kit_user_id
                            });
                            const s = new Date(e.date)
                              , i = _objectSpread(_objectSpread(_objectSpread({}, t), n), {}, {
                                page_path: e.page || null,
                                time: s.getTime(),
                                timezone_offset: s.getTimezoneOffset(),
                                session_id: o.sessionId,
                                userId: o.userId,
                                device_id: o.deviceId,
                                version: e.appVersion
                            });
                            return JSON.stringify(i)
                        }
                        );
                        if (!r && "string" !== typeof o.sessionId) {
                            const e = {
                                telemetryClient: o,
                                events: n,
                                stackTraceId: window.stackTraceId
                            };
                            o.trackSessionError("Telemetry session is missing vital tracking config.", "telemetry-session-config-missing", JSON.stringify(e))
                        }
                        const s = {
                            n: t.data[0].app,
                            d: n,
                            c: t.collection,
                            v: t.data[0].appVersion
                        }
                          , i = o._sendTrackingData ? yield fetch(e, {
                            method: "PUT",
                            body: JSON.stringify(s),
                            headers: new Headers({
                                "Content-Type": "application/json"
                            })
                        }).then(e=>200 === e.status ? e.json() : e.text().then(e=>{
                            throw new Error(e)
                        }
                        )).catch(e=>{
                            console.log(e)
                        }
                        ) : {};
                        return "production" !== o.config.env && (window.telemetryLayerHistory = [...window.telemetryLayerHistory, ...n]),
                        i
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                this.dispose = (()=>{
                    this.refreshIdleSession && clearInterval(this.refreshIdleSession),
                    this.refreshCookie && clearInterval(this.refreshCookie),
                    this.tracking && clearInterval(this.tracking),
                    document.body.removeEventListener("mousedown", this.handleMouseDown),
                    document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1),
                    window.removeEventListener("blur", this.handleVisibilityChange),
                    window.removeEventListener("focus", this.handleVisibilityChange)
                }
                ),
                this.config = _objectSpread(_objectSpread({}, defaultConfig), e),
                this.trackEvent = t.trackEvent,
                this.getCookiePermissions = r,
                this.sessionId = null,
                this.userId = null,
                this.deviceId = null,
                this.expiryingSessionId = null,
                this.telemetryStarted = !1,
                this.sendingInProgress = !1,
                this.offlineStoreName = `kano-telemetry-offline-${e.env}`,
                this.deviceIdStoreName = `kano-telemetry-device-id-${e.env}`,
                this.acceptedEnv = "staging" === e.env || "production" === e.env,
                this.sessionPaused = !1,
                this.lastInteractionTimestamp = null,
                this.lastTrackedEvent = null,
                this.is_uwp_app = !1,
                this._hasCookiePermissions = null,
                this._sendTrackingData = this.acceptedEnv
            }
            __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code)
            }
        }
        const _default = TelemetryClient;
        var __WEBPACK_DEFAULT_EXPORT__ = _default;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(debugTimingDivider, "debugTimingDivider", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/client.ts"),
            e.register(defaultConfig, "defaultConfig", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/client.ts"),
            e.register(TelemetryClient, "TelemetryClient", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/client.ts"),
            e.register(_default, "default", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/client.ts"))
        }(),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            e && e(module)
        }()
    }
    ,
    "5679d3d5fd3ced4243e1": (module,__webpack_exports__,__webpack_require__)=>{
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            Ez: ()=>DATA_LAYER_TELEMETRY_NAME,
            ZP: ()=>__WEBPACK_DEFAULT_EXPORT__
        });
        var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f187f73a51c6304e7d6"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__), _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a48309e68714456ffccb"), _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__), react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8af190b70a6bc55c6f1b"), react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("657c5d0bc31a26770cad"), react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__), _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8390a660195ca787c81e"), _utils_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("76e801c56e29117c1f5c"), _utils_react_tracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1ccf057766bc7fd4a574"), _offlineClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3c7d3c701ef55206f5a7"), _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bc232552341112f68615"), _dec, _class, _temp;
        function ownKeys(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, o)
            }
            return r
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(r), !0).forEach(function(t) {
                    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        module = __webpack_require__.hmd(module),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            e && e(module)
        }();
        var __signature__ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        let telemetryClient = null
          , TelemetryManager = (_dec = (0,
        _utils_react_tracking__WEBPACK_IMPORTED_MODULE_5__.j)(e=>({
            page: e.location.pathname
        })),
        _dec((_temp = class TelemetryManager extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
            constructor(e) {
                var t;
                super(e),
                t = this,
                this.telemetryClient = void 0,
                this.cookieLocalStoreName = void 0,
                this.cookieSessionName = void 0,
                this.cookieDeviceIdName = void 0,
                this.crossDomainStorage = void 0,
                this.cookieStorage = void 0,
                this.onRouteChanged = ((e,t,r)=>{
                    const {lastPageChange: o, sythenticPageChange: n} = this.state
                      , {trackEvent: s, getTrackingData: i} = this.props.tracking
                      , {date: a} = i()
                      , u = null !== n ? n : t && t.pathname || null
                      , d = e && e.pathname || null;
                    this.setState({
                        currentPage: d,
                        lastPageChange: a,
                        sythenticPageChange: r ? d : null
                    }, ()=>s({
                        event: "page_view",
                        data: {
                            oldPage: u,
                            newPage: d,
                            duration: o && a.getTime() / 1e3 - o.getTime() / 1e3 || null
                        }
                    }))
                }
                ),
                this.trackSyntheticPageChange = (e=>{
                    const t = {
                        pathname: e,
                        search: "",
                        state: "",
                        hash: ""
                    };
                    this.onRouteChanged(t, this.props.location, !0)
                }
                ),
                this.trackUser = (e=>{
                    this.setState({
                        trackUser: !0
                    }),
                    this.telemetryClient.initTracking(e)
                }
                ),
                this.getCookiePermissions = (()=>new Promise(function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e) {
                        try {
                            const r = t.crossDomainStorage && (yield t.crossDomainStorage.read(t.cookieLocalStoreName));
                            if (r)
                                return e(r)
                        } catch (e) {}
                        return e(_kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.mM.read(t.cookieLocalStoreName))
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }())),
                this.setCookiePermissions = (e=>{
                    _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.mM.write(this.cookieLocalStoreName, JSON.stringify({
                        date: new Date,
                        permission: e
                    })),
                    this.crossDomainStorage && this.crossDomainStorage.write(this.cookieLocalStoreName, JSON.stringify({
                        date: new Date,
                        permission: e
                    }))
                }
                ),
                this.updateStatus = (e=>{
                    this.telemetryClient.updateOnline(e)
                }
                ),
                this.onToastManagerMounted = function() {
                    var e = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(function*(e) {
                        const {providerConfig: {disableCookies: r}} = t.props;
                        if (r)
                            return;
                        const o = t.cookieStorage.read({
                            name: t.cookieSessionName
                        });
                        (yield t.getCookiePermissions()) || o ? o && t.setCookiePermissions("allow") : e.toastManager.queueToast("cookie-consent", "rich-teas", {
                            onAllow: ()=>{
                                t.setCookiePermissions("allow"),
                                t.telemetryClient.handleOnSaveCookie()
                            }
                            ,
                            onDeny: ()=>{
                                t.setCookiePermissions("deny")
                            }
                        })
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.state = {
                    trackUser: !1,
                    currentPage: e.location.pathname,
                    lastPageChange: new Date,
                    sythenticPageChange: null
                },
                this.cookieLocalStoreName = `kano-cookie-permission-${e.providerConfig.env}`,
                this.cookieSessionName = "kano-telemetry-session",
                this.cookieDeviceIdName = "kano-telemetry-device-id";
                const r = _objectSpread(_objectSpread({}, e.providerConfig), {}, {
                    cookieLocalStoreName: this.cookieLocalStoreName,
                    cookieSessionName: this.cookieSessionName,
                    cookieDeviceIdName: this.cookieDeviceIdName
                });
                telemetryClient = new _client__WEBPACK_IMPORTED_MODULE_7__.e({
                    config: r,
                    tracking: e.tracking,
                    getCookiePermissions: this.getCookiePermissions
                }),
                this.telemetryClient = telemetryClient
            }
            componentDidMount() {
                const {providerConfig: {hasCrossDomainStorage: e=!0}} = this.props;
                this.crossDomainStorage = e && (0,
                _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.PM)(),
                this.cookieStorage = (0,
                _kano_kbc_utils__WEBPACK_IMPORTED_MODULE_3__.Hh)()
            }
            componentDidUpdate(e) {
                this.props.location !== e.location && this.state.trackUser && this.onRouteChanged(this.props.location, e.location, !1)
            }
            componentWillUnmount() {
                this.telemetryClient && this.telemetryClient.dispose()
            }
            render() {
                const {children: e} = this.props
                  , t = _objectSpread({}, {
                    trackUser: this.trackUser,
                    trackSyntheticPageChange: this.trackSyntheticPageChange,
                    onToastManagerMounted: this.onToastManagerMounted
                });
                return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_utils_context__WEBPACK_IMPORTED_MODULE_4__.w.Provider, {
                    value: t
                }, react__WEBPACK_IMPORTED_MODULE_2__.createElement(_offlineClient__WEBPACK_IMPORTED_MODULE_6__.yi, null, ({offlineClient: {online: r}})=>(this.updateStatus(r),
                e ? e(_objectSpread(_objectSpread({}, t), {}, {
                    online: r
                })) : null)))
            }
            __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code)
            }
        }
        ,
        _class = _temp)) || _class);
        const appTrackingData = e=>({
            app: e.app,
            appVersion: e.appVersion,
            env: e.env,
            date: new Date
        })
          , DATA_LAYER_TELEMETRY_NAME = "telemetryLayer"
          , TelemetryProvider = (0,
        _utils_react_tracking__WEBPACK_IMPORTED_MODULE_5__.j)(e=>appTrackingData(e.providerConfig), {
            dispatch: e=>{
                const {refreshIdleSession: t, sessionPaused: r, resumeSession: o, clearRefreshIdleSession: n} = telemetryClient
                  , s = (0,
                _utils_react_tracking__WEBPACK_IMPORTED_MODULE_5__.y0)(e) ? "error" : e.event;
                t || !r || "pause_session" === s || "resume_session" === s ? (t && "resume_session" !== s && "refresh_session" !== s && n(),
                "page_view" !== s && "start_session" !== s && "resume_session" !== s || telemetryClient.updatePageChanged(e),
                (window[DATA_LAYER_TELEMETRY_NAME] = window[DATA_LAYER_TELEMETRY_NAME] || []).push(e)) : o(e)
            }
        })((0,
        react_router_dom__WEBPACK_IMPORTED_MODULE_8__.withRouter)(TelemetryManager))
          , __TEST__TelemetryManager = TelemetryManager
          , _default = TelemetryProvider
          , __WEBPACK_DEFAULT_EXPORT__ = _default;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(telemetryClient, "telemetryClient", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/provider.tsx"),
            e.register(TelemetryManager, "TelemetryManager", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/provider.tsx"),
            e.register(appTrackingData, "appTrackingData", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/provider.tsx"),
            e.register(DATA_LAYER_TELEMETRY_NAME, "DATA_LAYER_TELEMETRY_NAME", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/provider.tsx"),
            e.register(TelemetryProvider, "TelemetryProvider", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/provider.tsx"),
            e.register(__TEST__TelemetryManager, "__TEST__TelemetryManager", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/provider.tsx"),
            e.register(_default, "default", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/telemetry/provider.tsx"))
        }(),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            e && e(module)
        }()
    }
    ,
    "76e801c56e29117c1f5c": (e,t,r)=>{
        "use strict";
        r.d(t, {
            g: ()=>s,
            w: ()=>i
        });
        var o = r("8af190b70a6bc55c6f1b");
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        const n = e=>{
            const t = (0,
            o.createContext)(null);
            return t.displayName = e,
            t
        }
          , s = n("offlineClient")
          , i = n("telemetryClient");
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(n, "createNamedContext", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/utils/context.tsx"),
            e.register(s, "OfflineClientContext", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/utils/context.tsx"),
            e.register(i, "TelemetryClientContext", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/utils/context.tsx"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "1ccf057766bc7fd4a574": (e,t,r)=>{
        "use strict";
        r.d(t, {
            y0: ()=>m,
            j: ()=>g,
            v8: ()=>E
        });
        var o = r("ceea40cb320efd487259")
          , n = r.n(o)
          , s = r("6f187f73a51c6304e7d6")
          , i = r.n(s)
          , a = r("8c32303422aadf36cbf3")
          , u = r.n(a)
          , d = r("8af190b70a6bc55c6f1b")
          , c = r("5ef9de3df8d92ea0e41c")
          , l = r.n(c)
          , f = r("750be1a664aacea1e4b5")
          , _ = r("96473cd9242fc2a39f3f")
          , h = r("76e801c56e29117c1f5c");
        function v(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, o)
            }
            return r
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(r), !0).forEach(function(t) {
                    i()(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        var b = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        const m = e=>void 0 !== e.error;
        function g(e, t) {
            return function(...r) {
                return (0,
                _.default)(e, t)(...r)
            }
        }
        const k = f.j
          , y = f.rS;
        function E(e) {
            const t = `withTelemetry(${e.displayName || e.name})`
              , r = t=>{
                const {wrappedComponentRef: r} = t
                  , o = u()(t, ["wrappedComponentRef"])
                  , s = y();
                return d.createElement(h.w.Consumer, null, t=>d.createElement(e, n()({}, o, {
                    tracking: p(p({}, s), t),
                    ref: r
                })))
            }
            ;
            return b(r, "useTracking{tracking}", ()=>[y]),
            r.displayName = t,
            r.WrappedComponent = e,
            l()(r, e)
        }
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(m, "isEventError", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/utils/react-tracking.tsx"),
            e.register(g, "track", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/utils/react-tracking.tsx"),
            e.register(k, "trackError", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/utils/react-tracking.tsx"),
            e.register(y, "useTracking", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/utils/react-tracking.tsx"),
            e.register(E, "withTracking", "/home/vsts/work/1/s/node_modules/@kano/kbc-telemetry/src/utils/react-tracking.tsx"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    d751f45f65ac1c624692: (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        for (var o = [], n = 0; n < 256; ++n)
            o[n] = (n + 256).toString(16).substr(1);
        function s(e, t) {
            var r = t || 0
              , n = o;
            return [n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]]].join("")
        }
        var i = s;
        t.default = i,
        e.exports = t.default,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "byteToHex", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/bytesToUuid.js"),
            e.register(n, "i", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/bytesToUuid.js"),
            e.register(s, "bytesToUuid", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/bytesToUuid.js"),
            e.register(i, "_default", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/bytesToUuid.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    fd2b14d16115f6fe0bc5: (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "v1", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }),
        Object.defineProperty(t, "v3", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(t, "v4", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }),
        Object.defineProperty(t, "v5", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        });
        var o = a(r("ddf163ae89a0d0edf339"))
          , n = a(r("ce92c2b40b4873fa0a50"))
          , s = a(r("999d920524dbda1fe19f"))
          , i = a(r("27a403248e6902ba6d25"));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "_v", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/index.js"),
            e.register(n, "_v2", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/index.js"),
            e.register(s, "_v3", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/index.js"),
            e.register(i, "_v4", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/index.js"),
            e.register(a, "_interopRequireDefault", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/index.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    b65afb49c43b33d69d05: (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function o(e) {
            if ("string" == typeof e) {
                var t = unescape(encodeURIComponent(e));
                e = new Array(t.length);
                for (var r = 0; r < t.length; r++)
                    e[r] = t.charCodeAt(r)
            }
            return n(s(i(e), 8 * e.length))
        }
        function n(e) {
            var t, r, o, n = [], s = 32 * e.length;
            for (t = 0; t < s; t += 8)
                r = e[t >> 5] >>> t % 32 & 255,
                o = parseInt("0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r), 16),
                n.push(o);
            return n
        }
        function s(e, t) {
            var r, o, n, s, i;
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            var u = 1732584193
              , d = -271733879
              , h = -1732584194
              , v = 271733878;
            for (r = 0; r < e.length; r += 16)
                o = u,
                n = d,
                s = h,
                i = v,
                u = c(u, d, h, v, e[r], 7, -680876936),
                v = c(v, u, d, h, e[r + 1], 12, -389564586),
                h = c(h, v, u, d, e[r + 2], 17, 606105819),
                d = c(d, h, v, u, e[r + 3], 22, -1044525330),
                u = c(u, d, h, v, e[r + 4], 7, -176418897),
                v = c(v, u, d, h, e[r + 5], 12, 1200080426),
                h = c(h, v, u, d, e[r + 6], 17, -1473231341),
                d = c(d, h, v, u, e[r + 7], 22, -45705983),
                u = c(u, d, h, v, e[r + 8], 7, 1770035416),
                v = c(v, u, d, h, e[r + 9], 12, -1958414417),
                h = c(h, v, u, d, e[r + 10], 17, -42063),
                d = c(d, h, v, u, e[r + 11], 22, -1990404162),
                u = c(u, d, h, v, e[r + 12], 7, 1804603682),
                v = c(v, u, d, h, e[r + 13], 12, -40341101),
                h = c(h, v, u, d, e[r + 14], 17, -1502002290),
                u = l(u, d = c(d, h, v, u, e[r + 15], 22, 1236535329), h, v, e[r + 1], 5, -165796510),
                v = l(v, u, d, h, e[r + 6], 9, -1069501632),
                h = l(h, v, u, d, e[r + 11], 14, 643717713),
                d = l(d, h, v, u, e[r], 20, -373897302),
                u = l(u, d, h, v, e[r + 5], 5, -701558691),
                v = l(v, u, d, h, e[r + 10], 9, 38016083),
                h = l(h, v, u, d, e[r + 15], 14, -660478335),
                d = l(d, h, v, u, e[r + 4], 20, -405537848),
                u = l(u, d, h, v, e[r + 9], 5, 568446438),
                v = l(v, u, d, h, e[r + 14], 9, -1019803690),
                h = l(h, v, u, d, e[r + 3], 14, -187363961),
                d = l(d, h, v, u, e[r + 8], 20, 1163531501),
                u = l(u, d, h, v, e[r + 13], 5, -1444681467),
                v = l(v, u, d, h, e[r + 2], 9, -51403784),
                h = l(h, v, u, d, e[r + 7], 14, 1735328473),
                u = f(u, d = l(d, h, v, u, e[r + 12], 20, -1926607734), h, v, e[r + 5], 4, -378558),
                v = f(v, u, d, h, e[r + 8], 11, -2022574463),
                h = f(h, v, u, d, e[r + 11], 16, 1839030562),
                d = f(d, h, v, u, e[r + 14], 23, -35309556),
                u = f(u, d, h, v, e[r + 1], 4, -1530992060),
                v = f(v, u, d, h, e[r + 4], 11, 1272893353),
                h = f(h, v, u, d, e[r + 7], 16, -155497632),
                d = f(d, h, v, u, e[r + 10], 23, -1094730640),
                u = f(u, d, h, v, e[r + 13], 4, 681279174),
                v = f(v, u, d, h, e[r], 11, -358537222),
                h = f(h, v, u, d, e[r + 3], 16, -722521979),
                d = f(d, h, v, u, e[r + 6], 23, 76029189),
                u = f(u, d, h, v, e[r + 9], 4, -640364487),
                v = f(v, u, d, h, e[r + 12], 11, -421815835),
                h = f(h, v, u, d, e[r + 15], 16, 530742520),
                u = _(u, d = f(d, h, v, u, e[r + 2], 23, -995338651), h, v, e[r], 6, -198630844),
                v = _(v, u, d, h, e[r + 7], 10, 1126891415),
                h = _(h, v, u, d, e[r + 14], 15, -1416354905),
                d = _(d, h, v, u, e[r + 5], 21, -57434055),
                u = _(u, d, h, v, e[r + 12], 6, 1700485571),
                v = _(v, u, d, h, e[r + 3], 10, -1894986606),
                h = _(h, v, u, d, e[r + 10], 15, -1051523),
                d = _(d, h, v, u, e[r + 1], 21, -2054922799),
                u = _(u, d, h, v, e[r + 8], 6, 1873313359),
                v = _(v, u, d, h, e[r + 15], 10, -30611744),
                h = _(h, v, u, d, e[r + 6], 15, -1560198380),
                d = _(d, h, v, u, e[r + 13], 21, 1309151649),
                u = _(u, d, h, v, e[r + 4], 6, -145523070),
                v = _(v, u, d, h, e[r + 11], 10, -1120210379),
                h = _(h, v, u, d, e[r + 2], 15, 718787259),
                d = _(d, h, v, u, e[r + 9], 21, -343485551),
                u = a(u, o),
                d = a(d, n),
                h = a(h, s),
                v = a(v, i);
            return [u, d, h, v]
        }
        function i(e) {
            var t, r = [];
            for (r[(e.length >> 2) - 1] = void 0,
            t = 0; t < r.length; t += 1)
                r[t] = 0;
            var o = 8 * e.length;
            for (t = 0; t < o; t += 8)
                r[t >> 5] |= (255 & e[t / 8]) << t % 32;
            return r
        }
        function a(e, t) {
            var r = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
        }
        function u(e, t) {
            return e << t | e >>> 32 - t
        }
        function d(e, t, r, o, n, s) {
            return a(u(a(a(t, e), a(o, s)), n), r)
        }
        function c(e, t, r, o, n, s, i) {
            return d(t & r | ~t & o, e, t, n, s, i)
        }
        function l(e, t, r, o, n, s, i) {
            return d(t & o | r & ~o, e, t, n, s, i)
        }
        function f(e, t, r, o, n, s, i) {
            return d(t ^ r ^ o, e, t, n, s, i)
        }
        function _(e, t, r, o, n, s, i) {
            return d(r ^ (t | ~o), e, t, n, s, i)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var h = o;
        t.default = h,
        e.exports = t.default,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "md5", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(n, "md5ToHexEncodedArray", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(s, "wordsToMd5", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(i, "bytesToWords", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(a, "safeAdd", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(u, "bitRotateLeft", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(d, "md5cmn", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(c, "md5ff", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(l, "md5gg", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(f, "md5hh", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(_, "md5ii", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"),
            e.register(h, "_default", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/md5-browser.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "0b23010ecd18e5c7ea38": (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = s;
        var o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)
          , n = new Uint8Array(16);
        function s() {
            if (!o)
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return o(n)
        }
        e.exports = t.default,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "getRandomValues", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/rng-browser.js"),
            e.register(n, "rnds8", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/rng-browser.js"),
            e.register(s, "rng", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/rng-browser.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    dfb13c455ac0925b1b71: (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function o(e, t, r, o) {
            switch (e) {
            case 0:
                return t & r ^ ~t & o;
            case 1:
                return t ^ r ^ o;
            case 2:
                return t & r ^ t & o ^ r & o;
            case 3:
                return t ^ r ^ o
            }
        }
        function n(e, t) {
            return e << t | e >>> 32 - t
        }
        function s(e) {
            var t = [1518500249, 1859775393, 2400959708, 3395469782]
              , r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof e) {
                var s = unescape(encodeURIComponent(e));
                e = new Array(s.length);
                for (var i = 0; i < s.length; i++)
                    e[i] = s.charCodeAt(i)
            }
            e.push(128);
            var a = e.length / 4 + 2
              , u = Math.ceil(a / 16)
              , d = new Array(u);
            for (i = 0; i < u; i++) {
                d[i] = new Array(16);
                for (var c = 0; c < 16; c++)
                    d[i][c] = e[64 * i + 4 * c] << 24 | e[64 * i + 4 * c + 1] << 16 | e[64 * i + 4 * c + 2] << 8 | e[64 * i + 4 * c + 3]
            }
            d[u - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32),
            d[u - 1][14] = Math.floor(d[u - 1][14]),
            d[u - 1][15] = 8 * (e.length - 1) & 4294967295;
            for (i = 0; i < u; i++) {
                for (var l = new Array(80), f = 0; f < 16; f++)
                    l[f] = d[i][f];
                for (f = 16; f < 80; f++)
                    l[f] = n(l[f - 3] ^ l[f - 8] ^ l[f - 14] ^ l[f - 16], 1);
                var _ = r[0]
                  , h = r[1]
                  , v = r[2]
                  , p = r[3]
                  , b = r[4];
                for (f = 0; f < 80; f++) {
                    var m = Math.floor(f / 20)
                      , g = n(_, 5) + o(m, h, v, p) + b + t[m] + l[f] >>> 0;
                    b = p,
                    p = v,
                    v = n(h, 30) >>> 0,
                    h = _,
                    _ = g
                }
                r[0] = r[0] + _ >>> 0,
                r[1] = r[1] + h >>> 0,
                r[2] = r[2] + v >>> 0,
                r[3] = r[3] + p >>> 0,
                r[4] = r[4] + b >>> 0
            }
            return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, 255 & r[0], r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, 255 & r[1], r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, 255 & r[2], r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, 255 & r[3], r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, 255 & r[4]]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = s;
        t.default = i,
        e.exports = t.default,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "f", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/sha1-browser.js"),
            e.register(n, "ROTL", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/sha1-browser.js"),
            e.register(s, "sha1", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/sha1-browser.js"),
            e.register(i, "_default", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/sha1-browser.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    ddf163ae89a0d0edf339: (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o, n, s = a(r("0b23010ecd18e5c7ea38")), i = a(r("d751f45f65ac1c624692"));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = 0
          , d = 0;
        function c(e, t, r) {
            var a = t && r || 0
              , c = t || []
              , l = (e = e || {}).node || o
              , f = void 0 !== e.clockseq ? e.clockseq : n;
            if (null == l || null == f) {
                var _ = e.random || (e.rng || s.default)();
                null == l && (l = o = [1 | _[0], _[1], _[2], _[3], _[4], _[5]]),
                null == f && (f = n = 16383 & (_[6] << 8 | _[7]))
            }
            var h = void 0 !== e.msecs ? e.msecs : (new Date).getTime()
              , v = void 0 !== e.nsecs ? e.nsecs : d + 1
              , p = h - u + (v - d) / 1e4;
            if (p < 0 && void 0 === e.clockseq && (f = f + 1 & 16383),
            (p < 0 || h > u) && void 0 === e.nsecs && (v = 0),
            v >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            u = h,
            d = v,
            n = f;
            var b = (1e4 * (268435455 & (h += 122192928e5)) + v) % 4294967296;
            c[a++] = b >>> 24 & 255,
            c[a++] = b >>> 16 & 255,
            c[a++] = b >>> 8 & 255,
            c[a++] = 255 & b;
            var m = h / 4294967296 * 1e4 & 268435455;
            c[a++] = m >>> 8 & 255,
            c[a++] = 255 & m,
            c[a++] = m >>> 24 & 15 | 16,
            c[a++] = m >>> 16 & 255,
            c[a++] = f >>> 8 | 128,
            c[a++] = 255 & f;
            for (var g = 0; g < 6; ++g)
                c[a + g] = l[g];
            return t || (0,
            i.default)(c)
        }
        var l = c;
        t.default = l,
        e.exports = t.default,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(s, "_rng", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v1.js"),
            e.register(i, "_bytesToUuid", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v1.js"),
            e.register(a, "_interopRequireDefault", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v1.js"),
            e.register(o, "_nodeId", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v1.js"),
            e.register(n, "_clockseq", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v1.js"),
            e.register(u, "_lastMSecs", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v1.js"),
            e.register(d, "_lastNSecs", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v1.js"),
            e.register(c, "v1", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v1.js"),
            e.register(l, "_default", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v1.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    ce92c2b40b4873fa0a50: (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(r("c2f1101584dce024d4c6"))
          , n = s(r("b65afb49c43b33d69d05"));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = (0,
        o.default)("v3", 48, n.default);
        var a = i;
        t.default = a,
        e.exports = t.default,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "_v", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v3.js"),
            e.register(n, "_md", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v3.js"),
            e.register(s, "_interopRequireDefault", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v3.js"),
            e.register(i, "v3", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v3.js"),
            e.register(a, "_default", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v3.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    c2f1101584dce024d4c6: (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = d,
        t.URL = t.DNS = void 0;
        var o = n(r("d751f45f65ac1c624692"));
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function s(e) {
            var t = [];
            return e.replace(/[a-fA-F0-9]{2}/g, function(e) {
                t.push(parseInt(e, 16))
            }),
            t
        }
        function i(e) {
            e = unescape(encodeURIComponent(e));
            for (var t = new Array(e.length), r = 0; r < e.length; r++)
                t[r] = e.charCodeAt(r);
            return t
        }
        const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        t.DNS = a;
        const u = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        function d(e, t, r) {
            var n = function(e, n, a, u) {
                var d = a && u || 0;
                if ("string" == typeof e && (e = i(e)),
                "string" == typeof n && (n = s(n)),
                !Array.isArray(e))
                    throw TypeError("value must be an array of bytes");
                if (!Array.isArray(n) || 16 !== n.length)
                    throw TypeError("namespace must be uuid string or an Array of 16 byte values");
                var c = r(n.concat(e));
                if (c[6] = 15 & c[6] | t,
                c[8] = 63 & c[8] | 128,
                a)
                    for (var l = 0; l < 16; ++l)
                        a[d + l] = c[l];
                return a || (0,
                o.default)(c)
            };
            try {
                n.name = e
            } catch (e) {}
            return n.DNS = a,
            n.URL = u,
            n
        }
        t.URL = u,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "_bytesToUuid", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v35.js"),
            e.register(n, "_interopRequireDefault", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v35.js"),
            e.register(s, "uuidToBytes", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v35.js"),
            e.register(i, "stringToBytes", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v35.js"),
            e.register(a, "DNS", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v35.js"),
            e.register(u, "URL", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v35.js"),
            e.register(d, "_default", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v35.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "999d920524dbda1fe19f": (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(r("0b23010ecd18e5c7ea38"))
          , n = s(r("d751f45f65ac1c624692"));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i(e, t, r) {
            var s = t && r || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null,
            e = null);
            var i = (e = e || {}).random || (e.rng || o.default)();
            if (i[6] = 15 & i[6] | 64,
            i[8] = 63 & i[8] | 128,
            t)
                for (var a = 0; a < 16; ++a)
                    t[s + a] = i[a];
            return t || (0,
            n.default)(i)
        }
        var a = i;
        t.default = a,
        e.exports = t.default,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "_rng", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v4.js"),
            e.register(n, "_bytesToUuid", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v4.js"),
            e.register(s, "_interopRequireDefault", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v4.js"),
            e.register(i, "v4", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v4.js"),
            e.register(a, "_default", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v4.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "27a403248e6902ba6d25": (e,t,r)=>{
        "use strict";
        e = r.nmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = s(r("c2f1101584dce024d4c6"))
          , n = s(r("dfb13c455ac0925b1b71"));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = (0,
        o.default)("v5", 80, n.default);
        var a = i;
        t.default = a,
        e.exports = t.default,
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "_v", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v5.js"),
            e.register(n, "_sha", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v5.js"),
            e.register(s, "_interopRequireDefault", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v5.js"),
            e.register(i, "v5", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v5.js"),
            e.register(a, "_default", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/node_modules/uuid/dist/v5.js"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "8390a660195ca787c81e": (e,t,r)=>{
        "use strict";
        r.d(t, {
            Ds: ()=>o.D,
            do: ()=>n.d,
            eR: ()=>s.eR,
            mM: ()=>s.mM,
            Hh: ()=>s.Hh,
            PM: ()=>s.PM,
            D9: ()=>i.D
        });
        r("3409c509881937a54c3e"),
        r("b516f799ad73f4acba1b");
        var o = r("0bb4d68b909b6fd96c63")
          , n = (r("57e049c4a01887cb7df1"),
        r("9a38b7a3df13ee9da38a"),
        r("5f3058187c365cf2ae9c"))
          , s = (r("24c3468e1121a922f01a"),
        r("f1b4809f4fa3c0611b78"),
        r("f490dda1e1d509b598a4"),
        r("c3d218e3b357d5490975"))
          , i = (r("fd982c4d772536042d90"),
        r("c30e015ff5e58ebe2ef1"));
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature
    }
    ,
    "3409c509881937a54c3e": (e,t,r)=>{
        "use strict";
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        const o = {
            "make-art": "Make Art",
            "kano-code": "Kano Code",
            "how-computers-work": "How Computers Work",
            "kano-create": "Kano Create",
            "pixel-motion": "Pixel Motion",
            guardian: "Guardian Site"
        }
          , n = e=>{
            switch (e) {
            case "guardian":
            case "kano-world":
            case "kano-world-studio":
                return "kano-world";
            case "make-art":
            case "kano-draw":
            case "make-art-studio":
                return "make-art";
            case "kano-code":
            case "make-apps":
            case "kano-code-studio":
                return "kano-code";
            case "how-computers-work":
                return "how-computers-work";
            case "pixel-motion":
            case "pixel-motion-studio":
                return "pixel-motion";
            case "kano-create":
            case "kano-create-studio":
                return "kano-create"
            }
            return null
        }
          , s = e=>"guardian" === n(e)
          , i = e=>"kano-world" === n(e)
          , a = e=>"kano-code" === n(e)
          , u = e=>"make-art" === n(e)
          , d = e=>"how-computers-work" === n(e)
          , c = e=>"pixel-motion" === n(e)
          , l = e=>"kano-create" === n(e);
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "APP_LABELS", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/apps.ts"),
            e.register(n, "sanitizeAppName", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/apps.ts"),
            e.register(s, "isGuardian", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/apps.ts"),
            e.register(i, "isKanoWorld", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/apps.ts"),
            e.register(a, "isKanoCode", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/apps.ts"),
            e.register(u, "isMakeArt", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/apps.ts"),
            e.register(d, "isHowComputersWork", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/apps.ts"),
            e.register(c, "isPixelMotion", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/apps.ts"),
            e.register(l, "isKanoCreate", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/apps.ts"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    b516f799ad73f4acba1b: (e,t,r)=>{
        "use strict";
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        const o = e=>{
            let t = e.length - 1;
            for (; t > 0; t--) {
                const r = Math.floor(Math.random() * t)
                  , o = e[t];
                e[t] = e[r],
                e[r] = o
            }
            return e
        }
        ;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(o, "shuffleArray", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/arrays.ts")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    a4655733f713b286a10c: (e,t,r)=>{
        "use strict";
        r.d(t, {
            a: ()=>c
        });
        var o = r("de098c4daf91477f9cbc")
          , n = r("5f3058187c365cf2ae9c")
          , s = r("f1b4809f4fa3c0611b78");
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        var a = "sessionAccessId-";
        function u(e) {
            var t = void 0;
            return e && e.id && ~e.id.indexOf(a) && (t = e.id),
            t
        }
        function d() {
            return a + (0,
            n.V)()
        }
        const c = (e,t)=>{
            t = t || document.body;
            var r = void 0
              , n = {}
              , a = []
              , c = !1
              , l = !0
              , f = void 0
              , _ = new s.C
              , h = document.createElement("iframe");
            function v() {
                t.appendChild(h),
                r = h.contentWindow,
                l = !1,
                window.addEventListener("message", p),
                g()
            }
            function p(e) {
                var t = e.data
                  , r = u(t);
                if ("sessionAccessId-connected" !== r) {
                    if (t.connectError)
                        return Object.keys(n).forEach(function(e) {
                            return n[e](t.error)
                        }),
                        void (n = {});
                    var o = n[r];
                    r && o && o(t.error, t.data)
                } else
                    c = !0
            }
            function b(e, t, r, o) {
                return m.apply(this, arguments)
            }
            function m() {
                return (m = (0,
                o.Z)(function*(t, o, s, i) {
                    l && v(),
                    c || "connect" === t || a.push([t, o, s, i]);
                    var u = d();
                    n && "function" === typeof i && (n[u] = i),
                    (yield _.promise) && r.postMessage({
                        method: t,
                        key: o,
                        value: s,
                        id: u
                    }, e)
                })).apply(this, arguments)
            }
            function g() {
                if (c)
                    for (clearTimeout(f); a.length; )
                        b.apply(void 0, i(a.pop()));
                else
                    b("connect"),
                    f = setTimeout(g, 125)
            }
            return h.src = e,
            h.width = "0",
            h.height = "0",
            h.style.display = "none",
            h.onload = function() {
                _.resolve(!0)
            }
            ,
            v(),
            {
                get: function(e, t) {
                    if (!t)
                        throw new Error("callback required for get");
                    b("get", e, null, t)
                },
                set: function(e, t, r) {
                    b("set", e, t, r)
                },
                remove: function(e, t) {
                    b("remove", e, null, t)
                },
                close: function() {
                    clearTimeout(f),
                    window.removeEventListener("message", p),
                    h.parentNode.removeChild(h),
                    c = !1,
                    l = !0
                }
            }
        }
        ;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(i, "_toConsumableArray", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/cross-domain-storage-guest.ts"),
            e.register(a, "prefix", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/cross-domain-storage-guest.ts"),
            e.register(u, "getId", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/cross-domain-storage-guest.ts"),
            e.register(d, "createId", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/cross-domain-storage-guest.ts"),
            e.register(c, "storageGuest", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/cross-domain-storage-guest.ts"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "0bb4d68b909b6fd96c63": (e,t,r)=>{
        "use strict";
        r.d(t, {
            D: ()=>o
        }),
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function o(e, t, r) {
            var o;
            return function() {
                var n = this
                  , s = arguments
                  , i = r && !o;
                clearTimeout(o),
                o = setTimeout(function() {
                    o = null,
                    r || e.apply(n, s)
                }, t),
                i && e.apply(n, s)
            }
        }
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(o, "debounce", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/debounce.ts")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "57e049c4a01887cb7df1": (e,t,r)=>{
        "use strict";
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        function o(e) {
            const t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
              , r = decodeURIComponent(atob(t).split("").map(function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
            }).join(""));
            return JSON.parse(r)
        }
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(o, "decodeJWT", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/decode-jwt.ts")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "9a38b7a3df13ee9da38a": (e,t,r)=>{
        "use strict";
        var o = r("de098c4daf91477f9cbc");
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        const n = (e,t)=>{
            window.File && window.FileReader && window.FileList && window.Blob ? e() : t()
        }
          , s = function() {
            var e = (0,
            o.Z)(function*(e, t) {
                if (window.Windows) {
                    const r = new window.KanoComputing.KpcUwpCore.WinRT.Storage.FilePicker
                      , o = yield r.openAsync(e);
                    t && o && t(JSON.parse(o))
                } else {
                    const r = document.createElement("input");
                    r.setAttribute("type", "file"),
                    r.setAttribute("accept", e),
                    r.style.display = "none",
                    r.addEventListener("change", e=>{
                        const o = e.target.files[0];
                        if (o) {
                            const e = new FileReader;
                            e.onload = (e=>{
                                const r = JSON.parse(e.target.result);
                                t(r)
                            }
                            ),
                            e.readAsText(o),
                            document.body.removeChild(r)
                        }
                    }
                    ),
                    document.body.appendChild(r),
                    r.click()
                }
            });
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }()
          , i = function() {
            var e = (0,
            o.Z)(function*(e, t, r) {
                if (window.Windows) {
                    const r = new window.KanoComputing.KpcUwpCore.WinRT.Storage.FilePicker;
                    yield r.saveAsync(JSON.stringify(e), t)
                } else {
                    const r = new Blob([JSON.stringify(e)],{
                        type: "text/plain;charset=utf-8"
                    });
                    if (window.navigator && window.navigator.msSaveBlob)
                        window.navigator.msSaveBlob(r, t);
                    else {
                        const e = URL.createObjectURL(r)
                          , o = document.createElement("a");
                        o.style.display = "none",
                        o.href = e,
                        o.download = t,
                        o.click(),
                        URL.revokeObjectURL(e)
                    }
                }
                r && r()
            });
            return function(t, r, o) {
                return e.apply(this, arguments)
            }
        }();
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(n, "CheckBrowserCompatibility", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/files.tsx"),
            e.register(s, "ImportFile", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/files.tsx"),
            e.register(i, "ExportFile", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/files.tsx"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "5f3058187c365cf2ae9c": (e,t,r)=>{
        "use strict";
        r.d(t, {
            V: ()=>o.v4,
            d: ()=>n
        });
        var o = r("fd2b14d16115f6fe0bc5");
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        const n = ()=>(0,
        o.v4)().replace(/-/g, "");
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(n, "idGen", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/ids.tsx")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    "24c3468e1121a922f01a": (e,t,r)=>{
        "use strict";
        var o = r("de098c4daf91477f9cbc");
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        const n = function() {
            var e = (0,
            o.Z)(function*(e) {
                return fetch(e).then(e=>e.arrayBuffer()).then(e=>new Blob([new Uint8Array(e)],{
                    type: "image/png"
                })).catch(e=>{
                    throw e
                }
                )
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , s = function() {
            var e = (0,
            o.Z)(function*(e) {
                return new Promise(t=>{
                    const r = new FileReader;
                    r.onload = (e=>t(e.target.result)),
                    r.readAsDataURL(e)
                }
                )
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(n, "GetBlobFromImage", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/images.tsx"),
            e.register(s, "BlobToDataURL", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/images.tsx"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    f1b4809f4fa3c0611b78: (module,__webpack_exports__,__webpack_require__)=>{
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            C: ()=>DeferredPromise
        }),
        module = __webpack_require__.hmd(module),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            e && e(module)
        }();
        var __signature__ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        class DeferredPromise {
            constructor() {
                this.promise = void 0,
                this.reject = void 0,
                this.resolve = void 0,
                this.promise = new Promise((e,t)=>{
                    this.reject = t,
                    this.resolve = e
                }
                )
            }
            __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code)
            }
        }
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(DeferredPromise, "DeferredPromise", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/promises.ts")
        }(),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            e && e(module)
        }()
    }
    ,
    f490dda1e1d509b598a4: (e,t,r)=>{
        "use strict";
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        const o = (e,t)=>{
            const r = (t ? t.substring(1) : window.location.search.substring(1)).split("&");
            for (var o = 0; o < r.length; o++) {
                const t = r[o].split("=");
                if (decodeURIComponent(t[0]) == e)
                    return decodeURIComponent(t[1])
            }
            return null
        }
        ;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(o, "getQueryVariable", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/regex.ts")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    c3d218e3b357d5490975: (module,__webpack_exports__,__webpack_require__)=>{
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            mM: ()=>LocalStorage,
            Hh: ()=>getCookieStorage,
            eR: ()=>CookieStorage,
            PM: ()=>getCrossDomainStorage
        });
        var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("de098c4daf91477f9cbc")
          , _cross_domain_storage_guest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a4655733f713b286a10c");
        module = __webpack_require__.hmd(module),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            e && e(module)
        }();
        var __signature__ = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        const CROSSDOMAIN_HOST_PER_ENVIRONMENT = {
            production: "https://kano-cross-domain-storage.netlify.app"
        };
        class Storage {
            constructor() {
                var e = this;
                this.env = void 0,
                this.setKey = ((e,t)=>`${this.env}_${t ? `${t}_` : ""}${e}`),
                this.read = ((e,t)=>{
                    const r = this.setKey(e, t);
                    return localStorage.getItem(r)
                }
                ),
                this.write = ((e,t,r)=>{
                    const o = this.setKey(e, r);
                    localStorage.setItem(o, t)
                }
                ),
                this.remove = function() {
                    var t = (0,
                    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(t, r) {
                        const o = e.setKey(t, r);
                        return localStorage.removeItem(o)
                    });
                    return function(e, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                this.env = "staging"
            }
            __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code)
            }
        }
        const _default = Storage;
        var __WEBPACK_DEFAULT_EXPORT__ = _default;
        const read = e=>localStorage.getItem(e)
          , write = (e,t)=>{
            localStorage.setItem(e, t)
        }
          , remove = function() {
            var e = (0,
            _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.Z)(function*(e) {
                return localStorage.removeItem(e)
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , LocalStorage = {
            read: read,
            write: write,
            remove: remove
        };
        function encode(e) {
            return encodeURIComponent(e)
        }
        function decode(e) {
            return decodeURIComponent(e)
        }
        function isArray(e) {
            return e instanceof Array
        }
        const getCookieStorage = ()=>{
            return {
                read: function(e) {
                    const t = !!e.name && `staging_${e.name}`;
                    if (!t)
                        return;
                    const r = document.cookie.split(t + "=");
                    return 2 === r.length ? decode(r.pop().split(";").shift()) : void 0
                },
                create: function(e) {
                    const t = !!e.name && `staging_${e.name}`;
                    if (e.value = e.value || "",
                    e.expires = e.expires || !1,
                    e.path = e.path || "/",
                    e.domain = e.domain || "kano.me",
                    "string" === typeof t) {
                        const r = encode(t) + "=" + encode(e.value) + ";"
                          , o = "path=" + e.path + ";"
                          , n = e.domain ? "domain=" + e.domain + ";" : ""
                          , s = e.secure ? "secure;" : ""
                          , i = e.httpOnly ? "httpOnly;" : "";
                        let a = "";
                        if ("number" === typeof e.expires) {
                            a = "expires=" + new Date((new Date).getTime() + 1e3 * parseInt(e.expires.toString(), 10) * 60 * 60 * 24).toUTCString() + ";"
                        } else
                            e.expires instanceof Date && (a = "expires=" + e.expires.toUTCString() + ";");
                        return document.cookie = r + a + o + n + s + i,
                        !0
                    }
                    return !1
                },
                keys: function() {
                    const e = []
                      , t = document.cookie ? document.cookie.split("; ") : [];
                    let r = t.length;
                    if (!t)
                        return t;
                    for (; r--; ) {
                        let o = t[r].split("=");
                        e.push(decode(o[0]))
                    }
                    return e
                },
                values: function() {
                    const e = []
                      , t = document.cookie ? document.cookie.split("; ") : [];
                    let r = t.length;
                    if (!t)
                        return t;
                    for (; r--; ) {
                        let o = t[r].split("=");
                        e.push(decode(o[1]))
                    }
                    return e
                },
                exists: function(e) {
                    if (e && e.name)
                        return !!this.read(e)
                },
                listAsString: function() {
                    let e, t = "", r = document.cookie ? document.cookie.split("; ") : [], o = r.length;
                    if (!r)
                        return t;
                    for (; o--; )
                        t += [o] + " " + decode((e = r[o].split("="))[0]) + "=" + decode(e[1]) + "\n";
                    return t.trim()
                },
                listAsObject: function() {
                    let e, t = {}, r = document.cookie ? document.cookie.split("; ") : [], o = r.length;
                    if (!r)
                        return t;
                    for (; o--; )
                        t[decode((e = r[o].split("="))[0])] = decode(e[1]);
                    return t
                },
                listAsArray: function() {
                    let e, t = [], r = document.cookie ? document.cookie.split("; ") : [], o = r.length;
                    if (!r)
                        return t;
                    for (; o--; )
                        e = r[o].split("="),
                        t.push({
                            name: decode(e[0]),
                            value: decode(e[1])
                        });
                    return t
                },
                listAs2dArray: function() {
                    let e, t = [], r = document.cookie ? document.cookie.split("; ") : [], o = r.length;
                    if (!r)
                        return t;
                    for (; o--; )
                        e = r[o].split("="),
                        t.push([decode(e[0]), decode(e[1])]);
                    return t
                },
                remove: function(e) {
                    if (e)
                        return !!this.read(e) && this.create({
                            name: e.name,
                            value: "",
                            expires: -1,
                            path: e.path,
                            domain: e.domain
                        })
                },
                clear: function(e) {
                    function t(e) {
                        for (let t = 0; t < e.length; t++)
                            this.remove({
                                name: e[t]
                            })
                    }
                    if (e)
                        if (isArray(e.name)) {
                            let r = e.name;
                            t.call(this, r)
                        } else
                            this.remove(e);
                    else {
                        let e = this.keys();
                        t.call(this, e)
                    }
                },
                enabled: function() {
                    if (navigator.cookieEnabled) {
                        this.create({
                            name: "test",
                            value: "$0bee9a46d9d9f14cwjafa&45f&dg88"
                        });
                        let e = "$0bee9a46d9d9f14cwjafa&45f&dg88" === this.read({
                            name: "test"
                        });
                        return this.remove({
                            name: "test"
                        }),
                        e
                    }
                    return !1
                },
                get length() {
                    return document.cookie.split("; ").length
                }
            }
        }
          , CookieStorage = getCookieStorage()
          , getCrossDomainStorage = ()=>{
            const e = CROSSDOMAIN_HOST_PER_ENVIRONMENT.staging || "https://staging-kano-cross-domain-storage.netlify.app";
            let t = (0,
            _cross_domain_storage_guest__WEBPACK_IMPORTED_MODULE_0__.a)(e)
              , r = !1;
            return {
                read: e=>new Promise((o,n)=>{
                    r && n(r),
                    t.get(e, (e,t)=>e ? (console.log("cross-domain-storage: " + e),
                    r = !0,
                    n(e)) : o(t))
                }
                ),
                write: (e,o)=>new Promise((n,s)=>{
                    r && s(r),
                    t.set(e, o, (e,t)=>e ? (console.log("cross-domain-storage: " + e),
                    r = !0,
                    s(e)) : n(t || o))
                }
                ),
                remove: e=>new Promise((o,n)=>{
                    r && n(r),
                    t.remove(e, (t,s)=>t ? (console.log("cross-domain-storage: " + t),
                    r = !0,
                    n(t)) : o(s || e))
                }
                )
            }
        }
          , CrossDomainStorage = getCrossDomainStorage();
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(CROSSDOMAIN_HOST_PER_ENVIRONMENT, "CROSSDOMAIN_HOST_PER_ENVIRONMENT", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(Storage, "Storage", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(read, "read", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(write, "write", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(remove, "remove", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(LocalStorage, "LocalStorage", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(encode, "encode", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(decode, "decode", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(isArray, "isArray", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(getCookieStorage, "getCookieStorage", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(CookieStorage, "CookieStorage", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(getCrossDomainStorage, "getCrossDomainStorage", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(CrossDomainStorage, "CrossDomainStorage", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"),
            e.register(_default, "default", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/storage.tsx"))
        }(),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            e && e(module)
        }()
    }
    ,
    fd982c4d772536042d90: (e,t,r)=>{
        "use strict";
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        "undefined" !== typeof reactHotLoaderGlobal && reactHotLoaderGlobal.default.signature;
        const o = {
            minute: "less than a minute",
            minutes: "%d minutes",
            hour: "less than an hour",
            hours: "%d hours",
            day: "1 day",
            days: "%d days",
            month: "1 month",
            months: "%d months",
            year: "1 year",
            years: "%d years"
        }
          , n = (e,t,r=o)=>{
            return r[e > 1 ? `${t}s` : t].replace(/%d/, `${e}`)
        }
          , s = (e,t=o)=>{
            const r = /Z$/.test(e) ? e : `${e}Z`
              , s = new Date(Date.parse(r))
              , i = new Date
              , a = Math.abs(Math.floor((i - s) / 1e3));
            let u = Math.floor(a / 31536e3);
            return u >= 1 ? n(u, "year", t) : (u = Math.floor(a / 2592e3)) >= 1 ? n(u, "month", t) : (u = Math.floor(a / 86400)) >= 1 ? n(u, "day", t) : (u = Math.floor(a / 3600)) >= 1 ? n(u, "hour", t) : (u = Math.floor(a / 60),
            n(u, "minute", t))
        }
        ;
        !function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && (e.register(o, "defaultLocales", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/timeago.ts"),
            e.register(n, "timeAgo", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/timeago.ts"),
            e.register(s, "timeSince", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/timeago.ts"))
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
    ,
    c30e015ff5e58ebe2ef1: (e,t,r)=>{
        "use strict";
        r.d(t, {
            D: ()=>s
        });
        var o = r("8af190b70a6bc55c6f1b");
        e = r.hmd(e),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.enterModule : void 0;
            t && t(e)
        }();
        var n = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default.signature : function(e) {
            return e
        }
        ;
        const s = e=>{
            const t = (0,
            o.useRef)();
            return (0,
            o.useEffect)(()=>{
                t.current = e
            }
            ),
            t.current
        }
        ;
        n(s, "useRef{ref}\nuseEffect{}"),
        function() {
            var e = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.default : void 0;
            e && e.register(s, "usePrevious", "/home/vsts/work/1/s/node_modules/@kano/kbc-utils/src/utils/use-previous.tsx")
        }(),
        function() {
            var t = "undefined" !== typeof reactHotLoaderGlobal ? reactHotLoaderGlobal.leaveModule : void 0;
            t && t(e)
        }()
    }
}]);
