! function() {
    var e, t, n, i, r, a = {
            39474: function(e, t, n) {
                "use strict";
                n.d(t, {
                    kA: function() { return rt },
                    ws: function() { return lt },
                    jP: function() { return nt },
                    nu: function() { return Ue },
                    cD: function() { return ut },
                    v5: function() { return Xe },
                    nL: function() { return De },
                    Fo: function() { return Ze },
                    cp: function() { return et },
                    r: function() { return Ce },
                    FC: function() { return gt },
                    iT: function() { return mt },
                    sq: function() { return Se },
                    qo: function() { return xe },
                    sD: function() { return We },
                    zG: function() { return Re },
                    W2: function() { return we },
                    wA: function() { return Ae },
                    Yf: function() { return $e },
                    ni: function() { return Te },
                    Tj: function() { return Ne },
                    pP: function() { return Ve },
                    yC: function() { return dt },
                    GN: function() { return ot },
                    R2: function() { return He },
                    aG: function() { return Le },
                    Px: function() { return Je },
                    cR: function() { return ye }
                });
                var i = n(12198);

                function r(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function a(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, a) {
                            var o = e.apply(t, n);

                            function s(e) { r(o, i, a, s, l, "next", e) }

                            function l(e) { r(o, i, a, s, l, "throw", e) }
                            s(void 0)
                        }))
                    }
                }

                function o(e) { return s.apply(this, arguments) }

                function s() {
                    return (s = a(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l(t);
                                case 2:
                                    return n = e.sent, e.abrupt("return", !!n && !n.isAnonymous);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function l(e) { return c.apply(this, arguments) }

                function c() {
                    return (c = a(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t.currentUser) { e.next = 4; break }
                                    return e.abrupt("return", t.currentUser);
                                case 4:
                                    return e.abrupt("return", new Promise((function(e) { t.onAuthStateChanged((function(t) { e(t) })) })));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function u(e) { return h.apply(this, arguments) }

                function h() {
                    return (h = a(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.signInAnonymously();
                                case 2:
                                    return e.abrupt("return", t.currentUser);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function d(e, t) { return f.apply(this, arguments) }

                function f() {
                    return (f = a(regeneratorRuntime.mark((function e(t, n) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n.addScope("https://www.googleapis.com/auth/drive.readonly"), n.addScope("https://www.googleapis.com/auth/spreadsheets.readonly"), n.setCustomParameters({ prompt: "select_account" }), e.next = 5, t.signInWithPopup(n);
                                case 5:
                                    return i = e.sent, e.abrupt("return", i.credential.accessToken);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function m(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function p(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { m(a, i, r, o, s, "next", e) }

                            function s(e) { m(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }

                function g(e, t, n) { return e.doc("accounts/".concat(n)).set({ uid: n, lastActive: t }) }

                function v(e, t) { return w.apply(this, arguments) }

                function w() {
                    return (w = p(regeneratorRuntime.mark((function e(t, n) {
                        var i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.collection("accounts/".concat(n, "/wheels")).get();
                                case 2:
                                    return i = e.sent, r = [], i.forEach((function(e) { r.push(e.data().config) })), e.abrupt("return", r.sort((function(e, t) { return e.title.localeCompare(t.title, "en", { numeric: !0, sensitivity: "base" }) })));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function b(e, t) { return y.apply(this, arguments) }

                function y() {
                    return (y = p(regeneratorRuntime.mark((function e(t, n) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("admins/".concat(n)).update({ totalReviews: 0, sessionReviews: 0 });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function k(e, t, n, i) { return C.apply(this, arguments) }

                function C() {
                    return (C = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                        var o, s, l, c, u;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = i.Qg(a), s = t.doc("accounts/".concat(r, "/wheels/").concat(o)), e.next = 4, s.get();
                                case 4:
                                    if (!(l = e.sent).exists) { e.next = 10; break }
                                    return c = l.data(), u = { lastRead: n, readCount: c.readCount + 1 }, e.next = 10, s.update(u);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function _(e, t, n) { return x.apply(this, arguments) }

                function x() {
                    return (x = p(regeneratorRuntime.mark((function e(t, n, r) {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = i.Qg(r), e.next = 3, t.doc("accounts/".concat(n, "/wheels/").concat(a)).delete();
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function F(e, t, n, i) { return S.apply(this, arguments) }

                function S() {
                    return (S = p(regeneratorRuntime.mark((function e(t, n, r, a) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, g(t, n, r);
                                case 2:
                                    return a.title = i.Qg(a.title), e.next = 5, ae(t, r, a.title);
                                case 5:
                                    if (!e.sent) { e.next = 9; break }
                                    se(t, n, r, a), e.next = 10;
                                    break;
                                case 9:
                                    ce(t, n, r, a);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function E(e) { return D.apply(this, arguments) }

                function D() {
                    return (D = p(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("settings/DIRTY_WORDS").get();
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.data().value.sort());
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function I(e, t) { return R.apply(this, arguments) }

                function R() {
                    return (R = p(regeneratorRuntime.mark((function e(t, n) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = n.map((function(e) { return e.toLowerCase() })).sort(), e.next = 3, t.doc("settings/DIRTY_WORDS").set({ value: i });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function A(e) { return P.apply(this, arguments) }

                function P() {
                    return (P = p(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.collection("admins").orderBy("name").get();
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.docs.map((function(e) { return e.data() })));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function $(e) { return O.apply(this, arguments) }

                function O() {
                    return (O = p(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("settings/EARNINGS_PER_REVIEW").get();
                                case 2:
                                    return n = e.sent, e.abrupt("return", parseFloat(n.data().value));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function T(e, t) { return N.apply(this, arguments) }

                function N() {
                    return (N = p(regeneratorRuntime.mark((function e(t, n) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("admins/".concat(n)).delete();
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function j(e, t, n) { return W.apply(this, arguments) }

                function W() {
                    return (W = p(regeneratorRuntime.mark((function e(t, n, i) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("admins/".concat(n)).set({ uid: n, name: i });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function B(e, t) { return L.apply(this, arguments) }

                function L() {
                    return (L = p(regeneratorRuntime.mark((function e(t, n) {
                        var i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = t.batch(), e.next = 3, t.collection("carousels").get();
                                case 3:
                                    return e.sent.forEach((function(e) { return i.delete(e.ref) })), e.next = 7, i.commit();
                                case 7:
                                    r = 0;
                                case 8:
                                    if (!(r < n.length)) { e.next = 14; break }
                                    return e.next = 11, t.doc("carousels/".concat(r)).set(n[r]);
                                case 11:
                                    r++, e.next = 8;
                                    break;
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function M(e, t, n, i) { return V.apply(this, arguments) }

                function V() {
                    return (V = p(regeneratorRuntime.mark((function e(t, n, i, r) {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (a = t.batch()).update(t.doc("shared-wheels/".concat(i)), { reviewStatus: "Approved" }), a.delete(t.doc("shared-wheels-review-queue/".concat(i))), a.update(t.doc("admins/".concat(r)), { totalReviews: n, sessionReviews: n, lastReview: new Date }), e.next = 6, a.commit();
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function z(e, t, n, i) { return U.apply(this, arguments) }

                function U() {
                    return (U = p(regeneratorRuntime.mark((function e(t, n, i, r) {
                        var a, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("shared-wheels/".concat(i)).get();
                                case 2:
                                    return (a = e.sent).exists && (o = a.data()), e.next = 6, Promise.all([t.doc("shared-wheels/".concat(i)).delete(), t.doc("shared-wheels-review-queue/".concat(i)).delete(), t.doc("shared-wheels-rejected/".concat(i)).set(o), t.doc("admins/".concat(r)).update({ totalReviews: n }), t.doc("admins/".concat(r)).update({ sessionReviews: n }), t.doc("admins/".concat(r)).update({ lastReview: new Date })]);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function G(e, t) { return H.apply(this, arguments) }

                function H() {
                    return (H = p(regeneratorRuntime.mark((function e(t, n) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("admins/".concat(n)).update({ sessionReviews: 0 });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function q(e, t) { return Z.apply(this, arguments) }

                function Z() {
                    return (Z = p(regeneratorRuntime.mark((function e(t, n) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("shared-wheels/".concat(n)).get();
                                case 2:
                                    if (!(i = e.sent).exists) { e.next = 5; break }
                                    return e.abrupt("return", i.data());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function K(e) { return J.apply(this, arguments) }

                function J() {
                    return (J = p(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(Math.random() < .1)) { e.next = 4; break }
                                    return e.next = 3, Y(t);
                                case 3:
                                    n = e.sent;
                                case 4:
                                    if (n || !(Math.random() < .3)) { e.next = 8; break }
                                    return e.next = 7, Q(t);
                                case 7:
                                    n = e.sent;
                                case 8:
                                    if (n || !(Math.random() < .4)) { e.next = 12; break }
                                    return e.next = 11, te(t);
                                case 11:
                                    n = e.sent;
                                case 12:
                                    if (n) { e.next = 16; break }
                                    return e.next = 15, ie(t);
                                case 15:
                                    n = e.sent;
                                case 16:
                                    return e.abrupt("return", n);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Y(e) { return X.apply(this, arguments) }

                function X() {
                    return (X = p(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.collection("shared-wheels-review-queue").where("reviewStatus", "==", "Suspicious").limit(1).get();
                                case 2:
                                    if (!((n = e.sent).size > 0)) { e.next = 5; break }
                                    return e.abrupt("return", n.docs[0].data());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Q(e) { return ee.apply(this, arguments) }

                function ee() {
                    return (ee = p(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.collection("shared-wheels-review-queue").where("predictedApproval", "<", .7).where("predictedApproval", ">=", 0).orderBy("predictedApproval", "asc").limit(1).get();
                                case 2:
                                    if (!((n = e.sent).size > 0)) { e.next = 5; break }
                                    return e.abrupt("return", n.docs[0].data());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function te(e) { return ne.apply(this, arguments) }

                function ne() {
                    return (ne = p(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.collection("shared-wheels-review-queue").orderBy("lastRead", "desc").limit(1).get();
                                case 2:
                                    if (!((n = e.sent).size > 0)) { e.next = 5; break }
                                    return e.abrupt("return", n.docs[0].data());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function ie(e) { return re.apply(this, arguments) }

                function re() {
                    return (re = p(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.collection("shared-wheels-review-queue").orderBy("readCount", "desc").limit(1).get();
                                case 2:
                                    if (!((n = e.sent).size > 0)) { e.next = 5; break }
                                    return e.abrupt("return", n.docs[0].data());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function ae(e, t, n) { return oe.apply(this, arguments) }

                function oe() {
                    return (oe = p(regeneratorRuntime.mark((function e(t, n, i) {
                        var r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("accounts/".concat(n, "/wheels/").concat(i)).get();
                                case 2:
                                    return r = e.sent, e.abrupt("return", r.exists);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function se(e, t, n, i) { return le.apply(this, arguments) }

                function le() {
                    return (le = p(regeneratorRuntime.mark((function e(t, n, i, r) {
                        var a, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.doc("accounts/".concat(i, "/wheels/").concat(r.title));
                                case 2:
                                    return a = e.sent, o = { config: r, lastWrite: n }, e.next = 6, a.update(o);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function ce(e, t, n, i) { return ue.apply(this, arguments) }

                function ue() {
                    return (ue = p(regeneratorRuntime.mark((function e(t, n, i, r) {
                        var a, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = { config: r, created: n, lastRead: null, lastWrite: n, readCount: 0 }, e.next = 3, t.doc("accounts/".concat(i, "/wheels/").concat(r.title));
                                case 3:
                                    return o = e.sent, e.next = 6, o.set(a);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var he, de, fe, me = n(81776),
                    pe = n(78487);

                function ge(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function ve(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { ge(a, i, r, o, s, "next", e) }

                            function s(e) { ge(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }

                function we() { return be.apply(this, arguments) }

                function be() {
                    return (be = ve(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (he) { e.next = 5; break }
                                    return e.next = 3, wt();
                                case 3:
                                    yt(he), kt(he);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function ye() { return ke.apply(this, arguments) }

                function ke() {
                    return (ke = ve(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, o(he.auth());
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Ce() { return _e.apply(this, arguments) }

                function _e() {
                    return (_e = ve(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, l(he.auth());
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function xe() { return Fe.apply(this, arguments) }

                function Fe() {
                    return (Fe = ve(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ce();
                                case 2:
                                    if (!(t = e.sent)) { e.next = 7; break }
                                    return e.next = 6, t.getIdToken();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Se() { return Ee.apply(this, arguments) }

                function Ee() {
                    return (Ee = ve(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ce();
                                case 2:
                                    if (!(t = e.sent)) { e.next = 5; break }
                                    return e.abrupt("return", t.uid);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function De() { return Ie.apply(this, arguments) }

                function Ie() {
                    return (Ie = ve(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ce();
                                case 2:
                                    if (!(t = e.sent) || !t.isAnonymous) { e.next = 7; break }
                                    return e.next = 6, t.getIdToken();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Re(e) {
                    return (0, pe.loadCSS)("css/firebaseui.css"), new Promise((function(t, n) {
                        fe || (fe = new de.auth.AuthUI(he.auth())), fe.start("#".concat(e), {
                            signInFlow: "popup",
                            credentialHelper: de.auth.CredentialHelper.NONE,
                            signInOptions: [{ provider: he.auth.GoogleAuthProvider.PROVIDER_ID, customParameters: { prompt: "select_account" } }, he.auth.TwitterAuthProvider.PROVIDER_ID, he.auth.EmailAuthProvider.PROVIDER_ID],
                            callbacks: {
                                signInSuccessWithAuthResult: function(e, n) {
                                    t(e.user)
                                }
                            },
                            tosUrl: "/faq/terms",
                            privacyPolicyUrl: "privacy-policy.html"
                        })
                    }))
                }

                function Ae() { return Pe.apply(this, arguments) }

                function Pe() {
                    return (Pe = ve(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = he.auth(), e.next = 3, u(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function $e(e) { return Oe.apply(this, arguments) }

                function Oe() {
                    return (Oe = ve(regeneratorRuntime.mark((function e(t) {
                        var n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (n = he.auth()).languageCode = me.z2("Google", t), i = Ct("Google"), e.next = 5, d(n, i);
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Te() { try { he.auth().signOut() } catch (e) {} }

                function Ne() { return je.apply(this, arguments) }

                function je() {
                    return (je = ve(regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Se();
                                case 2:
                                    if (!(t = e.sent)) { e.next = 6; break }
                                    return n = he.firestore.FieldValue.serverTimestamp(), e.abrupt("return", g(he.firestore(), n, t));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function We() { return Be.apply(this, arguments) }

                function Be() {
                    return (Be = ve(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Se();
                                case 2:
                                    return t = e.sent, e.abrupt("return", v(he.firestore(), t));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Le(e) { return Me.apply(this, arguments) }

                function Me() {
                    return (Me = ve(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", b(he.firestore(), t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Ve(e) { return ze.apply(this, arguments) }

                function ze() {
                    return (ze = ve(regeneratorRuntime.mark((function e(t) {
                        var n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Se();
                                case 2:
                                    return n = e.sent, i = he.firestore.FieldValue.serverTimestamp(), e.next = 6, k(he.firestore(), i, n, t);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Ue(e) { return Ge.apply(this, arguments) }

                function Ge() {
                    return (Ge = ve(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Se();
                                case 2:
                                    return n = e.sent, e.next = 5, _(he.firestore(), n, t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function He(e) { return qe.apply(this, arguments) }

                function qe() {
                    return (qe = ve(regeneratorRuntime.mark((function e(t) {
                        var n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Se();
                                case 2:
                                    return n = e.sent, i = he.firestore.FieldValue.serverTimestamp(), e.next = 6, F(he.firestore(), i, n, t);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Ze() { return Ke.apply(this, arguments) }

                function Ke() {
                    return (Ke = ve(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, E(he.firestore());
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Je(e) { return Ye.apply(this, arguments) }

                function Ye() {
                    return (Ye = ve(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, I(he.firestore(), t);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Xe() { return Qe.apply(this, arguments) }

                function Qe() {
                    return (Qe = ve(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, A(he.firestore());
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function et() { return tt.apply(this, arguments) }

                function tt() {
                    return (tt = ve(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, $(he.firestore());
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function nt(e) { return it.apply(this, arguments) }

                function it() {
                    return (it = ve(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, T(he.firestore(), t);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function rt(e, t) { return at.apply(this, arguments) }

                function at() {
                    return (at = ve(regeneratorRuntime.mark((function e(t, n) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, j(he.firestore(), t, n);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function ot(e) { return st.apply(this, arguments) }

                function st() {
                    return (st = ve(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, B(he.firestore(), t);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function lt(e) { return ct.apply(this, arguments) }

                function ct() {
                    return (ct = ve(regeneratorRuntime.mark((function e(t) {
                        var n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = he.firestore.FieldValue.increment(1), e.next = 3, Se();
                                case 3:
                                    return i = e.sent, e.next = 6, M(he.firestore(), n, t, i);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function ut(e, t) { return ht.apply(this, arguments) }

                function ht() {
                    return (ht = ve(regeneratorRuntime.mark((function e(t, n) {
                        var i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Se();
                                case 2:
                                    return i = e.sent, r = n ? he.firestore.FieldValue.increment(1) : he.firestore.FieldValue.increment(0), e.next = 6, z(he.firestore(), r, t, i);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function dt(e) { return ft.apply(this, arguments) }

                function ft() {
                    return (ft = ve(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, G(he.firestore(), t);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function mt(e) { return pt.apply(this, arguments) }

                function pt() {
                    return (pt = ve(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, q(he.firestore(), t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function gt() { return vt.apply(this, arguments) }

                function vt() {
                    return (vt = ve(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, K(he.firestore());
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function wt() { return bt.apply(this, arguments) }

                function bt() {
                    return (bt = ve(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.e(1326).then(n.t.bind(n, 81923, 23));
                                case 2:
                                    return he = e.sent, e.next = 5, n.e(1326).then(n.bind(n, 16690));
                                case 5:
                                    return e.next = 7, n.e(1326).then(n.bind(n, 96257));
                                case 7:
                                    return e.next = 9, n.e(1326).then(n.bind(n, 74811));
                                case 9:
                                    de = e.sent;
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function yt(e) { e.initializeApp({ apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g", authDomain: "wheel-of-names-firebase.firebaseapp.com", databaseURL: "https://wheel-of-names-firebase.firebaseio.com", projectId: "wheel-of-names-firebase", timestampsInSnapshots: !0 }) }

                function kt(e) { var t = e.firestore(); if (i.BN(navigator.userAgent)) try { t.enablePersistence({ synchronizeTabs: !0 }) } catch (e) {} }

                function Ct(e) { var t = { google: new he.auth.GoogleAuthProvider, facebook: new he.auth.FacebookAuthProvider, twitter: new he.auth.TwitterAuthProvider }; return t[e.toLowerCase()] || t.google }
            },
            98338: function(e, t, n) {
                "use strict";

                function i(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function r(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, a) {
                            var o = e.apply(t, n);

                            function s(e) { i(o, r, a, s, l, "next", e) }

                            function l(e) { i(o, r, a, s, l, "throw", e) }
                            s(void 0)
                        }))
                    }
                }

                function a(e) { return o.apply(this, arguments) }

                function o() {
                    return (o = r(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        var i = new Image;
                                        i.onload = function() {
                                            var n = b(i.width, i.height, 200);
                                            _(n, i), e(F(n, t, .5))
                                        }, i.src = t
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function s(e) { return l.apply(this, arguments) }

                function l() {
                    return (l = r(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        var i = new Image;
                                        i.onload = function() {
                                            var t = y(370);
                                            k(i) || _(t, i, "blur(4px)"), x(t, i, !0), e(F(t, null, .5))
                                        }, i.src = t
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function c(e) { return u.apply(this, arguments) }

                function u() {
                    return (u = r(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        var i = new Image;
                                        i.onload = function() {
                                            var t = y(700);
                                            x(t, i, !1), e(F(t, null, .7))
                                        }, i.src = t
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function h(e) { var t = document.createElement("canvas"); return t.width = e.canvas.width, t.height = e.canvas.height, t }

                function d(e) {
                    var t = document.createElement("canvas").getContext("2d");
                    t.drawImage(e, 0, 0);
                    var n, i, r, a = t.getImageData(0, 0, 1, 1).data;
                    return n = a[0], i = a[1], r = a[2], n == i && n == r && n > 230 ? "#FFFFFFFF" : function(e, t, n, i) { return "#".concat(C(e)).concat(C(t)).concat(C(n)).concat(C(i)) }(a[0], a[1], a[2], a[3])
                }

                function f(e) {
                    var t = !1,
                        n = e.match(/#\w\w\w\w\w\w(\w\w)/);
                    return n && (t = "00" == n[1]), t
                }

                function m(e) { return p.apply(this, arguments) }

                function p() {
                    return (p = r(regeneratorRuntime.mark((function e(t) {
                        var i, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.e(4451).then(n.t.bind(n, 1082, 23));
                                case 2:
                                    return i = e.sent.default, (a = new Image).src = t, e.abrupt("return", new Promise((function(e, t) {
                                        a.onload = r(regeneratorRuntime.mark((function t() {
                                            var n, r;
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return n = new i(a), t.next = 3, n.getPalette();
                                                    case 3:
                                                        r = t.sent, e([r.Vibrant.hex, r.LightVibrant.hex, r.DarkVibrant.hex, r.Muted.hex, r.LightMuted.hex, r.DarkMuted.hex]);
                                                    case 5:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })))
                                    })));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function g(e) {
                    var t = y(300),
                        n = t.getContext("2d");
                    return n.fillStyle = "white", n.fillRect(0, 0, 300, 300), n.fillStyle = "black", n.textBaseline = "middle", n.textAlign = "center",
                        function(e, t, n) { for (var i = Math.round(135); i >= 13.5 && (e.font = "".concat(i, "px Quicksand, sans-serif"), !(e.measureText(t).width <= 270)); i--); }(n, e), n.fillText(e, 150, 150, 270), t.toDataURL("image/webp", .5)
                }

                function v(e) {
                    if (e) return new Promise(function() {
                        var t = r(regeneratorRuntime.mark((function t(n) {
                            var i;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        (i = new Image).setAttribute("crossOrigin", "anonymous"), i.onload = function() { n(i) }, i.src = e;
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }())
                }

                function w(e) { return "00" == d(e).slice(7) }

                function b(e, t, n) {
                    var i = n / e,
                        r = n / t,
                        a = Math.max(i, r),
                        o = document.createElement("canvas");
                    return o.width = e * a, o.height = t * a, o
                }

                function y(e) { var t = document.createElement("canvas"); return t.width = e, t.height = e, t }

                function k(e) { var t = d(e); return "#FFFFFFFF" == t || "FF" == t.slice(7) }
                n.d(t, { cM: function() { return a }, GV: function() { return s }, ZG: function() { return c }, lw: function() { return h }, pt: function() { return d }, Qm: function() { return f }, be: function() { return m }, IY: function() { return g }, hm: function() { return v }, y7: function() { return w } });
                var C = function(e) { return Number(e).toString(16).padStart(2, "0") };

                function _(e, t, n) {
                    var i = e.getContext("2d");
                    i.save(), n && (i.filter = n), i.drawImage(t, -2, -2, e.width + 4, e.height + 4), i.restore()
                }

                function x(e, t, n) {
                    var i = e.width,
                        r = i / Math.min(t.width, t.height);
                    n && (r = i / Math.max(t.width, t.height));
                    var a = t.width * r,
                        o = (i - a) / 2,
                        s = t.height * r,
                        l = (i - s) / 2;
                    e.getContext("2d").drawImage(t, o, l, a, s)
                }

                function F(e, t, n) { var i; return i = e.getContext("2d").getImageData(0, 0, 1, 1).data[3] < 5 ? e.toDataURL("image/webp", .5) : e.toDataURL("image/jpeg", n), t && t.length < i.length ? t : i }
            },
            81776: function(e, t, n) {
                "use strict";
                n.d(t, {
                    qC: function() { return a },
                    WN: function() { return o },
                    z2: function() { return s },
                    VX: function() { return l },
                    uq: function() { return c },
                    NB: function() {
                        return u
                    }
                });
                var i = [{ partialName: "noms", locale: "fr" }],
                    r = [{ name: "en", humanName: "English", flag: "🇺🇸 🇬🇧 🇨🇦 🇦🇺", googleName: "en_US", twitterName: "en", file: "en-US.json" }];

                function a(e, t) {
                    return function(e) {
                        return i.filter((function(t) {
                            return e.includes(t.partialName)
                        })).reduce((function(e, t) {
                            return t.locale
                        }), "en")
                    }(e) == t ? "/" : "/".concat(t, "/")
                }

                function o(e, t, n) {
                    return (e + a(e, t) + "/" + n).replace("//", "/")
                }

                function s(e, t) {
                    var n = r.filter((function(e) {
                        return e.name == t
                    }));
                    return "twitter" == e.toLowerCase() ? n.reduce((function(e, t) {
                        return t.twitterName
                    }), "en_US") : n.reduce((function(e, t) {
                        return t.googleName
                    }), "en_US")
                }

                function l(e) { return r.filter((function(t) { return t.name == e })).reduce((function(e, t) { return t.file }), "en-US.json") }

                function c(e, t) { if (!t || !t.length) return ""; var n, i = t[0]; return !h(i, e) && (n = i, r.find((function(e) { return h(n, e.name) }))) ? function(e) { return r.find((function(t) { return h(e, t.name) })).name }(i) : "" }

                function u(e) { return r.map((function(t) { var n = t.humanName; return e && (n += " " + t.flag), { name: t.name, humanName: n } })).sort((function(e, t) { return e.humanName.localeCompare(t.humanName) })) }

                function h(e, t) { return e.length == t.length ? e == t : d(e) == d(t) }

                function d(e) { return e.split("-")[0] }
            },
            3770: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, {
                    createSharedWheel: function() { return o },
                    logSharedWheelRead: function() {
                        return l
                    },
                    getSharedWheel: function() { return u },
                    getSharedWheels: function() { return d },
                    deleteSharedWheel: function() { return m },
                    fetchSocialMediaUsers: function() { return g },
                    convertAccount: function() { return w },
                    deleteAccount: function() { return y },
                    getCarousels: function() { return C },
                    getNumberOfWheelsInReviewQueue: function() { return x },
                    translate: function() { return S },
                    userIsAdmin: function() { return D },
                    getSpinStats: function() { return R }
                }), n(26981), n(57147);
                var i = n(12198);

                function r(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function a(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, a) {
                            var o = e.apply(t, n);

                            function s(e) { r(o, i, a, s, l, "next", e) }

                            function l(e) { r(o, i, a, s, l, "throw", e) }
                            s(void 0)
                        }))
                    }
                }

                function o(e, t, n) { return s.apply(this, arguments) }

                function s() {
                    return (s = a(regeneratorRuntime.mark((function e(t, n, i) {
                        var r, a, o, s;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = { copyable: t, wheelConfig: n.getValues() }, a = { method: "POST", mode: "cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) }, i && (a.headers.authorization = i), e.next = 6, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/createSharedWheel3", a);
                                case 6:
                                    return o = e.sent, e.next = 9, o.json();
                                case 9:
                                    if (!(s = e.sent).hasOwnProperty("error")) { e.next = 12; break }
                                    throw s.error;
                                case 12:
                                    return e.abrupt("return", s.path);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function l(e) { return c.apply(this, arguments) }

                function c() {
                    return (c = a(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) { e.next = 2; break }
                                    return e.abrupt("return");
                                case 2:
                                    return n = { path: t }, e.next = 6, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/logSharedWheelRead", { method: "POST", mode: "cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
                                case 6:
                                    e.sent;
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function u(e) { return h.apply(this, arguments) }

                function h() {
                    return (h = a(regeneratorRuntime.mark((function e(t) {
                        var n, i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = "https://us-central1-wheel-of-names-firebase.cloudfunctions.net" + "/getSharedWheel2/".concat(t), e.next = 3, fetch(n, { method: "GET", mode: "cors" });
                                case 3:
                                    return i = e.sent, e.next = 6, i.json();
                                case 6:
                                    return r = e.sent, e.abrupt("return", r.wheelConfig);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function d(e) { return f.apply(this, arguments) }

                function f() {
                    return (f = a(regeneratorRuntime.mark((function e(t) {
                        var n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 3, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/getSharedWheels", { method: "GET", mode: "cors", headers: { authorization: t, "Content-Type": "application/json" } });
                                case 3:
                                    return n = e.sent, e.next = 6, n.json();
                                case 6:
                                    return i = e.sent, e.abrupt("return", i.wheels);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function m(e, t) { return p.apply(this, arguments) }

                function p() {
                    return (p = a(regeneratorRuntime.mark((function e(t, n) {
                        var i, r, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = { path: n }, e.next = 4, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/deleteSharedWheel", { method: "POST", mode: "cors", headers: { authorization: t, "Content-Type": "application/json" }, body: JSON.stringify(i) });
                                case 4:
                                    return r = e.sent, e.next = 7, r.json();
                                case 7:
                                    return a = e.sent, e.abrupt("return", a.wheels);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function g(e) { return v.apply(this, arguments) }

                function v() {
                    return (v = a(regeneratorRuntime.mark((function e(t) {
                        var n, i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = "https://us-central1-wheel-of-names-firebase.cloudfunctions.net" + "/getTwitterUserNames2/".concat(encodeURIComponent(t)), e.next = 3, fetch(n, { method: "GET", mode: "cors" });
                                case 3:
                                    return i = e.sent, e.next = 6, i.json();
                                case 6:
                                    return r = e.sent, e.abrupt("return", r);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function w(e, t) { return b.apply(this, arguments) }

                function b() {
                    return (b = a(regeneratorRuntime.mark((function e(t, n) {
                        var r, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = { oldIdToken: t }, e.prev = 2, e.next = 5, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/convertAccount", { method: "POST", mode: "cors", headers: { authorization: n, "Content-Type": "application/json" }, body: JSON.stringify(r) });
                                case 5:
                                    return a = e.sent, e.next = 8, a.json();
                                case 8:
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(2), i.k5(e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 10]
                        ])
                    })))).apply(this, arguments)
                }

                function y(e) { return k.apply(this, arguments) }

                function k() {
                    return (k = a(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 1, e.next = 4, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/deleteAccount", { method: "POST", mode: "cors", headers: { authorization: t, "Content-Type": "application/json" } });
                                case 4:
                                    return n = e.sent, e.next = 7, n.json();
                                case 7:
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(1), i.k5(e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 9]
                        ])
                    })))).apply(this, arguments)
                }

                function C() { return _.apply(this, arguments) }

                function _() {
                    return (_ = a(regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 4, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/getCarousels", { method: "GET" });
                                case 4:
                                    return t = e.sent, e.next = 7, t.json();
                                case 7:
                                    return n = e.sent, e.abrupt("return", n);
                                case 11:
                                    return e.prev = 11, e.t0 = e.catch(0), i.k5(e.t0), e.abrupt("return", [""]);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 11]
                        ])
                    })))).apply(this, arguments)
                }

                function x(e) { return F.apply(this, arguments) }

                function F() {
                    return (F = a(regeneratorRuntime.mark((function e(t) {
                        var n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 3, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/getNumberOfWheelsInReviewQueue", { method: "GET", mode: "cors", headers: { authorization: t } });
                                case 3:
                                    if (403 != (n = e.sent).status) { e.next = 6; break }
                                    throw "Please log in as an admin user";
                                case 6:
                                    return e.next = 8, n.json();
                                case 8:
                                    if (!(i = e.sent).error) { e.next = 11; break }
                                    throw i.error;
                                case 11:
                                    return e.abrupt("return", i.wheelsInReviewQueue);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function S(e, t) { return E.apply(this, arguments) }

                function E() {
                    return (E = a(regeneratorRuntime.mark((function e(t, n) {
                        var i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 3, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/translate", { method: "POST", mode: "cors", headers: new Headers({ "Content-Type": "application/json", authorization: t }), body: JSON.stringify({ text: n }) });
                                case 3:
                                    if (403 != (i = e.sent).status) { e.next = 6; break }
                                    throw "Please log in as an admin user";
                                case 6:
                                    return e.next = 8, i.json();
                                case 8:
                                    return r = e.sent, e.abrupt("return", r.translations);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function D(e) { return I.apply(this, arguments) }

                function I() {
                    return (I = a(regeneratorRuntime.mark((function e(t) {
                        var n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 3, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/userIsAdmin", { method: "GET", mode: "cors", headers: { authorization: t } });
                                case 3:
                                    return n = e.sent, e.next = 6, n.json();
                                case 6:
                                    return i = e.sent, e.abrupt("return", i.userIsAdmin);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function R() { return A.apply(this, arguments) }

                function A() {
                    return (A = a(regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 4, fetch("https://us-central1-wheel-of-names-firebase.cloudfunctions.net/getSpinStats", { method: "GET" });
                                case 4:
                                    return t = e.sent, e.next = 7, t.json();
                                case 7:
                                    return n = e.sent, e.abrupt("return", n);
                                case 11:
                                    return e.prev = 11, e.t0 = e.catch(0), i.k5(e.t0), e.abrupt("return", {});
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 11]
                        ])
                    })))).apply(this, arguments)
                }
            },
            12198: function(e, t, n) {
                "use strict";

                function i(e) { return function(e) { if (Array.isArray(e)) return a(e) }(e) || function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || r(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

                function r(e, t) { if (e) { if ("string" == typeof e) return a(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0 } }

                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i
                }

                function o(e) { return -1 == e.indexOf("OS 12_2 like Mac OS X") }

                function s(e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t) return !1;
                    if (e.length != t.length) return !1;
                    for (var n = 0; n < e.length; ++n)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }

                function l(e, t, n, i, r) { return Math.sqrt(Math.pow(t, 2) - Math.pow(r / 2, 2)) - Math.max(r * Math.cos(e) / (2 * Math.sin(e)), n) >= i }

                function c(e) {
                    if (e) {
                        var t = e.match(/<img.*?src="(.*?)".*?>/);
                        t && (e = e.replace(t[0], ""))
                    }
                    var n = "";
                    return e && (n = e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&nbsp;/g, " ")), n
                }

                function u(e) { var t = ""; return e && (t = e).length > 18 && (t = t.substring(0, 17) + "…"), t }

                function h(e, t) {
                    if (e) return t;
                    var n, i = [],
                        a = [],
                        o = function(e, t) {
                            var n;
                            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                if (Array.isArray(e) || (n = r(e))) {
                                    n && (e = n);
                                    var i = 0,
                                        a = function() {};
                                    return { s: a, n: function() { return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] } }, e: function(e) { throw e }, f: a }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var o, s = !0,
                                l = !1;
                            return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return s = e.done, e }, e: function(e) { l = !0, o = e }, f: function() { try { s || null == n.return || n.return() } finally { if (l) throw o } } }
                        }(t);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var s = n.value,
                                l = d(s);
                            i.includes(l) || (i.push(l), a.push(s))
                        }
                    } catch (e) { o.e(e) } finally { o.f() }
                    return a
                }

                function d(e) { var t = {}; return e.text && (t.text = e.text), e.image && (t.image = e.image), JSON.stringify(t) }

                function f(e, t) {
                    for (var n = [], i = 0; i < e.length; i++)
                        if (d(t) == d(e[i]) && n.push(i), t.id == e[i].id) return n[0] != i;
                    return !1
                }

                function m(e) {
                    if (!e) return [];
                    var t = e.split(/<div>|<\/div>|<br>|<p>/),
                        n = [/<div.*?>/g, "</div>", /<p.*?>/g, "</p>", /<span.*?>/g, "</span>", /<!--.*?>/g, /<br.*?>/g];
                    return t.map((function(e) { var t = e; return n.forEach((function(e) { t = t.replace(e, "") })), g(c(t), p(t)) })).filter((function(e) { return e.text || e.image }))
                }

                function p(e) {
                    var t = "";
                    if (e) {
                        var n = e.match(/<img.*?src="(.*?)".*?>/);
                        n && (t = n[1])
                    }
                    return t
                }

                function g(e, t, n, i, r) { var a = {}; return e && (a.text = e), t && (a.image = t), n && (a.color = n), i && (a.weight = i), r && (a.sound = r), a }

                function v(e) {
                    for (var t = e.slice(0), n = t.length - 1; n > 0; n--) {
                        var i = Math.floor(Math.random() * (n + 1)),
                            r = t[n];
                        t[n] = t[i], t[i] = r
                    }
                    return t
                }

                function w(e, t) { return t ? e.reduce((function(e, n) { return e + (n.trim() == t.trim() ? 1 : 0) }), 0) : 0 }

                function b() { return !!window.document.documentMode }

                function y(e) { if (!e) return !1; var t = new RegExp(" MSIE \\d|Trident/|Edge/"); return !!e.match(t) }

                function k(e) { return !(e.platform && e.platform.includes("Win")) }

                function C(e) {
                    return e.slice(0).sort((function(e, t) {
                        var n = e.text || "",
                            i = t.text || "";
                        return n.localeCompare(i, "en", { numeric: !0, sensitivity: "base" })
                    }))
                }

                function _() { return "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0 }

                function x(e) { var t = e; return ".." == (t = t.replace(/\//g, "\\")) && (t = ".. "), "." == t && (t = ". "), "" == t && (t = "?"), t.length > 100 && (t = t.substring(0, 97) + "..."), t }

                function F(e, t) { return e || (e = []), t || (t = []), t.filter((function(t) { return !e.includes(t) })) }

                function S() { window.onerror = function(e, t, n, i, r) { try { r && (e = r.toString()), E("window.onerror", e, navigator.userAgent) } catch (e) { console.error(e) } } }

                function E(e, t, n) { location.host.startsWith("localhost") || "undefined" != typeof ga && ga("send", "event", e, t, n) }

                function D(e, t) { console.error(e) }

                function I(e) { return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") }

                function R(e) { return e.replace(/<.*?>/g, "") }

                function A(e) { return !e || "#ffffff" == e.toLowerCase() }

                function P(e, t, n) {
                    var r = i(document.styleSheets).find((function(e) { return e.href && (e.href.includes("index.css") || e.href.includes("admin.css")) })),
                        a = i(r.rules).find((function(e) { return ".can-go-dark" == e.selectorText }));
                    e ? (a.style.color = "#fff", a.style.backgroundColor = t, document.documentElement.style.backgroundColor = "#000", document.body.style.backgroundColor = "#000") : (a.style.color = "", a.style.backgroundColor = "", document.documentElement.style.backgroundColor = n, document.body.style.backgroundColor = n)
                }

                function $(e) { return e && e.map ? e.map((function(e) { return e.id = e.id || function(e) { for (var t = "", n = "abcdefghjkmnpqrstuvwxyz23456789", i = 0; i < 10; i++) t += n.charAt(Math.floor(Math.random() * n.length)); return t }(), e })) : [] }

                function O(e) { var t = "<div>"; return e && (e.image && (t += '<img src="'.concat(e.image, '" style="height:25px" style="font-size:1rem;">')), e.text && (t += I(e.text))), t + "</div>" }

                function T(e, t) { return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e) }

                function N(e) { return "en" == e ? "" : e }

                function j() {
                    (function(e) { if (!e) return !1; var t = new RegExp("Trident.*Tablet PC.*rv.11"); return !!e.match(t) })(navigator.userAgent) && (E("Wheel", "DisplayWindowsRtWarning", navigator.userAgent), alert("It looks like you are using Internet Explorer on a Windows RT Tablet PC. You may not be able to open or save wheels from this device due to a bug. We realize this is frustrating and we apologize. Please use another device if possible."))
                }

                function W(e, t) { return "https://docs.google.com/forms/d/e/1FAIpQLSeryxMCuDjQUGawpgIeMwSY-81fqwdbpVTIOyh1-WJG5LCeeQ/viewform?entry.1064273724=" + encodeURIComponent(e) + "&entry.558479038=" + t }

                function B(e) { var t = 0; return e.forEach((function(e) { e.weight && (1 != e.enabled && e.hasOwnProperty("enabled") || (t += e.weight)) })), t }

                function L(e, t) {
                    var n = 0;
                    if (0 == e.length) return 0;
                    if (e[0].weight) {
                        var i = B(e),
                            r = e.map((function(e) { return 2 * Math.PI * e.weight / i })),
                            a = [];
                        n = 0;
                        var o = r[0] / 2;
                        for (e.forEach((function(e, t) { a.push(o), o += r[t + 1] })), n = 0; !(t < a[n] || ++n > a.length - 1););
                    } else {
                        var s = 2 * Math.PI / e.length;
                        n = Math.round(t / s)
                    }
                    return n >= e.length && (n = 0), n
                }
                n.d(t, { BN: function() { return o }, cO: function() { return s }, pM: function() { return l }, oc: function() { return c }, El: function() { return u }, MC: function() { return h }, E: function() { return f }, k0: function() { return m }, oD: function() { return p }, Yo: function() { return g }, Sy: function() { return v }, xT: function() { return w }, a0: function() { return b }, Vl: function() { return y }, eo: function() { return k }, Wy: function() { return C }, zw: function() { return _ }, Qg: function() { return x }, g4: function() { return F }, kP: function() { return S }, L9: function() { return E }, k5: function() { return D }, Xv: function() { return I }, Gq: function() { return R }, SO: function() { return A }, cM: function() { return P }, h8: function() { return $ }, D7: function() { return O }, XF: function() { return T }, ci: function() { return N }, Gb: function() { return j }, cS: function() { return W }, zq: function() { return B }, LR: function() { return L } }), n(28594), n(35666)
            },
            9043: function(e, t, n) {
                "use strict";
                n.d(t, { Z: function() { return a } });
                var i = n(12198);

                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var a = function() {
                    function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.title = "", this.description = "", this.entries = [{ text: "Ali" }, { text: "Beatriz" }, { text: "Charles" }, { text: "Diya" }, { text: "Eric" }, { text: "Fatima" }, { text: "Gabriel" }, { text: "Hanna" }], this.colorSettings = [{ color: "#3369E8", enabled: !0 }, { color: "#D50F25", enabled: !0 }, { color: "#EEB211", enabled: !0 }, { color: "#009925", enabled: !0 }, { color: "#000000", enabled: !1 }, { color: "#000000", enabled: !1 }], this.pageBackgroundColor = "#FFFFFF", this.type = "color", this.pictureType = "none", this.coverImageType = "", this.coverImageName = "", this.galleryPicture = "/images/none.png", this.customPictureName = "", this.customPictureDataUri = "", this.customCoverImageDataUri = "", this.centerText = "", this.allowDuplicates = !0, this.duringSpinSound = "ticking-sound", this.duringSpinSoundVolume = 100, this.afterSpinSound = "applause-sound-soft", this.afterSpinSoundVolume = 100, this.maxNames = 500, this.spinTime = 10, this.playCheers = !0, this.launchConfetti = !0, this.animateWinner = !1, this.autoRemoveWinner = !1, this.displayWinnerDialog = !0, this.displayRemoveButton = !0, this.displayHideButton = !0, this.winnerMessage = t || "We have a winner!", this.playClickWhenWinnerRemoved = !1, this.hubSize = "S", this.drawOutlines = !1, this.slowSpin = !1, this.showTitle = !0, this.isAdvanced = !1 }
                    var t, n;
                    return t = e, (n = [{
                        key: "loadJson",
                        value: function(e) {
                            try {
                                var t = JSON.parse(e);
                                this.copyPropertiesFrom(t)
                            } catch (e) { console.error(e) }
                        }
                    }, {
                        key: "getJson",
                        value: function() {
                            var e = this,
                                t = Object.keys(this),
                                n = {};
                            return t.forEach((function(t) { n[t] = e[t] })), JSON.stringify(n)
                        }
                    }, {
                        key: "getValues",
                        value: function() {
                            return JSON.parse(this.getJson())
                        }
                    }, {
                        key: "loadValues",
                        value: function(e) {
                            this.copyPropertiesFrom(e)
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            var t = new e;
                            return t.loadValues(this.getValues()), t
                        }
                    }, {
                        key: "hasOnlyDefaultEntries",
                        value: function() {
                            return i.cO(this.getTexts(), (new e).getTexts())
                        }
                    }, {
                        key: "setCustomPicture",
                        value: function(e, t) {
                            this.customPictureName = e, this.customPictureDataUri = t, this.pictureType = "uploaded"
                        }
                    }, {
                        key: "setCustomCoverImage",
                        value: function(e, t) {
                            this.coverImageName = e, this.customCoverImageDataUri = t, this.coverImageType = "uploaded"
                        }
                    }, {
                        key: "getWheelImage",
                        value: function() {
                            return "none" == this.pictureType ? "/images/none.png" : "gallery" == this.pictureType && this.galleryPicture ? this.galleryPicture : "uploaded" != this.pictureType && "text" != this.pictureType || !this.customPictureDataUri ? null : this.customPictureDataUri
                        }
                    }, {
                        key: "getCoverImage",
                        value: function() {
                            return "gallery" == this.coverImageType && this.coverImageName ? this.coverImageName : "uploaded" == this.coverImageType && this.customCoverImageDataUri ? this.customCoverImageDataUri : null
                        }
                    }, { key: "shouldPlayTicks", value: function() { return "ticking-sound" == this.duringSpinSound } }, {
                        key: "setColorValues",
                        value: function(e) {
                            if (e)
                                for (this.colorSettings = e.map((function(e) { return { color: e, enabled: !0 } })); this.colorSettings.length < 6;) this.colorSettings.push({ color: "#000000", enabled: !1 })
                        }
                    }, {
                        key: "getCoalescedColors",
                        value: function() {
                            var e = this.colorSettings.filter((function(e) { return e.enabled })).map((function(e) { return e.color }));
                            return e.length > 0 ? e : ["#CCCCCC"]
                        }
                    }, {
                        key: "isTooBigForDatabase",
                        value: function() {
                            return this.getJson().length > 99e4
                        }
                    }, {
                        key: "getTexts",
                        value: function() {
                            return this.entries.map((function(e) { return e.text })).filter((function(e) { return e }))
                        }
                    }, {
                        key: "getFirstText",
                        value: function() {
                            var e = this.getTexts();
                            return e.length > 0 ? e[0] : ""
                        }
                    }, {
                        key: "copyPropertiesFrom",
                        value: function(e) {
                            Object.assign(this, JSON.parse(JSON.stringify(e))), this.convertOldData()
                        }
                    }, {
                        key: "convertOldData",
                        value: function() {
                            Array.isArray(this.names) && (this.entries = this.names.map((function(e) {
                                return i.Yo(i.oc(e), i.oD(e))
                            })), delete this.names), this.maxNames = parseInt(this.maxNames), this.spinTime = parseInt(this.spinTime), !1 === this.playTicks && (this.duringSpinSound = "no-sound"), delete this.playTicks, !1 === this.playCheers && (this.afterSpinSound = "no-sound"), delete this.playCheers, this.hasOwnProperty("showTitle") || (this.showTitle = !0), "image" != this.type || this.coverImageType || (this.coverImageType = "gallery"), this.isAdvanced && this.entries.length > 0 && (this.entries[0].hasOwnProperty("enabled") || this.entries.forEach((function(e) { e.enabled = !0 })))
                        }
                    }]) && r(t.prototype, n), e
                }()
            },

            92216: function(e, t) {
                t.p = {
                    Default: { "Default:": ["#3369E8", "#D50F25", "#EEB211", "#009925"] },
                    Nature: {
                        "Antarctica evening": ["#F4D3C4", "#F2AEBB", "#D895DA", "#A091D6", "#696FC7", "#A7AAE1"],
                        "Beach sunset": ["#3C47C6", "#656CDE", "#DE6CC8", "#F8A091", "#F7E392", "#F7A55D"],
                        "Desert scene": ["#FAD381", "#D79F62", "#2E4647", "#518D6A", "#9BC692"],
                        "Evening sky": ["#001F38", "#526079", "#9A7E8E", "#E3757F", "#FD997F", "#FFD0AA"],
                        "Fresh meadow": ["#84A013", "#A8BB2E", "#D4DA5E", "#EBEF90", "#FBFDBC", "#FAC703"],
                        "Fruit tones": ["#E9692C", "#ED9121", "#FFC324", "#FFF000", "#66B447", "#8EE53F"],
                        Giraffe: ["#F0ECE1", "#EDCF8F", "#C97F4E", "#6F4A38", "#977359"],
                        Jellyfish: ["#3EA1B6", "#0E6B8C", "#133855", "#6B669E", "#BB90C8", "#EFD8EC"],
                        Jungle: ["#135E46", "#478966", "#73A788", "#E3C6AD", "#D09D7B", "#B67B65"],
                        "Koi fish": ["#F16323", "#F2F3F4", "#FFD021", "#E34427"],
                        Monsoon: ["#01A8CA", "#32D1EC", "#F1F1F1", "#AFDFF3"],
                        Moon: ["#31302E", "#94908D", "#DAD9D7", "#F0F0F0", "#C3C2BE"],
                        "Purple horizon": ["#b7b8f9", "#3a1f8a", "#2c1357", "#462867", "#593b6a"],
                        Rainbow: ["#5E02E9", "#3C70EF", "#30D800", "#E7E200", "#FD8B00", "#F20800"],
                        "Red desert": ["#99857A", "#C67B5C", "#E27B58", "#FF9D6F", "#663926", "#8E6A5A"],
                        "Red sunset": ["#761000", "#C10900", "#E92100", "#FFDB53", "#FFA93D", "#FF7A29"],
                        "Sandy beach": ["#9FE2BF", "#FFE5C6", "#EFCDB4", "#4BC7CF", "#5CF5FF"],
                        Sun: ["#FFFFFF", "#FFE484", "#FFCC33", "#FC9601", "#D14009"],
                        Underwater: ["#4F42B5", "#82E1E3", "#D4F1F9", "#E3FFFA", "#4CC395"],
                        "Water lilies": ["#448036", "#5C9550", "#FBBA37", "#EE6BA4", "#F192B5", "#F4B0C7"]
                    },
                    Seasons: {
                        "Fall green": ["#529106", "#61A307", "#86B71B", "#B9BD00", "#8EA202", "#799203"],
                        "Fall leaves": ["#BA4634", "#D85C4E", "#EAA250", "#F5DD8B", "#CEC218", "#5F7818"],
                        "Fall road": ["#A05A48", "#563633", "#6D463C", "#D6BD9D", "#D19E6D", "#C57D56"],
                        "Fall yellow": ["#DC7C00", "#FF9705", "#FEB20A", "#FFCB00", "#FEDF05"],
                        "Spring gentle": ["#C3D4C1", "#FFFFE5", "#B4D2A4", "#95BC83", "#F6EAD3"],
                        "Spring green beauty": ["#F99825", "#F5C527", "#CFFA6B", "#9EEC1C", "#89DF42", "#75CB00"],
                        "Spring pastels": ["#94DE8B", "#B19CD9", "#F4A8CF", "#F4C3D7", "#FDFD96", "#B6E7B9"],
                        "Spring pink": ["#E25157", "#F5808F", "#FFACCC", "#FFCBDF", "#EBF0EA", "#93C64E"],
                        "Summer buzz": ["#3BAED5", "#5CC8E2", "#FDE683", "#E66C1E", "#D52210"],
                        "Summer carnival": ["#01A7EC", "#FFFF46", "#FFC94B", "#FE8F5D", "#FE47B3", "#80DA65"],
                        "Summer is hot": ["#BF221C", "#E8681F", "#FBC44F", "#FFE67F", "#FDFFD2", "#F9F500"],
                        "Summer pool party": ["#0198F1", "#49C2FF", "#A9EEFF", "#0067D4", "#E999DE", "#7C62C4"],
                        "Winter blues": ["#2377A4", "#50A3C6", "#79C0D7", "#F8F8F8", "#DDDFDF", "#C2C2C2"],
                        "Winter camouflage": ["#7C7C7C", "#0E1317", "#ACDEF8", "#344A78", "#FDFAFC", "#D6D6D6"],
                        "Winter growth": ["#383159", "#656DA6", "#C5E1F2", "#52734F"],
                        "Winter wonderland": ["#23644D", "#D3F1F3", "#FFFFFF", "#E22A45", "#C7102E"]
                    },
                    Abstract: {
                        "Anonymous citation": ["#9DC3CA", "#B7D4C6", "#B7D4C6", "#EFECE1", "#EDD5C8", "#F2C0C5"],
                        "Black to blue": ["#010101", "#011926", "#003E5C", "#016293", "#007BB8"],
                        "Centered truth": ["#775E56", "#E4E1AF", "#FF9263", "#FF6455", "#7C687D"],
                        "Cool blues & oranges": ["#3C8BEC", "#7EBEF6", "#FED8B1", "#F88102", "#F95701"],
                        "Dead ennui": ["#85A18C", "#F6FDDF", "#FFECCD", "#F2B783"],
                        "Information blues": ["#90B0AB", "#CBCAC0", "#DEDAD6", "#5F729A"],
                        "Lavender to dark blue": ["#FFBAFF", "#DE87FF", "#A455FF", "#681DFF", "#1000CA", "#000098"],
                        "Offbeat recognition": ["#F1647A", "#F3F1DB", "#74CBCC", "#27ABB2", "#C1D765", "#80C544"],
                        "Office hours": ["#DE7373", "#F0DC9F", "#DEBB89", "#7787AE", "#43487B"],
                        "Party fun": ["#891180", "#EA27A2", "#FB9390", "#F6C892", "#FFF5BD", "#FDFFDE"],
                        "Pastel tones": ["#E0BBE4", "#957DAD", "#D291BC", "#FEC8D8", "#FFDFD3"],
                        "Perfect feminine": ["#C09BE3", "#F6E0C7", "#F0C589", "#EA9A5D", "#EA6D63", "#E33F64"],
                        "Slumber party": ["#278DF0", "#FFEF93", "#FF96E1", "#9B78FC"],
                        "Teasing questions": ["#C75589", "#E369A4", "#F5CC22", "#F6EF2D", "#B2E792", "#82D07B"],
                        "Turquoise to blue": ["#00FEEF", "#09EBEE", "#19CEEB", "#28ACEA", "#388EE9", "#3D76E0"]
                    },
                    Flags: {
                        Afghanistan: ["#000000", "#D32011", "#FFFFFF", "#007A36"],
                        Algeria: ["#006633", "#FFFFFF", "#D21034"],
                        Angola: ["#CC092F", "#000000", "#FFCB00"],
                        Argentina: ["#6CACE4", "#FFB81C", "#FFFFFF"],
                        Australia: ["#012169", "#E4002B", "#FFFFFF"],
                        "Australia-Aboriginal": ["#000000", "#CC0000", "#FFFF00"],
                        Bangladesh: ["#F42A41", "#006A4E"],
                        Belgium: ["#2D2926", "#FFCD00", "#C8102E"],
                        Brazil: ["#009739", "#FEDD00", "#012169"],
                        "Burkina Faso": ["#EF3340", "#FFCD00", "#009739"],
                        Cambodia: ["#032EA1", "#E00025", "#FFFFFF", "#000000"],
                        Cameroon: ["#007A5E", "#CE1126", "#FCD116"],
                        Canada: ["#D80621", "#FFFFFF"],
                        Chile: ["#0033A0", "#DA291C", "#FFFFFF"],
                        China: ["#EE1C25", "#FFFF00"],
                        Colombia: ["#FFCD00", "#003087", "#C8102E"],
                        "Côte d'Ivoire": ["#FF8200", "#FFFFFF", "#009A44"],
                        Denmark: ["#C8102E", "#FFFFFF"],
                        "DR Congo": ["#0085CA", "#EF3340", "#FFD100"],
                        Ecuador: ["#FFD100", "#0072CE", "#EF3340"],
                        Egypt: ["#C8102E", "#FFFFFF", "#C09300", "#000000"],
                        Ethiopia: ["#009A44", "#FEDD00", "#EF3340", "#0645B1"],
                        Finland: ["#002F6C", "#FFFFFF"],
                        France: ["#002395", "#FFFFFF", "#ED2939"],
                        Germany: ["#000000", "#DD0000", "#FFCE00"],
                        Ghana: ["#EF3340", "#FFD100", "#009739", "#000000"],
                        Greece: ["#001489", "#FFFFFF"],
                        Guatemala: ["#4997D0", "#FFFFFF"],
                        "Hong Kong": ["#DE2910", "#FFFFFF"],
                        India: ["#FF9933", "#FFFFFF", "#138808", "#000080"],
                        Indonesia: ["#FF0000", "#FFFFFF"],
                        Iran: ["#009639", "#FFFFFF", "#C8102E"],
                        Iraq: ["#CE1126", "#FFFFFF", "#007A3D", "#000000"],
                        Ireland: ["#169B62", "#FFFFFF", "#FF883E"],
                        Italy: ["#008C45", "#F4F5F0", "#CD212A"],
                        Japan: ["#FFFFFF", "#BC002D"],
                        Kazakhstan: ["#00AEC7", "#F6E500"],
                        Kenya: ["#BE3A34", "#009A44", "#000000"],
                        Lithuania: ["#FDB913", "#006A44", "#C1272D"],
                        Madagascar: ["#FFFFFF", "#F9423A", "#00843D"],
                        Malawi: ["#C8102E", "#007A33", "#000000"],
                        Malaysia: ["#010066", "#CC0001", "#FFFFFF", "#FFCC00"],
                        Mali: ["#009639", "#FFD100", "#EF3340"],
                        Maori: ["#000000", "#FFFFFF", "#D40000"],
                        Mexico: ["#006341", "#FFFFFF", "#CE1126"],
                        Morocco: ["#C1272D", "#006233"],
                        Mozambique: ["#009639", "#E4002B", "#FFD100", "#000000"],
                        Myanmar: ["#FFCD00", "#43B02A", "#EE2737", "#FFFFFF"],
                        Nepal: ["#C8102E", "#003087", "#FFFFFF"],
                        Netherlands: ["#AE1C28", "#FFFFFF", "#21468B"],
                        "New Zealand": ["#00247D", "#FFFFFF", "#CC142B"],
                        Niger: ["#FFB25B", "#FFFFFF", "#009639"],
                        Nigeria: ["#009639", "#FFFFFF"],
                        "North Korea": ["#BF0D3E", "#005EB8", "#FFFFFF"],
                        Norway: ["#C8102E", "#FFFFFF", "#003087"],
                        Pakistan: ["#115740", "#FFFFFF"],
                        "Pan-Africa": ["#E31B23", "#000000", "#12853F"],
                        Peru: ["#C8102E", "#FFFFFF"],
                        Philippines: ["#FCD116", "#0038A8", "#CE1126", "#FFFFFF"],
                        Poland: ["#FFFFFF", "#D22630"],
                        Rasta: ["#078930", "#FCDD09", "#DA121A"],
                        Romania: ["#012169", "#FFCD00", "#C8102E"],
                        Russia: ["#FFFFFF", "#0072CE", "#EF3340"],
                        "Saudi Arabia": ["#006C35", "#FFFFFF"],
                        Senegal: ["#009639", "#FFD100", "#EF3340"],
                        Singapore: ["#EF3340", "#FFFFFF"],
                        "South Africa": ["#007749", "#000000", "#FFFFFF", "#FFB81C", "#E03C31", "#001489"],
                        "South Korea": ["#FFFFFF", "#C8102E", "#002F6C", "#000000"],
                        Spain: ["#AA151B", "#F1BF00"],
                        "Sri Lanka": ["#FFD100", "#43B02A", "#FFB25B", "#9B2743"],
                        Sudan: ["#EF3340", "#009639", "#FFFFFF", "#000000"],
                        Sweden: ["#004B87", "#FFCD00"],
                        Syria: ["#EF3340", "#FFFFFF", "#009639", "#000000"],
                        Taiwan: ["#000097", "#FFFFFF", "#FE0000"],
                        Tanzania: ["#43B02A", "#FFCD00", "#00A3E0", "#000000"],
                        Thailand: ["#A51931", "#F4F5F8", "#2D2A4A"],
                        Turkey: ["#C8102E", "#FFFFFF"],
                        Uganda: ["#000000", "#FFD100", "#EF3340"],
                        Ukraine: ["#0057B8", "#FFD700"],
                        "United Arab Emirates": ["#FF0000", "#00732F", "#FFFFFF", "#000000"],
                        "United Kingdom": ["#00247D", "#FFFFFF", "#CF142B"],
                        "United States": ["#3C3B6E", "#FFFFFF", "#B22234"],
                        Uzbekistan: ["#0072CE", "#DA291C", "#FFFFFF", "#43B02A"],
                        Venezuela: ["#FCE300", "#003DA5", "#EF3340", "#FFFFFF"],
                        Vietnam: ["#DA251D", "#FFCD00"],
                        Yemen: ["#EF3340", "#FFFFFF", "#000000"],
                        Zambia: ["#198A00", "#DE2010", "#000000", "#EF7D00"]
                    },
                    Pride: {
                        "Classic Rainbow": ["#D12229", "#F68A1E", "#FDE01A", "#007940", "#24408E", "#732982"],
                        Asexual: ["#000000", "#A4A4A4", "#FFFFFF", "#810081"],
                        Bisexual: ["#D60270", "#9B4F96", "#0038A8"],
                        "Non-binary": ["#FcF431", "#FCFCFC", "#9D59D2", "#282828"],
                        Transgender: ["#5BCFFB", "#F5ABB9", "#FFFFFF", "#F5ABB9"]
                    },
                    Holidays: {
                        Christmas: ["#348228", "#469A47", "#DAF7FF", "#FFFAFA", "#EB2029", "#D70816"],
                        "Earth Day": ["#11205B", "#E9E9E9", "#8F705E", "#BF9269", "#F0C951", "#3C6F36"],
                        Easter: ["#367D83", "#BADBD2", "#F47A97", "#F3EB9A", "#E9C05F"],
                        Halloween: ["#F36A1F", "#F3861F", "#000000"],
                        "New Year": ["#FFDF00", "#FFCC00", "#ECBD00", "#CC9900", "#B8860B"],
                        "Saint Patrick's Day": ["#008001", "#228B22", "#00AD43"],
                        Thanksgiving: ["#FDC149", "#E7A755", "#873826", "#61782A", "#D64F06", "#BBB300"]
                    },
                    Games: {
                        "Candy Crush": ["#D98121", "#EDB23F", "#F5D346", "#F7E1B4", "#FAF4DC", "#D3151C"],
                        Candyland: ["#FBD7E7", "#EEDDEC", "#E1E3F1", "#D4E9F6", "#C7EFFB"],
                        Fortnite: ["#E98F5C", "#B448F0", "#2AC9FA", "#F9E36E", "#C7C9D6"],
                        "Mario & Luigi": ["#5A98E1", "#139334", "#CEA900", "#FE130F", "#095CD4", "#16B65C"],
                        Minecraft: ["#477A1E", "#70B237", "#8FCA5C", "#61371F", "#854F2B", "#C28340"],
                        Monopoly: ["#C70000", "#BFDBAE", "#8FBC72", "#FFFFFF", "#D7BAAA"],
                        Overwatch: ["#F79F11", "#3E474B", "#FFFFFF"],
                        Pikachu: ["#FAD61D", "#E19720", "#F62D14", "#811E09", "#000000"],
                        "Pokémon": ["#0A285F", "#0075BE", "#D5A100", "#FFCC00"],
                        "Rocket League": ["#008BFF", "#FF8B00"]
                    }
                }
            },
            33121: function(e, t) {
                t.p = [, {
                    fileName: "/images/autumn-leaves.jpg",
                    title: "Autumn leaves"
                }, , {
                    fileName: "/images/beach-ball.jpg",
                    title: "Beach ball"
                }, , {
                    fileName: "/images/birth-of-the-universe.jpg",
                    title: "Birth of the universe"
                }, , {
                    fileName: "/images/blue-frost-pattern.jpg",
                    title: "Blue frost pattern"
                }, , {
                    fileName: "/images/blue-glowing-vortex.jpg",
                    title: "Blue glowing vortex"
                }, , {
                    fileName: "/images/blue-swirl.jpg",
                    title: "Blue swirl"
                }, , {
                    fileName: "/images/caffe-latte.jpg",
                    title: "Caffe latte"
                }, , {
                    fileName: "/images/cat-portrait.jpg",
                    title: "Cat portrait"
                }, , {
                    fileName: "/images/chocolate-chip-cookie.jpg",
                    title: "Chocolate chip cookie"
                }, , {
                    fileName: "/images/christmas-wrapping-paper.jpg",
                    title: "Christmas wrapping paper"
                }, , {
                    fileName: "/images/disco-ball.jpg",
                    title: "Disco ball"
                }, , {
                    fileName: "/images/dog-portrait.jpg",
                    title: "Dog portrait"
                }, , {
                    fileName: "/images/donut.jpg",
                    title: "Donut"
                }, , {
                    fileName: "/images/gerbera-flower.jpg",
                    title: "Gerbera flower"
                }, , {
                    fileName: "/images/globe.jpg",
                    title: "Globe"
                }, , {
                    fileName: "/images/green-grass.jpg",
                    title: "Green grass"
                }, , {
                    fileName: "/images/green-leaves.jpg",
                    title: "Green leaves"
                }, , {
                    fileName: "/images/halloween.jpg",
                    title: "Halloween"
                }, , {
                    fileName: "/images/moon.jpg",
                    title: "Moon"
                }, , {
                    fileName: "/images/night-sky.jpg",
                    title: "Night sky"
                }, , {
                    fileName: "/images/orange-slice.jpg",
                    title: "Orange slice"
                }, , {
                    fileName: "/images/palm-trees.jpg",
                    title: "Palm trees"
                }, , {
                    fileName: "/images/rainbow.jpg",
                    title: "Rainbow"
                }, , {
                    fileName: "/images/soccer-ball.jpg",
                    title: "Soccer ball"
                }, , {
                    fileName: "/images/spiral-nebula.jpg",
                    title: "Spiral nebula"
                }, , {
                    fileName: "/images/spiral-tie-dye.jpg",
                    title: "Spiral tie-dye"
                }, , {
                    fileName: "/images/star-trails.jpg",
                    title: "Star trails"
                }, , {
                    fileName: "/images/water-in-pool.jpg",
                    title: "Water in pool"
                }, , {
                    fileName: "/images/water-swirl.jpg",
                    title: "Water swirl"
                }, , {
                    fileName: "/images/whirlpool.jpg",
                    title: "Whirlpool"
                }, , {
                    fileName: "/images/wood.jpg",
                    title: "Wood"
                }, , {
                    fileName: "/images/year-of-the-tiger.jpg",
                    title: "Year of the Tiger"
                }]
            },
            6984: function(e, t, n) {
                "use strict";
                n.d(t, { yV: function() { return i }, Kd: function() { return r }, AG: function() { return a }, B0: function() { return o }, aQ: function() { return s } });
                var i = function(e, t) {
                        if (!e) return "-";
                        t || (t = Date.now());
                        var n = Math.floor((t - e) / 1e3),
                            i = [Math.floor(n / 31536e3), Math.floor(n / 2592e3), Math.floor(n / 604800), Math.floor(n / 86400), Math.floor(n / 3600), Math.floor(n / 60)],
                            r = ["year", "month", "week", "day", "hour", "minute"];
                        for (var a in i) { if (i[a] > 1) return i[a] + " " + r[a] + "s ago"; if (1 === i[a]) return i[a] + " " + r[a] + " ago" }
                        return "moments ago"
                    },
                    r = function(e) { return e && e._seconds ? 1e3 * e._seconds : e && e.seconds ? 1e3 * e.seconds : void 0 },
                    a = function(e) { if (l(e)) return "$ " + e.toFixed(2) },
                    o = function(e) { if ((e || 0 == e) && e.toLocaleString) return e.toLocaleString() },
                    s = function(e) { return l(e) && e >= 0 ? Math.round(100 * e) + " %" : "?" };

                function l(e) { return Number.isFinite(e) }
            },
            64136: function(e, t) {
                t.p = [, {
                    fileName: "/images/alarm_clock.png",
                    title: "Alarm clock"
                }, , {
                    fileName: "/images/atom.png",
                    title: "Atom"
                }, , {
                    fileName: "/images/award.png",
                    title: "Award"
                }, , {
                    fileName: "/images/bicycle.png",
                    title: "Bicycle"
                }, , {
                    fileName: "/images/book.png",
                    title: "Book"
                }, , {
                    fileName: "/images/brush_palette.png",
                    title: "Brush and palette"
                }, , {
                    fileName: "/images/calculator.png",
                    title: "Calculator"
                }, , {
                    fileName: "/images/cash.png",
                    title: "Cash"
                }, , {
                    fileName: "/images/composition_book.png",
                    title: "Composition book"
                }, , {
                    fileName: "/images/dna.png",
                    title: "DNA"
                }, , {
                    fileName: "/images/dollars.png",
                    title: "Dollars"
                }, , {
                    fileName: "/images/floppy_disk.png",
                    title: "Floppy disk"
                }, , {
                    fileName: "/images/fortnite-llama.png",
                    title: "Fortnite Llama (credit: Marco Verch, Flickr)"
                }, , {
                    fileName: "/images/game_controller.png",
                    title: "Game controller"
                }, , {
                    fileName: "/images/gear_head.png",
                    title: "Gear head"
                }, , {
                    fileName: "/images/globe.png",
                    title: "Globe"
                }, , {
                    fileName: "/images/graduation_cap.png",
                    title: "Graduation cap"
                }, , {
                    fileName: "/images/heart.png",
                    title: "Heart"
                }, , {
                    fileName: "/images/html.png",
                    title: "HTML"
                }, , {
                    fileName: "/images/lightbulb_head.png",
                    title: "Lightbulb head"
                }, , {
                    fileName: "/images/microscope.png",
                    title: "Microscope"
                }, , {
                    fileName: "/images/molecules.png",
                    title: "Molecule"
                }, , {
                    fileName: "/images/pencils.png",
                    title: "Pencils"
                }, , {
                    fileName: "/images/present.png",
                    title: "Present"
                }, , {
                    fileName: "/images/rocket.png",
                    title: "Rocket"
                }, , {
                    fileName: "/images/rulers.png",
                    title: "Rulers"
                }, , {
                    fileName: "/images/spy.png",
                    title: "Spy"
                }, , {
                    fileName: "/images/trophy.png",
                    title: "Trophy"
                }]
            },
            57982: function(e, t) { t.q = { XS: .01, S: .2, M: .3, L: .4, XL: .5, XXL: .6 } },
            77380: function(e, t, n) {
                "use strict";
                var i = n(70538),
                    r = n(77747),
                    a = n(66990),
                    o = n(20629),
                    s = n(9043),
                    l = n(12198),
                    c = n(98338),
                    u = n(3770);

                function h(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function d(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { h(a, i, r, o, s, "next", e) }

                            function s(e) { h(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }
                var f = {
                    state: { wheelConfig: new s.Z, sheetLinked: !1, wheelIsBusy: !1, winners: [], path: "", copyable: !1 },
                    getters: { wheelType: function(e) { return e.wheelConfig.type }, entries: function(e) { return e.wheelConfig.entries }, entryCount: function(e) { return e.wheelConfig.entries.length }, winners: function(e) { return e.winners }, winnerCount: function(e) { return e.winners.length }, wheelConfig: function(e) { return e.wheelConfig }, sheetLinked: function(e) { return e.sheetLinked }, wheelIsBusy: function(e) { return e.wheelIsBusy }, wheelIsShared: function(e) { return !!e.path }, wheelIsCopyable: function(e) { return e.copyable }, wheelIsAdvanced: function(e) { return e.wheelConfig.isAdvanced }, wheelTitle: function(e) { return e.wheelConfig.title } },
                    mutations: {
                        setWheelConfig: function(e, t) {
                            var n = new s.Z;
                            n.loadValues(t), n.entries = l.h8(n.entries), e.wheelConfig = n, e.path || m(e.wheelConfig)
                        },
                        setGrayEmptyWheel: function(e) {
                            var t = e.wheelConfig.clone();
                            t.entries = l.h8([{ test: " " }]), t.title = "", t.setColorValues(["#bbb"]), e.wheelConfig = t
                        },
                        setWheelTitle: function(e, t) {
                            var n = e.wheelConfig.clone();
                            n.title = t, e.wheelConfig = n, e.path || m(e.wheelConfig)
                        },
                        setWheelDescription: function(e, t) {
                            var n = e.wheelConfig.clone();
                            n.description = t, e.wheelConfig = n, e.path || m(e.wheelConfig)
                        },
                        setShowTitle: function(e, t) { e.wheelConfig.showTitle = t, e.path || m(e.wheelConfig) },
                        setEntries: function(e, t) { e.wheelConfig.entries = l.h8(t), e.path || m(e.wheelConfig) },
                        shuffleEntries: function(e) { e.wheelConfig.entries = l.Sy(e.wheelConfig.entries), e.path || m(e.wheelConfig) },
                        sortEntries: function(e) { e.wheelConfig.entries = l.Wy(e.wheelConfig.entries), e.path || m(e.wheelConfig) },
                        appendEntry: function(e, t) {
                            var n = e.wheelConfig.entries.slice(0);
                            n.push(t), e.wheelConfig.entries = l.h8(n), e.path || m(e.wheelConfig)
                        },
                        setEntryText: function(e, t) {
                            var n = t.index,
                                i = t.text,
                                r = e.wheelConfig.entries.slice(0);
                            r[n].text = i, e.wheelConfig.entries = l.h8(r), e.path || m(e.wheelConfig)
                        },
                        setEntryColor: function(e, t) {
                            var n = t.index,
                                i = t.color,
                                r = e.wheelConfig.entries.slice(0);
                            r[n].color = i, e.wheelConfig.entries = l.h8(r), e.path || m(e.wheelConfig)
                        },
                        setEntrySound: function(e, t) {
                            var n = t.index,
                                i = t.sound,
                                r = e.wheelConfig.entries.slice(0);
                            i ? r[n].sound = i : delete r[n].sound, e.wheelConfig.entries = l.h8(r), e.path || m(e.wheelConfig)
                        },
                        setEntryMessage: function(e, t) {
                            var n = t.index,
                                i = t.message,
                                r = e.wheelConfig.entries.slice(0);
                            i ? r[n].message = i : delete r[n].message, e.wheelConfig.entries = l.h8(r), e.path || m(e.wheelConfig)
                        },
                        setEntryWeight: function(e, t) {
                            var n = t.index,
                                i = t.weight,
                                r = e.wheelConfig.entries.slice(0);
                            r[n].weight = i, e.wheelConfig.entries = l.h8(r), e.path || m(e.wheelConfig)
                        },
                        refreshEntries: function(e) {
                            var t = e.wheelConfig.entries.slice(0);
                            e.wheelConfig.entries = l.h8(t), e.path || m(e.wheelConfig)
                        },
                        setTextEntries: function(e, t) {
                            var n = t.map((function(e) { return { text: e } }));
                            e.wheelConfig.entries = l.h8(n), e.path || m(e.wheelConfig)
                        },
                        appendTextEntries: function(e, t) {
                            var n = e.wheelConfig.entries.concat(t.map((function(e) { return { text: e } })));
                            e.wheelConfig.entries = l.h8(n), e.path || m(e.wheelConfig)
                        },
                        removeEntryByIndex: function(e, t) {
                            var n = e.wheelConfig.entries.slice(0);
                            n.splice(t, 1), e.wheelConfig.entries = n, e.sheetLinked = !1, e.path || m(e.wheelConfig)
                        },
                        removeEntry: function(e, t) {
                            var n = e.wheelConfig.entries.slice(0);
                            n.splice(n.findIndex((function(e) { return e.id == t.id })), 1), e.wheelConfig.entries = n, e.sheetLinked = !1, e.path || m(e.wheelConfig)
                        },
                        removeEntryAll: function(e, t) { e.wheelConfig.entries = e.wheelConfig.entries.filter((function(e) { return !e.text || e.text.trim() != t.text.trim() })), e.sheetLinked = !1, e.path || m(e.wheelConfig) },
                        hideEntry: function(e, t) {
                            t.enabled = !1;
                            var n = e.wheelConfig.entries.slice(0);
                            e.wheelConfig.entries = n, e.path || m(e.wheelConfig)
                        },
                        moveEntry: function(e, t) {
                            var n = t.index,
                                i = t.direction,
                                r = e.wheelConfig.entries.slice(0),
                                a = r[n];
                            r[n] = r[n + i], r[n + i] = a, e.wheelConfig.entries = l.h8(r), e.path || m(e.wheelConfig)
                        },
                        duplicateEntry: function(e, t) {
                            var n = e.wheelConfig.entries[t],
                                i = Object.assign({}, n),
                                r = e.wheelConfig.entries.slice(0);
                            r.splice(t + 1, 0, i), e.wheelConfig.entries = l.h8(r), e.path || m(e.wheelConfig)
                        },
                        removeImageFromEntry: function(e, t) {
                            var n = e.wheelConfig.entries.slice(0);
                            delete n[t].image, e.wheelConfig.entries = n, e.path || m(e.wheelConfig)
                        },
                        setWheelBusy: function(e, t) { e.wheelIsBusy = t },
                        linkSheet: function(e) { e.sheetLinked = !0 },
                        unlinkSheet: function(e) { e.sheetLinked = !1 },
                        setPath: function(e, t) { e.path = t },
                        setUnshared: function(e) { e.path = "", m(e.wheelConfig) },
                        setCopyable: function(e, t) {
                            var n = t.copyable,
                                i = t.editable;
                            void 0 !== i && (e.copyable = i), void 0 !== n && (e.copyable = n)
                        },
                        addWinner: function(e, t) {
                            var n = e.winners.slice(0);
                            n.push(t), e.winners = n
                        },
                        sortWinners: function(e) { e.winners = l.Wy(e.winners) },
                        clearWinners: function(e) { e.winners = [] },
                        setVolumes: function(e, t) {
                            var n = t.duringSpinSoundVolume,
                                i = t.afterSpinSoundVolume;
                            e.wheelConfig.duringSpinSoundVolume = n, e.wheelConfig.afterSpinSoundVolume = i
                        }
                    },
                    actions: {
                        loadInitialWheel: function(e, t) {
                            return d(regeneratorRuntime.mark((function n() {
                                var i, r, a, o;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (i = e.state.$t("common.We have a winner!"), !t) { n.next = 20; break }
                                            return e.commit("setPath", t), e.commit("setGrayEmptyWheel"), n.next = 6, u.getSharedWheel(t);
                                        case 6:
                                            if ((r = n.sent).wheelConfig) { n.next = 13; break }
                                            throw e.commit("setWheelConfig", new s.Z(i)), e.commit("setUnshared"), 'Wheel "'.concat(t, '" not found!');
                                        case 13:
                                            e.commit("setCopyable", { copyable: r.copyable, editable: r.editable }), u.logSharedWheelRead(r.wheelConfig.path), (a = new s.Z(i)).loadValues(r.wheelConfig), e.commit("setWheelConfig", a);
                                        case 18:
                                            n.next = 23;
                                            break;
                                        case 20:
                                            (o = new s.Z(i)).loadJson(localStorage.getItem("LastWheelConfig")), e.commit("setWheelConfig", o);
                                        case 23:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        resetWheel: function(e) {
                            var t = new s.Z(e.state.$t("common.We have a winner!"));
                            e.commit("setWheelConfig", t), e.commit("clearWinners")
                        },
                        fetchSocialMediaUsers: function(e, t) {
                            return d(regeneratorRuntime.mark((function n() {
                                var i;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, u.fetchSocialMediaUsers(t);
                                        case 2:
                                            i = n.sent, e.commit("setTextEntries", i), e.commit("setWheelTitle", ""), e.commit("setWheelDescription", "");
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        appendImageEntry: function(e, t) {
                            return d(regeneratorRuntime.mark((function n() {
                                var i, r, a, o;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (i = e.state.wheelConfig.entries.slice(0), !e.state.wheelConfig.isAdvanced) { n.next = 11; break }
                                            return a = "#CCCCCC", n.next = 5, c.hm(t);
                                        case 5:
                                            o = n.sent, c.y7(o) || (a = c.pt(o).slice(0, 7)), r = { text: "", image: t, color: a, weight: 1, enabled: !0 }, n.next = 12;
                                            break;
                                        case 11:
                                            r = { text: "", image: t };
                                        case 12:
                                            i.push(r), e.state.wheelConfig.entries = l.h8(i), e.state.wheelIsShared || m(e.state.wheelConfig);
                                        case 15:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        attachImageToEntry: function(e, t) {
                            return d(regeneratorRuntime.mark((function n() {
                                var i, r, a, o, s;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return i = t.imageData, r = t.index, a = e.state.wheelConfig.entries.slice(0), n.next = 4, c.hm(i);
                                        case 4:
                                            o = n.sent, c.y7(o) || (s = c.pt(o).slice(0, 7), a[r].color = s), a[r].image = i, e.state.wheelConfig.entries = l.h8(a), e.state.wheelIsShared || m(e.state.wheelConfig);
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        setAdvanced: function(e, t) {
                            return d(regeneratorRuntime.mark((function n() {
                                var i, r, a, o, s;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if ((i = e.state.wheelConfig.clone()).isAdvanced = t, !t) { n.next = 22; break }
                                            r = i.getCoalescedColors(), a = 0;
                                        case 5:
                                            if (!(a < i.entries.length)) { n.next = 20; break }
                                            if (!(o = i.entries[a]).image) { n.next = 14; break }
                                            return n.next = 10, c.hm(o.image);
                                        case 10:
                                            s = n.sent, c.y7(s) ? o.color = r[a % r.length] : o.color = c.pt(s).slice(0, 7), n.next = 15;
                                            break;
                                        case 14:
                                            o.color = r[a % r.length];
                                        case 15:
                                            o.weight = 1, o.enabled = !0;
                                        case 17:
                                            a++, n.next = 5;
                                            break;
                                        case 20:
                                            n.next = 24;
                                            break;
                                        case 22:
                                            i.entries.forEach((function(e) { delete e.color, delete e.weight, delete e.enabled, delete e.sound, delete e.message })), i.entries = i.entries.filter((function(e) { return e.text || e.image }));
                                        case 24:
                                            e.commit("setWheelConfig", i);
                                        case 25:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    }
                };

                function m(e) { localStorage.setItem("LastWheelConfig", e.getJson()) }
                var p = {
                    state: { version: "189", appInfoVisible: !0, darkMode: !1, latestSeenVersion: 0, userHasSeenCurrentVersion: !1 },
                    getters: { version: function(e) { return e.version }, darkMode: function(e) { return e.darkMode }, appInfoVisible: function(e) { return e.appInfoVisible }, userHasSeenCurrentVersion: function(e) { return e.userHasSeenCurrentVersion } },
                    mutations: {
                        setDurablePrefs: function(e, t) {
                            var n = t.appInfoVisible,
                                i = t.darkMode,
                                r = t.latestSeenVersion;
                            e.appInfoVisible = n, e.darkMode = i, e.latestSeenVersion = r, g(e)
                        },
                        setLatestSeenVersion: function(e, t) { e.latestSeenVersion = t, g(e) },
                        setUserHasSeenCurrentVersion: function(e, t) { e.userHasSeenCurrentVersion = t },
                        toggleAppInfoVisibility: function(e) { e.appInfoVisible = !e.appInfoVisible, g(e) },
                        toggleDarkMode: function(e) { e.darkMode = !e.darkMode, g(e) }
                    },
                    actions: {
                        loadPreferences: function(e) {
                            var t = e.state,
                                n = e.commit;
                            try {
                                var i = JSON.parse(localStorage.getItem("Preferences"));
                                n("setDurablePrefs", { appInfoVisible: i.appInfoVisible, darkMode: i.darkMode, latestSeenVersion: i.latestSeenVersion })
                            } catch (e) {}
                            var r = t.version;
                            n("setUserHasSeenCurrentVersion", r == t.latestSeenVersion), n("setLatestSeenVersion", r)
                        }
                    }
                };

                function g(e) {
                    var t = { appInfoVisible: e.appInfoVisible, darkMode: e.darkMode, latestSeenVersion: e.latestSeenVersion };
                    localStorage.setItem("Preferences", JSON.stringify(t))
                }
                var v = n(39474);

                function w(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function b(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { w(a, i, r, o, s, "next", e) }

                            function s(e) { w(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }
                var y = {
                        state: { userPhotoUrl: "", userDisplayName: "", savedWheels: [], sharedWheels: [] },
                        getters: { userPhotoUrl: function(e) { return e.userPhotoUrl }, userDisplayName: function(e) { return e.userDisplayName }, savedWheels: function(e) { return e.savedWheels }, sharedWheels: function(e) { return e.sharedWheels } },
                        mutations: { setUserPhotoUrl: function(e, t) { e.userPhotoUrl = t || "/images/user_profile.png" }, setUserDisplayName: function(e, t) { e.userDisplayName = t }, setSavedWheels: function(e, t) { e.savedWheels = t }, setSharedWheels: function(e, t) { e.sharedWheels = t }, clearUser: function(e) { e.userPhotoUrl = "", e.userDisplayName = "", e.savedWheels = [], e.sharedWheels = [] } },
                        actions: {
                            userIsLoggedIn: function(e) {
                                return b(regeneratorRuntime.mark((function t() {
                                    var n, i, r;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.state, n = e.commit, e.rootState, t.next = 3, v.W2();
                                            case 3:
                                                return t.next = 5, v.cR();
                                            case 5:
                                                if (!(i = t.sent)) { t.next = 12; break }
                                                return t.next = 9, v.r();
                                            case 9:
                                                r = t.sent, n("setUserPhotoUrl", r.photoURL), n("setUserDisplayName", r.displayName);
                                            case 12:
                                                return t.abrupt("return", i);
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            logOut: function(e) {
                                return b(regeneratorRuntime.mark((function t() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e.state, n = e.commit, e.rootState, v.ni(), n("clearUser");
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            deleteAccount: function(e) {
                                return b(regeneratorRuntime.mark((function t() {
                                    var n, i;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.state, n = e.commit, e.rootState, t.next = 3, v.qo();
                                            case 3:
                                                return i = t.sent, t.next = 6, u.deleteAccount(i);
                                            case 6:
                                                v.ni(), n("clearUser");
                                            case 8:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            loginAnonymously: function(e) {
                                return b(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, v.wA();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            loginWithUi: function(e, t) {
                                return b(regeneratorRuntime.mark((function n() {
                                    var i, r, a;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return e.state, i = e.commit, e.rootState, n.next = 3, v.nL();
                                            case 3:
                                                return r = n.sent, n.next = 6, v.zG(t);
                                            case 6:
                                                return a = n.sent, i("setUserPhotoUrl", a.photoURL), i("setUserDisplayName", a.displayName), n.t0 = u, n.t1 = r, n.next = 13, v.qo();
                                            case 13:
                                                return n.t2 = n.sent, n.next = 16, n.t0.convertAccount.call(n.t0, n.t1, n.t2);
                                            case 16:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            logInToSheets: function(e, t) {
                                return b(regeneratorRuntime.mark((function n() {
                                    var i, r, a, o;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return e.state, i = e.commit, e.rootState, n.next = 3, v.W2();
                                            case 3:
                                                return n.next = 5, v.nL();
                                            case 5:
                                                return r = n.sent, n.next = 8, v.Yf(t);
                                            case 8:
                                                return a = n.sent, n.next = 11, v.r();
                                            case 11:
                                                return o = n.sent, i("setUserPhotoUrl", o.photoURL), i("setUserDisplayName", o.displayName), n.t0 = u, n.t1 = r, n.next = 18, v.qo();
                                            case 18:
                                                return n.t2 = n.sent, n.next = 21, n.t0.convertAccount.call(n.t0, n.t1, n.t2);
                                            case 21:
                                                return n.abrupt("return", a);
                                            case 22:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            logUserActivity: function() {
                                return b(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, v.Tj();
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            getUid: function() {
                                return b(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, v.sq();
                                            case 2:
                                                return e.abrupt("return", e.sent);
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            loadSavedWheels: function(e) {
                                return b(regeneratorRuntime.mark((function t() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, v.sD();
                                            case 2:
                                                n = t.sent, e.commit("setSavedWheels", n), v.Tj();
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            logWheelRead: function(e, t) {
                                return b(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, v.pP(t);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            deleteSavedWheel: function(e, t) {
                                return b(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, v.nu(t);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            saveWheel: function(e, t) {
                                return b(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, v.R2(t.getValues());
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            loadSharedWheels: function(e) {
                                return b(regeneratorRuntime.mark((function t() {
                                    var n, i;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, v.qo();
                                            case 2:
                                                return n = t.sent, t.next = 5, u.getSharedWheels(n);
                                            case 5:
                                                i = t.sent, e.commit("setSharedWheels", i), v.Tj();
                                            case 8:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            shareWheel: function(e, t) {
                                return b(regeneratorRuntime.mark((function e() {
                                    var n, i, r;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = t.wheelConfig, i = t.copyableWheel, e.next = 3, v.qo();
                                            case 3:
                                                return r = e.sent, e.next = 6, u.createSharedWheel(i, n, r);
                                            case 6:
                                                return e.abrupt("return", e.sent);
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            deleteSharedWheel: function(e, t) {
                                return b(regeneratorRuntime.mark((function n() {
                                    var i, r;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2, v.qo();
                                            case 2:
                                                return i = n.sent, n.next = 5, u.deleteSharedWheel(i, t);
                                            case 5:
                                                r = n.sent, e.commit("setSharedWheels", r);
                                            case 7:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            }
                        }
                    },
                    k = {
                        state: { fullScreen: !1, online: !0 },
                        getters: { fullScreen: function(e) { return e.fullScreen }, online: function(e) { return e.online } },
                        mutations: {
                            enterFullScreen: function(e) {
                                var t;
                                e.fullScreen = !0, (t = document.body).requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                            },
                            exitFullScreen: function(e) { e.fullScreen = !1, document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() },
                            fullScreenChanged: function(e) { e.fullScreen = null != (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) },
                            setOnline: function(e, t) { e.online = t }
                        }
                    };
                i.Z.use(o.ZP);
                var C = new o.ZP.Store({ modules: { wheel: f, preferences: p, user: y, hardware: k } }),
                    _ = n(78345),
                    x = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticStyle: { height: "100%" } }, [e.wheelIsShared ? e._e() : n("div", { style: "desktop" == e.$mq ? "height: 100%" : "" }, [n("toolbar", { on: { "show-snackbar-message": e.showSnackbarMessage, "reset-wheel": function(t) { return e.resetWheel() }, "open-open-dialog": function(t) { return e.openOpenDialog() }, "open-save-dialog": function(t) { return e.openSaveDialog() }, "open-share-dialog": function(t) { return e.openShareDialog() }, "open-customize-dialog": function(t) { return e.openCustomizeDialog() }, "open-twitter-dialog": function(t) { return e.openTwitterDialog() }, "open-sheet-dialog": function(t) { return e.openSheetDialog() }, "open-account-dialog": function(t) { return e.openAccountDialog() }, "set-locale": e.setLocale } }), e._v(" "), n("section", { staticClass: "section", staticStyle: { height: "100%", "padding-top": "1rem", "padding-bottom": "0" } }, [n("div", { staticClass: "columns", staticStyle: { height: "100%" } }, [n("div", { staticClass: "column is-3" }, [n("titleAndDescription", { attrs: { editable: !e.fullScreen }, on: { editTitleAndDescription: function(t) { return e.openTitleAndDescriptionDialog() } } }), e._v(" "), "desktop" != e.$mq || e.fullScreen ? e._e() : n("desktopAd")], 1), e._v(" "), n("div", { staticClass: "column is-6", class: { "is-7": e.fullScreen } }, [n("spinningwheel", { ref: "spinningwheel", on: { "wheel-started": e.wheelStarted, "name-changed": e.nameChanged, "wheel-stopped": e.wheelStopped } })], 1), e._v(" "), n("div", { staticClass: "column is-3", staticStyle: { height: "90%" } }, [n("name-tabs", { directives: [{ name: "show", rawName: "v-show", value: !e.fullScreen, expression: "!fullScreen" }], staticStyle: { height: "100%" }, on: { "reset-wheel-rotation": e.resetWheelRotation } })], 1)])])], 1), e._v(" "), e.wheelIsShared ? n("div", [n("section", { staticClass: "section", staticStyle: { "padding-top": "1rem", "padding-left": "1rem" } }, [n("div", { staticClass: "columns" }, [n("div", { staticClass: "column is-3", staticStyle: { "font-family": "Quicksand" } }, [e.wheelTitle ? n("h3", { staticClass: "subtitle is-3" }, [e._v(e._s(e.wheelTitle))]) : e._e(), e._v(" "), e.wheelDescription ? n("p", [e._v(e._s(e.wheelDescription))]) : e._e(), n("br"), e._v(" "), e.wheelIsCopyable ? e._e() : n("b-button", { attrs: { disabled: e.wheelIsBusy }, on: { click: e.createYourOwn } }, [n("i", { staticClass: "fas fa-pencil-alt" }), e._v(" " + e._s(e.$t("app.Create your own")) + "\n          ")]), e._v(" "), e.wheelIsCopyable ? n("b-button", { attrs: { disabled: e.wheelIsBusy }, on: { click: e.copyWheel } }, [n("i", { staticClass: "far fa-clone" }), e._v(" " + e._s(e.$t("app.Copy this wheel")) + "\n          ")]) : e._e(), e._v(" "), n("muteToggle")], 1), e._v(" "), n("div", { staticClass: "column is-7" }, [n("spinningwheel", { ref: "spinningwheel", on: { "wheel-started": e.wheelStarted, "name-changed": e.nameChanged, "wheel-stopped": e.wheelStopped } })], 1)])])]) : e._e(), e._v(" "), n("hr"), e._v(" "), e.fullScreen ? e._e() : n("aboutCards"), e._v(" "), "mobile" == e.$mq ? n("mobileAd") : e._e(), e._v(" "), n("opendialog", { ref: "opendialog", on: { "show-snackbar-message": e.showSnackbarMessage, "start-wait-animation": e.startWaitAnimation, "stop-wait-animation": e.stopWaitAnimation, "auth-error": e.authError, "reset-wheel-rotation": e.resetWheelRotation, "reset-address-bar": e.resetAddressBar } }), e._v(" "), n("savedialog", { ref: "savedialog", on: { "show-snackbar-message": e.showSnackbarMessage, "start-wait-animation": e.startWaitAnimation, "stop-wait-animation": e.stopWaitAnimation, "auth-error": e.authError, "reset-address-bar": e.resetAddressBar } }), e._v(" "), n("optionsdialog", { ref: "optionsdialog", on: { "show-snackbar-message": e.showSnackbarMessage } }), e._v(" "), n("sharedialog", { ref: "sharedialog", on: { "show-snackbar-message": e.showSnackbarMessage, "start-wait-animation": e.startWaitAnimation, "stop-wait-animation": e.stopWaitAnimation, "auth-error": e.authError } }), e._v(" "), n("twitterdialog", { ref: "twitterdialog", on: { "show-snackbar-message": e.showSnackbarMessage, "start-wait-animation": e.startWaitAnimation, "stop-wait-animation": e.stopWaitAnimation } }), e._v(" "), n("sheetdialog", { ref: "sheetdialog", on: { "show-snackbar-message": e.showSnackbarMessage, "auth-error": e.authError } }), e._v(" "), n("accountdialog", { ref: "accountdialog", on: { "show-snackbar-message": e.showSnackbarMessage, "start-wait-animation": e.startWaitAnimation, "stop-wait-animation": e.stopWaitAnimation, "auth-error": e.authError } }), e._v(" "), n("winnerdialog", { ref: "winnerdialog", on: { "remove-entry": e.removeEntry, "remove-entry-all": e.removeEntryAll, "hide-entry": e.hideEntry } }), e._v(" "), n("titleAndDescriptionDialog", { ref: "titleAndDescriptionDialog", on: { setTitleAndDescription: e.setTitleAndDescription } }), e._v(" "), n("winneranimation", { ref: "winneranimation" })], 1)
                    };
                x._withStripped = !0;
                var F = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("b-navbar", { staticStyle: { "box-shadow": "0 3px 3px 0 lightgrey" }, attrs: { type: "is-info" } }, [n("template", { slot: "brand" }, [n("b-navbar-item", { staticStyle: { "font-size": "24px" }, attrs: { href: "/" } }, [e._v("\n      " + e._s(e.toolbarBrand) + "\n    ")])], 1), e._v(" "), n("template", { slot: "start" }, [n("b-tag", { directives: [{ name: "show", rawName: "v-show", value: !e.online, expression: "!online" }], staticStyle: { "margin-top": "1.2em" }, attrs: { type: "is-warning" } }, [e._v("\n      " + e._s(e.$t("toolbar.Offline mode")) + "\n    ")])], 1), e._v(" "), n("template", { slot: "end" }, [n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.newButtonVisible, expression: "newButtonVisible" }], on: { click: function(t) { return e.$emit("reset-wheel") } } }, [n("i", { staticClass: "fas fa-file fa-fw" }), e._v(" " + e._s(e.$t("toolbar.New")) + "\n    ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.openButtonVisible, expression: "openButtonVisible" }], on: { click: function(t) { return e.$emit("open-open-dialog") } } }, [n("i", { staticClass: "fa fa-folder-open fa-fw" }), e._v(" " + e._s(e.$t("common.Open")) + "\n    ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.saveButtonVisible, expression: "saveButtonVisible" }], on: { click: function(t) { return e.$emit("open-save-dialog") } } }, [n("i", { staticClass: "fa fa-save fa-fw" }), e._v(" " + e._s(e.$t("common.Save")) + "\n    ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.shareButtonVisible, expression: "shareButtonVisible" }], on: { click: function(t) { return e.$emit("open-share-dialog") } } }, [n("i", { staticClass: "fa fa-share-alt fa-fw" }), e._v(" " + e._s(e.$t("toolbar.Share")) + "\n    ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.optionsButtonVisible, expression: "optionsButtonVisible" }], on: { click: function(t) { return e.$emit("open-customize-dialog") } } }, [n("i", { staticClass: "fas fa-palette fa-fw" }), e._v(" " + e._s(e.$t("common.Customize")) + "\n    ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.fullscreenButtonVisible, expression: "fullscreenButtonVisible" }], on: { click: function(t) { return e.enterFullScreen() } } }, [n("i", { staticClass: "fa fa-expand fa-fw" }), e._v(" " + e._s(e.$t("toolbar.Fullscreen")) + "\n    ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.exitFullscreenButtonVisible, expression: "exitFullscreenButtonVisible" }], on: { click: function(t) { return e.exitFullScreen() } } }, [n("i", { staticClass: "fa fa-compress fa-fw" }), e._v(" " + e._s(e.$t("toolbar.Exit fullscreen")) + "\n    ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.unlinkSheetButtonVisible, expression: "unlinkSheetButtonVisible" }], on: { click: function(t) { return e.$store.commit("unlinkSheet") } } }, [n("i", { staticClass: "fa fa-unlink fa-fw" }), e._v(" " + e._s(e.$t("toolbar.Unlink Google Spreadsheet")) + "\n    ")]), e._v(" "), e.browserIsIEOrOldEdge ? [n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.feedbackbuttonVisible, expression: "feedbackbuttonVisible" }], on: { click: e.openFeedbackForm } }, [n("i", { staticClass: "fa fa-comment fa-fw" }), e._v(" " + e._s(e.$t("toolbar.Feedback")) + "\n      ")])] : [n("b-navbar-dropdown", { directives: [{ name: "show", rawName: "v-show", value: e.moreVisible, expression: "moreVisible" }], attrs: { label: e.$t("toolbar.More"), right: !0 } }, [n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.feedbackbuttonVisible, expression: "feedbackbuttonVisible" }], on: { click: e.openFeedbackForm } }, [n("i", { staticClass: "fa fa-comment fa-fw" }), e._v(" " + e._s(e.$t("toolbar.Feedback")) + "\n        ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.faqbuttonVisible, expression: "faqbuttonVisible" }], on: { click: function(t) { return e.$router.push("/user-reviews-and-tutorials") } } }, [n("i", { staticClass: "fab fa-youtube fa-fw" }), e._v(" " + e._s(e.$t("toolbar.User reviews and tutorials")) + "\n        ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.faqbuttonVisible, expression: "faqbuttonVisible" }], on: { click: function(t) { return e.$router.push("/how-to-use-in-the-classroom") } } }, [n("i", { staticClass: "fas fa-chalkboard-teacher fa-fw" }), e._v(" " + e._s(e.$t("common.Use this in the classroom")) + "\n        ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.faqbuttonVisible, expression: "faqbuttonVisible" }], on: { click: function(t) { return e.$router.push("/faq") } } }, [n("i", { staticClass: "fa fa-question-circle fa-fw" }), e._v(" " + e._s(e.$t("toolbar.FAQ")) + "\n        ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.feedbackbuttonVisible, expression: "feedbackbuttonVisible" }], on: { click: function(t) { return e.$router.push("/privacy-policy") } } }, [n("i", { staticClass: "fas fa-user-secret fa-fw" }), e._v(" " + e._s(e.$t("common.Privacy policy")) + "\n        ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.feedbackbuttonVisible, expression: "feedbackbuttonVisible" }], on: { click: function(t) { return e.$router.push("/faq/terms") } } }, [n("i", { staticClass: "fas fa-balance-scale fa-fw" }), e._v(" " + e._s(e.$t("appInfo.Terms of service")) + "\n        ")]), e._v(" "), n("b-navbar-item"), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.importVisible, expression: "importVisible" }], on: { click: function(t) { return e.$emit("open-twitter-dialog") } } }, [n("i", { staticClass: "fab fa-twitter fa-fw" }), e._v(" " + e._s(e.$t("common.Import Twitter users")) + "\n        ")]), e._v(" "), n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.importVisible, expression: "importVisible" }], on: { click: function(t) { return e.$emit("open-sheet-dialog") } } }, [n("i", { staticClass: "fa fa-link fa-fw" }), e._v(" " + e._s(e.$t("common.Link Google Spreadsheet")) + "\n        ")]), e._v(" "), e.browserIsIEOrOldEdge ? e._e() : n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.optionsButtonVisible, expression: "optionsButtonVisible" }], on: { click: function(t) { return e.toggleDarkMode() } } }, [n("i", { staticClass: "fas fa-moon fa-fw" }), e._v(" " + e._s(e.$t("toolbar.Dark mode")) + "\n        ")]), e._v(" "), n("b-navbar-item"), e._v(" "), n("b-navbar-item", { on: { click: function(t) { return e.$emit("open-account-dialog") } } }, [n("i", { staticClass: "fas fa-user-alt fa-fw" }), e._v(" " + e._s(e.$t("common.My account")) + "\n        ")])], 1), e._v(" "), "mobile" == e.$mq ? n("b-navbar-dropdown", { attrs: { label: e.$t("toolbar.Language") } }, e._l(e.locales, (function(t) { return n("b-navbar-item", { key: t.name, on: { click: function(n) { return e.$emit("set-locale", t.name) } } }, [e._v("\n          " + e._s(t.humanName) + "\n      ")]) })), 1) : e._e(), e._v(" "), "mobile" != e.$mq ? n("b-navbar-item", { directives: [{ name: "show", rawName: "v-show", value: e.languageVisible, expression: "languageVisible" }], attrs: { tag: "div", href: "#" } }, [n("b-select", { model: { value: e.locale, callback: function(t) { e.locale = t }, expression: "locale" } }, [e._l(e.locales, (function(t) { return n("option", { key: t.name, domProps: { value: t.name } }, [e._v("\n          " + e._s(t.humanName) + "\n        ")]) })), e._v(" "), n("option", { attrs: { value: "add-your-language" } }, [e._v("\n          " + e._s(e.$t("toolbar.Add your language")) + "\n        ")])], 2)], 1) : e._e()]], 2)], 2)
                };
                F._withStripped = !0;
                var S = n(81776);

                function E(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function D(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                var I = {
                        data: function() { return { toolbarBrand: window.location.host, browserIsIEOrOldEdge: l.Vl(navigator.userAgent), locales: S.NB(l.eo(navigator)) } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? E(Object(n), !0).forEach((function(t) { D(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ locale: { get: function() { return this.$i18n.locale }, set: function(e) { "add-your-language" == e ? this.$router.push("/translate.html") : this.$emit("set-locale", e) } }, newButtonVisible: function() { return !this.fullScreen && !this.sheetLinked && !this.wheelIsBusy }, openButtonVisible: function() { return !this.fullScreen && !this.sheetLinked && !this.wheelIsBusy }, saveButtonVisible: function() { return this.online && !this.fullScreen && !this.wheelIsBusy }, shareButtonVisible: function() { return this.online && !this.fullScreen && !this.wheelIsBusy }, optionsButtonVisible: function() { return !this.fullScreen && !this.wheelIsBusy }, fullscreenButtonVisible: function() { return !this.fullScreen && !this.wheelIsBusy }, exitFullscreenButtonVisible: function() { return this.fullScreen }, moreVisible: function() { return this.online && !this.fullScreen && !this.wheelIsBusy }, importVisible: function() { return this.online && !this.fullScreen && !this.sheetLinked && !this.wheelIsBusy }, unlinkSheetButtonVisible: function() { return this.sheetLinked && !this.fullScreen && !this.wheelIsBusy }, languageVisible: function() { return this.online && !this.fullScreen && !this.wheelIsBusy }, faqbuttonVisible: function() { return !this.fullScreen && !this.wheelIsBusy }, feedbackbuttonVisible: function() { return this.online && !this.fullScreen && !this.wheelIsBusy } }, (0, o.Se)(["online", "wheelIsBusy", "fullScreen", "sheetLinked", "version"])),
                        methods: {
                            enterFullScreen: function() { l.L9("Wheel", "EnterFullscreen", ""), this.$store.commit("enterFullScreen") },
                            exitFullScreen: function() { l.L9("Wheel", "ExitFullscreen", ""), this.$store.commit("exitFullScreen") },
                            toggleDarkMode: function() { l.L9("Wheel", "ToggleDarkMode", ""), this.$store.commit("toggleDarkMode") },
                            openFeedbackForm: function() {
                                var e = l.cS(navigator.userAgent, this.version);
                                window.open(e, "_new")
                            }
                        }
                    },
                    R = I,
                    A = n(51900),
                    P = (0, A.Z)(R, F, [], !1, null, null, null);
                P.options.__file = "static/toolbar.vue";
                var $ = P.exports,
                    O = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return e.showAd ? n("div", [n("div", { staticClass: "ad-declaration" }, [n("a", { on: { click: function(t) { return e.toggleReportingBox() } } }, [e._v(e._s(e.$t("app.Report bad ad")))]), e._v(" "), n("span", { staticStyle: { float: "right" } }, [e._v("\n      " + e._s(e.$t("app.Close ad")) + "\n      "), n("b-button", { staticStyle: { "margin-left": "10px" }, attrs: { type: "is-light", pack: "far", "icon-left": "times-circle", size: "is-small" }, on: { click: function(t) { return e.hideAd() } } })], 1)]), e._v(" "), n("div", { staticClass: "ad-declaration" }, [e.showReporting ? n("div", { staticClass: "card" }, [e._m(0), e._v(" "), e._m(1)]) : e._e()]), e._v(" "), n("desktopEnthusiastAd")], 1) : e._e()
                    };
                O._withStripped = !0;
                var T = function() { var e = this.$createElement; return (this._self._c || e)("div", { attrs: { id: "div-gpt-ad-won-1" } }) };
                T._withStripped = !0, n(86860);
                var N = (0, A.Z)({}, T, [], !1, null, null, null);

                function j() {
                    var e, t;
                    e = document, (t = new XMLHttpRequest).open("GET", "https://api.enthusiastgaming.net/scripts/cdn.enthusiast.gg/script/eg-aps/release/eg-aps-bootstrap-v2.0.0.bundle.js?site=wheelofnames.com", !0), t.onreadystatechange = function() {
                            var n;
                            4 == t.readyState && (200 <= t.status && t.status < 300 || 304 == t.status) && ((n = e.createElement("script")).type = "text/javascript", n.text = t.responseText, e.head.appendChild(n))
                        }, t.send(null),
                        function(e, t, n, i, r) {
                            e[i] = e[i] || [], e[i].push({ "gtm.start": (new Date).getTime(), event: "gtm.js" });
                            var a = t.getElementsByTagName(n)[0],
                                o = t.createElement(n);
                            o.async = !0, o.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WCNC9HN", a.parentNode.insertBefore(o, a)
                        }(window, document, "script", "dataLayer")
                }
                N.options.__file = "static/desktopEnthusiastAd.vue";
                var W = { components: { desktopEnthusiastAd: N.exports }, data: function() { return { showAd: !0, showReporting: !1 } }, mounted: function() { j() }, methods: { hideAd: function() { l.L9("Wheel", "HideDesktopAd", ""), this.showAd = !1 }, toggleReportingBox: function() { this.showReporting = !this.showReporting, l.L9("Wheel", "ToggleBadAdInstructions", this.showReporting ? "Show" : "Hide") } } },
                    B = (n(62078), (0, A.Z)(W, O, [function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "card-header" }, [n("div", { staticClass: "card-header-title" }, [e._v("\n          How to report an inappropriate ad\n        ")])])
                    }, function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "card-content" }, [n("ol", [n("li", [e._v("\n            Take a screenshot of this page.\n            (Unsure how to take a screenshot?\n            "), n("a", { attrs: { target: "_new", href: "https://www.take-a-screenshot.org/" } }, [e._v("See instructions here")]), e._v(".)\n          ")]), e._v(" "), n("li", [e._v("\n            Create an email with the subject line "), n("b", [e._v("Bad ad")])]), e._v(" "), n("li", [e._v("\n            Attach the screenshot to the email and send it to admin@wheelofnames.com.\n          ")])])])
                    }], !1, null, "c5de48e8", null));
                B.options.__file = "static/desktopAd.vue";
                var L = B.exports,
                    M = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return e.showAd ? n("div", [n("div", { staticClass: "enthusiast-adhesion" }, [n("div", { staticClass: "enthusiast-close-button", on: { click: function(t) { return e.hideAd() } } }, [e._v("X")]), e._v(" "), n("div", { attrs: { id: "div-gpt-ad-sticky-bottom" } })])]) : e._e()
                    };
                M._withStripped = !0;
                var V = {
                        data: function() { return { showAd: !1 } },
                        mounted: function() {
                            var e = this;
                            setTimeout((function() { e.showAd = !0, j() }), 7e3)
                        },
                        methods: { hideAd: function() { l.L9("Wheel", "HideMobileAd", ""), this.showAd = !1 } }
                    },
                    z = (n(52958), (0, A.Z)(V, M, [], !1, null, null, null));
                z.options.__file = "static/mobileAd.vue";
                var U = z.exports,
                    G = n(51681),
                    H = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("b-tabs", { staticStyle: { height: "100%" }, attrs: { type: "is-boxed", size: "is-small" }, model: { value: e.activeTab, callback: function(t) { e.activeTab = t }, expression: "activeTab" } }, [n("b-tab-item", { staticClass: "my-tab-item", scopedSlots: e._u([{ key: "header", fn: function() { return [n("span", [e._v("\n        " + e._s(e.$t("nameTabs.Entries")) + "\n        "), n("counter-tag", { attrs: { number: e.$store.getters.entryCount } })], 1)] }, proxy: !0 }]) }, [e._v(" "), n("textboxbuttons", { on: { "reset-wheel-rotation": function(t) { return e.$emit("reset-wheel-rotation") } } }), e._v(" "), e.wheelIsAdvanced ? e._e() : n("textbox"), e._v(" "), e.wheelIsAdvanced ? n("advancedsliceeditor") : e._e(), e._v(" "), n("app-info")], 1), e._v(" "), n("b-tab-item", { staticClass: "my-tab-item", scopedSlots: e._u([{ key: "header", fn: function() { return [n("span", [e._v("\n        " + e._s(e.$t("nameTabs.Results")) + "\n        "), n("counter-tag", { attrs: { number: e.$store.getters.winnerCount } })], 1)] }, proxy: !0 }]) }, [e._v(" "), n("b-field", { attrs: { grouped: "", "group-multiline": "" } }, [n("p", { staticClass: "control" }, [n("b-button", { attrs: { size: "is-small", type: "is-light" }, on: { click: e.sortWinners } }, [n("i", { staticClass: "fas fa-sort-alpha-up" }), e._v(" " + e._s(e.$t("textboxbuttons.Sort")) + "\n        ")])], 1), e._v(" "), n("p", { staticClass: "control" }, [n("b-button", { attrs: { size: "is-small", type: "is-light" }, on: { click: e.clearWinners } }, [n("i", { staticClass: "fas fa-times" }), e._v(" " + e._s(e.$t("nameTabs.Clear the list")) + "\n        ")])], 1)]), e._v(" "), n("winnertextbox")], 1), e._v(" "), n("b-tab-item", { staticClass: "my-tab-item", scopedSlots: e._u([{ key: "header", fn: function() { return [n("span", [e._v("\n        " + e._s(e.$t("nameTabs.Hide")) + "\n      ")])] }, proxy: !0 }]) })], 1)
                    };
                H._withStripped = !0;
                var q = function() {
                    var e = this,
                        t = e.$createElement;
                    return (e._self._c || t)("b-tag", { directives: [{ name: "show", rawName: "v-show", value: e.number > 0, expression: "number>0" }], attrs: { rounded: "" } }, [e._v(e._s(e.number.toLocaleString()))])
                };
                q._withStripped = !0;
                var Z = (0, A.Z)({ props: ["number"] }, q, [], !1, null, null, null);
                Z.options.__file = "static/counterTag.vue";
                var K = Z.exports,
                    J = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("b-field", { attrs: { grouped: "", "group-multiline": "" } }, [n("p", { staticClass: "control" }, [n("b-button", { attrs: { size: "is-small", type: "is-light", disabled: e.buttonsDisabled }, on: { click: e.shuffle } }, [n("i", { staticClass: "fas fa-random" }), e._v(" " + e._s(e.$t("textboxbuttons.Shuffle")) + "\n    ")])], 1), e._v(" "), n("p", { staticClass: "control" }, [n("b-button", { attrs: { size: "is-small", type: "is-light", disabled: e.buttonsDisabled }, on: { click: e.sort } }, [n("i", { staticClass: "fas fa-sort-alpha-up" }), e._v(" " + e._s(e.$t("textboxbuttons.Sort")) + "\n    ")])], 1), e._v(" "), n("p", { staticClass: "control", staticStyle: { "margin-top": "-1px" } }, [n("b-upload", { attrs: { accept: "image/*", multiple: "", disabled: e.buttonsDisabled }, model: { value: e.uploadedImage, callback: function(t) { e.uploadedImage = t }, expression: "uploadedImage" } }, [n("a", { staticClass: "button is-small is-light", attrs: { disabled: e.buttonsDisabled } }, [n("i", { staticClass: "far fa-image" }), e._v(" " + e._s(e.$t("textboxbuttons.Add image")) + "\n      ")])])], 1), e._v(" "), n("p", { staticClass: "control" }, [e.displayAdvancedCheckbox ? n("b-checkbox", { key: e.updateAdvancedCheckbox, attrs: { size: "is-small", disabled: e.buttonsDisabled }, model: { value: e.wheelIsAdvanced, callback: function(t) { e.wheelIsAdvanced = t }, expression: "wheelIsAdvanced" } }, [e._v("\n      " + e._s(e.$t("textboxbuttons.Advanced")) + "\n    ")]) : e._e()], 1)])
                    };

                function Y(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function X(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

                function Q(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function ee(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                    return i
                }
                J._withStripped = !0;
                var te = {
                        data: function() { return { uploadedImage: [], updateAdvancedCheckbox: 0 } },
                        watch: {
                            uploadedImage: function(e) {
                                var t = this;
                                if (0 != e.length) {
                                    l.L9("Wheel", "UploadPieSliceImage", e.length);
                                    var n, i = function(e, t) {
                                        var n;
                                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                            if (Array.isArray(e) || (n = function(e, t) { if (e) { if ("string" == typeof e) return ee(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ee(e, t) : void 0 } }(e)) || t && e && "number" == typeof e.length) {
                                                n && (e = n);
                                                var i = 0,
                                                    r = function() {};
                                                return { s: r, n: function() { return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] } }, e: function(e) { throw e }, f: r }
                                            }
                                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }
                                        var a, o = !0,
                                            s = !1;
                                        return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return o = e.done, e }, e: function(e) { s = !0, a = e }, f: function() { try { o || null == n.return || n.return() } finally { if (s) throw a } } }
                                    }(e);
                                    try {
                                        var r = function() {
                                            var e = n.value,
                                                i = new FileReader,
                                                r = t;
                                            i.onload = function() {
                                                var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                                    var n;
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, c.cM(t.target.result);
                                                            case 2:
                                                                n = e.sent, r.$store.dispatch("appendImageEntry", n);
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), function() {
                                                    var t = this,
                                                        n = arguments;
                                                    return new Promise((function(i, r) {
                                                        var a = e.apply(t, n);

                                                        function o(e) { Q(a, i, r, o, s, "next", e) }

                                                        function s(e) { Q(a, i, r, o, s, "throw", e) }
                                                        o(void 0)
                                                    }))
                                                });
                                                return function(e) { return t.apply(this, arguments) }
                                            }(), i.readAsDataURL(e)
                                        };
                                        for (i.s(); !(n = i.n()).done;) r()
                                    } catch (e) { i.e(e) } finally { i.f() }
                                    this.uploadedImage = []
                                }
                            }
                        },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Y(Object(n), !0).forEach((function(t) { X(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({
                            buttonsDisabled: function() { return this.sheetLinked || this.wheelIsBusy },
                            wheelIsAdvanced: {
                                get: function() { return this.$store.getters.wheelIsAdvanced },
                                set: function(e) {
                                    var t = this;
                                    e ? (this.$store.dispatch("setAdvanced", e), l.L9("Wheel", "ConvertToAdvanced")) : this.$buefy.dialog.confirm({ title: this.$t("textboxbuttons.Revert from advanced"), message: this.$t("textboxbuttons.Reverting will reset"), cancelText: this.$t("common.Cancel"), confirmText: this.$t("common.Continue"), type: "is-warning", hasIcon: !0, onConfirm: function() { t.$store.dispatch("setAdvanced", e), l.L9("Wheel", "RevertFromAdvanced") }, onCancel: function() { return t.updateAdvancedCheckbox++ } })
                                }
                            },
                            displayAdvancedCheckbox: function() { return !l.a0() }
                        }, (0, o.Se)(["sheetLinked", "wheelIsBusy", "wheelType"])),
                        methods: { shuffle: function() { l.L9("Wheel", "ShuffleEntries", ""), this.$store.commit("shuffleEntries") }, sort: function() { l.L9("Wheel", "SortEntries", ""), this.$store.commit("sortEntries") } }
                    },
                    ne = te,
                    ie = (0, A.Z)(ne, J, [], !1, null, null, null);
                ie.options.__file = "static/textboxbuttons.vue";
                var re = ie.exports,
                    ae = function() {
                        var e = this,
                            t = e.$createElement;
                        return (e._self._c || t)("div", { staticClass: "textarea can-go-dark basic-editor has-fixed-size", attrs: { id: "entries", spellcheck: "false", contentEditable: "true" }, on: { paste: e.onPaste, input: function(t) { return e.setEntries() }, keyup: e.IE_setEntries } })
                    };

                function oe(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function se(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                ae._withStripped = !0;
                var le = {
                        data: function() { return { updateTriggeredByMe: !1 } },
                        mounted: function() { this.setTextboxContents(this.entries) },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? oe(Object(n), !0).forEach((function(t) { se(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ entries: function() { return this.wheelConfig.entries } }, (0, o.Se)(["wheelConfig", "wheelIsBusy", "sheetLinked", "appInfoVisible"])),
                        watch: {
                            entries: function(e) { this.updateTriggeredByMe ? this.updateTriggeredByMe = !1 : this.setTextboxContents(e) },
                            wheelConfig: function(e) { this.setTextboxContents(e.entries) },
                            wheelIsBusy: function(e) {
                                var t = !e;
                                document.getElementById("entries").setAttribute("contenteditable", t)
                            },
                            sheetLinked: function(e) {
                                var t = !e,
                                    n = document.getElementById("entries");
                                n.setAttribute("contenteditable", t), e ? (n.style.backgroundImage = "url('/images/link.png')", n.style.backgroundSize = "100%", n.style.backgroundAttachment = "local") : n.style.backgroundImage = ""
                            }
                        },
                        methods: {
                            setEntries: function() {
                                this.updateTriggeredByMe = !0;
                                var e = this.getEntries();
                                this.$store.commit("setEntries", e)
                            },
                            IE_setEntries: function() { l.a0() && this.setEntries() },
                            getEntries: function() { var e = document.getElementById("entries"); return l.k0(e.innerHTML) },
                            setTextboxContents: function(e) { document.getElementById("entries").innerHTML = e.map((function(e) { return l.D7(e) })).join("") },
                            onPaste: function(e) {
                                if (e.preventDefault(), l.L9("Wheel", "PasteIntoTextbox", ""), e.clipboardData) {
                                    var t = (e.originalEvent || e).clipboardData.getData("text/html").match(/(<.*?src="data:image.*?>)/);
                                    if (t) document.execCommand("insertHtml", !1, t[1]);
                                    else {
                                        var n = (e.originalEvent || e).clipboardData.getData("text/plain");
                                        document.execCommand("insertText", !1, n)
                                    }
                                } else {
                                    var i = window.clipboardData.getData("text");
                                    i && this.$store.commit("appendTextEntries", i.split(/\n/))
                                }
                            }
                        }
                    },
                    ce = le,
                    ue = (n(75063), (0, A.Z)(ce, ae, [], !1, null, "465c016b", null));
                ue.options.__file = "static/textbox.vue";
                var he = ue.exports,
                    de = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticStyle: { "flex-grow": "1", display: "flex", "flex-direction": "column" } }, [n("div", { staticStyle: { overflow: "auto", "border-radius": "10px", "border-color": "#dbdbdb", "border-style": "solid", "flex-grow": "1", height: "300px" } }, [e._l(e.entries, (function(e, t) { return [n("advancedSlice", { ref: "entry" + t, refInFor: !0, attrs: { entry: e, i: t } })] }))], 2), e._v(" "), n("b-button", { staticStyle: { width: "100%", "margin-top": "8px" }, attrs: { type: "is-primary", disabled: e.wheelIsBusy }, on: { click: function(t) { return e.addEntry() } } }, [e._v("\n    " + e._s(e.$t("advancededitor.Add entry")) + "\n  ")])], 1)
                    };
                de._withStripped = !0;
                var fe = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "card can-go-dark" }, [n("div", { staticClass: "card-content", staticStyle: { padding: "12px 12px 0px 12px" } }, [n("div", { staticClass: "columns is-mobile", staticStyle: { "margin-bottom": "0" } }, [n("div", { staticClass: "column is-narrow", style: e.entry.enabled ? "" : "opacity:0.4" }, [n("div", { staticClass: "v-centered" }, [e.i > 0 ? n("i", { staticClass: "fas fa-arrow-up clickable-icon", on: { click: function(t) { return e.moveEntry(e.i, -1) } } }) : e._e(), e._v(" "), e.i > 0 ? n("br") : e._e(), e._v(" "), e.i < e.entries.length - 1 ? n("i", { staticClass: "fas fa-arrow-down clickable-icon", on: { click: function(t) { return e.moveEntry(e.i, 1) } } }) : e._e()])]), e._v(" "), n("div", { staticClass: "column", staticStyle: { padding: "0" }, style: e.entry.enabled ? "" : "opacity:0.4" }, [n("div", { staticClass: "columns is-mobile", staticStyle: { "padding-left": "0", "padding-right": "6px", margin: "12px 0 0 0" } }, [n("div", { staticClass: "column", staticStyle: { padding: "0 8px 0 8px", "margin-bottom": "12px" } }, [n("b-input", { ref: "textbox", attrs: { disabled: e.wheelIsBusy }, on: { input: function(t) { return e.updateEntryText(e.i, e.entry.text) } }, model: { value: e.entry.text, callback: function(t) { e.$set(e.entry, "text", t) }, expression: "entry.text" } })], 1), e._v(" "), "color" == e.wheelConfig.type ? n("div", { staticClass: "column is-narrow", staticStyle: { padding: "2px 8px 0 8px" } }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.entry.color, expression: "entry.color" }], attrs: { type: "color", disabled: e.wheelIsBusy }, domProps: { value: e.entry.color }, on: { change: function(t) { return e.updateEntryColor(e.i, e.entry.color) }, input: function(t) { t.target.composing || e.$set(e.entry, "color", t.target.value) } } })]) : e._e()]), e._v(" "), e.entry.image ? n("div", { staticStyle: { padding: "0 8px 0 8px" } }, [n("img", { staticStyle: { "border-radius": "4px", "max-height": "40px" }, attrs: { src: e.entry.image, alt: e.$t("advancededitor.Image attached") } }), e._v(" "), n("i", { staticClass: "fas fa-times clickable-icon", staticStyle: { "padding-top": "2px", "vertical-align": "top" }, on: { click: function(t) { return e.removeImageFromEntry(e.i) } } })]) : e._e(), e._v(" "), n("transition", { attrs: { name: "slide" } }, [e.expanded ? n("div", { staticStyle: { padding: "0 0 8px 8px", width: "170px" } }, [n("b-select", { attrs: { "icon-pack": "fas", icon: "volume-up", size: "is-small", disabled: e.wheelIsBusy }, model: { value: e.sound, callback: function(t) { e.sound = t }, expression: "sound" } }, [n("option", { attrs: { value: "" } }, [e._v("\n                " + e._s(e.$t("advancededitor.Inherit from wheel")) + "\n              ")]), e._v(" "), e._l(e.afterSpinSounds, (function(t) { return n("option", { key: t.value, domProps: { value: t.value } }, [e._v("\n                " + e._s(e.$t(t.name)) + "\n              ")]) }))], 2), e._v(" "), e.wheelConfig.displayWinnerDialog ? n("b-input", { staticStyle: { "margin-top": "8px" }, attrs: { placeholder: e.$t("advancededitor.Popup message"), size: "is-small", disabled: e.wheelIsBusy }, model: { value: e.message, callback: function(t) { e.message = t }, expression: "message" } }) : e._e(), e._v(" "), n("div", { staticClass: "columns is-mobile is-vcentered" }, [n("div", { staticClass: "column is-9", staticStyle: { "margin-top": "8px" } }, [n("b-field", [n("b-numberinput", { attrs: { size: "is-small", "icon-pack": "fas", icon: "balance-scale-left", disabled: e.wheelIsBusy, min: "1", max: "999", "controls-rounded": "", "controls-position": "compact" }, model: { value: e.weight, callback: function(t) { e.weight = t }, expression: "weight" } })], 1)], 1), e._v(" "), n("div", { staticClass: "column is-narrow", staticStyle: { "margin-top": "8px", "font-size": "14px" } }, [e._v("\n                " + e._s(e.odds) + "%\n              ")])])], 1) : e._e()])], 1), e._v(" "), n("div", { staticClass: "column is-narrow", staticStyle: { padding: "0", margin: "12px 0 0 0" }, style: e.entry.enabled ? "" : "opacity:0.4" }, [n("b-tooltip", { attrs: { label: e.$t("advancededitor.Duplicate"), type: "is-light", position: "is-left" } }, [n("i", { staticClass: "far fa-clone clickable-icon", on: { click: function(t) { return e.duplicateEntry(e.i) } } })]), e._v(" "), n("br"), e._v(" "), n("b-tooltip", { attrs: { label: e.$t("textboxbuttons.Add image"), type: "is-light", position: "is-left" } }, [n("b-upload", { attrs: { accept: "image/*", disabled: e.wheelIsBusy }, model: { value: e.uploadedImage, callback: function(t) { e.uploadedImage = t }, expression: "uploadedImage" } }, [n("i", { staticClass: "far fa-image clickable-icon", on: { click: function(t) { return e.attachImageToEntry(e.i) } } })])], 1)], 1), e._v(" "), n("div", { staticClass: "column is-narrow" }, [n("i", { staticClass: "fas fa-times clickable-icon", staticStyle: { "font-size": "125%", "padding-top": "2px" }, style: e.entry.enabled ? "" : "opacity:0.4", on: { click: function(t) { return e.removeEntry(e.i) } } }), e._v(" "), n("br"), e._v(" "), n("b-tooltip", { attrs: { type: "is-light", position: "is-left", label: e.entry.enabled ? e.$t("advancededitor.Shown on the wheel") : e.$t("advancededitor.Not shown on the wheel") } }, [n("b-checkbox", { staticStyle: { "margin-right": "-10px" }, attrs: { size: "is-small", disabled: e.wheelIsBusy }, on: { input: function(t) { return e.toggleEntryEnabled() } }, model: { value: e.entry.enabled, callback: function(t) { e.$set(e.entry, "enabled", t) }, expression: "entry.enabled" } })], 1)], 1)]), e._v(" "), n("div", { staticClass: "has-text-centered", style: (e.entry.enabled ? "" : "opacity:0.4;") + (e.expanded ? "margin-top:-6px" : "margin-top:-20px") }, [n("i", { class: "fas clickable-icon stretched fa-angle-" + (e.expanded ? "up" : "down"), on: { click: function(t) { return e.toggleExpanded() } } })])])])
                };
                fe._withStripped = !0;
                var me = JSON.parse('{"sounds.Sound effects":{"sounds.Ticking sound":{"value":"ticking-sound"},"sounds.No sound":{"value":"no-sound"},"sounds.Random music":{"value":"random-music"},"sounds.Drum roll":{"value":"drum-roll","musicFile":"/043293151-drum-roll-cymbal-crash-end.mp3"}},"sounds.Pop music":{"A better life":{"value":"a-better-life","musicFile":"/a-better-life-shutterstock.mp3"},"Beyond the cloudy sky":{"value":"beyond-the-cloudy-sky","musicFile":"/beyond-the-cloudy-sky-shutterstock.mp3"},"Floor breaker":{"value":"floor-breaker","musicFile":"/floor-breaker-shutterstock.mp3"},"Fun times all the time":{"value":"fun-times-all-the-time","musicFile":"/fun-times-all-the-time-shutterstock.mp3"},"Heaven\'s smile":{"value":"heavens-smile","musicFile":"/heavens-smile-shutterstock.mp3"},"Life of Riley":{"value":"cheerful-music","musicFile":"/life-of-riley-by-kevin-macleod-from-filmmusic-io.mp3"},"Lush life":{"value":"lush-life","musicFile":"/lush-life-shutterstock.mp3"},"Make the drive":{"value":"make-the-drive","musicFile":"/make-the-drive-shutterstock.mp3"},"Spaceship":{"value":"spaceship","musicFile":"/258_short2_spaceship_0035.mp3"},"Time and time again":{"value":"time-and-time-again","musicFile":"/time-and-time-again-shutterstock.mp3"},"Vibrance":{"value":"vibrance","musicFile":"/vibrance-shutterstock.mp3"},"We can\'t slow down":{"value":"we-can-t-slow-down","musicFile":"/329_short2_we-can-t-slow-down_0029.mp3"},"sounds.Random pop music":{"value":"random: Pop music"}},"sounds.Easy listening":{"A simple way to be happy":{"value":"a-simple-way-to-be-happy","musicFile":"/a-simple-way-to-be-happy-shutterstock.mp3"},"Genius minds":{"value":"genius-minds","musicFile":"/genius-minds-shutterstock.mp3"},"Glitter blast":{"value":"relaxing-music","musicFile":"/glitter-blast-by-kevin-macleod-from-filmmusic-io.mp3"},"Groundwork":{"value":"groundwork","musicFile":"/groundwork-by-kevin-macleod-from-filmmusic-io.mp3"},"Happy bee":{"value":"happy-bee","musicFile":"/happy-bee-by-kevin-macleod-from-filmmusic-io.mp3"},"Happy whistling ukulele":{"value":"whistling","musicFile":"/happy-whistling-ukulele--by-rafael-krux-from-filmmusic-io.mp3"},"Inspiration":{"value":"inspiration","musicFile":"/inspiration--by-rafael-krux-from-filmmusic-io.mp3"},"Lucky in life":{"value":"lucky-in-life","musicFile":"/lucky-in-life-shutterstock.mp3"},"Upbeat forever":{"value":"ska-music","musicFile":"/upbeat-forever-by-kevin-macleod-from-filmmusic-io.mp3"},"sounds.Random easy listening":{"value":"random: Easy listening"}},"sounds.Cinematic music":{"Enter sentinel":{"value":"enter-sentinel","musicFile":"/enter-sentinel-shutterstock.mp3"},"Fire with fire":{"value":"fire-with-fire","musicFile":"/fire-with-fire-shutterstock.mp3"},"Midnight diving":{"value":"midnight-diving","musicFile":"/midnight-diving-shutterstock.mp3"},"Strength of the Titans":{"value":"dramatic-music","musicFile":"/strength-of-the-titans-by-kevin-macleod-from-filmmusic-io.mp3"},"Ripples in time":{"value":"romantic-music","musicFile":"/514_short2_ripples-in-time_0031.mp3"},"Wretched destroyer":{"value":"spooky-music","musicFile":"/wretched-destroyer-by-kevin-macleod-from-filmmusic-io.mp3"},"sounds.Random cinematic music":{"value":"random: Cinematic music"}},"Reggae & Reggaeton":{"BehBuBah":{"value":"behbubah-music","musicFile":"/258_short2_behbubah_0030.mp3"},"Cairo reggaeton":{"value":"cairo-reggaeton","musicFile":"/cairo-reggaeton-shutterstock.mp3"},"Dancing monkey":{"value":"dancing-monkey","musicFile":"/dancing-monkey-shutterstock.mp3"},"Easy jam":{"value":"reggae-music","musicFile":"/easy-jam-by-kevin-macleod-from-filmmusic-io.mp3"},"Steel drum":{"value":"steel-drum","musicFile":"/steel-drum-shutterstock.mp3"},"Sun island waves":{"value":"reggaeton-music","musicFile":"/406_short2_sun-island-waves_0033.mp3"},"sounds.Random reggae & reggaeton":{"value":"random: Reggae & Reggaeton"}},"8-Bit":{"8-Bits racing car game theme":{"value":"video-game-music","musicFile":"/47_short2_8-bits-racing-car-game-theme_0029.mp3"},"Game of rings":{"value":"game-of-rings","musicFile":"/game-of-rings-shutterstock.mp3"},"Sweet tale":{"value":"sweet-tale","musicFile":"/sweet-tale-shutterstock.mp3"},"sounds.Random 8-Bit":{"value":"random: 8-Bit"}},"Folk":{"Banjo bonanza":{"value":"banjo-bonanza","musicFile":"/052704714-bluegrass-banjo-bonanza.mp3"},"Falling leaf":{"value":"falling-leaf","musicFile":"/falling-leaf-shutterstock.mp3"},"Meeting the backcountry":{"value":"meeting-the-backcountry","musicFile":"/meeting-the-backcountry-shutterstock.mp3"},"Steel and gold":{"value":"steel-and-gold","musicFile":"/steel-and-gold-shutterstock.mp3"},"Uke can swing":{"value":"uke-can-swing","musicFile":"/uke-can-swing-shutterstock.mp3"},"Window of opportunity":{"value":"window-of-opportunity","musicFile":"/window-of-opportunity-shutterstock.mp3"},"sounds.Random folk music":{"value":"random: Folk"}},"sounds.Silent film score":{"Amazing plan":{"value":"piano-music","musicFile":"/amazing-plan-by-kevin-macleod-from-filmmusic-io.mp3"},"Le grand chase":{"value":"fast-piano-music","musicFile":"/le-grand-chase-by-kevin-macleod-from-filmmusic-io.mp3"},"Merry-go-round":{"value":"merry-go-round","musicFile":"/merry-go-by-kevin-macleod-from-filmmusic-io.mp3"},"Super circus":{"value":"circus-music","musicFile":"/super-circus-by-kevin-macleod-from-filmmusic-io.mp3"},"sounds.Random silent film score":{"value":"random: Silent film score"}},"Dance & Techno":{"Crazy clown":{"value":"crazy-clown","musicFile":"/223_short3_crazy-clown_0064.mp3"},"Defiant dance":{"value":"defiant-dance","musicFile":"/defiant-dance-shutterstock.mp3"},"Give me that":{"value":"give-me-that","musicFile":"/give-me-that-shutterstock.mp3"},"Move forward":{"value":"move-forward","musicFile":"/move-forward-shutterstock.mp3"},"Overclock":{"value":"drum-n-bass-music","musicFile":"/382_short3_overclock_0064.mp3"},"Race for survival":{"value":"race-for-survival","musicFile":"/race-for-survival-shutterstock.mp3"},"Raving energy":{"value":"edm-music","musicFile":"/raving-energy-faster-by-kevin-macleod-from-filmmusic-io.mp3"},"So bright":{"value":"so-bright","musicFile":"/so-bright-shutterstock.mp3"},"Strike out":{"value":"strike-out","musicFile":"/strike-out-shutterstock.mp3"},"Whistle & flow":{"value":"whistle-and-flow","musicFile":"/whistle-and-flow-shutterstock.mp3"},"sounds.Random dance & techno":{"value":"random: Dance & Techno"}},"Hip hop":{"Bananas":{"value":"bananas","musicFile":"/bananas-shutterstock.mp3"},"Drop zone":{"value":"drop-zone","musicFile":"/drop-zone-shutterstock.mp3"},"Gassed up":{"value":"gassed-up","musicFile":"/gassed-up-shutterstock.mp3"},"Going all the way":{"value":"going-all-the-way","musicFile":"/going-all-the-way-shutterstock.mp3"},"Hard trap bounce":{"value":"hard-trap-bounce","musicFile":"/hard-trap-bounce-shutterstock.mp3"},"Ice cream truck":{"value":"ice-cream-truck","musicFile":"/ice-cream-truck-shutterstock.mp3"},"It\'s alive":{"value":"its-alive","musicFile":"/its-alive-shutterstock.mp3"},"Put your hand up":{"value":"put-your-hand-up","musicFile":"/put-your-hand-up-shutterstock.mp3"},"Ready for some action":{"value":"ready-for-some-action","musicFile":"/ready-for-some-action-shutterstock.mp3"},"The trap mission":{"value":"the-trap-mission","musicFile":"/the-trap-mission-shutterstock.mp3"},"sounds.Random hip hop":{"value":"random: Hip hop"}},"Disco":{"Mexican jackpot":{"value":"mexican-jackpot","musicFile":"/mexican-jackpot-shutterstock.mp3"},"Ocean wave":{"value":"ocean-wave","musicFile":"/ocean-wave-shutterstock.mp3"},"Saturn airlines":{"value":"saturn-airlines","musicFile":"/saturn-airlines-shutterstock.mp3"},"Stringed disco":{"value":"disco-music","musicFile":"/stringed-disco-by-kevin-macleod-from-filmmusic-io.mp3"},"Vintage disco":{"value":"vintage-disco","musicFile":"/vintage-disco-shutterstock.mp3"},"sounds.Random disco":{"value":"random: Disco"}},"Electronica":{"Ambient chillhop groove":{"value":"ambient-chillhop-groove","musicFile":"/ambient-chillhop-groove-shutterstock.mp3"},"Beautiful Yumiko":{"value":"beautiful-yumiko","musicFile":"/beautiful-yumiko-shutterstock.mp3"},"Better better":{"value":"better-better","musicFile":"/better-better-shutterstock.mp3"},"Deep and dirty":{"value":"dubstep-music","musicFile":"/deep-and-dirty-by-kevin-macleod-from-filmmusic-io.mp3"},"On TV":{"value":"on-tv","musicFile":"/on-tv-shutterstock.mp3"},"Phat sketch":{"value":"elevator-hip-hop","musicFile":"/phat-sketch-by-kevin-macleod-from-filmmusic-io.mp3"},"Science technology ambient":{"value":"science-technology-ambient","musicFile":"/061241762-science-technology-ambient-bac.mp3"},"Son of a rocket":{"value":"grooving","musicFile":"/son-of-a-rocket-by-kevin-macleod-from-filmmusic-io.mp3"},"sounds.Random electronica":{"value":"random: Electronica"}},"Funk":{"Bounce like this":{"value":"bounce-like-this","musicFile":"/bounce-like-this-shutterstock.mp3"},"Celebration":{"value":"funk-music","musicFile":"/celebration-by-kevin-macleod-from-filmmusic-io.mp3"},"Funk overflow":{"value":"funk-overflow","musicFile":"/funk-overflow-shutterstock.mp3"},"Funk the buzz":{"value":"funk-the-buzz","musicFile":"/239_short2_funk-the-buzz_0030.mp3"},"Like we do it":{"value":"like-we-do-it","musicFile":"/339_short2_like-we-do-it_0032.mp3"},"sounds.Random funk":{"value":"random: Funk"}},"Ballroom dancing":{"Happy happy game show":{"value":"game-show-music","musicFile":"/happy-happy-game-show-by-kevin-macleod-from-filmmusic-io.mp3"},"Lobby time":{"value":"lobby-music","musicFile":"/lobby-time-by-kevin-macleod-from-filmmusic-io.mp3"},"The ballroom waltz":{"value":"the-ballroom-waltz","musicFile":"/the-ballroom-waltz-shutterstock.mp3"},"sounds.Random ballroom dancing":{"value":"random: Ballroom dancing"}},"sounds.Rock music":{"Give it a try":{"value":"give-it-a-try","musicFile":"/279_short2_give-it-a-try_0030.mp3"},"In love with the good life":{"value":"in-love-with-the-good-life","musicFile":"/339_short2_in-love-with-the-good-life_0030.mp3"},"Irrepressible fight again":{"value":"grunge","musicFile":"/irrepressible-fight-again-by-winniethemoog-from-filmmusic-io.mp3"},"Learn to believe it":{"value":"learn-to-believe-it","musicFile":"/learn-to-believe-it-shutterstock.mp3"},"Pumping car chase":{"value":"pumping-car-chase","musicFile":"/117973188-pumping-industrial-metal-car-c.mp3"},"Welcome to the show":{"value":"rock-music","musicFile":"/welcome-to-the-show-by-kevin-macleod-from-filmmusic-io.mp3"},"sounds.Random rock music":{"value":"random: Rock music"}},"sounds.World music":{"Arabic celebration":{"value":"arabic-celebration","musicFile":"/408_short2_arabic-celebration_0030.mp3"},"Ban ban":{"value":"ban-ban","musicFile":"/ban-ban-shutterstock.mp3"},"Banda macho":{"value":"mexican-music","musicFile":"/345_short2_banda-macho_0034.mp3"},"Dance of the harpy":{"value":"duduk-oud-and-dumbek","musicFile":"/241_short2_dance-of-the-harpy_0030.mp3"},"Dance with the moon":{"value":"dance-with-the-moon","musicFile":"/dance-with-the-moon-shutterstock.mp3"},"Desert sand":{"value":"desert-sand","musicFile":"/desert-sand-shutterstock.mp3"},"Diwali":{"value":"bollywood-music","musicFile":"/271_short2_diwali_0033.mp3"},"Every heartbeat":{"value":"every-heartbeat","musicFile":"/every-heartbeat-shutterstock.mp3"},"Galway":{"value":"irish-folk-music","musicFile":"/galway-by-kevin-macleod-from-filmmusic-io.mp3"},"Great Wall of China":{"value":"great-wall-of-china","musicFile":"/12_short2_great-wall-of-china_0040.mp3"},"Kage":{"value":"kage","musicFile":"/kage-shutterstock.mp3"},"Khaek mon Thai":{"value":"khaek-mon-thai","musicFile":"/khaek-mon-thai-shutterstock.mp3"},"Italy swing":{"value":"italy-swing","musicFile":"/103865838-italy-swing.mp3"},"Ma re lah":{"value":"ma-re-lah","musicFile":"/ma-re-lah-shutterstock.mp3"},"Modern India":{"value":"modern-india","musicFile":"/438_short2_modern-india_0033.mp3"},"Serviko":{"value":"greek-music","musicFile":"/402_short2_serviko_0029.mp3"},"Verano sensual":{"value":"south-american-music","musicFile":"/verano-sensual-by-kevin-macleod-from-filmmusic-io.mp3"},"sounds.Random world music":{"value":"random: World music"}},"Rockabilly":{"Lone heart blues":{"value":"lone-heart-blues","musicFile":"/lone-heart-blues-shutterstock.mp3"},"Whiskey bar":{"value":"whiskey-bar","musicFile":"/whiskey-bar-shutterstock.mp3"},"Dark pathways":{"value":"dark-pathways","musicFile":"/dark-pathways-shutterstock.mp3"},"sounds.Random rockabilly":{"value":"random: Rockabilly"}},"Polka":{"Festive polka":{"value":"festive-polka","musicFile":"/polka-shutterstock.mp3"},"Tada polka":{"value":"polka","musicFile":"/tada-polka-by-philip-rice-from-filmmusic-io.mp3"},"Tiroler polka":{"value":"tiroler-polka","musicFile":"/tiroler-polka-shutterstock.mp3"},"sounds.Random polka":{"value":"random: Polka"}},"Retro-Rock":{"Fashion power":{"value":"fashion-power","musicFile":"/fashion-power-shutterstock.mp3"},"Groovy shoes":{"value":"groovy-shoes","musicFile":"/groovy-shoes-shutterstock.mp3"},"Small fry":{"value":"small-fry","musicFile":"/small-fry-shutterstock.mp3"},"Surf wax":{"value":"surf-pop-music","musicFile":"/136_short2_surf-wax_0033.mp3"},"Surfing waves":{"value":"surfing-waves","musicFile":"/surfing-waves-shutterstock.mp3"},"sounds.Random retro-rock":{"value":"random: Retro-Rock"}},"sounds.Winter holidays":{"Auld lang syne":{"value":"auld-lang-syne","musicFile":"/auld-lang-syne-shutterstock.mp3"},"Christmas energy":{"value":"christmas-energy","musicFile":"/christmas-energy-shutterstock.mp3"},"Christmas soul":{"value":"christmas-soul","musicFile":"/christmas-soul-shutterstock.mp3"},"Crispy snow":{"value":"crispy-snow","musicFile":"/crispy-snow-shutterstock.mp3"},"Deck the hall":{"value":"winter-holiday-music","musicFile":"/157_short2_deck-the-hall_0032.mp3"},"Dreidel song":{"value":"hanukkah-music","musicFile":"/251_short2_dreidel-song_0031.mp3"},"Holiday bustle":{"value":"holiday-bustle","musicFile":"/holiday-bustle-shutterstock.mp3"},"Jolly old Saint Nicholas":{"value":"jolly-old-saint-nicholas","musicFile":"/jolly-old-saint-nicholas-shutterstock.mp3"},"Log cabin Christmas":{"value":"log-cabin-christmas","musicFile":"/log-cabin-christmas-shutterstock.mp3"},"New Year\'s resolution":{"value":"new-years-resolution","musicFile":"/new-years-resolution-shutterstock.mp3"},"Nutcracker":{"value":"nutcracker","musicFile":"/050375347-tchaikovsky-nutcracker-op-71a-.mp3"},"Oh Christmas tree":{"value":"christmas-music","musicFile":"/oh-christmas-tree-by-kevin-macleod-from-filmmusic-io.mp3"},"sounds.Random winter holidays":{"value":"random: Winter holidays"}}}');

                function pe(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function ge(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { pe(a, i, r, o, s, "next", e) }

                            function s(e) { pe(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }
                var ve, we, be, ye = {};
                window.speechSynthesis && window.speechSynthesis.getVoices();
                var ke = [{ name: "sounds.No sound", value: "no-sound" }, { name: "sounds.Subdued applause", value: "applause-sound-soft", file: "/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408-soft.mp3" }, { name: "sounds.Joke punchline", value: "joke-punchline", file: "/113191636-comedy-joke-punchline-drum-tus.mp3" }, { name: "sounds.Announcement bell", value: "announcement-bell-sound", file: "/053512570-bell-announcement-06.mp3" }, { name: "sounds.Twinkling star", value: "twinkling-star-sound", file: "/060880433-star-ding-04.mp3" }, { name: "sounds.Correct answer ding", value: "correct-answer-ding-sound", file: "/064511375-correct-answer-ding-4.mp3" }, { name: "sounds.Swoosh ding", value: "swoosh-ding-sound", file: "/065214573-swoosh-ui-success-ding-complet.mp3" }, { name: "sounds.Synth bell", value: "synth-bell-sound", file: "/095397584-synth-bell-announcement-01.mp3" }, { name: "sounds.Notification bell", value: "notification-bell-sound", file: "/146126341-bell-star-notification-04-slow.mp3" }, { name: "sounds.Mystery bell", value: "mystery-bell-sound", file: "/152715407-bell-mystery-08.mp3" }, { name: "sounds.Microwave ding", value: "microwave-ding-sound", file: "/041253901-microwave-oven-bell-ding-02.mp3" }, { name: "sounds.Applause", value: "applause-sound", file: "/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3" }, { name: "sounds.Fanfare", value: "fanfare-sound", file: "/350428__benjaminharveydesign__trumpet-fanfare.mp3" }, { name: "sounds.Bell ringing", value: "bell-sound", file: "/370743__podsburgh__winner-metal-bell-ringing-remix.mp3" }, { name: "sounds.Cymbals", value: "cymbal-sound", file: "/425432__trivialaccapella__18-crash-hit-soft.mp3" }, { name: "sounds.Thunder", value: "thunder", file: "/076042682-huge-thunder-7.mp3" }, { name: "sounds.Pan flute", value: "pan-flute", file: "/090393914-western-pan-flute.mp3" }, { name: "sounds.Evil laugh", value: "evil-laugh", file: "/137429128-evil-man-laugh-1.mp3" }, { name: "sounds.Old phone ringing", value: "old-phone-sound", file: "/274436__hockinfinger__stromberg-carlson-1543.mp3" }, { name: "sounds.Alarm clock", value: "alarm-clock-sound", file: "/468081__kinoton__egg-timer-ticking-ringing.mp3" }, { name: "sounds.Military trumpet", value: "military-trumpet-sound", file: "/008723787-bugle-military.mp3" }, { name: "sounds.Fireworks", value: "fireworks-sound", file: "/008747751-fireworks.mp3" }, { name: "sounds.Basketball buzzer", value: "basketball-buzzer-sound", file: "/012744931-basketball-court-buzzer.mp3" }, { name: "sounds.Hooray", value: "hooray-sound", file: "/079197409-voice-clip-crowd-hooray.mp3" }, { name: "sounds.Childrens hooray", value: "childrens-hooray-sound", file: "/010799171-children-loud-hooray.mp3" }, { name: "sounds.Xylophone ascending", value: "xylophone-ascending", file: "/000206355-xylophone-ascend.mp3" }, { name: "sounds.Game win ding", value: "game-win-ding", file: "/006143190-carnival-game-win-ding-05.mp3" }, { name: "sounds.Horse", value: "horse", file: "/008700295-horse.mp3" }, { name: "sounds.Wolf howl", value: "wolf-howl", file: "/008833564-wolf-howl-one-shot.mp3" }, { name: "sounds.Cartoon whistle", value: "cartoon-whistle", file: "/008902693-whistle-cartoon.mp3" }, { name: "sounds.Cat meow", value: "cat-meow", file: "/010706374-cat-meow-1.mp3" }, { name: "sounds.Sad trombone", value: "sad-trombone", file: "/012481405-cartoon-failure-3.mp3" }, { name: "sounds.Crash", value: "crash", file: "/021498952-crash-comical.mp3" }, { name: "sounds.Ghost", value: "ghost", file: "/026239577-burning-ghost-distant.mp3" }, { name: "sounds.Cinematic drum impact", value: "cinematic-drum-impact", file: "/032165978-cinematic-drum-impact.mp3" }, { name: "sounds.Water splash", value: "water-splash", file: "/039809461-water-splash-sfx-1.mp3" }, { name: "sounds.Referee whistle", value: "referee-whistle", file: "/041918725-referee-whistle.mp3" }, { name: "sounds.Dog bark", value: "dog-bark", file: "/042791251-big-dog-single-bark.mp3" }, { name: "sounds.Boing", value: "boing", file: "/043133601-cartoon-spring-boing-02.mp3" }, { name: "sounds.Boing 2", value: "boing-2", file: "/079311639-boing-cartoon-13.mp3" }, { name: "sounds.Angel choir", value: "angel-choir", file: "/053069047-voice-heaven-angel-sound-e-maj.mp3" }, { name: "sounds.Lion roar", value: "lion-roar", file: "/062570152-beast-lion-demon-roar-no-07.mp3" }, { name: "sounds.Lost game", value: "lost-game", file: "/066475397-funny-slippery-game-over-losin.mp3" }, { name: "sounds.Bird chirps", value: "bird-chirps", file: "/079311332-bird-chirp-cartoon-3.mp3" }, { name: "sounds.Taiko drum", value: "taiko-drum", file: "/083962303-short-taiko-drum-jingle.mp3" }, { name: "sounds.Horror scream", value: "horror-scream", file: "/127118749-horror-scream-08.mp3" }, { name: "sounds.Carnival shout", value: "carnival-shout", file: "/144838895-male-carnival-shout-1.mp3" }, { name: "sounds.Read out the winning name (option 1)", value: "read-winner-sound" }, { name: "sounds.Read out the winning name (option 2)", value: "read-winner-sound-2" }];

                function Ce() { return ke }

                function _e(e) { Ae("/Tick-DeepFrozenApps-397275646.mp3", e) }

                function xe(e, t, n, i) { return Fe.apply(this, arguments) }

                function Fe() {
                    return (Fe = ge(regeneratorRuntime.mark((function e(t, i, r, a) {
                        var o, s;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("read-winner-sound" != t && "read-winner-sound-2" != t) { e.next = 4; break }
                                    window.speechSynthesis && i && ((o = new SpeechSynthesisUtterance(i)).voice = Se(t, a), o.volume = r / 100, window.speechSynthesis.speak(o)), e.next = 8;
                                    break;
                                case 4:
                                    return e.next = 6, n.e(6900).then(n.t.bind(n, 41766, 23));
                                case 6:
                                    (s = ke.find((function(e) { return e.value == t })).file) && (be = new Howl({ src: [s], autoplay: !0, volume: r / 100 }));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Se(e, t) { var n = window.speechSynthesis.getVoices(); "en" == t && (t = "en-US"), "es" == t && (t = "es-ES"); var i = n.filter((function(e) { return e.lang.startsWith(t) })); return "read-winner-sound" == e || i.length < 2 ? i[0] : i[1] }

                function Ee() { be && be.fade(1, 0, 1), be = null }

                function De(e, t) { return Ie.apply(this, arguments) }

                function Ie() {
                    return (Ie = ge(regeneratorRuntime.mark((function e(t, i) {
                        var r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.e(6900).then(n.t.bind(n, 41766, 23));
                                case 2:
                                    "random-music" == t && (t = Ne()), t.startsWith("random:") && (t = je(t)), (r = Te(t)) && (ve = new Howl({ src: [r], autoplay: !0, loop: !0, volume: i / 100 }), we = i);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Re() { ve && ve.stop(), ve = null }

                function Ae(e, t) { return Pe.apply(this, arguments) }

                function Pe() {
                    return (Pe = ge(regeneratorRuntime.mark((function e(t, i) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.e(6900).then(n.t.bind(n, 41766, 23));
                                case 2:
                                    try { ye[t] ? (ye[t].volume(i / 100), ye[t].play()) : ye[t] = new Howl({ src: [t], autoplay: !0, volume: i / 100 }) } catch (e) { l.k5(e) }
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function $e(e) { return Oe.apply(this, arguments) }

                function Oe() {
                    return (Oe = ge(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.e(6900).then(n.t.bind(n, 41766, 23));
                                case 2:
                                    t && !ye[t] && (ye[t] = new Howl({ src: [t] }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Te(e) {
                    for (var t = 0, n = Object.keys(me); t < n.length; t++)
                        for (var i = n[t], r = 0, a = Object.keys(me[i]); r < a.length; r++) {
                            var o = a[r],
                                s = me[i][o];
                            if (s.value == e) return s.musicFile
                        }
                }

                function Ne() {
                    for (var e = [], t = 0, n = Object.keys(me); t < n.length; t++)
                        for (var i = n[t], r = 0, a = Object.keys(me[i]); r < a.length; r++) {
                            var o = a[r],
                                s = me[i][o];
                            s.musicFile && e.push(s.value)
                        }
                    return e[l.XF(0, e.length - 1)]
                }

                function je(e) {
                    for (var t = e.match(/random: (.*)/), n = t ? t[1] : "xxxxx", i = [], r = 0, a = Object.keys(me); r < a.length; r++) {
                        var o = a[r];
                        if (o.includes(n))
                            for (var s = 0, c = Object.keys(me[o]); s < c.length; s++) {
                                var u = c[s],
                                    h = me[o][u];
                                h.musicFile && i.push(h.value)
                            }
                    }
                    return i[l.XF(0, i.length - 1)]
                }

                function We(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function Be(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

                function Le(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }
                var Me = {
                        props: { entry: Object, i: Number },
                        data: function() { return { uploadedImage: {}, entryImageIndex: null, expanded: !1, afterSpinSounds: Ce() } },
                        watch: {
                            uploadedImage: function(e) {
                                l.L9("Wheel", "AttachImageToEntry");
                                var t = new FileReader,
                                    n = this;
                                t.onload = function() {
                                    var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                        var i;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, c.cM(t.target.result);
                                                case 2:
                                                    i = e.sent, n.$store.dispatch("attachImageToEntry", { imageData: i, index: n.entryImageIndex });
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })), function() {
                                        var t = this,
                                            n = arguments;
                                        return new Promise((function(i, r) {
                                            var a = e.apply(t, n);

                                            function o(e) { Le(a, i, r, o, s, "next", e) }

                                            function s(e) { Le(a, i, r, o, s, "throw", e) }
                                            o(void 0)
                                        }))
                                    });
                                    return function(e) { return t.apply(this, arguments) }
                                }(), t.readAsDataURL(e)
                            }
                        },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? We(Object(n), !0).forEach((function(t) { Be(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : We(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({
                            entries: function() { return this.wheelConfig.entries },
                            sound: { get: function() { return this.entry.sound || "" }, set: function(e) { l.L9("Wheel", "SetAdvancedEntrySound", e), this.$store.commit("setEntrySound", { index: this.i, sound: e }) } },
                            message: { get: function() { return this.entry.message || "" }, set: function(e) { this.$store.commit("setEntryMessage", { index: this.i, message: e }) } },
                            weight: { get: function() { return this.entry.weight }, set: function(e) { this.$store.commit("setEntryWeight", { index: this.i, weight: e }) } },
                            odds: function() {
                                if (!this.entry.enabled) return 0;
                                var e = this.entries;
                                if (!this.wheelConfig.allowDuplicates) {
                                    if (l.E(this.entries, this.entry)) return 0;
                                    e = l.MC(!1, this.entries)
                                }
                                var t = l.zq(e);
                                return +(100 * this.entry.weight / t).toFixed(1)
                            }
                        }, (0, o.Se)(["wheelConfig", "wheelIsBusy", "sheetLinked", "appInfoVisible"])),
                        methods: { focus: function() { this.$refs.textbox.focus() }, toggleExpanded: function() { this.expanded = !this.expanded, l.L9("Wheel", "ToggleAdvancedExpanded", this.expanded) }, updateEntryText: function(e, t) { this.$store.commit("setEntryText", { index: e, text: t }) }, updateEntryColor: function(e, t) { this.$store.commit("setEntryColor", { index: e, color: t }) }, updateEntryWeight: function(e, t) { this.$store.commit("setEntryWeight", { index: e, weight: t }) }, toggleEntryEnabled: function() { l.L9("Wheel", "ToggleEntryEnabled"), this.$store.commit("refreshEntries") }, removeEntry: function(e) { this.wheelIsBusy || (l.L9("Wheel", "RemoveAdvancedEntry"), this.$store.commit("removeEntryByIndex", e)) }, moveEntry: function(e, t) { this.wheelIsBusy || (l.L9("Wheel", "MoveAdvancedEntry", t), this.$store.commit("moveEntry", { index: e, direction: t })) }, duplicateEntry: function(e) { this.wheelIsBusy || (l.L9("Wheel", "DuplicateEntry"), this.$store.commit("duplicateEntry", e)) }, attachImageToEntry: function(e) { this.wheelIsBusy || (this.entryImageIndex = e) }, removeImageFromEntry: function(e) { this.wheelIsBusy || this.$store.commit("removeImageFromEntry", e) } }
                    },
                    Ve = Me,
                    ze = (n(31854), (0, A.Z)(Ve, fe, [], !1, null, "be941c86", null));

                function Ue(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function Ge(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

                function He(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }
                ze.options.__file = "static/advancedSlice.vue";
                var qe = {
                        components: { advancedSlice: ze.exports },
                        data: function() { return { uploadedImage: {}, entryImageIndex: null } },
                        watch: {
                            uploadedImage: function(e) {
                                l.L9("Wheel", "AttachImageToEntry");
                                var t = new FileReader,
                                    n = this;
                                t.onload = function() {
                                    var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                        var i;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, c.cM(t.target.result);
                                                case 2:
                                                    i = e.sent, n.$store.dispatch("attachImageToEntry", { imageData: i, index: n.entryImageIndex });
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })), function() {
                                        var t = this,
                                            n = arguments;
                                        return new Promise((function(i, r) {
                                            var a = e.apply(t, n);

                                            function o(e) { He(a, i, r, o, s, "next", e) }

                                            function s(e) { He(a, i, r, o, s, "throw", e) }
                                            o(void 0)
                                        }))
                                    });
                                    return function(e) { return t.apply(this, arguments) }
                                }(), t.readAsDataURL(e)
                            }
                        },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ue(Object(n), !0).forEach((function(t) { Ge(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ entries: function() { return this.wheelConfig.entries } }, (0, o.Se)(["wheelConfig", "wheelIsBusy", "sheetLinked", "appInfoVisible"])),
                        methods: {
                            addEntry: function() { l.L9("Wheel", "AddAdvancedEntry"), this.$store.commit("appendEntry", { text: "", color: "#CCCCCC", weight: 1, enabled: !0 }), this.focusLastEntry() },
                            focusLastEntry: function() {
                                var e = this;
                                setTimeout((function() { e.$refs["entry" + (e.entries.length - 1)][0].focus() }), 100)
                            }
                        }
                    },
                    Ze = qe,
                    Ke = (0, A.Z)(Ze, de, [], !1, null, null, null);
                Ke.options.__file = "static/advancedSliceEditor.vue";
                var Je = Ke.exports,
                    Ye = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "card can-go-dark", staticStyle: { "margin-top": "10px", "border-radius": "5px" } }, [n("div", { staticClass: "card-content", staticStyle: { padding: "10px" } }, [n("div", { staticClass: "content" }, [e.appInfoVisible ? n("div", [n("b-button", { staticStyle: { float: "right", "margin-top": "-1px", "border-radius": "7px" }, attrs: { type: "is-light", pack: "fas", "icon-left": "chevron-circle-down", size: "is-small" }, on: { click: e.toggleVisibility } }), e._v(" "), n("span", { staticStyle: { color: "#999" } }, [e._v("\n          " + e._s(e.$t("appInfo.Version")) + " " + e._s(e.version) + "\n          "), n("router-link", { attrs: { to: "/faq/changelog" } }, [e.userHasSeenCurrentVersion ? e._e() : n("b-tag", { attrs: { type: "is-light is-rounded", rounded: "" } }, [e._v("\n              New!\n            ")])], 1)], 1), e._v(" "), n("span", { staticStyle: { float: "right", "margin-right": "10px" } }, [n("router-link", { attrs: { to: "/faq/changelog" } }, [e._v("\n            Changelog\n          ")])], 1), e._v(" "), n("hr", { staticStyle: { "margin-top": "0.5em" } }), e._v(" "), n("b-carousel", { attrs: { interval: 15e3, arrow: !1, "pause-info": !1 }, model: { value: e.shownSlide, callback: function(t) { e.shownSlide = t }, expression: "shownSlide" } }, e._l(e.carousels, (function(t, i) { return n("b-carousel-item", { key: i, staticStyle: { height: "150px" } }, [n("section", { staticClass: "is-medium is-white" }, ["html" == t.type ? n("div", { staticClass: "has-text-centered" }, [n("span", { domProps: { innerHTML: e._s(t.html) } })]) : e._e(), e._v(" "), "poll" == t.type ? n("div", { staticClass: "has-text-centered" }, [e.votedInPoll ? n("div", [n("p", [e._v("\n                    " + e._s(t.voteMessage) + "\n                  ")])]) : n("div", [n("p", [e._v("\n                    " + e._s(t.pollPrompt) + "\n                  ")]), e._v(" "), e._l(t.pollOptions, (function(r, a) { return n("b-button", { key: a, attrs: { type: "is-primary", size: "is-small", outlined: "" }, on: { click: function(n) { return e.submitPollResponse(t.pollTitle, r, i) } } }, [e._v("\n                    " + e._s(r) + "\n                  ")]) }))], 2)]) : e._e()])]) })), 1)], 1) : n("div", [n("b-button", { staticStyle: { float: "right", "margin-top": "-1px", "border-radius": "7px" }, attrs: { type: "is-light", pack: "fas", "icon-left": "chevron-circle-up", size: "is-small" }, on: { click: e.toggleVisibility } }), e._v(" "), n("span", { staticStyle: { color: "#999" } }, [e._v("\n          " + e._s(e.$t("appInfo.Version")) + " " + e._s(e.version) + "\n          "), n("router-link", { attrs: { to: "/faq/changelog" } }, [e.userHasSeenCurrentVersion ? e._e() : n("b-tag", { attrs: { type: "is-light is-rounded", rounded: "" } }, [e._v("\n              New!\n            ")])], 1)], 1), e._v(" "), n("span", { staticStyle: { float: "right", "margin-right": "10px" } }, [n("router-link", { attrs: { to: "/faq/changelog" } }, [e._v("\n            Changelog\n          ")])], 1)], 1)])])])
                    };

                function Xe(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function Qe(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

                function et(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }
                Ye._withStripped = !0;
                var tt = {
                        mounted: function() {
                            var e, t = this;
                            return (e = regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, u.getCarousels();
                                        case 2:
                                            t.carousels = e.sent;
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(i, r) {
                                    var a = e.apply(t, n);

                                    function o(e) { et(a, i, r, o, s, "next", e) }

                                    function s(e) { et(a, i, r, o, s, "throw", e) }
                                    o(void 0)
                                }))
                            })()
                        },
                        data: function() { return { votedInPoll: !1, shownSlide: 0, carousels: [] } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Xe(Object(n), !0).forEach((function(t) { Qe(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xe(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({}, (0, o.Se)(["appInfoVisible", "version", "userHasSeenCurrentVersion"])),
                        methods: { toggleVisibility: function() { l.L9("Wheel", "ToggleAppInfoVisibility", ""), this.$store.commit("toggleAppInfoVisibility") }, submitPollResponse: function(e, t, n) { l.L9("Wheel", "".concat(e, "Poll"), "".concat(t)), this.votedInPoll = !0 } }
                    },
                    nt = tt,
                    it = (0, A.Z)(nt, Ye, [], !1, null, null, null);
                it.options.__file = "static/appInfo.vue";
                var rt = it.exports,
                    at = function() { var e = this.$createElement; return (this._self._c || e)("div", { staticClass: "textarea can-go-dark winner-textbox", attrs: { id: "winners", spellcheck: "false" } }) };

                function ot(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function st(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                at._withStripped = !0;
                var lt = {
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ot(Object(n), !0).forEach((function(t) { st(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({}, (0, o.Se)(["winners"])),
                        watch: { winners: function(e) { document.getElementById("winners").innerHTML = e.map((function(e) { return l.D7(e) })).join("") } }
                    },
                    ct = lt,
                    ut = (n(30253), (0, A.Z)(ct, at, [], !1, null, "a1953fe8", null));

                function ht(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function dt(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                ut.options.__file = "static/winnertextbox.vue";
                var ft = {
                        components: { counterTag: K, textboxbuttons: re, textbox: he, advancedsliceeditor: Je, appInfo: rt, winnertextbox: ut.exports },
                        data: function() { return { activeTab: 0 } },
                        watch: { activeTab: function(e) { l.L9("Wheel", "ChangeTab", e) } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ht(Object(n), !0).forEach((function(t) { dt(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ wheelIsAdvanced: function() { return this.wheelConfig.isAdvanced } }, (0, o.Se)(["wheelConfig"])),
                        methods: { clearWinners: function() { l.L9("Wheel", "ClearResults", ""), this.$store.commit("clearWinners") }, sortWinners: function() { l.L9("Wheel", "SortResults", ""), this.$store.commit("sortWinners") } }
                    },
                    mt = ft,
                    pt = (n(81842), (0, A.Z)(mt, H, [], !1, null, null, null));
                pt.options.__file = "static/nameTabs.vue";
                var gt = pt.exports,
                    vt = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("section", { staticClass: "section" }, [n("div", { staticClass: "columns" }, [n("div", { staticClass: "column" }, [n("whatIsItForCard"), e._v("\n       \n      "), n("sustainabilityCard")], 1), e._v(" "), n("div", { staticClass: "column" }, [n("howToUseCard"), e._v("\n       \n      "), n("statsCard")], 1), e._v(" "), n("div", { staticClass: "column" }, [n("isMyDataPrivateCard"), e._v("\n       \n      "), n("canTheWheelBeRiggedCard")], 1)])])
                    };
                vt._withStripped = !0;
                var wt = function() {
                    var e = this;
                    e.$createElement;
                    return e._self._c, e._m(0)
                };
                wt._withStripped = !0, n.p;
                var bt = (n(61499), (0, A.Z)({}, wt, [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "card" }, [n("div", { staticClass: "card-header" }, [n("div", { staticClass: "card-header-title" }, [n("img", { attrs: { src: "/images/favicon-32x32.png" } }), e._v("\n       \n      "), n("h4", { staticClass: "title is-4" }, [e._v("\n        How to use the wheel spinner\n      ")])])]), e._v(" "), n("div", { staticClass: "card-content" }, [n("div", { staticClass: "content" }, [n("p", [e._v("\n        It's easy: type in your entries in the textbox to the right of the\n        wheel, then click the wheel to spin it and get a random winner.\n        To make the wheel your own by customizing the colors, sounds, and spin\n        time, click\n        "), n("span", { staticClass: "tag is-info" }, [n("i", { staticClass: "fas fa-palette" }), e._v(" Customize")]), e._v("\n        at the top of the page.\n      ")]), e._v(" "), n("p", [n("a", { attrs: { href: "/user-reviews-and-tutorials" } }, [e._v("\n          Video reviews and tutorials by users.\n        ")])])])])])
                }], !1, null, "bd72abca", null));
                bt.options.__file = "static/cards/howToUseCard.vue";
                var yt = bt.exports,
                    kt = function() {
                        var e = this;
                        e.$createElement;
                        return e._self._c, e._m(0)
                    };
                kt._withStripped = !0;
                var Ct = (n(16851), (0, A.Z)({}, kt, [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "card" }, [n("div", { staticClass: "card-header" }, [n("div", { staticClass: "card-header-title" }, [n("img", { attrs: { src: "/images/favicon-32x32.png" } }), e._v("\n       \n      "), n("h4", { staticClass: "title is-4" }, [e._v("\n        Is my data private?\n      ")])])]), e._v(" "), n("div", { staticClass: "card-content" }, [n("div", { staticClass: "content" }, [n("p", [e._v("\n        We are committed to protecting and respecting your privacy and the \n        security of your data. We comply with GDPR, CCPA, SB 190, SB 1392, and\n        we closely monitor changes to them. We follow industry best practices\n        for data encryption and backups.\n      ")]), e._v(" "), n("p", [n("a", { attrs: { href: "/privacy-policy.html" } }, [e._v("How we safeguard your privacy")]), e._v(".\n      ")])])])])
                }], !1, null, "7fa06d54", null));
                Ct.options.__file = "static/cards/isMyDataPrivateCard.vue";
                var _t = Ct.exports,
                    xt = function() {
                        var e = this;
                        e.$createElement;
                        return e._self._c, e._m(0)
                    };
                xt._withStripped = !0;
                var Ft = (n(83612), (0, A.Z)({}, xt, [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "card" }, [n("div", { staticClass: "card-header" }, [n("div", { staticClass: "card-header-title" }, [n("img", { attrs: { src: "/images/favicon-32x32.png" } }), e._v("\n       \n      "), n("h4", { staticClass: "title is-4" }, [e._v("\n        What can I use this wheel spinner for?\n      ")])])]), e._v(" "), n("div", { staticClass: "card-content" }, [n("div", { staticClass: "content" }, [e._v("\n      Every day we hear from people who use our website in new ways:\n      "), n("ul", [n("li", [e._v("\n          Random name picker in the classroom: pick which student will answer\n          the next question. "), n("a", { attrs: { href: "/how-to-use-in-the-classroom" } }, [e._v("How to use\n          it in the classroom")]), e._v(".\n        ")]), e._v(" "), n("li", [e._v("\n          If you are a retailer, spin the wheel to pick which loyal customer\n          will get the monthly giveaway.\n        ")]), e._v(" "), n("li", [e._v("\n          When you give a presentation, use the wheel spinner to pick a lucky\n          winner among the attendees who turned in the survey.\n        ")]), e._v(" "), n("li", [e._v("\n          Random name picker at work: in your daily standup meeting at work,\n          randomize who speaks first.\n        ")]), e._v(" "), n("li", [e._v("\n          If you are overwhelmed by your to do items, put them on a wheel and\n          spin to find which one to start with.\n        ")]), e._v(" "), n("li", [e._v("\n          If you can't agree on what to have for dinner, put the alternatives\n          on the wheel and spin.\n        ")])])])])])
                }], !1, null, "7af32de1", null));
                Ft.options.__file = "static/cards/whatIsItForCard.vue";
                var St = Ft.exports,
                    Et = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "card" }, [e._m(0), e._v(" "), n("div", { staticClass: "card-content" }, [n("div", { staticClass: "content" }, [n("yearCounter", { attrs: { title: "Wheel spins", increment: e.spinsPerSecond, fps: .333333 } }), e._v(" "), n("br"), e._v(" "), n("yearCounter", { attrs: { title: "Hours of spinning", increment: e.hoursSpunPerSecond, fps: e.hoursSpunPerSecond } })], 1)])])
                    };
                Et._withStripped = !0;
                var Dt = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticStyle: { height: "4em" } }, [e._v("\n  " + e._s(e.title) + "\n  "), n("transition", { attrs: { name: "fade", mode: "in-out" } }, [e.displayFirstDiv ? n("p", { staticClass: "is-size-2", staticStyle: { position: "absolute" } }, [e._v("\n      " + e._s(e.formattedNumber) + "\n    ")]) : e._e()]), e._v(" "), n("transition", { attrs: { name: "fade", mode: "in-out" } }, [e.displayFirstDiv ? e._e() : n("p", { staticClass: "is-size-2", staticStyle: { position: "absolute" } }, [e._v("\n      " + e._s(e.formattedNumber) + "\n    ")])])], 1)
                };
                Dt._withStripped = !0;
                var It = {
                        props: { title: String, increment: Number, fps: Number },
                        data: function() { return { number: 0, formattedNumber: "", displayFirstDiv: !0 } },
                        mounted: function() { this.increaseNumber() },
                        methods: {
                            increaseNumber: function() {
                                var e = new Date((new Date).getFullYear(), 0, 1),
                                    t = new Date;
                                this.number = (t - e) / 1e3 * this.increment, this.formattedNumber = Math.round(this.number).toLocaleString(), this.displayFirstDiv = !this.displayFirstDiv, setTimeout(this.increaseNumber, 1e3 / this.fps)
                            }
                        }
                    },
                    Rt = (n(10793), (0, A.Z)(It, Dt, [], !1, null, "0c3e8d00", null));

                function At(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }
                Rt.options.__file = "static/cards/yearCounter.vue";
                var Pt = {
                        components: { yearCounter: Rt.exports },
                        data: function() { return { spinsPerSecond: 22.196, hoursSpunPerSecond: .061655 } },
                        mounted: function() {
                            var e, t = this;
                            return (e = regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, u.getSpinStats();
                                        case 2:
                                            (n = e.sent).spinsPerSecond && (t.spinsPerSecond = n.spinsPerSecond), n.hoursSpunPerSecond && (t.hoursSpunPerSecond = n.hoursSpunPerSecond);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(i, r) {
                                    var a = e.apply(t, n);

                                    function o(e) { At(a, i, r, o, s, "next", e) }

                                    function s(e) { At(a, i, r, o, s, "throw", e) }
                                    o(void 0)
                                }))
                            })()
                        }
                    },
                    $t = Pt,
                    Ot = (n(71227), (0, A.Z)($t, Et, [function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "card-header" }, [n("div", { staticClass: "card-header-title" }, [n("img", { attrs: { src: "/images/favicon-32x32.png" } }), e._v("\n       \n      "), n("h4", { staticClass: "title is-4" }, [e._v("\n        This year's numbers\n      ")])])])
                    }], !1, null, "d454e5e0", null));
                Ot.options.__file = "static/cards/statsCard.vue";
                var Tt = Ot.exports,
                    Nt = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "card" }, [e._m(0), e._v(" "), n("div", { staticClass: "card-content" }, [n("div", { staticClass: "content" }, [n("p", [e._v("\n        There is no functionality to determine which entry will win ahead of\n        time. When you click the wheel, it accelerates for exactly one second,\n        then it is set to a random rotation between 0 and 360 degrees, and\n        finally it decelerates to a stop. The setting of a random rotation is\n        not visible to the naked eye as it happens when the wheel is spinning\n        quite fast.\n      ")]), e._v(" "), n("p", [n("router-link", { attrs: { to: "/faq/randomness" } }, [e._v("Randomness of the wheel")]), e._v(".\n      ")], 1)])])])
                    };
                Nt._withStripped = !0;
                var jt = (n(56773), (0, A.Z)({}, Nt, [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "card-header" }, [n("div", { staticClass: "card-header-title" }, [n("img", { attrs: { src: "/images/favicon-32x32.png" } }), e._v("\n       \n      "), n("h4", { staticClass: "title is-4" }, [e._v("\n        Can the wheel be rigged?\n      ")])])])
                }], !1, null, "776652f8", null));
                jt.options.__file = "static/cards/canTheWheelBeRiggedCard.vue";
                var Wt = jt.exports,
                    Bt = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { staticClass: "card" }, [e._m(0), e._v(" "), n("div", { staticClass: "card-content" }, [n("div", { staticClass: "content" }, [n("p", [e._v("\n        We are proud to share that 100% of the electricity that powers our\n        servers is renewable, and 93% comes from carbon-free energy sources.\n      ")]), e._v(" "), n("p", [n("router-link", { attrs: { to: "/faq/sustainability" } }, [e._v("Sustainability")]), e._v(".\n      ")], 1)])])])
                    };
                Bt._withStripped = !0;
                var Lt = (n(78724), (0, A.Z)({}, Bt, [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "card-header" }, [n("div", { staticClass: "card-header-title" }, [n("img", { attrs: { src: "/images/favicon-32x32.png" } }), e._v("\n       \n      "), n("h4", { staticClass: "title is-4" }, [e._v("\n        Does Wheel of Names use renewable energy?\n      ")])])])
                }], !1, null, "303528e6", null));
                Lt.options.__file = "static/cards/sustainabilityCard.vue";
                var Mt = { components: { howToUseCard: yt, isMyDataPrivateCard: _t, whatIsItForCard: St, statsCard: Tt, canTheWheelBeRiggedCard: Wt, sustainabilityCard: Lt.exports } },
                    Vt = (0, A.Z)(Mt, vt, [], !1, null, null, null);
                Vt.options.__file = "static/cards/aboutCards.vue";
                var zt = Vt.exports,
                    Ut = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("b-modal", { attrs: { active: e.displayLoginDialog, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.displayLoginDialog = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-folder-open" }), e._v(" " + e._s(e.$t("opendialog.Open wheel")) + "\n        ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("p", [e._v("\n          " + e._s(e.$t("opendialog.To open wheels")) + "\n        ")]), e._v(" "), n("div", { attrs: { id: "auth-container" } })]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { on: { click: function(t) { return e.enter_inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Cancel")) + "\n        ")])], 1)])]), e._v(" "), n("b-modal", { attrs: { active: e.displayWheelDialog, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.displayWheelDialog = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-folder-open" }), e._v(" " + e._s(e.$t("opendialog.Open wheel")) + "\n        ")]), e._v(" "), n("profiledropdown", { on: { "log-out": function(t) { return e.enter_inactive() }, "start-wait-animation": function(t) { return e.$emit("start-wait-animation") }, "stop-wait-animation": function(t) { return e.$emit("stop-wait-animation") }, "show-snackbar-message": function(t) { return e.$emit("show-snackbar-message", t) } } })], 1), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("table", { staticClass: "table can-go-dark" }, [e._l(e.savedWheels, (function(t) { return n("tr", { key: t.title }, [n("td", [e._v(e._s(t.title))]), e._v(" "), n("td", [n("b-button", { attrs: { type: "is-light" }, on: { click: function(n) { return e.enter_openingWheel(t.title) } } }, [n("i", { staticClass: "far fa-folder-open" }), e._v(" " + e._s(e.$t("common.Open")) + "\n              ")])], 1), e._v(" "), e.online ? n("td", [n("b-button", { attrs: { type: "is-light" }, on: { click: function(n) { return e.enter_confirmingDelete(t.title) } } }, [n("i", { staticClass: "far fa-trash-alt" }), e._v(" " + e._s(e.$t("common.Delete")) + "\n              ")])], 1) : e._e()]) })), e._v(" "), e.noSavedWheels ? n("tr", [n("td", [e._v("\n              " + e._s(e.$t("opendialog.No wheels found")) + "\n            ")])]) : e._e()], 2)]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.enter_inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Close")) + "\n        ")])], 1)])])], 1)
                    };
                Ut._withStripped = !0;
                var Gt = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("b-dropdown", { attrs: { position: "is-bottom-left", "aria-role": "list" } }, [n("span", { staticClass: "button", staticStyle: { cursor: "pointer" }, attrs: { slot: "trigger", role: "button" }, slot: "trigger" }, [n("img", { staticStyle: { height: "30px", "border-radius": "50%" }, attrs: { src: e.$store.getters.userPhotoUrl } }), e._v("\n     \n    "), n("i", { staticClass: "fas fa-caret-down" })]), e._v(" "), n("b-dropdown-item", { attrs: { disabled: "", "aria-role": "listitem" } }, [e._v("\n    " + e._s(e.$t("profiledropdown.Signed in as", { name: e.$store.getters.userDisplayName })) + "\n  ")]), e._v(" "), n("b-dropdown-item", { attrs: { "aria-role": "listitem" }, on: { click: function(t) { return e.logOut() } } }, [e._v("\n    " + e._s(e.$t("profiledropdown.Sign out")) + "\n  ")]), e._v(" "), n("b-dropdown-item", { attrs: { "aria-role": "listitem" }, on: { click: function(t) { return e.$router.push("/export") } } }, [e._v("\n    " + e._s(e.$t("profiledropdown.Export my data")) + "\n  ")]), e._v(" "), n("b-dropdown-item", { attrs: { "aria-role": "listitem" }, on: { click: function(t) { return e.confirmAndDelete() } } }, [e._v("\n    " + e._s(e.$t("profiledropdown.Delete my account")) + "\n  ")])], 1)
                };

                function Ht(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }
                Gt._withStripped = !0;
                var qt = {
                        methods: {
                            logOut: function() { this.$store.dispatch("logOut"), this.$emit("log-out") },
                            confirmAndDelete: function() {
                                var e = this;
                                this.$buefy.dialog.confirm({ title: this.$t("profiledropdown.Delete account"), message: this.$t("profiledropdown.Are you sure you want to delete your account"), cancelText: this.$t("common.Cancel"), confirmText: this.$t("common.Delete"), type: "is-danger", hasIcon: !0, onConfirm: function() { return e.deleteAccount() } })
                            },
                            deleteAccount: function() {
                                var e, t = this;
                                return (e = regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t.$emit("start-wait-animation"), e.next = 3, t.$store.dispatch("deleteAccount");
                                            case 3:
                                                t.$store.dispatch("resetWheel"), n = t.$t("profiledropdown.Your account and your saved wheels have been deleted"), t.$emit("show-snackbar-message", n), t.$emit("stop-wait-animation"), t.$emit("log-out");
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })), function() {
                                    var t = this,
                                        n = arguments;
                                    return new Promise((function(i, r) {
                                        var a = e.apply(t, n);

                                        function o(e) { Ht(a, i, r, o, s, "next", e) }

                                        function s(e) { Ht(a, i, r, o, s, "throw", e) }
                                        o(void 0)
                                    }))
                                })()
                            }
                        }
                    },
                    Zt = qt,
                    Kt = (0, A.Z)(Zt, Gt, [], !1, null, null, null);
                Kt.options.__file = "static/profiledropdown.vue";
                var Jt = Kt.exports;

                function Yt(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function Xt(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { Yt(a, i, r, o, s, "next", e) }

                            function s(e) { Yt(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }

                function Qt(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function en(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                var tn = {
                        components: { profiledropdown: Jt },
                        data: function() { return { fsm: "inactive" } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Qt(Object(n), !0).forEach((function(t) { en(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ noSavedWheels: function() { return 0 == this.savedWheels.length }, displayLoginDialog: { get: function() { return "userIsPickingLoginMethod" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "inactive") } }, displayWheelDialog: { get: function() { return ["userIsPickingWheel", "confirmingDelete", "deletingWheel"].includes(this.fsm) }, set: function(e) { 0 == e && (this.fsm = "inactive") } } }, (0, o.Se)(["savedWheels", "online"])),
                        methods: {
                            show: function() {
                                var e = this;
                                return Xt(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e.enter_loadingLibraries();
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_loadingLibraries: function() {
                                var e = this;
                                return Xt(regeneratorRuntime.mark((function t() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.fsm = "loadingLibraries", e.$emit("start-wait-animation"), t.prev = 2, t.next = 5, e.$store.dispatch("userIsLoggedIn");
                                            case 5:
                                                n = t.sent, t.next = 11;
                                                break;
                                            case 8:
                                                t.prev = 8, t.t0 = t.catch(2), e.enter_authError(t.t0);
                                            case 11:
                                                return t.prev = 11, e.$emit("stop-wait-animation"), t.finish(11);
                                            case 14:
                                                n ? e.enter_loadingWheels() : e.enter_userIsPickingLoginMethod();
                                            case 15:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [2, 8, 11, 14]
                                    ])
                                })))()
                            },
                            enter_inactive: function() { this.fsm = "inactive" },
                            enter_userIsPickingLoginMethod: function() {
                                this.fsm = "userIsPickingLoginMethod", this.$nextTick(Xt(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, l.Gb(), l.L9("Wheel", "LoginForOpenAttempt", ""), e.next = 5, this.$store.dispatch("loginWithUi", "auth-container");
                                            case 5:
                                                l.L9("Wheel", "LoginForOpenSuccess", ""), this.enter_loadingWheels(), e.next = 13;
                                                break;
                                            case 9:
                                                e.prev = 9, e.t0 = e.catch(0), l.L9("Wheel", "LoginForOpenFailure", e.t0.toString()), this.enter_authError(e.t0);
                                            case 13:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [0, 9]
                                    ])
                                }))))
                            },
                            enter_userIsPickingWheel: function() { this.fsm = "userIsPickingWheel" },
                            enter_loadingWheels: function() {
                                var e = this;
                                return Xt(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.fsm = "loadingWheels", e.$emit("start-wait-animation"), t.prev = 2, t.next = 5, e.$store.dispatch("loadSavedWheels");
                                            case 5:
                                                t.next = 10;
                                                break;
                                            case 7:
                                                t.prev = 7, t.t0 = t.catch(2), e.enter_authError(t.t0);
                                            case 10:
                                                return t.prev = 10, e.$emit("stop-wait-animation"), t.finish(10);
                                            case 13:
                                                e.enter_userIsPickingWheel();
                                            case 14:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [2, 7, 10, 13]
                                    ])
                                })))()
                            },
                            enter_openingWheel: function(e) {
                                this.fsm = "openingWheel";
                                var t = this.savedWheels.find((function(t) { return t.title == e }));
                                this.$store.dispatch("logWheelRead", e), this.$store.commit("setWheelConfig", t), this.$store.commit("clearWinners"), this.$emit("reset-wheel-rotation"), this.$emit("reset-address-bar"), this.enter_inactive()
                            },
                            enter_confirmingDelete: function(e) {
                                var t = this;
                                this.fsm = "confirmingDelete", this.$buefy.dialog.confirm({ title: this.$t("opendialog.Delete wheel"), message: this.$t("opendialog.Are you sure", { wheelTitle: l.Xv(e) }), cancelText: this.$t("common.Cancel"), confirmText: this.$t("common.Delete"), type: "is-danger", hasIcon: !0, onConfirm: function() { return t.enter_deletingWheel(e) }, onCancel: function() { return t.enter_userIsPickingWheel() } })
                            },
                            enter_authError: function(e) { this.fsm = "authError", this.$store.dispatch("logOut"), this.$emit("auth-error", e), this.enter_inactive() },
                            enter_deletingWheel: function(e) {
                                var t = this;
                                return Xt(regeneratorRuntime.mark((function n() {
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return t.fsm = "deletingWheel", n.prev = 1, t.$emit("start-wait-animation"), n.next = 5, t.$store.dispatch("deleteSavedWheel", e);
                                            case 5:
                                                return n.next = 7, t.$store.dispatch("loadSavedWheels");
                                            case 7:
                                                t.$emit("stop-wait-animation"), t.enter_userIsPickingWheel(), n.next = 16;
                                                break;
                                            case 11:
                                                n.prev = 11, n.t0 = n.catch(1), l.k5(n.t0), t.$emit("stop-wait-animation"), t.enter_authError(n.t0);
                                            case 16:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 11]
                                    ])
                                })))()
                            }
                        }
                    },
                    nn = tn,
                    rn = (0, A.Z)(nn, Ut, [], !1, null, null, null);
                rn.options.__file = "static/opendialog.vue";
                var an = rn.exports,
                    on = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("b-modal", { attrs: { active: e.displayLoginDialog, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.displayLoginDialog = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-save" }), e._v(" " + e._s(e.$t("savedialog.Save wheel")) + "\n        ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("p", [e._v("\n          " + e._s(e.$t("savedialog.To save wheels")) + "\n        ")]), e._v(" "), n("div", { attrs: { id: "auth-container" } })]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { on: { click: function(t) { return e.enter_inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Cancel")) + "\n        ")])], 1)])]), e._v(" "), n("b-modal", { attrs: { active: e.displaySaveDialog, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.displaySaveDialog = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-save" }), e._v(" " + e._s(e.$t("savedialog.Save wheel")) + "\n        ")]), e._v(" "), n("profiledropdown", { on: { "log-out": function(t) { return e.enter_inactive() }, "start-wait-animation": function(t) { return e.$emit("start-wait-animation") }, "stop-wait-animation": function(t) { return e.$emit("stop-wait-animation") }, "show-snackbar-message": function(t) { return e.$emit("show-snackbar-message", t) } } })], 1), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("div", { staticClass: "columns" }, [n("div", { staticClass: "column is-one-third" }, [e._v("\n            " + e._s(e.$t("savedialog.Save as")) + "\n          ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-input", { ref: "saveAsField", attrs: { required: "", maxlength: "50" }, nativeOn: { keyup: function(t) { return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enter_savingWheel(t) } }, model: { value: e.saveAsName, callback: function(t) { e.saveAsName = t }, expression: "saveAsName" } })], 1)]), e._v(" "), n("div", { staticClass: "columns" }, [n("div", { staticClass: "column is-one-third" }, [e._v("\n            " + e._s(e.$t("savedialog.Your existing wheels")) + "\n          ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-select", { attrs: { placeholder: e.$t("savedialog.Select a wheel"), expanded: "" }, model: { value: e.existingWheelTitle, callback: function(t) { e.existingWheelTitle = t }, expression: "existingWheelTitle" } }, e._l(e.savedWheels, (function(t) { return n("option", { key: t.title, domProps: { value: t.title } }, [e._v("\n                " + e._s(t.title) + "\n              ")]) })), 0)], 1)]), e._v(" "), n("p", [e._v(e._s(e.$t("savedialog.You will always be able to access")))])]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.enter_inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Cancel")) + "\n        ")]), e._v(" "), n("b-button", { attrs: { size: "is-medium", type: "is-primary", disabled: !e.saveAsNameIsValid }, on: { click: function(t) { return e.enter_savingWheel() } } }, [e._v("\n          " + e._s(e.$t("common.Save")) + "\n        ")])], 1)])])], 1)
                    };

                function sn(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function ln(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { sn(a, i, r, o, s, "next", e) }

                            function s(e) { sn(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }

                function cn(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function un(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                on._withStripped = !0;
                var hn = {
                        components: { profiledropdown: Jt },
                        data: function() { return { fsm: "inactive", saveAsName: "", existingWheelTitle: null } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? cn(Object(n), !0).forEach((function(t) { un(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ saveAsNameIsValid: function() { return this.saveAsName.length > 0 }, displayLoginDialog: { get: function() { return "userIsPickingLoginMethod" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "inactive") } }, displaySaveDialog: { get: function() { return "userIsEnteringName" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "inactive") } } }, (0, o.Se)(["savedWheels", "wheelConfig", "wheelTitle"])),
                        watch: { existingWheelTitle: function(e, t) { this.saveAsName = e || "" } },
                        methods: {
                            show: function() {
                                var e = this;
                                return ln(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!e.wheelConfig.isTooBigForDatabase()) { t.next = 4; break }
                                                return l.L9("Wheel", "WheelTooBigForDatabase", ""), alert(e.$t("savedialog.Sorry, too many images")), t.abrupt("return");
                                            case 4:
                                                e.saveAsName = e.wheelTitle, e.enter_loadingLibraries();
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_loadingLibraries: function() {
                                var e = this;
                                return ln(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.fsm = "loadingLibraries", t.prev = 1, e.$emit("start-wait-animation"), t.next = 5, e.$store.dispatch("userIsLoggedIn");
                                            case 5:
                                                t.sent ? e.enter_loadingWheels() : e.enter_userIsPickingLoginMethod(), t.next = 12;
                                                break;
                                            case 9:
                                                t.prev = 9, t.t0 = t.catch(1), e.enter_authError(t.t0);
                                            case 12:
                                                return t.prev = 12, e.$emit("stop-wait-animation"), t.finish(12);
                                            case 15:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 9, 12, 15]
                                    ])
                                })))()
                            },
                            enter_inactive: function() { this.fsm = "inactive" },
                            enter_userIsPickingLoginMethod: function() {
                                var e = this;
                                return ln(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e.fsm = "userIsPickingLoginMethod", e.$nextTick(ln(regeneratorRuntime.mark((function e() {
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.prev = 0, l.Gb(), l.L9("Wheel", "LoginForSaveAttempt", ""), e.next = 5, this.$store.dispatch("loginWithUi", "auth-container");
                                                            case 5:
                                                                l.L9("Wheel", "LoginForSaveSuccess", ""), this.enter_loadingWheels(), e.next = 13;
                                                                break;
                                                            case 9:
                                                                e.prev = 9, e.t0 = e.catch(0), l.L9("Wheel", "LoginForSaveFailure", e.t0.toString()), this.enter_authError(e.t0);
                                                            case 13:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, this, [
                                                        [0, 9]
                                                    ])
                                                }))));
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_loadingWheels: function() {
                                var e = this;
                                return ln(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e.fsm = "loadingWheels", e.$store.dispatch("loadSavedWheels"), e.existingWheelTitle = null, e.saveAsName = e.wheelConfig.title || "My wheel", setTimeout((function() { e.$refs.saveAsField.focus() }), 100), e.enter_userIsEnteringName();
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_userIsEnteringName: function() { this.fsm = "userIsEnteringName" },
                            enter_savingWheel: function() {
                                var e = this;
                                return ln(regeneratorRuntime.mark((function t() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.fsm = "savingWheel", e.$store.commit("setWheelTitle", e.saveAsName), t.prev = 2, e.$emit("start-wait-animation"), t.next = 6, e.$store.dispatch("saveWheel", e.wheelConfig);
                                            case 6:
                                                e.$emit("stop-wait-animation"), n = e.$t("savedialog.Wheel saved successfully", { wheelTitle: l.Gq(e.saveAsName) }), e.$emit("show-snackbar-message", n), e.$emit("reset-address-bar"), e.enter_inactive(), t.next = 18;
                                                break;
                                            case 13:
                                                t.prev = 13, t.t0 = t.catch(2), e.$emit("stop-wait-animation"), l.k5(t.t0), e.enter_authError(t.t0);
                                            case 18:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [2, 13]
                                    ])
                                })))()
                            },
                            enter_authError: function(e) { this.fsm = "authError", this.$store.dispatch("logOut"), this.$emit("auth-error", e), this.enter_inactive() }
                        }
                    },
                    dn = hn,
                    fn = (0, A.Z)(dn, on, [], !1, null, null, null);
                fn.options.__file = "static/savedialog.vue";
                var mn = fn.exports,
                    pn = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("b-modal", { attrs: { active: e.optionsDialogVisible, width: 640, scroll: "keep", "full-screen": "mobile" == e.$mq }, on: { "update:active": function(t) { e.optionsDialogVisible = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("section", { staticClass: "modal-card-body can-go-dark" }, [n("b-tabs", { attrs: { type: "is-boxed", size: "is-small" }, model: { value: e.activeTab, callback: function(t) { e.activeTab = t }, expression: "activeTab" } }, [n("b-tab-item", { attrs: { label: e.$t("optionsdialog.During spin") } }, [n("br"), e._v(" "), n("duringSpinSoundPicker", { attrs: { duringSpinSound: e.wheelConfig.duringSpinSound, duringSpinSoundVolume: e.wheelConfig.duringSpinSoundVolume }, on: { "set-during-spin-sound": e.setDuringSpinSound, "set-during-spin-sound-volume": e.setDuringSpinSoundVolume } }), e._v(" "), n("hr"), e._v(" "), n("b-checkbox", { model: { value: e.wheelConfig.allowDuplicates, callback: function(t) { e.$set(e.wheelConfig, "allowDuplicates", t) }, expression: "wheelConfig.allowDuplicates" } }, [e._v("\n            " + e._s(e.$t("optionsdialog.Display duplicates")) + "\n            "), n("tooltip", { attrs: { title: e.$t("optionsdialog.Display every entry") } })], 1), e._v(" "), n("b-checkbox", { staticStyle: { "margin-left": "10px" }, model: { value: e.wheelConfig.slowSpin, callback: function(t) { e.$set(e.wheelConfig, "slowSpin", t) }, expression: "wheelConfig.slowSpin" } }, [e._v("\n            " + e._s(e.$t("optionsdialog.Spin slowly")) + "\n          ")]), e._v(" "), n("b-checkbox", { staticStyle: { "margin-left": "10px" }, model: { value: e.wheelConfig.showTitle, callback: function(t) { e.$set(e.wheelConfig, "showTitle", t) }, expression: "wheelConfig.showTitle" } }, [e._v("\n            " + e._s(e.$t("optionsdialog.Show title")) + "\n          ")]), e._v(" "), n("hr"), e._v("\n          " + e._s(e.$t("optionsdialog.Spin time (seconds)")) + "\n          "), n("b-slider", { attrs: { min: 1, max: 60 }, model: { value: e.wheelConfig.spinTime, callback: function(t) { e.$set(e.wheelConfig, "spinTime", t) }, expression: "wheelConfig.spinTime" } }, [e._l([10, 20, 30, 40, 50, 60], (function(t) { return [n("b-slider-tick", { key: t, attrs: { value: t } }, [e._v(e._s(t))])] }))], 2), e._v(" "), n("hr"), e._v(" "), n("b", [e._v(e._s(e.$t("optionsdialog.Max names on wheel")))]), e._v(" "), e.entriesHaveUnequalWeight ? n("tooltip", { attrs: { title: e.$t("optionsdialog.Disabled because the entries") } }) : e._e(), e._v(" "), n("br"), e._v(" "), n("small", [e._v("\n            " + e._s(e.$t("optionsdialog.All names in the text-box")) + "\n          ")]), e._v(" "), n("b-slider", { attrs: { min: 4, max: 1e3, disabled: e.entriesHaveUnequalWeight }, model: { value: e.wheelConfig.maxNames, callback: function(t) { e.$set(e.wheelConfig, "maxNames", t) }, expression: "wheelConfig.maxNames" } }, [e._l([100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3], (function(t) { return [n("b-slider-tick", { key: t, attrs: { value: t } }, [e._v(e._s(t))])] }))], 2)], 1), e._v(" "), n("b-tab-item", { attrs: { label: e.$t("optionsdialog.After spin") } }, [n("br"), e._v(" "), n("afterSpinSoundPicker", { attrs: { afterSpinSound: e.wheelConfig.afterSpinSound, afterSpinSoundVolume: e.wheelConfig.afterSpinSoundVolume, firstTextOnWheel: e.firstTextOnWheel }, on: { "set-after-spin-sound": e.setAfterSpinSound, "set-after-spin-sound-volume": e.setAfterSpinSoundVolume } }), e._v(" "), n("hr"), e._v(" "), n("b-checkbox", { model: { value: e.wheelConfig.animateWinner, callback: function(t) { e.$set(e.wheelConfig, "animateWinner", t) }, expression: "wheelConfig.animateWinner" } }, [e._v("\n            " + e._s(e.$t("optionsdialog.Animate winning entry")) + "\n          ")]), e._v(" "), n("br"), n("br"), e._v(" "), n("b-checkbox", { model: { value: e.wheelConfig.launchConfetti, callback: function(t) { e.$set(e.wheelConfig, "launchConfetti", t) }, expression: "wheelConfig.launchConfetti" } }, [e._v("\n            " + e._s(e.$t("optionsdialog.Launch confetti")) + "\n          ")]), e._v(" "), n("br"), n("br"), e._v(" "), n("b-checkbox", { model: { value: e.wheelConfig.autoRemoveWinner, callback: function(t) { e.$set(e.wheelConfig, "autoRemoveWinner", t) }, expression: "wheelConfig.autoRemoveWinner" } }, [e._v("\n            " + e._s(e.$t("optionsdialog.Auto-remove winner after 5 seconds")) + "\n          ")]), e._v(" "), n("br"), n("br"), e._v(" "), n("div", { staticClass: "columns", staticStyle: { "margin-bottom": "0" } }, [n("div", { staticClass: "column is-narrow-desktop" }, [n("b-checkbox", { model: { value: e.wheelConfig.displayWinnerDialog, callback: function(t) { e.$set(e.wheelConfig, "displayWinnerDialog", t) }, expression: "wheelConfig.displayWinnerDialog" } }, [e._v("\n                " + e._s(e.$t("optionsdialog.Display popup with message:")) + "\n              ")])], 1), e._v(" "), n("div", { staticClass: "column", staticStyle: { padding: "0", "margin-top": "5px" } }, [n("b-input", { attrs: { disabled: !e.wheelConfig.displayWinnerDialog, maxlength: "100" }, model: { value: e.wheelConfig.winnerMessage, callback: function(t) { e.$set(e.wheelConfig, "winnerMessage", t) }, expression: "wheelConfig.winnerMessage" } })], 1)]), e._v(" "), n("div", { staticStyle: { "margin-top": "-12px", "margin-bottom": "12px" } }, [n("b-checkbox", { staticStyle: { "margin-left": "25px" }, attrs: { disabled: !e.wheelConfig.displayWinnerDialog }, model: { value: e.wheelConfig.displayRemoveButton, callback: function(t) { e.$set(e.wheelConfig, "displayRemoveButton", t) }, expression: "wheelConfig.displayRemoveButton" } }, [e._v("\n              " + e._s(e.$t("optionsdialog.Display Remove button")) + "\n            ")]), e._v(" "), n("br"), e._v(" "), e.wheelConfig.isAdvanced ? n("b-checkbox", { staticStyle: { "margin-left": "25px" }, attrs: { disabled: !e.wheelConfig.displayWinnerDialog }, model: { value: e.wheelConfig.displayHideButton, callback: function(t) { e.$set(e.wheelConfig, "displayHideButton", t) }, expression: "wheelConfig.displayHideButton" } }, [e._v("\n              " + e._s(e.$t("optionsdialog.Display Hide button")) + "\n            ")]) : e._e()], 1), e._v(" "), n("b-checkbox", { model: { value: e.wheelConfig.playClickWhenWinnerRemoved, callback: function(t) { e.$set(e.wheelConfig, "playClickWhenWinnerRemoved", t) }, expression: "wheelConfig.playClickWhenWinnerRemoved" } }, [e._v("\n            " + e._s(e.$t("optionsdialog.Play click sound when the winner is removed")) + "\n          ")])], 1), e._v(" "), n("b-tab-item", { staticStyle: { height: "500px" }, attrs: { label: e.$t("optionsdialog.Appearance") } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: !e.browserIsIE, expression: "!browserIsIE" }], staticClass: "columns is-mobile is-vcentered" }, [n("div", { staticClass: "column has-text-right" }, [e._v("\n              " + e._s(e.$t("optionsdialog.One color")) + "\n            ")]), e._v(" "), n("div", { staticClass: "column is-narrow" }, [n("img", { staticClass: "wheel-type-image", attrs: { src: "/images/color-wheel.png" } })]), e._v(" "), n("div", { staticClass: "column is-narrow" }, [n("b-switch", { attrs: { "passive-type": "is-primary", type: "is-primary" }, model: { value: e.isImageWheel, callback: function(t) { e.isImageWheel = t }, expression: "isImageWheel" } })], 1), e._v(" "), n("div", { staticClass: "column is-narrow", staticStyle: { "margin-left": "-20px" } }, [n("img", { staticClass: "wheel-type-image", attrs: { src: "/images/chocolate-chip-cookie.jpg" } })]), e._v(" "), n("div", { staticClass: "column" }, [e._v("\n              " + e._s(e.$t("optionsdialog.Wheel background image")) + "\n            ")])]), e._v(" "), n("hr"), e._v(" "), n("div", { directives: [{ name: "show", rawName: "v-show", value: "color" == e.wheelConfig.type, expression: "wheelConfig.type=='color'" }] }, [n("div", { staticClass: "columns", staticStyle: { "margin-bottom": "10px" } }, [n("div", { staticClass: "column" }, [n("colorThemeSelector", { directives: [{ name: "show", rawName: "v-show", value: !e.browserIsIE, expression: "!browserIsIE" }], attrs: { disabled: e.wheelConfig.isAdvanced }, on: { "set-color-theme": e.setColorTheme } })], 1)]), e._v(" "), n("div", { staticClass: "columns", staticStyle: { "margin-bottom": "0px" } }, [n("div", { staticClass: "column is-one-third" }, [e._v("\n                " + e._s(e.$t("optionsdialog.Customize colors")) + " \n                "), n("tooltip", { attrs: { title: e.$t("optionsdialog.Colors tooltip") } })], 1), e._v(" "), n("div", { staticClass: "column" }, [n("div", { staticClass: "color-grid" }, e._l(e.wheelConfig.colorSettings, (function(t, i) { return n("div", { key: i }, [n("b-checkbox", { attrs: { disabled: e.wheelConfig.isAdvanced }, model: { value: t.enabled, callback: function(n) { e.$set(t, "enabled", n) }, expression: "setting.enabled" } }), e._v(" "), n("input", { directives: [{ name: "show", rawName: "v-show", value: t.enabled, expression: "setting.enabled" }, { name: "model", rawName: "v-model", value: t.color, expression: "setting.color" }], attrs: { type: "color", disabled: e.wheelConfig.isAdvanced }, domProps: { value: t.color }, on: { input: function(n) { n.target.composing || e.$set(t, "color", n.target.value) } } })], 1) })), 0)])]), e._v(" "), n("hr"), e._v(" "), n("wheelCenterImagePicker", { directives: [{ name: "show", rawName: "v-show", value: !e.browserIsIE, expression: "!browserIsIE" }], attrs: { imageSrc: e.centerImageSrc, pictureType: e.wheelConfig.pictureType, galleryPicture: e.wheelConfig.galleryPicture, customPictureName: e.wheelConfig.customPictureName, centerText: e.wheelConfig.centerText, isAdvanced: e.wheelConfig.isAdvanced }, on: { "set-center-no-image": e.setCenterNoImage, "set-center-gallery-image": e.setCenterGalleryImage, "set-center-text": e.setCenterText, "set-center-uploaded-image": e.setCenterUploadedImage, "set-color-values": e.setColorValues } }), e._v(" "), n("div", { staticClass: "columns is-mobile is-vcentered" }, [n("div", { staticClass: "column is-narrow" }, [e._v("\n                " + e._s(e.$t("optionsdialog.Image size")) + "\n              ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-select", { model: { value: e.wheelConfig.hubSize, callback: function(t) { e.$set(e.wheelConfig, "hubSize", t) }, expression: "wheelConfig.hubSize" } }, e._l(e.hubSizes, (function(t) { return n("option", { key: t, domProps: { value: t } }, [e._v("\n                    " + e._s(t) + "\n                  ")]) })), 0)], 1)])], 1), e._v(" "), n("div", { directives: [{ name: "show", rawName: "v-show", value: "image" == e.wheelConfig.type, expression: "wheelConfig.type=='image'" }] }, [n("wheelBackgroundImagePicker", { directives: [{ name: "show", rawName: "v-show", value: !e.browserIsIE, expression: "!browserIsIE" }], attrs: { imageSrc: e.backgroundImageSrc }, on: { "set-background-gallery-image": e.setBackgroundGalleryImage, "set-background-uploaded-image": e.setBackgroundUploadedImage } })], 1), e._v(" "), n("hr"), e._v(" "), n("div", { staticClass: "columns is-mobile is-vcentered" }, [n("div", { staticClass: "column" }, [e._v("\n              " + e._s(e.$t("optionsdialog.Background color")) + "\n            ")]), e._v(" "), n("div", { staticClass: "column" }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.wheelConfig.pageBackgroundColor, expression: "wheelConfig.pageBackgroundColor" }], attrs: { type: "color" }, domProps: { value: e.wheelConfig.pageBackgroundColor }, on: { input: function(t) { t.target.composing || e.$set(e.wheelConfig, "pageBackgroundColor", t.target.value) } } })]), e._v(" "), n("div", { staticClass: "column" }, [n("b-checkbox", { model: { value: e.wheelConfig.drawOutlines, callback: function(t) { e.$set(e.wheelConfig, "drawOutlines", t) }, expression: "wheelConfig.drawOutlines" } }, [e._v("\n                " + e._s(e.$t("optionsdialog.Contours")) + "\n              ")])], 1)])])], 1)], 1), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.close() } } }, [e._v("\n        " + e._s(e.$t("common.Cancel")) + "\n      ")]), e._v(" "), n("b-button", { attrs: { size: "is-medium", type: "is-primary" }, on: { click: e.saveOptions } }, [e._v("\n        " + e._s(e.$t("common.OK")) + "\n      ")])], 1)])])
                    };
                pn._withStripped = !0;
                var gn = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", [n("div", { staticClass: "columns is-mobile is-vcentered" }, [n("div", { staticClass: "column is-2" }, [e._v("\n      " + e._s(e.$t("optionsdialog.Sound")) + "\n    ")]), e._v(" "), n("div", { staticClass: "column is-half is-half-mobile" }, [n("b-select", { model: { value: e.myDuringSpinSound, callback: function(t) { e.myDuringSpinSound = t }, expression: "myDuringSpinSound" } }, [e._l(Object.keys(e.duringSpinSounds), (function(t) { return [n("optgroup", { attrs: { label: e.translateIfNeeded(t) } }, [e._l(Object.keys(e.duringSpinSounds[t]), (function(i) { return [n("option", { key: e.duringSpinSounds[t][i].value, domProps: { value: e.duringSpinSounds[t][i].value } }, [e._v("\n                " + e._s(e.translateIfNeeded(i)) + "\n              ")])] }))], 2)] }))], 2)], 1), e._v(" "), n("div", { staticClass: "column" }, [n("b-button", { attrs: { disabled: !e.playbackEnabled }, on: { click: e.playDuringSpinSound } }, [n("i", { staticClass: "fas fa-play" })]), e._v(" "), n("b-button", { attrs: { disabled: !e.playbackEnabled }, on: { click: e.stopDuringSpinSound } }, [n("i", { staticClass: "fas fa-stop" })])], 1)]), e._v(" "), n("div", { staticClass: "columns is-mobile is-vcentered" }, [n("div", { staticClass: "column is-2" }, [e._v("\n      " + e._s(e.$t("optionsdialog.Volume")) + "\n    ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-slider", { attrs: { min: 0, max: 100 }, model: { value: e.myDuringSpinSoundVolume, callback: function(t) { e.myDuringSpinSoundVolume = t }, expression: "myDuringSpinSoundVolume" } }, [e._l([0, 50, 100], (function(t) { return [n("b-slider-tick", { key: t, attrs: { value: t } }, [e._v(e._s(t))])] }))], 2)], 1)])])
                };
                gn._withStripped = !0;
                var vn = { props: ["duringSpinSound", "duringSpinSoundVolume"], data: function() { return { myDuringSpinSound: this.duringSpinSound, myDuringSpinSoundVolume: this.duringSpinSoundVolume, duringSpinSounds: me } }, computed: { playbackEnabled: function() { return !["no-sound", "ticking-sound", "random-music"].includes(this.myDuringSpinSound) } }, watch: { myDuringSpinSound: function(e) { this.$emit("set-during-spin-sound", e) }, myDuringSpinSoundVolume: function(e) { this.$emit("set-during-spin-sound-volume", e) } }, methods: { translateIfNeeded: function(e) { return e.includes(".") ? this.$t(e) : e }, playDuringSpinSound: function() { l.L9("Wheel", "PlayDuringSpinSoundInOptionsDialog", ""), Re(), De(this.duringSpinSound, this.duringSpinSoundVolume) }, stopDuringSpinSound: function() { l.L9("Wheel", "StopDuringSpinSoundInOptionsDialog", ""), Re() } } },
                    wn = (0, A.Z)(vn, gn, [], !1, null, null, null);
                wn.options.__file = "static/duringSpinSoundPicker.vue";
                var bn = wn.exports,
                    yn = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("div", { staticClass: "columns is-mobile is-vcentered" }, [n("div", { staticClass: "column is-2" }, [e._v("\n      " + e._s(e.$t("optionsdialog.Sound")) + "\n    ")]), e._v(" "), n("div", { staticClass: "column is-half is-half-mobile" }, [n("b-select", { model: { value: e.myAfterSpinSound, callback: function(t) { e.myAfterSpinSound = t }, expression: "myAfterSpinSound" } }, e._l(e.afterSpinSounds, (function(t) { return n("option", { key: t.value, domProps: { value: t.value } }, [e._v("\n          " + e._s(e.$t(t.name)) + "\n        ")]) })), 0)], 1), e._v(" "), n("div", { staticClass: "column" }, [n("b-button", { attrs: { disabled: !e.playbackEnabled }, on: { click: e.playAfterSpinSound } }, [n("i", { staticClass: "fas fa-play" })]), e._v(" "), n("b-button", { attrs: { disabled: !e.playbackEnabled }, on: { click: e.stopAfterSpinSound } }, [n("i", { staticClass: "fas fa-stop" })])], 1)]), e._v(" "), n("div", { staticClass: "columns is-mobile is-vcentered" }, [n("div", { staticClass: "column is-2" }, [e._v("\n      " + e._s(e.$t("optionsdialog.Volume")) + "\n    ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-slider", { attrs: { min: 0, max: 100 }, model: { value: e.myAfterSpinSoundVolume, callback: function(t) { e.myAfterSpinSoundVolume = t }, expression: "myAfterSpinSoundVolume" } }, [e._l([0, 50, 100], (function(t) { return [n("b-slider-tick", { key: t, attrs: { value: t } }, [e._v(e._s(t))])] }))], 2)], 1)])])
                    };
                yn._withStripped = !0;
                var kn = { props: ["afterSpinSound", "afterSpinSoundVolume", "firstTextOnWheel"], data: function() { return { myAfterSpinSound: this.afterSpinSound, myAfterSpinSoundVolume: this.afterSpinSoundVolume, afterSpinSounds: Ce() } }, computed: { playbackEnabled: function() { return "no-sound" != this.myAfterSpinSound } }, watch: { myAfterSpinSound: function(e) { this.$emit("set-after-spin-sound", e) }, myAfterSpinSoundVolume: function(e) { this.$emit("set-after-spin-sound-volume", e) } }, methods: { playAfterSpinSound: function() { l.L9("Wheel", "PlayAfterSpinSoundInOptionsDialog", ""), Ee(), xe(this.myAfterSpinSound, this.firstTextOnWheel, this.myAfterSpinSoundVolume, this.$i18n.locale) }, stopAfterSpinSound: function() { l.L9("Wheel", "StopAfterSpinSoundInOptionsDialog", ""), Ee() } } },
                    Cn = (0, A.Z)(kn, yn, [], !1, null, null, null);
                Cn.options.__file = "static/afterSpinSoundPicker.vue";
                var _n = Cn.exports,
                    xn = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("b-dropdown", { attrs: { "append-to-body": "", "aria-role": "menu", scrollable: "", "max-height": "400", "trap-focus": "" }, scopedSlots: e._u([{ key: "trigger", fn: function(t) { var i = t.active; return [n("b-button", { attrs: { label: e.$t("optionsdialog.Apply a theme"), type: "is-primary", "icon-right": i ? "caret-up" : "caret-down", disabled: e.disabled } })] } }]), model: { value: e.colorTheme, callback: function(t) { e.colorTheme = t }, expression: "colorTheme" } }, [e._v(" "), e._l(Object.keys(e.colorThemeCategories), (function(t) { return [n("b-dropdown-item", { key: t }, [n("b", [e._v(e._s(t))])]), e._v(" "), e._l(Object.keys(e.colorThemeCategories[t]), (function(i) { return [n("b-dropdown-item", { key: i, attrs: { value: t + ", " + i } }, [e._v("\n          " + e._s(i) + "\n        "), e._l(e.colorThemeCategories[t][i], (function(e) { return [n("svg", { staticStyle: { "margin-left": "5px" }, attrs: { width: "12", height: "12" } }, [n("rect", { style: "fill:" + e + ";stroke-width:1;stroke:rgb(0,0,0)", attrs: { width: "12", height: "12" } })])] }))], 2)] })), e._v(" "), n("b-dropdown-item", { attrs: { separator: "" } })] }))], 2)
                    };
                xn._withStripped = !0;
                var Fn = n(92216),
                    Sn = {
                        props: { disabled: Boolean },
                        data: function() { return { colorThemeCategories: Fn.p, colorTheme: null } },
                        watch: {
                            colorTheme: function(e) {
                                if (e) {
                                    var t = e.split(",");
                                    if (2 == t.length) {
                                        var n = t[0].trim(),
                                            i = t[1].trim(),
                                            r = { name: e, colors: this.colorThemeCategories[n][i] };
                                        this.$emit("set-color-theme", r)
                                    }
                                }
                            }
                        }
                    },
                    En = (0, A.Z)(Sn, xn, [], !1, null, null, null);
                En.options.__file = "static/colorThemeSelector.vue";
                var Dn = En.exports,
                    In = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("div", { staticClass: "columns is-mobile is-vcentered" }, [n("div", { staticClass: "column is-narrow" }, [e._v("\n      " + e._s(e.$t("optionsdialog.Wheel background image")) + "\n    ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-dropdown", { ref: "dropDown", attrs: { "append-to-body": "", "aria-role": "menu", scrollable: "", "max-height": "400", "trap-focus": "" }, scopedSlots: e._u([{ key: "trigger", fn: function(t) { var i = t.active; return [n("b-button", { staticStyle: { height: "50px" }, attrs: { "icon-right": i ? "caret-up" : "caret-down" } }, [n("img", { staticClass: "preview-image", attrs: { src: e.imageSrc } })])] } }]), model: { value: e.dropdownItem, callback: function(t) { e.dropdownItem = t }, expression: "dropdownItem" } }, [e._v(" "), n("b-dropdown-item", { key: "upload", attrs: { custom: "", value: "upload" } }, [n("b-upload", { ref: "upload-button", attrs: { accept: "image/*" }, model: { value: e.uploadedCoverImage, callback: function(t) { e.uploadedCoverImage = t }, expression: "uploadedCoverImage" } }, [n("a", { staticClass: "button" }, [n("i", { staticClass: "fas fa-upload" }), e._v("\n               \n              " + e._s(e.$t("optionsdialog.Upload image")) + "\n            ")])])], 1), e._v(" "), e._l(e.coverImages, (function(t) { return [n("b-dropdown-item", { key: t.fileName, attrs: { value: t } }, [n("img", { staticClass: "preview-image", attrs: { src: t.fileName } }), e._v("\n             \n            " + e._s(t.title) + "\n          ")])] }))], 2)], 1)])])
                    };
                In._withStripped = !0;
                var Rn = n(33121);

                function An(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }
                var Pn = {
                        props: ["imageSrc"],
                        data: function() { return { dropdownItem: "", coverImages: Rn.p, uploadedCoverImage: {} } },
                        watch: {
                            dropdownItem: function(e) { this.$emit("set-background-gallery-image", e.fileName) },
                            uploadedCoverImage: function(e) {
                                this.$refs.dropDown.toggle();
                                var t = new FileReader,
                                    n = this;
                                t.onload = function() {
                                    var t, i = (t = regeneratorRuntime.mark((function t(i) {
                                        var r;
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return l.L9("Wheel", "UploadedCustomImage", ""), t.next = 3, c.ZG(i.target.result);
                                                case 3:
                                                    r = t.sent, n.$emit("set-background-uploaded-image", { fileName: e.name, dataUri: r });
                                                case 5:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })), function() {
                                        var e = this,
                                            n = arguments;
                                        return new Promise((function(i, r) {
                                            var a = t.apply(e, n);

                                            function o(e) { An(a, i, r, o, s, "next", e) }

                                            function s(e) { An(a, i, r, o, s, "throw", e) }
                                            o(void 0)
                                        }))
                                    });
                                    return function(e) { return i.apply(this, arguments) }
                                }(), t.readAsDataURL(e)
                            }
                        }
                    },
                    $n = Pn,
                    On = (n(66795), (0, A.Z)($n, In, [], !1, null, "7f764343", null));
                On.options.__file = "static/wheelBackgroundImagePicker.vue";
                var Tn = On.exports,
                    Nn = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("div", { staticClass: "columns is-vcentered is-mobile" }, [n("div", { staticClass: "column is-narrow" }, [e._v("\n      " + e._s(e.$t("optionsdialog.Image in the center of the wheel")) + "\n    ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-dropdown", { ref: "dropDown", attrs: { "append-to-body": "", "aria-role": "menu", scrollable: "", "max-height": "400", "trap-focus": "" }, scopedSlots: e._u([{ key: "trigger", fn: function(t) { var i = t.active; return [n("b-button", { staticStyle: { height: "50px" }, attrs: { "icon-right": i ? "caret-up" : "caret-down" } }, [n("img", { staticClass: "preview-image", attrs: { src: e.imageSrc } })])] } }]), model: { value: e.dropdownItem, callback: function(t) { e.dropdownItem = t }, expression: "dropdownItem" } }, [e._v(" "), n("b-dropdown-item", { directives: [{ name: "show", rawName: "v-show", value: !e.imageSrc.includes("none"), expression: "!imageSrc.includes('none')" }], key: "none", attrs: { custom: "", value: "none" } }, [n("b-button", { on: { click: e.removeImage } }, [n("i", { staticClass: "fas fa-ban" }), e._v("\n             \n            " + e._s(e.$t("optionsdialog.Remove image")) + "\n          ")])], 1), e._v(" "), n("b-dropdown-item", { directives: [{ name: "show", rawName: "v-show", value: !e.imageSrc.includes("none"), expression: "!imageSrc.includes('none')" }], attrs: { separator: "" } }), e._v(" "), n("b-dropdown-item", { key: "upload", attrs: { custom: "", value: "upload" } }, [n("b-upload", { ref: "upload-button", attrs: { accept: "image/*" }, model: { value: e.uploadedImage, callback: function(t) { e.uploadedImage = t }, expression: "uploadedImage" } }, [n("a", { staticClass: "button" }, [n("i", { staticClass: "fas fa-upload" }), e._v("\n               \n              " + e._s(e.$t("optionsdialog.Upload image")) + "\n            ")])])], 1), e._v(" "), n("b-dropdown-item", { attrs: { separator: "" } }), e._v(" "), n("b-dropdown-item", { key: "text", attrs: { custom: "", value: "upload" } }, [n("b-field", [n("b-input", { attrs: { placeholder: e.$t("optionsdialog.Center text"), maxlength: "20" }, nativeOn: { keyup: function(t) { return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.setText(t) } }, model: { value: e.myCenterText, callback: function(t) { e.myCenterText = t }, expression: "myCenterText" } }), e._v(" "), n("p", { staticClass: "control" }, [n("b-button", { staticClass: "button is-primary", on: { click: e.setText } }, [e._v("\n                " + e._s(e.$t("common.Save")) + "\n              ")])], 1)], 1)], 1), e._v(" "), n("b-dropdown-item", { attrs: { separator: "" } }), e._v(" "), e._l(e.galleryPictures, (function(t) { return [n("b-dropdown-item", { key: t.fileName, attrs: { value: t } }, [n("img", { staticClass: "preview-image", attrs: { src: t.fileName } }), e._v("\n             \n            " + e._s(t.title) + "\n          ")])] }))], 2)], 1)])])
                    };
                Nn._withStripped = !0;
                var jn = n(64136);

                function Wn(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function Bn(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { Wn(a, i, r, o, s, "next", e) }

                            function s(e) { Wn(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }
                var Ln = {
                        props: { imageSrc: String, centerText: String, isAdvanced: Boolean },
                        data: function() { return { dropdownItem: "", myCenterText: this.centerText, galleryPictures: jn.p, uploadedImage: {} } },
                        watch: {
                            dropdownItem: function(e) { e.fileName && (this.myCenterText = "", this.$emit("set-center-gallery-image", e.fileName)) },
                            uploadedImage: function(e) {
                                this.$refs.dropDown.toggle(), this.myCenterText = "";
                                var t = new FileReader,
                                    n = this;
                                t.onload = function() {
                                    var t = Bn(regeneratorRuntime.mark((function t(i) {
                                        var r;
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return l.L9("Wheel", "UploadedCustomImage", ""), t.next = 3, c.GV(i.target.result);
                                                case 3:
                                                    r = t.sent, n.$emit("set-center-uploaded-image", { fileName: e.name, dataUri: r }), n.offerToUpdateWheelColors(e.name, r);
                                                case 6:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e) { return t.apply(this, arguments) }
                                }(), t.readAsDataURL(e)
                            }
                        },
                        methods: {
                            removeImage: function() { this.$refs.dropDown.toggle(), this.myCenterText = "", this.$emit("set-center-no-image") },
                            setText: function() { this.$refs.dropDown.toggle(), this.$emit("set-center-text", this.myCenterText) },
                            offerToUpdateWheelColors: function(e, t) {
                                var n = this;
                                this.isAdvanced || this.$buefy.dialog.confirm({ message: this.$t("optionsdialog.Your image has been uploaded", { fileName: e }), hasIcon: !0, icon: "palette", iconPack: "fa", confirmText: this.$t("optionsdialog.Yes"), cancelText: this.$t("optionsdialog.No"), onConfirm: function() { return n.setColorsFromCustomPicture(t) } })
                            },
                            setColorsFromCustomPicture: function(e) {
                                var t = this;
                                return Bn(regeneratorRuntime.mark((function n() {
                                    var i;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return l.L9("Wheel", "SetColorsFromCustomPicture", ""), n.next = 3, c.be(e);
                                            case 3:
                                                i = n.sent, t.$emit("set-color-values", i);
                                            case 5:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            }
                        }
                    },
                    Mn = Ln,
                    Vn = (n(24229), (0, A.Z)(Mn, Nn, [], !1, null, "69a0713c", null));
                Vn.options.__file = "static/wheelCenterImagePicker.vue";
                var zn = Vn.exports,
                    Un = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("span", { staticStyle: { color: "#CCC" } }, [n("b-tooltip", { attrs: { type: "is-light", multilined: "", label: e.title } }, [n("i", { staticClass: "fas fa-question-circle" })])], 1)
                    };
                Un._withStripped = !0;
                var Gn = { props: { title: String } },
                    Hn = (0, A.Z)(Gn, Un, [], !1, null, null, null);
                Hn.options.__file = "static/tooltip.vue";
                var qn = Hn.exports,
                    Zn = n(57982),
                    Kn = (n.p, n(26938), {
                        components: { duringSpinSoundPicker: bn, afterSpinSoundPicker: _n, colorThemeSelector: Dn, wheelBackgroundImagePicker: Tn, wheelCenterImagePicker: zn, tooltip: qn },
                        data: function() { return { optionsDialogVisible: !1, wheelConfig: {}, activeTab: 0, colorThemeName: "", hubSizes: Object.keys(Zn.q), browserIsIE: l.a0(navigator.userAgent) } },
                        computed: { isImageWheel: { get: function() { return "image" == this.wheelConfig.type }, set: function(e) { this.wheelConfig.type = e ? "image" : "color" } }, backgroundImageSrc: function() { return "gallery" == this.wheelConfig.coverImageType ? this.wheelConfig.coverImageName : "uploaded" == this.wheelConfig.coverImageType ? this.wheelConfig.customCoverImageDataUri : "/images/none.png" }, centerImageSrc: function() { if (this.wheelConfig.getWheelImage) return this.wheelConfig.getWheelImage() }, firstTextOnWheel: function() { if (this.wheelConfig.getFirstText) return this.wheelConfig.getFirstText() }, entriesHaveUnequalWeight: function() { return !(!this.wheelConfig.entries || 0 == this.wheelConfig.entries.length || !this.wheelConfig.entries[0].weight || !this.wheelConfig.entries.find((function(e) { return 1 != e.weight }))) } },
                        methods: {
                            show: function() { this.wheelConfig = this.$store.getters.wheelConfig.clone(), this.optionsDialogVisible = !0, this.colorThemeName = "" },
                            setDuringSpinSound: function(e) { this.wheelConfig.duringSpinSound = e },
                            setDuringSpinSoundVolume: function(e) { this.wheelConfig.duringSpinSoundVolume = e },
                            setAfterSpinSound: function(e) { this.wheelConfig.afterSpinSound = e },
                            setAfterSpinSoundVolume: function(e) { this.wheelConfig.afterSpinSoundVolume = e },
                            setCenterNoImage: function() { this.wheelConfig.pictureType = "none", this.wheelConfig.galleryPicture = "/images/none.png", this.wheelConfig.customPictureName = "", this.wheelConfig.customPictureDataUri = "", this.wheelConfig.centerText = "" },
                            setCenterGalleryImage: function(e) { this.wheelConfig.pictureType = "gallery", this.wheelConfig.galleryPicture = e, this.wheelConfig.customPictureName = "", this.wheelConfig.customPictureDataUri = "", this.wheelConfig.centerText = "" },
                            setCenterText: function(e) { this.wheelConfig.pictureType = "text", this.wheelConfig.galleryPicture = "/images/none.png", this.wheelConfig.customPictureName = "", this.wheelConfig.customPictureDataUri = "", this.wheelConfig.centerText = e, this.wheelConfig.customPictureDataUri = c.IY(e) },
                            setCenterUploadedImage: function(e) {
                                var t = e.fileName,
                                    n = e.dataUri;
                                this.wheelConfig.pictureType = "uploaded", this.wheelConfig.customPictureName = t, this.wheelConfig.customPictureDataUri = n, this.wheelConfig.centerText = ""
                            },
                            setBackgroundGalleryImage: function(e) { this.wheelConfig.coverImageType = "gallery", this.wheelConfig.coverImageName = e, this.wheelConfig.customCoverImageDataUri = "" },
                            setBackgroundUploadedImage: function(e) {
                                var t = e.fileName,
                                    n = e.dataUri;
                                this.wheelConfig.coverImageName = t, this.wheelConfig.customCoverImageDataUri = n, this.wheelConfig.coverImageType = "uploaded"
                            },
                            setColorTheme: function(e) { this.colorThemeName = e.name, this.wheelConfig.setColorValues(e.colors) },
                            setColorValues: function(e) { this.wheelConfig.setColorValues(e), this.$forceUpdate() },
                            close: function() { Re(), Ee(), this.optionsDialogVisible = !1 },
                            saveOptions: function() { Re(), Ee(), this.$store.commit("setWheelConfig", this.wheelConfig), this.colorThemeName && l.L9("Wheel", "SelectedTheme", this.colorThemeName), this.optionsDialogVisible = !1 }
                        }
                    }),
                    Jn = (n(86515), (0, A.Z)(Kn, pn, [], !1, null, "5a328193", null));
                Jn.options.__file = "static/optionsdialog.vue";
                var Yn = Jn.exports,
                    Xn = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("b-modal", { attrs: { active: e.showWarning, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.showWarning = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-share-alt" }), e._v(" " + e._s(e.$t("sharedialog.Shareable link")) + "\n        ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("p", [e._v("\n          " + e._s(e.$t("sharedialog.If you continue")) + "\n          " + e._s(e.$t("sharedialog.This link will work for anyone")) + "\n        ")]), e._v(" "), n("p", { staticStyle: { "margin-top": "10px" } }, [e._v("\n          " + e._s(e.$t("sharedialog.We want this website to be safe place for everyone")) + "\n        ")]), e._v(" "), n("p", { staticStyle: { "margin-top": "10px" } }, [n("router-link", { attrs: { to: "/faq/terms" } }, [e._v(e._s(e.$t("appInfo.Terms of service")))])], 1), e._v(" "), n("b-button", { staticStyle: { "margin-top": "10px", "background-color": "#eff5fb", color: "#296fa8" }, attrs: { size: "is-default" }, on: { click: function(t) { return e.enter_LoadingSharedWheels() } } }, [e._v("\n          " + e._s(e.$t("sharedialog.See my shared wheels")) + "\n        ")])], 1), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.enter_Inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Cancel")) + "\n        ")]), e._v(" "), n("b-button", { ref: "continueButton1", attrs: { size: "is-medium", type: "is-primary" }, on: { click: function(t) { return e.enter_UserIsSettingOptions() } } }, [e._v("\n          " + e._s(e.$t("common.Continue")) + "\n        ")])], 1)])]), e._v(" "), n("b-modal", { attrs: { active: e.showSharedWheels, scroll: "keep" }, on: { "update:active": function(t) { e.showSharedWheels = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-share-alt" }), e._v(" " + e._s(e.$t("sharedialog.My shared wheels")) + "\n        ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("p", [e._v("\n          " + e._s(e.$t("sharedialog.Only wheels shared after")) + "\n        ")]), e._v(" "), n("br"), e._v(" "), n("table", { staticClass: "table can-go-dark" }, [e.noSharedWheels ? e._e() : n("tr", [n("th", [e._v(e._s(e.$t("common.Wheel title")))]), e._v(" "), n("th", [e._v(e._s(e.$t("sharedialog.Link")))]), e._v(" "), n("th"), e._v(" "), "desktop" == e.$mq ? n("th", [e._v(e._s(e.$t("sharedialog.Created")))]) : e._e(), e._v(" "), n("th", [e._v(e._s(e.$t("sharedialog.Visits")))])]), e._v(" "), e._l(e.sharedWheels, (function(t) { return n("tr", { key: t.path }, [n("td", [e._v(e._s(t.config.title))]), e._v(" "), n("td", { staticStyle: { "white-space": "nowrap" } }, [n("a", { attrs: { href: e.getWheelLink(t.path) } }, [e._v("\n                " + e._s(t.path) + "\n              ")])]), e._v(" "), n("td", [n("b-button", { attrs: { type: "is-light" }, on: { click: function(n) { e.copyToClipboard(e.getWheelLink(t.path)) } } }, [n("i", { staticClass: "far fa-clipboard" })])], 1), e._v(" "), "desktop" == e.$mq ? n("td", { staticStyle: { "white-space": "nowrap" } }, [e._v("\n              " + e._s(e._f("timeago")(e._f("firestoremilliseconds")(t.created))) + "\n            ")]) : e._e(), e._v(" "), n("td", { staticClass: "has-text-right" }, [e._v(e._s(e._f("localestring")(t.readCount)))]), e._v(" "), n("td", [n("b-button", { attrs: { type: "is-light" }, on: { click: function(n) { return e.enter_confirmingDelete(t.path) } } }, [n("i", { staticClass: "far fa-trash-alt" }), e._v(" "), "desktop" == e.$mq ? n("span", [e._v(" " + e._s(e.$t("common.Delete")))]) : e._e()])], 1)]) })), e._v(" "), e.noSharedWheels ? n("tr", [n("td", [e._v("\n              " + e._s(e.$t("sharedialog.No wheels found")) + "\n            ")])]) : e._e()], 2)]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.enter_Inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Close")) + "\n        ")])], 1)])]), e._v(" "), n("b-modal", { attrs: { active: e.showOptions, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.showOptions = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-share-alt" }), e._v(" " + e._s(e.$t("sharedialog.Shareable link")) + "\n        ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("div", { staticClass: "field" }, [e._v("\n          " + e._s(e.$t("common.Wheel title")) + "\n        ")]), e._v(" "), n("b-input", { ref: "wheelTitleField", attrs: { maxlength: "50" }, nativeOn: { keyup: function(t) { return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enter_CreatingLink() } }, model: { value: e.wheelTitle, callback: function(t) { e.wheelTitle = t }, expression: "wheelTitle" } }), e._v(" "), n("div", { staticClass: "field" }, [n("b-checkbox", { model: { value: e.showTitle, callback: function(t) { e.showTitle = t }, expression: "showTitle" } }, [e._v("\n            " + e._s(e.$t("sharedialog.Show title to people")) + "\n          ")])], 1), e._v(" "), n("div", { staticClass: "field" }, [e._v("\n          " + e._s(e.$t("sharedialog.What should a person be able to do")) + "\n        ")]), e._v(" "), n("div", { staticClass: "field" }, [n("b-radio", { attrs: { "native-value": !0 }, model: { value: e.copyableWheel, callback: function(t) { e.copyableWheel = t }, expression: "copyableWheel" } }, [e._v("\n            " + e._s(e.$t("sharedialog.They should be able to spin the wheel and")) + "\n          ")])], 1), e._v(" "), n("div", { staticClass: "field" }, [n("b-radio", { attrs: { "native-value": !1 }, model: { value: e.copyableWheel, callback: function(t) { e.copyableWheel = t }, expression: "copyableWheel" } }, [e._v("\n            " + e._s(e.$t("sharedialog.They should only be able to spin the wheel")) + "\n          ")])], 1)], 1), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.enter_Inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Cancel")) + "\n        ")]), e._v(" "), n("b-button", { attrs: { size: "is-medium", type: "is-primary" }, on: { click: function(t) { return e.enter_CreatingLink() } } }, [e._v("\n          " + e._s(e.$t("common.Continue")) + "\n        ")])], 1)])]), e._v(" "), n("b-modal", { attrs: { active: e.showLink, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.showLink = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-share-alt" }), e._v(" " + e._s(e.$t("sharedialog.Shareable link")) + "\n        ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("p", [e._v("\n          " + e._s(e.$t("sharedialog.Link to this wheel")) + "\n        ")]), e._v(" "), n("div", { staticClass: "columns" }, [n("div", { staticClass: "column is-8" }, [n("b-input", { attrs: { id: "sharableLinkText" }, model: { value: e.sharableLink, callback: function(t) { e.sharableLink = t }, expression: "sharableLink" } })], 1), e._v(" "), n("div", { staticClass: "column" }, [n("b-button", { attrs: { type: "is-light" }, on: { click: e.copyLink } }, [e._v("\n              " + e._s(e.$t("sharedialog.Copy link")) + "\n            ")])], 1)]), e._v(" "), n("p", [e._v("\n          " + e._s(e.$t("sharedialog.This link will work for anyone")) + "\n        ")])]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.enter_Inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Close")) + "\n        ")])], 1)])])], 1)
                    };
                Xn._withStripped = !0;
                var Qn, ei = n(6984);

                function ti(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function ni(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { ti(a, i, r, o, s, "next", e) }

                            function s(e) { ti(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }

                function ii(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function ri(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                var ai = {
                        filters: { timeago: ei.yV, firestoremilliseconds: ei.Kd, localestring: ei.B0 },
                        data: function() { return { fsm: "Inactive", wheelTitle: "", copyableWheel: !0, sharableLink: "" } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ii(Object(n), !0).forEach((function(t) { ri(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ii(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }((Qn = { noSharedWheels: function() { return 0 == this.sharedWheels.length }, showWarning: function() { return "ShowingWarning" == this.fsm }, showTitle: { get: function() { return this.$store.getters.wheelConfig.showTitle }, set: function(e) { this.$store.commit("setShowTitle", e) } } }, ri(Qn, "showWarning", { get: function() { return "ShowingWarning" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "Inactive") } }), ri(Qn, "showSharedWheels", { get: function() { return "ShowingSharedWheels" == this.fsm || "ConfirmingDelete" == this.fsm || "DeletingWheel" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "Inactive") } }), ri(Qn, "showOptions", { get: function() { return "UserIsSettingOptions" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "Inactive") } }), ri(Qn, "showLink", { get: function() { return "ShowingLink" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "Inactive") } }), Qn), (0, o.Se)(["sharedWheels", "wheelConfig"])),
                        methods: {
                            show: function() { this.wheelConfig.isTooBigForDatabase() ? alert(this.$t("sharedialog.Sorry, too many images")) : (this.wheelTitle = this.$store.getters.wheelTitle, this.enter_ShowingWarning()) },
                            enter_ShowingWarning: function() {
                                var e = this;
                                setTimeout((function() { e.$refs.continueButton1.$el.focus() }), 100), this.setState("ShowingWarning")
                            },
                            enter_UserIsSettingOptions: function() {
                                var e = this;
                                return ni(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                setTimeout((function() { e.$refs.wheelTitleField.focus() }), 100), e.setState("UserIsSettingOptions");
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_LoadingSharedWheels: function() {
                                var e = this;
                                return ni(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return l.L9("Wheel", "ViewSharedWheelsAttempt", ""), e.setState("LoadingSharedWheels"), e.$emit("start-wait-animation"), t.next = 5, e.$store.dispatch("userIsLoggedIn");
                                            case 5:
                                                if (t.sent) { t.next = 8; break }
                                                return t.next = 8, e.$store.dispatch("loginAnonymously");
                                            case 8:
                                                return t.next = 10, e.$store.dispatch("loadSharedWheels");
                                            case 10:
                                                e.setState("ShowingSharedWheels"), e.$emit("stop-wait-animation"), l.L9("Wheel", "ViewSharedWheelsSuccess", "");
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_CreatingLink: function() {
                                var e = this;
                                return ni(regeneratorRuntime.mark((function t() {
                                    var n, i, r, a;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.setState("CreatingLink"), t.prev = 1, e.$emit("start-wait-animation"), t.next = 5, e.$store.dispatch("userIsLoggedIn");
                                            case 5:
                                                if (t.sent) { t.next = 8; break }
                                                return t.next = 8, e.$store.dispatch("loginAnonymously");
                                            case 8:
                                                return e.$store.commit("setWheelTitle", e.wheelTitle), n = window.location.host, i = e.$i18n.locale, t.next = 13, e.$store.dispatch("shareWheel", { wheelConfig: e.wheelConfig, copyableWheel: e.copyableWheel });
                                            case 13:
                                                r = t.sent, a = S.WN(n, i, r), e.sharableLink = "https://" + a, e.$emit("stop-wait-animation"), e.enter_ShowingLink(), t.next = 25;
                                                break;
                                            case 20:
                                                t.prev = 20, t.t0 = t.catch(1), l.k5(t.t0), e.$emit("stop-wait-animation"), alert(t.t0);
                                            case 25:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 20]
                                    ])
                                })))()
                            },
                            enter_confirmingDelete: function(e) {
                                var t = this;
                                this.fsm = "ConfirmingDelete", this.$buefy.dialog.confirm({ title: this.$t("opendialog.Delete wheel"), message: this.$t("opendialog.Are you sure", { wheelTitle: l.Xv(e) }), cancelText: this.$t("common.Cancel"), confirmText: this.$t("common.Delete"), type: "is-danger", hasIcon: !0, onConfirm: function() { return t.enter_deletingWheel(e) }, onCancel: function() { return t.setState("ShowingSharedWheels") } })
                            },
                            enter_deletingWheel: function(e) {
                                var t = this;
                                return ni(regeneratorRuntime.mark((function n() {
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return t.fsm = "DeletingWheel", n.prev = 1, t.$emit("start-wait-animation"), n.next = 5, t.$store.dispatch("deleteSharedWheel", e);
                                            case 5:
                                                t.$emit("stop-wait-animation"), t.setState("ShowingSharedWheels"), n.next = 14;
                                                break;
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), l.k5(n.t0), t.$emit("stop-wait-animation"), t.enter_authError(n.t0);
                                            case 14:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            enter_authError: function(e) { this.fsm = "authError", this.$store.dispatch("logOut"), this.$emit("auth-error", e), this.enter_Inactive() },
                            enter_ShowingLink: function() { this.setState("ShowingLink") },
                            enter_Inactive: function() { this.setState("Inactive") },
                            copyLink: function() {
                                l.L9("Wheel", "CopySharableLink", ""), document.querySelector("#sharableLinkText").select(), document.execCommand("copy");
                                var e = this.$t("sharedialog.Link copied to the clipboard");
                                this.$emit("show-snackbar-message", e)
                            },
                            setState: function(e) { this.fsm = e },
                            getWheelLink: function(e) { return "https://" + S.WN(location.hostname, this.$i18n.locale, e) },
                            copyToClipboard: function(e) {
                                var t = this;
                                return ni(regeneratorRuntime.mark((function n() {
                                    var i;
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2, navigator.clipboard.writeText(e);
                                            case 2:
                                                i = t.$t("sharedialog.Link copied to the clipboard"), t.$emit("show-snackbar-message", i);
                                            case 4:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            }
                        }
                    },
                    oi = ai,
                    si = (0, A.Z)(oi, Xn, [], !1, null, null, null);
                si.options.__file = "static/sharedialog.vue";
                var li = si.exports,
                    ci = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("b-modal", { attrs: { active: e.twitterDialogVisible, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.twitterDialogVisible = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fab fa-twitter" }), e._v(" " + e._s(e.$t("common.Import Twitter users")) + "\n      ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("b-field", [n("b-input", { ref: "searchTermField", attrs: { placeholder: e.$t("twitterdialog.Hashtag, like #gdg") }, nativeOn: { keyup: function(t) { return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.getTwitterUsers(t) } }, model: { value: e.searchTerm, callback: function(t) { e.searchTerm = t }, expression: "searchTerm" } })], 1), e._v(" "), n("p", { staticStyle: { color: "#999" }, domProps: { innerHTML: e._s(e.$t("twitterdialog.This search will fetch")) } })], 1), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { e.twitterDialogVisible = !1 } } }, [e._v("\n        " + e._s(e.$t("common.Cancel")) + "\n      ")]), e._v(" "), n("b-button", { attrs: { size: "is-medium", type: "is-primary", disabled: "" == e.searchTerm }, on: { click: e.getTwitterUsers } }, [e._v("\n        " + e._s(e.$t("common.OK")) + "\n      ")])], 1)])])
                    };

                function ui(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }
                ci._withStripped = !0;
                var hi = {
                        data: function() { return { twitterDialogVisible: !1, searchTerm: "" } },
                        methods: {
                            show: function() {
                                var e = this;
                                this.twitterDialogVisible = !0, setTimeout((function() { e.$refs.searchTermField.focus() }), 100)
                            },
                            getTwitterUsers: function() {
                                var e, t = this;
                                return (e = regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t.twitterDialogVisible = !1, l.L9("Wheel", "GetSocialMediaUsers", t.searchTerm), e.prev = 2, t.$emit("start-wait-animation"), e.next = 6, t.$store.dispatch("setAdvanced", !1);
                                            case 6:
                                                return e.next = 8, t.$store.dispatch("fetchSocialMediaUsers", t.searchTerm);
                                            case 8:
                                                n = t.$t("twitterdialog.Found Twitter users", { userCount: t.$store.getters.entryCount, term: t.searchTerm }), t.$emit("show-snackbar-message", n), e.next = 16;
                                                break;
                                            case 12:
                                                e.prev = 12, e.t0 = e.catch(2), l.k5(e.t0), alert(e.t0);
                                            case 16:
                                                return e.prev = 16, t.$emit("stop-wait-animation"), e.finish(16);
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [2, 12, 16, 19]
                                    ])
                                })), function() {
                                    var t = this,
                                        n = arguments;
                                    return new Promise((function(i, r) {
                                        var a = e.apply(t, n);

                                        function o(e) { ui(a, i, r, o, s, "next", e) }

                                        function s(e) { ui(a, i, r, o, s, "throw", e) }
                                        o(void 0)
                                    }))
                                })()
                            }
                        }
                    },
                    di = hi,
                    fi = (0, A.Z)(di, ci, [], !1, null, null, null);
                fi.options.__file = "static/twitterdialog.vue";
                var mi = fi.exports,
                    pi = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("b-modal", { attrs: { active: e.displayLoginDialog, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.displayLoginDialog = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-link" }), e._v(" " + e._s(e.$t("common.Link Google Spreadsheet")) + "\n        ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("p", [e._v("\n          " + e._s(e.$t("sheetdialog.When you link a spreadsheet")) + "\n        ")]), e._v(" "), n("p", { staticStyle: { "margin-top": "10px" } }, [e._v("\n          " + e._s(e.$t("sheetdialog.To import sheets")) + "\n        ")]), e._v(" "), n("p", { staticStyle: { "margin-top": "10px", color: "#999" } }, [e._v("\n          " + e._s(e.$t("common.If you dont see a Google login button below")) + "\n        ")])]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { on: { click: function(t) { return e.enter_inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Cancel")) + "\n        ")]), e._v(" "), n("input", { staticStyle: { height: "40px" }, attrs: { type: "image", alt: "Sign in with Google", src: "/images/btn_google_signin_dark_normal_web@2x.png" }, on: { click: function(t) { return e.enter_userIsLoggingIn() } } })], 1)])]), e._v(" "), n("b-modal", { attrs: { active: e.displaySheetConfigDialog, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.displaySheetConfigDialog = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fa fa-link" }), e._v(" " + e._s(e.$t("common.Link Google Spreadsheet")) + "\n        ")]), e._v(" "), n("profiledropdown", { on: { "log-out": function(t) { return e.enter_inactive() } } })], 1), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("div", { staticClass: "columns" }, [n("div", { staticClass: "column is-one-third" }, [e._v("\n            " + e._s(e.$t("sheetdialog.Selected spreadsheet")) + "\n          ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-input", { attrs: { disabled: "" }, model: { value: e.sheetTitle, callback: function(t) { e.sheetTitle = t }, expression: "sheetTitle" } })], 1)]), e._v(" "), n("div", { staticClass: "columns" }, [n("div", { staticClass: "column is-one-fifth" }, [e._v("\n            " + e._s(e.$t("sheetdialog.Tab")) + "\n          ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-select", { attrs: { placeholder: e.$t("sheetdialog.Select a tab"), expanded: "" }, model: { value: e.selectedTab, callback: function(t) { e.selectedTab = t }, expression: "selectedTab" } }, e._l(e.tabs, (function(t) { return n("option", { key: t, domProps: { value: t } }, [e._v("\n                " + e._s(t) + "\n              ")]) })), 0)], 1)]), e._v(" "), n("div", { staticClass: "columns" }, [n("div", { staticClass: "column is-one-fifth" }, [e._v("\n            " + e._s(e.$t("sheetdialog.Column")) + "\n          ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-select", { attrs: { loading: e.loadingColumns, placeholder: e.$t("sheetdialog.Select a column"), expanded: "" }, model: { value: e.selectedColumn, callback: function(t) { e.selectedColumn = t }, expression: "selectedColumn" } }, e._l(e.columns, (function(t) { return n("option", { key: t.id, domProps: { value: t.id } }, [e._v("\n                " + e._s(t.name) + "\n              ")]) })), 0)], 1)]), e._v(" "), n("div", { staticClass: "columns" }, [n("div", { staticClass: "column is-one-fifth" }, [e._v("\n            " + e._s(e.$t("sheetdialog.First row")) + "\n          ")]), e._v(" "), n("div", { staticClass: "column" }, [n("b-checkbox", { model: { value: e.firstRowIsHeader, callback: function(t) { e.firstRowIsHeader = t }, expression: "firstRowIsHeader" } }, [e._v("\n              " + e._s(e.$t("sheetdialog.Is a header and should not be imported")) + "\n            ")])], 1)])]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.enter_inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Cancel")) + "\n        ")]), e._v(" "), n("b-button", { attrs: { size: "is-medium", disabled: !e.linkSheetButtonEnabled, type: "is-primary" }, on: { click: function(t) { return e.enter_linkingSheet() } } }, [e._v("\n          " + e._s(e.$t("sheetdialog.Link sheet")) + "\n        ")])], 1)])])], 1)
                    };

                function gi(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function vi(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { gi(a, i, r, o, s, "next", e) }

                            function s(e) { gi(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }

                function wi(e) { return bi.apply(this, arguments) }

                function bi() {
                    return (bi = vi(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, gapi.client.sheets.spreadsheets.get({ spreadsheetId: t });
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.result.properties.title);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function yi(e) { return ki.apply(this, arguments) }

                function ki() {
                    return (ki = vi(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, gapi.client.sheets.spreadsheets.get({ spreadsheetId: t });
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.result.sheets.map((function(e) { return e.properties.title })));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Ci(e, t) { return _i.apply(this, arguments) }

                function _i() {
                    return (_i = vi(regeneratorRuntime.mark((function e(t, n) {
                        var i, r, a, o, s;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, gapi.client.sheets.spreadsheets.values.get({ spreadsheetId: t, range: n });
                                case 2:
                                    if (i = e.sent, r = [], (a = i.result).values && a.values.length > 0)
                                        for (o = Si(a.values)[0], s = 0; s < o.length && s < 27; s++) r.push({ id: String.fromCharCode(s + 65), name: o[s] });
                                    return e.abrupt("return", r);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function xi(e, t, n, i) { return Fi.apply(this, arguments) }

                function Fi() {
                    return (Fi = vi(regeneratorRuntime.mark((function e(t, n, i, r) {
                        var a, o, s, l, c;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, gapi.client.sheets.spreadsheets.values.get({ spreadsheetId: t, range: n + "!" + i + ":" + i });
                                case 2:
                                    if (a = e.sent, o = [], a.result.values && a.result.values.length > 0)
                                        for (s = Si(a.result.values), l = 0; l < s.length; l++) 0 == l && r || void 0 !== (c = s[l])[0] && o.push(c[0]);
                                    return e.abrupt("return", o);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Si(e) { return e.filter((function(e) { return e.length > 0 })) }
                pi._withStripped = !0, n(26981);
                var Ei, Di = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

                function Ii(e) { return Ei = e, new Promise((function(e, t) { gapi.load("auth2:client:picker", (function() { gapi.client.init({ apiKey: "AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g", discoveryDocs: Di, clientId: "1096958520212-sbdisrtnfpeuk96lbi0cfspj7pspgk38.apps.googleusercontent.com", scope: "https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets.readonly" }).then((function() { gapi.client.setToken({ access_token: Ei }), e() })) })) })) }

                function Ri(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function Ai(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { Ri(a, i, r, o, s, "next", e) }

                            function s(e) { Ri(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }

                function Pi(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function $i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                n.p;
                var Oi = {
                        components: { profiledropdown: Jt },
                        data: function() { return { fsm: "inactive", sheetTitle: "", sheetId: "", tabs: [], selectedTab: null, columns: [], selectedColumn: null, loadingColumns: !1, firstRowIsHeader: !0, sheetLinkedAtMs: 0, timeoutId: 0 } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Pi(Object(n), !0).forEach((function(t) { $i(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pi(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ displayLoginDialog: { get: function() { return "userIsPickingLoginMethod" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "inactive") } }, displaySheetConfigDialog: { get: function() { return "userIsPickingTabCol" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "inactive") } }, linkSheetButtonEnabled: function() { return this.selectedTab && this.selectedColumn } }, (0, o.Se)(["sheetLinked", "wheelConfig"])),
                        watch: {
                            selectedTab: function(e) {
                                var t = this;
                                return Ai(regeneratorRuntime.mark((function n() {
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (!e) { n.next = 6; break }
                                                return t.loadingColumns = !0, n.next = 4, Ci(t.sheetId, t.selectedTab);
                                            case 4:
                                                t.columns = n.sent, t.loadingColumns = !1;
                                            case 6:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            sheetLinked: function(e) { e || (clearTimeout(this.timeoutId), this.enter_inactive()) }
                        },
                        methods: {
                            show: function() { this.enter_userIsPickingLoginMethod() },
                            enter_inactive: function() { this.setState("inactive"), this.$store.commit("unlinkSheet") },
                            enter_userIsPickingLoginMethod: function() { this.setState("userIsPickingLoginMethod") },
                            enter_userIsLoggingIn: function() {
                                var e = this;
                                return Ai(regeneratorRuntime.mark((function t() {
                                    var n, i;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.setState("userIsLoggingIn"), t.prev = 1, l.L9("Wheel", "LoginForSheetAttempt", ""), n = e.$i18n.locale, t.next = 6, e.$store.dispatch("logInToSheets", n);
                                            case 6:
                                                return i = t.sent, t.next = 9, Ii(i);
                                            case 9:
                                                l.L9("Wheel", "LoginForSheetSuccess", ""), e.enter_userIsPickingSheet(), t.next = 18;
                                                break;
                                            case 13:
                                                t.prev = 13, t.t0 = t.catch(1), l.k5(t.t0), l.L9("Wheel", "LoginForSheetFailure", t.t0.toString()), e.enter_authError(t.t0);
                                            case 18:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 13]
                                    ])
                                })))()
                            },
                            enter_userIsPickingSheet: function() {
                                var e = this;
                                return Ai(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.setState("userIsPickingSheet"), t.prev = 1, t.next = 4, new Promise((function(e, t) {
                                                    var n = new google.picker.DocsView(google.picker.ViewId.SPREADSHEETS);
                                                    (new google.picker.PickerBuilder).enableFeature(google.picker.Feature.NAV_HIDDEN).setAppId("1096958520212").setOAuthToken(Ei).addView(n).setDeveloperKey("AIzaSyDjijmJdtsEsOzacG4Cl0RhKvwORhL5a4g").setCallback((function(n) {
                                                        if ("cancel" == n.action && t("No spreadsheet picked"), "picked" == n.action && n.docs.length > 0) {
                                                            var i = n.docs[0].id;
                                                            e(i)
                                                        }
                                                    })).setTitle("Select a spreadsheet").build().setVisible(!0)
                                                }));
                                            case 4:
                                                return e.sheetId = t.sent, t.next = 7, wi(e.sheetId);
                                            case 7:
                                                e.sheetTitle = t.sent, e.enter_userIsPickingTabCol(), t.next = 15;
                                                break;
                                            case 11:
                                                t.prev = 11, t.t0 = t.catch(1), l.k5(t.t0), e.enter_authError(t.t0);
                                            case 15:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 11]
                                    ])
                                })))()
                            },
                            enter_userIsPickingTabCol: function() {
                                var e = this;
                                return Ai(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.setState("userIsPickingTabCol"), e.selectedTab = null, e.selectedColumn = null, t.next = 5, yi(e.sheetId);
                                            case 5:
                                                e.tabs = t.sent;
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_linkingSheet: function() {
                                var e = this;
                                return Ai(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.setState("linkingSheet"), l.L9("Wheel", "LinkSpreadsheet", ""), t.next = 4, e.$store.dispatch("setAdvanced", !1);
                                            case 4:
                                                e.$store.commit("linkSheet"), e.sheetLinkedAtMs = (new Date).getTime(), e.enter_readingSheet();
                                            case 7:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_readingSheet: function() {
                                var e = this;
                                return Ai(regeneratorRuntime.mark((function t() {
                                    var n, i, r;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.setState("readingSheet"), t.prev = 1, t.next = 4, xi(e.sheetId, e.selectedTab, e.selectedColumn, e.firstRowIsHeader);
                                            case 4:
                                                n = t.sent, i = n.map((function(e) { return l.Gq(e) })), r = l.g4(e.wheelConfig.entries.map((function(e) { return e.text })), i), e.notifyUserOfNewEntries(r), e.$store.commit("setTextEntries", i), e.enter_waitingToReadSheet(), t.next = 17;
                                                break;
                                            case 12:
                                                t.prev = 12, t.t0 = t.catch(1), l.k5(t.t0), l.L9(t.t0, "enter_readingSheet()", navigator.userAgent), e.enter_authError(t.t0);
                                            case 17:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 12]
                                    ])
                                })))()
                            },
                            enter_waitingToReadSheet: function() {
                                var e = this;
                                this.setState("waitingToReadSheet");
                                var t = this;
                                this.timeoutId = setTimeout((function() { e.linkHasTimedOut() ? t.enter_inactive() : t.enter_readingSheet() }), 5e3)
                            },
                            enter_authError: function(e) { this.setState("authError"), this.$store.dispatch("logOut"), this.$emit("auth-error", e), this.enter_inactive() },
                            setState: function(e) { this.fsm = e },
                            linkHasTimedOut: function() { return (new Date).getTime() - this.sheetLinkedAtMs > 36e5 },
                            notifyUserOfNewEntries: function(e) {
                                var t = this;
                                if (e.length > 2) {
                                    var n = this.$t("sheetdialog.entries added", { count: e.length });
                                    this.$emit("show-snackbar-message", n)
                                } else e.forEach((function(e) {
                                    var n = t.$t("sheetdialog.added", { entry: l.Gq(e) });
                                    t.$emit("show-snackbar-message", n)
                                }))
                            }
                        }
                    },
                    Ti = Oi,
                    Ni = (0, A.Z)(Ti, pi, [], !1, null, null, null);
                Ni.options.__file = "static/sheetdialog.vue";
                var ji = Ni.exports,
                    Wi = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("b-modal", { attrs: { active: e.displayLoginDialog, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.displayLoginDialog = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fas fa-user-alt" }), e._v(" " + e._s(e.$t("common.My account")) + "\n        ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("div", { attrs: { id: "auth-container" } })]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { on: { click: function(t) { return e.enter_inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Close")) + "\n        ")])], 1)])]), e._v(" "), n("b-modal", { attrs: { active: e.displayAccountActionsDialog, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.displayAccountActionsDialog = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fas fa-user-alt" }), e._v(" " + e._s(e.$t("common.My account")) + "\n        ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("div", { staticClass: "columns is-vcentered" }, [n("div", { staticClass: "column is-narrow is-one-fifth" }, [n("img", { staticStyle: { "border-radius": "50%" }, attrs: { src: e.$store.getters.userPhotoUrl } })]), e._v(" "), n("div", { staticClass: "column" }, [n("p", { staticClass: "is-size-4" }, [e._v("\n              " + e._s(e.$t("profiledropdown.Signed in as", { name: e.$store.getters.userDisplayName })) + "\n            ")])]), e._v(" "), n("div", { staticClass: "column is-narrow" }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.logOut() } } }, [e._v("\n              " + e._s(e.$t("profiledropdown.Sign out")) + "\n            ")])], 1)]), e._v(" "), n("b-button", { on: { click: function(t) { return e.$router.push("/export") } } }, [e._v("\n          " + e._s(e.$t("profiledropdown.Export my data")) + "\n        ")]), e._v(" "), n("b-button", { attrs: { type: "is-danger" }, on: { click: function(t) { return e.confirmAndDelete() } } }, [e._v("\n          " + e._s(e.$t("profiledropdown.Delete my account")) + "\n        ")])], 1), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.enter_inactive() } } }, [e._v("\n          " + e._s(e.$t("common.Close")) + "\n        ")])], 1)])])], 1)
                    };

                function Bi(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function Li(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { Bi(a, i, r, o, s, "next", e) }

                            function s(e) { Bi(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }
                Wi._withStripped = !0;
                var Mi = {
                        components: {},
                        data: function() { return { fsm: "inactive" } },
                        computed: { displayLoginDialog: { get: function() { return "userIsPickingLoginMethod" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "inactive") } }, displayAccountActionsDialog: { get: function() { return "waitingForUserAccountAction" == this.fsm }, set: function(e) { 0 == e && (this.fsm = "inactive") } } },
                        methods: {
                            show: function() {
                                var e = this;
                                return Li(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e.enter_loadingLibraries();
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_loadingLibraries: function() {
                                var e = this;
                                return Li(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.fsm = "loadingLibraries", e.$emit("start-wait-animation"), t.next = 4, e.$store.dispatch("userIsLoggedIn");
                                            case 4:
                                                if (!t.sent) { t.next = 9; break }
                                                e.$emit("stop-wait-animation"), e.enter_waitingForUserAccountAction(), t.next = 11;
                                                break;
                                            case 9:
                                                e.$emit("stop-wait-animation"), e.enter_userIsPickingLoginMethod();
                                            case 11:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_inactive: function() { this.fsm = "inactive" },
                            logOut: function() { this.$store.dispatch("logOut"), this.enter_inactive() },
                            confirmAndDelete: function() {
                                var e = this;
                                this.$buefy.dialog.confirm({ title: this.$t("profiledropdown.Delete account"), message: this.$t("profiledropdown.Are you sure you want to delete your account"), cancelText: this.$t("common.Cancel"), confirmText: this.$t("common.Delete"), type: "is-danger", hasIcon: !0, onConfirm: function() { return e.deleteAccount() } })
                            },
                            deleteAccount: function() {
                                var e = this;
                                return Li(regeneratorRuntime.mark((function t() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return e.$emit("start-wait-animation"), t.next = 3, e.$store.dispatch("deleteAccount");
                                            case 3:
                                                e.$store.dispatch("resetWheel"), n = e.$t("profiledropdown.Your account and your saved wheels have been deleted"), e.$emit("show-snackbar-message", n), e.$emit("stop-wait-animation"), e.enter_inactive();
                                            case 8:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_userIsPickingLoginMethod: function() {
                                this.fsm = "userIsPickingLoginMethod", this.$nextTick(Li(regeneratorRuntime.mark((function e() {
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, l.L9("Wheel", "LoginForAccountAttempt", ""), e.next = 4, this.$store.dispatch("loginWithUi", "auth-container");
                                            case 4:
                                                l.L9("Wheel", "LoginForAccountSuccess", ""), this.enter_waitingForUserAccountAction(), e.next = 12;
                                                break;
                                            case 8:
                                                e.prev = 8, e.t0 = e.catch(0), l.L9("Wheel", "LoginForAccountFailure", e.t0.toString()), this.enter_authError(e.t0);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, this, [
                                        [0, 8]
                                    ])
                                }))))
                            },
                            enter_waitingForUserAccountAction: function() {
                                var e = this;
                                return Li(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e.fsm = "waitingForUserAccountAction", e.$store.dispatch("logUserActivity");
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            enter_authError: function(e) { this.fsm = "authError", this.$store.dispatch("logOut"), this.$emit("auth-error", e), this.enter_inactive() }
                        }
                    },
                    Vi = (0, A.Z)(Mi, Wi, [], !1, null, null, null);
                Vi.options.__file = "static/accountdialog.vue";
                var zi = Vi.exports,
                    Ui = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("b-modal", { attrs: { active: e.winnerDialogVisible, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.winnerDialogVisible = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("div", { staticClass: "modal-card-title", staticStyle: { width: "100%" } }, [n("h5", { staticClass: "modal-title" }, [e._v("\n          " + e._s(e.winnerMessage) + "\n        ")])])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("h1", { staticClass: "title" }, [e.winnerImage ? n("img", { staticStyle: { height: "200px", "vertical-align": "middle" }, attrs: { src: e.winnerImage } }) : e._e(), e._v(" "), e.winnerTextIsLink ? n("span", [n("a", { attrs: { target: "_new", href: e.winnerText } }, [e._v("\n            " + e._s(e.winnerText) + "\n          ")])]) : e._e(), e._v(" "), e.winnerTextIsLink ? e._e() : n("span", [e._v("\n          " + e._s(e.winnerText) + "\n        ")])])]), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-field", { attrs: { grouped: "", "group-multiline": "" } }, [n("p", { staticClass: "control" }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { e.winnerDialogVisible = !1 } } }, [e._v("\n            " + e._s(e.$t("common.Close")) + "\n          ")])], 1), e._v(" "), n("p", { directives: [{ name: "show", rawName: "v-show", value: e.showRemoveButton, expression: "showRemoveButton" }], staticClass: "control" }, [n("b-button", { ref: "removeButton", attrs: { size: "is-medium", type: "is-info" }, on: { click: e.removeWinner } }, [e._v("\n            " + e._s(e.$t("winnerdialog.Remove")) + "\n          ")])], 1), e._v(" "), n("p", { directives: [{ name: "show", rawName: "v-show", value: e.showRemoveAllButton, expression: "showRemoveAllButton" }], staticClass: "control" }, [n("b-button", { attrs: { size: "is-medium", type: "is-primary" }, on: { click: e.removeWinnerAll } }, [e._v("\n            " + e._s(e.$t("winnerdialog.Remove all instances")) + "\n          ")])], 1), e._v(" "), n("p", { directives: [{ name: "show", rawName: "v-show", value: e.showHideButton, expression: "showHideButton" }], staticClass: "control" }, [n("b-button", { attrs: { size: "is-medium", type: "is-primary" }, on: { click: e.hideWinner } }, [e._v("\n            " + e._s(e.$t("winnerdialog.Hide")) + "\n          ")])], 1)])], 1)])])
                    };

                function Gi(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function Hi(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                Ui._withStripped = !0;
                var qi = {
                        data: function() { return { winnerDialogVisible: !1, winnerText: "", winnerImage: "", winnerEntry: "" } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Gi(Object(n), !0).forEach((function(t) { Hi(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gi(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({
                            winnerMessage: function() { return this.winnerEntry.message || this.wheelConfig.winnerMessage },
                            winnerTextIsLink: function() { return /https?:\/\//.test(this.winnerText) },
                            showRemoveButton: function() { return this.wheelConfig.displayRemoveButton && !this.wheelConfig.autoRemoveWinner },
                            showRemoveAllButton: function() {
                                var e = l.xT(this.wheelConfig.getTexts(), this.winnerText),
                                    t = this.wheelConfig.displayRemoveButton,
                                    n = this.wheelConfig.autoRemoveWinner;
                                return t && !n && e > 1
                            },
                            showHideButton: function() { return this.wheelConfig.isAdvanced && !this.wheelIsShared && this.wheelConfig.displayHideButton && !this.wheelConfig.autoRemoveWinner }
                        }, (0, o.Se)(["wheelConfig", "wheelIsShared"])),
                        methods: {
                            show: function(e) { this.winnerEntry = e, this.winnerText = e.text, this.winnerImage = e.image, this.winnerDialogVisible = !0, this.setFocusOnRemoveButton() },
                            setFocusOnRemoveButton: function() {
                                var e = this;
                                this.$nextTick((function() { setTimeout((function() { e.$refs.removeButton && e.$refs.removeButton.$el.focus() }), 100) }))
                            },
                            close: function() { this.winnerDialogVisible = !1 },
                            removeWinner: function() { this.$emit("remove-entry", this.winnerEntry), this.winnerDialogVisible = !1 },
                            removeWinnerAll: function() { this.$emit("remove-entry-all", this.winnerEntry), this.winnerDialogVisible = !1 },
                            hideWinner: function() { this.$emit("hide-entry", this.winnerEntry), this.winnerDialogVisible = !1 }
                        }
                    },
                    Zi = qi,
                    Ki = (0, A.Z)(Zi, Ui, [], !1, null, null, null);
                Ki.options.__file = "static/winnerdialog.vue";
                var Ji = Ki.exports,
                    Yi = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("b-modal", { attrs: { active: e.displayTitleAndDescriptionDialog, width: 640, scroll: "keep" }, on: { "update:active": function(t) { e.displayTitleAndDescriptionDialog = t } } }, [n("div", { staticClass: "modal-card", staticStyle: { width: "auto" } }, [n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [n("i", { staticClass: "fas fa-edit" }), e._v(" " + e._s(e.$t("common.Edit title and description")) + "\n      ")])]), e._v(" "), n("section", { staticClass: "modal-card-body can-go-dark" }, [n("b-field", { staticStyle: { "margin-bottom": "0" }, attrs: { label: e.$t("common.Wheel title") } }, [n("b-input", { ref: "wheelTitleInput", attrs: { maxlength: "50" }, nativeOn: { keydown: function(t) { return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enterPressed(t) } }, model: { value: e.wheelTitle, callback: function(t) { e.wheelTitle = t }, expression: "wheelTitle" } })], 1), e._v(" "), n("b-field", { staticStyle: { "margin-bottom": "0" }, attrs: { label: e.$t("common.Wheel description") } }, [n("b-input", { attrs: { type: "textarea", maxlength: "200", "custom-class": "has-fixed-size" }, nativeOn: { keydown: function(t) { return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enterPressed(t) } }, model: { value: e.wheelDescription, callback: function(t) { e.wheelDescription = t }, expression: "wheelDescription" } })], 1)], 1), e._v(" "), n("footer", { staticClass: "modal-card-foot", staticStyle: { "justify-content": "flex-end" } }, [n("b-button", { attrs: { size: "is-medium" }, on: { click: function(t) { return e.close() } } }, [e._v("\n        " + e._s(e.$t("common.Cancel")) + "\n      ")]), e._v(" "), n("b-button", { attrs: { size: "is-medium", type: "is-primary" }, on: { click: function(t) { return e.setTitleAndDescription() } } }, [e._v("\n        " + e._s(e.$t("common.OK")) + "\n      ")])], 1)])])
                    };

                function Xi(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function Qi(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                Yi._withStripped = !0;
                var er = {
                        data: function() { return { displayTitleAndDescriptionDialog: !1, wheelTitle: "", wheelDescription: "" } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Xi(Object(n), !0).forEach((function(t) { Qi(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xi(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({}, (0, o.Se)(["wheelConfig"])),
                        methods: {
                            show: function() {
                                var e = this;
                                this.wheelTitle = this.wheelConfig.title, this.wheelDescription = this.wheelConfig.description, this.displayTitleAndDescriptionDialog = !0, setTimeout((function() { e.$refs.wheelTitleInput.focus() }), 100)
                            },
                            enterPressed: function(e) { e.preventDefault(), this.setTitleAndDescription() },
                            setTitleAndDescription: function() { this.$emit("setTitleAndDescription", { title: this.wheelTitle, description: this.wheelDescription }), this.close() },
                            close: function() { this.displayTitleAndDescriptionDialog = !1, this.wheelTitle = "", this.wheelDescription = "" }
                        }
                    },
                    tr = er,
                    nr = (0, A.Z)(tr, Yi, [], !1, null, null, null);
                nr.options.__file = "static/titleAndDescriptionDialog.vue";
                var ir = nr.exports,
                    rr = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("h3", { staticClass: "subtitle is-3", staticStyle: { "margin-bottom": "1rem" } }, [e._v(e._s(e.wheelTitle) + "\n    "), e.editable ? n("span", { staticClass: "is-size-5", staticStyle: { color: "#CCC" } }, [n("b-tooltip", { attrs: { label: e.$t("common.Edit title and description"), type: "is-light", position: "is-right" } }, [n("i", { staticClass: "fas fa-edit clickable-icon", on: { click: function(t) { return e.$emit("editTitleAndDescription") } } })])], 1) : e._e()]), e._v(" "), n("p", [e._v("\n    " + e._s(e.wheelDescription) + "\n  ")]), e._v(" "), n("br")])
                    };

                function ar(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function or(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                rr._withStripped = !0;
                var sr = {
                        props: { editable: Boolean },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ar(Object(n), !0).forEach((function(t) { or(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ar(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ wheelTitle: function() { return this.wheelConfig.title }, wheelDescription: function() { return this.wheelConfig.description } }, (0, o.Se)(["wheelConfig"])),
                        methods: {}
                    },
                    lr = sr,
                    cr = (n(11859), (0, A.Z)(lr, rr, [], !1, null, "3fc81f0a", null));
                cr.options.__file = "static/titleAndDescription.vue";
                var ur = cr.exports,
                    hr = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", [n("div", { staticClass: "columns is-mobile is-vcentered", staticStyle: { "padding-top": "24px", color: "#888" } }, [e._m(0), e._v(" "), n("div", { staticClass: "column is-narrow" }, [n("b-switch", { model: { value: e.sound, callback: function(t) { e.sound = t }, expression: "sound" } })], 1), e._v(" "), e._m(1)])])
                    };

                function dr(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function fr(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                hr._withStripped = !0;
                var mr = {
                        data: function() { return { sound: !0, duringSpinSoundVolume: 0, afterSpinSoundVolume: 0 } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? dr(Object(n), !0).forEach((function(t) { fr(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dr(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({}, (0, o.Se)(["wheelConfig"])),
                        watch: { sound: function(e) { e ? (l.L9("Wheel", "Unmute"), this.$store.commit("setVolumes", { duringSpinSoundVolume: this.duringSpinSoundVolume, afterSpinSoundVolume: this.afterSpinSoundVolume })) : (l.L9("Wheel", "Mute"), this.duringSpinSoundVolume = this.wheelConfig.duringSpinSoundVolume, this.afterSpinSoundVolume = this.wheelConfig.afterSpinSoundVolume, this.$store.commit("setVolumes", { duringSpinSoundVolume: 0, afterSpinSoundVolume: 0 })) } }
                    },
                    pr = mr,
                    gr = (0, A.Z)(pr, hr, [function() {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("div", { staticClass: "column has-text-right is-narrow", staticStyle: { "margin-right": "-10px" } }, [t("i", { staticClass: "fas fa-volume-mute", staticStyle: { "font-size": "150%" } })])
                    }, function() {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("div", { staticClass: "column is-narrow", staticStyle: { "margin-left": "-24px" } }, [t("i", { staticClass: "fas fa-volume-up", staticStyle: { "font-size": "150%" } })])
                    }], !1, null, null, null);
                gr.options.__file = "static/muteToggle.vue";
                var vr = gr.exports,
                    wr = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { ref: "overlay", staticClass: "animated-background" }, [n("div", { staticClass: "content" }, [n("p", { staticClass: "animated-text", staticStyle: { color: "#FFFFFF" } }, [e._v("\n      " + e._s(e.winnerText) + "\n    ")])])])
                    };
                wr._withStripped = !0;
                var br = {
                        data: function() { return { winnerText: "" } },
                        methods: {
                            show: function(e) {
                                var t = this;
                                e.text && (this.winnerText = e.text, this.$refs.overlay.style.display = "block", setTimeout((function() { t.$refs.overlay.style.display = "none" }), 6e3))
                            }
                        }
                    },
                    yr = (n(45649), (0, A.Z)(br, wr, [], !1, null, "ad0ed4dc", null));
                yr.options.__file = "static/winneranimation.vue";
                var kr, Cr, _r = yr.exports,
                    xr = n(39883);

                function Fr(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var Sr = function() {
                        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.pageLoadedTs = this.getNowTimestamp() }
                        var t, n;
                        return t = e, (n = [{ key: "reloadOutdatedPage", value: function(e) { e && this.getNowTimestamp() - this.pageLoadedTs > 1728e5 && location.reload(!0) } }, { key: "getNowTimestamp", value: function() { return (new Date).getTime() } }]) && Fr(t.prototype, n), e
                    }(),
                    Er = n(17152);

                function Dr(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function Ir(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { Dr(a, i, r, o, s, "next", e) }

                            function s(e) { Dr(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }
                i.Z.use(Er.Z);
                var Rr = new Er.Z({ locale: "en" });

                function Ar(e) { return Pr.apply(this, arguments) }

                function Pr() {
                    return (Pr = Ir(regeneratorRuntime.mark((function e(t) {
                        var i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) { e.next = 2; break }
                                    return e.abrupt("return");
                                case 2:
                                    return i = S.VX(t), e.next = 5, n(98908)("./".concat(i));
                                case 5:
                                    r = e.sent.default, Rr.setLocaleMessage(t, r), Rr.locale = t;
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function $r(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function Or(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

                function Tr(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }

                function Nr(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { Tr(a, i, r, o, s, "next", e) }

                            function s(e) { Tr(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    }
                }
                var jr = {
                        components: { toolbar: $, spinningwheel: G.Z, nameTabs: gt, opendialog: an, winnerdialog: Ji, savedialog: mn, optionsdialog: Yn, sharedialog: li, twitterdialog: mi, sheetdialog: ji, accountdialog: zi, winneranimation: _r, desktopAd: L, mobileAd: U, aboutCards: zt, titleAndDescription: ur, muteToggle: vr, titleAndDescriptionDialog: ir },
                        mounted: function() {
                            var e = this;
                            return Nr(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.$store.state.wheel.$t = e.translateMe, t.prev = 1, t.next = 4, Promise.all([Ar(e.$route.params.lang), e.$store.dispatch("loadInitialWheel", e.$route.params.sharedWheelPath)]);
                                        case 4:
                                            t.next = 10;
                                            break;
                                        case 6:
                                            t.prev = 6, t.t0 = t.catch(1), l.k5(t.t0), alert(t.t0);
                                        case 10:
                                            e.$store.dispatch("loadPreferences"), e.setDocLangAndTitle(), e.startFullscreenDetection(), e.startOnlineDetection(), e.startVisibilityDetection(), e.refreshWheelOnFontLoad();
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [1, 6]
                                ])
                            })))()
                        },
                        data: function() { return { waitAnimation: {} } },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? $r(Object(n), !0).forEach((function(t) { Or(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ wheelTitle: function() { if (this.wheelConfig.showTitle) return this.wheelConfig.title }, wheelDescription: function() { if (this.wheelConfig.showTitle) return this.wheelConfig.description }, locale: function() { return this.$i18n.locale } }, (0, o.Se)(["wheelConfig", "fullScreen", "wheelIsBusy", "darkMode", "wheelIsShared", "wheelIsCopyable"])),
                        watch: {
                            wheelConfig: function(e, t) {
                                l.cM(this.darkMode, "#777", this.wheelConfig.pageBackgroundColor),
                                    function(e, t) { try { $e(Te(e)), "ticking-sound" == e && $e("/ding.mp3"), $e(ke.find((function(e) { return e.value == t })).file) } catch (e) { l.k5(e) } }(e.duringSpinSound, e.afterSpinSound), this.setDocLangAndTitle()
                            },
                            darkMode: function() { l.cM(this.darkMode, "#777", this.wheelConfig.pageBackgroundColor) },
                            locale: function() { this.displayLanguageTip() }
                        },
                        methods: {
                            startFullscreenDetection: function() {
                                var e = this;
                                document.addEventListener("fullscreenchange", (function(t) { e.$store.commit("fullScreenChanged") }))
                            },
                            startOnlineDetection: function() {
                                var e = this;
                                window.addEventListener("online", (function(t) { e.$store.commit("setOnline", navigator.onLine) })), window.addEventListener("offline", (function(t) { e.$store.commit("setOnline", navigator.onLine) }))
                            },
                            startVisibilityDetection: function() {
                                var e = new Sr;
                                document.addEventListener("visibilitychange", (function() { e.reloadOutdatedPage(document.hidden) }))
                            },
                            displayLanguageTip: function() {
                                var e = this;
                                if (!this.wheelIsShared) {
                                    var t = S.uq(this.$i18n.locale, navigator.languages);
                                    t && setTimeout(Nr(regeneratorRuntime.mark((function i() {
                                        var r, a, o;
                                        return regeneratorRuntime.wrap((function(i) {
                                            for (;;) switch (i.prev = i.next) {
                                                case 0:
                                                    return r = S.VX(t), i.next = 3, n(98908)("./".concat(r));
                                                case 3:
                                                    a = i.sent.default, o = a.app["Click the Language menu"], e.showSnackbarMessage(o);
                                                case 6:
                                                case "end":
                                                    return i.stop()
                                            }
                                        }), i)
                                    }))), 3e3)
                                }
                            },
                            setDocLangAndTitle: function() {
                                document.documentElement.setAttribute("lang", this.$i18n.locale);
                                var e = this.wheelConfig.title;
                                document.title = e || "Wheel of Names | " + this.$t("app.Random name picker");
                                var t = this.$t("app.Free and easy to use");
                                document.querySelector('meta[name="description"]').setAttribute("content", t)
                            },
                            refreshWheelOnFontLoad: function() {
                                if (document.fonts) {
                                    var e = this;
                                    document.fonts.ready.then((function() { e.$refs.spinningwheel.refresh() }))
                                }
                            },
                            resetWheel: function() { this.$store.dispatch("resetWheel"), this.$refs.spinningwheel.resetRotation(), this.showSnackbarMessage(this.$t("app.Loaded default names and options")), this.resetAddressBar() },
                            openOpenDialog: function() { l.L9("Wheel", "ShowOpenDialog", ""), this.$refs.opendialog.show() },
                            openSaveDialog: function() { l.L9("Wheel", "ShowSaveDialog", ""), this.$refs.savedialog.show() },
                            openShareDialog: function() { l.L9("Wheel", "GetSharableLink", ""), this.$refs.sharedialog.show() },
                            openCustomizeDialog: function() { l.L9("Wheel", "ShowCustomizeDialog", ""), this.$refs.optionsdialog.show() },
                            openTwitterDialog: function() { l.L9("Wheel", "ShowSocialMediaDialog", ""), this.$refs.twitterdialog.show() },
                            openSheetDialog: function() { l.L9("Wheel", "ShowSpreadsheetDialog", ""), this.$refs.sheetdialog.show() },
                            openAccountDialog: function() { l.L9("Wheel", "ShowAccountDialog", ""), this.$refs.accountdialog.show() },
                            nameChanged: function() { this.wheelIsBusy && this.wheelConfig.shouldPlayTicks() && Ae("/ding.mp3", this.wheelConfig.duringSpinSoundVolume) },
                            wheelStarted: function() { De(this.wheelConfig.duringSpinSound, this.wheelConfig.duringSpinSoundVolume) },
                            wheelStopped: function(e) {
                                var t, n, i = this;
                                ve && ve.fade(we / 100, 0, 1e3), ve = null, this.$store.commit("addWinner", e), this.wheelConfig.animateWinner && this.$refs.winneranimation.show(e), this.wheelConfig.launchConfetti && (t = this.wheelConfig.getCoalescedColors(), Cr = t, kr = Date.now() + 5e3, n = setInterval((function() {
                                    if (Date.now() > kr) return clearInterval(n);
                                    (0, xr.Z)({ startVelocity: 30, particleCount: 100, spread: 360, ticks: 60, origin: { x: Math.random(), y: Math.random() - .2 }, colors: Cr })
                                }), 200)), this.wheelConfig.displayWinnerDialog && this.$refs.winnerdialog.show(e), this.wheelConfig.autoRemoveWinner && function() { i.$store.commit("setWheelBusy", !0), setTimeout((function(t) { return i.removeEntry(e) }), 5e3), setTimeout((function(e) { return i.$store.commit("setWheelBusy", !1) }), 5e3); for (var t = i.$buefy.toast.open({ message: i.$t("app.Removing winner in", { seconds: 5 }), duration: 5e3, queue: !1 }), n = function(e) { setTimeout((function(n) { return t.message = i.$t("app.Removing winner in", { seconds: e }) }), 1e3 * (5 - e)) }, r = 4; r > 0; r--) n(r) }(), xe(e.sound || this.wheelConfig.afterSpinSound, e.text, this.wheelConfig.afterSpinSoundVolume, this.$i18n.locale)
                            },
                            showSnackbarMessage: function(e) { this.$buefy.toast.open({ message: l.Xv(e), duration: 6e3 }) },
                            startWaitAnimation: function() { this.waitAnimation = this.$buefy.loading.open({ container: null }) },
                            stopWaitAnimation: function() { this.waitAnimation.close() },
                            removeEntry: function(e) {
                                this.wheelConfig.playClickWhenWinnerRemoved && _e(this.wheelConfig.afterSpinSoundVolume), this.$store.commit("removeEntry", e);
                                var t = this.$t("app.Removed", { name: e.text });
                                this.showSnackbarMessage(t)
                            },
                            removeEntryAll: function(e) {
                                this.wheelConfig.playClickWhenWinnerRemoved && _e(this.wheelConfig.afterSpinSoundVolume), this.$store.commit("removeEntryAll", e);
                                var t = this.$t("app.Removed", { name: e.text });
                                this.showSnackbarMessage(t)
                            },
                            hideEntry: function(e) { this.wheelConfig.playClickWhenWinnerRemoved && _e(this.wheelConfig.afterSpinSoundVolume), this.$store.commit("hideEntry", e) },
                            authError: function(e) {
                                var t = this.$t("app.authError", { error: e.toString() });
                                l.L9("AuthError", e.toString(), navigator.userAgent), this.$buefy.dialog.alert({ title: this.$t("app.Error"), message: t, type: "is-danger", hasIcon: !0, ariaRole: "alertdialog", ariaModal: !0, onConfirm: function() { return location.reload(!0) } })
                            },
                            resetWheelRotation: function() { this.$refs.spinningwheel.resetRotation() },
                            resetAddressBar: function() {
                                var e = S.qC(location.hostname, this.$i18n.locale);
                                window.history.replaceState({}, "", e)
                            },
                            translateMe: function(e) { return this.$t(e) },
                            setLocale: function(e) {
                                var t = this;
                                return Nr(regeneratorRuntime.mark((function n() {
                                    return regeneratorRuntime.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return t.$router.push("/".concat(l.ci(e))).catch((function(e) {})), n.next = 3, Ar(e);
                                            case 3:
                                                t.setDocLangAndTitle();
                                            case 4:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            createYourOwn: function() {
                                var e = this;
                                return Nr(regeneratorRuntime.mark((function t() {
                                    return regeneratorRuntime.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                e.$store.commit("setUnshared"), e.$nextTick(Nr(regeneratorRuntime.mark((function e() {
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, this.$store.dispatch("resetWheel");
                                                            case 2:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, this)
                                                })))), e.$router.push("/".concat(l.ci(e.$i18n.locale)));
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            copyWheel: function() { this.$store.commit("clearWinners"), this.$store.commit("setUnshared"), this.$router.push("/".concat(l.ci(this.$i18n.locale))) },
                            openTitleAndDescriptionDialog: function() { this.$refs.titleAndDescriptionDialog.show() },
                            setTitleAndDescription: function(e) { this.$store.commit("setWheelTitle", e.title), this.$store.commit("setWheelDescription", e.description) }
                        }
                    },
                    Wr = jr,
                    Br = (n(78374), (0, A.Z)(Wr, x, [], !1, null, null, null));
                Br.options.__file = "static/pages/wheelPage.vue";
                var Lr = Br.exports;

                function Mr(e, t, n, i, r, a, o) {
                    try {
                        var s = e[a](o),
                            l = s.value
                    } catch (e) { return void n(e) }
                    s.done ? t(l) : Promise.resolve(l).then(i, r)
                }
                var Vr = function() { return n.e(9628).then(n.bind(n, 62846)) };
                i.Z.use(_.Z);
                var zr = new _.Z({ mode: "history", routes: [{ path: "/faq.html", component: Vr }, { path: "/faq/:section?", component: Vr }, { path: "/:lang([a-z][a-z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)?", component: Lr }, { path: "/:lang([a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)?", component: Lr }, { path: "/:lang([a-z][a-z][a-z])", component: Lr }, { path: "/:lang([a-z][a-z][a-z])/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)?", component: Lr }, { path: "/view/:lang([a-z][a-z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)", component: Lr }, { path: "/view/:lang([a-z][a-z]-[A-Z][A-Z])?/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)", component: Lr }, { path: "/view/:lang([a-z][a-z][a-z])/:sharedWheelPath(\\w\\w\\w-\\w\\w\\w)", component: Lr }, { path: "/privacy-policy(.html)?", component: function() { return n.e(3702).then(n.bind(n, 74425)) } }, { path: "/export", component: function() { return n.e(6329).then(n.bind(n, 56553)) } }, { path: "/translate(.html)?", component: function() { return n.e(6827).then(n.bind(n, 94896)) } }, { path: "/how-to-use-in-the-classroom", component: function() { return n.e(8791).then(n.bind(n, 56150)) } }, { path: "/user-reviews-and-tutorials", component: function() { return n.e(4278).then(n.bind(n, 61557)) } }, { path: "/admin.html", component: function() { return n.e(5807).then(n.bind(n, 88026)) }, meta: { adminOnly: !0 } }, { path: "/carousel.html", component: function() { return n.e(3294).then(n.bind(n, 5895)) }, meta: { adminOnly: !0 } }, { path: "/robots.txt", component: Lr }, { path: "/*", component: function() { return n.e(2710).then(n.bind(n, 29639)) } }] });
                zr.beforeEach(function() {
                    var e, t = (e = regeneratorRuntime.mark((function e(t, n, i) {
                        var r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!t.matched[0].meta.adminOnly) { e.next = 13; break }
                                    return e.next = 4, v.W2();
                                case 4:
                                    return e.next = 6, v.qo();
                                case 6:
                                    return r = e.sent, e.next = 9, u.userIsAdmin(r);
                                case 9:
                                    e.sent ? i() : (alert("Please log in as an admin user."), i(!1)), e.next = 14;
                                    break;
                                case 13:
                                    i();
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) { Mr(a, i, r, o, s, "next", e) }

                            function s(e) { Mr(a, i, r, o, s, "throw", e) }
                            o(void 0)
                        }))
                    });
                    return function(e, n, i) { return t.apply(this, arguments) }
                }()), zr.afterEach((function(e, t) { ga("set", "page", e.path), ga("send", "pageview") }));
                var Ur = zr;
                n(26605), n.p, n.p, n.p, n.p, n.p, n.p, n.p, l.kP(), "serviceWorker" in navigator && window.addEventListener("load", (function() { navigator.serviceWorker.register("/service-worker.js") })), i.Z.use(r.ZP, { defaultIconPack: "fas" }), i.Z.use(a.Z, { breakpoints: { mobile: 900, desktop: 1 / 0 } });
                var Gr = Rr;
                Ar("en").then((function() { new i.Z({ router: Ur, i18n: Gr, store: C }).$mount("#app") }))
            },
            26938: function(e, t, n) {
                "use strict";
                n.p
            },
            31854: function() {},
            56773: function() {},
            61499: function() {},
            16851: function() {},
            71227: function() {},
            78724: function() {},
            83612: function() {},
            10793: function() {},
            62078: function() {},
            86860: function() {},
            52958: function() {},
            81842: function() {},
            86515: function() {},
            78374: function() {},
            2995: function() {},
            75063: function() {},
            11859: function() {},
            66795: function() {},
            24229: function() {},
            50020: function() {},
            45649: function() {},
            30253: function() {},
            51681: function(e, t, n) {
                "use strict";
                n.d(t, { Z: function() { return J } });
                var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "container", staticStyle: { "text-align": "center" } }, [n("canvas", { staticStyle: { width: "100%" }, attrs: { id: "wheelCanvas", width: "700", height: "700" }, on: { click: function(t) { return e.spin() } } }), e._v(" "), e.displayOverlayText ? n("wheelOverlayText", { on: { click: function(t) { return e.spin() } } }) : e._e()], 1)
                };

                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                i._withStripped = !0, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n(26938), n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p, n.p;
                var a = function() {
                        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.images = new Object, this.emptyImage = new Image, this.emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" }
                        var t, n;
                        return t = e, (n = [{ key: "addImage", value: function(e) { this.images[e] = new Image, this.images[e].src = e } }, { key: "getImage", value: function(e) { if (e) return e in this.images || e && this.addImage(e), this.images[e] && this.images[e].naturalHeight > 0 ? this.images[e] : this.emptyImage } }]) && r(t.prototype, n), e
                    }(),
                    o = n(12198),
                    s = n(98338);

                function l(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var c = function() {
                    function e(t, n, i, r, a, s, l) {
                        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.wheelConfig = t, this.radians = n, this.wheelRadius = i, this.hubRadius = r, this.displayText = o.El(s.text), this.customBackgoundColor = s.color, this.image = l;
                        var c = this.wheelConfig.getCoalescedColors();
                        this.color = c[a % c.length], this.wheelImages = {}
                    }
                    var t, n;
                    return t = e, (n = [{
                        key: "draw",
                        value: function(e) {
                            if (this.displayText || this.image || this.customBackgoundColor) {
                                if (e.save(), "image" == this.wheelConfig.type && this.drawImageWheelSlice(e), "color" == this.wheelConfig.type)
                                    if (this.image) {
                                        var t = s.pt(this.image);
                                        s.Qm(t) ? this.drawColorWheelWithTransparentImage(e) : this.drawColorWheelWithRegularImage(e)
                                    } else this.drawColorWheelWithNoImage(e);
                                e.restore()
                            }
                        }
                    }, { key: "drawImageWheelSlice", value: function(e) { f(e, this.radians / 2, this.wheelRadius, this.hubRadius, this.image), h(e, this.wheelRadius, this.displayText, { fill: "white", outline: "black" }), d(e, this.wheelConfig.drawOutlines, this.wheelRadius, this.radians) } }, {
                        key: "drawColorWheelWithNoImage",
                        value: function(e) {
                            var t;
                            this.customBackgoundColor ? (u(e, this.wheelRadius, this.radians, this.customBackgoundColor), t = { fill: m(this.customBackgoundColor), outline: "" }) : (u(e, this.wheelRadius, this.radians, this.color), t = { fill: m(this.color), outline: "" }), h(e, this.wheelRadius, this.displayText, t), d(e, this.wheelConfig.drawOutlines, this.wheelRadius, this.radians)
                        }
                    }, { key: "drawColorWheelWithTransparentImage", value: function(e) { this.customBackgoundColor ? u(e, this.wheelRadius, this.radians, this.customBackgoundColor) : u(e, this.wheelRadius, this.radians, this.color), f(e, this.radians / 2, this.wheelRadius, this.hubRadius, this.image), h(e, this.wheelRadius, this.displayText, { fill: "white", outline: "black" }), d(e, this.wheelConfig.drawOutlines, this.wheelRadius, this.radians) } }, {
                        key: "drawColorWheelWithRegularImage",
                        value: function(e) {
                            if (this.customBackgoundColor) u(e, this.wheelRadius, this.radians, this.customBackgoundColor);
                            else {
                                var t = s.pt(this.image);
                                u(e, this.wheelRadius, this.radians, t)
                            }
                            f(e, this.radians / 2, this.wheelRadius, this.hubRadius, this.image), h(e, this.wheelRadius, this.displayText, { fill: "white", outline: "black" }), d(e, this.wheelConfig.drawOutlines, this.wheelRadius, this.radians)
                        }
                    }]) && l(t.prototype, n), e
                }();

                function u(e, t, n, i) { e.beginPath(), e.moveTo(0, 0), e.arc(0, 0, t, -n / 2, n / 2), e.lineTo(0, 0), e.fillStyle = i, e.fill() }

                function h(e, t, n, i) { e.lineJoin = "round", e.textBaseline = "middle", e.textAlign = "end", i.outline && (e.lineWidth = 4, e.strokeStyle = i.outline, e.strokeText(" ".concat(n, " "), t, 0)), e.fillStyle = i.fill, e.fillText(" ".concat(n, " "), t, 0) }

                function d(e, t, n, i) { t && (e.beginPath(), e.moveTo(0, 0), e.arc(0, 0, n, -i / 2, i / 2), e.lineTo(0, 0), e.lineWidth = 1, e.strokeStyle = "#333333", e.stroke()) }

                function f(e, t, n, i, r) {
                    if (r) {
                        var a = function(e, t, n, i) { var r, a; for (r = t; r > 0 && (a = r * i, !o.pM(e, t, n, r, a)); r--); return { x: Math.max(a * Math.cos(e) / (2 * Math.sin(e)), n), y: -a / 2, w: r, h: a } }(t, n, i, r.height / r.width);
                        e.drawImage(r, a.x, a.y, a.w, a.h)
                    }
                }

                function m(e) {
                    if (!e) return "#000000";
                    var t = "#" === e.charAt(0) ? e.substring(1, 7) : e,
                        n = [parseInt(t.substring(0, 2), 16) / 255, parseInt(t.substring(2, 4), 16) / 255, parseInt(t.substring(4, 6), 16) / 255].map((function(e) { return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4) }));
                    return .2126 * n[0] + .7152 * n[1] + .0722 * n[2] > .179 ? "#000000" : "#FFFFFF"
                }
                var p = {};

                function g(e, t, n, i, r) {
                    var a = function(e, t, n, i) { var r = w(e, t, n, i); return p[r] }(t, n, i, r);
                    if (a) return a;
                    var o = 200,
                        s = "Quicksand, sans-serif";
                    t.forEach((function(t) {
                        var a = function(e, t, n, i, r, a) { return function(e, t, n, i, r, a, o, s) { for (var l; v(e, t, n, i / 2, a, (l = Math.round((o + s) / 2)) + "px Quicksand, sans-serif", l) ? o = l : s = l, !(Math.abs(s - o) < 2);); return l }(e, i, r, a, 0, t, 10, 200) }(e, t, 0, n, i, r);
                        a < o && (o = a)
                    }));
                    var l = o + "px " + s;
                    return function(e, t, n, i, r) {
                        var a = w(e, t, n, i);
                        p[a] = r
                    }(t, n, i, r, l), l
                }

                function v(e, t, n, i, r, a, s) {
                    if (!r) return !0;
                    e.font = a;
                    var l = e.measureText(" ".concat(o.El(r), " ")).width;
                    return o.pM(i, t, n, l, s)
                }

                function w(e, t, n, i) { var r = { texts: e, wheelRadius: t, hubRadius: n, smallestAngle: i }; return JSON.stringify(r) }
                var b = n(57982);

                function y(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var k = function() {
                    function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.imageCache = new a, this.entries = [], this.imageDataCache = {} }
                    var t, n;
                    return t = e, (n = [{ key: "draw", value: function(e, t, n, i, r, a) { this.angle = t, this.displayEntries = n, this.allEntries = i, this.wheelConfig = r, this.wheelRadius = .44 * e.canvas.width, this.hubRadius = this.getHubRadius(r.type, this.wheelRadius, r.hubSize), this.backgroundColor = a ? "#000" : r.pageBackgroundColor, this.drawShadows = o.SO(this.backgroundColor), this.drawBackgroundColor(e), this.drawWheelShadow(e), this.drawCoverImage(e), this.drawWheel(e), this.drawPointer(e), this.drawCenterImage(e), this.drawCoverPlate(e) } }, { key: "getHubRadius", value: function(e, t, n) { if ("image" == e) return 0; var i = b.q[n] || .2; return Math.round(i * t) } }, { key: "refresh", value: function() { this.wheelImage = null, this.pointerImage = null, this.coverPlateImage = null } }, { key: "drawBackgroundColor", value: function(e) { "#FFFFFF" != this.backgroundColor && (e.save(), e.fillStyle = this.backgroundColor, e.fillRect(0, 0, e.canvas.width, e.canvas.height), e.restore()) } }, { key: "drawWheelShadow", value: function(e) { this.drawShadows && (this.wheelShadowImage || (this.wheelShadowImage = s.lw(e), this.drawWheelShadowNoCache(this.wheelShadowImage.getContext("2d"))), e.drawImage(this.wheelShadowImage, 0, 0)) } }, {
                        key: "drawWheelShadowNoCache",
                        value: function(e) {
                            var t = e.canvas.width / 2,
                                n = e.canvas.height / 2,
                                i = e.createRadialGradient(t, n, this.wheelRadius, t, n + 4, this.wheelRadius + 8);
                            i.addColorStop(0, "#bbb"), i.addColorStop(1, "#fff"), e.fillStyle = i, e.fillRect(0, 0, e.canvas.width, e.canvas.height)
                        }
                    }, {
                        key: "drawWheel",
                        value: function(e) {
                            this.wheelImage || (this.wheelImage = s.lw(e), this.entries = this.displayEntries.slice(0), this.drawWheelNoCache(this.wheelImage.getContext("2d")));
                            var t = e.canvas.width,
                                n = e.canvas.height;
                            e.save(), e.translate(t / 2, n / 2), e.rotate(this.angle), e.translate(-t / 2, -n / 2), e.drawImage(this.wheelImage, 0, 0), e.restore()
                        }
                    }, { key: "drawWheelNoCache", value: function(e) { this.drawSlices(e), this.drawCenterCircle(e) } }, {
                        key: "drawCoverImage",
                        value: function(e) {
                            if ("color" != this.wheelConfig.type) {
                                var t = this.imageCache.getImage(this.wheelConfig.getCoverImage());
                                t && (e.save(), e.translate(e.canvas.width / 2, e.canvas.height / 2), e.rotate(this.angle), e.beginPath(), e.arc(0, 0, this.wheelRadius - 1, 0, 2 * Math.PI, !0), e.clip(), e.drawImage(t, -this.wheelRadius, -this.wheelRadius, 2 * this.wheelRadius, 2 * this.wheelRadius), e.restore())
                            }
                        }
                    }, {
                        key: "drawSlices",
                        value: function(e) {
                            e.save(), e.translate(e.canvas.width / 2, e.canvas.height / 2);
                            var t = this;
                            if (this.wheelConfig.isAdvanced) {
                                var n = o.zq(this.entries),
                                    i = [],
                                    r = 2 * Math.PI;
                                this.entries.forEach((function(e, t) { i[t] = 2 * Math.PI * e.weight / n, i[t] < r && (r = i[t]) })), e.font = g(e, this.allEntries.map((function(e) { return e.text })), this.wheelRadius, this.hubRadius, r), this.displayEntries.map((function(e, n) { return new c(t.wheelConfig, i[n], t.wheelRadius, t.hubRadius, n, e, t.getImageFromData(e.image)) })).forEach((function(t, n) {
                                    var r = i[n] / 2 + i[n + 1] / 2;
                                    t.draw(e), e.rotate(-r)
                                }))
                            } else {
                                var a = 2 * Math.PI / this.displayEntries.length;
                                e.font = g(e, this.allEntries.map((function(e) { return e.text })), this.wheelRadius, this.hubRadius, a), this.displayEntries.map((function(e, n) { return new c(t.wheelConfig, a, t.wheelRadius, t.hubRadius, n, e, t.getImageFromData(e.image)) })).forEach((function(t) { t.draw(e), e.rotate(-a) }))
                            }
                            e.restore()
                        }
                    }, { key: "drawCenterCircle", value: function(e) { "image" != this.wheelConfig.type && (e.save(), e.translate(e.canvas.width / 2, e.canvas.height / 2), e.fillStyle = "white", e.beginPath(), e.arc(0, 0, this.hubRadius, 0, 2 * Math.PI), e.fill(), this.wheelConfig.drawOutlines && (e.lineWidth = 2, e.strokeStyle = "#333333", e.stroke()), e.restore()) } }, { key: "drawPointer", value: function(e) { this.pointerImage || (this.pointerImage = s.lw(e), this.drawPointerNoCache(this.pointerImage.getContext("2d"))), e.drawImage(this.pointerImage, 0, 0) } }, { key: "drawPointerNoCache", value: function(e) { e.save(), e.translate(e.canvas.width / 2, e.canvas.height / 2), this.drawShadows && (e.shadowColor = "#444", e.shadowOffsetY = 4, e.shadowBlur = 10), e.beginPath(), e.moveTo(this.wheelRadius - 15, 0), e.lineTo(this.wheelRadius + 25, -20), e.lineTo(this.wheelRadius + 25, 20), e.lineTo(this.wheelRadius - 15, 0), this.wheelConfig.drawOutlines && (e.lineWidth = 2, e.strokeStyle = "#333333", e.stroke()), e.fillStyle = "#BBB", e.fill(), e.restore() } }, { key: "drawCoverPlate", value: function(e) { this.displayEntries.length != this.allEntries.length && (!this.coverPlateImage && this.displayEntries.length > 0 && (this.coverPlateImage = s.lw(e), this.drawCoverPlateNoCache(this.coverPlateImage.getContext("2d"))), this.coverPlateImage && e.drawImage(this.coverPlateImage, 0, 0)) } }, {
                        key: "drawCoverPlateNoCache",
                        value: function(e) {
                            var t = this.displayEntries.length,
                                n = Math.max(4 * Math.PI / t, Math.PI / 4);
                            e.save(), e.translate(e.canvas.width / 2, e.canvas.height / 2), e.scale(-1, 1), e.shadowColor = "#444", e.shadowOffsetY = 4, e.shadowBlur = 10, e.lineWidth = this.wheelRadius - this.hubRadius + 10;
                            var i = this.imageCache.getImage("/images/brushed-metal.png");
                            e.strokeStyle = e.createPattern(i, "repeat"), e.beginPath(), e.arc(0, 0, (this.wheelRadius + this.hubRadius) / 2, -n / 2, n / 2), e.stroke(), e.restore()
                        }
                    }, {
                        key: "drawCenterImage",
                        value: function(e) {
                            if ("image" != this.wheelConfig.type) {
                                var t = this.imageCache.getImage(this.wheelConfig.getWheelImage());
                                t && (e.save(), e.translate(e.canvas.width / 2, e.canvas.height / 2), e.rotate(this.angle), e.beginPath(), e.arc(0, 0, this.hubRadius - 1, 0, 2 * Math.PI, !0), e.clip(), e.drawImage(t, -this.hubRadius, -this.hubRadius, 2 * this.hubRadius, 2 * this.hubRadius), e.restore())
                            }
                        }
                    }, {
                        key: "getImageFromData",
                        value: function(e) {
                            if (e) {
                                if (!this.imageDataCache[e]) {
                                    var t = new Image,
                                        n = this;
                                    t.onload = function() { n.clearCachedWheelImage() }, t.setAttribute("crossOrigin", "anonymous"), t.src = e, this.imageDataCache[e] = t
                                }
                                return this.imageDataCache[e]
                            }
                        }
                    }, { key: "clearCachedWheelImage", value: function() { this.wheelImage = null } }]) && y(t.prototype, n), e
                }();

                function C(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var _ = function() {
                    function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.array = t.slice(0), this.length = t.length, this.elementJsonCache = null }
                    var t, n;
                    return t = e, (n = [{ key: "getElement", value: function(e) { for (; e < 0;) e += this.array.length; for (; e >= this.array.length;) e -= this.array.length; return this.array[e] } }, {
                        key: "setElement",
                        value: function(e, t) {
                            for (; e < 0;) e += this.array.length;
                            for (; e >= this.array.length;) e -= this.array.length;
                            this.array[e] = t, this.elementJsonCache = null
                        }
                    }, { key: "getArray", value: function() { return this.array } }, { key: "slice", value: function(e, t) { for (var n = [], i = e; i < t; i++) n.push(this.getElement(i)); return n } }, {
                        key: "getNextElement",
                        value: function(e) {
                            this.elementJsonCache || (this.elementJsonCache = this.getElementJson());
                            var t = JSON.stringify(e),
                                n = this.elementJsonCache.findIndex((function(e) { return e == t }));
                            return this.getElement(n + 1)
                        }
                    }, { key: "getElementJson", value: function() { return this.array.map((function(e) { return JSON.stringify(e) })) } }]) && C(t.prototype, n), e
                }();

                function x(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var F = function() {
                    function e(t, n, i) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.startIndex = t, this.endIndex = n, this.length = i, this.index = this.startIndex }
                    var t, n;
                    return t = e, (n = [{ key: "isDone", value: function() { return this.index == this.endIndex } }, { key: "getIndex", value: function() { return this.index } }, { key: "increment", value: function() { this.index += 1, this.index >= this.length && (this.index -= this.length) } }]) && x(t.prototype, n), e
                }();

                function S(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var E = function() {
                    function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.allEntries = new _([]), this.maxSlices = 1e6, this.prevIndexAtPointer = -1, this.displayEntries = new _([]) }
                    var t, n;
                    return t = e, (n = [{ key: "setEntries", value: function(e, t, n) { this.maxSlices = t, this.allEntries = new _(o.MC(n, e)), this.allEntries.length <= t || this.entriesHaveUnequalWeight(e) ? this.displayEntries = this.allEntries : this.displayEntries = new _(this.allEntries.slice(0, t)) } }, { key: "getDisplayEntries", value: function() { return this.displayEntries.getArray() } }, { key: "getNumberOfDisplayEntries", value: function() { return this.getDisplayEntries().length } }, { key: "getAllEntries", value: function() { return this.allEntries.getArray() } }, {
                        key: "tick",
                        value: function(e) {
                            if (this.maxSlices >= this.allEntries.length) return !1;
                            if (e == this.prevIndexAtPointer) return !1;
                            for (var t = new F(this.prevIndexAtPointer, e, this.displayEntries.length); !t.isDone();) {
                                t.increment();
                                var n = t.getIndex(),
                                    i = Math.floor(n + this.maxSlices / 2) % this.maxSlices,
                                    r = this.displayEntries.getElement(i - 1),
                                    a = this.allEntries.getNextElement(r);
                                this.displayEntries.setElement(i, a)
                            }
                            return this.prevIndexAtPointer = e, !0
                        }
                    }, { key: "entriesHaveUnequalWeight", value: function(e) { return !(0 == e.length || !e[0].weight) && e.find((function(e) { return 1 != e.weight })) } }, {
                        key: "setRandomPosition",
                        value: function() {
                            if (this.maxSlices < this.allEntries.length) {
                                var e = o.XF(0, this.allEntries.length - 1);
                                this.displayEntries = new _(this.allEntries.slice(e, e + this.maxSlices))
                            }
                        }
                    }]) && S(t.prototype, n), e
                }();

                function D(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

                function I(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                function R(e, t, n) { return t && I(e.prototype, t), n && I(e, n), e }
                var A = function() {
                        function e() { D(this, e), this.angle = 0, this.speed = 0, this.state = new P(this), this.wheelPainter = new k, this.entryPicker = new E, this.doneSpinningCallback = function() {}, this.nameChangedCallback = function() {} }
                        return R(e, [{
                            key: "setEntries",
                            value: function(e, t, n) {
                                if (!this.state.isSpinning()) {
                                    var i = e.filter((function(e) { return e.enabled || !e.hasOwnProperty("enabled") }));
                                    this.entryPicker.setEntries(i, t, n), this.wheelPainter.refresh()
                                }
                            }
                        }, { key: "refresh", value: function() { this.wheelPainter.refresh() } }, { key: "configure", value: function(e, t) { this.state.isSpinning() || (this.wheelConfig = e, this.darkMode = t, this.wheelPainter.refresh()) } }, { key: "tick", value: function() { this.state.tick(this), this.advance(), this.entryPicker.tick(this.getIndexAtPointer()) && this.wheelPainter.refresh() } }, { key: "click", value: function(e, t) { this.nameChangedCallback = e, this.doneSpinningCallback = t, this.state.click(this) } }, { key: "spinIsDone", value: function() { this.doneSpinningCallback(this.getEntryAtPointer()) } }, { key: "isSpinning", value: function() { return this.state.isSpinning() } }, { key: "setRandomPosition", value: function() { this.angle = 2 * Math.random() * Math.PI, this.entryPicker.setRandomPosition() } }, { key: "advance", value: function() { this.indexFromLastTick = this.indexFromThisTick, this.indexFromThisTick = this.getIndexAtPointer(), this.indexFromThisTick != this.indexFromLastTick && this.nameChangedCallback(), this.angle += this.speed, this.angle > 2 * Math.PI && (this.angle -= 2 * Math.PI) } }, { key: "getIndexAtPointer", value: function() { return o.LR(this.entryPicker.getDisplayEntries(), this.angle) } }, { key: "getEntryAtPointer", value: function() { return this.entryPicker.getDisplayEntries()[this.getIndexAtPointer()] } }, { key: "resetRotation", value: function() { this.angle = 0 } }, {
                            key: "getStateTimeLengths",
                            value: function() {
                                var e = { accelerating: 0, decelerating: 0 },
                                    t = 60 * this.wheelConfig.spinTime;
                                return e.accelerating = Math.min(60, t / 3), e.decelerating = t - e.accelerating, e
                            }
                        }, { key: "draw", value: function(e) { this.wheelConfig && this.state.drawThisFrame() && this.wheelPainter.draw(e, this.angle, this.entryPicker.getDisplayEntries(), this.entryPicker.getAllEntries(), this.wheelConfig, this.darkMode) } }]), e
                    }(),
                    P = function() {
                        function e(t) { D(this, e), t.speed = .005 }
                        return R(e, [{ key: "tick", value: function(e) {} }, { key: "click", value: function(e) { e.state = new $(e) } }, { key: "isSpinning", value: function() { return !1 } }, { key: "drawThisFrame", value: function() { return !0 } }]), e
                    }(),
                    $ = function() {
                        function e(t) { D(this, e), this.age = 0, this.MAX_AGE = t.getStateTimeLengths().accelerating }
                        return R(e, [{
                            key: "tick",
                            value: function(e) {
                                var t = e.wheelConfig.slowSpin ? .001 : .01;
                                e.speed += t, this.age += 1, this.age > this.MAX_AGE && (e.setRandomPosition(), e.state = new O(e))
                            }
                        }, { key: "click", value: function(e) {} }, { key: "isSpinning", value: function() { return !0 } }, { key: "drawThisFrame", value: function() { return !0 } }]), e
                    }(),
                    O = function() {
                        function e(t) {
                            D(this, e), this.age = 0, this.MAX_AGE = t.getStateTimeLengths().decelerating;
                            var n = this.MAX_AGE,
                                i = t.speed;
                            this.deceleration = Math.exp(Math.log(15e-5 / i) / n)
                        }
                        return R(e, [{ key: "tick", value: function(e) { e.speed = e.speed * this.deceleration, this.age += 1, this.age > this.MAX_AGE && (e.state = new T(e)) } }, { key: "click", value: function(e) {} }, { key: "isSpinning", value: function() { return !0 } }, { key: "drawThisFrame", value: function() { return !0 } }]), e
                    }(),
                    T = function() {
                        function e(t) { D(this, e), t.speed = 0, t.spinIsDone() }
                        return R(e, [{ key: "tick", value: function(e) {} }, { key: "click", value: function(e) { e.state = new $(e) } }, { key: "isSpinning", value: function() { return !1 } }, { key: "drawThisFrame", value: function() { return !0 } }]), e
                    }(),
                    N = function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", { on: { click: function(t) { return e.$emit("click") } } }, [e.isTouchScreen ? e._e() : n("div", { ref: "instructionsLayer", attrs: { id: "instructionsLayer" } }, [n("div", { staticClass: "instructionsText", staticStyle: { "padding-top": "20%" }, attrs: { id: "topInstruction" } }, [e._v("\n      " + e._s(e.$t("spinningwheel.Click to spin")) + "\n    ")]), e._v(" "), e.isSafari ? e._e() : n("div", { staticClass: "instructionsText", staticStyle: { "padding-top": "60%" }, attrs: { id: "bottomInstruction" } }, [e._v("\n      " + e._s(e.$t("spinningwheel.or press ctrl+enter")) + "\n    ")])]), e._v(" "), e.isTouchScreen ? n("div", { ref: "instructionsLayer", attrs: { id: "instructionsLayer" } }, [n("div", { staticClass: "instructionsText", staticStyle: { "padding-top": "20%" }, attrs: { id: "topInstruction" } }, [e._v("\n      " + e._s(e.$t("spinningwheel.Tap to spin")) + "\n    ")])]) : e._e()])
                    };
                N._withStripped = !0;
                var j = n(49310),
                    W = n.n(j),
                    B = {
                        data: function() { return { isTouchScreen: !1 } },
                        mounted: function() { this.isTouchScreen = o.zw(), this.setupOverlay() },
                        computed: { isSafari: function() { return !!window.safari } },
                        methods: {
                            setupOverlay: function() {
                                var e = document.getElementById("wheelCanvas").offsetWidth,
                                    t = "".concat(Math.round(e / 20), "px");
                                if (document.getElementById("instructionsLayer").style.fontSize = t, !this.cantBeDisplayedInCircleType(this.$i18n.locale)) {
                                    var n = e / 3;
                                    new(W())(document.getElementById("topInstruction")).radius(n), document.getElementById("bottomInstruction") && new(W())(document.getElementById("bottomInstruction")).radius(n).dir(-1)
                                }
                            },
                            cantBeDisplayedInCircleType: function(e) { return ["ar", "bn", "fa", "gu", "he", "hi", "ta"].includes(e) }
                        }
                    },
                    L = (n(50020), n(51900)),
                    M = (0, L.Z)(B, N, [], !1, null, "136d4c25", null);
                M.options.__file = "static/wheelOverlayText.vue";
                var V = M.exports;

                function z(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                var U = function() {
                    function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.lastFrameTimeMs = 0, this.delta = 0, this.timestep = 1e3 / 60 }
                    var t, n;
                    return t = e, (n = [{ key: "setTimestamp", value: function(e) { 0 == this.lastFrameTimeMs ? this.delta = this.timestep : this.delta += e - this.lastFrameTimeMs, this.lastFrameTimeMs = e } }, { key: "shouldTick", value: function() { var e = this.delta >= this.timestep; return e && (this.delta -= this.timestep), e } }]) && z(t.prototype, n), e
                }();

                function G(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                    }
                    return n
                }

                function H(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                var q = {
                        components: { wheelOverlayText: V },
                        data: function() { return { myWheel: {}, myTicker: new U, displayOverlayText: !0, animationFrameID: void 0 } },
                        mounted: function() { this.myWheel = new A, this.myWheel.configure(this.wheelConfig, this.darkMode), this.myWheel.setEntries(this.wheelConfig.entries, this.wheelConfig.maxNames, this.wheelConfig.allowDuplicates), this.tick(0), this.startKeyListener() },
                        destroyed: function() { window.cancelAnimationFrame(this.animationFrameID), this.animationFrameID = void 0 },
                        computed: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? G(Object(n), !0).forEach((function(t) { H(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                            }
                            return e
                        }({ entries: function() { return this.wheelConfig.entries }, hasEntries: function() { return this.entries.length > 0 }, locale: function() { return this.$i18n.locale } }, (0, n(20629).Se)(["wheelConfig", "darkMode", "version", "wheelIsBusy"])),
                        watch: { wheelConfig: function(e, t) { this.myWheel.configure(this.wheelConfig, this.darkMode) }, darkMode: function() { this.myWheel.configure(this.wheelConfig, this.darkMode) }, entries: function(e, t) { this.myWheel.setEntries(e, this.wheelConfig.maxNames, this.wheelConfig.allowDuplicates) }, locale: function(e, t) { this.destroyAndRecreateOverlayText() } },
                        methods: {
                            startKeyListener: function() {
                                if (!o.zw()) {
                                    var e = this;
                                    document.addEventListener("keyup", (function(t) { "Enter" == t.key && t.ctrlKey && e.spin() }))
                                }
                            },
                            destroyAndRecreateOverlayText: function() {
                                var e = this;
                                this.displayOverlayText = !1, this.$nextTick((function() { return e.displayOverlayText = !0 }))
                            },
                            spin: function() { this.hasEntries && (this.wheelIsBusy || (this.$store.commit("setWheelBusy", !0), this.displayOverlayText = !1, this.trackInGoogleAnalytics(), this.$emit("wheel-started"), this.myWheel.click(this.onNameChanged, this.onStopWheelSpin))) },
                            onNameChanged: function() { this.$emit("name-changed") },
                            onStopWheelSpin: function(e) { this.$store.commit("setWheelBusy", !1), this.$emit("wheel-stopped", e) },
                            trackInGoogleAnalytics: function() {
                                var e = this.version;
                                this.wheelConfig.hasOnlyDefaultEntries() ? o.L9("Wheel", "SpinWithDefaultNames", e) : o.L9("Wheel", "SpinWithCustomNames", e)
                            },
                            tick: function(e) {
                                var t = document.getElementById("wheelCanvas");
                                if (t) {
                                    for (this.myTicker.setTimestamp(e); this.myTicker.shouldTick();) this.myWheel.tick();
                                    var n = t.getContext("2d");
                                    this.myWheel.draw(n)
                                }
                                this.animationFrameID = requestAnimationFrame(this.tick)
                            },
                            resetRotation: function() { this.myWheel.resetRotation() },
                            refresh: function() { this.myWheel.refresh() }
                        }
                    },
                    Z = q,
                    K = (n(2995), (0, L.Z)(Z, i, [], !1, null, "78fb99d2", null));
                K.options.__file = "static/spinningwheel.vue";
                var J = K.exports
            },
            98908: function(e, t, n) {
                var i = { "./ar-EG": [98849, 5314], "./ar-EG.json": [98849, 5314], "./az-Latn-AZ": [38392, 2511], "./az-Latn-AZ.json": [38392, 2511], "./bg-BG": [35768, 1746], "./bg-BG.json": [35768, 1746], "./bn-IN": [80083, 5038], "./bn-IN.json": [80083, 5038], "./bs-Latn-BA": [32060, 764], "./bs-Latn-BA.json": [32060, 764], "./ca-ES": [41405, 9633], "./ca-ES.json": [41405, 9633], "./cs-CZ": [90712, 5662], "./cs-CZ.json": [90712, 5662], "./cy-GB": [68148, 1286], "./cy-GB.json": [68148, 1286], "./da-DK": [20722, 225], "./da-DK.json": [20722, 225], "./de-DE": [97859, 7174], "./de-DE.json": [97859, 7174], "./el-GR": [95204, 3577], "./el-GR.json": [95204, 3577], "./en-PI": [74710, 6124], "./en-PI.json": [74710, 6124], "./en-US": [45821, 9758], "./en-US.json": [45821, 9758], "./es-ES": [30701, 958], "./es-ES.json": [30701, 958], "./et-EE": [55126, 72], "./et-EE.json": [55126, 72], "./fa-IR": [42272, 7788], "./fa-IR.json": [42272, 7788], "./fi-FI": [86117, 3107], "./fi-FI.json": [86117, 3107], "./fil-PH": [1108, 2691], "./fil-PH.json": [1108, 2691], "./fr-FR": [68586, 6462], "./fr-FR.json": [68586, 6462], "./gl-ES": [51809, 863], "./gl-ES.json": [51809, 863], "./gu-IN": [43927, 2942], "./gu-IN.json": [43927, 2942], "./he-IL": [70194, 1974], "./he-IL.json": [70194, 1974], "./hi-IN": [11269, 1382], "./hi-IN.json": [11269, 1382], "./hr-HR": [27920, 1713], "./hr-HR.json": [27920, 1713], "./hu-HU": [51788, 8714], "./hu-HU.json": [51788, 8714], "./hy-AM": [14889, 7036], "./hy-AM.json": [14889, 7036], "./id-ID": [46178, 3588], "./id-ID.json": [46178, 3588], "./it-IT": [71918, 1503], "./it-IT.json": [71918, 1503], "./ja-JP": [79660, 1838], "./ja-JP.json": [79660, 1838], "./ka-GE": [56401, 9689], "./ka-GE.json": [56401, 9689], "./kk-KZ": [14009, 162], "./kk-KZ.json": [14009, 162], "./ko-KR": [8336, 2394], "./ko-KR.json": [8336, 2394], "./lo-LA": [55314, 7462], "./lo-LA.json": [55314, 7462], "./lt-LT": [4185, 7343], "./lt-LT.json": [4185, 7343], "./lv-LV": [20649, 674], "./lv-LV.json": [20649, 674], "./mk-MK": [59866, 265], "./mk-MK.json": [59866, 265], "./mn-MN": [9970, 5261], "./mn-MN.json": [9970, 5261], "./ms-MY": [6316, 7931], "./ms-MY.json": [6316, 7931], "./nb-NO": [56060, 4966], "./nb-NO.json": [56060, 4966], "./nl-NL": [15670, 7359], "./nl-NL.json": [15670, 7359], "./pl-PL": [48421, 8793], "./pl-PL.json": [48421, 8793], "./pt-PT": [41083, 5431], "./pt-PT.json": [41083, 5431], "./ro-RO": [44182, 154], "./ro-RO.json": [44182, 154], "./ru-RU": [95362, 6979], "./ru-RU.json": [95362, 6979], "./sl-SI": [15361, 3977], "./sl-SI.json": [15361, 3977], "./sq-AL": [38638, 6205], "./sq-AL.json": [38638, 6205], "./sr-Latn-RS": [41846, 4798], "./sr-Latn-RS.json": [41846, 4798], "./sv-SE": [24599, 6674], "./sv-SE.json": [24599, 6674], "./ta-IN": [7552, 512], "./ta-IN.json": [7552, 512], "./th-TH": [87138, 9877], "./th-TH.json": [87138, 9877], "./tr-TR": [78972, 9130], "./tr-TR.json": [78972, 9130], "./uk-UA": [21882, 7091], "./uk-UA.json": [21882, 7091], "./vi-VN": [24088, 7881], "./vi-VN.json": [24088, 7881], "./zh-CN": [50274, 7449], "./zh-CN.json": [50274, 7449], "./zh-HK": [51189, 7198], "./zh-HK.json": [51189, 7198] };

                function r(e) {
                    if (!n.o(i, e)) return Promise.resolve().then((function() { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t }));
                    var t = i[e],
                        r = t[0];
                    return n.e(t[1]).then((function() { return n.t(r, 19) }))
                }
                r.keys = function() { return Object.keys(i) }, r.id = 98908, e.exports = r
            }
        },
        o = {};

    function s(e) {
        var t = o[e];
        if (void 0 !== t)
            return t.exports;
        var n = o[e] = { id: e, loaded: !1, exports: {} };
        return a[e].call(n.exports, n, n.exports, s), n.loaded = !0, n.exports
    }
    s.m = a, s.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, e = [], s.O = function(t, n, i, r) {
        if (!n) {
            var a = 1 / 0;
            for (u = 0; u < e.length; u++) {
                n = e[u][0], i = e[u][1], r = e[u][2];
                for (var o = !0, l = 0; l < n.length; l++)(!1 & r || a >= r) && Object.keys(s.O).every((function(e) { return s.O[e](n[l]) })) ? n.splice(l--, 1) : (o = !1, r < a && (a = r));
                if (o) {
                    e.splice(u--, 1);
                    var c = i();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        r = r || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
        e[u] = [n, i, r]
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, { a: t }), t
    }, n = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) { return e.__proto__ }, s.t = function(e, i) {
        if (1 & i && (e = this(e)), 8 & i) return e;
        if ("object" == typeof e && e) {
            if (4 & i && e.__esModule) return e;
            if (16 & i && "function" == typeof e.then) return e
        }
        var r = Object.create(null);
        s.r(r);
        var a = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var o = 2 & i && e;
            "object" == typeof o && !~t.indexOf(o); o = n(o)) Object.getOwnPropertyNames(o).forEach((function(t) {
            a[t] = function() { return e[t] }
        }));
        return a.default = function() {
            return e
        }, s.d(r, a), r
    }, s.d = function(e, t) {
        for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, s.f = {}, s.e = function(e) {
        return Promise.all(Object.keys(s.f).reduce((function(t, n) {
            return s.f[n](e, t), t
        }), []))
    }, s.u = function(e) {
        return {
            72: "locale-et-EE",
            154: "locale-ro-RO",
            162: "locale-kk-KZ",
            225: "locale-da-DK",
            265: "locale-mk-MK",
            512: "locale-ta-IN",
            674: "locale-lv-LV",
            764: "locale-bs-Latn-BA",
            863: "locale-gl-ES",
            958: "locale-es-ES",
            1286: "locale-cy-GB",
            1326: "firebase",
            1382: "locale-hi-IN",
            1503: "locale-it-IT",
            1713: "locale-hr-HR",
            1746: "locale-bg-BG",
            1838: "locale-ja-JP",
            1974: "locale-he-IL",
            2394: "locale-ko-KR",
            2511: "locale-az-Latn-AZ",
            2691: "locale-fil-PH",
            2710: "notFoundPage",
            2942: "locale-gu-IN",
            3107: "locale-fi-FI",
            3294: "carouselPage",
            3577: "locale-el-GR",
            3588: "locale-id-ID",
            3702: "privacyPolicyPage",
            3977: "locale-sl-SI",
            4278: "tutorialsPage",
            4451: "vibrant",
            4798: "locale-sr-Latn-RS",
            4966: "locale-nb-NO",
            5038: "locale-bn-IN",
            5261: "locale-mn-MN",
            5314: "locale-ar-EG",
            5431: "locale-pt-PT",
            5662: "locale-cs-CZ",
            5807: "wheelReviewPage",
            6124: "locale-en-PI",
            6205: "locale-sq-AL",
            6329: "exportPage",
            6462: "locale-fr-FR",
            6674: "locale-sv-SE",
            6827: "translationsPage",
            6900: "howler",
            6979: "locale-ru-RU",
            7036: "locale-hy-AM",
            7091: "locale-uk-UA",
            7174: "locale-de-DE",
            7198: "locale-zh-HK",
            7343: "locale-lt-LT",
            7359: "locale-nl-NL",
            7449: "locale-zh-CN",
            7462: "locale-lo-LA",
            7788: "locale-fa-IR",
            7881: "locale-vi-VN",
            7931: "locale-ms-MY",
            8714: "locale-hu-HU",
            8791: "classroomPage",
            8793: "locale-pl-PL",
            9130: "locale-tr-TR",
            9628: "faqPage",
            9633: "locale-ca-ES",
            9689: "locale-ka-GE",
            9758: "locale-en-US",
            9877: "locale-th-TH"
        }[e] + "-" + {
            72: "f3ef24b88409f125b93d",
            154: "99c809a8be744c162da8",
            162: "06d1bc8068a04c51bc9f",
            225: "a8fb77dd5109047c4be4",
            265: "45000e47d0ff99214bfd",
            512: "83926a14967961825dea",
            674: "de4855250decd27c1ecc",
            764: "8e32c86e8622e137070d",
            863: "512234d00b9c771086f1",
            958: "94c8daa293645cb73c47",
            1286: "95d1733141bc2640dcf3",
            1326: "2202a0964a7556a1cc31",
            1382: "f60b0631f4fbddfa7f74",
            1503: "1aedeb37cdb80a6e8b91",
            1713: "c7c97ee48e5e90544111",
            1746: "9a0aa344b5a141f45c25",
            1838: "2a2df64361e616bdf1c8",
            1974: "2231377f20bbd9bafbed",
            2394: "ca7d315d8249d6a474df",
            2511: "5bdc926d85fb89c833b5",
            2691: "89fe40465ce8a6951830",
            2710: "1e2c4171e133547b6e65",
            2942: "21815335bf277cdca753",
            3107: "5fe7593b0c4174da67df",
            3294: "cc741a58771ed05459f4",
            3577: "ecca3863634c05d4fe9d",
            3588: "108f3d7246c19207d23b",
            3702: "a42718b06a4f4627efea",
            3977: "bf08c8436b37fff80d20",
            4278: "37046b3548e9bacdd98f",
            4451: "6911cc89d10ca26fc110",
            4798: "6702eef6d6efe6f35653",
            4966: "f001577c0bed1f2a4c98",
            5038: "4a15783e9114c3f9f4bd",
            5261: "9563c9340b606bcc8d27",
            5314: "9671c8d3c24073339a98",
            5431: "6ec4234459cf3f2894cb",
            5662: "60f496d65dcd358614ab",
            5807: "52e3b925b2c571667ded",
            6124: "35c37348d24910988bdd",
            6205: "49d3c9ccdf638545b0be",
            6329: "e3172d0567b31ba33743",
            6462: "66f250b28d62902584b4",
            6674: "eaff71fa0419dee779c1",
            6827: "cc763c9f7b95e9beabca",
            6900: "239d5fce63d4d3e991f8",
            6979: "734c2a9b7a68668def4f",
            7036: "e3e0ab1289bdc310ff71",
            7091: "8b2233e66bef244d1b24",
            7174: "2006f9562ca5f84f036e",
            7198: "b5c2423b170dfb8044c8",
            7343: "ce8ddc636c91dabcfb85",
            7359: "772c23356860bac8f56e",
            7449: "adae0675b65d1fefa05f",
            7462: "909bc11425a5dc73f0f7",
            7788: "8f3ba313d203bcf9a461",
            7881: "363ed0ea350dd39921f5",
            7931: "7c34d200cbf0d1d132a2",
            8714: "9ccda29445ff3bc986d4",
            8791: "93339e1be5ab9614e1e7",
            8793: "474b96728286693fd99b",
            9130: "4ad7577b45a5871c1dee",
            9628: "dcf189bc427ac2e798e4",
            9633: "021ca6369865890140eb",
            9689: "9800f52bdaf1071d9e5a",
            9758: "526a30a98df4e4caf11a",
            9877: "73ebf9041b22788afb7a"
        }[e] + ".js"
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {

            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i = {}, r = "wheel-of-names:", s.l = function(e, t, n, a) {
        if (i[e]) i[e].push(t);
        else {
            var o, l;
            if (void 0 !== n)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var h = c[u];
                    if (h.getAttribute("src") == e || h.getAttribute("data-webpack") == r + n) { o = h; break }
                }
            o || (l = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, s.nc && o.setAttribute("nonce", s.nc), o.setAttribute("data-webpack", r + n), o.src = e), i[e] = [t];
            var d = function(t, n) { o.onerror = o.onload = null, clearTimeout(f); var r = i[e]; if (delete i[e], o.parentNode && o.parentNode.removeChild(o), r && r.forEach((function(e) { return e(n) })), t) return t(n) },
                f = setTimeout(d.bind(null, void 0, { type: "timeout", target: o }), 12e4);
            o.onerror = d.bind(null, o.onerror), o.onload = d.bind(null, o.onload), l && document.head.appendChild(o)
        }
    }, s.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, s.nmd = function(e) { return e.paths = [], e.children || (e.children = []), e }, s.j = 4826, s.p = "/";
    var l = { 4826: 0, 696: 0 };
    s.f.compat = function(e, t) {
            l[e] ? t.push(l[e]) : 0 !== l[e] && {
                2710: 1,
                3294: 1,
                5807: 1,
                9628: 1
            }[e] && t.push(l[e] = new Promise((function(t, n) {
                for (var i = "css/" + ({
                        72: "locale-et-EE",
                        154: "locale-ro-RO",
                        162: "locale-kk-KZ",
                        225: "locale-da-DK",
                        265: "locale-mk-MK",
                        512: "locale-ta-IN",
                        674: "locale-lv-LV",
                        764: "locale-bs-Latn-BA",
                        863: "locale-gl-ES",
                        958: "locale-es-ES",
                        1286: "locale-cy-GB",
                        1326: "firebase",
                        1382: "locale-hi-IN",
                        1503: "locale-it-IT",
                        1713: "locale-hr-HR",
                        1746: "locale-bg-BG",
                        1838: "locale-ja-JP",
                        1974: "locale-he-IL",
                        2394: "locale-ko-KR",
                        2511: "locale-az-Latn-AZ",
                        2691: "locale-fil-PH",
                        2710: "notFoundPage",
                        2942: "locale-gu-IN",
                        3107: "locale-fi-FI",
                        3294: "carouselPage",
                        3577: "locale-el-GR",
                        3588: "locale-id-ID",
                        3702: "privacyPolicyPage",
                        3977: "locale-sl-SI",
                        4278: "tutorialsPage",
                        4451: "vibrant",
                        4798: "locale-sr-Latn-RS",
                        4966: "locale-nb-NO",
                        5038: "locale-bn-IN",
                        5261: "locale-mn-MN",
                        5314: "locale-ar-EG",
                        5431: "locale-pt-PT",
                        5662: "locale-cs-CZ",
                        5807: "wheelReviewPage",
                        6124: "locale-en-PI",
                        6205: "locale-sq-AL",
                        6329: "exportPage",
                        6462: "locale-fr-FR",
                        6674: "locale-sv-SE",
                        6827: "translationsPage",
                        6900: "howler",
                        6979: "locale-ru-RU",
                        7036: "locale-hy-AM",
                        7091: "locale-uk-UA",
                        7174: "locale-de-DE",
                        7198: "locale-zh-HK",
                        7343: "locale-lt-LT",
                        7359: "locale-nl-NL",
                        7449: "locale-zh-CN",
                        7462: "locale-lo-LA",
                        7788: "locale-fa-IR",
                        7881: "locale-vi-VN",
                        7931: "locale-ms-MY",
                        8714: "locale-hu-HU",
                        8791: "classroomPage",
                        8793: "locale-pl-PL",
                        9130: "locale-tr-TR",
                        9628: "faqPage",
                        9633: "locale-ca-ES",
                        9689: "locale-ka-GE",
                        9758: "locale-en-US",
                        9877: "locale-th-TH"
                    }[e] || e) + ".css", r = s.p + i, a = document.getElementsByTagName("link"), o = 0; o < a.length; o++) {
                    var c = (h = a[o]).getAttribute("data-href") || h.getAttribute("href");
                    if ("stylesheet" === h.rel && (c === i || c === r)) return t()
                }
                var u = document.getElementsByTagName("style");
                for (o = 0; o < u.length; o++) { var h; if ((c = (h = u[o]).getAttribute("data-href")) === i || c === r) return t() }
                var d = document.createElement("link");
                d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function(t) {
                    var i = t && t.target && t.target.src || r,
                        a = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                    a.code = "CSS_CHUNK_LOAD_FAILED", a.request = i, delete l[e], d.parentNode.removeChild(d), n(a)
                }, d.href = r, document.getElementsByTagName("head")[0].appendChild(d)
            })).then((function() { l[e] = 0 })))
        },
        function() {
            var e = { 4826: 0, 696: 0 };
            s.f.j = function(t, n) {
                var i = s.o(e, t) ? e[t] : void 0;
                if (0 !== i)
                    if (i) n.push(i[2]);
                    else {
                        var r = new Promise((function(n, r) { i = e[t] = [n, r] }));
                        n.push(i[2] = r);
                        var a = s.p + s.u(t),
                            o = new Error;
                        s.l(a, (function(n) {
                            if (s.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                                var r = n && ("load" === n.type ? "missing" : n.type),
                                    a = n && n.target && n.target.src;
                                o.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")", o.name = "ChunkLoadError", o.type = r, o.request = a, i[1](o)
                            }
                        }), "chunk-" + t, t)
                    }
            }, s.O.j = function(t) { return 0 === e[t] };
            var t = function(t, n) {
                    var i, r, a = n[0],
                        o = n[1],
                        l = n[2],
                        c = 0;
                    if (a.some((function(t) { return 0 !== e[t] }))) { for (i in o) s.o(o, i) && (s.m[i] = o[i]); if (l) var u = l(s) }
                    for (t && t(n); c < a.length; c++) r = a[c], s.o(e, r) && e[r] && e[r][0](), e[a[c]] = 0;
                    return s.O(u)
                },
                n = self.webpackChunkwheel_of_names = self.webpackChunkwheel_of_names || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        }();
    var c = s.O(void 0, [4736], (function() { return s(77380) }));
    c = s.O(c)
}();
//# sourceMappingURL=index-91559ca84a4e50e5f7d0.js.map
//# sourceMappingURL=index-91559ca84a4e50e5f7d0.js.map
//# sourceMappingURL=index-91559ca84a4e50e5f7d0.js.map
//# sourceMappingURL=index-91559ca84a4e50e5f7d0.js.map
//# sourceMappingURL=index-91559ca84a4e50e5f7d0.js.map