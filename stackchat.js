!function(e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        });
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "https://assets.au.stackchat.com/sdk/web-messenger/2.1.23/", n(n.s = 382);
}({
    14: function(e, t) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    168: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.SCREEN_SIZES = {
            lg: {
                minHeight: 668,
                minWidth: 1200
            },
            md: [ {
                minHeight: 508,
                minWidth: 768,
                maxWidth: 1199
            }, {
                minHeight: 508,
                maxHeight: 667,
                minWidth: 768
            } ],
            sm: {
                maxHeight: 507,
                minWidth: 768
            },
            xs: {
                maxWidth: 767
            }
        };
    },
    169: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.IFRAME_ID = "web-messenger-container";
    },
    239: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.waitForPage = function(e) {
            "complete" !== document.readyState && "loaded" !== document.readyState && "interactive" !== document.readyState || !document.body ? document.addEventListener("DOMContentLoaded", function() {
                e();
            }) : e();
        }, t.generateMediaQuery = function(e) {
            var t = [ "screen" ];
            e.minHeight && t.push("(min-height: " + e.minHeight + "px)");
            e.maxHeight && t.push("(max-height: " + e.maxHeight + "px)");
            e.minWidth && t.push("(min-width: " + e.minWidth + "px)");
            e.maxWidth && t.push("(max-width: " + e.maxWidth + "px)");
            return t.join(" and ");
        };
    },
    240: function(e, t) {
        e.exports = {
            isFunction: function(e) {
                return "function" == typeof e;
            },
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e);
            },
            each: function(e, t) {
                for (var n = 0, o = e.length; n < o && !1 !== t(e[n], n); n++) ;
            }
        };
    },
    382: function(e, t, n) {
        "use strict";
        (function(t) {
            var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
            }, i = n(239), r = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t;
            }(n(383)), s = n(169), a = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }(n(388));
            function c(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
                return Array.from(e);
            }
            var u = {};
            e.exports = u;
            var d = void 0, l = void 0, h = void 0, f = void 0, m = [], p = [], g = void 0, v = /lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent), y = /PhantomJS/.test(navigator.userAgent) && !0, w = [ "init", "login", "on", "off", "logout", "sendMessage", "triggerPostback", "updateUser", "getConversation", "getUser", "open", "close", "isOpened", "startConversation", "setDelegate", "markAllAsRead", "notificationChannelPromptEnabled", "setPredefinedMessage", "openSpeechRecognitionModal", "closeSpeechRecognitionModal", "simulateMessage", "updateLocale", "showActivityIndicator", "hideActivityIndicator", "updateAnalyticsId", "isRecording", "addMessages", "setConversation", "getPersonas" ], b = {
                VERSION: "2.1.23",
                on: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    p || (p = []), p.push({
                        args: t
                    });
                },
                init: function() {
                    for (var e = "world", t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    g = n, h = n.length > 0 && !!n[0].embedded, "cn" === n[0].region && (e = "cn"),
                    v || y || (0, i.waitForPage)(function() {
                        !function(e) {
                            var t = document.createElement("link");
                            t.rel = "stylesheet", t.type = "text/css", t.href = "cn" === e ? "https://assets.common.stackchat.com.cn/sdk/web-messenger/2.1.23/stackchat.2.1.23.css" : "https://assets.au.stackchat.com/sdk/web-messenger/2.1.23/stackchat.2.1.23.css",
                                document.body.appendChild(t);
                        }(e), function(e) {
                            if (!l) {
                                var t = null, n = !1;
                                (l = document.createElement("iframe")).id = s.IFRAME_ID, l.frameBorder = 0, l.allowFullscreen = !0,
                                    l.allowTransparency = !0, l.scrolling = "no", l.className = a.default.iframe;
                                var o = "cn" === e ? "https://assets.common.stackchat.com.cn/sdk/web-messenger/2.1.23/frame.2.1.23.css" : "https://assets.au.stackchat.com/sdk/web-messenger/2.1.23/frame.2.1.23.css", i = "cn" === e ? "https://assets.common.stackchat.com.cn/sdk/web-messenger/2.1.23/frame.2.1.23.min.js" : "https://assets.au.stackchat.com/sdk/web-messenger/2.1.23/frame.2.1.23.min.js", r = function() {
                                    n = !0, clearInterval(t), delete l.onload;
                                    var e = x(l);
                                    e.open(), e.write('\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                            \n                            <link rel="stylesheet" href="' + o + '" type="text/css" />\n                            <script src="' + i + '" async crossorigin="anonymous"></script>\n                        </head>\n                        <body>\n                            <div id="mount"></div>\n                        </body>\n                    </html>\n                    '),
                                        e.close();
                                };
                                t = setInterval(function() {
                                    var e = x(l);
                                    n || !e || "complete" != e.readyState && "interactive" != e.readyState || r();
                                }, 1e3), l.onload = function() {
                                    n || r();
                                };
                            }
                            htmlbody = "<div class=\"outer-layout\">\n" +
                                "    <div class=\"banner-block\">Banner</div>\n" +
                                "    <div class=\"wrapper-element\">\n" +
                                "        <div class=\"left-block\" id=\"content-block\"></div>\n" +
                                "        <div class=\"right-block\" id=\"chat-block\">\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "</div>";
                            h ? f && (f.appendChild(htmlbody), f = void 0) : document.body.appendChild(htmlbody);
                        }(e);
                    });
                    var r = {
                        then: function(e) {
                            return m.push({
                                type: "then",
                                next: e
                            }), r;
                        },
                        "catch": function(e) {
                            return m.push({
                                type: "catch",
                                next: e
                            }), r;
                        }
                    };
                    return r;
                },
                render: function(e) {
                    l ? e.appendChild(l) : f = e;
                },
                destroy: function() {
                    d && (l.remove ? l.remove() : l.parentNode.removeChild(l), r.unregister(), M());
                }
            };
            function _(e) {
                window.__onWebMessengerFrameReady__ = function() {}, d = e, h || r.init(l);
                for (var t = w[0], n = 0; n < w.length; t = w[++n]) u[t] = d[t];
                if (p) {
                    for (var o = p[0], i = 0; i < p.length; o = p[++i]) {
                        var s;
                        (s = d).on.apply(s, c(o.args));
                    }
                    p = void 0;
                }
                if (g) {
                    var a, f = (a = d).init.apply(a, c(g));
                    g = void 0;
                    for (var v = m[0], y = 0; y < m.length; v = m[++y]) f = "then" === v.type ? f.then(v.next) : f.catch(v.next);
                    m = [];
                }
            }
            var x = function(e) {
                return e.contentWindow && e.contentWindow.document;
            };
            function M() {
                if (!document.getElementById(s.IFRAME_ID)) {
                    d = void 0, l = void 0, window.__onWebMessengerFrameReady__ = _;
                    for (var e = w[0], t = 0; t < w.length; e = w[++t]) u[e] && delete u[e];
                    o(u, b);
                }
            }
            document.getElementById(s.IFRAME_ID) || (M(), window.__onWebMessengerHostReady__ ? window.__onWebMessengerHostReady__(u) : t.Stackchat = u);
        }).call(t, n(14));
    },
    383: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = function(e) {
            a(function(t) {
                var n = t.rule, i = t.size;
                o.default.register((0, r.generateMediaQuery)(n), function() {
                    e.contentWindow.postMessage({
                        type: "sizeChange",
                        value: i
                    }, location.protocol + "//" + location.host);
                });
            });
        }, t.unregister = function() {
            a(function(e) {
                var t = e.rule;
                o.default.unregister((0, r.generateMediaQuery)(t));
            });
        };
        var o = function(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }(n(384)), i = n(168), r = n(239);
        var s = [ "lg", "md", "sm", "xs" ];
        function a(e) {
            for (var t = 0; t < s.length; t++) {
                var n = s[t], o = i.SCREEN_SIZES[n];
                "[object Array]" !== Object.prototype.toString.call(o) && (o = [ o ]);
                for (var r = 0; r < o.length; r++) {
                    e({
                        rule: o[r],
                        size: n
                    });
                }
            }
        }
    },
    384: function(e, t, n) {
        var o = n(385);
        e.exports = new o();
    },
    385: function(e, t, n) {
        var o = n(386), i = n(240), r = i.each, s = i.isFunction, a = i.isArray;
        function c() {
            if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
            this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches;
        }
        c.prototype = {
            constructor: c,
            register: function(e, t, n) {
                var i = this.queries, c = n && this.browserIsIncapable;
                return i[e] || (i[e] = new o(e, c)), s(t) && (t = {
                    match: t
                }), a(t) || (t = [ t ]), r(t, function(t) {
                    s(t) && (t = {
                        match: t
                    }), i[e].addHandler(t);
                }), this;
            },
            unregister: function(e, t) {
                var n = this.queries[e];
                return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this;
            }
        }, e.exports = c;
    },
    386: function(e, t, n) {
        var o = n(387), i = n(240).each;
        function r(e, t) {
            this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
            var n = this;
            this.listener = function(e) {
                n.mql = e.currentTarget || e, n.assess();
            }, this.mql.addListener(this.listener);
        }
        r.prototype = {
            constuctor: r,
            addHandler: function(e) {
                var t = new o(e);
                this.handlers.push(t), this.matches() && t.on();
            },
            removeHandler: function(e) {
                var t = this.handlers;
                i(t, function(n, o) {
                    if (n.equals(e)) return n.destroy(), !t.splice(o, 1);
                });
            },
            matches: function() {
                return this.mql.matches || this.isUnconditional;
            },
            clear: function() {
                i(this.handlers, function(e) {
                    e.destroy();
                }), this.mql.removeListener(this.listener), this.handlers.length = 0;
            },
            assess: function() {
                var e = this.matches() ? "on" : "off";
                i(this.handlers, function(t) {
                    t[e]();
                });
            }
        }, e.exports = r;
    },
    387: function(e, t) {
        function n(e) {
            this.options = e, !e.deferSetup && this.setup();
        }
        n.prototype = {
            constructor: n,
            setup: function() {
                this.options.setup && this.options.setup(), this.initialised = !0;
            },
            on: function() {
                !this.initialised && this.setup(), this.options.match && this.options.match();
            },
            off: function() {
                this.options.unmatch && this.options.unmatch();
            },
            destroy: function() {
                this.options.destroy ? this.options.destroy() : this.off();
            },
            equals: function(e) {
                return this.options === e || this.options.match === e;
            }
        }, e.exports = n;
    },
    388: function(e, t) {
        e.exports = {
            iframe: "_2ChX4GFAl1-UBiWknYZyEQ",
            displayButton: "avcHn2VQJenBvoR5hilPG",
            widgetClosed: "_3fQbteJd3oQu4il3LpMKkX",
            "iframe-button-close-lg": "_3FxKeTOOgcsFroUq6se9N7",
            "iframe-button-close-md": "_1GmqPtlICLsWVMg2Kpdx_0",
            "iframe-button-close-sm": "_36mHeCXpAKdhEsuuD5g8oV",
            "iframe-button-close-xs": "_1ZWQW0p6AI6UGwBFbdBf9M",
            displayTab: "_3dtqBiGeC8k3yop4A-9Lwm",
            widgetOpened: "_2TELtk5nDKlQudVSivRjpt",
            widgetEmbedded: "_24n-ftZlG3wDvoWFR8zUnn"
        };
    }
});
