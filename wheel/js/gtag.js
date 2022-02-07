// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{ "function": "__e" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "IS_OUTBOUND", "vtp_affiliatedDomains": ["list"] }, { "function": "__v", "vtp_name": "gtm.triggers", "vtp_dataLayerVersion": 2, "vtp_setDefaultValue": true, "vtp_defaultValue": "" }, { "function": "__v", "vtp_name": "gtm.elementId", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.elementClasses", "vtp_dataLayerVersion": 1 }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "URL_NO_FRAGMENT" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "HOST", "vtp_stripWww": true }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "EXTENSION" }, { "function": "__aev", "vtp_varType": "TEXT" }, { "function": "__aev", "vtp_varType": "URL", "vtp_component": "PATH" }, { "function": "__v", "vtp_name": "gtm.videoStatus", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoUrl", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoTitle", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoProvider", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoCurrentTime", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoDuration", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoPercent", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.videoVisible", "vtp_dataLayerVersion": 1 }, { "function": "__u", "vtp_component": "QUERY", "vtp_queryKey": "q,s,search,query,keyword", "vtp_multiQueryKeys": true, "vtp_ignoreEmptyQueryParam": true, "vtp_enableMultiQueryKeys": false, "vtp_enableIgnoreEmptyQueryParam": false }, { "function": "__v", "vtp_name": "gtm.scrollThreshold", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.historyChangeSource", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.oldUrl", "vtp_dataLayerVersion": 1 }, { "function": "__v", "vtp_name": "gtm.newUrl", "vtp_dataLayerVersion": 1 }, { "function": "__c", "vtp_value": "" }, { "function": "__c", "vtp_value": 0 }, { "vtp_signal": 0, "function": "__c", "vtp_value": 0 }],
            "tags": [{ "function": "__gct", "vtp_trackingId": "G-XV614N2RLR", "vtp_sessionDuration": 0, "tag_id": 1 }, { "function": "__get", "vtp_eventName": "click", "vtp_settings": ["map", "streamId", "G-XV614N2RLR", "eventParameters", ["map", "link_id", ["macro", 3], "link_classes", ["macro", 4], "link_url", ["macro", 5], "link_domain", ["macro", 6], "outbound", true]], "vtp_deferrable": false, "tag_id": 11 }, { "function": "__get", "vtp_eventName": "file_download", "vtp_settings": ["map", "streamId", "G-XV614N2RLR", "eventParameters", ["map", "link_id", ["macro", 3], "link_text", ["macro", 8], "link_url", ["macro", 5], "file_name", ["macro", 9], "file_extension", ["macro", 7]]], "vtp_deferrable": false, "tag_id": 18 }, { "function": "__get", "vtp_eventName": ["template", "video_", ["macro", 10]], "vtp_settings": ["map", "streamId", "G-XV614N2RLR", "eventParameters", ["map", "video_url", ["macro", 11], "video_title", ["macro", 12], "video_provider", ["macro", 13], "video_current_time", ["macro", 14], "video_duration", ["macro", 15], "video_percent", ["macro", 16], "visible", ["macro", 17]]], "vtp_deferrable": false, "tag_id": 21 }, { "function": "__get", "vtp_eventName": "view_search_results", "vtp_settings": ["map", "streamId", "G-XV614N2RLR", "eventParameters", ["map", "search_term", ["macro", 18]]], "vtp_deferrable": true, "tag_id": 26 }, { "function": "__get", "vtp_eventName": "scroll", "vtp_settings": ["map", "streamId", "G-XV614N2RLR", "eventParameters", ["map", "percent_scrolled", ["macro", 19]]], "vtp_deferrable": false, "tag_id": 29 }, { "function": "__get", "vtp_eventName": "page_view", "vtp_settings": ["map", "streamId", "G-XV614N2RLR", "eventParameters", ["map", "page_referrer", ["macro", 21]]], "vtp_deferrable": false, "tag_id": 32 }, { "function": "__dlm", "vtp_userInput": ["list", ["map", "key", "gtm.gtagReferrer.G-XV614N2RLR", "value", ["macro", 21]]], "tag_id": 33 }, { "function": "__set_product_settings", "original_activity_id": 3001, "vtp_foreignTldMacroResult": ["macro", 23], "vtp_isChinaVipRegionMacroResult": ["macro", 24], "tag_id": 36 }, { "function": "__ogt_event_settings", "original_activity_id": 3002, "vtp_eventSettings": ["list", ["map", "name", "purchase", "conversion", true]], "tag_id": 37 }, { "function": "__ogt_google_signals", "original_activity_id": 3003, "vtp_googleSignals": "DISABLED", "vtp_serverMacroResult": ["macro", 25], "tag_id": 38 }, { "function": "__lcl", "vtp_waitForTags": false, "vtp_checkValidation": true, "vtp_uniqueTriggerId": "1_9", "tag_id": 39 }, { "function": "__lcl", "vtp_waitForTags": false, "vtp_checkValidation": true, "vtp_uniqueTriggerId": "1_16", "tag_id": 40 }, { "function": "__ytl", "vtp_captureStart": true, "vtp_captureComplete": true, "vtp_captureProgress": true, "vtp_progressThresholdsPercent": "10,25,50,75", "vtp_triggerStartOption": "DOM_READY", "vtp_uniqueTriggerId": "1_19", "vtp_enableTriggerStartOption": true, "tag_id": 41 }, { "function": "__sdl", "vtp_verticalThresholdUnits": "PERCENT", "vtp_verticalThresholdsPercent": "90", "vtp_verticalThresholdOn": true, "vtp_horizontalThresholdOn": false, "vtp_triggerStartOption": "WINDOW_LOAD", "vtp_uniqueTriggerId": "1_27", "vtp_enableTriggerStartOption": true, "tag_id": 42 }, { "function": "__ehl", "vtp_groupEvents": true, "vtp_groupEventsInterval": 1000, "vtp_uniqueTriggerId": "1_30", "tag_id": 43 }],
            "predicates": [{ "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js" }, { "function": "_eq", "arg0": ["macro", 1], "arg1": true }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.linkClick" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_9($|,)))" }, { "function": "_re", "arg0": ["macro", 7], "arg1": "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma", "ignore_case": true }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_16($|,)))" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.video" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_19($|,)))" }, { "function": "_eq", "arg0": ["macro", 18], "arg1": "undefined" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.scrollDepth" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_27($|,)))" }, { "function": "_eq", "arg0": ["macro", 20], "arg1": ["list", "pushState", "popstate", "replaceState"], "any_of": true }, { "function": "_eq", "arg0": ["macro", 21], "arg1": ["macro", 22] }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.historyChange-v2" }, { "function": "_re", "arg0": ["macro", 2], "arg1": "(^$|((^|,)1_30($|,)))" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.init" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.dom" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.load" }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 11, 12, 15]
                ],
                [
                    ["if", 1, 2, 3],
                    ["add", 1]
                ],
                [
                    ["if", 2, 4, 5],
                    ["add", 2]
                ],
                [
                    ["if", 6, 7],
                    ["add", 3]
                ],
                [
                    ["if", 0],
                    ["unless", 8],
                    ["add", 4]
                ],
                [
                    ["if", 9, 10],
                    ["add", 5]
                ],
                [
                    ["if", 11, 13, 14],
                    ["unless", 12],
                    ["add", 6, 7]
                ],
                [
                    ["if", 15],
                    ["add", 8, 9, 10]
                ],
                [
                    ["if", 16],
                    ["add", 13]
                ],
                [
                    ["if", 17],
                    ["add", 14]
                ]
            ]
        },
        "runtime": [
            [50, "__set_product_settings", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [17, ["c"], "containerId"]],
                ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
                ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_event_settings", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [8]],
                [53, [41, "f"],
                    [3, "f", 0],
                    [63, [7, "f"],
                        [23, [15, "f"],
                            [17, [17, [15, "a"], "eventSettings"], "length"]
                        ],
                        [33, [15, "f"],
                            [3, "f", [0, [15, "f"], 1]]
                        ],
                        [46, [53, [52, "g", [16, [16, [17, [15, "a"], "eventSettings"],
                                [15, "f"]
                            ], "name"]],
                            [43, [15, "d"],
                                [15, "g"],
                                [8, "blacklisted", [16, [16, [17, [15, "a"], "eventSettings"],
                                    [15, "f"]
                                ], "blacklisted"], "conversion", [16, [16, [17, [15, "a"], "eventSettings"],
                                    [15, "f"]
                                ], "conversion"]]
                            ]
                        ]]
                    ]
                ],
                [52, "e", [17, ["c"], "containerId"]],
                ["b", [15, "e"], "event_settings", [15, "d"]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_google_signals", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "e", [17, ["c"], "containerId"]],
                ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]],
                [22, [17, [15, "d"], "enableGa4OnoRemarketing"],
                    [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ]
        ],
        "permissions": { "__set_product_settings": { "read_container_data": {} }, "__ogt_event_settings": { "read_container_data": {} }, "__ogt_google_signals": { "read_container_data": {} } }

        ,
        "security_groups": {
            "google": ["__set_product_settings", "__ogt_event_settings", "__ogt_google_signals"]
        }

    };


    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l, aa = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } },
        ba = function(a) { return a.raw = a },
        ca = function(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: aa(a) } },
        ea = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = { a: !0 },
                ka = {};
            try {
                ka.__proto__ = ia;
                ha = ka.a;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null
    }
    var la = fa,
        ma = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Jk = b.prototype
        },
        na = this || self,
        qa = function(a) { return a };
    var ra = function(a, b) {
        this.g = a;
        this.o = b
    };
    var sa = function(a) { return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10) },
        ua = function() {
            this.C = {};
            this.s = !1;
            this.F = {}
        },
        va = function(a, b) {
            var c = [],
                d;
            for (d in a.C)
                if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    ua.prototype.get = function(a) { return this.C["dust." + a] };
    ua.prototype.set = function(a, b) { this.s || (a = "dust." + a, this.F.hasOwnProperty(a) || (this.C[a] = b)) };
    ua.prototype.has = function(a) { return this.C.hasOwnProperty("dust." + a) };
    var wa = function(a, b) {
        b = "dust." + b;
        a.s || a.F.hasOwnProperty(b) || delete a.C[b]
    };
    ua.prototype.Gb = function() { this.s = !0 };
    var xa = function(a) {
        this.o = new ua;
        this.g = [];
        this.s = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (sa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
    };
    l = xa.prototype;
    l.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof xa ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    l.set = function(a, b) {
        if (!this.s)
            if ("length" === a) {
                if (!sa(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b)
            } else sa(a) ? this.g[Number(a)] = b : this.o.set(a, b)
    };
    l.get = function(a) { return "length" === a ? this.length() : sa(a) ? this.g[Number(a)] : this.o.get(a) };
    l.length = function() { return this.g.length };
    l.Fb = function() { for (var a = va(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + ""); return new xa(a) };
    var ya = function(a, b) { sa(b) ? delete a.g[Number(b)] : wa(a.o, b) };
    l = xa.prototype;
    l.pop = function() { return this.g.pop() };
    l.push = function(a) { return this.g.push.apply(this.g, Array.prototype.slice.call(arguments)) };
    l.shift = function() { return this.g.shift() };
    l.splice = function(a, b, c) { return new xa(this.g.splice.apply(this.g, arguments)) };
    l.unshift = function(a) { return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments)) };
    l.has = function(a) { return sa(a) && this.g.hasOwnProperty(a) || this.o.has(a) };
    l.Gb = function() {
        this.s = !0;
        Object.freeze(this.g);
        this.o.Gb()
    };
    var za = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].Rd + g > b[f].max) throw Error("Quota exceeded");
                b[f].Rd += g
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                Qj: function(f) { c = f },
                Wg: function() { c && a(c, 1) },
                Sj: function(f) { d = f },
                Ib: function(f) { d && a(d, f) },
                pk: function(f, g) {
                    b[f] = b[f] || { Rd: 0 };
                    b[f].max = g
                },
                pj: function(f) { return b[f] && b[f].Rd || 0 },
                reset: function() { b = {} },
                aj: a
            };
        e.onFnConsume = e.Qj;
        e.consumeFn = e.Wg;
        e.onStorageConsume = e.Sj;
        e.consumeStorage = e.Ib;
        e.setMax = e.pk;
        e.getConsumed = e.pj;
        e.reset = e.reset;
        e.consume = e.aj;
        return e
    };
    var Ba = function(a, b) {
        this.s = a;
        this.O = function(c, d, e) { return c.apply(d, e) };
        this.C = b;
        this.o = new ua;
        this.g = this.F = void 0
    };
    Ba.prototype.add = function(a, b) { Ca(this, a, b, !1) };
    var Ca = function(a, b, c, d) {
        if (!a.o.s)
            if (a.s.Ib(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
                var e = a.o;
                e.set(b, c);
                e.F["dust." + b] = !0
            } else a.o.set(b, c)
    };
    Ba.prototype.set = function(a, b) { this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Ib(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b))) };
    Ba.prototype.get = function(a) { return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0 };
    Ba.prototype.has = function(a) { return !!this.o.has(a) || !(!this.C || !this.C.has(a)) };
    var Da = function(a) {
        var b = new Ba(a.s, a);
        a.F && (b.F = a.F);
        b.O = a.O;
        b.g = a.g;
        return b
    };
    var Fa = function() {},
        Ga = function(a) { return "function" == typeof a },
        Ha = function(a) { return "string" == typeof a },
        Ja = function(a) { return "number" == typeof a && !isNaN(a) },
        Ka = Array.isArray,
        Ma = function(a, b) {
            if (a && Ka(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Na = function(a, b) { if (!Ja(a) || !Ja(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a) },
        Pa = function(a, b) {
            for (var c = new Oa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        Qa = function(a,
            b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) },
        Sa = function(a) { return !!a && ("[object Arguments]" == Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee")) },
        Ta = function(a) { return Math.round(Number(a)) || 0 },
        Ua = function(a) { return "false" == String(a).toLowerCase() ? !1 : !!a },
        Va = function(a) {
            var b = [];
            if (Ka(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Wa = function(a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" },
        Xa = function() { return new Date(Date.now()) },
        Ya = function() { return Xa().getTime() },
        Oa = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Oa.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    Oa.prototype.get = function(a) { return this.values[this.prefix + a] };
    var Za = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        $a = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try { c() } catch (d) {}
                }
            }
        },
        bb = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) },
        cb = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        db = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        eb = function(a, b) {
            var c = m;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        fb = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        gb = /^\w{1,9}$/,
        hb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Qa(a, function(d, e) { gb.test(d) && e && c.push(d) });
            return c.join(b)
        },
        ib = function(a, b) {
            function c() {++d === b && (e(), e = null, c.done = !0) }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var jb = function(a, b) {
        ua.call(this);
        this.O = a;
        this.Sa = b
    };
    ma(jb, ua);
    jb.prototype.toString = function() { return this.O };
    jb.prototype.Fb = function() { return new xa(va(this, 1)) };
    jb.prototype.g = function(a, b) { a.s.Wg(); return this.Sa.apply(new kb(this, a), Array.prototype.slice.call(arguments, 1)) };
    jb.prototype.o = function(a, b) { try { return this.g.apply(this, Array.prototype.slice.call(arguments, 0)) } catch (c) {} };
    var mb = function(a, b) { for (var c, d = 0; d < b.length && !(c = lb(a, b[d]), c instanceof ra); d++); return c },
        lb = function(a, b) {
            try { var c = a.get(String(b[0])); if (!(c && c instanceof jb)) throw Error("Attempting to execute non-function " + b[0] + "."); return c.g.apply(c, [a].concat(b.slice(1))) } catch (e) {
                var d = a.F;
                d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
                throw e;
            }
        },
        kb = function(a, b) {
            this.o = a;
            this.g = b
        },
        z = function(a, b) { return Ka(b) ? lb(a.g, b) : b },
        F = function(a) { return a.o.O };
    var nb = function() { ua.call(this) };
    ma(nb, ua);
    nb.prototype.Fb = function() { return new xa(va(this, 1)) };
    var ob = {
        control: function(a, b) { return new ra(a, z(this, b)) },
        fn: function(a, b, c) {
            var d = this.g,
                e = z(this, b);
            if (!(e instanceof xa)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Ib(a.length + f.length);
            return new jb(a, function() {
                return function(g) {
                    var h = Da(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                        if (k[n] = z(this, k[n]), k[n] instanceof ra) return k[n];
                    for (var p = e.get("length"), q =
                            0; q < p; q++) q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new xa(k));
                    var t = mb(h, f);
                    if (t instanceof ra) return "return" === t.g ? t.o : t
                }
            }())
        },
        list: function(a) {
            var b = this.g.s;
            b.Ib(arguments.length);
            for (var c = new xa, d = 0; d < arguments.length; d++) {
                var e = z(this, arguments[d]);
                "string" === typeof e && b.Ib(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.g.s, c = new nb, d = 0; d < arguments.length - 1; d += 2) {
                var e = z(this, arguments[d]) + "",
                    f = z(this, arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.Ib(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var pb = function() {
            this.s = za();
            this.g = new Ba(this.s)
        },
        qb = function(a, b, c) {
            var d = new jb(b, c);
            d.Gb();
            a.g.set(b, d)
        },
        rb = function(a, b, c) { ob.hasOwnProperty(b) && qb(a, c || b, ob[b]) };
    pb.prototype.execute = function(a, b) { var c = Array.prototype.slice.call(arguments, 0); return this.o(c) };
    pb.prototype.o = function(a) { for (var b, c = 0; c < arguments.length; c++) b = lb(this.g, arguments[c]); return b };
    pb.prototype.C = function(a, b) {
        var c = Da(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = lb(c, arguments[e]);
        return d
    };
    var sb, tb = function() {
        if (void 0 === sb) {
            var a = null,
                b = na.trustedTypes;
            if (b && b.createPolicy) {
                try { a = b.createPolicy("goog#html", { createHTML: qa, createScript: qa, createScriptURL: qa }) } catch (c) { na.console && na.console.error(c.message) }
                sb = a
            } else sb = a
        }
        return sb
    };
    var vb = function(a, b) { this.s = b === ub ? a : "" };
    vb.prototype.o = !0;
    vb.prototype.g = function() { return this.s.toString() };
    vb.prototype.toString = function() { return this.s + "" };
    var wb = function(a) { return a instanceof vb && a.constructor === vb ? a.s : "type_error:TrustedResourceUrl" },
        ub = {},
        xb = function(a) {
            var b = tb(),
                c = b ? b.createScriptURL(a) : a;
            return new vb(c, ub)
        };
    var zb = function(a, b) { this.s = b === yb ? a : "" };
    zb.prototype.o = !0;
    zb.prototype.g = function() { return this.s.toString() };
    zb.prototype.toString = function() { return this.s.toString() };
    var Ab = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        yb = {};

    function Bb() { var a = na.navigator; if (a) { var b = a.userAgent; if (b) return b } return "" }

    function Cb(a) { return -1 != Bb().indexOf(a) };
    var Db = {},
        Eb = function(a, b, c) {
            this.s = c === Db ? a : "";
            this.o = !0
        };
    Eb.prototype.g = function() { return this.s.toString() };
    Eb.prototype.toString = function() { return this.s.toString() };
    var Fb = function(a) { return a instanceof Eb && a.constructor === Eb ? a.s : "type_error:SafeHtml" },
        Hb = function(a) {
            var b = tb(),
                c = b ? b.createHTML(a) : a;
            return new Eb(c, null, Db)
        },
        Ib = new Eb(na.trustedTypes && na.trustedTypes.emptyHTML || "", 0, Db);
    /*
        
         SPDX-License-Identifier: Apache-2.0
        */
    var Jb = {};
    var Kb = function() {},
        Lb = function(a) { this.g = a };
    ma(Lb, Kb);
    Lb.prototype.toString = function() { return this.g };

    function Mb(a, b) {
        var c = [new Lb(Nb[0].toLowerCase(), Jb)];
        if (0 === c.length) throw Error("No prefixes are provided");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Lb) g = f.g;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) { return 0 !== e.indexOf(f) })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };
    var Ob = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Pb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Qb = function(a) {
        var b = !1,
            c;
        return function() { b || (c = a(), b = !0); return c }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = Fb(Ib);
        return !c.parentElement
    });
    var m = window,
        H = document,
        Rb = navigator,
        Sb = H.currentScript && H.currentScript.src,
        Tb = function(a, b) {
            var c = m[a];
            m[a] = void 0 === c ? b : c;
            return m[a]
        },
        Ub = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        Vb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        Wb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };

    function Xb(a, b, c) {
        b && Qa(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Yb = function(a, b, c, d) {
            var e = H.createElement("script");
            Xb(e, d, Vb);
            e.type = "text/javascript";
            e.async = !0;
            var f = xb(a);
            e.src = wb(f);
            var g, h, k, n = null == (k = (h = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : k.call(h, "script[nonce]");
            (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
            Ub(e, b);
            c && (e.onerror = c);
            var p = H.getElementsByTagName("script")[0] || H.body || H.head;
            p.parentNode.insertBefore(e, p);
            return e
        },
        Zb = function() {
            if (Sb) {
                var a = Sb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        $b = function(a, b, c, d, e) {
            var f = e,
                g = !1;
            f || (f = H.createElement("iframe"), g = !0);
            Xb(f, c, Wb);
            d && Qa(d, function(k, n) { f.dataset[k] = n });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var h = H.body && H.body.lastChild || H.body || H.head;
                h.parentNode.insertBefore(f, h)
            }
            Ub(f, b);
            void 0 !== a && (f.src = a);
            return f
        },
        cc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror =
                function() {
                    d.onerror = null;
                    c && c()
                };
            d.src = a;
            return d
        },
        dc = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        ec = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        I = function(a) { m.setTimeout(a, 0) },
        fc = function(a, b) { return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null },
        gc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b &&
                (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        hc = function(a) {
            var b = H.createElement("div"),
                c = Hb("A<div>" + a + "</div>"),
                d = b;
            if (Qb())
                for (; d.lastChild;) d.removeChild(d.lastChild);
            d.innerHTML = Fb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        ic = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        jc = function(a) {
            var b;
            try {
                b = Rb.sendBeacon &&
                    Rb.sendBeacon(a)
            } catch (c) {}
            b || cc(a)
        },
        kc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        lc = function(a) { var b = H.featurePolicy; return b && Ga(b.allowsFeature) ? b.allowsFeature(a) : !1 };
    var mc = function(a, b) { return z(this, a) && z(this, b) },
        nc = function(a, b) { return z(this, a) === z(this, b) },
        oc = function(a, b) { return z(this, a) || z(this, b) },
        pc = function(a, b) {
            a = z(this, a);
            b = z(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        qc = function(a, b) {
            a = String(z(this, a));
            b = String(z(this, b));
            return a.substring(0, b.length) === b
        },
        rc = function(a, b) {
            a = z(this, a);
            b = z(this, b);
            switch (a) {
                case "pageLocation":
                    var c = m.location.href;
                    b instanceof nb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var tc = function() {
        this.g = new pb;
        sc(this)
    };
    tc.prototype.execute = function(a) { return this.g.o(a) };
    var sc = function(a) {
        rb(a.g, "map");
        var b = function(c, d) { qb(a.g, c, d) };
        b("and", mc);
        b("contains", pc);
        b("equals", nc);
        b("or", oc);
        b("startsWith", qc);
        b("variable", rc)
    };
    var uc = function(a) {
        if (a instanceof uc) return a;
        this.Xa = a
    };
    uc.prototype.toString = function() { return String(this.Xa) };
    var wc = function(a) {
        ua.call(this);
        this.g = a;
        this.set("then", vc(this));
        this.set("catch", vc(this, !0));
        this.set("finally", vc(this, !1, !0))
    };
    ma(wc, nb);
    var vc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new jb("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof jb || (d = void 0);
            e instanceof jb || (e = void 0);
            var f = Da(this.g),
                g = function(k) { return function(n) { return c ? (k.g(f), a.g) : k.g(f, n) } },
                h = a.g.then(d && g(d), e && g(e));
            return new wc(h)
        })
    };
    /*
         jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var xc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        yc = function(a) { if (null == a) return String(a); var b = xc.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        zc = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        Ac = function(a) {
            if (!a || "object" != yc(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !zc(a, "constructor") && !zc(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || zc(a, b)
        },
        Bc = function(a, b) {
            var c = b || ("array" == yc(a) ? [] : {}),
                d;
            for (d in a)
                if (zc(a, d)) { var e = a[d]; "array" == yc(e) ? ("array" != yc(c[d]) && (c[d] = []), c[d] = Bc(e, c[d])) : Ac(e) ? (Ac(c[d]) || (c[d] = {}), c[d] = Bc(e, c[d])) : c[d] = e }
            return c
        };
    var Dc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) { for (var n = va(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p])) },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (h instanceof xa) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.Fb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                        return n
                    }
                    if (h instanceof wc) return h.g;
                    if (h instanceof nb) {
                        var t = {};
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    if (h instanceof jb) {
                        var u = function() {
                            for (var r = Array.prototype.slice.call(arguments, 0), v = 0; v < r.length; v++) r[v] = Cc(r[v],
                                b, !!c);
                            var w = b ? b.s : za(),
                                y = new Ba(w);
                            b && (y.g = b.g);
                            return g(h.g.apply(h, [y].concat(r)))
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u
                    }
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null
                    }
                };
            return g(a)
        },
        Cc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n in h) h.hasOwnProperty(n) && k.set(n,
                        g(h[n]))
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (Ka(h) || Sa(h)) {
                        var n = new xa([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (Ac(h)) {
                        var q = new nb;
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q
                    }
                    if ("function" === typeof h) {
                        var t = new jb("", function(y) { for (var x = Array.prototype.slice.call(arguments, 0), A = 0; A < x.length; A++) x[A] = Dc(z(this, x[A]), b, !!c); return g((0, this.g.O)(h, h, x)) });
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    var w = typeof h;
                    if (null === h || "string" === w || "number" === w || "boolean" === w) return h;
                };
            return g(a)
        };
    var Ec = function(a) { for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c)); return b },
        Fc = function(a) {
            if (void 0 === a || Ka(a) || Ac(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var Gc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof xa)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new xa(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e)); return new xa(d) },
        forEach: function(a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this) },
        hasOwnProperty: function(a, b) { return this.has(b) },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) { for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d)); return c.join(b) },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this)); return new xa(d) },
        pop: function() { return this.pop() },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() { for (var a = Ec(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : ya(this, c); return this },
        shift: function() { return this.shift() },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new xa(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Ec(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) { return Number(b.g(a, e, f)) });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ya(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() { return this.toString() },
        unshift: function(a, b) { return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1)) }
    };
    var Hc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Ic = new ra("break"),
        Jc = new ra("continue"),
        Kc = function(a, b) { return z(this, a) + z(this, b) },
        Lc = function(a, b) { return z(this, a) && z(this, b) },
        Mc = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            if (!(c instanceof xa)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) { if ("toString" === b) { if (d && c.length()) { var e = Dc(c.get(0)); try { return a.toString(e) } catch (q) {} } return a.toString() } throw Error("TypeError: " + a + "." + b + " is not a function."); }
            if ("string" === typeof a) { if (0 <= Hc.indexOf(b)) { var f = Dc(c); return Cc(a[b].apply(a, f), this.g) } throw Error("TypeError: " + b + " is not a function"); }
            if (a instanceof xa) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof jb) {
                        var h = Ec(c);
                        h.unshift(this.g);
                        return g.g.apply(g, h)
                    }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= Gc.supportedMethods.indexOf(b)) {
                    var k = Ec(c);
                    k.unshift(this.g);
                    return Gc[b].apply(a, k)
                }
            }
            if (a instanceof jb || a instanceof nb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof jb) {
                        var p = Ec(c);
                        p.unshift(this.g);
                        return n.g.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof jb ? a.O : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Ec(c))
            }
            if (a instanceof uc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        },
        Nc = function(a, b) {
            a = z(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = z(this, b);
            c.set(a, d);
            return d
        },
        Oc = function(a) {
            var b = Da(this.g),
                c = mb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof ra) return c
        },
        Pc = function() { return Ic },
        Qc = function(a) { for (var b = z(this, a), c = 0; c < b.length; c++) { var d = z(this, b[c]); if (d instanceof ra) return d } },
        Rc = function(a) {
            for (var b =
                    this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = z(this, arguments[c + 1]);
                    Ca(b, d, e, !0)
                }
            }
        },
        Sc = function() { return Jc },
        Tc = function(a, b, c) {
            var d = new xa;
            b = z(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, z(this, f))
        },
        Uc = function(a, b) { return z(this, a) / z(this, b) },
        Vc = function(a, b) {
            a = z(this, a);
            b = z(this, b);
            var c = a instanceof uc,
                d = b instanceof uc;
            return c || d ? c && d ? a.Xa == b.Xa : !1 : a ==
                b
        },
        Wc = function(a) { for (var b, c = 0; c < arguments.length; c++) b = z(this, arguments[c]); return b };

    function Xc(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = mb(f, d);
            if (g instanceof ra) { if ("break" === g.g) break; if ("return" === g.g) return g }
        }
    }

    function Yc(a, b, c) {
        if ("string" === typeof b) return Xc(a, function() { return b.length }, function(f) { return f }, c);
        if (b instanceof nb || b instanceof xa || b instanceof jb) {
            var d = b.Fb(),
                e = d.length();
            return Xc(a, function() { return e }, function(f) { return d.get(f) }, c)
        }
    }
    var Zc = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            var d = this.g;
            return Yc(function(e) { d.set(a, e); return d }, b, c)
        },
        $c = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            var d = this.g;
            return Yc(function(e) {
                var f = Da(d);
                Ca(f, a, e, !0);
                return f
            }, b, c)
        },
        ad = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            var d = this.g;
            return Yc(function(e) {
                var f = Da(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        gd = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            var d = this.g;
            return fd(function(e) { d.set(a, e); return d }, b, c)
        },
        hd =
        function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            var d = this.g;
            return fd(function(e) {
                var f = Da(d);
                Ca(f, a, e, !0);
                return f
            }, b, c)
        },
        id = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            var d = this.g;
            return fd(function(e) {
                var f = Da(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function fd(a, b, c) { if ("string" === typeof b) return Xc(a, function() { return b.length }, function(d) { return b[d] }, c); if (b instanceof xa) return Xc(a, function() { return b.length() }, function(d) { return b.get(d) }, c); throw new TypeError("The value is not iterable."); }
    var jd = function(a, b, c, d) {
            function e(p, q) {
                for (var t = 0; t < f.length(); t++) {
                    var u = f.get(t);
                    q.add(u, p.get(u))
                }
            }
            var f = z(this, a);
            if (!(f instanceof xa)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.g;
            d = z(this, d);
            var h = Da(g);
            for (e(g, h); lb(h, b);) {
                var k = mb(h, d);
                if (k instanceof ra) { if ("break" === k.g) break; if ("return" === k.g) return k }
                var n = Da(g);
                e(h, n);
                lb(n, c);
                h = n
            }
        },
        kd = function(a) {
            a = z(this, a);
            var b = this.g,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        ld = function(a, b) {
            var c;
            a = z(this, a);
            b = z(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof nb || a instanceof xa || a instanceof jb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : sa(b) && (c = a[b]);
            else if (a instanceof uc) return;
            return c
        },
        md = function(a, b) {
            return z(this, a) > z(this,
                b)
        },
        nd = function(a, b) { return z(this, a) >= z(this, b) },
        od = function(a, b) {
            a = z(this, a);
            b = z(this, b);
            a instanceof uc && (a = a.Xa);
            b instanceof uc && (b = b.Xa);
            return a === b
        },
        pd = function(a, b) { return !od.call(this, a, b) },
        qd = function(a, b, c) {
            var d = [];
            z(this, a) ? d = z(this, b) : c && (d = z(this, c));
            var e = mb(this.g, d);
            if (e instanceof ra) return e
        },
        rd = function(a, b) { return z(this, a) < z(this, b) },
        sd = function(a, b) { return z(this, a) <= z(this, b) },
        td = function(a, b) { return z(this, a) % z(this, b) },
        ud = function(a, b) { return z(this, a) * z(this, b) },
        vd = function(a) {
            return -z(this,
                a)
        },
        wd = function(a) { return !z(this, a) },
        xd = function(a, b) { return !Vc.call(this, a, b) },
        yd = function() { return null },
        zd = function(a, b) { return z(this, a) || z(this, b) },
        Ad = function(a, b) {
            var c = z(this, a);
            z(this, b);
            return c
        },
        Bd = function(a) { return z(this, a) },
        Cd = function(a) { return Array.prototype.slice.apply(arguments) },
        Gd = function(a) { return new ra("return", z(this, a)) },
        Hd = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof jb || a instanceof xa || a instanceof nb) && a.set(b, c);
            return c
        },
        Id = function(a, b) { return z(this, a) - z(this, b) },
        Jd = function(a, b, c) {
            a = z(this, a);
            var d = z(this, b),
                e = z(this, c);
            if (!Ka(d) || !Ka(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === z(this, d[h]))
                    if (f = z(this, e[h]), f instanceof ra) { var k = f.g; if ("break" === k) return; if ("return" === k || "continue" === k) return f } else g = !0;
            if (e.length === d.length + 1 && (f = z(this, e[e.length - 1]), f instanceof ra && ("return" === f.g || "continue" ===
                    f.g))) return f
        },
        Kd = function(a, b, c) { return z(this, a) ? z(this, b) : z(this, c) },
        Ld = function(a) { a = z(this, a); return a instanceof jb ? "function" : typeof a },
        Md = function(a) { for (var b = this.g, c = 0; c < arguments.length; c++) { var d = arguments[c]; "string" !== typeof d || b.add(d, void 0) } },
        Nd = function(a, b, c, d) {
            var e = z(this, d);
            if (z(this, c)) { var f = mb(this.g, e); if (f instanceof ra) { if ("break" === f.g) return; if ("return" === f.g) return f } }
            for (; z(this, a);) {
                var g = mb(this.g, e);
                if (g instanceof ra) { if ("break" === g.g) break; if ("return" === g.g) return g }
                z(this,
                    b)
            }
        },
        Od = function(a) { return ~Number(z(this, a)) },
        Pd = function(a, b) { return Number(z(this, a)) << Number(z(this, b)) },
        Qd = function(a, b) { return Number(z(this, a)) >> Number(z(this, b)) },
        Rd = function(a, b) { return Number(z(this, a)) >>> Number(z(this, b)) },
        Sd = function(a, b) { return Number(z(this, a)) & Number(z(this, b)) },
        Td = function(a, b) { return Number(z(this, a)) ^ Number(z(this, b)) },
        Ud = function(a, b) { return Number(z(this, a)) | Number(z(this, b)) };
    var Wd = function() {
        this.g = new pb;
        Vd(this)
    };
    Wd.prototype.execute = function(a) { return Xd(this.g.o(a)) };
    var Yd = function(a, b, c) { return Xd(a.g.C(b, c)) },
        Vd = function(a) {
            var b = function(d, e) { rb(a.g, d, String(e)) };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) { qb(a.g, String(d), e) };
            c(0, Kc);
            c(1, Lc);
            c(2, Mc);
            c(3, Nc);
            c(53, Oc);
            c(4, Pc);
            c(5, Qc);
            c(52, Rc);
            c(6, Sc);
            c(9, Qc);
            c(50, Tc);
            c(10, Uc);
            c(12, Vc);
            c(13, Wc);
            c(47, Zc);
            c(54, $c);
            c(55, ad);
            c(63, jd);
            c(64, gd);
            c(65, hd);
            c(66, id);
            c(15, kd);
            c(16, ld);
            c(17, ld);
            c(18, md);
            c(19, nd);
            c(20, od);
            c(21, pd);
            c(22, qd);
            c(23, rd);
            c(24, sd);
            c(25, td);
            c(26, ud);
            c(27,
                vd);
            c(28, wd);
            c(29, xd);
            c(45, yd);
            c(30, zd);
            c(32, Ad);
            c(33, Ad);
            c(34, Bd);
            c(35, Bd);
            c(46, Cd);
            c(36, Gd);
            c(43, Hd);
            c(37, Id);
            c(38, Jd);
            c(39, Kd);
            c(40, Ld);
            c(41, Md);
            c(42, Nd);
            c(58, Od);
            c(57, Pd);
            c(60, Qd);
            c(61, Rd);
            c(56, Sd);
            c(62, Td);
            c(59, Ud)
        };

    function Xd(a) { if (a instanceof ra || a instanceof jb || a instanceof xa || a instanceof nb || a instanceof uc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a };
    var Zd = function() {
        var a = function(b) { return { toString: function() { return b } } };
        return {
            Ph: a("consent"),
            ne: a("consent_always_fire"),
            Sf: a("convert_case_to"),
            Tf: a("convert_false_to"),
            Uf: a("convert_null_to"),
            Vf: a("convert_true_to"),
            Wf: a("convert_undefined_to"),
            zk: a("debug_mode_metadata"),
            Eb: a("function"),
            Ci: a("instance_name"),
            Gi: a("live_only"),
            Hi: a("malware_disabled"),
            Ii: a("metadata"),
            Ni: a("original_activity_id"),
            Bk: a("original_vendor_template_id"),
            Mi: a("once_per_event"),
            Bg: a("once_per_load"),
            Dk: a("priority_override"),
            Ek: a("respected_consent_types"),
            Gg: a("setup_tags"),
            Ig: a("tag_id"),
            Jg: a("teardown_tags")
        }
    }();
    var xe;
    var ye = [],
        ze = [],
        Ae = [],
        Be = [],
        Ce = [],
        De = {},
        Ee, Fe, Ge, He = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Ie = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = De[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.Vg && d.Vg(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Zd.ne.toString() && a[g]) {}
            e && d && d.Ug && (f.vtp_gtmCachedValues = d.Ug);
            return void 0 !== e ? e(f) : xe(c, f, b)
        },
        Ke = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Je(a[e], b, c));
            return d
        },
        Je = function(a, b, c) {
            if (Ka(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Je(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ye[f];
                        if (!g || b.wf(g)) return;
                        c[f] = !0;
                        try {
                            var h = Ke(g, b, c);
                            h.vtp_gtmEventId =
                                b.id;
                            d = Ie(h, { event: b, index: f, type: 2 });
                            Ge && (d = Ge.bj(d, h))
                        } catch (y) { b.oh && b.oh(y, Number(f)), d = !1 }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var k = 1; k < a.length; k += 2) d[Je(a[k], b, c)] = Je(a[k + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var q = Je(a[p], b, c);
                            Fe && (n = n || q === Fe.Gd);
                            d.push(q)
                        }
                        return Fe && n ? Fe.fj(d) : d.join("");
                    case "escape":
                        d = Je(a[1], b, c);
                        if (Fe && Ka(a[1]) && "macro" === a[1][0] && Fe.Dj(a)) return Fe.Wj(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) $d[a[t]] && (d = $d[a[t]](d));
                        return d;
                    case "tag":
                        var u =
                            a[1];
                        if (!Be[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = { ah: a[2], index: u };
                    case "zb":
                        var r = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        r["function"] = a[1];
                        var v = Le(r, b, c),
                            w = !!a[4];
                        return w || 2 !== v ? w !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Le = function(a, b, c) { try { return Ee(Ke(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 };
    var Me = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.o = a;
        this.g = c
    };
    ma(Me, Error);

    function Ne(a, b) { if (Ka(a)) { Object.defineProperty(a, "context", { value: { line: b[0] } }); for (var c = 1; c < a.length; c++) Ne(a[c], b[c]) } };
    var Oe = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.s = a;
        this.o = b;
        this.g = []
    };
    ma(Oe, Error);
    var Qe = function() {
        return function(a, b) {
            a instanceof Oe || (a = new Oe(a, Pe));
            b && a.g.push(b);
            throw a;
        }
    };

    function Pe(a) {
        if (!a.length) return a;
        a.push({ id: "main", line: 0 });
        for (var b = a.length - 1; 0 < b; b--) Ja(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var Te = function(a) {
            function b(t) { for (var u = 0; u < t.length; u++) d[t[u]] = !0 }
            for (var c = [], d = [], e = Re(a), f = 0; f < ze.length; f++) {
                var g = ze[f],
                    h = Se(g, e);
                if (h) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < Be.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Se = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) { var e = b(c[d]); if (0 === e) return !1; if (2 === e) return null }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) { var h = b(f[g]); if (2 === h) return null; if (1 === h) return !1 }
            return !0
        },
        Re = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = Le(Ae[c], a)); return b[c] } };
    var Ue = {
        bj: function(a, b) {
            b[Zd.Sf] && "string" === typeof a && (a = 1 == b[Zd.Sf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Zd.Uf) && null === a && (a = b[Zd.Uf]);
            b.hasOwnProperty(Zd.Wf) && void 0 === a && (a = b[Zd.Wf]);
            b.hasOwnProperty(Zd.Vf) && !0 === a && (a = b[Zd.Vf]);
            b.hasOwnProperty(Zd.Tf) && !1 === a && (a = b[Zd.Tf]);
            return a
        }
    };
    var Ve = function() { this.g = {} };

    function We(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try { f = a[e].call(void 0, b, c, d), g += "." } catch (h) { g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "." }
                if (!f) throw new Me(c, d, g);
            }
    }

    function Xe(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.g[d],
                    f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    We(e, b, d, g);
                    We(f, b, d, g)
                }
            }
        }
    };
    var $e = function() {
            var a = data.permissions || {},
                b = J.J,
                c = this;
            this.o = new Ve;
            this.g = {};
            var d = {},
                e = Xe(this.o, b, function() { var f = arguments[0]; return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {} });
            Qa(a, function(f, g) {
                var h = {};
                Qa(g, function(k, n) {
                    var p = Ye(k, n);
                    h[k] = p.assert;
                    d[k] || (d[k] = p.R)
                });
                c.g[f] = function(k, n) {
                    var p = h[k];
                    if (!p) throw Ze(k, {}, "The requested permission " + k + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        bf =
        function(a) { return af.g[a] || function() {} };

    function Ye(a, b) {
        var c = He(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Ze;
        try { return Ie(c) } catch (d) { return { assert: function(e) { throw new Me(e, {}, "Permission " + e + " is unknown."); }, R: function() { for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f]; return e } } }
    }

    function Ze(a, b, c) { return new Me(a, b, c) };
    var cf = !1;
    var df = {};
    df.yk = Ua('');
    df.jj = Ua('');
    var ef = cf,
        ff = df.jj,
        gf = df.yk;
    var hf = function(a, b) { var c = String(a); return c };
    var nf = function(a) {
            var b = {},
                c = 0;
            Qa(a, function(e, f) {
                if (void 0 !== f)
                    if (f = hf(f, 100), jf.hasOwnProperty(e)) b[jf[e]] = kf(f);
                    else if (lf.hasOwnProperty(e)) {
                    var g = lf[e],
                        h = kf(f);
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if ("category" === e)
                    for (var k = kf(f).split("/", 5), n = 0; n < k.length; n++) {
                        var p = mf[n],
                            q = k[n];
                        b.hasOwnProperty(p) || (b[p] = q)
                    } else 10 > c && (b["k" + c] = kf(hf(e, 40)), b["v" + c] = kf(f), c++)
            });
            var d = [];
            Qa(b, function(e, f) { d.push("" + e + f) });
            return d.join("~")
        },
        kf = function(a) { return ("" + a).replace(/~/g, function() { return "~~" }) },
        jf = { item_id: "id", item_name: "nm", item_brand: "br", item_category: "ca", item_category2: "c2", item_category3: "c3", item_category4: "c4", item_category5: "c5", item_variant: "va", price: "pr", quantity: "qt", coupon: "cp", item_list_name: "ln", index: "lp", item_list_id: "li", discount: "ds", affiliation: "af", promotion_id: "pi", promotion_name: "pn", creative_name: "cn", creative_slot: "cs", location_id: "lo" },
        lf = { id: "id", name: "nm", brand: "br", variant: "va", list_name: "ln", list_position: "lp", list: "ln", position: "lp", creative: "cn" },
        mf = ["ca",
            "c2", "c3", "c4", "c5"
        ];
    var of = function(a) {
            var b = [];
            Qa(a, function(c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d))) });
            return b.join("&")
        },
        sf = function(a, b, c, d) {
            this.Fa = a.Fa;
            this.Pb = a.Pb;
            this.I = a.I;
            this.o = b;
            this.C = c;
            this.s = of(a.Fa);
            this.g = of(a.I);
            this.F = this.g.length;
            if (d && 16384 < this.F) throw Error("EVENT_TOO_LARGE");
        };
    var tf = function() {
        this.events = [];
        this.g = this.Fa = "";
        this.s = 0;
        this.o = !1
    };
    tf.prototype.add = function(a) { return this.C(a) ? (this.events.push(a), this.Fa = a.s, this.g = a.o, this.s += a.F, this.o = a.C, !0) : !1 };
    tf.prototype.C = function(a) {
        var b = 20 > this.events.length && 16384 > a.F + this.s,
            c = this.Fa === a.s && this.g === a.o && this.o === a.C;
        return 0 == this.events.length || b && c
    };
    var uf = function(a, b) { Qa(a, function(c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d)) }) },
        vf = function(a, b) {
            var c = [];
            a.s && c.push(a.s);
            b && c.push("_s=" + b);
            uf(a.Pb, c);
            var d = !1;
            a.g && (c.push(a.g), d = !0);
            var e = c.join("&"),
                f = "",
                g = e.length + a.o.length + 1;
            d && 2048 < g && (f = c.pop(), e = c.join("&"));
            return { Ff: e, body: f }
        },
        wf = function(a, b) {
            var c = a.events;
            if (1 == c.length) return vf(c[0], b);
            var d = [];
            a.Fa && d.push(a.Fa);
            for (var e = {}, f = 0; f < c.length; f++) Qa(c[f].Pb, function(u, r) {
                null != r && (e[u] = e[u] || {}, e[u][String(r)] =
                    e[u][String(r)] + 1 || 1)
            });
            var g = {};
            Qa(e, function(u, r) {
                var v, w = -1,
                    y = 0;
                Qa(r, function(x, A) {
                    y += A;
                    var B = (x.length + u.length + 2) * (A - 1);
                    B > w && (v = x, w = B)
                });
                y == c.length && (g[u] = v)
            });
            uf(g, d);
            b && d.push("_s=" + b);
            for (var h = d.join("&"), k = [], n = {}, p = 0; p < c.length; n = { sd: n.sd }, p++) {
                var q = [];
                n.sd = {};
                Qa(c[p].Pb, function(u) { return function(r, v) { g[r] != "" + v && (u.sd[r] = v) } }(n));
                c[p].g && q.push(c[p].g);
                uf(n.sd, q);
                k.push(q.join("&"))
            }
            var t = k.join("\r\n");
            return { Ff: h, body: t }
        };
    var Gf = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        Hf = { Fn: "function", DustMap: "Object", List: "Array" },
        L = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = Gf.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    k = c[d];
                if (null == k) { if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied."); } else if ("*" !== h) {
                    var n = typeof k;
                    k instanceof jb ? n = "Fn" : k instanceof xa ? n = "List" : k instanceof nb ? n = "DustMap" : k instanceof uc && (n = "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (Hf[n] || n) + ", which does not match required type " + (Hf[h] || h) + ".");
                }
            }
        };

    function If(a) { return "" + a }

    function Jf(a, b) { var c = []; return c };
    var Kf = function(a, b) {
            var c = new jb(a, function() { for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = z(this, d[e]); return b.apply(this, d) });
            c.Gb();
            return c
        },
        Lf = function(a, b) {
            var c = new nb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ga(e) ? c.set(d, Kf(a + "_" + d, e)) : (Ja(e) || Ha(e) || "boolean" == typeof e) && c.set(d, e)
                }
            c.Gb();
            return c
        };
    var Mf = function(a, b) {
        L(F(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new nb;
        return d = Lf("AssertApiSubject", c)
    };
    var Nf = function(a, b) {
        L(F(this), ["actual:?*", "message:?string"], arguments);
        var c = {},
            d = new nb;
        return d = Lf("AssertThatSubject", c)
    };

    function Of(a) { return function() { for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(Dc(arguments[d], c)); return Cc(a.apply(null, b)) } }
    var Qf = function() {
        for (var a = Math, b = Pf, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Of(a[e].bind(a)))
        }
        return c
    };
    var Rf = function(a) { var b; return b };
    var Sf = function(a) { var b; return b };
    var Tf = function(a) { return encodeURI(a) };
    var Uf = function(a) { return encodeURIComponent(a) };
    var Vf = function(a) { L(F(this), ["message:?string"], arguments); };
    var Wf = function(a, b) { L(F(this), ["min:!number", "max:!number"], arguments); return Na(a, b) };
    var M = function(a, b, c) {
        var d = a.g.g;
        if (!d) throw Error("Missing program state.");
        d.Wi.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Xf = function() {
        M(this, "read_container_data");
        var a = new nb;
        a.set("containerId", 'G-XV614N2RLR');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", ef);
        a.set("previewMode", gf);
        a.set("environmentMode", ff);
        a.Gb();
        return a
    };
    var Yf = {};
    Yf.sstECEnableData = !0;
    Yf.enableAdsEc = !0;
    Yf.sstFFConversionEnabled = !0;
    Yf.sstEnableAuid = !0;
    Yf.enableGbraidUpdate = !0;
    Yf.enable1pScripts = !0;
    Yf.enableGlobalEventDeveloperIds = !1;
    Yf.enableGa4OnoRemarketing = !1;
    Yf.omitAuidIfWbraidPresent = !1;
    Yf.sstEnableDclid = !0;
    Yf.reconcileCampaignFields = !1;
    Yf.enableEmFormCcd = !1;
    Yf.enableEmFormCcdPart2 = !1;
    Yf.requireGtagUserDataTos = !0;

    function Zf() { return Cc(Yf) };
    var $f = function() { return (new Date).getTime() };
    var ag = function(a) { if (null === a) return "null"; if (a instanceof xa) return "array"; if (a instanceof jb) return "function"; if (a instanceof uc) { a = a.Xa; if (void 0 === a.constructor || void 0 === a.constructor.name) { var b = String(a); return b.substring(8, b.length - 1) } return String(a.constructor.name) } return typeof a };
    var bg = function(a) {
        function b(c) {
            return function(d) {
                try { return c(d) } catch (e) {
                    (ef || gf) && a.call(this, e.message)
                }
            }
        }
        return { parse: b(function(c) { return Cc(JSON.parse(c)) }), stringify: b(function(c) { return JSON.stringify(Dc(c)) }) }
    };
    var cg = function(a) { return Ta(Dc(a, this.g)) };
    var dg = function(a) { return Number(Dc(a, this.g)) };
    var eg = function(a) { return null === a ? "null" : void 0 === a ? "undefined" : a.toString() };
    var fg = function(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var Pf = "floor ceil round max min abs pow sqrt".split(" ");
    var gg = function() { var a = {}; return { rj: function(b) { return a.hasOwnProperty(b) ? a[b] : void 0 }, qk: function(b, c) { a[b] = c }, reset: function() { a = {} } } },
        hg = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return jb.prototype.g.apply(a, c)
            }
        },
        ig = function(a, b) { L(F(this), ["apiName:!string", "mock:?*"], arguments); };
    var jg = {};
    jg.keys = function(a) { return new xa };
    jg.values = function(a) { return new xa };
    jg.entries = function(a) { return new xa };
    jg.freeze = function(a) { return a };
    jg.delete = function(a, b) { return !1 };
    var lg = function() {
        this.g = {};
        this.o = {};
    };
    lg.prototype.get = function(a, b) { var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0; return c };
    lg.prototype.add = function(a, b, c) {
        if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.o.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Ga(b) ? Kf(a, b) : Lf(a, b)
    };
    var ng = function(a, b, c) {
        if (a.o.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.o[b] = Ga(c) ? Kf(b, c) : Lf(b, c)
    };

    function mg(a, b) { var c = void 0; return c };

    function og() { var a = {}; return a };
    var S = {
        cc: "_ee",
        Kc: "_syn_or_mod",
        Fk: "_uei",
        Ic: "_eu",
        Ck: "_pci",
        $b: "event_callback",
        yd: "event_timeout",
        Ba: "gtag.config",
        Ta: "gtag.get",
        za: "purchase",
        Wb: "refund",
        Ab: "begin_checkout",
        Tb: "add_to_cart",
        Ub: "remove_from_cart",
        Yh: "view_cart",
        Yf: "add_to_wishlist",
        Aa: "view_item",
        Vb: "view_promotion",
        ue: "select_promotion",
        te: "select_item",
        Bb: "view_item_list",
        Xf: "add_payment_info",
        Xh: "add_shipping_info",
        Va: "value_key",
        jb: "value_callback",
        X: "allow_ad_personalization_signals",
        Ec: "restricted_data_processing",
        yc: "allow_google_signals",
        va: "cookie_expires",
        Yb: "cookie_update",
        Fc: "session_duration",
        Cd: "session_engaged_time",
        Ka: "user_properties",
        wa: "transport_url",
        W: "ads_data_redaction",
        Da: "user_data",
        Bc: "first_party_collection",
        D: "ad_storage",
        M: "analytics_storage",
        oe: "region",
        Rf: "wait_for_update",
        sa: "conversion_linker",
        Ia: "conversion_cookie_prefix",
        ka: "value",
        ja: "currency",
        xg: "trip_type",
        da: "items",
        mg: "passengers",
        xe: "allow_custom_scripts",
        Gc: "session_id",
        rg: "quantity",
        ob: "transaction_id",
        lb: "language",
        wd: "country",
        vd: "allow_enhanced_conversions",
        Ce: "aw_merchant_id",
        Ae: "aw_feed_country",
        Be: "aw_feed_language",
        ze: "discount",
        aa: "developer_id",
        Dd: "delivery_postal_code",
        Ie: "estimated_delivery_date",
        Ge: "shipping",
        Pe: "new_customer",
        De: "customer_lifetime_value",
        He: "enhanced_conversions",
        xc: "page_view",
        na: "linker",
        P: "domains",
        bc: "decorate_forms",
        ig: "enhanced_conversions_automatic_settings",
        ei: "auto_detection_enabled",
        jg: "ga_temp_client_id",
        ve: "user_engagement",
        Sh: "app_remove",
        Th: "app_store_refund",
        Uh: "app_store_subscription_cancel",
        Vh: "app_store_subscription_convert",
        Wh: "app_store_subscription_renew",
        Zh: "first_open",
        $h: "first_visit",
        ai: "in_app_purchase",
        bi: "session_start",
        ci: "allow_display_features",
        zc: "campaign",
        Zf: "campaign_content",
        $f: "campaign_id",
        ag: "campaign_medium",
        bg: "campaign_name",
        cg: "campaign_source",
        dg: "campaign_term",
        hb: "client_id",
        ma: "cookie_domain",
        Xb: "cookie_name",
        ib: "cookie_path",
        Ja: "cookie_flags",
        Ac: "custom_map",
        Le: "groups",
        lg: "non_interaction",
        nb: "page_location",
        Qe: "page_path",
        Wa: "page_referrer",
        Dc: "page_title",
        oa: "send_page_view",
        Db: "send_to",
        Re: "session_engaged",
        Oe: "_logged_in_state",
        Se: "session_number",
        yi: "tracking_id",
        pb: "url_passthrough",
        ac: "accept_incoming",
        Cc: "url_position",
        pg: "phone_conversion_number",
        ng: "phone_conversion_callback",
        og: "phone_conversion_css_class",
        qg: "phone_conversion_options",
        ri: "phone_conversion_ids",
        oi: "phone_conversion_country_code",
        Ua: "aw_remarketing",
        ye: "aw_remarketing_only",
        we: "gclid",
        di: "auid",
        ji: "affiliation",
        hg: "tax",
        Fe: "list_name",
        gg: "checkout_step",
        fg: "checkout_option",
        ki: "coupon",
        li: "promotions",
        qb: "user_id",
        wi: "retoken",
        Ca: "cookie_prefix",
        eg: "disable_merchant_reported_purchases",
        ii: "dc_natural_search",
        hi: "dc_custom_params",
        kg: "method",
        xi: "search_term",
        gi: "content_type",
        ni: "optimize_id",
        mi: "experiments",
        kb: "google_signals"
    };
    S.Ad = "google_tld";
    S.Ed = "update";
    S.Je = "firebase_id";
    S.Ke = "ga_restrict_domain";
    S.xd = "event_settings";
    S.Ee = "dynamic_event_settings";
    S.Hc = "user_data_settings";
    S.sg = "screen_name";
    S.ug = "screen_resolution";
    S.Cb = "_x_19";
    S.Zb = "_ecid";
    S.zd = "_x_20";
    S.Ne = "internal_traffic_results";
    S.wg = "traffic_type";
    S.Bd = "referral_exclusion_definition";
    S.Me = "ignore_referrer";
    S.fi = "content_group";
    S.ia = "allow_interest_groups";
    var pg = {};
    S.zi = Object.freeze((pg[S.X] = 1, pg[S.vd] = 1, pg[S.yc] = 1, pg[S.da] = 1, pg[S.ma] = 1, pg[S.va] = 1, pg[S.Ja] = 1, pg[S.Xb] = 1, pg[S.ib] = 1, pg[S.Ca] = 1, pg[S.Yb] = 1, pg[S.Ac] = 1, pg[S.aa] = 1, pg[S.Ee] = 1, pg[S.$b] = 1, pg[S.xd] = 1, pg[S.yd] = 1, pg[S.Bc] = 1, pg[S.Ke] = 1, pg[S.kb] = 1, pg[S.Ad] = 1, pg[S.Le] = 1, pg[S.Ne] = 1, pg[S.na] = 1, pg[S.Bd] = 1, pg[S.Ec] = 1, pg[S.oa] = 1, pg[S.Db] = 1, pg[S.Fc] = 1, pg[S.Cd] = 1, pg[S.Dd] = 1, pg[S.wa] = 1, pg[S.Ed] = 1, pg[S.Hc] = 1, pg[S.Ka] = 1, pg[S.Ic] = 1, pg));
    S.yg = Object.freeze([S.nb, S.Wa, S.Dc, S.lb, S.sg, S.qb, S.Je, S.fi]);
    var qg = {};
    S.Bi = Object.freeze((qg[S.Sh] = 1, qg[S.Th] = 1, qg[S.Uh] = 1, qg[S.Vh] = 1, qg[S.Wh] = 1, qg[S.Zh] = 1, qg[S.$h] = 1, qg[S.ai] = 1, qg[S.bi] = 1, qg[S.ve] = 1, qg));
    var rg = {};
    S.zg = Object.freeze((rg[S.Xf] = 1, rg[S.Xh] = 1, rg[S.Tb] = 1, rg[S.Ub] = 1, rg[S.Yh] = 1, rg[S.Ab] = 1, rg[S.te] = 1, rg[S.Bb] = 1, rg[S.ue] = 1, rg[S.Vb] = 1, rg[S.za] = 1, rg[S.Wb] = 1, rg[S.Aa] = 1, rg[S.Yf] = 1, rg));
    S.Ue = Object.freeze([S.X, S.yc, S.Yb]);
    S.Ki = Object.freeze([].concat(S.Ue));
    S.Ve = Object.freeze([S.va, S.yd, S.Fc, S.Cd]);
    S.Li = Object.freeze([].concat(S.Ve));
    var sg = {};
    S.pe = (sg[S.D] = "1", sg[S.M] = "2", sg);
    var ug = {},
        vg = function(a, b) {
            ug[a] = ug[a] || [];
            ug[a][b] = !0
        },
        wg = function(a) { for (var b = [], c = ug[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") },
        xg = function() { for (var a = [], b = ug.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c); return 0 < a.length ? a : void 0 };
    var yg = function(a) { vg("GTM", a) };
    var zg = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Bg = function() {
        var a = Ag,
            b = "uf";
        if (a.uf && a.hasOwnProperty(b)) return a.uf;
        var c = new a;
        a.uf = c;
        a.hasOwnProperty(b);
        return c
    };
    var Ag = function() {
        var a = {};
        this.g = function() {
            var b = zg.g,
                c = zg.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function() { a[zg.g] = !0 }
    };
    var Cg = [];

    function Dg() {
        var a = Tb("google_tag_data", {});
        a.ics || (a.ics = { entries: {}, set: Eg, update: Fg, addListener: Gg, notifyListeners: Hg, active: !1, usedDefault: !1, usedUpdate: !1, accessedDefault: !1, accessedAny: !1, wasSetLate: !1 });
        return a.ics
    }

    function Eg(a, b, c, d, e, f) {
        var g = Dg();
        !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                k = h[a] || {},
                n = k.region,
                p = c && Ha(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === k.update),
                    t = { region: p, initial: "granted" === b, update: k.update, quiet: q };
                if ("" !== d || !1 !== k.initial) h[a] = t;
                q && m.setTimeout(function() {
                    h[a] ===
                        t && t.quiet && (t.quiet = !1, Ig(a), Hg(), vg("TAGGING", 2))
                }, f)
            }
        }
    }

    function Fg(a, b) {
        var c = Dg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Jg(a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Jg(a);
            f.quiet ? (f.quiet = !1, Ig(a)) : g !== d && Ig(a)
        }
    }

    function Gg(a, b) { Cg.push({ kf: a, mj: b }) }

    function Ig(a) {
        for (var b = 0; b < Cg.length; ++b) {
            var c = Cg[b];
            Ka(c.kf) && -1 !== c.kf.indexOf(a) && (c.th = !0)
        }
    }

    function Hg(a) { for (var b = 0; b < Cg.length; ++b) { var c = Cg[b]; if (c.th) { c.th = !1; try { c.mj({ consentEventId: a }) } catch (d) {} } } }
    var Jg = function(a) {
            var b = Dg();
            b.accessedAny = !0;
            var c = b.entries[a] || {};
            return void 0 !== c.update ? c.update : c.initial
        },
        Kg = function(a) {
            var b = Dg();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        Lg = function(a) {
            var b = Dg();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Mg = function() {
            if (!Bg().g()) return !1;
            var a = Dg();
            a.accessedAny = !0;
            return a.active
        },
        Ng = function() {
            var a = Dg();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Og = function(a, b) { Dg().addListener(a, b) },
        Pg = function(a) { Dg().notifyListeners(a) },
        Qg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Lg(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Og(b, function(e) { d || c() || (d = !0, a(e)) })
            } else a({})
        },
        Rg = function(a, b) {
            function c() { for (var f = [], g = 0; g < d.length; g++) { var h = d[g];!1 === Jg(h) || e[h] || (f.push(h), e[h] = !0) } return f }
            var d = Ha(b) ? [b] : b,
                e = {};
            c().length !== d.length && Og(d, function(f) {
                var g = c();
                0 < g.length && (f.kf = g, a(f))
            })
        };

    function Sg() {}

    function Tg() {};

    function Ug(a) {
        for (var b = [], c = 0; c < Vg.length; c++) {
            var d = a(Vg[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Vg = [S.D, S.M],
        Wg = function(a) {
            var b = a[S.oe];
            b && yg(40);
            var c = a[S.Rf];
            c && yg(41);
            for (var d = Ka(b) ? b : [b], e = { sc: 0 }; e.sc < d.length; e = { sc: e.sc }, ++e.sc) Qa(a, function(f) {
                return function(g, h) {
                    if (g !== S.oe && g !== S.Rf) {
                        var k = d[f.sc];
                        Dg().set(g, h, k, "US", "US-MO", c)
                    }
                }
            }(e))
        },
        Xg = 0,
        Yg = function(a, b) {
            Qa(a, function(e, f) { Dg().update(e, f) });
            Pg(b);
            var c = Ya(),
                d = c - Xg;
            Xg && 0 <= d && 1E3 > d && yg(66);
            Xg = c
        },
        Zg = function(a) { var b = Jg(a); return void 0 != b ? b : !0 },
        $g = function() { return "G1" + Ug(Jg) },
        ah = function() {
            return "G1" +
                Ug(Kg)
        },
        bh = function(a, b) { Og(a, b) },
        ch = function(a, b) { Rg(a, b) },
        dh = function(a, b) { Qg(a, b) };
    var fh = function(a) { return eh ? H.querySelectorAll(a) : null },
        gh = function(a, b) {
            if (!eh) return null;
            if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!H.documentElement.contains(d)) return null;
            do {
                try { if (c.call(d, b)) return d } catch (e) { break }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        hh = !1;
    if (H.querySelectorAll) try {
        var ih = H.querySelectorAll(":root");
        ih && 1 == ih.length && ih[0] == H.documentElement && (hh = !0)
    } catch (a) {}
    var eh = hh;
    var jh = function(a) { return null == a ? "" : Ha(a) ? Wa(String(a)) : "e0" },
        lh = function(a) { return a.replace(kh, "") },
        nh = function(a) { return mh(a.replace(/\s/g, "")) },
        mh = function(a) { return Wa(a.replace(oh, "").toLowerCase()) },
        qh = function(a) { a = a.replace(/[\s-()/.]/g, ""); "+" !== a.charAt(0) && (a = "+" + a); return ph.test(a) ? a : "e0" },
        xh = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (wh.test(c)) return c
            }
            return "e0"
        },
        Ah = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) { return c.value && -1 !== yh.indexOf(c.name) ? zh(c.value).then(function(d) { c.value = d }) : Promise.resolve() })).then(function() { b(a) }).catch(function() { b([]) })
        },
        zh = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (m.crypto && m.crypto.subtle) try {
                var b = Bh(a);
                return m.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) { return String.fromCharCode(e) }).join("");
                    return m.btoa(d).replace(/\+/g, "-").replace(/\//g,
                        "_").replace(/=+$/, "")
                }).catch(function() { return "e2" })
            } catch (c) { return Promise.resolve("e2") } else return Promise.resolve("e1")
        },
        Bh = function(a) {
            var b;
            if (m.TextEncoder) b = (new m.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        oh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        wh = /^\S+@\S+\.\S+$/,
        ph = /^\+\d{11,15}$/,
        kh = /[.~]/g,
        Ch = {},
        Dh = (Ch.email = "em", Ch.phone_number = "pn", Ch.first_name = "fn", Ch.last_name = "ln", Ch.street = "sa", Ch.city = "ct", Ch.region = "rg", Ch.country = "co", Ch.postal_code = "pc", Ch.error_code = "ec", Ch),
        Eh = function(a, b) {
            function c(n, p, q) {
                var t = n[p];
                Ka(t) || (t = [t]);
                for (var u = 0; u < t.length; ++u) { var r = jh(t[u]); "" !== r && f.push({ name: p, value: q(r), index: void 0 }) }
            }

            function d(n, p, q, t) { var u = jh(n[p]); "" !== u && f.push({ name: p, value: q(u), index: t }) }

            function e(n) { return function(p) { yg(64); return n(p) } }
            var f = [];
            if ("https:" === m.location.protocol) {
                c(a, "email", xh);
                c(a, "phone_number", qh);
                c(a, "first_name", e(nh));
                c(a, "last_name", e(nh));
                var g = a.home_address || {};
                c(g, "street", e(mh));
                c(g, "city", e(mh));
                c(g, "postal_code", e(lh));
                c(g, "region", e(mh));
                c(g, "country", e(lh));
                var h = a.address || {};
                Ka(h) || (h = [h]);
                for (var k = 0; k < h.length; k++) d(h[k], "first_name", nh, k), d(h[k], "last_name", nh, k), d(h[k], "street", mh, k), d(h[k], "city", mh, k), d(h[k], "postal_code", lh, k), d(h[k],
                    "region", mh, k), d(h[k], "country", lh, k);
                Ah(f, b)
            } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f)
        },
        Fh = function(a, b) {
            Eh(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        k = c[f].index,
                        n = Dh[g];
                    n && h && (-1 === yh.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Gh = function(a) {
            if (m.Promise) try {
                return new Promise(function(b) {
                    Fh(a,
                        function(c, d) { b({ fd: c, Ik: d }) })
                })
            } catch (b) {}
        },
        yh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Hh = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1
        },
        Ih = function(a) {
            var b = new Hh;
            b.eventModel = a;
            return b
        },
        Jh = function(a, b) { a.targetConfig = b; return a },
        Kh = function(a, b) { a.containerConfig = b; return a },
        Lh = function(a, b) { a.globalConfig = b; return a },
        Mh = function(a,
            b) { a.remoteConfig = b; return a },
        Nh = function(a, b) { a.onSuccess = b; return a },
        Oh = function(a, b) { a.setContainerTypeLoaded = b; return a },
        Ph = function(a, b) { a.getContainerTypeLoaded = b; return a },
        Qh = function(a, b) { a.onFailure = b; return a };
    Hh.prototype.getWithConfig = function(a) { if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]; if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a] };
    var Rh = function(a) {
            function b(d) { for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1 }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c)
        },
        Sh = function(a, b, c) {
            function d(g) {
                Ac(g) && Qa(g, function(h, k) {
                    f = !0;
                    e[h] = k
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.remoteConfig[b]), d(a.globalConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
            c && 2 !== c || d(a.eventModel[b]);
            return f ? e : void 0
        },
        Th = function(a) {
            var b = [S.zc, S.Zf, S.$f, S.ag, S.bg, S.cg, S.dg],
                c = {},
                d = !1,
                e = function(f) {
                    for (var g =
                            0; g < b.length; g++) void 0 !== f[b[g]] && (c[b[g]] = f[b[g]], d = !0);
                    return d
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig)) return c;
            e(a.remoteConfig);
            return c
        },
        Uh = function(a) {
            var b = [],
                c;
            for (c in a.eventModel) c !== S.cc && a.eventModel.hasOwnProperty(c) && void 0 !== a.eventModel[c] && b.push(c);
            return b
        };
    var J = {},
        Vh = m.google_tag_manager = m.google_tag_manager || {},
        Wh = Math.random();
    J.J = "G-XV614N2RLR";
    J.Kd = "220";
    J.Z = "dataLayer";
    J.Rh = "ChAIgKODkAYQrefBpdLs5d4WEiUAEjO8RVxhY6xAivPaTj0UlMKs1EEgsyNO/twpcyKBBrk2/rSoGgKxQw\x3d\x3d";
    var Xh = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 },
        Yh = { __paused: !0, __tg: !0 },
        Zh;
    for (Zh in Xh) Xh.hasOwnProperty(Zh) && (Yh[Zh] = !0);
    J.qe = "www.googletagmanager.com";
    var $h, ai = J.qe + "/gtm.js";
    ai = J.qe + "/gtag/js";
    $h = ai;
    var bi = Ua(""),
        ci = null,
        di = null,
        ei = "https://www.googletagmanager.com/a?id=" + J.J + "&cv=1",
        fi = {},
        gi = {},
        hi = function() {
            var a = Vh.sequence || 1;
            Vh.sequence = a + 1;
            return a
        };
    J.Qh = "";
    var ii = "";
    J.Ld = ii;
    var ji = new Oa,
        ki = {},
        li = {},
        oi = {
            name: J.Z,
            set: function(a, b) {
                Bc(fb(a, b), ki);
                mi()
            },
            get: function(a) { return ni(a, 2) },
            reset: function() {
                ji = new Oa;
                ki = {};
                mi()
            }
        },
        ni = function(a, b) { return 2 != b ? ji.get(a) : pi(a) },
        pi = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = ki, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        qi = function(a, b) { li.hasOwnProperty(a) || (ji.set(a, b), Bc(fb(a, b), ki), mi()) },
        ri = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = ni(c, 1);
                if (Ka(d) || Ac(d)) d = Bc(d);
                li[c] = d
            }
        },
        mi = function(a) {
            Qa(li, function(b, c) {
                ji.set(b, c);
                Bc(fb(b, void 0), ki);
                Bc(fb(b, c), ki);
                a && delete li[b]
            })
        },
        si = function(a, b) { var c, d = 1 !== (void 0 === b ? 2 : b) ? pi(a) : ji.get(a); "array" === yc(d) || "object" === yc(d) ? c = Bc(d) : c = d; return c };
    var ti, ui = !1;

    function vi() {
        ui = !0;
        ti = ti || {}
    }
    var wi = function(a) { ui || vi(); return ti[a] };
    var xi = function(a) {
        if (H.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
        var c = m.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d,
                null))
        }
        return !1
    };
    var yi = function() {
            var a = H.body,
                b = H.documentElement || a && a.parentElement,
                c, d;
            if (H.compatMode && "BackCompat" !== H.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) { return f && g ? Math.min(f, g) : Math.max(f, g) };
                yg(7);
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return { width: d, height: c }
        },
        zi = function(a) {
            var b = yi(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var Gi = /:[0-9]+$/,
        Hi = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var k = h.slice(1).join("=");
                    if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                    e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        Ki = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Ii(a.protocol) || Ii(m.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                m.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(Gi, "").toLowerCase());
            return Ji(a, b, c, d, e)
        },
        Ji = function(a, b, c, d, e) {
            var f, g = Ii(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Li(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Gi, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ==
                        g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || vg("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Hi(f, e, !1, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Ii = function(a) {
            return a ?
                a.replace(":", "").toLowerCase() : ""
        },
        Li = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Mi = function(a) {
            var b = H.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || vg("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Gi, "");
            return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port }
        },
        Ni = function(a) {
            function b(n) { var p = n.split("=")[0]; return 0 > d.indexOf(p) ? n : p + "=0" }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !=
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Mi(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var k = "" + f + g + h;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var Oi = {};
    var Ri = function(a) {
            if (0 == a.length) return null;
            var b;
            b = Pi(a, function(c) { return !Qi.test(c.Qa) });
            b = Pi(b, function(c) { return "INPUT" === c.element.tagName.toUpperCase() });
            b = Pi(b, function(c) { return !xi(c.element) });
            return b[0]
        },
        Pi = function(a, b) { if (1 >= a.length) return a; var c = a.filter(b); return 0 == c.length ? a : c },
        Si = function(a) {
            var b;
            if (a === H.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e =
                                            g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = Si(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        Ti = !0,
        Ui = !1;
    Oi.Nh = "true";
    var Vi = function(a) {
            if ("false" === Oi.Nh || !Ti) return !1;
            if (Ui) return !0;
            var b = wi("AW-" +
                a);
            return !!b && !!b.preAutoPii
        },
        Wi = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        Xi = new RegExp(/@(gmail|googlemail)\./i),
        Qi = new RegExp(/support|noreply/i),
        Yi = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        Zi = ["BR"],
        $i = {},
        aj = function(a) {
            a = a || { de: !0, ee: !0 };
            a.sb = a.sb || { email: !0, phone: !0, Qg: !0 };
            var b, c = a,
                d = !!c.de + "." + !!c.ee;
            c && c.Vc && c.Vc.length && (d += "." + c.Vc.join("."));
            c && c.sb && (d += "." + c.sb.email + "." + c.sb.phone + "." + c.sb.Qg);
            b = d;
            var e = $i[b];
            if (e && 200 > Ya() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = H.body;
            if (h) {
                for (var k = h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                    var p = k[n];
                    if (!(0 <= Yi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, t = 0; t < p.childElementCount && 1E4 > t; t++)
                            if (!(0 <= Zi.indexOf(p.children[t].tagName.toUpperCase()))) { q = !0; break }
                        q || g.push(p)
                    }
                }
                f = { elements: g, status: 1E4 < k.length ? "2" : "1" }
            } else f = { elements: g, status: "4" };
            var u = f,
                r = u.status,
                v;
            if (a.sb && a.sb.email) {
                for (var w = u.elements, y = [], x = 0; x < w.length; x++) {
                    var A = w[x],
                        B = A.textContent;
                    "INPUT" === A.tagName.toUpperCase() &&
                        A.value && (B = A.value);
                    if (B) {
                        var C = B.match(Wi);
                        if (C) {
                            var D = C[0],
                                E;
                            if (m.location) {
                                var G = Ji(m.location, "host", !0);
                                E = 0 <= D.toLowerCase().indexOf(G)
                            } else E = !1;
                            E || y.push({ element: A, Qa: D })
                        }
                    }
                }
                var T;
                var N = a && a.Vc;
                if (N && 0 !== N.length) {
                    for (var K = [], P = 0; P < y.length; P++) {
                        for (var R = !0, O = 0; O < N.length; O++) { var W = N[O]; if (W && gh(y[P].element, W)) { R = !1; break } }
                        R && K.push(y[P])
                    }
                    T = K
                } else T = y;
                v = Ri(T);
                10 < y.length && (r = "3")
            }
            var ja = [];
            if (v) {
                var U = v.element,
                    Aa = { Qa: v.Qa, tagName: U.tagName, type: 1 };
                a.de && (Aa.querySelector = Si(U));
                a.ee &&
                    (Aa.isVisible = !xi(U));
                ja.push(Aa)
            }
            var Ia = { elements: ja, status: r };
            $i[b] = { timestamp: Ya(), result: Ia };
            return Ia
        },
        bj = function(a) { return a.tagName + ":" + a.isVisible + ":" + a.Qa.length + ":" + Xi.test(a.Qa) };
    var cj = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), h = 0; h < g.length; h++) {
                        var k = g[h].trim();
                        if (k) {
                            if (0 === k.indexOf("dataLayer.")) f = ni(k.substring(10));
                            else {
                                var n = k.split(".");
                                f = m[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && eh) {
                    var q = fh(e);
                    q && 0 < q.length && (f = gc(q[0]) || Wa(q[0].value))
                }
                f && (a[b] = f)
            }
        },
        dj = function(a) {
            if (a) {
                var b = {};
                cj(b, "email",
                    a.email);
                cj(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    cj(e, "first_name", c[d].first_name);
                    cj(e, "last_name", c[d].last_name);
                    cj(e, "street", c[d].street);
                    cj(e, "city", c[d].city);
                    cj(e, "region", c[d].region);
                    cj(e, "country", c[d].country);
                    cj(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        ej = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return dj(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = aj({
                                de: !1,
                                ee: !1,
                                Vc: c.exclude_element_selectors,
                                sb: { email: !!c.email, phone: !!c.phone, Qg: !!c.address }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) { var g = d[f]; if (1 === g.type) { e.email = g.Qa; break } }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        fj = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : m.enhanced_conversion_data;
                case "automatic":
                    return dj(a[S.ig])
            }
        };
    var gj = {},
        hj = function(a, b) {
            if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
            void 0 === gj[a] && (gj[a] = Math.floor(Math.random() * b));
            return gj[a]
        };
    var ij = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
    var jj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };

    function kj(a) { return "null" !== a.origin };
    var nj = function(a, b, c, d) { return lj(d) ? jj(a, String(b || mj()), c) : [] },
        qj = function(a, b, c, d, e) {
            if (lj(e)) {
                var f = oj(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = pj(f, function(g) { return g.Ud }, b);
                    if (1 === f.length) return f[0].id;
                    f = pj(f, function(g) { return g.gd }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function rj(a, b, c, d) {
        var e = mj(),
            f = window;
        kj(f) && (f.document.cookie = a);
        var g = mj();
        return e != g || void 0 != c && 0 <= nj(b, g, !1, d).indexOf(c)
    }
    var vj = function(a, b, c, d) {
            function e(w, y, x) {
                if (null == x) return delete h[y], w;
                h[y] = x;
                return w + "; " + y + "=" + x
            }

            function f(w, y) {
                if (null == y) return delete h[y], w;
                h[y] = !0;
                return w + "; " + y
            }
            if (!lj(c.cb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = sj(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            g = e(g, "expires", k);
            g = e(g, "max-age", c.Nj);
            g = e(g, "samesite",
                c.gk);
            c.ik && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = tj(), q = void 0, t = !1, u = 0; u < p.length; ++u) {
                    var r = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", r);
                    v = f(v, c.flags);
                    try { d && d(a, h) } catch (w) { q = w; continue }
                    t = !0;
                    if (!uj(r, c.path) && rj(v, a, b, c.cb)) return 0
                }
                if (q && !t) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return uj(n, c.path) ? 1 : rj(g, a, b, c.cb) ? 0 : 1
        },
        wj = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return vj(a,
                b, c)
        };

    function pj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                k = b(h);
            k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function oj(a, b, c) {
        for (var d = [], e = nj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({ id: g.join("."), Ud: 1 * k[0] || 1, gd: 1 * k[1] || 1 }))
            }
        }
        return d
    }
    var sj = function(a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a },
        xj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        yj = /(^|\.)doubleclick\.net$/i,
        uj = function(a, b) { return yj.test(window.document.location.hostname) || "/" === b && xj.test(a) },
        mj = function() { return kj(window) ? window.document.cookie : "" },
        tj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            yj.test(e) || xj.test(e) || a.push("none");
            return a
        },
        lj = function(a) { if (!Bg().g() || !a || !Mg()) return !0; if (!Lg(a)) return !1; var b = Jg(a); return null == b ? !0 : !!b };
    var zj = function(a) { var b = Math.round(2147483647 * Math.random()); return a ? String(b ^ ij(a) & 2147483647) : String(b) },
        Aj = function(a) { return [zj(a), Math.round(Ya() / 1E3)].join(".") },
        Dj = function(a, b, c, d, e) { var f = Bj(b); return qj(a, f, Cj(c), d, e) },
        Ej = function(a, b, c, d) {
            var e = "" + Bj(c),
                f = Cj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Bj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Cj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function Fj(a, b, c) {
        var d, e = Number(null != a.Nb ? a.Nb : void 0);
        0 !== e && (d = new Date((b || Ya()) + 1E3 * (e || 7776E3)));
        return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d }
    };
    var Gj = ["1"],
        Hj = {},
        Ij = {},
        Mj = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Jj(a.prefix);
            if (!Hj[c] && !Kj(c, a.path, a.domain) && b) {
                var d = Jj(a.prefix),
                    e = Aj();
                if (0 === Lj(d, e, a)) {
                    var f = Tb("google_tag_data", {});
                    f._gcl_au ? vg("GTM", 57) : f._gcl_au = e
                }
                Kj(c, a.path, a.domain)
            }
        };

    function Lj(a, b, c, d) {
        var e = Ej(b, "1", c.domain, c.path),
            f = Fj(c, d);
        f.cb = "ad_storage";
        return wj(a, e, f)
    }

    function Kj(a, b, c) {
        var d = Dj(a, b, c, Gj, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (Hj[a] = e.slice(0, 2).join("."), Ij[a] = { id: e.slice(2, 4).join("."), lh: Number(e[4]) || 0 }) : 3 === e.length ? Ij[a] = { id: e.slice(0, 2).join("."), lh: Number(e[2]) || 0 } : Hj[a] = d;
        return !0
    }

    function Jj(a) { return (a || "_gcl") + "_au" };
    var Nj = function(a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({ Nf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 })
        }
        b.sort(function(g, h) { return h.timestamp - g.timestamp });
        return b
    };

    function Oj(a, b) {
        var c = Nj(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Nf] || (d[c[e].Nf] = []);
                var g = { version: f[0], timestamp: 1E3 * Number(f[1]), xa: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Nf].push(g)
            }
        }
        return d
    };

    function Pj() { for (var a = Qj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c; return b }

    function Rj() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Qj, Sj;

    function Tj(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Sj[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        Qj = Qj || Rj();
        Sj = Sj || Pj();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var Uj;
    var Yj = function() {
            var a = Vj,
                b = Wj,
                c = Xj(),
                d = function(g) { a(g.target || g.srcElement || {}) },
                e = function(g) { b(g.target || g.srcElement || {}) };
            if (!c.init) {
                dc(H, "mousedown", d);
                dc(H, "keyup", d);
                dc(H, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Zj = function(a, b, c, d, e) {
            var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
            Xj().decorators.push(f)
        },
        ak = function(a, b, c) {
            for (var d = Xj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var k = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (k && (p || n !== H.location.hostname))
                        for (var q = 0; q < k.length; q++)
                            if (k[q] instanceof RegExp) { if (k[q].test(n)) { h = !0; break a } } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) { h = !0; break a }
                    h = !1
                }
                if (h) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && bb(e, g.callback())
                }
            }
            return e
        };

    function Xj() {
        var a = Tb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = { decorators: [] }, a.gl = b);
        return b
    };
    var bk = /(.*?)\*(.*?)\*(.*)/,
        ck = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        dk = /^(?:www\.|m\.|amp\.)+/,
        ek = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function fk(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
    var hk = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g, h = String(d);
                    Qj = Qj || Rj();
                    Sj = Sj || Pj();
                    for (var k = [], n = 0; n < h.length; n += 3) {
                        var p = n + 1 < h.length,
                            q = n + 2 < h.length,
                            t = h.charCodeAt(n),
                            u = p ? h.charCodeAt(n + 1) : 0,
                            r = q ? h.charCodeAt(n + 2) : 0,
                            v = t >> 2,
                            w = (t & 3) << 4 | u >> 4,
                            y = (u & 15) << 2 | r >> 6,
                            x = r & 63;
                        q || (x = 64, p || (y = 64));
                        k.push(Qj[v], Qj[w], Qj[y], Qj[x])
                    }
                    g = k.join("");
                    f.call(e, g)
                }
            }
        var A = b.join("*");
        return ["1", gk(A),
            A
        ].join("*")
    };

    function gk(a, b) {
        var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Rb.userLanguage || Rb.language, Math.floor(Ya() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Uj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Uj = d;
        for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ Uj[(k ^ c.charCodeAt(n)) & 255];
        return ((k ^ -1) >>> 0).toString(36)
    }

    function ik() {
        return function(a) {
            var b = Mi(m.location.href),
                c = b.search.replace("?", ""),
                d = Hi(c, "_gl", !1, !0) || "";
            a.query = jk(d) || {};
            var e = Ki(b, "fragment").match(fk("_gl"));
            a.fragment = jk(e && e[3] || "") || {}
        }
    }
    var kk = function(a) {
            var b = ik(),
                c = Xj();
            c.data || (c.data = { query: {}, fragment: {} }, b(c.data));
            var d = {},
                e = c.data;
            e && (bb(d, e.query), a && bb(d, e.fragment));
            return d
        },
        jk = function(a) {
            try {
                var b;
                a: {
                    if (a) {
                        var c;
                        b: {
                            for (var d = a, e = 0; 3 > e; ++e) {
                                var f = bk.exec(d);
                                if (f) { c = f; break b }
                                d = decodeURIComponent(d)
                            }
                            c = void 0
                        }
                        var g = c;
                        if (g && "1" === g[1]) {
                            var h = g[3],
                                k;
                            b: {
                                for (var n = g[2], p = 0; 3 > p; ++p)
                                    if (n === gk(h, p)) { k = !0; break b }
                                k = !1
                            }
                            if (k) { b = h; break a }
                            vg("TAGGING", 7)
                        }
                    }
                    b = void 0
                }
                var q = b;
                if (void 0 !== q) {
                    for (var t = {}, u = q ? q.split("*") : [], r = 0; r + 1 <
                        u.length; r += 2) {
                        var v = u[r],
                            w = Tj(u[r + 1]);
                        t[v] = w
                    }
                    vg("TAGGING", 6);
                    return t
                }
            } catch (y) { vg("TAGGING", 8) }
        };

    function lk(a, b, c, d) {
        function e(p) {
            var q = p,
                t = fk(a).exec(q),
                u = q;
            if (t) {
                var r = t[2],
                    v = t[4];
                u = t[1];
                v && (u = u + r + v)
            }
            p = u;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = ek.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + k
    }

    function mk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = ak(b, 1, c),
            e = ak(b, 2, c),
            f = ak(b, 3, c);
        if (cb(d)) {
            var g = hk(d);
            c ? nk("_gl", g, a) : ok("_gl", g, a, !1)
        }
        if (!c && cb(e)) {
            var h = hk(e);
            ok("_gl", h, a, !0)
        }
        for (var k in f)
            if (f.hasOwnProperty(k)) a: {
                var n = k,
                    p = f[k],
                    q = a;
                if (q.tagName) { if ("a" === q.tagName.toLowerCase()) { ok(n, p, q, void 0); break a } if ("form" === q.tagName.toLowerCase()) { nk(n, p, q); break a } }
                "string" == typeof q && lk(n, p, q, void 0)
            }
    }

    function ok(a, b, c, d) {
        if (c.href) {
            var e = lk(a, b, c.href, void 0 === d ? !1 : d);
            Ab.test(e) && (c.href = e)
        }
    }

    function nk(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = H.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = lk(a, b, c.action);
                Ab.test(n) && (c.action = n)
            }
        }
    }

    function Vj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || mk(e, e.hostname) }
        } catch (g) {}
    }

    function Wj(a) {
        try {
            if (a.action) {
                var b = Ki(Mi(a.action), "host");
                mk(a, b)
            }
        } catch (c) {}
    }
    var pk = function(a, b, c, d) {
            Yj();
            Zj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        qk = function(a, b) {
            Yj();
            Zj(a, [Ji(m.location, "host", !0)], b, !0, !0)
        },
        rk = function() {
            var a = H.location.hostname,
                b = ck.exec(H.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(dk, ""),
                k = e.replace(dk, ""),
                n;
            if (!(n = h === k)) {
                var p = "." + k;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        sk = function(a, b) { return !1 === a ? !1 : a || b || rk() };
    var tk = {};
    var uk = /^\w+$/,
        vk = /^[\w-]+$/,
        wk = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        xk = function() { if (!Bg().g() || !Mg()) return !0; var a = Jg("ad_storage"); return null == a ? !0 : !!a },
        yk = function(a, b) { Lg("ad_storage") ? xk() ? a() : Rg(a, "ad_storage") : b ? vg("TAGGING", 3) : Qg(function() { yk(a, !0) }, ["ad_storage"]) },
        Ak = function(a) { return zk(a).map(function(b) { return b.xa }) },
        zk = function(a) {
            var b = [];
            if (!kj(m) || !H.cookie) return b;
            var c = nj(a, H.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { rd: d.rd }, e++) {
                var f = Bk(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.rd = g.xa;
                    var k = g.timestamp,
                        n = g.labels,
                        p = Ma(b, function(q) { return function(t) { return t.xa === q.rd } }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = Ck(p.labels, n || [])) : b.push({ version: h, xa: d.rd, timestamp: k, labels: n })
                }
            }
            b.sort(function(q, t) { return t.timestamp - q.timestamp });
            return Dk(b)
        };

    function Ck(a, b) { for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]); for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]); return d }

    function Ek(a) { return a && "string" == typeof a && a.match(uk) ? a : "_gcl" }
    var Gk = function() {
            var a = Mi(m.location.href),
                b = Ki(a, "query", !1, void 0, "gclid"),
                c = Ki(a, "query", !1, void 0, "gclsrc"),
                d = Ki(a, "query", !1, void 0, "wbraid"),
                e = Ki(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Hi(f, "gclid", !1, void 0);
                c = c || Hi(f, "gclsrc", !1, void 0);
                d = d || Hi(f, "wbraid", !1, void 0)
            }
            return Fk(b, c, e, d)
        },
        Fk = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && vk.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !==
                a && a.match(vk)) switch (b) {
                case void 0:
                    f(a, "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Ik = function(a) {
            var b = Gk();
            yk(function() { Hk(b, !1, a) })
        };

    function Hk(a, b, c, d, e) {
        function f(w, y) {
            var x = Jk(w, g);
            x && (wj(x, y, h), k = !0)
        }
        c = c || {};
        e = e || [];
        var g = Ek(c.prefix);
        d = d || Ya();
        var h = Fj(c, d, !0);
        h.cb = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == tk.enable_gbraid_cookie_write ? 0 : tk.enable_gbraid_cookie_write) && !k && a.gb) {
            var q = a.gb[0],
                t = Jk("gb",
                    g),
                u = !1;
            if (!b)
                for (var r = zk(t), v = 0; v < r.length; v++) r[v].xa === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Lk = function(a, b) {
            var c = kk(!0);
            yk(function() {
                for (var d = Ek(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== wk[f]) {
                        var g = Jk(f, d),
                            h = c[g];
                        if (h) {
                            var k = Math.min(Kk(h), Ya()),
                                n;
                            b: {
                                var p = k;
                                if (kj(m))
                                    for (var q = nj(g, H.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                        if (Kk(q[t]) > p) { n = !0; break b }
                                n = !1
                            }
                            if (!n) {
                                var u = Fj(b, k, !0);
                                u.cb = "ad_storage";
                                wj(g, h, u)
                            }
                        }
                    }
                }
                Hk(Fk(c.gclid, c.gclsrc), !1, b)
            })
        },
        Jk = function(a, b) { var c = wk[a]; if (void 0 !== c) return b + c },
        Kk = function(a) {
            return 0 !== Mk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Bk(a) { var b = Mk(a.split(".")); return 0 === b.length ? null : { version: b[0], xa: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) } }

    function Mk(a) { return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !vk.test(a[2]) ? [] : a }
    var Nk = function(a, b, c, d, e) {
            if (Ka(b) && kj(m)) {
                var f = Ek(e),
                    g = function() {
                        for (var h = {}, k = 0; k < a.length; ++k) {
                            var n = Jk(a[k], f);
                            if (n) {
                                var p = nj(n, H.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                yk(function() { pk(g, b, c, d) })
            }
        },
        Dk = function(a) { return a.filter(function(b) { return vk.test(b.xa) }) },
        Ok = function(a, b) {
            if (kj(m)) {
                for (var c = Ek(b.prefix), d = {}, e = 0; e < a.length; e++) wk[a[e]] && (d[a[e]] = wk[a[e]]);
                yk(function() {
                    Qa(d, function(f, g) {
                        var h = nj(c + g, H.cookie, void 0, "ad_storage");
                        h.sort(function(u,
                            r) { return Kk(r) - Kk(u) });
                        if (h.length) {
                            var k = h[0],
                                n = Kk(k),
                                p = 0 !== Mk(k.split(".")).length ? k.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== Mk(k.split(".")).length ? k.split(".")[2] : void 0;
                            q[f] = [t];
                            Hk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Xk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Yk = function(a) {
        function b(e, f, g) { g && (e[f] = g) }
        if (Mg()) {
            var c = Gk();
            if (Xk(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                qk(function() { return d }, 3);
                qk(function() { var e = {}; return e._up = "1", e }, 1)
            }
        }
    };

    function Zk(a, b) {
        var c = Ek(b),
            d = Jk(a, c);
        if (!d) return 0;
        for (var e = zk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function $k(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var vl = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        wl = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        xl = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        yl = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var zl = function() {
            var a = !1;
            a = !0;
            return a
        },
        Bl = function(a) {
            var b = ni("gtm.allowlist") || ni("gtm.whitelist");
            b && yg(9);
            zl() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && db(Va(b), wl),
                d = ni("gtm.blocklist") ||
                ni("gtm.blacklist");
            d || (d = ni("tagTypeBlacklist")) && yg(3);
            d ? yg(8) : d = [];
            Al() && (d = Va(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Va(d).indexOf("google") && yg(2);
            var e = d && db(Va(d), xl),
                f = {};
            return function(g) {
                var h = g && g[Zd.Eb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var k = gi[h] || [],
                    n = a(h, k);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(h))
                            if (k && 0 < k.length)
                                for (var q = 0; q < k.length; q++) {
                                    if (0 > c.indexOf(k[q])) {
                                        yg(11);
                                        p = !1;
                                        break a
                                    }
                                } else { p = !1; break a }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(h);
                    if (u) t = u;
                    else {
                        var r = Pa(e, k || []);
                        r && yg(10);
                        t = r
                    }
                }
                var v = !n || t;
                v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Pa(e, yl));
                return f[h] = v
            }
        },
        Al = function() { return vl.test(m.location && m.location.hostname) };
    var Cl = !1,
        Dl = 0,
        El = [];

    function Fl(a) {
        if (!Cl) {
            var b = H.createEventObject,
                c = "complete" == H.readyState,
                d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) { Cl = !0; for (var e = 0; e < El.length; e++) I(El[e]) }
            El.push = function() { for (var f = 0; f < arguments.length; f++) I(arguments[f]); return 0 }
        }
    }

    function Gl() { if (!Cl && 140 > Dl) { Dl++; try { H.documentElement.doScroll("left"), Fl() } catch (a) { m.setTimeout(Gl, 50) } } }
    var Hl = function(a) { Cl ? a() : El.push(a) };
    var Kl = function(a, b) {
            this.g = !1;
            this.C = [];
            this.F = { tags: [] };
            this.O = !1;
            this.o = this.s = 0;
            Jl(this, a, b)
        },
        Ll = function(a, b, c, d) {
            if (Yh.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Ac(d) && (e = Bc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.F.tags.push(e) - 1
        },
        Ml = function(a, b, c, d) {
            var e = a.F.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Nl = function(a) {
            if (!a.g) {
                for (var b = a.C, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.C.length = 0
            }
        },
        Jl = function(a, b, c) {
            Ga(b) && a.Od(b);
            c && m.setTimeout(function() { return Nl(a) }, Number(c))
        };
    Kl.prototype.Od = function(a) {
        var b = this,
            c = $a(function() { return I(function() { a(J.J, b.F) }) });
        this.g ? c() : this.C.push(c)
    };
    var Ol = function(a) {
        a.s++;
        return $a(function() {
            a.o++;
            a.O && a.o >= a.s && Nl(a)
        })
    };
    var Pl = function() {
            function a(d) { return !Ja(d) || 0 > d ? 0 : d }
            if (!Vh._li && m.performance && m.performance.timing) {
                var b = m.performance.timing.navigationStart,
                    c = Ja(oi.get("gtm.start")) ? oi.get("gtm.start") : 0;
                Vh._li = { cst: a(c - b), cbt: a(di - b) }
            }
        },
        Ql = function(a) { m.performance && m.performance.mark(J.J + "_" + a + "_start") },
        Rl = function(a) {
            if (m.performance) {
                var b = J.J + "_" + a + "_start",
                    c = J.J + "_" + a + "_duration";
                m.performance.measure(c, b);
                var d = m.performance.getEntriesByName(c)[0];
                m.performance.clearMarks(b);
                m.performance.clearMeasures(c);
                var e = Vh._p || {};
                void 0 === e[a] && (e[a] = d.duration, Vh._p = e);
                return d.duration
            }
        },
        Sl = function() {
            if (m.performance && m.performance.now) {
                var a = Vh._p || {};
                a.PAGEVIEW = m.performance.now();
                Vh._p = a
            }
        };
    var Tl = {},
        Ul = function() { return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject] },
        Vl = !1;

    function Yl() { return m.GoogleAnalyticsObject || "ga" }
    var Zl = function(a) {},
        $l = function(a, b) {
            return function() {
                var c = Ul(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var gm = function(a) {},
        km = function(a) {},
        lm =
        function() { return "&tc=" + Be.filter(function(a) { return a }).length },
        om = function() { 2022 <= mm().length && nm() },
        pm = function(a) { return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*" },
        rm = function() { qm || (qm = m.setTimeout(nm, 500)) },
        nm = function() {
            qm && (m.clearTimeout(qm), qm = void 0);
            void 0 === sm || tm[sm] && !um && !vm || (wm[sm] || xm.Ej() || 0 >= ym-- ? (yg(1), wm[sm] = !0) : (xm.bk(), cc(mm(!0)), tm[sm] = !0, zm = Am = Bm = vm = um = ""))
        },
        mm = function(a) {
            var b = sm;
            if (void 0 === b) return "";
            var c = wg("GTM"),
                d = wg("TAGGING");
            return [Cm, tm[b] ? "" : "&es=1",
                Dm[b], gm(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", lm(), um, vm, Bm, Am, km(a), zm, "&z=0"
            ].join("")
        },
        Fm = function() { Cm = Em() },
        Em = function() { return [ei, "&v=3&t=t", "&pid=" + Na(), "&rv=" + J.Kd].join("") },
        jm = ["L", "S", "Y"],
        fm = ["S", "E"],
        Gm = { sampleRate: "0.005000", Kh: "", Jh: Number("5") },
        Hm = 0 <= H.location.search.indexOf("?gtm_latency=") || 0 <= H.location.search.indexOf("&gtm_latency="),
        Im;
    if (!(Im = Hm)) {
        var Jm = Math.random(),
            Km = Gm.sampleRate;
        Im = Jm < Km
    }
    var Lm = Im,
        Mm = { label: J.J + " Container", children: [{ label: "Initialization", children: [] }] },
        Cm = Em(),
        tm = {},
        um = "",
        vm = "",
        zm = "",
        Am = "",
        im = {},
        hm = !1,
        em = {},
        Nm = {},
        Bm = "",
        sm = void 0,
        Dm = {},
        wm = {},
        qm = void 0,
        Om = 5;
    0 < Gm.Jh && (Om = Gm.Jh);
    var xm = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Ej: function() { return c < a ? !1 : Ya() - d[c % a] < b },
                bk: function() {
                    var f = c++ % a;
                    d[f] = Ya()
                }
            }
        }(Om, 1E3),
        ym = 1E3,
        Qm = function(a, b) {
            if (Lm && !wm[a] && sm !==
                a) {
                nm();
                sm = a;
                zm = um = "";
                Dm[a] = "&e=" + pm(b) + "&eid=" + a;
                rm();
            }
        },
        Rm = function(a, b, c, d) {
            if (Lm && b) {
                var e, f = String(b[Zd.Eb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!wm[a]) {
                    a !== sm && (nm(), sm = a);
                    um = um ? um + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h) throw Error("Error: No function name given for function call.");
                    var k = (De[h] ? "1" : "2") + e;
                    zm = zm ? zm + "." + k : "&ti=" + k;
                    rm();
                    om()
                }
            }
        };
    var Ym = function(a, b, c) {
            if (Lm && !wm[a]) {
                a !== sm && (nm(), sm = a);
                var d = c + b;
                vm = vm ? vm + "." + d : "&epr=" + d;
                rm();
                om()
            }
        },
        Zm = function(a, b, c) {};

    function $m(a, b, c, d) {
        var e = Be[a],
            f = an(a, b, c, d);
        if (!f) return null;
        var g = Je(e[Zd.Gg], c, []);
        if (g && g.length) {
            var h = g[0];
            f = $m(h.index, { onSuccess: f, onFailure: 1 === h.ah ? b.terminate : f, terminate: b.terminate }, c, d)
        }
        return f
    }

    function an(a, b, c, d) {
        function e() {
            if (f[Zd.Hi]) h();
            else {
                var w = Ke(f, c, []);
                var y = w[Zd.Ph];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!Zg(y[x])) { h(); return }
                var A = Ll(c.Hb, String(f[Zd.Eb]), Number(f[Zd.Ig]), w[Zd.Ii]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var E = Ya() - D;
                        Rm(c.id, Be[a], "5", E);
                        Ml(c.Hb, A, "success",
                            E);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var E = Ya() - D;
                        Rm(c.id, Be[a], "6", E);
                        Ml(c.Hb, A, "failure", E);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                Rm(c.id, f, "1");
                var C = function() {
                    var E = Ya() - D;
                    Rm(c.id, f, "7", E);
                    Ml(c.Hb, A, "exception", E);
                    B || (B = !0, h())
                };
                var D = Ya();
                try { Ie(w, { event: c, index: a, type: 1 }) } catch (E) { C(E) }
            }
        }
        var f = Be[a],
            g = b.onSuccess,
            h = b.onFailure,
            k = b.terminate;
        if (c.wf(f)) return null;
        var n = Je(f[Zd.Jg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = $m(p.index, { onSuccess: g, onFailure: h, terminate: k }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.ah ? k : q
        }
        if (f[Zd.Bg] || f[Zd.Mi]) {
            var t =
                f[Zd.Bg] ? Ce : c.rk,
                u = g,
                r = h;
            if (!t[a]) {
                e = $a(e);
                var v = bn(a, t, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() { t[a](u, r) }
        }
        return e
    }

    function bn(a, b, c) {
        var d = [],
            e = [];
        b[a] = cn(d, e, c);
        return { onSuccess: function() { b[a] = dn; for (var f = 0; f < d.length; f++) d[f]() }, onFailure: function() { b[a] = en; for (var f = 0; f < e.length; f++) e[f]() } }
    }

    function cn(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function dn(a) { a() }

    function en(a, b) { b() };
    var fn = { active: !0, isAllowed: function() { return !0 } },
        gn = function(a) { var b = Vh.zones; return b ? b.checkState(J.J, a) : fn },
        hn = function(a) { var b = Vh.zones;!b && a && (b = Vh.zones = a()); return b };
    var jn = function(a) { return arguments },
        mn = function(a, b) {
            for (var c = [], d = 0; d < Be.length; d++)
                if (a[d]) {
                    var e = Be[d];
                    var f = Ol(b.Hb);
                    try {
                        var g = $m(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                        if (g) {
                            var h = c,
                                k = h.push,
                                n = d,
                                p = e["function"];
                            if (!p) throw "Error: No function name given for function call.";
                            var q = De[p];
                            k.call(h, { Ch: n, uh: q ? q.priorityOverride || 0 : 0, execute: g })
                        } else kn(d, b), f()
                    } catch (r) { f() }
                }
            var t = b.Hb;
            t.O = !0;
            t.o >= t.s &&
                Nl(t);
            c.sort(ln);
            for (var u = 0; u < c.length; u++) c[u].execute();
            return 0 < c.length
        };

    function ln(a, b) {
        var c, d = b.uh,
            e = a.uh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Ch,
                h = b.Ch;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function kn(a, b) {
        if (!Lm) return;
        var c = function(d) {
            var e = b.wf(Be[d]) ? "3" : "4",
                f = Je(Be[d][Zd.Gg], b, []);
            f && f.length && c(f[0].index);
            Rm(b.id, Be[d], e);
            var g = Je(Be[d][Zd.Jg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var nn = !1,
        on;
    var un = function(a) {
        var b = Ya(),
            c = a["gtm.uniqueEventId"],
            d = a.event;
        if ("gtm.js" === d) {
            if (nn) return !1;
            nn = !0;
        }
        var g = gn(c),
            h = !1;
        if (!g.active) {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
            h = !0;
            g = gn(Number.MAX_SAFE_INTEGER)
        }
        Qm(c, d);
        var k = a.eventCallback,
            n = a.eventTimeout,
            p = k;
        var q = { id: c, name: d, wf: Bl(g.isAllowed), rk: [], oh: function() { yg(6) }, Ug: qn(), Vg: rn(c), Hb: new Kl(p, n) },
            t = Te(q);
        h && (t = sn(t));
        var u = mn(t, q);
        "gtm.js" !==
        d && "gtm.sync" !== d || Zl(J.J);
        return tn(t, u)
    };

    function rn(a) { return function(b) { Lm && (Fc(b) || Zm(a, "input", b)) } }

    function qn() {
        var a = {};
        a.event = si("event", 1);
        a.ecommerce = si("ecommerce", 1);
        a.gtm = si("gtm");
        a.eventModel = si("eventModel");
        return a
    }

    function sn(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                Xh[String(Be[c][Zd.Eb])] && (b[c] = !0);
                void 0 !== Be[c][Zd.Ni] && (b[c] = !0);
            }
        return b
    }

    function tn(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Be[c] && !Yh[String(Be[c][Zd.Eb])]) return !0;
        return !1
    }

    function vn(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Mi("" + c + b).href
        }
    }

    function wn(a, b) { return xn() ? vn(a, b) : void 0 }

    function xn() { var a = !1; return a }

    function yn() { return !!J.Ld && "SGTM_TOKEN" !== J.Ld.replaceAll("@@", "") };
    var zn = function() { var a = !1; return a };
    var An;
    if (3 === J.Kd.length) An = "g";
    else {
        var Bn = "G";
        Bn = "g";
        An = Bn
    }
    var Cn = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: An, OPT: "o" },
        Dn = function(a) {
            var b = J.J.split("-"),
                c = b[0].toUpperCase(),
                d = Cn[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === J.Kd.length) {
                var g = "w";
                g = zn() ? "s" : "o";
                f = "2" + g
            } else f = "";
            return f + d + J.Kd + e
        };

    function En(a, b) { if ("" === a) return b; var c = Number(a); return isNaN(c) ? b : c };
    var Fn = function(a, b) { a.addEventListener && a.addEventListener.call(a, "message", b, !1) };

    function Gn() { return Cb("iPhone") && !Cb("iPod") && !Cb("iPad") };
    Cb("Opera");
    Cb("Trident") || Cb("MSIE");
    Cb("Edge");
    !Cb("Gecko") || -1 != Bb().toLowerCase().indexOf("webkit") && !Cb("Edge") || Cb("Trident") || Cb("MSIE") || Cb("Edge"); - 1 != Bb().toLowerCase().indexOf("webkit") && !Cb("Edge") && Cb("Mobile");
    Cb("Macintosh");
    Cb("Windows");
    Cb("Linux") || Cb("CrOS");
    var Hn = na.navigator || null;
    Hn && (Hn.appVersion || "").indexOf("X11");
    Cb("Android");
    Gn();
    Cb("iPad");
    Cb("iPod");
    Gn() || Cb("iPad") || Cb("iPod");
    Bb().toLowerCase().indexOf("kaios");
    var In = function(a) {
        if (!a || !H.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        H.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var Jn = function() {};
    var Kn = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Ln = function(a, b) {
            this.o = a;
            this.g = null;
            this.C = {};
            this.O = 0;
            this.F = void 0 === b ? 500 : b;
            this.s = null
        };
    ma(Ln, Jn);
    Ln.prototype.addEventListener = function(a) {
        var b = {},
            c = Pb(function() { return a(b) }),
            d = 0; - 1 !== this.F && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.F));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Kn(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try { Mn(this, "addEventListener", e) } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Ln.prototype.removeEventListener = function(a) { a && a.listenerId && Mn(this, "removeEventListener", null, a.listenerId) };
    var On = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) { var f = a.publisher.restrictions[b]; if (void 0 !== f) { e = f[void 0 === d ? "755" : d]; break a } }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var k;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Nn(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Nn(a.purpose.consents, b)
                } else k = !0;
            else k = 1 === h ? a.purpose && a.vendor ? Nn(a.purpose.legitimateInterests,
                b) && Nn(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        Nn = function(a, b) { return !(!a || !a[b]) },
        Mn = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (Pn(a)) {
                Qn(a);
                var f = ++a.O;
                a.C[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), "*")
                }
            } else c({}, !1)
        },
        Pn = function(a) {
            if (a.g) return a.g;
            var b;
            a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e;
                    try { e = !(!c.frames || !c.frames.__tcfapiLocator) } catch (h) {
                        e = !1
                    }
                    if (e) { b = c; break a }
                    var f;
                    b: {
                        try { var g = c.parent; if (g && g != c) { f = g; break b } } catch (h) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.g = b;
            return a.g
        },
        Qn = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.C[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Fn(a.o, a.s))
        };
    var Rn = !0;
    Rn = !1;
    var Sn = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        Tn = En("", 550),
        Un = En("", 500);

    function Vn() { var a = Vh.tcf || {}; return Vh.tcf = a }
    var $n = function() {
        var a = Vn(),
            b = new Ln(m, Rn ? 3E3 : -1);
        if (!0 === m.gtag_enable_tcf_support && !a.active && ("function" === typeof m.__tcfapi || "function" === typeof b.o.__tcfapi || null != Pn(b))) {
            a.active = !0;
            a.ld = {};
            Wn();
            var c = null;
            Rn ? c = m.setTimeout(function() {
                Xn(a);
                Yn(a);
                c = null
            }, Un) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Xn(a), Yn(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Zn(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in Sn)
                                if (Sn.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var h = d,
                                            k = !0;
                                        k = void 0 === k ? !1 : k;
                                        var n;
                                        var p = h;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Kn(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies &&
                                            !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : On(h, "1", 0) : !1
                                    } else f[g] = On(d, g, Sn[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.ld = e, Yn(a))
                    }
                })
            } catch (d) { c && (clearTimeout(c), c = null), Xn(a), Yn(a) }
        }
    };

    function Xn(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Rn && (a.ld = Zn())
    }

    function Wn() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Tn, a);
        Wg(b)
    }

    function Zn() {
        var a = {},
            b;
        for (b in Sn) Sn.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Yn(a) {
        var b = {},
            c = (b.ad_storage = a.ld["1"] ? "granted" : "denied", b);
        Yg(c, 0, { gdprApplies: a ? a.gdprApplies : void 0, tcString: ao() })
    }
    var ao = function() { var a = Vn(); return a.active ? a.tcString || "" : "" },
        bo = function() { var a = Vn(); return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "" },
        co = function(a) { if (!Sn.hasOwnProperty(String(a))) return !0; var b = Vn(); return b.active && b.ld ? !!b.ld[String(a)] : !0 };
    var ko = !1;
    var lo = function() { this.g = {} },
        mo = function(a, b, c) { null != c && (a.g[b] = c) },
        no = function(a) { return Object.keys(a.g).map(function(b) { return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b]) }).join("&") },
        po = function(a, b, c, d, e) {};
    var ro = /[A-Z]+/,
        so = /\s/,
        to = function(a) {
            if (Ha(a)) {
                a = Wa(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (ro.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || so.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], N: d }
                    }
                }
            }
        },
        vo = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = to(a[c]);
                d && (b[d.id] = d)
            }
            uo(b);
            var e = [];
            Qa(b, function(f, g) { e.push(g) });
            return e
        };

    function uo(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.N[1] && b.push(d.containerId) }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var xo = function(a, b, c, d) { return (2 === wo() || d || "http:" != m.location.protocol ? a : b) + c },
        wo = function() {
            var a = Zb(),
                b;
            if (1 === a) a: {
                var c = $h;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = H.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var k = g[h].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) { b = 3; break a }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var Qo = !1;

    function Ro() {
        if (Ga(Rb.joinAdInterestGroup)) return !0;
        Qo || (In(''), Qo = !0);
        return Ga(Rb.joinAdInterestGroup)
    }

    function So(a, b) {
        var c = void 0;
        try { c = H.querySelector('iframe[data-tagging-id="' + b + '"]') } catch (e) {}
        if (c) { var d = Number(c.dataset.loadTime); if (d && 6E4 > Ya() - d) { vg("TAGGING", 9); return } } else try { if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) { vg("TAGGING", 10); return } } catch (e) {}
        $b(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: Ya() }, c)
    };
    var Op = function() {
            var a = !0;
            co(7) && co(9) && co(10) || (a = !1);
            return a
        },
        Pp = function() {
            var a = !0;
            co(3) && co(4) || (a = !1);
            return a
        };

    function Iq() { return Vh.gcq = Vh.gcq || new Jq }
    var Kq = function(a, b, c) { Iq().register(a, b, c) },
        Lq = function(a, b, c, d) { Iq().push("event", [b, a], c, d) },
        Mq = function(a, b, c) { Iq().insert("event", [b, a], c) },
        Nq = function(a, b) { Iq().push("config", [a], b) },
        Oq = function(a, b, c, d) { Iq().push("get", [a, b], c, d) },
        Pq = function(a) { return Iq().getRemoteConfig(a) },
        Qq = {},
        Rq = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.g = !1
        },
        Sq = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.V = c || "";
            this.g = d;
            this.o = e
        },
        Jq = function() {
            this.o = {};
            this.s = {};
            this.g = [];
            this.C = { AW: !1, UA: !1 }
        },
        Tq = function(a, b) { var c = to(b); return a.o[c.containerId] = a.o[c.containerId] || new Rq },
        Uq = function(a, b, c) {
            if (b) {
                var d = to(b);
                if (d && 1 === Tq(a, b).status) {
                    Tq(a, b).status = 2;
                    var e = {};
                    Lm && (e.timeoutId = m.setTimeout(function() {
                        yg(38);
                        rm()
                    }, 3E3));
                    a.push("require", [e], d.containerId);
                    Qq[d.containerId] = Ya();
                    if (zn()) {} else {
                        var g = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=" + J.Z + "&cx=c";
                        yn() && (g += "&sign=" + J.Ld);
                        var h = ("http:" != m.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com" + g),
                            k = wn(c, g) || h;
                        Yb(k)
                    }
                }
            }
        },
        Vq = function(a, b, c, d) {
            if (d.V) {
                var e = Tq(a, d.V),
                    f = e.s;
                if (f) {
                    var g = Bc(c),
                        h = Bc(e.targetConfig[d.V]),
                        k = Bc(e.containerConfig),
                        n = Bc(e.remoteConfig),
                        p = Bc(a.s),
                        q = ni("gtm.uniqueEventId"),
                        t = to(d.V).prefix,
                        u = $a(function() {
                            var v =
                                g[S.$b];
                            v && I(v)
                        }),
                        r = Ph(Oh(Qh(Nh(Lh(Mh(Kh(Jh(Ih(g), h), k), n), p), function() {
                            Ym(q, t, "2");
                            u()
                        }), function() {
                            Ym(q, t, "3");
                            u()
                        }), function(v, w) { a.C[v] = w }), function(v) { return a.C[v] });
                    try {
                        Ym(q, t, "1");
                        f(d.V, b, d.s, r)
                    } catch (v) { Ym(q, t, "4"); }
                }
            }
        };
    Jq.prototype.register = function(a, b, c) {
        var d = Tq(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (Bc(d.remoteConfig, c), d.remoteConfig = c);
            var e = to(a),
                f = Qq[e.containerId];
            if (void 0 !== f) {
                var g = Vh[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                Vh[e.containerId]._spx && (h = h.toLowerCase());
                var k = ni("gtm.uniqueEventId"),
                    n = h,
                    p = Ya() - g;
                if (Lm && !wm[k]) {
                    k !== sm && (nm(), sm = k);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Am = Am ? Am + "," + q : "&cl=" + q
                }
                delete Qq[e.containerId]
            }
            this.flush()
        }
    };
    Jq.prototype.push = function(a, b, c, d) {
        var e = Math.floor(Ya() / 1E3);
        Uq(this, c, b[0][S.wa] || this.s[S.wa]);
        c && Tq(this, c).g && (d = !1);
        this.g.push(new Sq(a, e, c, b, d));
        d || this.flush()
    };
    Jq.prototype.insert = function(a, b, c) {
        var d = Math.floor(Ya() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new Sq(a, d, c, b, !1)) : this.g.push(new Sq(a, d, c, b, !1))
    };
    Jq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.o) !f.V || Tq(this, f.V).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Tq(this, f.V).status && !a) { this.g.push.apply(this.g, c); return }
                        Lm && m.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        Qa(f.g[0], function(t, u) { Bc(fb(t, u), b.s) });
                        break;
                    case "config":
                        e.Ra = {};
                        Qa(f.g[0], function(t) { return function(u, r) { Bc(fb(u, r), t.Ra) } }(e));
                        var g = !!e.Ra[S.Ed];
                        delete e.Ra[S.Ed];
                        var h =
                            Tq(this, f.V),
                            k = to(f.V),
                            n = k.containerId === k.id;
                        g || (n ? h.containerConfig = {} : h.targetConfig[f.V] = {});
                        h.g && g || Vq(this, S.Ba, e.Ra, f);
                        h.g = !0;
                        delete e.Ra[S.cc];
                        n ? Bc(e.Ra, h.containerConfig) : Bc(e.Ra, h.targetConfig[f.V]);
                        d = !0;
                        break;
                    case "event":
                        e.pd = {};
                        Qa(f.g[0], function(t) { return function(u, r) { Bc(fb(u, r), t.pd) } }(e));
                        Vq(this, f.g[1], e.pd, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[S.Va] = f.g[0], p[S.jb] = f.g[1], p);
                        Vq(this, S.Ta, q, f)
                }
                this.g.shift();
                Wq(this, f)
            }
            e = { Ra: e.Ra, pd: e.pd }
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    };
    var Wq = function(a, b) {
        if ("require" !== b.type)
            if (b.V)
                for (var c = a.getCommandListeners(b.V)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
                    }
    };
    Jq.prototype.getRemoteConfig = function(a) { return Tq(this, a).remoteConfig };
    Jq.prototype.getCommandListeners = function(a) { return Tq(this, a).o };
    var af;
    var dr = {},
        er = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = dr[b[c]] || [];
                dr[b[c]] = d;
                0 > d.indexOf(a) && d.push(a)
            }
        },
        fr = function(a) {
            Qa(dr, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var gr = "HA GF G UA AW DC".split(" "),
        hr = !1,
        ir = !1,
        jr = 0;

    function kr(a, b) {
        var c = { event: a };
        b && (c.eventModel = Bc(b), b[S.$b] && (c.eventCallback = b[S.$b]), b[S.yd] && (c.eventTimeout = b[S.yd]));
        return c
    }

    function lr(a) { a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: hi() }); return a["gtm.uniqueEventId"] }

    function mr() {
        if (!hr && !Vh.gtagRegistered) {
            hr = Vh.gtagRegistered = !0;
            Vh.addTargetToGroup = function(c) { er(c, "default") };
            var a = Vh.pendingDefaultTargets;
            delete Vh.pendingDefaultTargets;
            if (Ka(a))
                for (var b = 0; b < a.length; ++b) er(a[b], "default")
        }
        return hr
    }
    var nr = {
            config: function(a) {
                var b, c = lr(a);
                if (2 > a.length || !Ha(a[1])) return;
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Ac(a[2]) || 3 < a.length) return;
                    d = a[2]
                }
                var e = to(a[1]);
                if (!e) return;
                fr(e.id);
                er(e.id, d[S.Le] || "default");
                delete d[S.Le];
                ir || yg(43);
                if (mr() && -1 !== gr.indexOf(e.prefix)) {
                    "G" === e.prefix && (d[S.cc] = !0);
                    delete d[S.$b];
                    e.id === e.containerId && (Vh.configCount = ++jr);
                    Nq(d, e.id);
                    return
                }
                qi("gtag.targets." + e.id, void 0);
                qi("gtag.targets." + e.id, Bc(d));
                var f = {};
                f[S.Db] = e.id;
                b =
                    kr(S.Ba, f);
                b["gtm.uniqueEventId"] = c;
                return b
            },
            consent: function(a) {
                if (3 === a.length) {
                    yg(39);
                    var b = hi(),
                        c = a[1];
                    "default" === c ? Wg(a[2]) : "update" === c && Yg(a[2], b)
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && Ha(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!Ac(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = kr(b, c),
                        e = lr(a);
                    d["gtm.uniqueEventId"] = e;
                    if ("optimize.callback" === b) return d.eventModel = d.eventModel || {}, d;
                    var f;
                    var g = c && c[S.Db];
                    void 0 === g && (g = ni(S.Db,
                        2), void 0 === g && (g = "default"));
                    if (Ha(g) || Ka(g)) {
                        for (var h = g.toString().replace(/\s+/g, "").split(","), k = [], n = 0; n < h.length; n++)
                            if (0 <= h[n].indexOf("-")) k.push(h[n]);
                            else {
                                var p = dr[h[n]];
                                p && p.length && (k = k.concat(p))
                            }
                        f = vo(k)
                    } else f = void 0;
                    var q = f;
                    if (!q) return;
                    for (var t = mr(), u = [], r = 0; t && r < q.length; r++) {
                        var v = q[r];
                        if (-1 !== gr.indexOf(v.prefix)) {
                            var w = Bc(c);
                            "G" === v.prefix && (w[S.cc] = !0);
                            delete w[S.$b];
                            Lq(b, w, v.id)
                        }
                        u.push(v.id)
                    }
                    d.eventModel = d.eventModel || {};
                    0 < q.length ? d.eventModel[S.Db] = u.join() : delete d.eventModel[S.Db];
                    ir || yg(43);
                    return d
                }
            },
            get: function(a) {
                yg(53);
                if (4 !== a.length || !Ha(a[1]) || !Ha(a[2]) || !Ga(a[3])) return;
                var b = to(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                ir || yg(43);
                if (!mr() || -1 === gr.indexOf(b.prefix)) return;
                hi();
                var e = {};
                Sg(Bc((e[S.Va] = c, e[S.jb] = d, e)));
                Oq(c, function(f) { I(function() { return d(f) }) }, b.id);
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    ir = !0;
                    mr();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(),
                        b["gtm.uniqueEventId"] = lr(a), b
                }
            },
            policy: function(a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2],
                        d = af.o;
                    d.g[b] ? d.g[b].push(c) : d.g[b] = [c]
                }
            },
            set: function(a) {
                var b;
                2 == a.length && Ac(a[1]) ? b = Bc(a[1]) : 3 == a.length && Ha(a[1]) && (b = {}, Ac(a[2]) || Ka(a[2]) ? b[a[1]] = Bc(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    if (hi(), Bc(b), mr()) {
                        var c = Bc(b);
                        Iq().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        or = { policy: !0 };
    var pr = function() {
        this.g = [];
        this.o = []
    };
    pr.prototype.push = function(a, b, c) {
        var d = { debugContext: c, message: a, notBeforeEventId: b, priorityId: this.g.length + 1 };
        this.g.push(d);
        for (var e = 0; e < this.o.length; e++) try { this.o[e](d) } catch (f) {}
    };
    pr.prototype.nh = function(a) { this.o.push(a) };
    pr.prototype.get = function() {
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    pr.prototype.get = pr.prototype.get;
    pr.prototype.listen = pr.prototype.nh;
    pr.prototype.push = pr.prototype.push;

    function qr(a, b) { return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId };
    var rr = function(a) {
            var b = m[J.Z].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) { c = !1; break }
                c && (b.end(), b.end = null)
            }
        },
        sr = function(a) {
            var b = m[J.Z],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var tr = !1,
        ur = [];

    function vr() { if (!tr) { tr = !0; for (var a = 0; a < ur.length; a++) I(ur[a]) } }
    var wr = function(a) { tr ? I(a) : ur.push(a) };
    var Nr = function(a) {
        if (Mr(a)) return a;
        this.g = a
    };
    Nr.prototype.xj = function() { return this.g };
    Nr.prototype.wj = function() { return this.g };
    var Mr = function(a) { return !a || "object" !== yc(a) || Ac(a) ? !1 : "getUntrustedMessageValue" in a || "getUntrustedUpdateValue" in a };
    Nr.prototype.getUntrustedMessageValue = Nr.prototype.wj;
    Nr.prototype.getUntrustedUpdateValue = Nr.prototype.xj;
    var Or = 0,
        Pr, Qr = {},
        Rr = [],
        Sr = [],
        Tr = !1,
        Ur = !1,
        Vr = function(a) { return m[J.Z].push(a) },
        Wr = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return Vr(a)
        },
        Xr = function(a, b) {
            var c = Vh[J.Z],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = m.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0)) }
        };

    function Yr(a) {
        var b = a._clear;
        Qa(a, function(d, e) { "_clear" !== d && (b && qi(d, void 0), qi(d, e)) });
        ci || (ci = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = hi(), a["gtm.uniqueEventId"] = c, qi("gtm.uniqueEventId", c));
        return un(a)
    }

    function Zr(a) { if (null == a || "object" !== typeof a) return !1; if (a.event) return !0; if (Sa(a)) { var b = a[0]; if ("config" === b || "event" === b || "js" === b) return !0 } return !1 }

    function $r() {
        for (var a = !1; !Ur && (0 < Rr.length || 0 < Sr.length);) {
            if (!Tr && Zr(Rr[0])) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = Rr[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                Rr.unshift(c, e);
                Tr = !0
            }
            Ur = !0;
            delete ki.eventModel;
            mi();
            var g = null,
                h = void 0;
            null == g && (g = Rr.shift());
            if (null != g) {
                var n = Mr(g);
                if (n) {
                    var p = g;
                    g = Mr(p) ? "getUntrustedMessageValue" in p ? p.getUntrustedMessageValue() : p.getUntrustedUpdateValue() : void 0;
                    ri()
                }
                try {
                    if (Ga(g)) try { g.call(oi) } catch (B) {} else if (Ka(g)) {
                        var q = g;
                        if (Ha(q[0])) {
                            var t = q[0].split("."),
                                u = t.pop(),
                                r = q.slice(1),
                                v = ni(t.join("."), 2);
                            if (null != v) try { v[u].apply(v, r) } catch (B) {}
                        }
                    } else {
                        if (Sa(g)) {
                            a: {
                                var w = g,
                                    y = h;
                                if (w.length && Ha(w[0])) {
                                    var x =
                                        nr[w[0]];
                                    if (x && (!n || !or[w[0]])) { g = x(w, y); break a }
                                }
                                g = void 0
                            }
                            if (!g) { Ur = !1; continue }
                        }
                        a = Yr(g) || a;
                    }
                } finally { n && mi(!0) }
            }
            Ur = !1
        }
        return !a
    }

    function bs() { var b = $r(); try { rr(J.J) } catch (c) {} return b }
    var es = function() {
        var a = Tb(J.Z, []),
            b = Tb("google_tag_manager", {});
        b = b[J.Z] = b[J.Z] || {};
        Hl(function() { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })) });
        wr(function() { b.gtmLoad || (b.gtmLoad = !0, a.push({ event: "gtm.load" })) });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var e;
            if (0 < Vh.SANDBOXED_JS_SEMAPHORE) {
                e = [];
                for (var f =
                        0; f < arguments.length; f++) e[f] = new Nr(arguments[f])
            } else e = [].slice.call(arguments, 0);
            Rr.push.apply(Rr, e);
            var g = c.apply(a, e);
            if (300 < this.length)
                for (yg(4); 300 < this.length;) this.shift();
            var h = "boolean" !== typeof g || g;
            return $r() && h
        };
        var d = a.slice(0);
        Rr.push.apply(Rr, d);
        if (cs()) { I(bs) }
    };
    var cs = function() { var a = !0; return a };

    function gs(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ya();
        return b < c + 3E5 && b > c - 9E5
    };
    var hs = function(a) { Vh.addTargetToGroup ? Vh.addTargetToGroup(a) : (Vh.pendingDefaultTargets = Vh.pendingDefaultTargets || [], Vh.pendingDefaultTargets.push(a)) };
    var is = { sh: "G-XV614N2RLR" },
        js = function() { var a = []; return a };
    var ks = {};
    ks.Gd = new String("undefined");
    var ns = function(a, b, c) {
            var d = { event: b, "gtm.element": a, "gtm.elementClasses": kc(a, "className"), "gtm.elementId": a["for"] || fc(a, "id") || "", "gtm.elementTarget": a.formTarget || kc(a, "target") || "" };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || kc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        os = function(a) {
            Vh.hasOwnProperty("autoEventsSettings") || (Vh.autoEventsSettings = {});
            var b = Vh.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        ps = function(a, b, c) { os(a)[b] = c },
        qs = function(a, b, c, d) {
            var e = os(a),
                f = Za(e, b, d);
            e[b] = c(f)
        },
        rs = function(a, b, c) { var d = os(a); return Za(d, b, c) },
        ss = function(a) { return "string" === typeof a ? a : String(hi()) };
    var ys = !!m.MutationObserver,
        zs = void 0,
        As = function(a) {
            if (!zs) {
                var b = function() {
                    var c = H.body;
                    if (c)
                        if (ys)(new MutationObserver(function() { for (var e = 0; e < zs.length; e++) I(zs[e]) })).observe(c, { childList: !0, subtree: !0 });
                        else {
                            var d = !1;
                            dc(c, "DOMNodeInserted", function() { d || (d = !0, I(function() { d = !1; for (var e = 0; e < zs.length; e++) I(zs[e]) })) })
                        }
                };
                zs = [];
                H.body ? b() : I(b)
            }
            zs.push(a)
        };
    var Ls = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Ya() - e) * g.playbackRate / 1E3 : 0;
            e = Ya()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, h, k) {
                var n = a(),
                    p = n.Vd,
                    q = void 0 !== k ? Math.round(k) : void 0 !== h ? Math.round(n.Vd * h) : Math.round(n.nf),
                    t = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                    u = H.hidden ? !1 : .5 <= zi(c);
                d();
                var r = void 0;
                void 0 !== b && (r = [b]);
                var v = ns(c, "gtm.video", r);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = t;
                v["gtm.videoVisible"] = u;
                return v
            },
            If: function() { e = Ya() },
            Ya: function() { d() }
        }
    };
    var Ms = m.clearTimeout,
        Ns = m.setTimeout,
        V = function(a, b, c, d) { if (zn()) { b && I(b) } else return Yb(a, b, c, d) },
        Os = function() { return new Date },
        Ps = function() { return m.location.href },
        Qs = function(a) { return Ki(Mi(a), "fragment") },
        Rs = function(a) { return Li(Mi(a)) },
        Ss = function(a, b) { return ni(a, b || 2) },
        Ts = function(a, b, c) { return b ? Wr(a, b, c) : Vr(a) },
        Us = function(a, b) { m[a] = b },
        X = function(a, b, c) { b && (void 0 === m[a] || c && !m[a]) && (m[a] = b); return m[a] },
        Vs = function(a, b, c) { return nj(a, b, void 0 === c ? !0 : !!c) },
        Ws = function(a, b, c) { return 0 === wj(a, b, c) },
        Xs = function(a, b) { if (zn()) { b && I(b) } else $b(a, b) },
        Ys = function(a) { return !!rs(a, "init", !1) },
        Zs = function(a) { ps(a, "init", !0) },
        $s = function(a) {
            var b = $h,
                c = "?id=" + encodeURIComponent(a) + "&l=" + J.Z;
            yn() && (c += "&sign=" + J.Ld, Sb && (b = Sb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = xo("https://", "http://", b + c);
            V(d)
        },
        at = function(a,
            b, c) { Lm && (Fc(a) || Zm(c, b, a)) };
    var yt = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function zt(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var At = new Oa;

    function Bt(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = At.get(e);
            f || (f = new RegExp(b, d), At.set(e, f));
            return f.test(a)
        } catch (g) { return !1 }
    }

    function Ct(a, b) {
        function c(g) {
            var h = Mi(g),
                k = Ki(h, "protocol"),
                n = Ki(h, "host", !0),
                p = Ki(h, "port"),
                q = Ki(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p) k = "web", p = "default";
            return [k, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Dt(a) { return Et(a) ? 1 : 0 }

    function Et(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Bc(a, {});
                Bc({ arg1: c[d], any_of: void 0 }, e);
                if (Dt(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try { for (var g = 0; g < yt.length; g++) { var h = yt[g]; if (b[h]) { f = b[h](c); break a } } } catch (k) {}
                    f = !1
                }
                return f;
            case "_ew":
                return zt(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Bt(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Ct(b, c)
        }
        return !1
    };

    function Ft(a, b) { var c = this; };

    function Gt(a, b, c) { var d; return d };

    function Ht(a, b, c) {};

    function It(a, b, c, d) {};

    function Jt(a) {};

    function Nt(a) {};
    var Ot = {},
        Pt = [],
        Qt = {},
        Rt = 0,
        St = 0;

    function Zt(a, b) {}

    function fu(a, b) {};

    function ku(a) {};
    var lu = {},
        mu = [];
    var tu = function(a, b) {};

    function Au(a, b) {};
    var Bu = /^\s*$/,
        Cu, Du = !1;

    function Ou(a, b) {}

    function Pu(a, b, c) {};
    var Qu = ["www.youtube.com", "www.youtube-nocookie.com"],
        Ru, Su = !1,
        Tu = 0;

    function cv(a, b) {}

    function dv(a, b) { return !0 };

    function ev(a, b, c) {};

    function fv(a, b) { var c; return c };

    function gv(a) {};

    function hv(a) {};

    function iv(a) {
        L(F(this), ["listener:!Fn"], arguments);
        M(this, "process_dom_events", "window", "load");
        wr(Dc(a))
    };

    function jv(a) { var b; return b };

    function kv(a, b) {
        var c;
        var d = !1;
        var e = Cc(c, this.g, d);
        void 0 === e && void 0 !== c && yg(45);
        return e
    };

    function lv(a) { var b; return b };

    function mv(a, b) {
        var c = null,
            d = !1;
        return Cc(c, this.g, d)
    };

    function nv(a) { var b; var g = !1; return Cc(b, this.g, g) };
    var ov = {},
        pv = [],
        qv = {},
        rv = 0,
        sv = 0;
    var yv = function(a, b) { return b };

    function Dv(a, b) { return b };

    function Iv() {};
    var Jv = {},
        Kv = [];

    function Rv(a, b) { return b }

    function Vv(a, b) { return b };
    var Wv, Xv;
    var fw = function(a, b) { return b };
    var Nb = ba(["data-gtm-yt-inspected-"]),
        gw = ["www.youtube.com", "www.youtube-nocookie.com"],
        hw, iw = !1;

    function sw(a, b) { return b }

    function tw(a) { return !1 }
    var uw;

    function vw(a) { var b = !1; return b };
    var xw = function(a, b, c) {
            if (c) switch (c.type) {
                case "event_name":
                    return a;
                case "const":
                    return c.const_value;
                case "event_param":
                    var d = c.event_param.param_name;
                    return b[d]
            }
        },
        Aw = function(a, b, c, d) {
            if (c && !yw(a, b, c)) return !1;
            if (!d || 0 === d.length) return !0;
            for (var e = 0; e < d.length; e++)
                if (zw(a, b, d[e].predicates || [])) return !0;
            return !1
        },
        zw = function(a, b, c) {
            for (var d = 0; d < c.length; d++)
                if (!yw(a,
                        b, c[d])) return !1;
            return !0
        },
        yw = function(a, b, c) {
            var d = c.values || [],
                e = xw(a, b, d[0]),
                f = xw(a, b, d[1]),
                g = c.type;
            if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g) Ha(e) && (e = e.toLowerCase()), Ha(f) && (f = f.toLowerCase());
            var h = !1;
            switch (g) {
                case "eq":
                case "eqi":
                    h = String(e) === String(f);
                    break;
                case "sw":
                case "swi":
                    h = 0 === String(e).indexOf(String(f));
                    break;
                case "ew":
                case "ewi":
                    h = zt(e, f);
                    break;
                case "cn":
                case "cni":
                    h = 0 <= String(e).indexOf(String(f));
                    break;
                case "lt":
                    h = Number(e) < Number(f);
                    break;
                case "le":
                    h = Number(e) <= Number(f);
                    break;
                case "gt":
                    h = Number(e) > Number(f);
                    break;
                case "ge":
                    h = Number(e) >= Number(f);
                    break;
                case "re":
                case "rei":
                    h = Bt(e, f, "rei" === g)
            }
            return !!c.negate !== h
        };

    function Bw(a, b) { var c = !1; return c };
    var Cw = function(a) { var b; return b };

    function Dw(a, b) { b = void 0 === b ? !0 : b; var c; return c };

    function Ew() { var a = []; return Cc(a) };

    function Fw(a) { var b = null; return b };

    function Gw(a, b) { var c; return c };

    function Hw(a, b) { var c; return c };

    function Iw(a, b) { var c; return c };

    function Jw(a) { var b = ""; return b };

    function Kw(a, b) { var c; return c };

    function Lw(a) { var b = ""; return b };

    function Mw() { M(this, "get_user_agent"); return m.navigator.userAgent };

    function Nw(a) { return a ? { entityType: a.$g.type, indexInOriginContainer: a.$g.index, nameInOriginContainer: void 0, originContainerId: J.J } : {} };

    function Pw(a, b) {};

    function Qw(a, b) {};
    var Rw = {};

    function Sw(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], Yb(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) I(g[h]);
            g.push = function(k) { I(k); return 0 }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) I(g[h]);
            e[f] = null
        }, b)) : Yb(a, c, d, b)
    }

    function Tw(a, b, c, d) {}
    var Uw = Object.freeze({ dl: 1, id: 1 }),
        Vw = {};

    function Ww(a, b, c, d) {};

    function Xw(a) { var b = !0; return b };
    var Yw = function() { return !1 },
        Zw = {
            getItem: function(a) { var b = null; return b },
            setItem: function(a,
                b) { return !1 },
            removeItem: function(a) {}
        };
    var $w = ["textContent", "value", "tagName", "children", "childElementCount"];

    function ax(a) { var b; return b };

    function bx() {};

    function cx(a, b) { var c; return c };

    function dx(a) { var b = void 0; return b };

    function ex(a) {};

    function fx(a, b) { var c = !1; return c };

    function gx() { var a = ""; return a };

    function hx() { var a = ""; return a };
    var ix = function(a, b, c) {
            this.Za = a;
            this.eventName = b;
            this.g = c;
            this.Na = {};
            this.metadata = {}
        },
        jx = function(a, b, c) {
            var d = a.g.getWithConfig(b);
            void 0 !== d ? a.Na[b] = d : void 0 !== c && (a.Na[b] = c)
        };

    function mx(a, b) { var c = this; };
    var nx = Object.freeze(["config", "event", "get", "set"]);

    function ox(a, b, c) {};

    function px(a, b) { var c = !1; return c };

    function qx() {};

    function rx(a, b, c, d) { d = void 0 === d ? !1 : d; };

    function sx(a, b, c) {};

    function tx(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    };
    var ux = !1;

    function vx(a) {
        L(F(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Fb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== S.oe && M(this, "access_consent", e, "write")
        }
        var f = this.g.g,
            g = Nw(f);
        if (ux) {
            var h = jn("consent", "default", Dc(a));
            fs(h, f.eventId, g)
        } else Wg(Dc(a))
    }

    function wx(a, b, c) { return !1 };

    function xx(a, b, c) {
        L(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = wi(a) || {};
        d[b] = Dc(c, this.g);
        var e = a;
        ui || vi();
        ti[e] = d;
    };

    function yx(a, b, c) {};
    var zx = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function Ax(a, b, c, d) { var e = this; };

    function Bx(a, b, c) {};
    var Cx = {},
        Dx = {};
    Cx.getItem = function(a) { var b = null; return b };
    Cx.setItem = function(a, b) {};
    Cx.removeItem = function(a) {};
    Cx.clear = function() {};
    var Ex = function(a) { var b; return b };
    var Fx = !1;

    function Gx(a) {
        L(F(this), ["consentSettings:!DustMap"], arguments);
        var b = Dc(a),
            c;
        for (c in b) b.hasOwnProperty(c) && M(this, "access_consent", c, "write");
        var d = this.g.g,
            e = Nw(d);
        Fx ? fs(jn("consent", "update", b), d.eventId, e) : Yg(b, d.eventId)
    }
    var Hx = function() {
        var a = new lg;
        zn() ? (a.add("injectHiddenIframe", Fa), a.add("injectScript", Fa)) : (a.add("injectHiddenIframe", Qw), a.add("injectScript", Tw));
        var b = sx;
        a.add("Math", Qf());
        a.add("Object", jg);
        a.add("TestHelper", og());
        a.add("addConsentListener", Ft);
        a.add("addEventCallback", Jt);
        a.add("aliasInWindow", dv);
        a.add("assertApi",
            Mf);
        a.add("assertThat", Nf);
        a.add("callInWindow", fv);
        a.add("callLater", gv);
        a.add("copyFromDataLayer", kv);
        a.add("copyFromWindow", lv);
        a.add("createArgumentsQueue", mv);
        a.add("createQueue", nv);
        a.add("decodeUri", Rf);
        a.add("decodeUriComponent", Sf);
        a.add("encodeUri", Tf);
        a.add("encodeUriComponent", Uf);
        a.add("fail", Vf);
        a.add("fromBase64", Cw, !("atob" in m));
        a.add("generateRandom", Wf);
        a.add("getContainerVersion", Xf);
        a.add("getCookieValues", Dw);
        a.add("getQueryParameters", Hw);
        a.add("getReferrerQueryParameters",
            Iw);
        a.add("getReferrerUrl", Jw);
        a.add("getTimestamp", $f);
        a.add("getTimestampMillis", $f);
        a.add("getType", ag);
        a.add("getUrl", Lw);
        a.add("isConsentGranted", Xw);
        a.add("localStorage", Zw, !Yw());
        a.add("logToConsole", bx);
        a.add("makeInteger", cg);
        a.add("makeNumber", dg);
        a.add("makeString", eg);
        a.add("makeTableMap", fg);
        a.add("mock", ig);
        a.add("parseUrl", dx);
        a.add("queryPermission", fx);
        a.add("readCharacterSet", gx);
        a.add("readTitle", hx);
        a.add("sendPixel", b);
        a.add("setCookie", tx);
        a.add("setDefaultConsentState", vx);
        a.add("setInWindow", wx);
        a.add("sha256", Ax);
        a.add("templateStorage", Cx);
        a.add("toBase64", Ex, !("btoa" in m));
        a.add("updateConsentState", Gx);
        ng(a, "callOnWindowLoad", iv);
        ng(a, "internal.addFormInteractionListener", Zt);
        ng(a, "internal.addFormSubmitListener", fu);
        ng(a, "internal.addGaSendListener", ku);
        ng(a, "internal.addHistoryChangeListener", tu);
        ng(a, "internal.evaluateFilteringRules", tw);
        ng(a, "internal.evaluateMatchingRules", vw);
        ng(a, "internal.getFlags", Zf);
        ng(a, "internal.locateUserData", ax);
        ng(a, "internal.registerGtagCommandListener",
            ox);
        ng(a, "internal.sendGtagEvent", rx);
        a.add("JSON", bg(function(c) {
            var d = this.g.g;
            d && d.log.call(this, "error", c)
        }));
        ng(a, "internal.appendRemoteConfigParameter", ev), ng(a, "internal.getRemoteConfigParameter", Kw), ng(a, "internal.setRemoteConfigParameter", yx), ng(a, "internal.sortRemoteConfigParameters", Bx), ng(a, "internal.getProductSettingsParameter", Gw), ng(a, "internal.setProductSettingsParameter",
            xx);
        zn() ? ng(a, "internal.injectScript", Fa) : ng(a, "internal.injectScript", Ww);
        return function(c) {
            var d;
            if (a.g.hasOwnProperty(c)) d = a.get(c, this);
            else {
                var e;
                if (e = a.o.hasOwnProperty(c)) {
                    var f = !1,
                        g = this.g.g;
                    if (g) { var h = g.Yc(); if (h) { 0 !== h.indexOf("__cvt_") && (f = !0); } }
                    e = f
                }
                if (e) {
                    var k = a.o.hasOwnProperty(c) ?
                        a.o[c] : void 0;
                    d = k
                } else throw Error(c + " is not a valid API name.");
            }
            return d
        }
    };
    var Ix = function() { return !1 },
        Jx = function() { var a = {}; return function(b, c, d) {} };
    var Kx;

    function Lx() {
        var a = Kx;
        return function(b, c, d) {
            var e = d && d.event;
            Mx(c);
            var f = new nb;
            Qa(c, function(q, t) {
                var u = Cc(t);
                void 0 === u && void 0 !== t && yg(44);
                f.set(q, u)
            });
            a.g.g.F = Qe();
            var g = { Wi: bf(b), eventId: void 0 !== e ? e.id : void 0, Od: void 0 !== e ? function(q) { return e.Hb.Od(q) } : void 0, Yc: function() { return b }, log: function() {}, $g: { index: d && d.index, type: d && d.type } };
            if (Ix()) {
                var h =
                    Jx(),
                    k = void 0,
                    n = void 0;
                g.Ha = {
                    Mf: [],
                    Nc: {},
                    ub: function(q, t, u) {
                        1 === t && (k = q);
                        7 === t && (n = u);
                        h(q, t, u)
                    },
                    Bf: gg()
                };
                g.log = function(q, t) {
                    if (k) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, { level: q, source: n, message: u })
                    }
                }
            }
            var p = Yd(a, g, [b, f]);
            a.g.g.F = void 0;
            p instanceof ra && "return" === p.g && (p = p.o);
            return Dc(p)
        }
    }

    function Mx(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ga(b) && (a.gtmOnSuccess = function() { I(b) });
        Ga(c) && (a.gtmOnFailure = function() { I(c) })
    }

    function Nx() {
        Kx.g.g.O = function(a, b, c) {
            Vh.SANDBOXED_JS_SEMAPHORE = Vh.SANDBOXED_JS_SEMAPHORE || 0;
            Vh.SANDBOXED_JS_SEMAPHORE++;
            try { return a.apply(b, c) } finally { Vh.SANDBOXED_JS_SEMAPHORE-- }
        }
    }

    function Ox(a) {
        void 0 !== a && Qa(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                gi[e] = gi[e] || [];
                gi[e].push(b)
            }
        })
    };
    var Px = encodeURI,
        Y = encodeURIComponent,
        Qx = cc;
    var Rx = function(a, b) {
        if (!a) return !1;
        var c = Ki(Mi(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Sx = function(a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null };
    var bz = {};
    bz[S.Xb] = "";
    bz[S.Ca] = "";
    bz[S.Ja] = "";
    bz[S.ma] = "auto";
    bz[S.ib] = "/";
    bz[S.va] = 63072E3;
    bz[S.Fc] = 30;
    bz[S.Cd] = 1E4;
    bz[S.oa] = !0;
    var cz = function(a, b, c, d, e, f) {
        f = void 0 === f ? !1 : f;
        ix.call(this, a, b, d);
        this.s = c;
        this.I = d.eventModel;
        this.Dg = d.containerConfig;
        this.O = d.getWithConfig(S.hb) ? 1 : 8;
        this.Ye = d.getWithConfig(S.Zb) ? 1 : 8;
        this.F = e;
        this.Sa = this.We = this.Og = this.C = this.Kg = this.Lg = this.Fd = !1;
        this.Mb = 0;
        this.bf = this.fc = !1;
        this.cf = void 0;
        this.zb = 0;
        this.Hg = this.af = this.Ng = this.o = this.$e = this.Ze = void 0;
        this.Qi =
            f
    };
    ma(cz, ix);
    l = cz.prototype;
    l.La = function(a, b) { void 0 === this.B(a) && (this.I[a] = b) };
    l.Ah = function(a, b) { b <= this.O && (this.I[S.hb] = a, this.O = b) };
    l.nk = function(a, b) { b <= this.Ye && (this.I[S.Zb] = a, this.Ye = b) };
    l.B = function(a) { return void 0 !== this.I[a] ? this.I[a] : void 0 !== this.g.getWithConfig(a) ? this.g.getWithConfig(a) : void 0 !== this.F[a] ? this.F[a] : bz[a] };
    l.getRemoteConfig = function(a) { return void 0 !== this.g.remoteConfig[a] ? this.g.remoteConfig[a] : this.F[a] };
    l.ae = function(a) {
        var b = this.Lb(S.xd, this.F[S.xd]);
        if (b &&
            void 0 !== b[a || this.eventName]) return b[a || this.eventName]
    };
    l.Lb = function(a, b) { var c = wi(this.Za); return c && c.hasOwnProperty(a) ? c[a] : b };
    l.fh = function() { var a = this.B(S.Da); if ("object" === typeof a) return a };
    l.hh = function() { return !!this.fh() };
    l.abort = function() { throw "ABORT"; };
    l.$a = function() { return !(!0 !== this.B(S.Bc) && "true" !== this.B(S.Bc) || !this.B(S.wa)) };
    l.Pj = function() { return this.C || !!this.B(S.jg) };
    l.xf = function() { var a = !1; return a };
    l.cd = function() { return this.Lb(S.Ke, !1) };
    l.Mc = function() { return !1 !== this.B(S.ia) };
    l.ff = function() { return !1 !== this.B(S.X) };
    var dz = !1,
        ez = function(a) {
            var b = !1;
            b = a.eventName === S.xc && Mg() && a.$a();
            return !(!Rb.sendBeacon || a.fc || a.o && a.hh() || a.C || a.We || a.Sa || b || dz)
        };
    var fz = function(a) { vg("GA4_EVENT", a) };
    var hz = function(a) { return !a || gz.test(a) || S.Bi.hasOwnProperty(a) },
        iz = function(a, b, c) {
            for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.edit_param) {
                    var g = f.edit_param.param_name,
                        h = xw(a, b, f.edit_param.param_value),
                        k;
                    if (h) {
                        var n = Number(h);
                        k = isNaN(n) ? h : n
                    } else k = h;
                    b[g] = k
                } else f.delete_param && delete b[f.delete_param.param_name]
            }
        },
        gz = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    var jz = function(a) {
            var b = 0,
                c = 0;
            return {
                start: function() { b = Ya() },
                stop: function() { c = this.get() },
                get: function() {
                    var d = 0;
                    a.yf() && (d = Ya() - b);
                    return d + c
                }
            }
        },
        kz = function() {
            this.g = void 0;
            this.o = 0;
            this.isActive = this.isVisible = this.s = !1;
            this.F = this.C = void 0
        };
    l = kz.prototype;
    l.Ei = function(a) {
        var b = this;
        if (!this.g) {
            this.s = H.hasFocus();
            this.isVisible = !H.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                dc(d, e, function(g) {
                    b.g.stop();
                    f(g);
                    b.yf() && b.g.start()
                })
            };
            c(m, "focus", function() { b.s = !0 });
            c(m, "blur", function() {
                b.s = !1
            });
            c(m, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && yg(56);
                b.F && b.F()
            });
            c(m, "pagehide", function() {
                b.isActive = !1;
                b.C && b.C()
            });
            c(H, "visibilitychange", function() { b.isVisible = !H.hidden });
            a.$a() && -1 === (Rb.userAgent || "").indexOf("Firefox") && -1 === (Rb.userAgent || "").indexOf("FxiOS") && c(m, "beforeunload", function() { dz = !0 });
            this.Hf();
            this.o = 0
        }
    };
    l.Hf = function() {
        this.o +=
            this.$d();
        this.g = jz(this);
        this.yf() && this.g.start()
    };
    l.uk = function(a) { a.zb = this.$d() };
    l.Aj = function(a) {
        a.zb = 0;
        this.Hf();
        this.o = 0
    };
    l.yf = function() { return this.s && this.isVisible && this.isActive };
    l.uj = function() { return this.o + this.$d() };
    l.$d = function() { return this.g && this.g.get() || 0 };
    l.dk = function(a) { this.C = a };
    l.xh = function(a) { this.F = a };

    function lz() { return m.gaGlobal = m.gaGlobal || {} }
    var mz = function() {
            var a = lz();
            a.hid = a.hid || Na();
            return a.hid
        },
        nz = function(a, b) { var c = lz(); if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b };
    var rz = function(a, b) {
            var c;
            var d = oz(b),
                e = String(b.B(S.ma)),
                f = String(b.B(S.ib)),
                g = Number(b.B(S.va)),
                h = b.B(S.Yb),
                k = { cb: S.M, domain: e, path: f, expires: g ? new Date(Ya() + 1E3 * g) : void 0, flags: "" + b.B(S.Ja) };
            if (!1 === h && pz(b) === a) c = !0;
            else {
                var n = Ej(a, qz[0], e, f);
                c = 1 !== wj(d, n, k)
            }
            return c
        },
        pz = function(a) {
            var b = oz(a),
                c = "" + a.B(S.ma),
                d = "" + a.B(S.ib),
                e = Dj(b, c, d, qz, S.M);
            if (!e) {
                var f = String(a.B(S.Xb));
                f && f != b && (e = Dj(f, c, d, qz, S.M))
            }
            return e
        },
        oz = function(a) { return String(a.B(S.Ca)) + "_ga" },
        qz = ["GA1"];
    var uz = function(a, b) {
            var c = sz(b),
                d = String(b.B(S.ma)),
                e = String(b.B(S.ib)),
                f = Number(b.B(S.va)),
                g = Ej(a, tz[0], d, e),
                h = { cb: S.M, domain: d, path: e, expires: f ? new Date(Ya() + 1E3 * f) : void 0, flags: String(b.B(S.Ja)) };
            return 1 !== wj(c, g, h)
        },
        vz = function(a) {
            var b = sz(a),
                c = String(a.B(S.ma)),
                d = String(a.B(S.ib));
            return Dj(b, c, d, tz, S.M)
        },
        tz = ["GS1"],
        sz = function(a) { return String(a.B(S.Ca)) + "_ga_" + a.Za.substr(2) },
        wz = function(a) {
            var b;
            var c = a.I[S.Gc],
                d = a.I[S.Se],
                e = !!a.I[S.Oe],
                f = a.I[S.Zb];
            if (c && d) {
                var g = [c, d, Ta(a.I[S.Re]), a.s,
                    a.Mb
                ];
                b = g.join(".")
            } else b = void 0;
            return b
        };
    var xz = function(a) {
            var b = a.B(S.na),
                c = a.getRemoteConfig(S.na);
            if (c === b) return c;
            var d = Bc(b);
            c && c[S.P] && (d[S.P] = (d[S.P] || []).concat(c[S.P]));
            return d
        },
        yz = function(a, b) { var c = kk(!0); return "1" !== c._up ? {} : { clientId: c[a], zh: c[b] } },
        zz = function(a, b, c) {
            var d = kk(!0),
                e = d[b];
            e && (a.Ah(e, 2), rz(e, a));
            var f = d[c];
            f && uz(f, a);
            return !(!e || !f)
        },
        Az = !1,
        Bz = function(a) {
            var b = xz(a) || {},
                c = oz(a),
                d = sz(a);
            sk(b[S.ac], !!b[S.P]) && zz(a, c, d) && (Az = !0);
            b[S.P] && pk(function() {
                var e = {},
                    f = pz(a);
                f && (e[c] = f);
                var g = vz(a);
                g && (e[d] = g);
                var h =
                    nj("FPLC", void 0, void 0, S.M);
                h.length && (e._fplc = h[0]);
                return e
            }, b[S.P], b[S.Cc], !!b[S.bc])
        },
        Dz = function(a) {
            if (!a.B(S.pb)) return {};
            var b = oz(a),
                c = sz(a);
            qk(function() {
                var d;
                if (Zg("analytics_storage")) d = {};
                else {
                    var e = {};
                    d = (e._up = "1", e[b] = a.I[S.hb], e[c] = wz(a), e)
                }
                return d
            }, 1);
            return !Zg("analytics_storage") && Cz() ? yz(b, c) : {}
        },
        Cz = function() {
            var a = Ji(m.location, "host"),
                b = Ji(Mi(H.referrer), "host");
            return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
        };
    var Ez = function() {
        var a = Ya(),
            b = a + 864E5,
            c = 20,
            d = 5E3;
        return function() {
            var e = Ya();
            e >= b && (b = e + 864E5, d = 5E3);
            if (1 > d) return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c) return !1;
            d--;
            c--;
            return !0
        }
    };
    var Gz = function(a) {
            var b;
            b = Fz ? a.Na[S.Wa] : a.B(S.Wa);
            return Ki(Mi(b), "host", !0)
        },
        Fz = !1;
    var Hz = !1;
    Hz = !0;
    var Iz = "" + Na(),
        Jz = !1,
        Kz = void 0;
    var Lz = function() {
        if (Ga(m.__uspapi)) {
            var a = "";
            try {
                m.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Mz = function(a, b) {
            if (b.$a()) {
                var c = Lz();
                c && (a.us_privacy = c);
                var d = bo();
                d && (a.gdpr = d);
                var e = ao();
                e && (a.gdpr_consent = e)
            }
        },
        Nz = function(a, b) {
            if (Mg() && (a.gcs = $g(), b.af && (a.gcu = "1"), b.$a())) {
                Ng() && (a.gcd = ah());
                var c = b.B(S.W);
                a.adr = void 0 !== c && !1 !== c ? "1" : "0";
                b.af && (a.gcut = S.pe[b.Hg || ""]);
            }
        },
        Oz = function(a, b, c) {
            void 0 === c && (c = {});
            if ("object" === typeof b)
                for (var d in b) Oz(a + "." + d, b[d], c);
            else c[a] = b;
            return c
        },
        Pz = function(a) {
            var b = "https://www.google-analytics.com/g/collect",
                c = vn(a.B(S.wa), "/g/collect");
            if (c) return c;
            var d = !0;
            Zg(S.D) && Zg(S.M) || (d = !1);
            var e = a.Lb(S.kb, a.B(S.kb));
            e && !a.cd() && !1 !== a.B(S.yc) && Op() && d && (b = "https://analytics.google.com/g/collect");
            return b
        },
        Qz = {};
    Qz[S.yi] = "tid";
    Qz[S.hb] = "cid";
    Qz[S.lb] = "ul";
    Qz[S.Je] = "_fid";
    Qz[S.wg] = "tt";
    Qz[S.Me] = "ir";
    Qz[S.ug] = "sr";
    var Rz = {};
    Rz[S.Gc] = "sid";
    Rz[S.Se] = "sct";
    Rz[S.Re] = "seg";
    Rz[S.nb] = "dl";
    Rz[S.Wa] = "dr";
    Rz[S.Dc] = "dt";
    Rz[S.ja] = "cu";
    Rz[S.qb] = "uid";
    var Sz = {};
    Sz[S.Zf] = "cc";
    Sz[S.$f] = "ci";
    Sz[S.ag] = "cm";
    Sz[S.bg] = "cn";
    Sz[S.cg] = "cs";
    Sz[S.dg] = "ck";
    var Tz = function(a, b, c) {
        function d(A, B) {
            if (void 0 !== B && !S.zi.hasOwnProperty(A)) {
                null ===
                    B && (B = "");
                var C;
                if ("_" === A.charAt(0)) { e[A] = hf(B, 300) } else if (Qz[A]) C = Qz[A], e[C] = hf(B, 300);
                else if (Rz[A]) C = Rz[A], g[C] = hf(B, 300);
                else if (!t(A, B)) {
                    var E;
                    Sz[A] ? E = !0 : A !== S.zc ? E = !1 : ("object" !== typeof B && q(A, B), E = !0);
                    if (E) return;
                    q(A, B)
                }
            }
        }
        var e = {},
            f = {},
            g = {};
        e.v = "2";
        e.tid = a.Za;
        e.gtm = Dn();
        e._p = mz();
        a.cf && (e.sr = a.cf);
        a.$e && (e._z = a.$e);
        c && (e.em = c);
        a.Sa && (e._gaz = 1);
        Nz(e, a);
        Mz(e, a);
        a.Ng && (e.gtm_up = "1");
        var h = hb(Sh(a.g, S.aa, 1), ".");
        h && (e.gdid = h);
        f.en = hf(a.eventName, 40);
        a.Fd && (f._fv = a.Lg ? 2 : 1);
        a.Kg &&
            (f._nsi = 1);
        a.C && (f._ss = a.Og ? 2 : 1);
        a.fc && (f._c = 1);
        0 < a.zb && (f._et = a.zb);
        if (a.bf) {
            var k = a.B(S.da);
            if (Ka(k))
                for (var n = 0; n < k.length && 200 > n; n++) f["pr" + (n + 1)] = nf(k[n])
        }
        a.Ze && (f._eu = a.Ze);
        var p = hb(Sh(a.g, S.aa, 2), ".");
        p && (f.edid = p);
        for (var q = function(A, B) {
                A = hf(A, 40);
                var C = "ep." + A,
                    D = "epn." + A;
                A = Ja(B) ? D : C;
                var E = Ja(B) ? C : D;
                f.hasOwnProperty(E) && delete f[E];
                f[A] = hf(B, 100)
            }, t = function(A, B) {
                var C = A.split(".");
                if (A === S.Da && "object" !== typeof B) return q(A, B), !0;
                if (C[0] === S.Da) {
                    if ((1 < C.length || "object" === typeof B) && a.$a()) {
                        var D =
                            Oz(A, B);
                        Qa(D, function(E, G) { return void q(E, G) })
                    }
                    return !0
                }
                return !1
            }, u = 0; u < S.yg.length; ++u) {
            var r = S.yg[u];
            d(r, a.B(r))
        }
        a.bf && d(S.ja, a.B(S.ja));
        Qa(a.Dg, d);
        Qa(a.I, d);
        var v = Th(a.g),
            w = function(A, B) {
                if (void 0 !== B) {
                    null === B && (B = "");
                    var C = Sz[A];
                    C && (g[C] = hf(B, 300))
                }
            };
        "object" === typeof v[S.zc] ? Qa(v[S.zc], function(A, B) { w((S.zc + "_" + A).toLowerCase(), B) }) :
            Qa(v, w);
        var y;
        y = y || a.B(S.Ka) || {};
        !1 !== a.B(S.X) && Pp() || (y._npa = "1");
        Qa(y, function(A, B) {
            if (void 0 !== B && (null === B && (B = ""), b[A] !== B)) {
                if (A !== S.qb || g.uid) {
                    var C = (Ja(B) ? "upn." : "up.") + hf(A, 24);
                    f[C] = hf(B, 36)
                } else g.uid = hf(B, 36);
                b[A] = B
            }
        });
        var x = !1;
        return sf.call(this, { Fa: e, Pb: g, I: f }, Pz(a), a.$a(), x) || this
    };
    ma(Tz, sf);
    var Uz = function(a, b) { return a.replace(/\$\{([^\}]+)\}/g, function(c, d) { return b[d] || c }) },
        Vz = function(a) { var b = a.search; return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse") },
        Wz = function(a) {
            var b = {},
                c = "",
                d = a.pathname.indexOf("/g/collect");
            0 <= d && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c;
            return b
        },
        Xz = function(a, b) {
            var c = new m.XMLHttpRequest;
            c.withCredentials = !0;
            var d = b ? "POST" : "GET",
                e = "",
                f = 0,
                g = Mi(a),
                h = Wz(g),
                k = Vz(g);
            c.onprogress = function(n) {
                if (200 === c.status) {
                    e += c.responseText.substring(f);
                    f = n.loaded;
                    for (var p = Uz(e, h), q = p.indexOf("\n\n"); - 1 !== q;) {
                        var t;
                        a: {
                            var u = ca(p.substring(0, q).split("\n")),
                                r = u.next().value,
                                v = u.next().value;
                            if (r.startsWith("event: message") && v.startsWith("data: ")) try { t = JSON.parse(v.substring(v.indexOf(":") + 1)); break a } catch (T) {}
                            t = void 0
                        }
                        if (t) {
                            var w = t.send_pixel || [];
                            if (Array.isArray(w))
                                for (var y = 0; y < w.length; y++) {
                                    var x = w[y],
                                        A = En('',
                                            0);
                                    if (1 === A) {
                                        var B = Math.floor(2 * Math.random()) + 1,
                                            C, D = x,
                                            E = B,
                                            G = 0 < D.indexOf("?") ? "&" : "?";
                                        C = "" + D + G + "gtmexpsb=" + E;
                                        2 === B ? jc(C) : cc(C)
                                    } else 2 === A ? jc(x) : cc(x)
                                }
                        }
                        p = p.substring(q + 2);
                        q = p.indexOf("\n\n")
                    }
                    e = p
                }
            };
            c.open(d, k);
            c.send(b);
        };
    var aA = function(a, b, c, d) {
            var e = a + "?" + b;
            Yz && (d = !(0 === e.indexOf("https://www.google-analytics.com/g/collect") || 0 === e.indexOf("https://analytics.google.com/g/collect")));
            Zz && d && !dz ? Xz(e, c) : $z(a, b, c)
        },
        Zz = !1;
    Zz = !0;
    var Yz = !1;
    var bA = function() {
        this.C = 1;
        this.F = {};
        this.g = new tf;
        this.o = -1
    };
    bA.prototype.s = function(a, b) {
        var c = this,
            d;
        try { d = new Tz(a, this.F, b) } catch (n) { a.abort() }
        var e = ez(a);
        e && this.g.C(d) || this.flush();
        if (e && this.g.add(d)) {
            if (0 > this.o) {
                var f = m,
                    g = f.setTimeout,
                    h;
                a.$a() ? cA ? (cA = !1, h = dA) : h = eA : h = 5E3;
                this.o = g.call(f, function() { return c.flush() }, h)
            }
        } else {
            var k = vf(d, this.C++);
            aA(d.o, k.Ff, k.body, d.C);
            fA(d, { kk: a.We, lk: a.Sa, yj: String(a.Lb(S.Ad, a.B(S.Ad))), Mc: a.Mc(), ff: a.ff(), cd: a.cd() })
        }
    };
    bA.prototype.add = function(a) { a.o && !dz ? this.O(a) : this.s(a) };
    bA.prototype.flush =
        function() {
            if (this.g.events.length) {
                var a = wf(this.g, this.C++);
                aA(this.g.g, a.Ff, a.body, this.g.o);
                this.g = new tf;
                0 <= this.o && (m.clearTimeout(this.o), this.o = -1)
            }
        };
    bA.prototype.O = function(a) {
        var b = this,
            c = a.fh();
        c ? Fh(c, function(d) { b.s(a, 1 === d.split("~").length ? void 0 : d) }) : this.s(a)
    };
    var fA = function(a, b) {
            function c(q) { n.push(q + "=" + encodeURIComponent("" + a.Fa[q])) }
            var d = b.kk,
                e = b.lk,
                f = b.yj,
                g = b.Mc,
                h = b.ff,
                k = b.cd;
            if (d || e) {
                var n = [];
                c("tid");
                c("cid");
                c("gtm");
                n.push("aip=1");
                a.Pb.uid && n.push("uid=" + encodeURIComponent("" + a.Pb.uid));
                d && ($z("https://stats.g.doubleclick.net/g/collect", "v=2&" + n.join("&")), Tg("https://stats.g.doubleclick.net/g/collect?v=2&" + n.join("&")));
                if (e) {
                    n.push("z=" + Na());
                    if (!k) {
                        var p = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                        p && cc(p + n.join("&"))
                    }
                }
            }
        },
        $z = function(a, b, c) {
            var d = a + "?" + b;
            c ? Rb.sendBeacon && Rb.sendBeacon(d, c) : jc(d)
        },
        dA = En('', 500),
        eA = En('', 5E3),
        cA = !0;
    var gA = window,
        hA = document,
        iA = function(a) {
            var b = gA._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === gA["ga-disable-" + a]) return !0;
            try { var c = gA.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) {}
            for (var d = jj("AMP_TOKEN", String(hA.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return hA.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var jA = {};
    var kA = function() { var a = m.screen; return (a ? a.width : 0) + "x" + (a ? a.height : 0) },
        lA = function(a) { var b = nj("_opt_expid", void 0, void 0, S.M)[0]; if (b) { var c = decodeURIComponent(b).split("$"); if (3 === c.length) return c[2] } if (void 0 !== Vh.ga4_referrer_override) return Vh.ga4_referrer_override; var d = ni("gtm.gtagReferrer." + a.Za); return d ? "" + d : H.referrer },
        mA = function() {
            var a = "",
                b = H.location;
            if (b) {
                var c = b.pathname || "";
                "/" != c.charAt(0) && (c = "/" + c);
                a = b.protocol + "//" + b.hostname + c + b.search
            }
            return a
        },
        nA = function(a, b) {
            var c = S.D;
            Zg(c) || ch(function() {
                b.af = !0;
                b.Hg = c;
                a.Pg(b)
            }, c)
        },
        oA = {};
    jA.Ai = "";
    var pA = function(a, b) {
        this.Sa = a;
        this.fc = b;
        this.O = new bA;
        this.g = void 0;
        this.C = new kz;
        this.o = this.s = void 0;
        this.F = !1;
        this.zb = void 0
    };
    l = pA.prototype;
    l.Xj = function(a, b, c) {
        var d = this,
            e = !1;
        if (c.eventModel[S.cc]) {
            e = !0;
            if ("_" === a.charAt(0)) return;
            a !== S.Ba && a !== S.Ta && hz(a) && yg(58);
            qA(c)
        }
        var f = new cz(this.Sa, a,
                b, c, this.fc, e),
            g = [S.M],
            h = !1;
        h = f.$a();
        (f.Lb(S.kb, f.B(S.kb)) || h) && g.push(S.D);
        dh(function() { d.Yj(f) }, g)
    };
    l.Yj = function(a) {
        this.o = a;
        try {
            iA(a.Za) && (yg(28), a.abort());
            0 <= jA.Ai.replace(/\s+/g, "").split(",").indexOf(a.eventName) && (yg(33), a.abort());
            var b = a.ae();
            b && b.blacklisted && (yg(34), a.abort());
            var c = H.location.protocol;
            "http:" != c && "https:" != c && (yg(29), a.abort());
            Rb && "preview" == Rb.loadPurpose && (yg(30), a.abort());
            var d = Vh.grl;
            d || (d = Ez(), Vh.grl = d);
            d() || (yg(35), a.abort());
            this.Fi(a);
            this.C.uk(a);
            var g = this.wh,
                h;
            a.B(S.pb) && !Zg(S.M) && 1 !== a.O && (a.Ng = !0);
            a.eventName === S.Ba ? (a.B(S.pb) && Yk(["aw", "dc"]), Bz(a), h = Dz(a)) : h = {};
            g.call(this, h);
            a.eventName ==
                S.Ba && (a.Qi && 0 < Uh(a.g).length && (yg(68), 1 < Vh.configCount && yg(69)), a.B(S.oa) || a.abort(), a.g.eventModel[S.aa] && (a.g.containerConfig[S.aa] = a.g.eventModel[S.aa], a.g.eventModel[S.aa] = void 0), a.eventName = S.xc);
            var k = this.g,
                n = this.s,
                p = this.C,
                q = vz(a);
            q || (q = n);
            var t = Ta(a.B(S.Fc)),
                u;
            u = Ta(a.B(S.Cd));
            var r;
            a: {
                if (q) {
                    var v = q.split(".");
                    if (!(5 > v.length || 7 < v.length)) {
                        r = {
                            sessionId: v[0],
                            Lf: Number(v[1]),
                            ie: !!Number(v[2]),
                            zf: Number(v[3]),
                            Mb: Number(v[4] || 0),
                            nc: "1" === v[5],
                            Xd: "0" !== v[6] ? v[6] : void 0
                        };
                        break a
                    }
                }
                r = void 0
            }
            r && r.Mb && (a.Mb = Math.max(0, r.Mb - Math.max(0, a.s - r.zf)));
            var w = !1;
            r || (w = a.Fd = !0, r = { sessionId: String(a.s), Lf: 1, ie: !1, zf: a.s, nc: !1, Xd: void 0 });
            a.s > r.zf + 60 * t && (w = !0, r.sessionId = String(a.s), r.Lf++, r.ie = !1, r.Xd = void 0);
            if (w) a.C = !0, p.Aj(a);
            else if (p.uj() > u || a.eventName == S.xc) r.ie = !0;
            a.La(S.Gc, r.sessionId);
            a.La(S.Se, r.Lf);
            a.La(S.Re, r.ie ? 1 : 0);
            var B = a.B(S.hb),
                C = a.O;
            B || (B = pz(a), C = 3);
            B || (B = k, C = 5);
            if (!B) {
                var D = Zg(S.M),
                    E = lz();
                B = !E.from_cookie ||
                    D ? E.vid : void 0;
                C = 6
            }
            B ? B = "" + B : (a.Fd = a.Kg = !0, B = Aj(), C = 7);
            a.Ah(B, C);
            a: { a.La(S.nb, mA()); var G = lA(a);G && a.La(S.Wa, G);a.La(S.Dc, H.title);a.La(S.lb, (Rb.language || "").toLowerCase());a.cf = kA() }
            if (!1 !== a.B(S.yc) && Op() && Zg(S.D)) {
                var T = a.Lb(S.kb, a.B(S.kb));
                a.Pj() && (a.We = !!T);
                T && 0 === a.Mb && (a.Mb = 60, a.Sa = !0)
            }
            rA(a);
            a.bf = S.zg.hasOwnProperty(a.eventName);
            for (var N = a.B(S.Ne) || [], K = 0; K < N.length; K++) {
                var P = N[K];
                if (P.rule_result) {
                    a.La(S.wg, P.traffic_type);
                    fz(3);
                    break
                }
            }
            if (a.B(S.wa)) {
                var R = xz(a) || {},
                    O = sk(R[S.ac], !!R[S.P]) ? kk(!0)._fplc : void 0;
                a.I._fplc = O || (0 < nj("FPLC", void 0, void 0, S.M).length ? void 0 : "0")
            }
            if (void 0 === a.B(S.Me)) {
                var W = a.B(S.Bd),
                    ja, U;
                a: {
                    if (Az) {
                        var Aa = xz(a) || {};
                        if (Aa && Aa[S.P])
                            for (var Ia =
                                    Gz(a), Ea = Aa[S.P], oa = 0; oa < Ea.length; oa++)
                                if (Ea[oa] instanceof RegExp) { if (Ea[oa].test(Ia)) { U = !0; break a } } else if (0 <= Ia.indexOf(Ea[oa])) { U = !0; break a }
                    }
                    U = !1
                }
                var Q;
                if (!(Q = U))
                    if (Hz) Q = !1;
                    else {
                        var ta = Gz(a),
                            La;
                        var da = String(a.B(S.ma));
                        if ("none" !== da)
                            if ("auto" !== da) La = da;
                            else {
                                if (!Jz) {
                                    for (var Ra = String(a.B(S.ib)), pa = tj(), ab = 0; ab < pa.length; ab++)
                                        if ("none" !== pa[ab]) {
                                            var ac = String(a.B(S.Ca)) + "_ga_autodomain";
                                            if (0 === wj(ac, Iz, { cb: S.M, domain: pa[ab], path: Ra })) {
                                                wj(ac, void 0, { cb: S.M, domain: pa[ab], path: Ra });
                                                Kz = pa[ab];
                                                break
                                            }
                                        }
                                    Jz = !0
                                }
                                La = Kz
                            }
                        else La = void 0;
                        var bc = La;
                        Q = bc ? 0 <= ta.indexOf(bc) : !1
                    }
                if (!(ja = Q)) {
                    var Dd;
                    if (Dd = W) a: {
                        for (var ke = W.include_conditions || [], rh = Gz(a), bd = 0; bd < ke.length; bd++)
                            if (ke[bd].test(rh)) { Dd = !0; break a }
                        Dd = !1
                    }
                    ja = Dd
                }
                ja && (a.La(S.Me, 1), fz(4))
            }
            if (a.eventName == S.Ta) {
                var le = a.B(S.Va),
                    pf = a.B(S.jb),
                    qf = void 0;
                pf(qf || a.B(le));
                a.abort()
            }
            if (a.I[S.Kc]) delete a.I[S.Kc];
            else {
                var me = a.B(S.Ee);
                if (me) {
                    for (var cd = me.edit_rules || [], dd = !1, Ed = 0; Ed < cd.length; Ed++) {
                        var sh;
                        a: {
                            var Gb = a,
                                Fd = cd[Ed];
                            if (Aw(Gb.eventName, Gb.I, Fd.event_name_predicate, Fd.conditions || [])) {
                                if (Fd.new_event_name) {
                                    var Xq = Ha(Fd.new_event_name) ? String(Fd.new_event_name) : xw(Gb.eventName, Gb.I, Fd.new_event_name);
                                    if (hz(Xq)) { sh = !1; break a }
                                    Gb.eventName = String(Xq)
                                }
                                iz(Gb.eventName, Gb.I, Fd);
                                var Yq = Gb.I[S.Kc] = !0;
                                fz(2);
                                if (Yq) {
                                    var Zq = xg();
                                    Zq && (Gb.I[S.Ic] = Zq);
                                    Mq(Gb.eventName, Gb.I, Gb.Za);
                                    Gb.abort()
                                }
                                sh = !0
                            } else sh = !1
                        }
                        sh && (dd = !0)
                    }
                    for (var $q = me.synthesis_rules || [], Pk = 0; Pk < $q.length; Pk++) {
                        var th = a,
                            rf = $q[Pk];
                        if (Aw(th.eventName, th.I, rf.event_name_predicate, rf.conditions || [])) {
                            var Qk = rf.new_event_name;
                            if (!hz(Qk)) {
                                var Rk = rf.merge_source_event_params ? Bc(th.I) : {};
                                Rk[S.Kc] = !0;
                                iz(Qk, Rk, rf);
                                Mq(Qk, Rk, th.Za);
                                fz(1)
                            }
                        }
                    }
                }
            }
            var Sk =
                a.I[S.Ic];
            if (Ka(Sk))
                for (var Tk = 0; Tk < Sk.length; Tk++) fz(Sk[Tk]);
            var br = wg("GA4_EVENT");
            br && (a.Ze = br);
            sA(a);
            var xA = this.wh,
                cr = this.g,
                Uk;
            var Vk = wz(a);
            Vk ? (uz(Vk, a) || (yg(25), a.abort()), Uk = Vk) : Uk = void 0;
            var yA = Uk,
                uh;
            var ed = a.I[S.hb];
            cr && ed === cr ? uh = ed : ed ? (ed = "" + ed, rz(ed, a) || (yg(31), a.abort()), nz(ed, Zg(S.M)), uh = ed) : (yg(32), a.abort(), uh = "");
            xA.call(this, { clientId: uh, zh: yA });
            this.sk();
            a.$a() && ("page_view" === a.eventName || a.fc) && nA(this, a);
            this.C.Hf();
            var zA = this.zb,
                Wk = void 0;
            this.zb = Wk;
            this.Pg(a);
            a.g.onSuccess()
        } catch (EA) { a.g.onFailure() }
        delete ug.GA4_EVENT
    };
    l.Pg = function(a) { this.O.add(a) };
    l.wh = function(a) {
        var b = a.clientId,
            c = a.zh;
        b && c && (this.g = b, this.s = c)
    };
    l.flush = function() { this.O.flush() };
    l.sk = function() {
        var a = this;
        if (!this.F) {
            var b = Zg(S.M);
            bh([S.M], function() {
                var c = Zg(S.M);
                if (b ^ c && a.o && a.s && a.g) {
                    var d = a.g;
                    if (c) {
                        var e = pz(a.o);
                        e ? (a.g = e, a.s = vz(a.o)) : (rz(a.g, a.o), uz(a.s, a.o), nz(a.g, !0));
                    } else {
                        a.s = void 0;
                        a.g = void 0;
                    }
                    b = c
                }
            });
            this.F = !0
        }
    };
    l.Fi = function(a) { a.eventName !== S.Ta && this.C.Ei(a) };
    var rA = function(a) {
            var b = function(c) { return !!c && c.conversion };
            a.fc = b(a.ae());
            a.Fd && (a.Lg = b(a.ae("first_visit")));
            a.C && (a.Og = b(a.ae("session_start")))
        },
        sA = function(a) {
            var b = Object.keys(oA);
            if (b.length) {
                b.forEach(function(d) { oA[d] && vg("CCD", Number(d)) });
                var c = wg("CCD");
                c && (a.$e = "ccd." + c)
            }
        };

    function qA(a) {
        delete a.eventModel[S.cc];
        tA(a.eventModel)
    }
    var tA = function(a) {
        Qa(a, function(c) { "_" === c.charAt(0) && delete a[c] });
        var b = a[S.Ka] || {};
        Qa(b, function(c) { "_" === c.charAt(0) && delete b[c] })
    };
    var uA = function(a) {
            if ("prerender" == H.visibilityState) return !1;
            a();
            return !0
        },
        vA = function(a) {
            if (!uA(a)) {
                var b = !1,
                    c = function() {!b && uA(a) && (b = !0, ec(H, "visibilitychange", c), yg(55)) };
                dc(H, "visibilitychange", c);
                yg(54)
            }
        };
    var wA = function(a, b, c) { Lq(b, c, a) },
        AA = function(a, b, c) { Lq(b, c, a, !0) },
        CA = function(a, b) {
            var c = new pA(a, b);
            vA(function() { BA(a, c) });
        };

    function BA(a, b) {
        var c = b.C;
        Kq(a, function(d, e, f, g) { b.Xj(e, f, g) });
        c.dk(function() {
            Iq().flush();
            1E3 <= c.$d() && Rb.sendBeacon && wA(a, S.ve, {});
            dz = !0;
            b.flush();
            c.xh(function() {
                dz = !1;
                c.xh(void 0)
            })
        });
    }
    var Z = { h: {} };


    Z.h.ehl = ["google"],
        function() {
            function a(k) { return k.target && k.target.location && k.target.location.href ? k.target.location.href : Ps() }

            function b(k, n) {
                dc(k, "hashchange", function(p) {
                    var q = a(p);
                    n({ source: "hashchange", state: null, url: Rs(q), K: Qs(q) })
                })
            }

            function c(k, n) {
                dc(k, "popstate", function(p) {
                    var q = a(p);
                    n({ source: "popstate", state: p.state, url: Rs(q), K: Qs(q) })
                })
            }

            function d(k, n, p) {
                var q = n.history,
                    t = q[k];
                if (Ga(t)) try {
                    q[k] = function(u, r, v) {
                        t.apply(q, [].slice.call(arguments, 0));
                        p({
                            source: k,
                            state: u,
                            url: Rs(Ps()),
                            K: Qs(Ps())
                        })
                    }
                } catch (u) {}
            }

            function e() {
                var k = { source: null, state: X("history").state || null, url: Rs(Ps()), K: Qs(Ps()) };
                return function(n, p) {
                    var q = k,
                        t = {};
                    t[q.source] = !0;
                    t[n.source] = !0;
                    if (!t.popstate || !t.hashchange || q.K != n.K) {
                        var u = { event: "gtm.historyChange-v2", "gtm.historyChangeSource": n.source, "gtm.oldUrlFragment": k.K, "gtm.newUrlFragment": n.K, "gtm.oldHistoryState": k.state, "gtm.newHistoryState": n.state, "gtm.oldUrl": k.url, "gtm.newUrl": n.url, "gtm.triggers": p.join(",") };
                        k = n;
                        Ts(u)
                    }
                }
            }

            function f(k, n) {
                var p = "" +
                    n;
                if (g[p]) g[p].push(k);
                else {
                    var q = [k];
                    g[p] = q;
                    var t = e(),
                        u = -1;
                    h.push(function(r) {
                        0 <= u && Ms(u);
                        n ? u = Ns(function() {
                            t(r, q);
                            u = -1
                        }, n) : t(r, q)
                    })
                }
            }
            var g = {},
                h = [];
            (function(k) {
                Z.__ehl = k;
                Z.__ehl.m = "ehl";
                Z.__ehl.isVendorTemplate = !0;
                Z.__ehl.priorityOverride = 0
            })(function(k) {
                var n = X("self"),
                    p = k.vtp_uniqueTriggerId || "0",
                    q = k.vtp_groupEvents ? Number(k.vtp_groupEventsInterval) : 0;
                0 > q ? q = 0 : isNaN(q) && (q = 1E3);
                if (Ys("ehl")) {
                    var t = rs("ehl", "reg");
                    t ? (t(p, q),
                        I(k.vtp_gtmOnSuccess)) : I(k.vtp_gtmOnFailure)
                } else {
                    var u = function(r) { for (var v = 0; v < h.length; v++) h[v](r) };
                    b(n, u);
                    c(n, u);
                    d("pushState", n, u);
                    d("replaceState", n, u);
                    f(p, q);
                    ps("ehl", "reg", f);
                    Zs("ehl");
                    I(k.vtp_gtmOnSuccess)
                }
            })
        }();
    Z.h.sdl = ["google"],
        function() {
            function a() { return !!(Object.keys(k("horiz.pix")).length || Object.keys(k("horiz.pct")).length || Object.keys(k("vert.pix")).length || Object.keys(k("vert.pct")).length) }

            function b(x) {
                for (var A = [], B = x.split(","), C = 0; C < B.length; C++) {
                    var D = Number(B[C]);
                    if (isNaN(D)) return [];
                    p.test(B[C]) || A.push(D)
                }
                return A
            }

            function c() {
                var x = 0,
                    A = 0;
                return function() {
                    var B = yi(),
                        C = B.height;
                    x = Math.max(v.scrollLeft + B.width, x);
                    A = Math.max(v.scrollTop + C, A);
                    return { Tc: x, Uc: A }
                }
            }

            function d() {
                u = X("self");
                r = u.document;
                v = r.scrollingElement || r.body && r.body.parentNode;
                y = c()
            }

            function e(x, A, B, C) {
                var D = k(A),
                    E = {},
                    G;
                for (G in D) {
                    E.Sb = G;
                    if (D.hasOwnProperty(E.Sb)) {
                        var T = Number(E.Sb);
                        x < T || (Ts({ event: "gtm.scrollDepth", "gtm.scrollThreshold": T, "gtm.scrollUnits": B.toLowerCase(), "gtm.scrollDirection": C, "gtm.triggers": D[E.Sb].join(",") }), qs("sdl", A, function(N) { return function(K) { delete K[N.Sb]; return K } }(E), {}))
                    }
                    E = { Sb: E.Sb }
                }
            }

            function f() {
                var x = y(),
                    A = x.Tc,
                    B = x.Uc,
                    C = A / v.scrollWidth * 100,
                    D = B / v.scrollHeight * 100;
                e(A, "horiz.pix",
                    q.Id, t.Ag);
                e(C, "horiz.pct", q.Hd, t.Ag);
                e(B, "vert.pix", q.Id, t.Mg);
                e(D, "vert.pct", q.Hd, t.Mg);
                ps("sdl", "pending", !1)
            }

            function g() {
                var x = 250,
                    A = !1;
                r.scrollingElement && r.documentElement && u.addEventListener && (x = 50, A = !0);
                var B = 0,
                    C = !1,
                    D = function() {
                        C ? B = Ns(D, x) : (B = 0, f(), Ys("sdl") && !a() && (ec(u, "scroll", E), ec(u, "resize", E), ps("sdl", "init", !1)));
                        C = !1
                    },
                    E = function() {
                        A && y();
                        B ? C = !0 : (B = Ns(D, x), ps("sdl", "pending", !0))
                    };
                return E
            }

            function h(x, A, B) {
                if (A) {
                    var C = b(String(x));
                    qs("sdl", B, function(D) {
                        for (var E = 0; E < C.length; E++) {
                            var G =
                                String(C[E]);
                            D.hasOwnProperty(G) || (D[G] = []);
                            D[G].push(A)
                        }
                        return D
                    }, {})
                }
            }

            function k(x) { return rs("sdl", x, {}) }

            function n(x) {
                I(x.vtp_gtmOnSuccess);
                var A = x.vtp_uniqueTriggerId,
                    B = x.vtp_horizontalThresholdsPixels,
                    C = x.vtp_horizontalThresholdsPercent,
                    D = x.vtp_verticalThresholdUnits,
                    E = x.vtp_verticalThresholdsPixels,
                    G = x.vtp_verticalThresholdsPercent;
                switch (x.vtp_horizontalThresholdUnits) {
                    case q.Id:
                        h(B, A, "horiz.pix");
                        break;
                    case q.Hd:
                        h(C, A, "horiz.pct")
                }
                switch (D) {
                    case q.Id:
                        h(E, A, "vert.pix");
                        break;
                    case q.Hd:
                        h(G,
                            A, "vert.pct")
                }
                Ys("sdl") ? rs("sdl", "pending") || (w || (d(), w = !0), I(function() { return f() })) : (d(), w = !0, v && (Zs("sdl"), ps("sdl", "pending", !0), I(function() {
                    f();
                    if (a()) {
                        var T = g();
                        dc(u, "scroll", T);
                        dc(u, "resize", T)
                    } else ps("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = { Hd: "PERCENT", Id: "PIXELS" },
                t = { Mg: "vertical", Ag: "horizontal" },
                u, r, v, w = !1,
                y;
            (function(x) {
                Z.__sdl = x;
                Z.__sdl.m = "sdl";
                Z.__sdl.isVendorTemplate = !0;
                Z.__sdl.priorityOverride = 0
            })(function(x) { x.vtp_triggerStartOption ? n(x) : wr(function() { n(x) }) })
        }();



    Z.h.read_container_data = ["google"],
        function() {
            (function(a) {
                Z.__read_container_data = a;
                Z.__read_container_data.m = "read_container_data";
                Z.__read_container_data.isVendorTemplate = !0;
                Z.__read_container_data.priorityOverride = 0
            })(function() { return { assert: function() {}, R: function() { return {} } } })
        }();
    Z.h.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.m = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0
            })(function(a) { at(a.vtp_value, "c", a.vtp_gtmEventId); return a.vtp_value })
        }();
    Z.h.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.m = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0
            })(function(a) { return String(a.vtp_gtmCachedValues.event) })
        }();

    Z.h.u = ["google"],
        function() {
            var a = function(b) { return { toString: function() { return b } } };
            (function(b) {
                Z.__u = b;
                Z.__u.m = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Ss("gtm.url", 1)) || Ps();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Rs(String(c));
                var e = Mi(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ka(h) ?
                    n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) { var q = Ki(e, "QUERY", void 0, void 0, n[p]); if (void 0 != q && (!k || "" !== q)) { f = q; break a } }
                    f = void 0
                }
                else f = Ki(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0, void 0);
                return f
            })
        }();
    Z.h.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.m = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Ss(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                at(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.h.ytl = ["google"],
        function() {
            function a() { var r = Math.round(1E9 * Math.random()) + ""; return H.getElementById(r) ? a() : r }

            function b(r, v) {
                if (!r) return !1;
                for (var w = 0; w < p.length; w++)
                    if (0 <= r.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1
            }

            function c(r, v) {
                var w = r.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var y = r.setAttribute,
                            x;
                        var A = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) x = w + A + "enablejsapi=1";
                        else {
                            if (!t) {
                                var B = X("document");
                                t = B.location.protocol + "//" + B.location.hostname;
                                B.location.port && (t += ":" + B.location.port)
                            }
                            x = w + A + "enablejsapi=1&origin=" + encodeURIComponent(t)
                        }
                        y.call(r, "src", x);
                        return !0
                    }
                }
                return !1
            }

            function d(r, v) {
                if (!r.getAttribute("data-gtm-yt-inspected-" + v.Pa) && (r.setAttribute("data-gtm-yt-inspected-" + v.Pa, "true"), c(r, v.tb))) {
                    r.id || (r.id = a());
                    var w = X("YT"),
                        y = w.get(r.id);
                    y || (y = new w.Player(r.id));
                    var x = f(y, v),
                        A = {},
                        B;
                    for (B in x) A.wc = B, x.hasOwnProperty(A.wc) && y.addEventListener(A.wc, function(C) { return function(D) { return x[C.wc](D.data) } }(A)), A = { wc: A.wc }
                }
            }

            function e(r) {
                I(function() {
                    function v() {
                        for (var y =
                                w.getElementsByTagName("iframe"), x = y.length, A = 0; A < x; A++) d(y[A], r)
                    }
                    var w = X("document");
                    v();
                    As(v)
                })
            }

            function f(r, v) {
                var w, y;

                function x() {
                    K = Ls(function() { return { url: O, title: W, Vd: R, nf: r.getCurrentTime(), playbackRate: ja } }, v.Pa, r.getIframe());
                    R = 0;
                    W = O = "";
                    ja = 1;
                    return A
                }

                function A(Ea) {
                    switch (Ea) {
                        case q.PLAYING:
                            R = Math.round(r.getDuration());
                            O = r.getVideoUrl();
                            if (r.getVideoData) {
                                var oa = r.getVideoData();
                                W = oa ? oa.title : ""
                            }
                            ja = r.getPlaybackRate();
                            v.Rc ? Ts(K.createEvent("start")) : K.Ya();
                            P = k(v.jd, v.hd, r.getDuration());
                            return B(Ea);
                        default:
                            return A
                    }
                }

                function B() {
                    U = r.getCurrentTime();
                    Aa = Os().getTime();
                    K.If();
                    N();
                    return C
                }

                function C(Ea) {
                    var oa;
                    switch (Ea) {
                        case q.ENDED:
                            return E(Ea);
                        case q.PAUSED:
                            oa = "pause";
                        case q.BUFFERING:
                            var Q = r.getCurrentTime() - U;
                            oa = 1 < Math.abs((Os().getTime() - Aa) / 1E3 * ja - Q) ? "seek" : oa || "buffering";
                            r.getCurrentTime() && (v.Qc ? Ts(K.createEvent(oa)) : K.Ya());
                            T();
                            return D;
                        case q.UNSTARTED:
                            return x(Ea);
                        default:
                            return C
                    }
                }

                function D(Ea) {
                    switch (Ea) {
                        case q.ENDED:
                            return E(Ea);
                        case q.PLAYING:
                            return B(Ea);
                        case q.UNSTARTED:
                            return x(Ea);
                        default:
                            return D
                    }
                }

                function E() {
                    for (; y;) {
                        var Ea = w;
                        Ms(y);
                        Ea()
                    }
                    v.Pc && Ts(K.createEvent("complete", 1));
                    return x(q.UNSTARTED)
                }

                function G() {}

                function T() { y && (Ms(y), y = 0, w = G) }

                function N() {
                    if (P.length && 0 !== ja) {
                        var Ea = -1,
                            oa;
                        do {
                            oa = P[0];
                            if (oa.T > r.getDuration()) return;
                            Ea = (oa.T - r.getCurrentTime()) / ja;
                            if (0 > Ea && (P.shift(), 0 === P.length)) return
                        } while (0 > Ea);
                        w = function() {
                            y = 0;
                            w = G;
                            0 < P.length && P[0].T === oa.T && (P.shift(), Ts(K.createEvent("progress", oa.vb, oa.wb)));
                            N()
                        };
                        y = Ns(w, 1E3 * Ea)
                    }
                }
                var K, P = [],
                    R, O, W, ja, U, Aa, Ia = x(q.UNSTARTED);
                y = 0;
                w = G;
                return {
                    onStateChange: function(Ea) { Ia = Ia(Ea) },
                    onPlaybackRateChange: function(Ea) {
                        U = r.getCurrentTime();
                        Aa = Os().getTime();
                        K.Ya();
                        ja = Ea;
                        T();
                        N()
                    }
                }
            }

            function g(r) {
                for (var v = r.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                    var A = parseInt(v[x], 10);
                    isNaN(A) || 100 < A || 0 > A || y.push(A / 100)
                }
                y.sort(function(B, C) { return B - C });
                return y
            }

            function h(r) {
                for (var v = r.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                    var A = parseInt(v[x], 10);
                    isNaN(A) || 0 > A || y.push(A)
                }
                y.sort(function(B, C) { return B - C });
                return y
            }

            function k(r, v, w) {
                var y = r.map(function(B) {
                    return {
                        T: B,
                        wb: B,
                        vb: void 0
                    }
                });
                if (!v.length) return y;
                var x = v.map(function(B) { return { T: B * w, wb: void 0, vb: B } });
                if (!y.length) return x;
                var A = y.concat(x);
                A.sort(function(B, C) { return B.T - C.T });
                return A
            }

            function n(r) {
                var v = !!r.vtp_captureStart,
                    w = !!r.vtp_captureComplete,
                    y = !!r.vtp_capturePause,
                    x = g(r.vtp_progressThresholdsPercent + ""),
                    A = h(r.vtp_progressThresholdsTimeInSeconds + ""),
                    B = !!r.vtp_fixMissingApi;
                if (v || w || y || x.length || A.length) {
                    var C = { Rc: v, Pc: w, Qc: y, hd: x, jd: A, tb: B, Pa: void 0 === r.vtp_uniqueTriggerId ? "" : r.vtp_uniqueTriggerId },
                        D = X("YT"),
                        E = function() { e(C) };
                    I(r.vtp_gtmOnSuccess);
                    if (D) D.ready && D.ready(E);
                    else {
                        var G = X("onYouTubeIframeAPIReady");
                        Us("onYouTubeIframeAPIReady", function() {
                            G && G();
                            E()
                        });
                        I(function() {
                            for (var T = X("document"), N = T.getElementsByTagName("script"), K = N.length, P = 0; P < K; P++) { var R = N[P].getAttribute("src"); if (b(R, "iframe_api") || b(R, "player_api")) return }
                            for (var O = T.getElementsByTagName("iframe"), W = O.length, ja = 0; ja < W; ja++)
                                if (!u && c(O[ja], C.tb)) {
                                    V("https://www.youtube.com/iframe_api");
                                    u = !0;
                                    break
                                }
                        })
                    }
                } else I(r.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 },
                t, u = !1;
            (function(r) {
                Z.__ytl = r;
                Z.__ytl.m = "ytl";
                Z.__ytl.isVendorTemplate = !0;
                Z.__ytl.priorityOverride = 0
            })(function(r) { r.vtp_triggerStartOption ? n(r) : Hl(function() { n(r) }) })
        }();


    Z.h.aev = ["google"],
        function() {
            function a(t, u, r, v, w) {
                w || (w = "element");
                var y = u + "." + r,
                    x;
                if (n.hasOwnProperty(y)) x = n[y];
                else {
                    var A = t[w];
                    if (A && (x = v(A), n[y] = x, p.push(y), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return x
            }

            function b(t, u, r) { var v = t[q[u]]; return void 0 !== v ? v : r }

            function c(t, u) {
                if (!t) return !1;
                var r = d(Ps());
                Ka(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
                for (var v = [r], w = 0; w < u.length; w++) {
                    var y = u[w];
                    if (y.hasOwnProperty("is_regex"))
                        if (y.is_regex) try { y = new RegExp(y.domain) } catch (B) { continue } else y =
                            y.domain;
                    var x = d(t);
                    if (y instanceof RegExp) { if (y.test(x)) return !1 } else {
                        var A = y;
                        if (0 != A.length) {
                            if (0 <= x.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !Rx(t, v)
            }

            function d(t) { k.test(t) || (t = "http://" + t); return Ki(Mi(t), "HOST", !0) }

            function e(t, u, r, v) {
                switch (t) {
                    case "SUBMIT_TEXT":
                        return a(u, r, "FORM." + t, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(u, r, "FORM." + t, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return h(u, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return h(u, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return h(u,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var y = u.interactedFormFieldPosition;
                        return void 0 === y ? v : y;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var x = u.interactSequenceNumber;
                        return void 0 === x ? v : x;
                    default:
                        return v
                }
            }

            function f(t) {
                switch (t.tagName.toLowerCase()) {
                    case "input":
                        return fc(t, "value");
                    case "button":
                        return gc(t);
                    default:
                        return null
                }
            }

            function g(t) { if ("form" === t.tagName.toLowerCase() && t.elements) { for (var u = 0, r = 0; r < t.elements.length; r++) vs(t.elements[r]) && u++; return u } }

            function h(t, u, r) {
                var v = t.interactedFormField;
                return v && fc(v, u) || r
            }
            var k = /^https?:\/\//i,
                n = {},
                p = [],
                q = { ATTRIBUTE: "elementAttribute", CLASSES: "elementClasses", ELEMENT: "element", ID: "elementId", HISTORY_CHANGE_SOURCE: "historyChangeSource", HISTORY_NEW_STATE: "newHistoryState", HISTORY_NEW_URL_FRAGMENT: "newUrlFragment", HISTORY_OLD_STATE: "oldHistoryState", HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment", TARGET: "elementTarget" };
            (function(t) {
                Z.__aev = t;
                Z.__aev.m = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0
            })(function(t) {
                var u = t.vtp_gtmEventId,
                    r = t.vtp_defaultValue,
                    v = t.vtp_varType,
                    w = t.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var y = w.element;
                        return y && y.tagName || r;
                    case "TEXT":
                        return a(w, u, v, gc) || r;
                    case "URL":
                        var x;
                        a: {
                            var A = String(w.elementUrl || r || ""),
                                B = Mi(A),
                                C = String(t.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    x = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    x = c(A, t.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    x = Ki(B, C, t.vtp_stripWww, t.vtp_defaultPages, t.vtp_queryKey)
                            }
                        }
                        return x;
                    case "ATTRIBUTE":
                        var D;
                        if (void 0 === t.vtp_attribute) D = b(w, v, r);
                        else {
                            var E = w.element;
                            D = E && fc(E, t.vtp_attribute) ||
                                r || ""
                        }
                        return D;
                    case "MD":
                        var G = t.vtp_mdValue,
                            T = a(w, u, "MD", Hs);
                        return G && T ? Ks(T, G) || r : T || r;
                    case "FORM":
                        return e(String(t.vtp_component || "SUBMIT_TEXT"), w, u, r);
                    default:
                        var N = b(w, v, r);
                        at(N, "aev", t.vtp_gtmEventId);
                        return N
                }
            })
        }();
    Z.h.dlm = ["google"],
        function() {
            (function(a) {
                Z.__dlm = a;
                Z.__dlm.m = "dlm";
                Z.__dlm.isVendorTemplate = !0;
                Z.__dlm.priorityOverride = 0
            })(function(a) {
                var b = Sx(a.vtp_userInput || [], "key", "value") || {};
                a.vtp_synchronousWrite ? Qa(b, function(c, d) { qi(c, d) }) : Ts(b);
                I(a.vtp_gtmOnSuccess)
            })
        }();

    Z.h.gct = ["google"],
        function() {
            function a(d) {
                for (var e = [], f = 0; f < d.length; f++) try { e.push(new RegExp(d[f])) } catch (g) {}
                return e
            }

            function b(d) { return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&") }

            function c(d) {
                for (var e = [], f = 0; f < d.length; f++) {
                    var g = d[f].matchValue,
                        h;
                    switch (d[f].matchType) {
                        case "BEGINS_WITH":
                            h = "^" + b(g);
                            break;
                        case "ENDS_WITH":
                            h = b(g) + "$";
                            break;
                        case "EQUALS":
                            h = "^" + b(g) + "$";
                            break;
                        case "REGEX":
                            h = g;
                            break;
                        default:
                            h = b(g)
                    }
                    e.push(h)
                }
                return e
            }(function(d) {
                Z.__gct = d;
                Z.__gct.m = "gct";
                Z.__gct.isVendorTemplate = !0;
                Z.__gct.priorityOverride = 0
            })(function(d) {
                var e = {};
                0 < d.vtp_sessionDuration && (e[S.Fc] = d.vtp_sessionDuration);
                e[S.xd] = d.vtp_eventSettings;
                e[S.Ee] = d.vtp_dynamicEventSettings;
                e[S.kb] = 1 === d.vtp_googleSignals;
                e[S.Ad] = d.vtp_foreignTld;
                e[S.Ke] = 1 === d.vtp_restrictDomain;
                e[S.Ne] = d.vtp_internalTrafficResults;
                var f = S.na,
                    g = d.vtp_linker;
                g && g[S.P] && (g[S.P] = a(g[S.P]));
                e[f] = g;
                var h = S.Bd,
                    k = d.vtp_referralExclusionDefinition;
                k && k.include_conditions && (k.include_conditions = a(k.include_conditions));
                e[h] = k;
                var n = Pq(d.vtp_trackingId),
                    p = n.referral_exclusion_conditions;
                p && (p.length && "object" === typeof p[0] && (p = c(p)), e[S.Bd] = { include_conditions: a(p) });
                var q = n.cross_domain_conditions;
                if (q) {
                    q.length && "object" === typeof q[0] && (q = c(q));
                    var t = {};
                    e[S.na] = (t[S.P] = a(q), t[S.bc] = !0, t[S.ac] = !0, t[S.Cc] = "query", t)
                }
                CA(d.vtp_trackingId, e);
                I(d.vtp_gtmOnSuccess)
            })
        }();



    Z.h.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.m = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_settings;
                (a.vtp_deferrable ? AA : wA)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess()
            })
        }();








    Z.h.lcl = [],
        function() {
            function a() {
                var c = X("document"),
                    d = 0,
                    e = function(f) {
                        var g = f.target;
                        if (g && 3 !== f.which && !(f.dd || f.timeStamp && f.timeStamp === d)) {
                            d = f.timeStamp;
                            g = ic(g, ["a", "area"], 100);
                            if (!g) return f.returnValue;
                            var h = f.defaultPrevented || !1 === f.returnValue,
                                k = rs("lcl", h ? "nv.mwt" : "mwt", 0),
                                n;
                            n = h ? rs("lcl", "nv.ids", []) : rs("lcl", "ids", []);
                            if (n.length) {
                                var p = ns(g, "gtm.linkClick", n);
                                if (b(f, g, c) && !h && k && g.href) {
                                    var q = !!Ma(String(kc(g, "rel") || "").split(" "), function(v) { return "noreferrer" === v.toLowerCase() });
                                    q && yg(36);
                                    var t = X((kc(g, "target") || "_self").substring(1)),
                                        u = !0,
                                        r = Xr(function() {
                                            var v;
                                            if (v = u && t) {
                                                var w;
                                                a: if (q) {
                                                        var y;
                                                        try { y = new MouseEvent(f.type, { bubbles: !0 }) } catch (x) {
                                                            if (!c.createEvent) { w = !1; break a }
                                                            y = c.createEvent("MouseEvents");
                                                            y.initEvent(f.type, !0, !0)
                                                        }
                                                        y.dd = !0;
                                                        f.target.dispatchEvent(y);
                                                        w = !0
                                                    } else w = !1;
                                                v = !w
                                            }
                                            v && (t.location.href = kc(g, "href"))
                                        }, k);
                                    if (Ts(p, r, k)) u = !1;
                                    else return f.preventDefault && f.preventDefault(), f.returnValue = !1
                                } else Ts(p, function() {}, k || 2E3);
                                return !0
                            }
                        }
                    };
                dc(c, "click", e, !1);
                dc(c, "auxclick",
                    e, !1)
            }

            function b(c, d, e) {
                if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                var f = kc(d, "href"),
                    g = f.indexOf("#"),
                    h = kc(d, "target");
                if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
                if (0 < g) {
                    var k = Rs(f),
                        n = Rs(e.location);
                    return k !== n
                }
                return !0
            }(function(c) {
                Z.__lcl = c;
                Z.__lcl.m = "lcl";
                Z.__lcl.isVendorTemplate = !0;
                Z.__lcl.priorityOverride = 0
            })(function(c) {
                var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
                    e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
                    f = Number(c.vtp_waitForTagsTimeout);
                if (!f || 0 >= f) f = 2E3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    var h = function(n) { return Math.max(f, n) };
                    qs("lcl", "mwt", h, 0);
                    e || qs("lcl", "nv.mwt", h, 0)
                }
                var k = function(n) { n.push(g); return n };
                qs("lcl", "ids", k, []);
                e || qs("lcl", "nv.ids", k, []);
                Ys("lcl") || (a(), Zs("lcl"));
                I(c.vtp_gtmOnSuccess)
            })
        }();
    var DA = {};
    DA.dataLayer = oi;
    DA.callback = function(a) {
        fi.hasOwnProperty(a) && Ga(fi[a]) && fi[a]();
        delete fi[a]
    };
    DA.bootstrap = 0;
    DA._spx = !1;
    (function(a) {
        if (!m["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (H.referrer) {
                var c = Mi(H.referrer);
                b = "cct.google" === Ji(c, "host")
            }
            if (!b) {
                var d = nj("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (m["__TAGGY_INSTALLED"] = !0, Yb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
                var t = "GTM",
                    u = "GTM";
                t = "OGT", u = "GTAG";
                var r = m["google.tagmanager.debugui2.queue"];
                r || (r = [], m["google.tagmanager.debugui2.queue"] = r, Yb("https://" + J.qe + "/debug/bootstrap?id=" + J.J + "&src=" + u + "&cond=" + q + "&gtm=" + Dn()));
                var v = { messageType: "CONTAINER_STARTING", data: { scriptSource: Sb, containerProduct: t, debug: !1, id: J.J } };
                v.data.resume = function() { a() };
                J.Qh && (v.data.initialPublish = !0);
                r.push(v)
            },
            g = void 0,
            h = Ki(m.location, "query", !1, void 0, "gtm_debug");
        gs(h) && (g = 2);
        if (!g && H.referrer) { var k = Mi(H.referrer); "tagassistant.google.com" === Ji(k, "host") && (g = 3) }
        if (!g) {
            var n = nj("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = H.documentElement.getAttribute("data-tag-assistant-present");
            gs(p) && (g = 5)
        }
        g && Sb ? f(g) : a()
    })(function() {
        var a = !1;
        a && Ql("INIT");
        Bg().o();
        $n();
        tk.enable_gbraid_cookie_write = !0;
        var b = !!Vh[J.J];
        if (b) {
            var c = Vh.zones;
            c && c.unregisterChild(J.J);
        } else {
            for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) ye.push(g[h]);
            for (var k = f.tags || [], n = 0; n < k.length; n++) Be.push(k[n]);
            for (var p = f.predicates || [], q = 0; q < p.length; q++) Ae.push(p[q]);
            for (var t = f.rules || [], u = 0; u < t.length; u++) {
                for (var r = t[u], v = {},
                        w = 0; w < r.length; w++) v[r[w][0]] = Array.prototype.slice.call(r[w], 1);
                ze.push(v)
            }
            De = Z;
            Ee = Dt;
            af = new $e;
            var y = data.sandboxed_scripts,
                x = data.security_groups,
                A = data.runtime || [],
                B = data.runtime_lines;
            Kx = new Wd;
            Nx();
            xe = Lx();
            var C = Kx,
                D = Hx();
            qb(C.g, "require", D);
            for (var E = 0; E < A.length; E++) {
                var G = A[E];
                if (!Ka(G) || 3 > G.length) { if (0 === G.length) continue; break }
                B && B[E] && B[E].length && Ne(G, B[E]);
                Kx.execute(G)
            }
            if (void 0 !== y)
                for (var T = ["sandboxedScripts"], N = 0; N < y.length; N++) {
                    var K = y[N].replace(/^_*/, "");
                    gi[K] = T
                }
            Ox(x);
            Vh[J.J] =
                DA;
            bb(gi, Z.h);
            Ge = Ue;
            es();
            Cl = !1;
            Dl = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) Fl();
            else {
                dc(H, "DOMContentLoaded", Fl);
                dc(H, "readystatechange", Fl);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var P = !0;
                    try { P = !m.frameElement } catch (U) {}
                    P && Gl()
                }
                dc(m, "load", Fl)
            }
            tr = !1;
            "complete" === H.readyState ? vr() : dc(m, "load", vr);
            Lm && m.setInterval(Fm, 864E5);
            di = Ya();
            DA.bootstrap = di;
            if (a) {
                var ja = Rl("INIT");
            }
        }
    });

})()