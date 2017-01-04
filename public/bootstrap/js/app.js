/**
 * Created by liuhong on 2016/9/4.
 */
/*2016-09-02 09:41:13 smartisan*/
!
    function() {
        var e = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this,
            t = e._,
            n = Array.prototype,
            o = Object.prototype,
            i = n.push,
            a = n.slice,
            r = o.toString,
            s = o.hasOwnProperty,
            l = Array.isArray,
            c = Object.keys,
            u = Object.create,
            m = function() {},
            p = function(e) {
                return e instanceof p ? e : this instanceof p ? void(this._wrapped = e) : new p(e)
            };
        "undefined" == typeof exports || exports.nodeType ? e._ = p : ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = p), exports._ = p), p.VERSION = "1.8.3";
        var d = function(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 3:
                        return function(n, o, i) {
                            return e.call(t, n, o, i)
                        };
                    case 4:
                        return function(n, o, i, a) {
                            return e.call(t, n, o, i, a)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            },
            g = function(e, t, n) {
                return null == e ? p.identity : p.isFunction(e) ? d(e, t, n) : p.isObject(e) ? p.matcher(e) : p.property(e)
            };
        p.iteratee = function(e, t) {
            return g(e, t, 1 / 0)
        };
        var f = function(e, t) {
                return t = null == t ? e.length - 1 : +t, function() {
                    for (var n = Math.max(arguments.length - t, 0), o = Array(n), i = 0; i < n; i++) o[i] = arguments[i + t];
                    switch (t) {
                        case 0:
                            return e.call(this, o);
                        case 1:
                            return e.call(this, arguments[0], o);
                        case 2:
                            return e.call(this, arguments[0], arguments[1], o)
                    }
                    var a = Array(t + 1);
                    for (i = 0; i < t; i++) a[i] = arguments[i];
                    return a[t] = o, e.apply(this, a)
                }
            },
            h = function(e) {
                if (!p.isObject(e)) return {};
                if (u) return u(e);
                m.prototype = e;
                var t = new m;
                return m.prototype = null, t
            },
            v = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            },
            b = Math.pow(2, 53) - 1,
            y = v("length"),
            w = function(e) {
                var t = y(e);
                return "number" == typeof t && t >= 0 && t <= b
            };
        p.each = p.forEach = function(e, t, n) {
            t = d(t, n);
            var o, i;
            if (w(e)) for (o = 0, i = e.length; o < i; o++) t(e[o], o, e);
            else {
                var a = p.keys(e);
                for (o = 0, i = a.length; o < i; o++) t(e[a[o]], a[o], e)
            }
            return e
        }, p.map = p.collect = function(e, t, n) {
            t = g(t, n);
            for (var o = !w(e) && p.keys(e), i = (o || e).length, a = Array(i), r = 0; r < i; r++) {
                var s = o ? o[r] : r;
                a[r] = t(e[s], s, e)
            }
            return a
        };
        var k = function(e) {
            var t = function(t, n, o, i) {
                var a = !w(t) && p.keys(t),
                    r = (a || t).length,
                    s = e > 0 ? 0 : r - 1;
                for (i || (o = t[a ? a[s] : s], s += e); s >= 0 && s < r; s += e) {
                    var l = a ? a[s] : s;
                    o = n(o, t[l], l, t)
                }
                return o
            };
            return function(e, n, o, i) {
                var a = arguments.length >= 3;
                return t(e, d(n, i, 4), o, a)
            }
        };
        p.reduce = p.foldl = p.inject = k(1), p.reduceRight = p.foldr = k(-1), p.find = p.detect = function(e, t, n) {
            var o;
            if (o = w(e) ? p.findIndex(e, t, n) : p.findKey(e, t, n), void 0 !== o && o !== -1) return e[o]
        }, p.filter = p.select = function(e, t, n) {
            var o = [];
            return t = g(t, n), p.each(e, function(e, n, i) {
                t(e, n, i) && o.push(e)
            }), o
        }, p.reject = function(e, t, n) {
            return p.filter(e, p.negate(g(t)), n)
        }, p.every = p.all = function(e, t, n) {
            t = g(t, n);
            for (var o = !w(e) && p.keys(e), i = (o || e).length, a = 0; a < i; a++) {
                var r = o ? o[a] : a;
                if (!t(e[r], r, e)) return !1
            }
            return !0
        }, p.some = p.any = function(e, t, n) {
            t = g(t, n);
            for (var o = !w(e) && p.keys(e), i = (o || e).length, a = 0; a < i; a++) {
                var r = o ? o[a] : a;
                if (t(e[r], r, e)) return !0
            }
            return !1
        }, p.contains = p.includes = p.include = function(e, t, n, o) {
            return w(e) || (e = p.values(e)), ("number" != typeof n || o) && (n = 0), p.indexOf(e, t, n) >= 0
        }, p.invoke = f(function(e, t, n) {
            var o = p.isFunction(t);
            return p.map(e, function(e) {
                var i = o ? t : e[t];
                return null == i ? i : i.apply(e, n)
            })
        }), p.pluck = function(e, t) {
            return p.map(e, p.property(t))
        }, p.where = function(e, t) {
            return p.filter(e, p.matcher(t))
        }, p.findWhere = function(e, t) {
            return p.find(e, p.matcher(t))
        }, p.max = function(e, t, n) {
            var o, i, a = -(1 / 0),
                r = -(1 / 0);
            if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e) {
                e = w(e) ? e : p.values(e);
                for (var s = 0, l = e.length; s < l; s++) o = e[s], null != o && o > a && (a = o)
            } else t = g(t, n), p.each(e, function(e, n, o) {
                i = t(e, n, o), (i > r || i === -(1 / 0) && a === -(1 / 0)) && (a = e, r = i)
            });
            return a
        }, p.min = function(e, t, n) {
            var o, i, a = 1 / 0,
                r = 1 / 0;
            if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e) {
                e = w(e) ? e : p.values(e);
                for (var s = 0, l = e.length; s < l; s++) o = e[s], null != o && o < a && (a = o)
            } else t = g(t, n), p.each(e, function(e, n, o) {
                i = t(e, n, o), (i < r || i === 1 / 0 && a === 1 / 0) && (a = e, r = i)
            });
            return a
        }, p.shuffle = function(e) {
            return p.sample(e, 1 / 0)
        }, p.sample = function(e, t, n) {
            if (null == t || n) return w(e) || (e = p.values(e)), e[p.random(e.length - 1)];
            var o = w(e) ? p.clone(e) : p.values(e),
                i = y(o);
            t = Math.max(Math.min(t, i), 0);
            for (var a = i - 1, r = 0; r < t; r++) {
                var s = p.random(r, a),
                    l = o[r];
                o[r] = o[s], o[s] = l
            }
            return o.slice(0, t)
        }, p.sortBy = function(e, t, n) {
            var o = 0;
            return t = g(t, n), p.pluck(p.map(e, function(e, n, i) {
                return {
                    value: e,
                    index: o++,
                    criteria: t(e, n, i)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    o = t.criteria;
                if (n !== o) {
                    if (n > o || void 0 === n) return 1;
                    if (n < o || void 0 === o) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var C = function(e, t) {
            return function(n, o, i) {
                var a = t ? [
                    [],
                    []
                ] : {};
                return o = g(o, i), p.each(n, function(t, i) {
                    var r = o(t, i, n);
                    e(a, t, r)
                }), a
            }
        };
        p.groupBy = C(function(e, t, n) {
            p.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), p.indexBy = C(function(e, t, n) {
            e[n] = t
        }), p.countBy = C(function(e, t, n) {
            p.has(e, n) ? e[n]++ : e[n] = 1
        });
        var S = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
        p.toArray = function(e) {
            return e ? p.isArray(e) ? a.call(e) : p.isString(e) ? e.match(S) : w(e) ? p.map(e, p.identity) : p.values(e) : []
        }, p.size = function(e) {
            return null == e ? 0 : w(e) ? e.length : p.keys(e).length
        }, p.partition = C(function(e, t, n) {
            e[n ? 0 : 1].push(t)
        }, !0), p.first = p.head = p.take = function(e, t, n) {
            if (null != e) return null == t || n ? e[0] : p.initial(e, e.length - t)
        }, p.initial = function(e, t, n) {
            return a.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, p.last = function(e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : p.rest(e, Math.max(0, e.length - t))
        }, p.rest = p.tail = p.drop = function(e, t, n) {
            return a.call(e, null == t || n ? 1 : t)
        }, p.compact = function(e) {
            return p.filter(e, p.identity)
        };
        var $ = function(e, t, n, o) {
            o = o || [];
            for (var i = o.length, a = 0, r = y(e); a < r; a++) {
                var s = e[a];
                if (w(s) && (p.isArray(s) || p.isArguments(s))) if (t) for (var l = 0, c = s.length; l < c;) o[i++] = s[l++];
                else $(s, t, n, o), i = o.length;
                else n || (o[i++] = s)
            }
            return o
        };
        p.flatten = function(e, t) {
            return $(e, t, !1)
        }, p.without = f(function(e, t) {
            return p.difference(e, t)
        }), p.uniq = p.unique = function(e, t, n, o) {
            p.isBoolean(t) || (o = n, n = t, t = !1), null != n && (n = g(n, o));
            for (var i = [], a = [], r = 0, s = y(e); r < s; r++) {
                var l = e[r],
                    c = n ? n(l, r, e) : l;
                t ? (r && a === c || i.push(l), a = c) : n ? p.contains(a, c) || (a.push(c), i.push(l)) : p.contains(i, l) || i.push(l)
            }
            return i
        }, p.union = f(function(e) {
            return p.uniq($(e, !0, !0))
        }), p.intersection = function(e) {
            for (var t = [], n = arguments.length, o = 0, i = y(e); o < i; o++) {
                var a = e[o];
                if (!p.contains(t, a)) {
                    var r;
                    for (r = 1; r < n && p.contains(arguments[r], a); r++);
                    r === n && t.push(a)
                }
            }
            return t
        }, p.difference = f(function(e, t) {
            return t = $(t, !0, !0), p.filter(e, function(e) {
                return !p.contains(t, e)
            })
        }), p.unzip = function(e) {
            for (var t = e && p.max(e, y).length || 0, n = Array(t), o = 0; o < t; o++) n[o] = p.pluck(e, o);
            return n
        }, p.zip = f(p.unzip), p.object = function(e, t) {
            for (var n = {}, o = 0, i = y(e); o < i; o++) t ? n[e[o]] = t[o] : n[e[o][0]] = e[o][1];
            return n
        };
        var _ = function(e) {
            return function(t, n, o) {
                n = g(n, o);
                for (var i = y(t), a = e > 0 ? 0 : i - 1; a >= 0 && a < i; a += e) if (n(t[a], a, t)) return a;
                return -1
            }
        };
        p.findIndex = _(1), p.findLastIndex = _(-1), p.sortedIndex = function(e, t, n, o) {
            n = g(n, o, 1);
            for (var i = n(t), a = 0, r = y(e); a < r;) {
                var s = Math.floor((a + r) / 2);
                n(e[s]) < i ? a = s + 1 : r = s
            }
            return a
        };
        var x = function(e, t, n) {
            return function(o, i, r) {
                var s = 0,
                    l = y(o);
                if ("number" == typeof r) e > 0 ? s = r >= 0 ? r : Math.max(r + l, s) : l = r >= 0 ? Math.min(r + 1, l) : r + l + 1;
                else if (n && r && l) return r = n(o, i), o[r] === i ? r : -1;
                if (i !== i) return r = t(a.call(o, s, l), p.isNaN), r >= 0 ? r + s : -1;
                for (r = e > 0 ? s : l - 1; r >= 0 && r < l; r += e) if (o[r] === i) return r;
                return -1
            }
        };
        p.indexOf = x(1, p.findIndex, p.sortedIndex), p.lastIndexOf = x(-1, p.findLastIndex), p.range = function(e, t, n) {
            null == t && (t = e || 0, e = 0), n || (n = t < e ? -1 : 1);
            for (var o = Math.max(Math.ceil((t - e) / n), 0), i = Array(o), a = 0; a < o; a++, e += n) i[a] = e;
            return i
        }, p.chunk = function(e, t) {
            if (null == t || t < 1) return [];
            for (var n = [], o = 0, i = e.length; o < i;) n.push(a.call(e, o, o += t));
            return n
        };
        var L = function(e, t, n, o, i) {
            if (!(o instanceof t)) return e.apply(n, i);
            var a = h(e.prototype),
                r = e.apply(a, i);
            return p.isObject(r) ? r : a
        };
        p.bind = f(function(e, t, n) {
            if (!p.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var o = f(function(i) {
                return L(e, o, t, this, n.concat(i))
            });
            return o
        }), p.partial = f(function(e, t) {
            var n = p.partial.placeholder,
                o = function() {
                    for (var i = 0, a = t.length, r = Array(a), s = 0; s < a; s++) r[s] = t[s] === n ? arguments[i++] : t[s];
                    for (; i < arguments.length;) r.push(arguments[i++]);
                    return L(e, o, this, this, r)
                };
            return o
        }), p.partial.placeholder = p, p.bindAll = f(function(e, t) {
            t = $(t, !1, !1);
            var n = t.length;
            if (n < 1) throw new Error("bindAll must be passed function names");
            for (; n--;) {
                var o = t[n];
                e[o] = p.bind(e[o], e)
            }
        }), p.memoize = function(e, t) {
            var n = function(o) {
                var i = n.cache,
                    a = "" + (t ? t.apply(this, arguments) : o);
                return p.has(i, a) || (i[a] = e.apply(this, arguments)), i[a]
            };
            return n.cache = {}, n
        }, p.delay = f(function(e, t, n) {
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }), p.defer = p.partial(p.delay, p, 1), p.throttle = function(e, t, n) {
            var o, i, a, r, s = 0;
            n || (n = {});
            var l = function() {
                    s = n.leading === !1 ? 0 : p.now(), o = null, r = e.apply(i, a), o || (i = a = null)
                },
                c = function() {
                    var c = p.now();
                    s || n.leading !== !1 || (s = c);
                    var u = t - (c - s);
                    return i = this, a = arguments, u <= 0 || u > t ? (o && (clearTimeout(o), o = null), s = c, r = e.apply(i, a), o || (i = a = null)) : o || n.trailing === !1 || (o = setTimeout(l, u)), r
                };
            return c.cancel = function() {
                clearTimeout(o), s = 0, o = i = a = null
            }, c
        }, p.debounce = function(e, t, n) {
            var o, i, a = function(t, n) {
                    o = null, n && (i = e.apply(t, n))
                },
                r = f(function(r) {
                    var s = n && !o;
                    return o && clearTimeout(o), s ? (o = setTimeout(a, t), i = e.apply(this, r)) : n || (o = p.delay(a, t, this, r)), i
                });
            return r.cancel = function() {
                clearTimeout(o), o = null
            }, r
        }, p.wrap = function(e, t) {
            return p.partial(t, e)
        }, p.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, p.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, o = e[t].apply(this, arguments); n--;) o = e[n].call(this, o);
                return o
            }
        }, p.after = function(e, t) {
            return function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, p.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        }, p.once = p.partial(p.before, 2), p.restArgs = f;
        var G = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
            A = function(e, t) {
                var n = I.length,
                    i = e.constructor,
                    a = p.isFunction(i) && i.prototype || o,
                    r = "constructor";
                for (p.has(e, r) && !p.contains(t, r) && t.push(r); n--;) r = I[n], r in e && e[r] !== a[r] && !p.contains(t, r) && t.push(r)
            };
        p.keys = function(e) {
            if (!p.isObject(e)) return [];
            if (c) return c(e);
            var t = [];
            for (var n in e) p.has(e, n) && t.push(n);
            return G && A(e, t), t
        }, p.allKeys = function(e) {
            if (!p.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return G && A(e, t), t
        }, p.values = function(e) {
            for (var t = p.keys(e), n = t.length, o = Array(n), i = 0; i < n; i++) o[i] = e[t[i]];
            return o
        }, p.mapObject = function(e, t, n) {
            t = g(t, n);
            for (var o = p.keys(e), i = o.length, a = {}, r = 0; r < i; r++) {
                var s = o[r];
                a[s] = t(e[s], s, e)
            }
            return a
        }, p.pairs = function(e) {
            for (var t = p.keys(e), n = t.length, o = Array(n), i = 0; i < n; i++) o[i] = [t[i], e[t[i]]];
            return o
        }, p.invert = function(e) {
            for (var t = {}, n = p.keys(e), o = 0, i = n.length; o < i; o++) t[e[n[o]]] = n[o];
            return t
        }, p.functions = p.methods = function(e) {
            var t = [];
            for (var n in e) p.isFunction(e[n]) && t.push(n);
            return t.sort()
        };
        var j = function(e, t) {
            return function(n) {
                var o = arguments.length;
                if (t && (n = Object(n)), o < 2 || null == n) return n;
                for (var i = 1; i < o; i++) for (var a = arguments[i], r = e(a), s = r.length, l = 0; l < s; l++) {
                    var c = r[l];
                    t && void 0 !== n[c] || (n[c] = a[c])
                }
                return n
            }
        };
        p.extend = j(p.allKeys), p.extendOwn = p.assign = j(p.keys), p.findKey = function(e, t, n) {
            t = g(t, n);
            for (var o, i = p.keys(e), a = 0, r = i.length; a < r; a++) if (o = i[a], t(e[o], o, e)) return o
        };
        var T = function(e, t, n) {
            return t in n
        };
        p.pick = f(function(e, t) {
            var n = {},
                o = t[0];
            if (null == e) return n;
            p.isFunction(o) ? (t.length > 1 && (o = d(o, t[1])), t = p.allKeys(e)) : (o = T, t = $(t, !1, !1), e = Object(e));
            for (var i = 0, a = t.length; i < a; i++) {
                var r = t[i],
                    s = e[r];
                o(s, r, e) && (n[r] = s)
            }
            return n
        }), p.omit = f(function(e, t) {
            var n, o = t[0];
            return p.isFunction(o) ? (o = p.negate(o), t.length > 1 && (n = t[1])) : (t = p.map($(t, !1, !1), String), o = function(e, n) {
                return !p.contains(t, n)
            }), p.pick(e, o, n)
        }), p.defaults = j(p.allKeys, !0), p.create = function(e, t) {
            var n = h(e);
            return t && p.extendOwn(n, t), n
        }, p.clone = function(e) {
            return p.isObject(e) ? p.isArray(e) ? e.slice() : p.extend({}, e) : e
        }, p.tap = function(e, t) {
            return t(e), e
        }, p.isMatch = function(e, t) {
            var n = p.keys(t),
                o = n.length;
            if (null == e) return !o;
            for (var i = Object(e), a = 0; a < o; a++) {
                var r = n[a];
                if (t[r] !== i[r] || !(r in i)) return !1
            }
            return !0
        };
        var B, N;
        B = function(e, t, n, o) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            if (e !== e) return t !== t;
            var i = typeof e;
            return ("function" === i || "object" === i || "object" == typeof t) && N(e, t, n, o)
        }, N = function(e, t, n, o) {
            e instanceof p && (e = e._wrapped), t instanceof p && (t = t._wrapped);
            var i = r.call(e);
            if (i !== r.call(t)) return !1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var a = "[object Array]" === i;
            if (!a) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var s = e.constructor,
                    l = t.constructor;
                if (s !== l && !(p.isFunction(s) && s instanceof s && p.isFunction(l) && l instanceof l) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], o = o || [];
            for (var c = n.length; c--;) if (n[c] === e) return o[c] === t;
            if (n.push(e), o.push(t), a) {
                if (c = e.length, c !== t.length) return !1;
                for (; c--;) if (!B(e[c], t[c], n, o)) return !1
            } else {
                var u, m = p.keys(e);
                if (c = m.length, p.keys(t).length !== c) return !1;
                for (; c--;) if (u = m[c], !p.has(t, u) || !B(e[u], t[u], n, o)) return !1
            }
            return n.pop(), o.pop(), !0
        }, p.isEqual = function(e, t) {
            return B(e, t)
        }, p.isEmpty = function(e) {
            return null == e || (w(e) && (p.isArray(e) || p.isString(e) || p.isArguments(e)) ? 0 === e.length : 0 === p.keys(e).length)
        }, p.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, p.isArray = l ||
            function(e) {
                return "[object Array]" === r.call(e)
            }, p.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !! e
        }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol"], function(e) {
            p["is" + e] = function(t) {
                return r.call(t) === "[object " + e + "]"
            }
        }), p.isArguments(arguments) || (p.isArguments = function(e) {
            return p.has(e, "callee")
        });
        var P = e.document && e.document.childNodes;
        "function" != typeof / . / && "object" != typeof Int8Array && "function" != typeof P && (p.isFunction = function(e) {
            return "function" == typeof e || !1
        }), p.isFinite = function(e) {
            return !p.isSymbol(e) && isFinite(e) && !isNaN(parseFloat(e))
        }, p.isNaN = function(e) {
            return p.isNumber(e) && isNaN(e)
        }, p.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === r.call(e)
        }, p.isNull = function(e) {
            return null === e
        }, p.isUndefined = function(e) {
            return void 0 === e
        }, p.has = function(e, t) {
            return null != e && s.call(e, t)
        }, p.noConflict = function() {
            return e._ = t, this
        }, p.identity = function(e) {
            return e
        }, p.constant = function(e) {
            return function() {
                return e
            }
        }, p.noop = function() {}, p.property = v, p.propertyOf = function(e) {
            return null == e ?
                function() {} : function(t) {
                return e[t]
            }
        }, p.matcher = p.matches = function(e) {
            return e = p.extendOwn({}, e), function(t) {
                return p.isMatch(t, e)
            }
        }, p.times = function(e, t, n) {
            var o = Array(Math.max(0, e));
            t = d(t, n, 1);
            for (var i = 0; i < e; i++) o[i] = t(i);
            return o
        }, p.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, p.now = Date.now ||
            function() {
                return (new Date).getTime()
            };
        var M = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            D = p.invert(M),
            E = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + p.keys(e).join("|") + ")",
                    o = RegExp(n),
                    i = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, o.test(e) ? e.replace(i, t) : e
                }
            };
        p.escape = E(M), p.unescape = E(D), p.result = function(e, t, n) {
            var o = null == e ? void 0 : e[t];
            return void 0 === o && (o = n), p.isFunction(o) ? o.call(e) : o
        };
        var O = 0;
        p.uniqueId = function(e) {
            var t = ++O + "";
            return e ? e + t : t
        }, p.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var U = /(.)^/,
            W = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            R = /\\|'|\r|\n|\u2028|\u2029/g,
            H = function(e) {
                return "\\" + W[e]
            };
        p.template = function(e, t, n) {
            !t && n && (t = n), t = p.defaults({}, t, p.templateSettings);
            var o = RegExp([(t.escape || U).source, (t.interpolate || U).source, (t.evaluate || U).source].join("|") + "|$", "g"),
                i = 0,
                a = "__p+='";
            e.replace(o, function(t, n, o, r, s) {
                return a += e.slice(i, s).replace(R, H), i = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : o ? a += "'+\n((__t=(" + o + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), t
            }), a += "';\n", t.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            var r;
            try {
                r = new Function(t.variable || "obj", "_", a)
            } catch (s) {
                throw s.source = a, s
            }
            var l = function(e) {
                    return r.call(this, e, p)
                },
                c = t.variable || "obj";
            return l.source = "function(" + c + "){\n" + a + "}", l
        }, p.chain = function(e) {
            var t = p(e);
            return t._chain = !0, t
        };
        var F = function(e, t) {
            return e._chain ? p(t).chain() : t
        };
        p.mixin = function(e) {
            p.each(p.functions(e), function(t) {
                var n = p[t] = e[t];
                p.prototype[t] = function() {
                    var e = [this._wrapped];
                    return i.apply(e, arguments), F(this, n.apply(p, e))
                }
            })
        }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = n[e];
            p.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], F(this, n)
            }
        }), p.each(["concat", "join", "slice"], function(e) {
            var t = n[e];
            p.prototype[e] = function() {
                return F(this, t.apply(this._wrapped, arguments))
            }
        }), p.prototype.value = function() {
            return this._wrapped
        }, p.prototype.valueOf = p.prototype.toJSON = p.prototype.value, p.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return p
        })
    }();
var jaaulde = window.jaaulde || {};
jaaulde.utils = jaaulde.utils || {}, jaaulde.utils.cookies = function() {
    var e, t, n, o, i = {
        expiresAt: null,
        path: "/",
        domain: null,
        secure: !1
    };
    return e = function(e) {
        var t, n;
        return "object" != typeof e || null === e ? t = i : (t = {
            expiresAt: i.expiresAt,
            path: i.path,
            domain: i.domain,
            secure: i.secure
        }, "object" == typeof e.expiresAt && e.expiresAt instanceof Date ? t.expiresAt = e.expiresAt : "number" == typeof e.hoursToLive && 0 !== e.hoursToLive && (n = new Date, n.setTime(n.getTime() + 60 * e.hoursToLive * 60 * 1e3), t.expiresAt = n), "string" == typeof e.path && "" !== e.path && (t.path = e.path), "string" == typeof e.domain && "" !== e.domain && (t.domain = e.domain), e.secure === !0 && (t.secure = e.secure)), t
    }, t = function(t) {
        return t = e(t), ("object" == typeof t.expiresAt && t.expiresAt instanceof Date ? "; expires=" + t.expiresAt.toGMTString() : "") + "; path=" + t.path + ("string" == typeof t.domain ? "; domain=" + t.domain : "") + (t.secure === !0 ? "; secure" : "")
    }, n = function() {
        var e, t, n, o, i, a = {},
            r = document.cookie.split(";");
        for (e = 0; e < r.length; e += 1) {
            t = r[e].split("="), n = t[0].replace(/^\s*/, "").replace(/\s*$/, "");
            try {
                o = decodeURIComponent(t[1])
            } catch (s) {
                o = t[1]
            }
            if ("object" == typeof JSON && null !== JSON && "function" == typeof JSON.parse) try {
                i = o, o = JSON.parse(o)
            } catch (l) {
                o = i
            }
            a[n] = o
        }
        return a
    }, o = function() {}, o.prototype.get = function(e) {
        var t, o, i = n();
        if ("string" == typeof e) t = "undefined" != typeof i[e] ? i[e] : null;
        else if ("object" == typeof e && null !== e) {
            t = {};
            for (o in e)"undefined" != typeof i[e[o]] ? t[e[o]] = i[e[o]] : t[e[o]] = null
        } else t = i;
        return t
    }, o.prototype.filter = function(e) {
        var t, o = {},
            i = n();
        "string" == typeof e && (e = new RegExp(e));
        for (t in i) t.match(e) && (o[t] = i[t]);
        return o
    }, o.prototype.set = function(e, n, o) {
        if ("object" == typeof o && null !== o || (o = {}), "undefined" == typeof n || null === n) n = "", o.hoursToLive = -8760;
        else if ("string" != typeof n) {
            if ("object" != typeof JSON || null === JSON || "function" != typeof JSON.stringify) throw new Error("cookies.set() received non-string value and could not serialize.");
            n = JSON.stringify(n)
        }
        var i = t(o);
        document.cookie = e + "=" + encodeURIComponent(n) + i
    }, o.prototype.del = function(e, t) {
        var n, o = {};
        "object" == typeof t && null !== t || (t = {}), "boolean" == typeof e && e === !0 ? o = this.get() : "string" == typeof e && (o[e] = !0);
        for (n in o)"string" == typeof n && "" !== n && this.set(n, null, t)
    }, o.prototype.test = function() {
        var e = !1,
            t = "cT",
            n = "data";
        return this.set(t, n), this.get(t) === n && (this.del(t), e = !0), e
    }, o.prototype.setOptions = function(t) {
        "object" != typeof t && (t = null), i = e(t)
    }, new o
}(), function() {
    (window.jQuery || window.Zepto) && !
        function(e) {
            e.cookies = jaaulde.utils.cookies;
            var t = {
                cookify: function(t) {
                    return this.each(function() {
                        var n, o, i, a = ["name", "id"],
                            r = e(this);
                        for (n in a) if (!isNaN(n) && (o = r.attr(a[n]), "string" == typeof o && "" !== o)) {
                            r.is(":checkbox, :radio") ? r.attr("checked") && (i = r.val()) : i = r.is(":input") ? r.val() : r.html(), "string" == typeof i && "" !== i || (i = null), e.cookies.set(o, i, t);
                            break
                        }
                    })
                },
                cookieFill: function() {
                    return this.each(function() {
                        var t, n, o, i, a = ["name", "id"],
                            r = e(this);
                        for (n = function() {
                            return t = a.pop(), !! t
                        }; n();) if (o = r.attr(t), "string" == typeof o && "" !== o) {
                            i = e.cookies.get(o), null !== i && (r.is(":checkbox, :radio") ? r.val() === i ? r.attr("checked", "checked") : r.removeAttr("checked") : r.is(":input") ? r.val(i) : r.html(i));
                            break
                        }
                    })
                },
                cookieBind: function(t) {
                    return this.each(function() {
                        var n = e(this);
                        n.cookieFill().change(function() {
                            n.cookify(t)
                        })
                    })
                }
            };
            e.each(t, function(t) {
                e.fn[t] = this
            })
        }(window.jQuery || window.Zepto)
}(), !
    function(e, t, n) {
        function o(e, t) {
            return typeof e === t
        }
        function i() {
            var e, t, n, i, a, r, s;
            for (var l in y) if (y.hasOwnProperty(l)) {
                if (e = [], t = y[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (i = o(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) r = e[a], s = r.split("."), 1 === s.length ? k[s[0]] = i : (!k[s[0]] || k[s[0]] instanceof Boolean || (k[s[0]] = new Boolean(k[s[0]])), k[s[0]][s[1]] = i), b.push((i ? "" : "no-") + s.join("-"))
            }
        }
        function a(e) {
            var t = S.className,
                n = k._config.classPrefix || "";
            if ($ && (t = t.baseVal), k._config.enableJSClass) {
                var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(o, "$1" + n + "js$2")
            }
            k._config.enableClasses && (t += " " + n + e.join(" " + n), $ ? S.className.baseVal = t : S.className = t)
        }
        function r() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : $ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }
        function s() {
            var e = t.body;
            return e || (e = r($ ? "svg" : "body"), e.fake = !0), e
        }
        function l(e, n, o, i) {
            var a, l, c, u, m = "modernizr",
                p = r("div"),
                d = s();
            if (parseInt(o, 10)) for (; o--;) c = r("div"), c.id = i ? i[o] : m + (o + 1), p.appendChild(c);
            return a = r("style"), a.type = "text/css", a.id = "s" + m, (d.fake ? d : p).appendChild(a), d.appendChild(p), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), p.id = m, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = S.style.overflow, S.style.overflow = "hidden", S.appendChild(d)), l = n(p, e), d.fake ? (d.parentNode.removeChild(d), S.style.overflow = u, S.offsetHeight) : p.parentNode.removeChild(p), !! l
        }
        function c(e, t) {
            return !!~ ("" + e).indexOf(t)
        }
        function u(e) {
            return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase()
            }).replace(/^-/, "")
        }
        function m(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        function p(e, t, n) {
            var i;
            for (var a in e) if (e[a] in t) return n === !1 ? e[a] : (i = t[e[a]], o(i, "function") ? m(i, n || t) : i);
            return !1
        }
        function d(e) {
            return e.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }
        function g(t, o) {
            var i = t.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; i--;) if (e.CSS.supports(d(t[i]), o)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in e) {
                for (var a = []; i--;) a.push("(" + d(t[i]) + ":" + o + ")");
                return a = a.join(" or "), l("@supports (" + a + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" == getComputedStyle(e, null).position
                })
            }
            return n
        }
        function f(e, t, i, a) {
            function s() {
                m && (delete N.style, delete N.modElem)
            }
            if (a = !o(a, "undefined") && a, !o(i, "undefined")) {
                var l = g(e, i);
                if (!o(l, "undefined")) return l
            }
            for (var m, p, d, f, h, v = ["modernizr", "tspan"]; !N.style;) m = !0, N.modElem = r(v.shift()), N.style = N.modElem.style;
            for (d = e.length, p = 0; d > p; p++) if (f = e[p], h = N.style[f], c(f, "-") && (f = u(f)), N.style[f] !== n) {
                if (a || o(i, "undefined")) return s(), "pfx" != t || f;
                try {
                    N.style[f] = i
                } catch (b) {}
                if (N.style[f] != h) return s(), "pfx" != t || f
            }
            return s(), !1
        }
        function h(e, t, n, i, a) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                s = (e + " " + T.join(r + " ") + r).split(" ");
            return o(t, "string") || o(t, "undefined") ? f(s, t, i, a) : (s = (e + " " + x.join(r + " ") + r).split(" "), p(s, t, n))
        }
        function v(e, t, o) {
            return h(e, n, n, t, o)
        }
        var b = [],
            y = [],
            w = {
                _version: "3.3.1",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var n = this;
                    setTimeout(function() {
                        t(n[e])
                    }, 0)
                },
                addTest: function(e, t, n) {
                    y.push({
                        name: e,
                        fn: t,
                        options: n
                    })
                },
                addAsyncTest: function(e) {
                    y.push({
                        name: null,
                        fn: e
                    })
                }
            },
            k = function() {};
        k.prototype = w, k = new k;
        var C = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        w._prefixes = C;
        var S = t.documentElement,
            $ = "svg" === S.nodeName.toLowerCase();
        $ || !
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        o = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", o.insertBefore(n.lastChild, o.firstChild)
                }
                function o() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }
                function i(e, t) {
                    var n = y.elements;
                    "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), y.elements = n + " " + e, c(t)
                }
                function a(e) {
                    var t = b[e[h]];
                    return t || (t = {}, v++, e[h] = v, b[v] = t), t
                }
                function r(e, n, o) {
                    if (n || (n = t), m) return n.createElement(e);
                    o || (o = a(n));
                    var i;
                    return i = o.cache[e] ? o.cache[e].cloneNode() : f.test(e) ? (o.cache[e] = o.createElem(e)).cloneNode() : o.createElem(e), !i.canHaveChildren || g.test(e) || i.tagUrn ? i : o.frag.appendChild(i)
                }
                function s(e, n) {
                    if (e || (e = t), m) return e.createDocumentFragment();
                    n = n || a(e);
                    for (var i = n.frag.cloneNode(), r = 0, s = o(), l = s.length; l > r; r++) i.createElement(s[r]);
                    return i
                }
                function l(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? r(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + o().join().replace(/[\w\-:]+/g, function(e) {
                            return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                        }) + ");return n}")(y, t.frag)
                }
                function c(e) {
                    e || (e = t);
                    var o = a(e);
                    return !y.shivCSS || u || o.hasCSS || (o.hasCSS = !! n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), m || l(e, o), e
                }
                var u, m, p = "3.7.3",
                    d = e.html5 || {},
                    g = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    v = 0,
                    b = {};
                !
                    function() {
                        try {
                            var e = t.createElement("a");
                            e.innerHTML = "<xyz></xyz>", u = "hidden" in e, m = 1 == e.childNodes.length ||
                                function() {
                                    t.createElement("a");
                                    var e = t.createDocumentFragment();
                                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                                }()
                        } catch (n) {
                            u = !0, m = !0
                        }
                    }();
                var y = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                    version: p,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: m,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: c,
                    createElement: r,
                    createDocumentFragment: s,
                    addElements: i
                };
                e.html5 = y, c(t), "object" == typeof module && module.exports && (module.exports = y)
            }("undefined" != typeof e ? e : this, t);
        var _ = "Moz O ms Webkit",
            x = w._config.usePrefixes ? _.toLowerCase().split(" ") : [];
        w._domPrefixes = x;
        var L = function() {
            function e(e, t) {
                var i;
                return !!e && (t && "string" != typeof t || (t = r(t || "div")), e = "on" + e, i = e in t, !i && o && (t.setAttribute || (t = r("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i)
            }
            var o = !("onblur" in t.documentElement);
            return e
        }();
        w.hasEvent = L, k.addTest("opacity", function() {
            var e = r("a").style;
            return e.cssText = C.join("opacity:.55;"), /^0.55$/.test(e.opacity)
        });
        var G = "CSS" in e && "supports" in e.CSS,
            I = "supportsCSS" in e;
        k.addTest("supports", G || I);
        var A = function() {
            var t = e.matchMedia || e.msMatchMedia;
            return t ?
                function(e) {
                    var n = t(e);
                    return n && n.matches || !1
                } : function(t) {
                var n = !1;
                return l("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                    n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
                }), n
            }
        }();
        w.mq = A;
        var j = w.testStyles = l,
            T = w._config.usePrefixes ? _.split(" ") : [];
        w._cssomPrefixes = T;
        var B = {
            elem: r("modernizr")
        };
        k._q.push(function() {
            delete B.elem
        });
        var N = {
            style: B.elem.style
        };
        k._q.unshift(function() {
            delete N.style
        }), w.testProp = function(e, t, o) {
            return f([e], n, t, o)
        }, w.testAllProps = h, w.testAllProps = v, k.addTest("csstransforms3d", function() {
            var e = !! v("perspective", "1px", !0),
                t = k._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in S.style)) {
                var n, o = "#modernizr{width:0;height:0}";
                k.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", j(o + n, function(t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), k.addTest("csstransitions", v("transition", "all", !0)), i(), a(b), delete w.addTest, delete w.addAsyncTest;
        for (var P = 0; P < k._q.length; P++) k._q[P]();
        e.Modernizr = k
    }(window, document), function(e, t, n) {
    "use strict";

    function o() {
        if (!e.getComputedStyle) return !1;
        var t, o = document.createElement("p"),
            i = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
        document.body.insertBefore(o, null);
        for (var a in i) o.style[a] !== n && (o.style[a] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(o).getPropertyValue(i[a]));
        return document.body.removeChild(o), t !== n && t.length > 0 && "none" !== t
    }
    var i = {
        duration: .3,
        slideMaskName: ".banner-3d-mask",
        slideName: ".banner-3d-slides",
        slideBtnsName: ".banner-3d-buttons",
        slideShadowName: ".banner-3d-shadow",
        slideBox1Name: ".banner-3d-box-1",
        slideBox2Name: ".banner-3d-box-2",
        slideBox3Name: ".banner-3d-box-3",
        enter3d: null,
        exit3d: null
    };
    jQuery.fn.extend({
        banner3D: function(e) {
            function n() {
                var e = L.children("li"),
                    n = b = t.extend({}, I, {
                        element: e.find(g.slideShadowName),
                        opacityCss: !0
                    }),
                    o = t.extend({}, I, {
                        element: e,
                        depth: 0
                    }),
                    i = t.extend({}, I, {
                        element: e.find(g.slideBox2Name),
                        depth: .2
                    }),
                    a = t.extend({}, I, {
                        element: e.find(g.slideBox3Name),
                        depth: -.3
                    });
                c(n, 0), c(o, 0), c(i, 0), c(a, 0)
            }
            function a(e) {
                var n = t(this).height(),
                    o = t(this).width(),
                    i = L.offset().left,
                    a = L.offset().top;
                return i < e.pageX && e.pageX < i + o && a < e.pageY && e.pageY < a + n
            }
            function n() {
                c(j, 0), c(T, 0), c(B, 0), c(N, 0)
            }
            function r() {
                n(), v = l(), b = t.extend({}, I, {
                    element: v.find(g.slideShadowName),
                    opacityCss: !0
                }), y = t.extend({}, I, {
                    element: v,
                    depth: 0
                }), w = t.extend({}, I, {
                    element: v.find(g.slideBox2Name),
                    depth: .2
                }), k = t.extend({}, I, {
                    element: v.find(g.slideBox3Name),
                    depth: -.3
                })
            }
            function s() {
                var e = {};
                return e.x = L.offset().left + L.width() / 2, e.y = L.offset().top + L.height() / 2, e
            }
            function l() {
                return L.children("li.active")
            }
            function c(e, t, n) {
                var o = {},
                    i = {},
                    t = t || 0,
                    n = n || "";
                o.x = e.x || 0, o.y = e.y || 0, i.x = -e.rotationX.toFixed(5) || 0, i.y = -e.rotationY.toFixed(5) || 0;
                var a = [];
                (o.x || o.y) && a.push("translate3d( " + o.x + "px, " + o.y + "px, 0px)"), (i.x || i.y) && a.push("rotateX(" + i.x + "deg) rotateY(" + i.y + "deg)");
                var r = [];
                e.opacityCss && r.push(g.duration + "s opacity " + n), e.transformCss && r.push(t + "s transform " + n);
                var s = {
                    transform: a.join(" ")
                };
                s.transition = r.join(", "), e.element.css(s)
            }
            function u() {
                cancelAnimationFrame(_), x = !1, d.removeClass("animating"), T.rotationX = 0, T.rotationY = 0, c(T, g.duration, "ease-in-out"), setTimeout(function() {
                    T.element.removeAttr("style")
                }, 1e3 * g.duration), j.shadowX = 0, j.shadowY = 0, c(j, g.duration, "ease-in-out"), B.x = 0, B.y = 0, c(B, g.duration, "ease-in-out"), N.x = 0, N.y = 0, c(N, g.duration, "ease-in-out")
            }
            function m(e) {
                e.x += (e.initX + $ / 20 * e.depth - e.x) / C, e.y += (e.initY - S / 50 * e.depth - e.y) / C
            }
            function p(e) {
                x && (f && h && ($ = (G.x - f) / 2, S = (h - G.y) / 1.5, b.x = +$ / 10, b.y = -S / 10, c(b, 0), y.rotationX += (S / 20 - y.rotationX) / C, y.rotationY += ($ / 50 - y.rotationY) / C, c(y, 0), m(w), c(w, 0), m(k), c(k, 0)), _ = requestAnimationFrame(p))
            }
            if (o()) {
                var d = t(this),
                    g = t.extend({}, i, e);
                g.wrapper = d.selector;
                var f, h, v, b, y, w, k, C = 10,
                    S = 0,
                    $ = 0,
                    _ = (g.timeout, null),
                    x = !1,
                    L = d.find(g.slideName),
                    G = (d.find(g.slideBtnsName), s()),
                    I = {
                        element: null,
                        x: 0,
                        y: 0,
                        initX: 0,
                        initY: 0,
                        rotationX: 0,
                        rotationY: 0,
                        depth: 1,
                        transformCss: !0
                    },
                    A = L.children("li"),
                    j = b = t.extend({}, I, {
                        element: A.find(g.slideShadowName),
                        opacityCss: !0
                    }),
                    T = t.extend({}, I, {
                        element: A,
                        depth: 0
                    }),
                    B = t.extend({}, I, {
                        element: A.find(g.slideBox2Name),
                        depth: .2
                    }),
                    N = t.extend({}, I, {
                        element: A.find(g.slideBox3Name),
                        depth: -.3
                    });
                t(document).on("mouseover", g.wrapper + " " + g.slideMaskName, function(e) {
                    x = !0, t.isFunction(g.exit3d) && g.enter3d(), d.addClass("animating"), r(), p()
                }).on("mousemove", g.wrapper + " " + g.slideMaskName, function(e) {
                    x || a.call(this, e) && t(this).trigger("mouseover"), f = e.pageX, h = e.pageY
                }).on("mouseleave", g.wrapper + " " + g.slideMaskName, function(e) {
                    u(e), t.isFunction(g.exit3d) && g.exit3d();
                })
            }
        }
    })
}(window, jQuery), function(e, t, n) {
    "use strict";
    var o = {
            timeout: 6e3,
            timeArray: [],
            slideName: ".slides",
            slideBtnsName: ".buttons",
            maskName: ".mask",
            isLoopStop: !1
        },
        i = function() {
            var e = navigator.userAgent.toLowerCase(),
                t = {
                    isIE: /msie/.test(e),
                    isHackIE: /msie [7-8]/.test(e),
                    isWebkit: /webkit/.test(e),
                    isWindows: /windows/.test(e),
                    isMac: /mac/.test(e)
                };
            return t.isNormalIE = t.isIE && !t.isIE6 && !t.isHackIE, t
        }();
    jQuery.fn.extend({
        carousel: function(e) {
            var n = t(this),
                a = t.extend({}, o, e);
            a.wrapper = n.selector;
            var r, s, l = a.timeout,
                c = 1,
                u = !1,
                m = n.find(a.slideName),
                p = n.find(a.maskName);
            if (a.slideBtnsName) {
                for (var d = t('<ul class="' + a.slideBtnsName.substring(1, a.slideBtnsName.length) + '"></ul>'), g = "", f = 0, h = m.children("li").length; f < h; f++) g += f ? "<li></li>" : '<li class="active"></li>';
                d.html(g), n.append(d)
            } else var d = n.find(a.slideBtnsName);
            setTimeout(function() {
                d.addClass("banner-3d-buttons-show")
            }, 50), a.timeArray.length > 0 && (s = a.timeArray);
            var v = function(e) {
                    c = "undefined" != typeof e ? e : c, c >= m.children("li").length && (c = 0);
                    var t = l;
                    s && s.length > 0 && s[c] && (t = s[c]), m.children("li").eq(c).addClass("active").siblings("li").removeClass("active"), d.length > 0 && d.find("li").eq(c).addClass("active").siblings("li").removeClass("active"), p.length && p.find("a").eq(c).addClass("active").siblings("a").removeClass("active"), c++, u && (r = setTimeout(v, t))
                },
                b = function() {
                    u = !1, clearTimeout(r)
                },
                y = function() {
                    u = !0;
                    var e = l;
                    s && s.length > 0 && s[c] && (e = s[c]), r = setTimeout(v, e)
                },
                w = function(e) {
                    setTimeout(function() {
                        v(e)
                    }, 100)
                },
                k = function() {
                    i.isIE ? (m.toggleClass("switch", !1), setTimeout(function() {
                        m.toggleClass("switch", !0)
                    }, 0)) : m.toggleClass("switch", !1).show().delay(0).toggleClass("switch", !0)
                },
                C = function() {
                    a.isLoopStop && t(document).on("mouseenter", a.wrapper, function(e) {
                        b()
                    }).on("mouseleave", a.wrapper, function(e) {
                        y()
                    })
                };
            return C(), t(document).on("click", a.wrapper + " " + a.slideBtnsName + " li", function(e) {
                clearTimeout(r);
                var n = t(this).index();
                setTimeout(function() {
                    v(n)
                }, 100)
            }), {
                doCarousel: y,
                exitCarousel: b,
                loopUpdate: w,
                toggleSwitchClass: k
            }
        }
    })
}(window, jQuery), function(e, t) {
    "use strict";
    t.module("ngCollection", []).factory("$collection", ["$filter", "$parse", function(e, n) {
        function o() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        function i() {
            return o() + o() + "-" + o() + "-" + o() + "-" + o() + "-" + o() + o() + o()
        }
        function a(e, t) {
            return t(e)
        }
        function r(e) {
            e || (e = {}), void 0 !== e.comparator && (this.comparator = e.comparator), this.idAttribute = e.idAttribute || this.idAttribute, this.current = null, this._reset(), this.initialize.apply(this, arguments)
        }
        return r.prototype = {
            idAttribute: "id",
            initialize: function() {},
            add: function(e, n) {
                n || (n = {});
                var o, a, r, s;
                return a = n.sort !== !1, s = void 0 !== n.index ? n.index : this.array.length, e[this.idAttribute] || (e[this.idAttribute] = i()), r = this.get(e), r ? t.extend(r, e) : (o = e[this.idAttribute], this.hash[o] = e, this.array.splice(s, 0, e), this.length += 1), a && this.sort(), this
            },
            addAll: function(e, n) {
                n || (n = {});
                for (var o = n.sort !== !1, i = 0; i < e.length; i++) {
                    var a = e[i];
                    this.add(a, t.extend(n, {
                        sort: !1
                    }))
                }
                return o && this.sort(), this
            },
            sort: function(t) {
                return t = t || this.comparator, t && (this.array = e("orderBy")(this.array, t)), this
            },
            get: function(e) {
                if (null != e) return this.hash[e[this.idAttribute] || e]
            },
            find: function(e, t, o) {
                var i = e;
                if ("string" == typeof e) {
                    var r = n(e);
                    i = function(e) {
                        return o ? r(e) == t : r(e) === t
                    }, i.prototype.value = t, i.prototype.deepCompare = o
                }
                for (var s = 0; s < this.array.length; s++) if (a(this.array[s], i)) return this.array[s]
            },
            where: function(e, t, o) {
                var i = [],
                    r = e;
                if ("string" == typeof e) {
                    var s = n(e);
                    r = function(e) {
                        return o ? s(e) === t : s(e) === t
                    }, r.prototype.value = t, r.prototype.deepCompare = o
                }
                for (var l = 0; l < this.array.length; l++) a(this.array[l], r) && i.push(this.array[l]);
                return i
            },
            update: function(e) {
                var n;
                return n = this.get(e), n && t.extend(n, e), n || this.add(e), this
            },
            remove: function(e) {
                var t;
                return t = this.array.indexOf(e), t === -1 ? this : (delete this.hash[e[this.idAttribute]], this.array.splice(t, 1), this.length--, this)
            },
            removeAll: function() {
                for (var e = this.array.length - 1; e >= 0; e--) this.remove(this.at(e));
                return this
            },
            last: function() {
                return this.array[this.length - 1]
            },
            at: function(e) {
                return this.array[e]
            },
            size: function() {
                return this.array.length
            },
            all: function() {
                return this.array
            },
            _reset: function() {
                this.length = 0, this.hash = {}, this.array = []
            }
        }, r.extend = function(e) {
            var n, o = this;
            n = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                return o.apply(this, arguments)
            };
            var i = function() {
                this.constructor = n
            };
            return i.prototype = o.prototype, n.prototype = new i, e && t.extend(n.prototype, e), n.extend = o.extend, n.getInstance = r.getInstance, n._super = o.prototype, n
        }, r.getInstance = function(e) {
            return new this(e)
        }, r
    }])
}(window, window.angular);
var indexApp = angular.module("indexApp", ["ngRoute", "ngTouch", "apps.filters", "apps.services", "me-lazyload", "apps.controllers", "apps.directives", "templates", "ng-translation", "ngCollection"]),
    appsFilters = angular.module("apps.filters", []),
    appsServices = angular.module("apps.services", ["ngCookies"]),
    appsControllers = angular.module("apps.controllers", []),
    appsDirectives = angular.module("apps.directives", []);
indexApp.config(["$locationProvider", "$routeProvider", "ngTranslationProvider", "NavigatorProvider", "Config", function(e, t, n, o, i) {
    o.init();
    var a = {
        home: {
            templateUrl: "view/html/home-en.html",
            controller: "HomeCtrl",
            pageClass: "home",//前台页面需要用到的一个变量
            subNavStyle: ""  //前台页面需要用到的一个变量
        },
        activity: {
            templateUrl: "view/html/home-en.html",
            controller: "HomeCtrl",
            pageClass: "home",
            subNavStyle: ""
        }
    };
    if ("cn" == o.language) {
        var r = "",
            s = "";
        _.indexOf(location.host.split("#"), "www.smartisan.com") > -1 ? (r = "http://www.smartisan.com/shop/", s = i.middlewareProUrl) : (r = "../shop/", s = i.middlewareTestUrl), o.isMobile ? (a.home = {
            templateUrl: "view/html/home-store-mobile.html",
            controller: "StoreCtrl",
            pageClass: "page-shop-mobile",
            resolve: {
                home: ["HomeService", function(e) {
                    return e.getHomeWithPromo()
                }]
            }
        }, a.activity = {
            templateUrl: "view/html/activity-mobile.html",
            controller: "ActivityCtrl",
            pageClass: "page-activity"
        }) : (a.home = {
            templateUrl: "view/html/home-store.html",
            controller: "StoreCtrl",
            pageClass: "page-shop",
            resolve: {
                home: ["HomeService", function(e) {
                    return e.getHomeWithPromo()
                }]
            }
        }, a.activity = {
            templateUrl: "view/html/activity.html",
            controller: "ActivityCtrl",
            pageClass: "page-activity"
        })
    }
    t.when("/activity", a.activity), t.when("/home", a.home), t.when("/", a.home), t.when("/shop", a.home), "cn" == o.language && (t.when("/category", {
        redirectTo: function(e, t, n) {
            location.replace("http://www.smartisan.com/shop/#/category?id=" + n.id)
        }
    }), t.when("/cart", {
        redirectTo: function(e, t, n) {
            location.replace("../shop/#" + t)
        }
    }), t.when("/jianguo", {
        redirectTo: function(e, t, n) {
            var o = n.name ? "?name=" + n.name : "";
            location.replace("../shop/#" + t + o)
        }
    }), t.when("/accessories", {
        redirectTo: function(e, t, n) {
            var o = "";
            for (var i in n) o += i + "=" + n[i] + "&";
            o = o ? "?" + o.substring(0, o.length - 1) : "", location.replace("../shop/#" + t + o)
        }
    }), t.when("/cdkey", {
        redirectTo: function(e, t, n) {
            location.replace("../shop/#" + t)
        }
    }), t.when("/t2", {
        redirectTo: function(e, t, n) {
            location.replace("../shop/#" + t)
        }
    }), t.when("/hd/qinghuai", {
        redirectTo: function(e, t, n) {
            location.replace("../shop/#" + t)
        }
    }));
    var l = {
        support: ["instruction", "payment", "service", "delivery", "storelist", "about", "contact", "agreement", "privacy", "insurance", "repair", "cloud-terms", "osterms", "appstore-terms", "property", "join"],
        special: ["ifawards", "fudai", "fudai-intro"],
        t1: ["overview", "design", "features", "os", "specs"],
        pr: ["news-center"]
    };
    for (var c in l) for (var u = l[c], m = 0; m < u.length; m++) {
        var p = u[m],
            d = "/" + p,
            g = function(e) {
                return function(t, n, o) {
                    var i = "http://www.smartisan.com/" + e + "/#" + n;
                    location.replace(i)
                }
            }(c);
        t.when(d, {
            redirectTo: g
        })
    }
    t.when("/cloudTerms", {
        redirectTo: "/cloud-terms"
    }), t.when("/appStoreTerms", {
        redirectTo: "/appstore-terms"
    }), t.when("/rd", {
        redirectTo: "/"
    }), t.when("/2016520", {
        redirectTo: "/"
    }), t.when("/error/:id", {
        title: "Smartisan",
        templateUrl: "view/html/error.html",
        controller: "ErrorCtrl",
        pageClass: "page-error",
        subNavStyle: "hide"
    }), t.otherwise({
        redirectTo: "/error/404"
    }), t.when("/mobile-videolist", {
        redirectTo: function(e, t, n) {
            location.replace("http://www.smartisan.com/pr/#/videos")
        }
    }), t.when("/mobile-video/:id", {
        redirectTo: function(e, t, n) {
            var o = t.substring(8);
            location.replace("http://www.smartisan.com/pr/#/" + o)
        }
    }), t.when("/pr/news-center/:archive", {
        redirectTo: function(e, t, n) {
            var o = t.substring(3);
            location.replace("http://www.smartisan.com/pr/#" + o)
        }
    }), t.when("/video", {
        redirectTo: function(e, t, n) {
            location.replace("http://www.smartisan.com/pr/#/video/smartisant1")
        }
    }), t.when("/video/:id", {
        redirectTo: function(e, t, n) {
            location.replace("http://www.smartisan.com/pr/#" + t)
        }
    }), t.when("/pr/video", {
        redirectTo: function(e, t, n) {
            location.replace("http://www.smartisan.com/pr/#/videos")
        }
    }), t.when("/pr/video/:id", {
        redirectTo: function(e, t, n) {
            var o = t.substring(3);
            location.replace("http://www.smartisan.com/pr/#" + o)
        }
    }), t.when("/pr/news/:id", {
        redirectTo: function(e, t, n) {
            var o = t.substring(9, 19),
                i = o.match(/^20[0-9]{4}/);
            location.replace("http://www.smartisan.com/pr/#/news/" + i + "/" + o)
        }
    }), t.when("/pr/news/:archive/:id", {
        redirectTo: function(e, t, n) {
            var o = t.substring(3);
            location.replace("http://www.smartisan.com/pr/#" + o)
        }
    }), t.when("/pr/pictures", {
        redirectTo: function(e, t, n) {
            var o = t.substring(3);
            location.replace("http://www.smartisan.com/pr/#" + o)
        }
    }), t.when("/apps/:appName", {
        redirectTo: function(e, t, n) {
            var o = t.substring(5);
            location.replace("http://www.smartisan.com/apps/#" + o)
        }
    })
}]), indexApp.run(["$rootScope", "$route", "Utils", "ngTranslation", "Navigator", "Account", "TitleBar", function(e, t, n, o, i, a, r) {
    "en" != $.smartisan.lang && "jp" != $.smartisan.lang && (e.titleBar = {
        navList: [{
            title: "精选",
            url: "/#/shop"
        }, {
            title: "Smartisan T2",
            url: "../shop/#/t2"
        }, {
            title: "坚果手机",
            url: "../shop/#/jianguo"
        }, {
            title: "耳机 / 音箱",
            url: "../shop/#/category/?id=60"
        }, {
            title: "背壳 / 保护套",
            url: "../shop/#/category/?id=61"
        }, {
            title: "“情怀”背壳",
            url: "../shop/#/hd/qinghuai"
        }, {
            title: "其他周边",
            url: "../shop/#/category/?id=59"
        }, {
            title: "保修服务",
            url: "http://m.store.smartisan.com/#/insurance/information"
        }, {
            title: "全部商品",
            url: "../shop/#/category/?id=62"
        }]
    }), e.isMobile = i.isMobile, e.lang = i.language, a.set({
        cartSync: !0
    }), o.use(e.lang), e.$on("$routeChangeStart", function(t, n, o) {
        e.subNavStyle = n.$$route.subNavStyle || "", e.pageClass = n.$$route.pageClass, e.pageLoading = !0, e.currentPage = ""
    }), e.$on("$routeChangeSuccess", function(t, o, i) {
        e.pageLoading = !1, n.setHeaderActive("")
    })
}]), appsServices.factory("Utils", ["$rootScope", "$q", "$http", "$location", "$cookies", function(e, t, n, o, i) {
    var a = {};
    return a.truncateChars = function(e, t, n, o) {
        if (e) {
            var i = e.replace(/[\u4e00-\u9fa5\s]/g, "**").length,
                a = [],
                r = 0;
            if (o) {
                var s = $("<div></div>").html(e);
                e = s.text(), s = null
            }
            if (i <= t) return e;
            for (var l = 0; l < i; l++) {
                var c = e.charAt(l);
                if (r += /[^\x00-\xff]/.test(c) ? 2 : 1, a.push(c), r >= t) break
            }
            return n ? a.join("") + "..." : a.join("")
        }
        return ""
    }, a.encodeUriQuery = function(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
    }, a.toKeyValue = function(e) {
        var t = this,
            n = [];
        return angular.forEach(e, function(e, o) {
            angular.isArray(e) ? angular.forEach(e, function(e) {
                n.push(t.encodeUriQuery(o, !0) + (e === !0 ? "" : "=" + t.encodeUriQuery(e, !0)))
            }) : n.push(t.encodeUriQuery(o, !0) + "=" + t.encodeUriQuery(e, !0))
        }), n.length ? n.join("&") : ""
    }, a.shareWeibo = function(e, t, n, o, i) {
        var a = e || $(".share-btn"),
            r = null;
        r = i ? encodeURIComponent(i) : encodeURIComponent(location.href);
        var s = n || "",
            l = "http://service.weibo.com/share/share.php?appkey=",
            c = o || $(".share-weibo-cover").attr("src"),
            u = encodeURIComponent(this.truncateChars(s, 232, !0));
        l += "&title=" + u, l += "&url=" + r, c && (l += "&pic=" + encodeURIComponent(c)), a.attr("href", l)
    }, a.setTitle = function(e, t) {
        var n = window.navigator.userAgent;
        "undefined" == typeof t ? document.title = e : document.title = e + " - " + t, /SmartisanSupport/.test(n) && window.onParseHtml.setTitleBar(e)
    }, a.setKeywords = function(e) {
        e && "" !== e && $("meta[name='keywords']").attr({
            content: e
        })
    }, a.setDescription = function(e) {
        e && "" !== e && $("meta[name='description']").attr({
            content: e
        })
    }, a.setMobileTitle = function(t) {
        var n = "";
        "undefined" == typeof t.text ? n = "en" == e.lang ? '<a href="http://www.smartisan.com/en/#/home"><span class="logo-pic"></span></a>' : '<a href="http://www.smartisan.com/#/home"><span class="logo-pic"></span></a>' : n += "undefined" == typeof t.url ? t.text : '<a href="' + t.url + '">' + t.text + "</a>", $(".mobile-title").html(n)
    }, a.setCrumbs = function(e) {
        for (var t = "", n = 0; n < e.length; n++) t += "undefined" == typeof e[n].url ? e[n].title : '<a href="' + e[n].url + '">' + e[n].title + "</a>", n + 1 < e.length && (t += '<span class="arrow"></span>');
        $(".header-crumbs").length ? $(".header-crumbs").html(t) : $(".breadcrumb").html(t)
    }, a.setT1Crumbs = function(e, t) {
        e && $(".header-sub .breadcrumb").removeClass("hide");
        var n = "";
        t && (n += '<h2 class="phone-logo"></h2>'), n += '<ul class="t1Crumbs">';
        for (var o = e.currentPage, i = 0; i < e.list.length; i++) {
            var a = "";
            o && e.list[i].url.indexOf(o) > 0 && (a = "on"), n = n + '<li class="' + a + '"><a href="' + e.list[i].url + '">' + e.list[i].title + "</a></li>"
        }
        n += "</ul>", $(".breadcrumb").html(n)
    }, a.setTCrumbs = function(e, t, n) {
        e && $(".header-sub .breadcrumb").removeClass("hide");
        var o = "";
        n && (o += '<h2 class="device-logo"></h2>'), t || (t = "device-nav"), o += '<ul class="' + t + '">';
        for (var i = e.currentPage, a = 0; a < e.list.length; a++) {
            var r = "";
            i && e.list[a].url.indexOf(i) > 0 && (r = "active"), o = o + '<li class="' + r + '"><a href="' + e.list[a].url + '">' + e.list[a].title + "</a></li>"
        }
        o += "</ul>", $(".breadcrumb").html(o)
    }, a.setTCrumbs = function(e, t, n) {
        e && $(".header-sub .breadcrumb").removeClass("hide");
        var o = "";
        n && (o += '<h2 class="device-logo"></h2>'), t || (t = "device-nav"), o += '<ul class="' + t + '">';
        for (var i = e.currentPage, a = 0; a < e.list.length; a++) {
            var r = "";
            i && e.list[a].url.indexOf(i) > 0 && (r = "active"), o = o + '<li class="' + r + '"><a href="' + e.list[a].url + '">' + e.list[a].title + "</a></li>"
        }
        o += "</ul>", $(".breadcrumb").html(o)
    }, a.openServiceWindow = function() {
        if (this.isMobile()) _MEIQIA._SHOWPANEL({
            groupToken: "9aea609f9936e156d06f97654413fbb2"
        });
        else {
            var e = decodeURIComponent("https://static.meiqia.com/dist/standalone.html?eid=8921"),
                t = $('<a><span id="meiqia-a"></span></a>');
            t.attr("href", e).attr("target", "_blank"), $("body").append(t), $("#meiqia-a").click()
        }
    }, a.showMore = function(e, t) {
        var n = e.height(),
            o = e.find("h3").outerHeight() + e.find("ul").outerHeight();
        o > n && (t.css({
            display: "block"
        }), t.bind("click", function() {
            e.find(".feature-wrapper").css({
                height: "auto"
            }), t.hide()
        }))
    }, a.isMobile = function() {
        var e = window.devicePixelRatio || 1;
        return $(window).width() <= 736 && (screen.width <= 736 || e >= 2)
    }, a.isUCMobile = function() {
        var e = window.devicePixelRatio || 1,
            t = navigator.userAgent.toLowerCase(),
            n = /(ucweb)|(ucbrowser)/i.test(t);
        return !!($(window).width() <= 736 && (screen.width <= 736 || e >= 2) && n)
    }, a.isWeixin = function() {
        var e = navigator.userAgent.toLowerCase();
        return "micromessenger" == e.match(/MicroMessenger/i)
    }, a.isMobileQQ = function() {
        var e = navigator.userAgent.toLowerCase();
        return "qq/" == e.match(/qq\//i)
    }, a.isIphone = function() {
        var e = navigator.userAgent.toLowerCase();
        return "iphone" == e.match(/iphone/i)
    }, a.isAndroid = function() {
        var e = navigator.userAgent.toLowerCase();
        return "android" == e.match(/android/i)
    }, a.mobileGuide = function(e) {
        function t() {
            r.show(), setTimeout(function() {
                var e = s > o.height() ? s : o.height();
                r.css({
                    height: e
                })
            }, 700), r.bind("click", function() {
                r.hide()
            })
        }
        var n = this,
            o = $(document.body),
            i = $("#download-android"),
            a = $("#download-iPhone"),
            r = $("#mobileGuide"),
            s = window.screen.availHeight;
        this.isWeixin() || this.isMobileQQ() || this.isIphone() || !a.attr("href") || !a.attr("href").match(/^http/) || $(".desc-download .for-iphone").attr("target", "_blank"), this.isWeixin() && (n.isIphone() ? a.bind("click", function(e) {
            return t(), r.find("img").hide(), r.find(".guide-iOS-download").show(), !1
        }) : i.bind("click", function(e) {
            return t(), r.find("img").hide(), r.find(".guide-android-download").show(), !1
        })), location.href.match(/\QR_download/) ? this.isAndroid() ? this.isWeixin() || this.isMobileQQ() ? (t(), r.find(".guide-android-download").show()) : setTimeout(function() {
            location.href = i.attr("href")
        }, 2e3) : this.isIphone() && (this.isWeixin() || this.isMobileQQ() ? (t(), r.find(".guide-iOS-download").show()) : setTimeout(function() {
            location.href = a.attr("href")
        }, 2e3)) : location.href.match(/\QR_share/) && (this.isWeixin() || this.isMobileQQ()) && (t(), this.isIphone() ? r.find(".guide-iOS-share").show() : this.isAndroid() && r.find(".guide-android-share").show())
    },
       a.changeLangCookies = function(e) {
        var t = e.target.href,
            n = t.match(/(en|jp|cn)+/i)[1];
        "www.smartisan.com" !== location.host && (e.preventDefault(), location.href.indexOf("lang=") < 0 ? location.href += "?lang=" + n : (location.href = location.href.replace(/\=(en|cn|jp)+/, function(e) {
            return "=" + n
        }), setTimeout(function() {
            window.location.reload()
        }, 200))), t.indexOf("en") === -1 ? i.put("lang", "zh-CN", {
            path: "/",
            domain: "smartisan.com"
        }) : i.put("lang", "en-US", {
            path: "/",
            domain: "smartisan.com"
        })
    }, a.setHeaderActive = function(t) {
        e.appHeader = t
    }, a.getServerTime = function() {
        var e = t.defer(),
            n = "http://setting.smartisan.com/info/time?jsonp=1",
            o = null;
        return $.ajax({
            type: "get",
            dataType: "jsonp",
            url: n,
            success: function(t) {
                t && 0 == t.code && t.data.timestamp && (o = parseInt(t.data.timestamp)), e.resolve({
                    now: o
                })
            },
            error: function() {
                e.resolve({
                    now: null
                })
            }
        }), e.promise
    }, a.isMSIE = function(e) {
        var t = navigator.userAgent,
            n = "MSIE ",
            o = /MSIE (\w+)+/gi.exec(t);
        return e ? t.indexOf(n + e) > -1 : !(!o || !o[1]) && Number(o[1])
    }, a
}]), appsServices.constant("Config", {
    baseUrl: "/index.php?r=",
    middlewareTestUrl: "http://172.16.21.72/product/",
    middlewareProUrl: "http://www.smartisan.com/product/",
    storeUrlRest: "/store/index.php?r=",
    mStoreUrlRest: "/store/index.php?r=",
    imgUrl: "http://img01.smartisanos.cn/",
    headconfig: {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
    },
    storeUrl: "http://store.smartisan.com/#/",
    regExp: {
        isMobile: /^1[3|4|5|7|8]\d{9}$/,
        isMail: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
        isPassword: /^[\w\\\[\]\:\^\-~!@#$%&*()-+={}|;'",.\/<>?]{6,16}$/,
        isSafeUrl: /^(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.(smartisan.com\b)(:[a-zA-Z0-9]*)?\/?([a-zA-Z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*$/,
        isIMEI: /^\d{15}$/,
        isMAC: /^([0-9a-fA-F]{2})(([\s:][0-9a-fA-F]{2}){5})$/,
        numOrEn: /^[0-9a-zA-Z]+$/,
        errorStr: /^[^\&\<\>]*$/
    },
    getDPR: function() {
        var e = window.devicePixelRatio,
            t = "1x";
        return e && (e > 1 && e <= 2 ? t = "2x" : e > 2 && (t = "mobile")), t
    },
    getDomain: function() {
        return window.location.host.indexOf("smartisan.com") >= 0 ? "smartisan.com" : "localhost"
    }
}).constant("ACCESS_LEVELS", {
    pub: 1,
    user: 2,
    cloud: 3,
    alpha: 4
}), appsServices.factory("Message", ["$rootScope", "Account", "User", "BaseInfo", "$location", function(e, t, n, o, i) {
    var a = function(a) {
        var r = a.originalEvent;
        r.origin == t.config.origin && ("isLoggedIn" == r.data && (o.update(), t.config.cartSync && ("-1" != i.path().indexOf("/cart") ? e.$broadcast("login", {
            name: "cart"
        }) : "-1" != i.path().indexOf("/accessories") ? e.$broadcast("login", {
            name: "accessories"
        }) : e.$broadcast("cart", {
            name: "syncList"
        }))), "isRegistered" == r.data && (o.update(), t.config.cartSync && ("-1" != i.path().indexOf("/cart") ? e.$broadcast("login", {
            name: "cart"
        }) : e.$broadcast("cart", {
            name: "syncList"
        }))), "isLoggedOut" == r.data && (t.close(), n.logout(), t.config.cartSync && (e.$broadcast("cart", {
            name: "removeCartAll"
        }), "-1" != i.path().indexOf("/cart") ? e.$broadcast("dialogClose", {
            name: "cart"
        }) : e.$broadcast("dialogClose", {
            name: "normal"
        }))), "dialogClose" == r.data && (t.close(), t.config.cartSync && ("-1" != i.path().indexOf("/cart") ? e.$broadcast("dialogClose", {
            name: "cart"
        }) : e.$broadcast("dialogClose", {
            name: "normal"
        }), e.$apply())))
    };
    return {
        handler: a
    }
}]), appsServices.factory("Account", ["$window", function(e) {
    var t = {},
        n = {
            wrapper: "body",
            origin: "https://account.smartisan.com",
            loginUrl: "https://account.smartisan.com/#/v2/login",
            logoutUrl: "https://account.smartisan.com/#/logout/embed",
            cartSync: !1
        },
        o = function() {
            if (!t.wrapper) {
                var e = [];
                e.push('<div class="iframe-dialog" id="iframe-dialog">'), e.push('<div class="mask"></div>'), e.push('<iframe allowtransparency="true" src="" frameborder="0"></iframe>'), e.push("</div>"), t.wrapper = $(n.wrapper), t.wrapper.append(e.join(""))
            }
            t.mask = $("#iframe-dialog .mask"), t.iframe = $("#iframe-dialog iframe")
        },
        i = function() {
            t.iframe && (t.mask.hide(), t.iframe.removeClass("show"), t.iframe.attr("src", ""))
        },
        a = function() {
            var t = e.location.href;
            e.location.href = n.loginUrl + "?return_url=" + encodeURIComponent(t)
        },
        r = function() {
            var i = n.logoutUrl;
            o();
            var a = e.location.origin || e.location.protocol + "//" + e.location.hostname;
            t.iframe.attr("src", i + "?origin=" + a)
        },
        s = function(e) {
            n = angular.extend(n, e || {})
        };
    return {
        config: n,
        close: i,
        login: a,
        logout: r,
        set: s
    }
}]), appsServices.factory("User", ["$rootScope", "$q", "$http", "$location", "Config", "ACCESS_LEVELS", "Utils", function(e, t, n, o, i, a, r) {
    var s = {},
        l = !1,
        c = i.baseUrl;
    "-1" != location.href.indexOf("www.smartisan.com") && (c = i.storeUrlRest);
    var u = i.headconfig,
        m = function(t) {
            $.extend(s, t), l = !0, s.role > a.user ? e.isLoggedIn = !0 : e.isLoggedIn = !1
        },
        p = function() {
            var o = t.defer(),
                i = {};
            i.fields = "avatar_url,nickname,cellphone,t1_gift";
            var a = r.toKeyValue(i);
            return n.post(c + "Account/IsLogin", a, u).success(function(t) {
                0 == t.code ? (m(t.data), e.isLoggedIn = !0, o.resolve(t)) : (e.isLoggedIn = !1, o.reject(t))
            }).error(function() {
                o.reject("网络异常!")
            }), o.promise
        };
    return {
        getInfo: p,
        isInitial: function() {
            return l
        },
        isAuthorized: function(e) {
            return s && s.role >= e
        },
        set: m,
        isLoggedIn: function() {
            return !!s.uid
        },
        getUser: function() {
            return s
        },
        getId: function() {
            return s ? s.uid : null
        },
        getName: function() {
            return s.name || ""
        },
        getRole: function() {
            return s.role || null
        },
        getAvatarUrl: function() {
            return s.avatarUrl || ""
        },
        logout: function() {
            s = {}, e.isLoggedIn = !1, e.$broadcast("logout"), e.$apply()
        }
    }
}]), appsServices.factory("BaseInfo", ["$rootScope", "$q", "$cookies", "User", "Account", "Utils", "$timeout", "$location", function(e, t, n, o, i, a, r, s) {
    var l = function() {
        var s = t.defer();
        return o.getInfo().then(function(t) {
            i.close(), e.loginUser = t.data, s.resolve();
            var o = !1;
            if (!a.isMobile() && 0 == t.code && t.data.t1_gift && parseInt(t.data.t1_gift) > 0 ? (r(function() {
                    $(".header .account-panel .account-menu li.coupon").addClass("active")
                }, 1e3), o = !0) : $(".header .account-panel .account-menu li.coupon").removeClass("active"), i.config.cartSync) {
                var l = n.get("couponNotice");
                1 != l && o && r(function() {
                    var e = $(".main .notice-dialog");
                    e.length > 0 && (e.show().delay().toggleClass("on", !0), n.put("couponNotice", 1, {
                        domain: ".smartisan.com",
                        path: "/"
                    }), e.find(".notice-close").on("click", function(t) {
                        t.preventDefault(), e.remove()
                    }))
                }, 200)
            }
        }, function(e) {
            s.reject()
        }), s.promise
    };
    return {
        update: l
    }
}]), appsServices.factory("Request", ["$http", "$q", "Config", "Utils", function(e, t, n, o) {
    var i = n.baseUrl,
        a = n.headconfig,
        r = function(n) {
            return function(r) {
                var s = t.defer(),
                    l = o.toKeyValue(r);
                return e.post(i + n, l, a).success(function(e) {
                    s.resolve(e)
                }).error(function() {
                    s.reject("网络异常!")
                }), s.promise
            }
        };
    return {
        recruiting: r("recruit/create"),
        finderRecruiting: r("finder/create"),
        getProvince: r("Areas/Province"),
        getCity: r("Areas/City"),
        getDistrict: r("Areas/Area")
    }
}]), appsServices.factory("Language", ["$rootScope", "$cookies", "$window", "$location", function(e, t, n, o) {
    var i = window.location.pathname.match(/\/(jp|en|cn)\//i),
        a = function() {
            i ? e.lang = i[1] : o.search().lang ? e.lang = o.search().lang : e.lang = "cn", e.langStatic = "cn" === e.lang ? "" : e.lang + "/"
        };
    return {
        init: a
    }
}]), appsServices.provider("Navigator", {
    isMobile: !1,
    language: "cn",
    init: function() {
        this.setMobile(), this.setLanguage()
    },
    setMobile: function() {
        var e = window.devicePixelRatio || 1;
        this.isMobile = $(window).width() <= 736 && (screen.width <= 736 || e >= 2)
    },
    setLanguage: function() {
        var e = window.location.pathname.match(/\/(jp|en|cn)\//i);
        e ? this.language = e[1] : location.href.indexOf("?lang=") != -1 ? this.language = location.href.split("?lang=")[1] : this.language = "cn"
    },
    $get: function() {
        var e = this;
        return {
            language: e.language,
            isMobile: e.isMobile
        }
    }
}), appsServices.factory("TitleBar", ["$rootScope", "$location", "Utils", function(e, t, n) {
    var o = ( !! n.isUCMobile(), function(e) {
            "logo" == e ? ($(".title-bar .nav-logo").removeClass("hide"), $(".title-bar .nav-title").addClass("hide")) : ($(".title-bar .nav-title").html(e), $(".title-bar .nav-logo").addClass("hide"), $(".title-bar .nav-title").removeClass("hide"))
        }),
        i = function(e) {
            "back" == e ? ($(".title-bar .nav-back").removeClass("hide"), $(".title-bar .nav-toggle").addClass("hide")) : ($(".title-bar .nav-back").addClass("hide"), $(".title-bar .nav-toggle").removeClass("hide"))
        },
        a = function(e) {
            "shop" == e ? $(".title-bar .nav-aside").removeClass("hide") : $(".title-bar .nav-aside").addClass("hide")
        },
        r = function(e) {
            $(".header-mobile").removeClass().addClass("header-mobile"), $(".header-mobile").addClass(e)
        };
    return {
        setOptions: function(e) {
            e = e || {};
            var t = e.title || "logo",
                n = e.toggle || "toggle",
                s = e.aside || "shop",
                l = e.theme || "";
            o(t), i(n), a(s), r(l)
        },
        init: function() {
            var n = new IScroll("#nav-drawer", {
                    tap: "mobileNavTap"
                }),
                o = function(n) {
                    for (var o = n.target;
                         "span" == o.tagName.toLowerCase();) o = o.parentNode;
                    if ("a" == o.tagName.toLowerCase()) {
                        var i = $(o),
                            a = i.attr("href");
                        i.addClass("active"), setTimeout(function() {
                            /^#\//.test(a) ? e.$apply(function() {
                                t.url(a.split("#")[1])
                            }) : window.location.href = a
                        }, 10), setTimeout(function() {
                            $(".nav-drawer").removeClass("active"), i.removeClass("active")
                        }, 300)
                    }
                };
            $("#nav-drawer").on("mobileNavTap", o), $(".title-bar").on("touchmove", function(e) {
                e.preventDefault()
            }), $(".header-mobile .nav-toggle").on("touchend", function(e) {
                var t = e.originalEvent.changedTouches;
                t && t.length && ($(".nav-drawer").toggleClass("active"), $(".nav-drawer").hasClass("active") && (n.scrollTo(0, 0), n.refresh()))
            })
        }
    }
}]), appsFilters.filter("to_HTML", ["$sce", function(e) {
    return function(t) {
        return e.trustAsHtml(t)
    }
}]), appsDirectives.directive("changeLanguage", ["$document", function(e) {
    return {
        restrict: "A",
        link: function(t, n, o, i) {
            n && (n.on("click", function(e) {
                var t = $(e.target).closest(".language-switch");
                return t.toggleClass("active"), !1
            }), e.on("click", function(e) {
                var t = $(e.target);
                t.closest(".language-switch").is(".language-switch") || $(".language-switch").removeClass("active")
            }))
        }
    }
}]).directive("mobileTopbar", ["$location", "Topbar", function(e, t) {
    return {
        restrict: "EA",
        link: function(n, o, i, a) {
            o && (n.prevAction = function() {
                return angular.isFunction(n.topbar.prevFn) ? void n.topbar.prevFn() : void(n.topbar.prevIsBack && (history.length ? history.back(-1) : e.url("/")))
            }, t.addDom(i.name, o, n))
        }
    }
}]).directive("showWeixinCode", ["$document", "Utils", function(e, t) {
    return {
        restrict: "A",
        link: function(e, t, n, o) {
            t && t.find("a").on("click", function() {
                var e = $(this).parent(".weixin"),
                    t = e.find(".qrcode");
                if (t.is(":hidden")) {
                    e.addClass("hold");
                    var n = $(window).height() / 2;
                    t.css({
                        bottom: n + "px"
                    }), t.fadeIn(100), setTimeout(function() {
                        e.find(".mask").one("click", function() {
                            e.removeClass("hold"), t.fadeOut(300), e.removeClass("hold")
                        }), e.find(".close-btn").one("click", function() {
                            e.removeClass("hold"), t.fadeOut(300), e.removeClass("hold")
                        })
                    })
                }
            })
        }
    }
}]).directive("openServiceWindow", ["$document", "Utils", function(e, t) {
    return {
        restrict: "A",
        link: function(e, n, o, i) {
            n && n.on("click", function(e) {
                e.preventDefault(), t.openServiceWindow()
            })
        }
    }
}]).directive("mobileNavShow", ["$document", function(e) {
    return {
        restrict: "A",
        link: function(e, t, n, o) {
            t && $(document).on("touchend", ".mobile-topbar .nav-toggle", function(e) {
                var t = e.originalEvent.changedTouches;
                return t && t.length && ($("html").toggleClass("mobile-noscroll"), $(".wrapper").removeClass("moblie-quick-nav"), $(".wrapper").toggleClass("moblie-show-nav")), !1
            })
        }
    }
}]).directive("backTop", ["$document", function(e) {
    return {
        restrict: "A",
        link: function(e, t, n, o) {
            t && ($(window).on("scroll", function() {
                $(window).scrollTop() > 600 ? t.addClass("active") : t.removeClass("active")
            }), t.on("click", function() {
                $("html, body").animate({
                    scrollTop: 0
                }, {
                    queue: !1
                }, 500)
            }))
        }
    }
}]).directive("accountReservation", ["$document", "Utils", function(e, t) {
    return {
        restrict: "A",
        link: function(e, n, o, i) {
            n && t.isMobile() && n.on("click", function() {
                $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
            })
        }
    }
}]).directive("routeChangeResetHeader", [function() {
    return {
        restrict: "A",
        controller: ["$element", "$rootScope", function(e, t) {
            t.$on("$routeChangeStart", function() {
                e.find(".header-sub .breadcrumb").removeClass("hide")
            })
        }]
    }
}]).directive("routeChangeResetFooter", [function() {
    return {
        restrict: "A",
        controller: ["$element", "$rootScope", function(e, t) {
            t.$on("$routeChangeStart", function() {
                e.find(".language-switch").removeClass("active")
            })
        }]
    }
}]).directive("copyrightYear", [function() {
    return {
        restrict: "A",
        link: function(e, t, n, o) {
            var i = new Date,
                a = (i.getFullYear(), i.getMonth() + 1, 2016);
            $(t).html(a)
        }
    }
}]).directive("mobileDevice", ["Utils", function(e) {
    return {
        restrict: "A",
        link: function(t, n, o, i) {
            var a = "";
            if (e.isMobile()) {
                var r = navigator.userAgent.toLowerCase(),
                    s = "iphone os" == r.match(/iphone os/i),
                    l = "android" == r.match(/android/i);
                s ? a = "device-iphone" : l && (a = "device-android"), $(n).addClass(a), $("body").addClass(a)
            }
        }
    }
}]).directive("jQrcode", ["$timeout", "Utils", function(e, t) {
    return {
        restrict: "A",
        link: function(e, t, n, o) {
            t && (document.createElement("canvas").getContext ? setTimeout(function() {
                $(t).empty(), $(t).qrcode({
                    render: "canvas",
                    width: 110,
                    height: 110,
                    text: n.qrcode
                })
            }, 300) : $(t).append('<img src="' + n.src + '">'))
        }
    }
}]).directive("titleBar", ["TitleBar", "Utils", function(e, t) {
    return {
        restrict: "A",
        link: function(n, o, i, a) {
            n.titleBar = n.titleBar || {
                    navList: []
                },
            n.goBack = function() {
                history.length ? history.back(-1) : window.location.href = "http://www.smartisan.com/"
            }, t.isMobile() && e.init()
        }
    }
}]).directive("retinaSrc", ["$window", "$http", function(e, t) {
    function n(e) {
        var t = e.split(".");
        return t.length < 2 ? e : (t[t.length - 2] += o, t.join("."))
    }
    var o = "@2x",
        i = /^data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/,
        a = parseInt((/msie (\d+)/.exec(e.navigator.userAgent.toLowerCase()) || [])[1], 10),
        r = function() {
            var t = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
            return e.devicePixelRatio > 1 || e.matchMedia && e.matchMedia(t).matches
        }();
    return {
        restrict: "A",
        scope: {
            retinaSrc: "@"
        },
        link: function(o, s, l, c) {
            function u(t) {
                var n = e.sessionStorage.getItem(t);
                return n
            }
            function m(t, n) {
                e.sessionStorage.setItem(t, n)
            }
            function p(e) {
                l.$set("src", e), a && s.prop("src", e)
            }
            function d(e) {
                var o;
                o = angular.isUndefined(l.at2x) ? u(e) : l.at2x, o ? p(o) : (o = n(e), t.head(o).success(function(t, n) {
                    p(o), m(e, o)
                }).error(function(t, n, o, i) {
                    p(e), m(e, e)
                }))
            }
            o.$watch("retinaSrc", function(t) {
                t && (r && t.indexOf("@2x.") == -1 && angular.isUndefined(l.noretina) && "object" == typeof e.sessionStorage && "IMG" === s[0].tagName && !t.match(i) ? d(t) : p(t))
            })
        }
    }
}]), appsControllers.controller("MainCtrl", ["$scope", "$rootScope", "$http", "$timeout", "$location", "$window", "Account", "Message", "BaseInfo", "Utils", "StoreConfig", "CartCollection", "CartService", "ActivityTime", "StorageService", "$cookies", function(e, t, n, o, i, a, r, s, l, c, u, m, p, d, g, f) {
    $(window).on("message", function(e) {
        s.handler(e)
    }), t.$on("login", function(e, t) {
        if (t && angular.isObject(t)) switch (t.name) {
            case "cart":
                window.location.reload()
        }
    }), t.$on("dialogClose", function(e, t) {
        if (t && angular.isObject(t)) switch (t.name) {
            case "cart":
                i.path("/");
                break;
            case "normal":
        }
    }), l.update(), e.login = function() {
        l.update().then(function(e) {
            t.isLoggedIn = !0
        }, function(e) {
            r.login()
        })
    }, e.logout = function() {
        r.logout()
    };
    var h = $(".language-switch");
    e.changeLan = function() {
        h.toggleClass("active")
    },
    e.changeLangCookies = c.changeLangCookies, _.indexOf(location.host.split("#"), "www.smartisan.com") > -1 ? t.storePathName = "http://www.smartisan.com/shop/" : t.storePathName = "../shop/", t.isMobile && "cn" == t.lang && (e.render = function() {
        var e = m.CartCollection.all(),
            n = p.countCart(),
            o = [],
            i = 0,
            a = 0,
            r = 0;
        e && e.length > 0 && angular.forEach(e, function(e, t) {
            e.isSell && (o.push(e), i += e.num, a += e.subtotal, e.isMobile && e.isAccident && (o.push(e.accident), i += e.num, a += e.accident.price * e.num), e.isMobile && e.isDelay && (o.push(e.delay), i += e.num, a += e.delay.price * e.num), e.isDiscount && (r += e.num))
        }), e.length || (i = n.num), t.mobileTopCartNum = i
    }, o(function() {
        e.render()
    }, 300), t.$on("cart", function(t, n) {
        if (n && angular.isObject(n)) switch (n.name) {
            case "changeCart":
            case "removeSingleCart":
                o(function() {
                    e.render()
                }, 500)
        }
    })), e.initBrowser = function() {
        $("body").toggleClass("browser-windows", u.config.isWindows)
    }, t.isMobile || e.initBrowser(), e.mainConfig = u
}]), appsControllers.controller("HomeCtrl", ["$rootScope", "$scope", "Utils", function(e, t, n) {
    "jp" == e.lang ? n.setTitle("Smartisan Technology") : n.setTitle("en" == e.lang ? "Smartisan" : "锤子科技官网"), $(".header-sub .breadcrumb").addClass("hide"), n.setCrumbs([{
        title: ""
    }]), $(".header").addClass("header-t2"), $(".header").addClass("header-t2-black"), e.isMobile && $(".header-sub").addClass("header-dark"), e.currentPage = "home", n.setHeaderActive("index")
}]), appsControllers.controller("ActivityCtrl", ["$rootScope", "$scope", "Utils", function(e, t, n) {
    "jp" == e.lang ? n.setTitle("Smartisan Technology") : n.setTitle("en" == e.lang ? "Smartisan" : "锤子科技官网"), e.currentPage = "home", n.setHeaderActive("index");
    var o = $(".carousel").carousel({
        slideName: ".carousel-slides",
        maskName: ".carousel-mask",
        slideBtnsName: ".carousel-buttons",
        timeout: 5e3
    });
    o.doCarousel()
}]), appsControllers.controller("ErrorCtrl", ["$scope", "$timeout", "Utils", "$routeParams", "$rootScope", function(e, t, n, o, i) {
    function a() {
        if (e.errorId) {
            if (e.second -= 1, 0 == e.second) {
                var n = "";
                "en" != i.lang && "jp" != i.lang || (n = i.lang + "/"), location.href = "http://www.smartisan.com/" + n
            }
            c = t(a, 1e3)
        }
    }
    var r = {
            cn: {
                "40x": "抱歉，您输入的地址有误，请稍后再试。",
                "50x": "抱歉，服务器内部错误，请稍后再试。",
                503: "抱歉，服务器忙碌，请稍后再试。",
                errorTitle: "注意",
                title: "锤子科技官网",
                crumbs: "首页"
            },
            jp: {
                "40x": "申し訳ありません。このページは表示できません。時間を置いて再接続しください。",
                "50x": "申し訳ありません。サーバーエラーです。時間を置いて再接続しください。",
                503: "申し訳ありません。アクセスが集中しているため、つながりにくくなっております。時間を置いて再接続しください。",
                errorTitle: "通知",
                title: "スマーティザンテクノロジーオフィシャルサイト",
                crumbs: "ホームページ"
            },
            en: {
                "40x": "The page you are looking for can not be found.",
                "50x": "The page you are looking for can not be found.",
                503: "The page you are looking for can not be found.",
                errorTitle: "Notice",
                title: "Smartisan",
                crumbs: "Index"
            }
        },
        s = function(e) {
            var t = {
                errorId: 404,
                errorStatus: r[i.lang]["40x"]
            };
            switch (e) {
                case "402":
                    t.errorStatus = r[i.lang]["40x"], t.errorId = 402;
                    break;
                case "403":
                    t.errorStatus = r[i.lang]["40x"], t.errorId = 403;
                    break;
                case "404":
                    t.errorStatus = r[i.lang]["40x"], t.errorId = 404;
                    break;
                case "500":
                    t.errorStatus = r[i.lang]["50x"], t.errorId = 500;
                    break;
                case "502":
                    t.errorStatus = r[i.lang]["50x"], t.errorId = 502;
                    break;
                case "503":
                    t.errorStatus = r[i.lang][503], t.errorId = 503;
                    break;
                default:
                    t.errorStatus = r[i.lang]["40x"], t.errorId = 404
            }
            return t
        },
        l = o.id;
    e.errorId = s(l).errorId, e.errorStatus = s(l).errorStatus, e.errorTitle = r[i.lang].errorTitle, e.second = 10, n.setTitle(r[i.lang].title), n.setCrumbs([{
        title: r[i.lang].crumbs,
        url: "#/home"
    }, {
        title: e.errorId
    }]);
    var c;
    a(), e.$on("$locationChangeStart", function() {
        t.cancel(c)
    }), $(".page-loading").hide()
}]), appsControllers.controller("StoreCtrl", ["$rootScope", "$scope", "$filter", "Utils", "$timeout", "StoreConfig", "Config", "home", "CartRequest", "AddCartAnimation", "CartService", "DialogService", function(e, t, n, o, i, a, r, s, l, c, u, m) {
    var p = a.csstransforms3d;
    o.setTitle("官方在线商城", "Smartisan"), o.setCrumbs([{
        title: ""
    }]), e.currentPage = "home", o.setHeaderActive("index"), t.bannerList = [{
        id: "0822",
        time: 5e3,
        link: "http://www.smartisan.com/shop/#/jianguo",
        className: "0822",
        title: "呼朋唤友打配合",
        wapImg: "http://static.smartisanos.cn/index/img/store/home/wap-home-0822-banner_93055651da.png"
    }, {
        id: "redS1000",
        time: 5e3,
        link: e.storePathName + "#/t2",
        className: "redS1000",
        title: "夏日套装，买 T2 赠 S-1000 耳机",
        wapImg: "http://static.smartisanos.cn/index/img/store/home/wap-home-redS1000-banner_c5bc33e847.png"
    }], t.$on("$viewContentLoaded", function(o) {
        function r() {}
        var d = s[0];
        if (t.promotionInfo = s[1], t.cssAnimation = a.csstransitions, t.activities = d.activities, t.hot = d.hot, t.hotCurrentPage = 0, t.hotTotalPage = 1, d.hot.length > 4 && (t.hotTotalPage = Math.floor(d.hot.length / 4), t.hot = t.hot.slice(0, 4 * t.hotTotalPage)), !e.isMobile) {
            for (var g = [], f = 0; f < t.hotTotalPage; f++) g.push(t.hot.slice(4 * f, 4 * f + 4));
            t.hot = g
        }
        t.showHotNav = t.hotTotalPage > 1, t.hotGoPre = function() {
            t.hotCurrentPage > 0 && (t.hotCurrentPage--, r())
        }, t.hotGoNext = function() {
            t.hotCurrentPage < t.hotTotalPage - 1 && (t.hotCurrentPage++, r())
        };
        var h = null,
            v = 150,
            b = null;
        t.changeSku = function(e, t, n) {
            h = i(function() {
                e != t.currentSku.skuId && (b && i.cancel(b), $(".cart-btn").show(), $(".cart-btn-noanim").removeClass("active"), t.currentSku = t.skuInfo[e])
            }, v)
        }, t.cancelChangeSku = function(e, t) {
            i.cancel(h)
        }, t.floors = d.floors;
        var y = null;
        t.changeFloorTab = function(e, t) {
            y = i(function() {
                e.currentTabIndex = t, e.currentTab = e.tabs[e.currentTabIndex]
            }, v)
        }, t.technology = [{
            image: "http://static.smartisanos.cn/index/img/technology/technology-t2_c0e9fe98b2.jpg",
            link: "http://www.smartisan.com/pr/#/video/smartisant2"
        }, {
            image: "http://static.smartisanos.cn/index/img/technology/technology-os_8b9a855475.jpg",
            link: "http://www.smartisan.com/os/#/useful"
        }, {
            image: "http://static.smartisanos.cn/index/img/technology/technology-fash_591b3ffa87.jpg",
            link: "http://www.smartisan.com/pr/#/report"
        }, {
            image: "http://static.smartisanos.cn/index/img/technology/technology-huanxin_afc365a57c.jpg",
            link: "http://store.smartisan.com/#/huanxin"
        }], t.cancelChangeFloorTab = function() {
            i.cancel(y)
        }, t.getStock = function(e) {
            var t = [];
            e.getStock || (e.getStock = !0, angular.forEach(e.skuInfo, function(e, n) {
                t.push(n)
            }), l.GetSkusInfo({
                ids: t.join(","),
                with_stock: !0
            }).then(function(t) {
                var n = t.data.list;
                angular.forEach(n, function(t, n) {
                    e.skuInfo[t.id] && (e.skuInfo[t.id].inStock = t.in_stock, t.id == e.currentSku.skuId && (e.currentSku.inStock = t.in_stock))
                })
            }))
        }, t.addCart = function(t, o) {
            var r = $(t.currentTarget);
            a.csstransitions && c.getIsRunnng() || (e.$emit("cart", {
                name: "addCartInAnimation",
                sku: o.skuId
            }), c.init(r, n("onlineImage")(o.image, "60")), u.addCart({
                sku: o.skuId,
                num: 1
            }).then(function(e) {
                e ? a.csstransitions ? c.start() : (r.hide().siblings(".cart-btn-noanim").addClass("active"), b = i(function() {
                    r.show().siblings(".cart-btn-noanim").removeClass("active"), i.cancel(b)
                }, 2e3)) : (m.setContent("dialog", {
                    message: "此商品已下架或暂无库存",
                    dialogClass: "module-dialog-confirm"
                }), m.open("dialog"))
            }, function(e) {}))
        }, i(function() {
            $(function() {
                if (e.isMobile) {
                    var t = $(".loop-banner").carousel({
                        slideName: ".loop-banner-list",
                        slideBtnsName: ".banner-3d-buttons",
                        timeout: 5e3
                    });
                    t.doCarousel()
                } else if ($(".banner-3d").length > 0) {
                    var t = $(".banner-3d").carousel({
                        slideName: ".banner-3d-slides",
                        slideBtnsName: ".banner-3d-buttons",
                        maskName: ".banner-3d-mask",
                        isLoopStop: !p,
                        timeout: 5e3
                    });
                    $(".banner-3d").banner3D({
                        enter3d: function() { !! p && t.exitCarousel()
                        },
                        exit3d: function() { !! p && t.doCarousel()
                        }
                    });
                    t.doCarousel()
                }
            })
        }, 0)
    })
}]), appsServices.constant("StoreConfig", {
    storeUrl: "http://store.smartisan.com/#/",
    storeUrlRest: "http://store.smartisan.com/index.php?r=",
    mStoreUrlRest: "http://m.store.smartisan.com/index.php?r=",
    postageTerm: 150,
    postage: 15,
    useGoodsDiscount: !1,
    goodsDiscount: {
        cover: {
            num: 3,
            discount: 48
        }
    },
    useGoodsDiscount520Data: !1,
    useGoodsDiscount520: !1,
    jsonp520Time: 1463661066,
    goodsDiscount520: {
        num: 5,
        freeNum: 2
    },
    nowActivity: {},
    isRetina: window.devicePixelRatio && window.devicePixelRatio > 1.2,
    isMobileTerminal: /iphone|android|ucweb|ucbrowser|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase()),
    isMobile: /iphone|android|ucweb|ucbrowser|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase()) && !/ipad/i.test(navigator.userAgent.toLowerCase()),
    isUC: /ucweb|ucbrowser/i.test(navigator.userAgent.toLowerCase()),
    csstransitions: Modernizr.csstransitions,
    csstransforms3d: Modernizr.csstransforms3d,
    opacity: Modernizr.opacity,
    recommendedProds: [],
    paging: {
        pageViewClass: "page-view",
        selectClass: "on",
        prevClass: "page-prev",
        prevWidth: 97,
        nextClass: "page-next",
        nextWidth: 97,
        lastClass: "page-last",
        lastWidth: 50,
        firstClass: "page-first",
        firstWidth: 51,
        itemWidth: 51
    },
    captcha: {
        supportImei: "Captcha/imeishow",
        mobileCode: "Captcha/Show",
        singleWarranty: "Captcha/ImeiShow",
        tmallExchange: "captcha/recruitShow",
        addressCode: "Captcha/Show"
    },
    formatJSONToHash: function(e) {
        var t = [];
        return $.each(e, function(e, n) {
            t.push(e + "=" + n)
        }), t.join("&")
    },
    formatUrlHash: function(e, t, n) {
        var o = !1,
            e = e && e.replace(/^[?|&]/, "") || "",
            i = e.split("&") || [],
            a = {
                arrParams: [],
                jsonParams: {}
            };
        return $.each(i, function(e, i) {
            var r = i.split("=");
            r.length > 1 && (r[0] == t ? (o = !0, a.arrParams.push({
                key: t,
                value: n
            })) : a.arrParams.push({
                key: r[0],
                value: r[1]
            }), a.jsonParams[r[0]] = r[1])
        }), t && n && !o && a.arrParams.push({
            key: t,
            value: n
        }), a
    },
    config: function() {
        var e = navigator.userAgent.toLowerCase(),
            t = {
                layoutContainer: $(document),
                commonTempUrl: "base-template",
                pageUrl: "",
                ajaxUrl: "",
                errorMap: {},
                isIE: /msie/.test(e),
                isIE6: /msie 6/.test(e),
                isHackIE: /msie [7-8]/.test(e),
                isWebkit: /webkit/.test(e),
                isFirefox: /firefox/.test(e),
                isWindows: /windows/.test(e),
                isLinux: /linux/.test(e),
                isMac: /mac/.test(e)
            };
        return t.isNormalIE = t.isIE && !t.isIE6 && !t.isHackIE, t
    }()
});
try {
    jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        easeOutQuart: function(e, t, n, o, i) {
            return -o * ((t = t / i - 1) * t * t * t - 1) + n
        }
    }), function(e, t, n) {
        function o() {
            i = t[s](function() {
                a.each(function() {
                    var t = e(this),
                        n = t.width(),
                        o = t.height(),
                        i = e.data(this, c);
                    n === i.w && o === i.h || t.trigger(l, [i.w = n, i.h = o])
                }), o()
            }, r[u])
        }
        var i, a = e([]),
            r = e.resize = e.extend(e.resize, {}),
            s = "setTimeout",
            l = "resize",
            c = l + "-special-event",
            u = "delay",
            m = "throttleWindow";
        r[u] = 250, r[m] = !0, e.event.special[l] = {
            setup: function() {
                if (!r[m] && this[s]) return !1;
                var t = e(this);
                a = a.add(t), e.data(this, c, {
                    w: t.width(),
                    h: t.height()
                }), 1 === a.length && o()
            },
            teardown: function() {
                if (!r[m] && this[s]) return !1;
                var t = e(this);
                a = a.not(t), t.removeData(c), a.length || clearTimeout(i)
            },
            add: function(t) {
                function o(t, o, a) {
                    var r = e(this),
                        s = e.data(this, c);
                    s.w = o !== n ? o : r.width(), s.h = a !== n ? a : r.height(), i.apply(this, arguments)
                }
                if (!r[m] && this[s]) return !1;
                var i;
                return e.isFunction(t) ? (i = t, o) : (i = t.handler, void(t.handler = o))
            }
        }
    }(jQuery, this), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        var t = this.length >>> 0,
            n = Number(arguments[1]) || 0;
        for (n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += t); n < t; n++) if (n in this && this[n] === e) return n;
        return -1
    })
} catch (e) {}
appsServices.factory("StorageService", ["$q", function(e) {
    function t() {
        var e = this;
        e.canUsed = !! window.localStorage && "object" == typeof JSON && null !== JSON && "function" == typeof JSON.parse && "function" == typeof JSON.stringify
    }
    return t.prototype.init = function() {}, t.prototype.get = function(e, t) {
        var n = this,
            t = t || {},
            o = $.cookies.get(e, t);
        if (n.canUsed && !t.useCookie) {
            var i = decodeURIComponent(localStorage.getItem(e)),
                a = "null" !== i ? JSON.parse(i) : o;
            return o && (n.remove(e, t), n.set(e, a)), a
        }
        return o
    }, t.prototype.set = function(e, t, n) {
        var o = this,
            n = n || {};
        o.canUsed && !n.useCookie ? (o.remove(e), "string" != typeof t && (t = JSON.stringify(t)), localStorage.setItem(e, encodeURIComponent(t))) : $.cookies.set(e, t, n)
    }, t.prototype.filter = function(e, t) {
        var n = this,
            t = t || {},
            o = $.cookies.filter(e, t);
        if (n.canUsed && !t.useCookie) {
            "string" == typeof e && (e = new RegExp(e));
            for (var i in localStorage) i.match(e) && (o[i] = n.get(i, t))
        }
        return o
    }, t.prototype.remove = function(e, t) {
        var n = this,
            t = t || {};
        n.canUsed && localStorage.removeItem(e), $.cookies.del(e, t)
    }, new t
}]), appsServices.factory("CartCollection", ["$rootScope", "$collection", "$filter", "Config", function(e, t, n, o) {
    var i = {
        CartCollection: t.getInstance()
    };
    return i.syncCollection = function(t, a) {
        var r = i.CartCollection.get(t.sku),
            s = {};
        if (r) s = $.extend({}, r, t), s.num = 0 | s.num, s.num = Math.min(s.max, s.num), s.subtotal = s.price * s.num;
        else {
            if (a) return !1;
            s = $.extend({}, t), s.max = s.max || 10, s.num = 0 | s.num || 1, s.num = Math.min(s.max, s.num), s.price = s.price || 0, s.subtotal = s.price * s.num
        }
        var l;
        try {
            l = n("nextDate")(30)
        } catch (c) {}
        try {
            $.cookies.set("ct" + s.sku, s.num, {
                expiresAt: l,
                domain: o.getDomain()
            }), s.isMobile && (s.warranty ? $.cookies.set("cw" + s.sku, s.warranty, {
                expiresAt: l,
                domain: o.getDomain()
            }) : $.cookies.del("cw" + s.sku, {
                domain: o.getDomain()
            })), r ? i.CartCollection.update(s) : i.CartCollection.add(s), e.$emit("cart", {
                name: "changeCart"
            })
        } catch (c) {}
    }, i.removeAll = function() {
        i.CartCollection.removeAll(), e.$emit("cart", {
            name: "changeCart"
        })
    }, i
}]), appsServices.factory("CartService", ["$q", "StoreConfig", "Config", "$rootScope", "CartCollection", "CartRequest", "GoodsService", "MobileGoodsService", "$filter", function(e, t, n, o, i, a, r, s, l) {
    function c() {
        var e = this;
        e.CartCollection = i.CartCollection, e.cache = {}, e.fetchData = {}, e.fetchLoop = null, e.loopTime = []
    }
    return c.prototype.getFeatureList = function(t) {
        return a.getFeatureList({
            pos_ids: t
        }).then(function(t) {
            var n = e.defer();
            return t.code ? n.reject("网络延迟") : n.resolve(t.data), n.promise
        }, function(e) {
            return !1
        })
    }, c.prototype.syncList = function() {
        var t = this,
            o = [],
            i = $.cookies.filter("^ct");
        t.fetchLoop = null, $.each(i, function(e, t) {
            var n = e.replace(/^ct/, ""),
                i = $.cookies.get("cw" + n);
            n && "undefined" != n && (i ? o.push(n + ":" + i + ":" + Math.max(t, 1)) : o.push(n + ":" + Math.max(t, 1)))
        });
        var r = {};
        return o.length && (r.goods = o.join(",")), a.sync(r).then(function(o) {
            var i = e.defer();
            if (o.code) i.reject(o);
            else {
                var a = o.data;
                angular.forEach(a, function(e) {
                    if (e.extended && e.extended.length) {
                        var t = e.extended.join(":");
                        $.cookies.set("cw" + e.goods_code, t, {
                            expiresAt: l("nextDate")(30),
                            domain: n.getDomain()
                        })
                    }
                }), t.getLocalList(a).then(function(e) {
                    i.resolve(e)
                })
            }
            return i.promise
        }, function(e) {
            return !1
        })
    }, c.prototype.getLocalList = function(t) {
        var n = e.defer(),
            o = this,
            a = s.mapWarrantys,
            l = [],
            c = $.cookies.filter("^ct");
        if (t) for (var u = 0; u < t.length; u++) c["ct" + t[u].goods_code] = t[u].goods_num;
        return $.each(c, function(e, t) {
            l.push(e.replace(/^ct/, ""))
        }), l.length ? r.getSimpleDetail(l).then(function(e) {
            var t = {
                on_sell_list: [],
                off_sell_list: []
            };
            return $.each(c, function(n, r) {
                var s = n.replace(/^ct/, ""),
                    l = null,
                    c = e[s];
                if (c) {
                    if (c.num = 0 | r, c.isMobile && (l = $.cookies.get("cw" + c.sku), c.isAccident = 0, c.isDelay = 0, l)) {
                        c.warranty = l;
                        var u = (c.warranty + "").split(":");
                        $.each(u, function(e, t) {
                            var n = a[t];
                            n && ("safety1" == n.postName && (c.isAccident = 1), "safety2" == n.postName && (c.isDelay = 1))
                        }), u = null
                    }
                    i.syncCollection(c), c = o.CartCollection.get({
                        id: c.sku
                    }), c.isSell ? t.on_sell_list.push(c) : t.off_sell_list.push(c)
                }
            }), t.on_sell_list = o.formatOnlineCart(t.on_sell_list), t.carts = o.CartCollection.all(), t
        }) : (n.resolve({
            on_sell_list: [],
            off_sell_list: []
        }), n.promise)
    }, c.prototype.countCart = function(e) {
        var t = this;
        s.mapPhones;
        if (!this.CartCollection || !this.CartCollection.length) {
            var n = 0,
                o = $.cookies.filter("^ct"),
                i = $.cookies.filter("^cw");
            return $.each(o, function(e, t) {
                n += 0 | t
            }), $.each(i, function(e, t) {
                var o = (t + "").split(":").length;
                n += o * $.cookies.get(e.replace("cw", "ct"))
            }), {
                num: n,
                carts: [],
                total: 0
            }
        }
        var a = 0,
            r = 0,
            o = e ? [] : t.CartCollection && t.CartCollection.length ? t.CartCollection.all() : [];
        return e && $.each(e, function(e, n) {
            var i = t.CartCollection.get(n);
            i && o.push(i)
        }), $.each(o, function(e, t) {
            t.num = 0 | t.num, a += t.price * t.num, r += t.num, t.isMobile && (t.isAccident && t.accident && (a += t.accident.price * t.num, r += t.num), t.isDelay && t.delay && (a += t.delay.price * t.num, r += t.num))
        }), {
            num: r,
            carts: o,
            total: a
        }
    }, c.prototype.formatOnlineCart = function(e) {
        var t = [],
            n = [];
        return $.each(e, function(e, o) {
            o.isOut ? n.push(o) : t.push(o)
        }), [].concat(t).concat(n)
    }, c.prototype.getProdInfo = function(t) {
        for (var o = this, i = t && t.constructor === Array ? t : (t + "").split(","), r = [], s = {}, l = 0, c = i.length; l < c; l++) o.cache[i[l]] ? s[i[l]] = $.extend({}, o.cache[i[l]]) : r.push(i[l]);
        if (r.length) return a.GetSkusInfo({
            ids: r.join(","),
            with_stock: !0
        }).then(function(t) {
            var a, r = e.defer();
            if (t.code) r.reject("网络延迟");
            else {
                a = t.data;
                for (var l = a.list, c = 0, u = l.length; c < u; c++) l[c].max = l[c].shop_info.limit_num || 5, l[c].price = l[c].price, o.cache[l[c].id] || (o.cache[l[c].id] = l[c], s[l[c].id] = l[c]);
                for (var c = 0, u = i.length; c < u; c++) o.cache[i[c]] || $.cookies.del("ct" + i[c], {
                    domain: n.getDomain()
                });
                r.resolve(s)
            }
            return r.promise
        }, function(e) {
            return !1
        });
        var u = e.defer();
        return u.resolve(s), u.promise
    }, c.prototype.addCart = function(t, n) {
        var o = this,
            t = n ? {
                sku: t,
                num: n
            } : t,
            i = angular.isArray(t),
            t = i ? t : [t],
            a = [],
            r = [];
        $.each(t, function(e, t) {
            var n = o.CartCollection.get({
                    id: t.sku
                }),
                i = $.cookies.get("ct" + t.sku),
                l = {
                    id: t.sku,
                    sku: t.sku,
                    num: 0 | t.num
                };
            s.mapPhones[l.sku] && (l.isMobile = !0, l.num = 1, l.warranty = t.warranty), n ? (l.num += n.num, l.num = Math.min(l.num, n.max), r.push(l)) : i ? (l.num += 0 | i, r.push(l)) : a.push(l)
        }), r.length && o.updateCart(r), a.length && o.insertCart(a);
        var l = e.defer();
        return l.resolve(!0), l.promise
    }, c.prototype.updateCart = function(e) {
        var t = this,
            n = s.mapPhones,
            o = s.mapWarrantys,
            a = angular.isArray(e),
            l = [],
            e = a ? e : [e];
        $.each(e, function(e, a) {
            if (n[a.sku]) {
                var r = t.CartCollection.get({
                    id: a.sku
                });
                r = r ? $.extend({}, r) : $.extend({}, a);
                var s = a.warranty ? (a.warranty + "").split(":") : [];
                r.isAccident = 0, r.isDelay = 0, r.warranty = [], $.each(s, function(e, t) {
                    var n = o[t];
                    n && ("safety1" == n.postName && (r.isAccident = 1, r.warranty.push(t)), "safety2" == n.postName && (r.isDelay = 1, r.warranty.push(t)))
                }), r.warranty = r.warranty.join(":"), a = $.extend({}, r)
            }
            l.push(a.sku), i.syncCollection(a)
        }), t.fetchCart(e), r.getSimpleDetail(l)
    }, c.prototype.insertCart = function(e) {
        var t = this,
            n = [];
        $.each(e, function(e, t) {
            var o = $.extend({}, r.goodsCache[t.sku], {
                id: t.sku + "",
                sku: t.sku + "",
                num: t.num
            });
            if (n.push(t.sku), t.isMobile) {
                var a = s.mapPhones[t.sku];
                o.max = 1, o.image = a.image, o.price = a.price, o.subtotal = a.price * t.num, o.isMobile = 1, o.warranty = t.warranty
            }
            i.syncCollection(o)
        }), t.fetchCart(e), r.getSimpleDetail(n)
    }, c.prototype.fetchCart = function(e, t) {
        var n = this,
            o = angular.isArray(e),
            e = o ? e : [e],
            i = s.mapPhones,
            r = (s.mapWarrantys, +new Date);
        $.each(e, function(e, o) {
            t ? delete n.fetchData[o.sku] : (n.fetchData[o.sku] = [o.num], i[o.sku] && o.warranty && n.fetchData[o.sku].unshift(o.warranty), n.fetchData[o.sku] = n.fetchData[o.sku].join(":"))
        }), n.loopTime.push(r), n.fetchLoop = setTimeout(function() {
            if (r == n.loopTime[n.loopTime.length - 1]) {
                var e = [];
                $.each(n.fetchData, function(t, n) {
                    e.push(t + ":" + n)
                }), a.save({
                    goods_code: e.join(",")
                }).then(function(e) {}, function(e) {
                    return !1
                }), n.fetchLoop = null
            }
        }, 2e3)
    }, c.prototype.removeCart = function(t) {
        var n = this,
            o = angular.isArray(t),
            i = o ? t : [t];
        t && n.fetchData[t] && delete n.fetchData[t], n.removeCollection(i), a.del({
            goods_codes: i.join(",")
        }).then(function(t) {
            var n = {},
                o = e.defer();
            return t.code ? o.reject("网络延迟") : o.resolve(n.data), o.promise
        }, function(e) {
            return !1
        })
    }, c.prototype.removeCollection = function(e) {
        var t = this,
            a = !e,
            r = s.mapPhones,
            l = angular.isArray(e),
            c = l ? e : [e];
        if (a) {
            var u = $.cookies.filter("^ct|^cw");
            $.each(u, function(e, t) {
                $.cookies.del(e, {
                    domain: n.getDomain()
                })
            }), i.removeAll()
        } else $.each(c, function(e, i) {
            var a = t.CartCollection.get({
                id: i
            });
            $.cookies.del("ct" + i, {
                domain: n.getDomain()
            }), r[i] && $.cookies.del("cw" + i, {
                domain: n.getDomain()
            }), o.$emit("cart", {
                name: "removeSingleCart",
                data: {
                    model: a
                }
            }), a && t.CartCollection.remove(a)
        })
    }, c.prototype.parsePageCartList = function(e, t) {
        var n = l("orderBy"),
            o = s.mapPhones,
            i = [],
            a = [{
                category: "t2"
            }, {
                category: "nuts"
            }, {
                category: "normal"
            }],
            r = e.on_sell_list.concat(e.off_sell_list);
        $.each(r, function(e, t) {
            t && (t.sku = t.sku + "", t.checked = !0, o[t.sku] && ("t2" == o[t.sku].category ? t.categoryCN = " Smartisan T2 " : "nuts" == o[t.sku].category && (t.categoryCN = "坚果手机")), o[t.sku] ? ("t2" == o[t.sku].category && (t.categoryEN = "t2", t.categoryOrder = 11), "nuts" == o[t.sku].category && (t.categoryEN = "nuts", t.categoryOrder = 31)) : (t.categoryEN = "normal", t.categoryOrder = 100))
        });
        var c = [];
        c = [], angular.forEach(t.list, function(e, n) {
            1 == e.type && (e.gifts = [], e.giftNeedByNum = parseInt(e.rule.condition.num), angular.forEach(e.rule.result.gift_skus, function(n, o) {
                var i = t.allGiftSkusInfo[o];
                e.gifts.push(angular.extend({}, i, {
                    categoryOrder: 1e3,
                    price: 0,
                    subtotal: 0,
                    isSell: !0,
                    isOut: 0 == (e.gift_num[i.sku] && e.gift_num[i.sku]),
                    giftNum: n,
                    max: e.gift_num[i.sku] && e.gift_num[i.sku] > 0 ? e.gift_num[i.sku] : 1e5,
                    isGift: !0,
                    isNormal: 0
                }))
            }), c.push(e))
        }), angular.forEach(c, function(e, t) {
            e.hasMobile = !1;
            var n = [];
            angular.forEach(e.mainSkus, function(t, i) {
                var a = {
                    sku: t
                };
                n.push(a), e.hasMobile || o[t] && "t2" == o[t].category && (e.hasMobile = !0, e.category = "t2", e.categoryOrder = 11), e.hasMobile || o[t] && "nuts" == o[t].category && (e.hasMobile = !0, e.category = "nuts", e.categoryOrder = 31), e.hasMobile || (e.category = "normal", e.categoryOrder = 100)
            }), e.mainGoods = [].concat(n)
        }), c = _.sortBy(c, "categoryOrder", "start_time"), angular.forEach(a, function(e, n) {
            _.findIndex(c, {
                category: e.category
            }) > -1 && angular.forEach(c, function(t, n) {
                if (e.category == t.category) {
                    var o = {
                        show: !0,
                        type: t.type,
                        tag: t.tag,
                        title: t.title,
                        giftNeedByNum: t.giftNeedByNum,
                        isPromotion: !0,
                        list: []
                    };
                    angular.forEach(t.mainGoods, function(e, t) {
                        var n = _.findIndex(r, {
                            sku: e.sku + ""
                        });
                        n != -1 && r[n].isSell && !r[n].isOut && (o.list.push(r[n]), r.splice(n, 1))
                    }), o.list.length > 0 && (1 == o.type && (o.list = o.list.concat(t.gifts)), i.push(o))
                }
            });
            var o = _.findIndex(r, {
                    categoryEN: e.category
                }),
                a = [];
            o > -1 && (a = _.filter(r, function(n, o) {
                return !(!n || !n.isSell || n.isOut || angular.isObject(t[n.sku])) && (n.isMobile && e.category == n.categoryEN)
            }), a.length > 0 && angular.forEach(a, function(e, t) {
                i.push({
                    show: !0,
                    isPromotion: !1,
                    isNormalMobileList: !0,
                    isNormalGoodsList: !1,
                    list: [e]
                })
            }))
        });
        var u = {
                show: !0,
                isPromotion: !1,
                isNormalGoodsList: !0,
                list: []
            },
            m = {
                show: !0,
                isPromotion: !1,
                isNormalGoodsList: !0,
                list: []
            },
            p = {
                show: !0,
                isPromotion: !1,
                isNormalGoodsList: !0,
                list: []
            };
        return $.each(r, function(e, n) {
            n.isSell ? n.isOut ? m.list.push(n) : angular.isObject(t[n.sku]) || n.isMobile || u.list.push(n) : p.list.push(n)
        }), u.list.length > 0 && (i = i.concat([u])), m.list.length > 0 && (i = i.concat([m])), p.list.length > 0 && (i = i.concat([p])), angular.forEach(i, function(e, t) {
            e.list = n(e.list, ["categoryOrder", "sku"])
        }), i
    }, c.prototype.removeAll = function(t) {
        var n = e.defer(),
            o = this,
            i = $.cookies.filter("^ct"),
            r = [];
        return $.each(i, function(e, t) {
            r.push(e.replace(/^ct/, ""))
        }), o.removeCollection(), t && n.resolve(!0), a.del({
            goods_codes: r.join(",")
        }).then(function(e) {
            var t;
            e.code ? n.reject("网络延迟") : (t = e.data, n.resolve(t))
        }, function(e) {
            n.reject(!1)
        }), n.prmose
    }, new c
}]), appsServices.factory("CartRequest", ["$rootScope", "$http", "$q", "Config", "Utils", function(e, t, n, o, i) {
    var a = "",
        r = function(e) {
            var t = document.createElement("b");
            return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", 1 === t.getElementsByTagName("i").length
        },
        s = new Date,
        l = e.isMobile ? "&_=" + s.getTime() : "",
        c = /\{(\D+)\}/,
        u = o.headconfig,
        m = (r(8) || r(9), navigator.userAgent.toLowerCase()),
        r = /msie/.test(m) || /rv:11.0/.test(m),
        p = function(e, s, m) {
            return s || (s = "get"), function(p) {
                var d = e,
                    g = n.defer(),
                    f = c.exec(e);
                if (a = _.indexOf(location.host.split("#"), "www.smartisan.com") > -1 ? m ? o.middlewareProUrl : o.storeUrlRest : m ? o.middlewareTestUrl : o.baseUrl, f && (d = e.replace(f[0], p[f[1]]), delete p[f[1]]), "post" == s) {
                    var h = i.toKeyValue(p);
                    t.post(a + d + l, h, u).success(function(e) {
                        g.resolve(e)
                    }).error(function() {
                        g.reject("网络异常!")
                    })
                } else {
                    var v = a + d + "?" + i.toKeyValue(p);
                    v += r ? "&_time=" + (new Date).valueOf() : "", t.get(v).success(function(e) {
                        g.resolve(e)
                    }).error(function() {
                        g.reject("网络异常!")
                    })
                }
                return g.promise
            }
        };
    return {
        sync: p("ShoppingCart/Sync", "post"),
        del: p("ShoppingCart/Del", "post"),
        save: p("ShoppingCart/Save", "post"),
        GetMobileSimpleInfo: p("goods/GetMobileSimpleInfo", "post"),
        GetSkusInfo: p("skus", "get", !0),
        GetDoodleGoodsList: p("Doodle/GetGoodsList", "post"),
        GetSingleSkuInfo: p("skus/{skuId}", "get", !0),
        GetSpuInfo: p("spus/{spuId}", "get", !0),
        getFeatureList: p("featured", "get", !0),
        getCategoryList: p("shop_categories", "get", !0),
        IsLogin: p("Account/IsLogin", "post"),
        CdkeyVerify: p("Cdkey/Verify", "post"),
        getSpusList: p("spus", "get", !0),
        getDiscountList: p("promotions", "get", !0),
        getHome: p("home", "get", !0),
        getStockList: p("Activity/Stocks", "post")
    }
}]), appsServices.factory("GoodsService", ["$q", "$location", "CartRequest", "CartCollection", "MobileGoodsService", "StoreConfig", "$filter", "Config", function(e, t, n, o, i, a, r, s) {
    function l() {
        var e = this;
        e.goodsCache = {}, e.mobileSpus = i.getMobileSpus(), i.init()
    }
    return l.prototype.skuResolve = function(e, n) {
        var o = this.mobileSpus,
            i = "",
            a = t.$$search && t.$$search.id || "";
        if (a) {
            if (9 !== a.length) location.replace("http://www.smartisan.com/#/error/404");
            else if (e && 7 === e.length) for (var r in o) if (_.indexOf(o[r], e) >= 0) return t.url("/" + r).replace()
        } else {
            if (e) {
                if (i = e.substring(0, e.length - 2), 7 !== i.length) return location.replace("http://www.smartisan.com/#/error/404");
                for (var r in o) if (_.indexOf(o[r], i) >= 0) return t.url("/" + r).replace();
                if (9 === e.length) return n && "index" === n ? "../shop/#/item/" + i + "?id=" + e : t.url("/item/" + i + "?id=" + e).replace()
            }
            location.replace("http://www.smartisan.com/#/error/404")
        }
    }, l.prototype.parseCommonData = function(e) {
        var t = this,
            n = angular.isArray(e),
            e = n ? e : [e],
            o = i.mapPhones,
            l = i.mapWarrantys,
            c = i.mapCovers,
            u = [];
        return $.each(e, function(e, n) {
            if (n) {
                var m = 10;
                n.in_stock && n.stock && n.shop_info ? m = Math.min(n.stock, n.shop_info.limit_num) : n.in_stock && n.stock ? m = n.in_stock && n.stock : n.shop_info && (m = n.shop_info.limit_num);
                var p = {
                    id: n.sku || n.goods_code || n.id || n.product_info.goods_code,
                    sku: n.sku || n.goods_code || n.id || n.product_info.goods_code,
                    name: n.shop_info && n.shop_info.title || n.goods_name || n.name || "",
                    cartName: n.product_info && n.product_info.goods_name || n.name || "",
                    subName: n.shop_info && n.shop_info.sub_title || n.subname || "",
                    image: n.shop_info && n.shop_info.image || n.image || "",
                    max: m,
                    price: n.price || n.sell_price,
                    link: null,
                    isGift: !1,
                    isSell: 0,
                    isOut: 0,
                    isMobile: 0,
                    isWarranty: 0,
                    isNormal: 0,
                    isCustom: 0,
                    isDiscount: 0
                };
                if (angular.isObject(n.attr_info)) {
                    var d = [];
                    angular.forEach(n.attr_info, function(e, t) {
                        d.push(e.value)
                    }), p.attrSummary = d.join("，")
                }
                if (o[p.sku]) {
                    p = $.extend(p, o[p.sku], {
                        image: p.image,
                        price: p.price,
                        max: 1,
                        isSell: 12 == n.status || 1 == n.status || 3 == n.sale_status,
                        isMobile: 1,
                        link: "#/item/" + p.sku
                    });
                    var g = i.modelWarranty()[p.category];
                    $.each(g, function(e, n) {
                        t.goodsCache[n.sku] && (n = angular.extend(n, t.goodsCache[n.sku])), "safety1" == n.postName && (p.accident = t.parseCommonData(n), p.accident.mobile = p.sku), "safety2" == n.postName && (p.delay = t.parseCommonData(n), p.delay.mobile = p.sku)
                    }), 11 == n.status || 12 == n.status ? p.isOut = 11 == n.status ? 0 : !n.store_status : n.status ? p.isOut = 0 === Math.max(n.store_nums, 0) : p.isOut = !n.in_stock
                } else p = l[p.sku] ? $.extend(p, l[p.sku], {
                    isSell: 1,
                    isWarranty: 1
                }, p.image ? {
                    image: p.image
                } : {}) : $.extend(p, {
                    link: "#/item/" + p.sku,
                    image: p.image,
                    isSell: 12 == n.status || 1 == n.status || 3 == n.sale_status,
                    isOut: n.store_nums && 0 === Math.max(n.store_nums, 0) || !n.in_stock,
                    isNormal: 1,
                    isCustom: n.is_custom || n.shop_info && n.shop_info.is_custom || 0,
                    isDiscount: a.useGoodsDiscount && c[p.sku] && "t2" != c[p.sku].category
                });
                p.image.indexOf(p.sku) != -1 && p.image.indexOf("smartisanos.cn") == -1 && (p.image = s.imgUrl + r("realImage")(p.image, 80)), t.goodsCache[p.sku] = $.extend({}, p), u.push(p)
            }
        }), n ? u : u[0]
    }, l.prototype.getSimpleDetail = function(t, n) {
        var o = this,
            a = angular.isArray(t) ? t : (t + "").split(","),
            r = (i.mapPhones, i.mapWarrantys, []),
            s = {};
        if ($.each(a, function(e, t) {
                o.goodsCache[t] ? s[t] = $.extend({}, o.goodsCache[t]) : r.push(t)
            }), r.length) return e.all({
            goodsResponse: o.fetchGoodsDetail(r, n)
        }).then(function(t) {
            var n = e.defer(),
                o = t.goodsResponse,
                i = angular.isArray(o) ? o[0] : o;
            return r.length && $.each(r, function(e, t) { !! i[t] && (s[t] = i[t])
            }), n.resolve(s), n.promise
        });
        var l = e.defer();
        return l.resolve(s), l.promise
    }, l.prototype.fetchGoodsDetail = function(t, a) {
        var r = this,
            s = angular.isArray(t) ? t : (t + "").split(","),
            l = i.mapPhones,
            c = i.mapWarrantys,
            u = (i.mapCovers, []),
            m = {};
        $.each(s, function(e, t) {
            r.goodsCache[t] ? m[t] = $.extend({}, r.goodsCache[t]) : u.push(t)
        });
        var p = [];
        if ($.each(u, function(e, t) {
                var n, o = l[t];
                angular.isObject(o) && _.findIndex(p, {
                    categoryShort: o.category
                }) == -1 && (n = i.modelWarranty()[o.category], p = p.concat(n))
            }), p = _.pluck(p, "sku"), u = p.concat(u), u.length) return n.GetSkusInfo({
            ids: u.join(","),
            with_spu: !0,
            with_stock: !0
        }).then(function(t) {
            var n = [],
                i = e.defer();
            if (t.code) i.reject("网络异常!");
            else {
                n = t.data;
                var s = [],
                    l = [];
                $.each(n.list, function(e, t) {
                    c[t.id] ? s.push(t) : l.push(t)
                }), n.list = s.concat(l), $.each(n.list, function(e, t) {
                    var n = r.parseCommonData(t);
                    m[n.sku] = $.extend({}, n), a || o.syncCollection(n, !0)
                }), i.resolve(m)
            }
            return i.promise
        }, function(e) {});
        var d = e.defer();
        return d.resolve(m), d.promise
    }, l.prototype.getWarrantyDetail = function(e) {
        var t = this,
            n = i.mapWarrantys[e],
            o = t.parseCommonData(n);
        return $.extend({}, o)
    }, l.prototype.fetchPromotionBrief = function() {
        return n.getDiscountList({
            with_num: !0
        }).then(function(t) {
            var n, o = e.defer(),
                i = null;
            return t.code ? o.reject("网络错误") : (n = t.data, i = {}, i.allGiftSkus = [], angular.forEach(n.list, function(e, t) {
                if (e.mainSkus = e.rule.condition.main_skus, angular.forEach(e.rule.condition.main_skus, function(t) {
                        i[t] = e
                    }), 1 == e.type) {
                    var n = [];
                    angular.forEach(e.rule.result.gift_skus, function(e, t) {
                        n.push(t)
                    }), i.allGiftSkus = i.allGiftSkus.concat(n)
                }
            }), i.list = n.list, o.resolve(i)), o.promise
        }, function(e) {})
    }, l.prototype.fetchPromotionGiftInfo = function() {
        var t = this;
        return t.fetchPromotionBrief().then(function(n) {
            return t.getSimpleDetail(n.allGiftSkus, !0).then(function(t) {
                var o = e.defer();
                return n.allGiftSkusInfo = t, o.resolve(n), o.promise
            }, function(e) {})
        }, function(e) {})
    }, l.prototype.getSkuListWithStock = function(t) {
        var o = e.defer();
        return t instanceof Array && t.length > 0 ? n.GetSkusInfo({
            ids: t.join(","),
            with_stock: !0
        }).then(function(e) {
            0 === e.code && e.data.list.length > 0 && o.resolve(e.data)
        }) : o.reject("ids 数据异常"), o.promise
    }, new l
}]), appsServices.factory("MobileGoodsService", ["CartRequest", "$q", "Config", "$filter", "Utils", "StorageService", function(e, t, n, o, i, a) {
    function r() {
        var e = this;
        e.mapWarrantys = {}, e.mapMobileGifts = {}, e.mapPhones = {}, e.mapCovers = {}, e.mapHeadset = {}, e.mapNormalT1 = {}, e.mapDefectT1 = {}, e.mapNormalT2 = {}, e.mapNormalNuts = {}, e.mapYoungNuts = {}, e.mapBlackNuts = {}, e.mapDefectNuts = {}, e.mapStock = {}, e.listNormalT1 = [], e.listDefectT1 = [], e.listNormalT2 = [], e.listNormalNuts = [], e.listYoungNuts = [], e.listBlackNuts = [], e.listDefectNuts = [], e.listWarrantysT1 = [], e.listWarrantysT2 = [], e.listWarrantysNuts = [], e.listCoversNuts = [], e.listCoversT2 = [], e.listHeadset = []
    }
    var s = ["100000001", "100000002", "100000201", "100000202", "100007201", "100007001", "100007002", "100007003", "100007004", "100007005", "100007006"];
    return r.prototype.init = function() {
        var e = this;
        e.formatMobileData(), e.formatWarrantyData(), e.formatCoverData(), e.formatHeadsetData(), e.mapMobileGifts = e.modelMobileGift(), e.mapColor = e.modelColor(), e.mapColorT1 = e.mapColor.t1, e.mapColorNuts = e.mapColor.nuts, e.mapPageImagesT1 = e.pageImagesT1()
    }, r.prototype.formatMobileData = function(e) {
        var t = this,
            e = e || {},
            n = e.t1 || t.t1(),
            o = e.t2 || t.t2(),
            i = e.nuts || t.nuts(),
            a = t.modelColor(),
            r = {},
            s = {},
            l = {};
        r = t.parsePhones(n, a.t1), s = t.parsePhones(o, a.t2), l = t.parsePhones(i, a.nuts), t.mapNormalT1 = r.mapNormal, t.mapDefectT1 = r.mapDefect, t.listNormalT1 = r.listNormal, t.listDefectT1 = r.listDefect, t.mapNormalT2 = s.mapNormal, t.listNormalT2 = s.listNormal, t.mapNormalNuts = l.mapNormal, t.mapYoungNuts = l.mapYoung, t.mapBlackNuts = l.mapBlack, t.mapDefectNuts = l.mapDefect, t.listNormalNuts = l.listNormal, t.listYoungNuts = l.listYoung, t.listBlackNuts = l.listBlack, t.listDefectNuts = l.listDefect
    }, r.prototype.updateNutsStock = function() {
        var e = [],
            t = self.nuts();
        $.each(result.list, function(e, t) {
            mapStock[t.sku] = {
                stock: 11 == t.status || t.store_status,
                usePresale: 11 == t.status
            }
        }), $.each(t, function(t, n) {
            e.push($.extend({}, n, {
                stock: !0,
                usePresale: !0
            }))
        }), self.formatMobileData({
            nuts: e
        })
    }, r.prototype.getAllMobilesStock = function(i) {
        var a = this,
            r = i || [].concat(s).join(","),
            l = !0,
            c = r.split(",");
        if ($.each(c, function(e, t) {
                if (void 0 == a.mapStock[t]) return l = !1, !1
            }), l) {
            var u = t.defer();
            return u.resolve(a.mapStock), u.promise
        }
        return e.GetSkusInfo({
            ids: r,
            with_spu: !0,
            with_stock: !0
        }).then(function(e) {
            var i, r = t.defer(),
                s = [],
                l = a.t1(),
                c = {};
            return e.code ? r.reject("网络延迟") : (i = e.data, $.each(i.list, function(e, t) {
                c[t.id] = {
                    stock: t.in_stock,
                    price: t.price,
                    image: t.shop_info && t.shop_info.image || t.image || ""
                }, c[t.id].image.indexOf(t.id) != -1 && c[t.id].image.indexOf("smartisan") == -1 && (c[t.id].image = n.imgUrl + o("realImage")(c[t.id].image, 80))
            }), $.each(l, function(e, t) {
                var n = _.findIndex(i.list, {
                    id: parseInt(t.sku)
                });
                n != -1 && (t.price = i.list[n].price), s.push($.extend({}, t, c[t.sku]))
            }), a.formatMobileData({
                t1: s,
                t2: s,
                nuts: s
            }), a.mapStock = $.extend(a.mapStock, c), r.resolve(c)), r.promise
        }, function(e) {
            return !1
        })
    }, r.prototype.t1 = function() {
        return [{
            category: "t1",
            version: "normal",
            isSale: !1,
            sku: "100000001",
            presaleAmount: 300,
            name: "Smartisan T1 3G版 黑色 16GB",
            color: "black",
            standard: "3G",
            capacity: "16GB",
            price: 1980,
            countdown: 86400
        }, {
            category: "t1",
            version: "normal",
            isSale: !1,
            sku: "100000002",
            presaleAmount: 300,
            name: "Smartisan T1 3G版 黑色 32GB",
            color: "black",
            standard: "3G",
            capacity: "32GB",
            price: 2080,
            countdown: 86400
        }, {
            category: "t1",
            version: "normal",
            isSale: !0,
            sku: "100000201",
            presaleAmount: 300,
            name: "Smartisan T1 4G版 黑色 32GB",
            color: "black",
            standard: "4G",
            capacity: "32GB",
            price: 2480,
            countdown: 86400
        }, {
            category: "t1",
            version: "normal",
            isSale: !0,
            sku: "100000202",
            presaleAmount: 300,
            name: "Smartisan T1 4G版 白色 32GB",
            color: "white",
            standard: "4G",
            capacity: "32GB",
            price: 2480,
            countdown: 86400
        }, {
            category: "t1",
            version: "normal",
            isSale: !0,
            sku: "100007201",
            presaleAmount: 300,
            name: "Smartisan T1 一周年纪念版 黑色 32GB",
            color: "anniversary",
            standard: "4G",
            capacity: "32GB",
            price: 2480,
            countdown: 86400
        }, {
            category: "t1",
            version: "normal",
            isSale: !1,
            sku: "100010501",
            presaleAmount: 300,
            name: "Smartisan T1 4G 移动套餐版 黑色 32GB",
            color: "black",
            standard: "4G",
            capacity: "32GB",
            price: 2480,
            countdown: 86400
        }, {
            category: "t1",
            version: "normal",
            isSale: !1,
            sku: "100010502",
            presaleAmount: 300,
            name: "Smartisan T1 4G 移动套餐版 白色 32GB",
            color: "white",
            standard: "4G",
            capacity: "32GB",
            price: 2480,
            countdown: 86400
        }, {
            category: "t1",
            version: "defect",
            isSale: !0,
            sku: "100007001",
            presaleAmount: 300,
            defect: !0,
            defectDiscount: 300,
            name: "Smartisan T1 官方翻新机 B级 3G版 黑色 32GB",
            color: "black",
            standard: "3G",
            capacity: "32GB",
            price: 1780,
            countdown: 86400
        }, {
            category: "t1",
            version: "defect",
            isSale: !0,
            sku: "100007002",
            presaleAmount: 300,
            defect: !1,
            defectDiscount: 100,
            name: "Smartisan T1 官方翻新机 A级 3G版 黑色 32GB",
            color: "black",
            standard: "3G",
            capacity: "32GB",
            price: 1980,
            countdown: 86400
        }, {
            category: "t1",
            version: "defect",
            isSale: !0,
            sku: "100007003",
            presaleAmount: 300,
            defect: !0,
            defectDiscount: 300,
            name: "Smartisan T1 官方翻新机 B级 4G版 黑色 32GB",
            color: "black",
            standard: "4G",
            capacity: "32GB",
            price: 2180,
            countdown: 86400
        }, {
            category: "t1",
            version: "defect",
            isSale: !0,
            sku: "100007004",
            presaleAmount: 300,
            defect: !1,
            defectDiscount: 100,
            name: "Smartisan T1 官方翻新机 A级 4G版 黑色 32GB",
            color: "black",
            standard: "4G",
            capacity: "32GB",
            price: 2380,
            countdown: 86400
        }, {
            category: "t1",
            version: "defect",
            isSale: !0,
            sku: "100007005",
            presaleAmount: 300,
            defect: !0,
            defectDiscount: 300,
            name: "Smartisan T1 官方翻新机 B级 3G版 黑色 16GB",
            color: "black",
            standard: "3G",
            capacity: "16GB",
            price: 1680,
            countdown: 86400
        }, {
            category: "t1",
            version: "defect",
            isSale: !0,
            sku: "100007006",
            presaleAmount: 300,
            defect: !1,
            defectDiscount: 100,
            name: "Smartisan T1 官方翻新机 A级 3G版 黑色 16GB",
            color: "black",
            standard: "3G",
            capacity: "16GB",
            price: 1880,
            countdown: 86400
        }]
    }, r.prototype.t2 = function() {
        var e = [{
            category: "t2",
            version: "normal",
            edition: "netcom",
            edtionLabel: "全网通",
            isSale: !0,
            sku: "100014501",
            name: "Smartisan T2（黑色，32GB）",
            color: "black",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 2599,
            price: 2599,
            countdown: 86400
        }, {
            category: "t2",
            version: "normal",
            edition: "netcom",
            edtionLabel: "全网通",
            isSale: !0,
            sku: "100014502",
            name: "Smartisan T2（黑色，16GB）",
            color: "black",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 2499,
            price: 2499,
            countdown: 86400
        }];
        return e
    }, r.prototype.nuts = function() {
        return [{
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "netcom",
            edtionLabel: "全网通",
            isSale: !0,
            sku: "100015803",
            presaleAmount: 300,
            name: "坚果手机（灰色，32GB，全网通）",
            color: "gray",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 899,
            price: 899,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "netcom",
            edtionLabel: "全网通",
            isSale: !0,
            sku: "100015804",
            presaleAmount: 300,
            name: "坚果手机（灰色，16GB，全网通）",
            color: "gray",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007303",
            presaleAmount: 300,
            name: "坚果手机（绿色，32GB）",
            color: "green",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007304",
            presaleAmount: 300,
            name: "坚果手机（绿色，16GB）",
            color: "green",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007305",
            presaleAmount: 300,
            name: "坚果手机（黄色，32GB）",
            color: "yellow",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007306",
            presaleAmount: 300,
            name: "坚果手机（黄色，16GB）",
            color: "yellow",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007307",
            presaleAmount: 300,
            name: "坚果手机（橙色，32GB）",
            color: "orange",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007308",
            presaleAmount: 300,
            name: "坚果手机（橙色，16GB）",
            color: "orange",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007309",
            presaleAmount: 300,
            name: "坚果手机（紫色，32GB）",
            color: "purple",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007310",
            presaleAmount: 300,
            name: "坚果手机（紫色，16GB）",
            color: "purple",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007311",
            presaleAmount: 300,
            name: "坚果手机（红色，32GB）",
            color: "red",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007312",
            presaleAmount: 300,
            name: "坚果手机（红色，16GB）",
            color: "red",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007313",
            presaleAmount: 300,
            name: "坚果手机（蓝色，32GB）",
            color: "blue",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007314",
            presaleAmount: 300,
            name: "坚果手机（蓝色，16GB）",
            color: "blue",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007317",
            presaleAmount: 300,
            name: "坚果手机（青色，32GB）",
            color: "light-blue",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007318",
            presaleAmount: 300,
            name: "坚果手机（青色，16GB）",
            color: "light-blue",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007319",
            presaleAmount: 300,
            name: "坚果手机（灰色，32GB）",
            color: "gray",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007320",
            presaleAmount: 300,
            name: "坚果手机（灰色，16GB）",
            color: "gray",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012905",
            presaleAmount: 300,
            name: "坚果手机（绿色，32GB，移动定制）",
            color: "green",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012906",
            presaleAmount: 300,
            name: "坚果手机（绿色，16GB，移动定制）",
            color: "green",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012907",
            presaleAmount: 300,
            name: "坚果手机（黄色，32GB，移动定制）",
            color: "yellow",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012908",
            presaleAmount: 300,
            name: "坚果手机（黄色，16GB，移动定制）",
            color: "yellow",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012909",
            presaleAmount: 300,
            name: "坚果手机（橙色，32GB，移动定制）",
            color: "orange",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012910",
            presaleAmount: 300,
            name: "坚果手机（橙色，16GB，移动定制）",
            color: "orange",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012911",
            presaleAmount: 300,
            name: "坚果手机（紫色，32GB，移动定制）",
            color: "purple",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012912",
            presaleAmount: 300,
            name: "坚果手机（紫色，16GB，移动定制）",
            color: "purple",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012913",
            presaleAmount: 300,
            name: "坚果手机（红色，32GB，移动定制）",
            color: "red",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012914",
            presaleAmount: 300,
            name: "坚果手机（红色，16GB，移动定制）",
            color: "red",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012915",
            presaleAmount: 300,
            name: "坚果手机（蓝色，32GB，移动定制）",
            color: "blue",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012916",
            presaleAmount: 300,
            name: "坚果手机（蓝色，16GB，移动定制）",
            color: "blue",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012903",
            presaleAmount: 300,
            name: "坚果手机（青色，32GB，移动定制）",
            color: "light-blue",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012904",
            presaleAmount: 300,
            name: "坚果手机（青色，16GB，移动定制）",
            color: "light-blue",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012901",
            presaleAmount: 300,
            name: "坚果手机（灰色，32GB，移动定制）",
            color: "gray",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012902",
            presaleAmount: 300,
            name: "坚果手机（灰色，16GB，移动定制）",
            color: "gray",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013005",
            presaleAmount: 300,
            name: "坚果手机（绿色，32GB，电信定制）",
            color: "green",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013006",
            presaleAmount: 300,
            name: "坚果手机（绿色，16GB，电信定制）",
            color: "green",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013007",
            presaleAmount: 300,
            name: "坚果手机（黄色，32GB，电信定制）",
            color: "yellow",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013008",
            presaleAmount: 300,
            name: "坚果手机（黄色，16GB，电信定制）",
            color: "yellow",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013009",
            presaleAmount: 300,
            name: "坚果手机（橙色，32GB，电信定制）",
            color: "orange",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013010",
            presaleAmount: 300,
            name: "坚果手机（橙色，16GB，电信定制）",
            color: "orange",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013011",
            presaleAmount: 300,
            name: "坚果手机（紫色，32GB，电信定制）",
            color: "purple",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013012",
            presaleAmount: 300,
            name: "坚果手机（紫色，16GB，电信定制）",
            color: "purple",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013013",
            presaleAmount: 300,
            name: "坚果手机（红色，32GB，电信定制）",
            color: "red",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013014",
            presaleAmount: 300,
            name: "坚果手机（红色，16GB，电信定制）",
            color: "red",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013015",
            presaleAmount: 300,
            name: "坚果手机（蓝色，32GB，电信定制）",
            color: "blue",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013016",
            presaleAmount: 300,
            name: "坚果手机（蓝色，16GB，电信定制）",
            color: "blue",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013003",
            presaleAmount: 300,
            name: "坚果手机（青色，32GB，电信定制）",
            color: "light-blue",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013004",
            presaleAmount: 300,
            name: "坚果手机（青色，16GB，电信定制）",
            color: "light-blue",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013001",
            presaleAmount: 300,
            name: "坚果手机（灰色，32GB，电信定制）",
            color: "gray",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "normal",
            versionLabel: "标准版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013002",
            presaleAmount: 300,
            name: "坚果手机（灰色，16GB，电信定制）",
            color: "gray",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "black",
            versionLabel: "黑色版",
            edition: "netcom",
            edtionLabel: "全网通",
            isSale: !0,
            sku: "100015801",
            presaleAmount: 300,
            name: "坚果手机（黑色，32GB，全网通）",
            color: "black",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 899,
            price: 899,
            countdown: 3600
        }, {
            category: "nuts",
            version: "black",
            versionLabel: "黑色版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007315",
            presaleAmount: 300,
            name: "坚果手机（黑色，32GB）",
            color: "black",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "black",
            versionLabel: "黑色版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100007316",
            presaleAmount: 300,
            name: "坚果手机（黑色，16GB）",
            color: "black",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "black",
            versionLabel: "黑色版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012917",
            presaleAmount: 300,
            name: "坚果手机（黑色，32GB，移动定制）",
            color: "black",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "black",
            versionLabel: "黑色版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100012918",
            presaleAmount: 300,
            name: "坚果手机（黑色，16GB，移动定制）",
            color: "black",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "black",
            versionLabel: "黑色版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013017",
            presaleAmount: 300,
            name: "坚果手机（黑色，32GB，电信定制）",
            color: "black",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "black",
            versionLabel: "黑色版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013018",
            presaleAmount: 300,
            name: "坚果手机（黑色，16GB，电信定制）",
            color: "black",
            standard: "4G",
            capacity: "16GB",
            oldPrice: 699,
            price: 699,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "netcom",
            edtionLabel: "全网通",
            isSale: !0,
            sku: "100015901",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（远州鼠，32GB，全网通）",
            color: "bone",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 899,
            price: 899,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100013101",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（鸠羽紫，32GB）",
            color: "violet",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100013102",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（苏芳，32GB）",
            color: "rose",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100013103",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（落栗，32GB）",
            color: "coffee",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100013104",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（柳煤竹茶，32GB）",
            color: "olive",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100013105",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（枯草，32GB）",
            color: "sand",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100013106",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（石竹，32GB）",
            color: "pink",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100013107",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（远州鼠，32GB）",
            color: "bone",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "all",
            edtionLabel: "公开版",
            isSale: !0,
            sku: "100013108",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（锖青磁，32GB）",
            color: "grass",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100013201",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（鸠羽紫，32GB，移动定制）",
            color: "violet",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100013202",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（苏芳，32GB，移动定制）",
            color: "rose",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100013203",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（落栗，32GB，移动定制）",
            color: "coffee",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100013204",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（柳煤竹茶，32GB，移动定制）",
            color: "olive",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100013205",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（枯草，32GB，移动定制）",
            color: "sand",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100013206",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（石竹，32GB，移动定制）",
            color: "pink",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100013207",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（远州鼠，32GB，移动定制）",
            color: "bone",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "cmcc",
            edtionLabel: "移动定制版",
            isSale: !0,
            sku: "100013208",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（锖青磁，32GB，移动定制）",
            color: "grass",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013301",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（鸠羽紫，32GB，电信定制）",
            color: "violet",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013302",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（苏芳，32GB，电信定制）",
            color: "rose",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013303",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（落栗，32GB，电信定制）",
            color: "coffee",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013304",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（柳煤竹茶，32GB，电信定制）",
            color: "olive",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013305",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（枯草，32GB，电信定制）",
            color: "sand",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013306",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（石竹，32GB，电信定制）",
            color: "pink",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013307",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（远州鼠，32GB，电信定制）",
            color: "bone",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }, {
            category: "nuts",
            version: "young",
            versionLabel: "文艺青年版",
            edition: "telecom",
            edtionLabel: "电信定制版",
            isSale: !0,
            sku: "100013308",
            presaleAmount: 300,
            name: "坚果手机文艺青年版（锖青磁，32GB，电信定制）",
            color: "grass",
            standard: "4G",
            capacity: "32GB",
            oldPrice: 799,
            price: 799,
            countdown: 3600
        }]
    }, r.prototype.modelColor = function() {
        return {
            t1: {
                black: {
                    colorLabel: "黑色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/s03.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/01_80.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/01_80.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/pm-slide-product-image-black.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/black-product.png"
                },
                white: {
                    colorLabel: "白色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/s03_white.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/01_80_white.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/01_80_white.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/pm-slide-product-image-white.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/white-product.png"
                },
                anniversary: {
                    colorLabel: "一周年纪念版",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/s03.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/01_80.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/01_80.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/pm-slide-product-image-black.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/black-product.png"
                }
            },
            t2: {
                black: {
                    colorLabel: "黑色",
                    img: "http://static.smartisanos.cn/index/img/store/t2/t2-black-80.png",
                    image: "http://static.smartisanos.cn/index/img/store/t2/t2-black-80.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/t2/t2-cdkey-black.png"
                }
            },
            nuts: {
                green: {
                    colorLabel: "绿色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-green.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_green.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_green.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-green.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-green.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-green.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-green.png"
                },
                yellow: {
                    colorLabel: "黄色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-yellow.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_yellow.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_yellow.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-yellow.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-yellow.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-yellow.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-yellow.png"
                },
                orange: {
                    colorLabel: "橙色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-orange.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_orange.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_orange.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-orange.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-orange.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-orange.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-orange.png"
                },
                purple: {
                    colorLabel: "紫色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-purple.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_purple.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_purple.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-purple.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-purple.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-purple.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-purple.png"
                },
                red: {
                    colorLabel: "红色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-red.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_red.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_red.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-red.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-red.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-red.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-red.png"
                },
                blue: {
                    colorLabel: "蓝色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-blue.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_blue.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_blue.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-blue.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-blue.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-blue.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-blue.png"
                },
                "light-blue": {
                    colorLabel: "青色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-light-blue.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_light_blue.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_light_blue.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-light-blue.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-light-blue.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-light-blue.png"
                },
                gray: {
                    colorLabel: "灰色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-gray.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_gray.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_gray.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-gray.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-gray.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-gray.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-gray.png"
                },
                black: {
                    colorLabel: "黑色",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-black.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_black.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_black.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-black.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-black.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-black.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-black.png"
                },
                violet: {
                    colorLabel: "鸠羽紫",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-violet.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_violet.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_violet.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-violet.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-violet.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-violet.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-violet.png"
                },
                sand: {
                    colorLabel: "枯草",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-sand.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_sand.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_sand.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-sand.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-sand.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-sand.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-sand.png"
                },
                olive: {
                    colorLabel: "柳煤竹茶",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-olive.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_olive.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_olive.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-olive.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-olive.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-olive.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-olive.png"
                },
                coffee: {
                    colorLabel: "落栗",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-coffee.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_coffee.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_coffee.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-coffee.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-coffee.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-coffee.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-coffee.png"
                },
                grass: {
                    colorLabel: "锖青磁",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-grass.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_grass.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_grass.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-grass.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-grass.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-grass.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-grass.png"
                },
                pink: {
                    colorLabel: "石竹",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-pink.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_pink.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_pink.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-pink.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-pink.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-pink.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-pink.png"
                },
                rose: {
                    colorLabel: "苏芳",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-rose.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_rose.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_rose.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-rose.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-rose.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-rose.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-rose.png"
                },
                bone: {
                    colorLabel: "远州鼠",
                    thumb: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-fixbar-bone.png",
                    img: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_bone.png",
                    image: "http://static.smartisanos.cn/index/img/store/mobile/jianguo_80_bone.png",
                    pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-bone.png",
                    resultImage: "http://static.smartisanos.cn/index/img/store/mobile/result-page-bone.png",
                    cartImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cart-slide-image-bone.png",
                    codeImage: "http://static.smartisanos.cn/index/img/store/mobile/jianguo-cdkey-bone.png"
                }
            }
        }
    }, r.prototype.modelWarranty = function() {
        return {
            t1: [{
                sku: 100000101,
                aliases: "accident",
                postName: "safety1",
                name: "意外保修服务",
                category: " Smartisan T1 ",
                categoryShort: "t1",
                price: 200,
                pageCss: "warranty-accident",
                img: "http://static.smartisanos.cn/index/img/store/mobile/04.png",
                cartImage: "http://static.smartisanos.cn/index/img/store/mobile/04.png",
                pageImg: "http://static.smartisanos.cn/index/img/store/mobile/phonecare-plus.png",
                dialogImg: "http://static.smartisanos.cn/index/img/store/mobile/dialog-phonecare-normal.png",
                warning: "您选购的保修服务不支持单独退款，仅可以随手机订单一同退款。",
                introduction: ["在您购买意外保修服务后的一年内，由于意外损坏造成手机硬件故障，将可以获得最多两次维修服务，或 1 次主机更换服务。（本服务优先采取维修服务,若锤子数码售后服务中心确认无法修复，则进行主机更换。）", "您可选择在购机时购买，或收货次日起 3 日内购买本服务。", '服务细则参见<a href="http://www.smartisan.com/#/repair" target="_blank">《锤子数码手机意外损坏保修服务条款》</a>。']
            }, {
                sku: 100000102,
                aliases: "delay",
                postName: "safety2",
                name: "延长保修服务",
                category: " Smartisan T1 ",
                categoryShort: "t1",
                price: 200,
                pageCss: "warranty-delay",
                img: "http://static.smartisanos.cn/index/img/store/mobile/05.png",
                cartImage: "http://static.smartisanos.cn/index/img/store/mobile/05.png",
                pageImg: "http://static.smartisanos.cn/index/img/store/mobile/phonecare-plus-1.png",
                dialogImg: "http://static.smartisanos.cn/index/img/store/mobile/dialog-phonecare-other.png",
                warning: "您选购的保修服务支持单独退款，也可以随手机订单一同退款。",
                introduction: ["如您购买本服务，在手机正常“三包” 1 年保修期结束后，将额外多获得 1 年保修服务。", "延长保修服务期为 1 年，自手机正常“三包” 1 年服务期的截止日之次日零时开始，至第二年对应日之 24 时结束。", '服务细则参见<a href="http://www.smartisan.com/#/insurance" target="_blank">《锤子数码手机延长保修服务条款》</a>。']
            }],
            t2: [{
                sku: 100014402,
                aliases: "t2Accident",
                postName: "safety1",
                name: "意外保修服务",
                category: " Smartisan T2 ",
                categoryShort: "t2",
                price: 200,
                pageCss: "warranty-accident",
                img: "http://static.smartisanos.cn/index/img/store/mobile/04.png",
                cartImage: "http://static.smartisanos.cn/index/img/store/mobile/04.png",
                pageImg: "http://static.smartisanos.cn/index/img/store/mobile/phonecare-plus.png",
                dialogImg: "http://static.smartisanos.cn/index/img/store/mobile/dialog-phonecare-normal.png",
                warning: "您选购的保修服务不支持单独退款，仅可以随手机订单一同退款。",
                introduction: ["在您购买意外保修服务后的一年内，由于意外损坏造成手机硬件故障，将可以获得最多两次维修服务，或 1 次主机更换服务。（本服务优先采取维修服务,若锤子数码售后服务中心确认无法修复，则进行主机更换。）", "您可选择在购机时购买，或收货次日起 3 日内购买本服务。", '服务细则参见<a href="http://www.smartisan.com/#/repair" target="_blank">《锤子数码手机意外损坏保修服务条款》</a>。']
            }, {
                sku: 100014401,
                aliases: "t2Delay",
                postName: "safety2",
                name: "延长保修服务",
                category: " Smartisan T2 ",
                categoryShort: "t2",
                price: 200,
                pageCss: "warranty-delay",
                img: "http://static.smartisanos.cn/index/img/store/mobile/05.png",
                cartImage: "http://static.smartisanos.cn/index/img/store/mobile/05.png",
                pageImg: "http://static.smartisanos.cn/index/img/store/mobile/phonecare-plus-1.png",
                dialogImg: "http://static.smartisanos.cn/index/img/store/mobile/dialog-phonecare-other.png",
                warning: "您选购的保修服务支持单独退款，也可以随手机订单一同退款。",
                introduction: ["如您购买本服务，在手机正常“三包” 1 年保修期结束后，将额外多获得 1 年保修服务。", "延长保修服务期为 1 年，自手机正常“三包” 1 年服务期的截止日之次日零时开始，至第二年对应日之 24 时结束。", '服务细则参见<a href="http://www.smartisan.com/#/insurance" target="_blank">《锤子数码手机延长保修服务条款》</a>。']
            }],
            nuts: [{
                sku: 100010302,
                aliases: "nutsAccident",
                postName: "safety1",
                name: "意外保修服务",
                category: "坚果手机",
                categoryShort: "nuts",
                price: 99,
                pageCss: "warranty-accident",
                nutsImg: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-warranty-accident.png",
                img: "http://static.smartisanos.cn/index/img/store/mobile/04.png",
                cartImage: "http://static.smartisanos.cn/index/img/store/mobile/04.png",
                pageImg: "http://static.smartisanos.cn/index/img/store/mobile/phonecare-plus.png",
                dialogImg: "http://static.smartisanos.cn/index/img/store/mobile/dialog-phonecare-normal.png",
                warning: "您选购的保修服务不支持单独退款，仅可以随手机订单一同退款。",
                introduction: ["在您购买意外保修服务后的一年内，由于意外损坏造成手机硬件故障，将可以获得最多两次维修服务，或 1 次主机更换服务。（本服务优先采取维修服务,若锤子数码售后服务中心确认无法修复，则进行主机更换。）", "您可选择在购机时购买，或收货次日起 3 日内购买本服务。", '服务细则参见<a href="http://www.smartisan.com/#/repair" target="_blank">《锤子数码手机意外损坏保修服务条款》</a>。']
            }, {
                sku: 100010301,
                aliases: "nutsDelay",
                postName: "safety2",
                name: "延长保修服务",
                category: "坚果手机",
                categoryShort: "nuts",
                price: 99,
                pageCss: "warranty-delay",
                nutsImg: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-warranty-delay.png",
                img: "http://static.smartisanos.cn/index/img/store/mobile/05.png",
                cartImage: "http://static.smartisanos.cn/index/img/store/mobile/05.png",
                pageImg: "http://static.smartisanos.cn/index/img/store/mobile/phonecare-plus-1.png",
                dialogImg: "http://static.smartisanos.cn/index/img/store/mobile/dialog-phonecare-other.png",
                warning: "您选购的保修服务支持单独退款，也可以随手机订单一同退款。",
                introduction: ["如您购买本服务，在手机正常“三包” 1 年保修期结束后，将额外多获得 1 年保修服务。", "延长保修服务期为 1 年，自手机正常“三包” 1 年服务期的截止日之次日零时开始，至第二年对应日之 24 时结束。", '服务细则参见<a href="http://www.smartisan.com/#/insurance" target="_blank">《锤子数码手机延长保修服务条款》</a>。']
            }]
        }
    }, r.prototype.modelCover = function() {
        return {
            nuts: [{
                sku: 100010601,
                category: "youth",
                name: "坚果手机彩色背盖 青色",
                price: 49,
                max: 10,
                color: "light-blue",
                colorLabel: "青色",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-light-blue.png",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-light-blue.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
            }, {
                sku: 100010602,
                category: "youth",
                name: "坚果手机彩色背盖 绿色",
                price: 49,
                max: 10,
                color: "green",
                colorLabel: "绿色",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-green.png",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-green.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-green.png"
            }, {
                sku: 100010603,
                category: "youth",
                name: "坚果手机彩色背盖 黄色",
                price: 49,
                max: 10,
                color: "yellow",
                colorLabel: "黄色",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-yellow.png",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-yellow.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-yellow.png"
            }, {
                sku: 100010604,
                category: "youth",
                name: "坚果手机彩色背盖 橙色",
                price: 49,
                max: 10,
                color: "orange",
                colorLabel: "橙色",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-orange.png",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-orange.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-orange.png"
            }, {
                sku: 100010605,
                category: "youth",
                name: "坚果手机彩色背盖 紫色",
                price: 49,
                max: 10,
                color: "purple",
                colorLabel: "紫色",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-purple.png",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-purple.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-purple.png"
            }, {
                sku: 100010606,
                category: "youth",
                name: "坚果手机彩色背盖 红色",
                price: 49,
                max: 10,
                color: "red",
                colorLabel: "红色",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-red.png",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-red.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-red.png"
            }, {
                sku: 100010607,
                category: "youth",
                name: "坚果手机彩色背盖 蓝色",
                price: 49,
                max: 10,
                color: "blue",
                colorLabel: "蓝色",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-blue.png",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-blue.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-blue.png"
            }, {
                sku: 100010608,
                category: "youth",
                name: "坚果手机彩色背盖 白色",
                price: 49,
                max: 10,
                color: "white",
                colorLabel: "白色",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-white.png",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-white.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-white.png"
            }, {
                sku: 100013701,
                category: "art",
                name: "坚果手机文艺青年版背壳 鸠羽紫",
                price: 49,
                max: 10,
                color: "violet",
                colorLabel: "鸠羽紫",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-violet.jpg",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-violet.jpg",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-violet.png"
            }, {
                sku: 100013702,
                category: "art",
                name: "坚果手机文艺青年版背壳 苏芳",
                price: 49,
                max: 10,
                color: "rose",
                colorLabel: "苏芳",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-rose.jpg",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-rose.jpg",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-rose.png"
            }, {
                sku: 100013703,
                category: "art",
                name: "坚果手机文艺青年版背壳 落栗",
                price: 49,
                max: 10,
                color: "coffee",
                colorLabel: "落栗",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-coffee.jpg",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-coffee.jpg",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-coffee.png"
            }, {
                sku: 100013704,
                category: "art",
                name: "坚果手机文艺青年版背壳 柳煤竹茶",
                price: 49,
                max: 10,
                color: "olive",
                colorLabel: "柳煤竹茶",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-olive.jpg",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-olive.jpg",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-olive.png"
            }, {
                sku: 100013705,
                category: "art",
                name: "坚果手机文艺青年版背壳 枯草",
                price: 49,
                max: 10,
                color: "sand",
                colorLabel: "枯草",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-sand.jpg",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-sand.jpg",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-sand.png"
            }, {
                sku: 100013706,
                category: "art",
                name: "坚果手机文艺青年版背壳 石竹",
                price: 49,
                max: 10,
                color: "pink",
                colorLabel: "石竹",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-pink.jpg",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-pink.jpg",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-pink.png"
            }, {
                sku: 100013707,
                category: "art",
                name: "坚果手机文艺青年版背壳 远州鼠",
                price: 49,
                max: 10,
                color: "bone",
                colorLabel: "远州鼠",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-bone.jpg",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-bone.jpg",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-bone.png"
            }, {
                sku: 100013708,
                category: "art",
                name: "坚果手机文艺青年版背壳 锖青磁",
                price: 49,
                max: 10,
                color: "grass",
                colorLabel: "锖青磁",
                img: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-grass.jpg",
                image: "http://static.smartisanos.cn/index/img/store/mobile/cover-thumb-80-grass.jpg",
                pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-grass.png"
            }],
            t2: [{
                sku: 100014901,
                category: "t2",
                name: "Smartisan T2 手机保护套 红色",
                price: 49,
                max: 10,
                color: "red",
                colorLabel: "红色",
                img: "http://static.smartisanos.cn/index/img/store/t2/t2-cover-thumb-80-red.png",
                image: "http://static.smartisanos.cn/index/img/store/t2/t2-cover-thumb-80-red.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/t2/t2-cover-page-red.png"
            }, {
                sku: 100014902,
                category: "t2",
                name: "Smartisan T2 手机保护套 黑色",
                price: 49,
                max: 10,
                color: "black",
                colorLabel: "黑色",
                img: "http://static.smartisanos.cn/index/img/store/t2/t2-cover-thumb-80-black.png",
                image: "http://static.smartisanos.cn/index/img/store/t2/t2-cover-thumb-80-black.png",
                pageImage: "http://static.smartisanos.cn/index/img/store/t2/t2-cover-page-black.png"
            }]
        }
    }, r.prototype.modelHeadset = function() {
        return [{
            sku: 100013608,
            name: "S-1000 BASS（红色，低频增强线控版）",
            version: "bass",
            versionLabel: "低频增强版",
            versionLessLabel: "增强版",
            ctrl: "line",
            ctrlLabel: "线控版",
            price: 199,
            max: 5,
            color: "red",
            colorLabel: "红色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_red.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_red.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013610,
            name: "S-1000（红色，三段式均衡线控版）",
            version: "three",
            versionLabel: "三段式均衡版",
            versionLessLabel: "均衡版",
            ctrl: "line",
            ctrlLabel: "线控版",
            price: 199,
            max: 5,
            color: "red",
            colorLabel: "红色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_red.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_red.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013612,
            name: "S-1000 BASS（黑色，低频增强线控版）",
            version: "bass",
            versionLabel: "低频增强版",
            versionLessLabel: "增强版",
            ctrl: "line",
            ctrlLabel: "线控版",
            price: 199,
            max: 5,
            color: "black",
            colorLabel: "黑色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_black.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_black.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013614,
            name: "S-1000（黑色，三段式均衡线控版）",
            version: "three",
            versionLabel: "三段式均衡版",
            versionLessLabel: "均衡版",
            ctrl: "line",
            ctrlLabel: "线控版",
            price: 199,
            max: 5,
            color: "black",
            colorLabel: "黑色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_black.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_black.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013616,
            name: "S-1000 BASS（米白色，低频增强线控版）",
            version: "bass",
            versionLabel: "低频增强版",
            versionLessLabel: "增强版",
            ctrl: "line",
            ctrlLabel: "线控版",
            price: 199,
            max: 5,
            color: "beige-white",
            colorLabel: "米白色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_white.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_white.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013618,
            name: "S-1000（米白色，三段式均衡线控版）",
            version: "three",
            versionLabel: "三段式均衡版",
            versionLessLabel: "均衡版",
            ctrl: "line",
            ctrlLabel: "线控版",
            price: 199,
            max: 5,
            color: "beige-white",
            colorLabel: "米白色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_white.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_white.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013607,
            name: "S-1000 BASS（红色，低频增强音乐版）",
            version: "bass",
            versionLabel: "低频增强版",
            versionLessLabel: "增强版",
            ctrl: "music",
            ctrlLabel: "音乐版",
            price: 179,
            max: 5,
            color: "red",
            colorLabel: "红色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_red.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_red.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013609,
            name: "S-1000（红色，三段式均衡音乐版）",
            version: "three",
            versionLabel: "三段式均衡版",
            versionLessLabel: "均衡版",
            ctrl: "music",
            ctrlLabel: "音乐版",
            price: 179,
            max: 5,
            color: "red",
            colorLabel: "红色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_red.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_red.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013611,
            name: "S-1000 BASS（黑色，低频增强音乐版）",
            version: "bass",
            versionLabel: "低频增强版",
            versionLessLabel: "增强版",
            ctrl: "music",
            ctrlLabel: "音乐版",
            price: 179,
            max: 5,
            color: "black",
            colorLabel: "黑色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_black.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_black.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013613,
            name: "S-1000（黑色，三段式均衡音乐版）",
            version: "three",
            versionLabel: "三段式均衡版",
            versionLessLabel: "均衡版",
            ctrl: "music",
            ctrlLabel: "音乐版",
            price: 179,
            max: 5,
            color: "black",
            colorLabel: "黑色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_black.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_black.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013615,
            name: "S-1000 BASS（白色，低频增强音乐版）",
            version: "bass",
            versionLabel: "低频增强版",
            versionLessLabel: "增强版",
            ctrl: "music",
            ctrlLabel: "音乐版",
            price: 179,
            max: 5,
            color: "white",
            colorLabel: "白色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_white.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_white.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }, {
            sku: 100013617,
            name: "S-1000（白色，三段式均衡音乐版）",
            version: "three",
            versionLabel: "三段式均衡版",
            versionLessLabel: "均衡版",
            ctrl: "music",
            ctrlLabel: "音乐版",
            price: 179,
            max: 5,
            color: "white",
            colorLabel: "白色",
            img: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_white.jpg",
            image: "http://static.smartisanos.cn/index/img/store/mobile/headset_80_white.jpg",
            pageImage: "http://static.smartisanos.cn/index/img/store/mobile/nuts-page-light-blue.png"
        }]
    }, r.prototype.pageImagesT1 = function() {
        return {
            white: {
                gallery: ["http://static.smartisanos.cn/index/img/store/mobile/phone_white_1.png", "http://static.smartisanos.cn/index/img/store/mobile/phone_white_2.png", "http://static.smartisanos.cn/index/img/store/mobile/phone_white_3.png", "http://static.smartisanos.cn/index/img/store/mobile/phone_white_4.png"],
                specification: {
                    phoneBlack: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-black.png",
                    phoneWhite: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-white.png",
                    anniversaryPhoneBlack: "http://static.smartisanos.cn/index/img/store/mobile/specification-anniversary-phone-black.png",
                    anniversaryPhoneWhite: "http://static.smartisanos.cn/index/img/store/mobile/specification-anniversary-phone-white.png",
                    anniversaryPhoneGold: "http://static.smartisanos.cn/index/img/store/mobile/specification-anniversary-phone-blackgold.png",
                    phoneSize: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-size-white.png",
                    phoneCPU: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-cpu.png",
                    phoneUSB: "http://static.smartisanos.cn/index/img/store/mobile/procuct-interface-white.jpg",
                    phoneIcons: "http://static.smartisanos.cn/index/img/store/mobile/specification-icons.png",
                    preInstallIcons: "http://static.smartisanos.cn/index/img/store/mobile/specification-preicons.png"
                }
            },
            black: {
                gallery: ["http://static.smartisanos.cn/index/img/store/mobile/phone_black_1.png", "http://static.smartisanos.cn/index/img/store/mobile/phone_black_2.png", "http://static.smartisanos.cn/index/img/store/mobile/phone_black_3.png", "http://static.smartisanos.cn/index/img/store/mobile/phone_black_4.png"],
                specification: {
                    phoneBlack: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-black.png",
                    phoneWhite: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-white.png",
                    anniversaryPhoneBlack: "http://static.smartisanos.cn/index/img/store/mobile/specification-anniversary-phone-black.png",
                    anniversaryPhoneWhite: "http://static.smartisanos.cn/index/img/store/mobile/specification-anniversary-phone-white.png",
                    anniversaryPhoneGold: "http://static.smartisanos.cn/index/img/store/mobile/specification-anniversary-phone-blackgold.png",
                    phoneSize: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-size-black.png",
                    phoneCPU: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-cpu.png",
                    phoneUSB: "http://static.smartisanos.cn/index/img/store/mobile/procuct-interface-black.jpg",
                    phoneIcons: "http://static.smartisanos.cn/index/img/store/mobile/specification-icons.png",
                    preInstallIcons: "http://static.smartisanos.cn/index/img/store/mobile/specification-preicons.png"
                }
            },
            anniversary: {
                gallery: ["http://static.smartisanos.cn/index/img/store/mobile/phone_black_1.png", "http://static.smartisanos.cn/index/img/store/mobile/phone_blackgold_2.png", "http://static.smartisanos.cn/index/img/store/mobile/phone_black_3.png", "http://static.smartisanos.cn/index/img/store/mobile/phone_black_4.png"],
                specification: {
                    phoneBlack: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-black.png",
                    phoneWhite: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-white.png",
                    anniversaryPhoneBlack: "http://static.smartisanos.cn/index/img/store/mobile/specification-anniversary-phone-black.png",
                    anniversaryPhoneWhite: "http://static.smartisanos.cn/index/img/store/mobile/specification-anniversary-phone-white.png",
                    anniversaryPhoneGold: "http://static.smartisanos.cn/index/img/store/mobile/specification-anniversary-phone-blackgold.png",
                    phoneSize: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-size-black.png",
                    phoneCPU: "http://static.smartisanos.cn/index/img/store/mobile/specification-phone-cpu.png",
                    phoneUSB: "http://static.smartisanos.cn/index/img/store/mobile/procuct-interface-black.jpg",
                    phoneIcons: "http://static.smartisanos.cn/index/img/store/mobile/specification-icons.png",
                    preInstallIcons: "http://static.smartisanos.cn/index/img/store/mobile/specification-preicons.png"
                }
            }
        }
    }, r.prototype.modelMobileGift = function() {
        return {}
    }, r.prototype.parsePhones = function(e, t) {
        var n = this,
            o = {
                mapNormal: {},
                mapYoung: {},
                mapBlack: {},
                mapDefect: {},
                listNormal: [],
                listYoung: [],
                listBlack: [],
                listDefect: []
            },
            i = [].concat(e);
        return $.each(i, function(e, i) {
            switch (i = $.extend({}, i, t[i.color]), i.id = i.goods_id = i.sku, n.mapPhones[i.sku] = i, i.version) {
                case "defect":
                    o.mapDefect[i.sku] = i, o.listDefect.push(i);
                    break;
                case "young":
                    o.mapYoung[i.sku] = i, o.listYoung.push(i);
                    break;
                case "black":
                    o.mapBlack[i.sku] = i, o.listBlack.push(i);
                    break;
                default:
                    o.mapNormal[i.sku] = i, o.listNormal.push(i)
            }
        }), o
    }, r.prototype.formatWarrantyData = function() {
        var e = this,
            t = e.modelWarranty(),
            n = [].concat(t.t1),
            o = [].concat(t.t2),
            i = [].concat(t.nuts);
        $.each(n, function(t, n) {
            n = $.extend({}, n), n.image = n.img, n.id = n.goods_id = n.sku, e.mapWarrantys[n.sku] = n, e.mapWarrantys[n.aliases] = n, e.listWarrantysT1.push(n)
        }), $.each(o, function(t, n) {
            n = $.extend({}, n), n.image = n.img, n.id = n.goods_id = n.sku, e.mapWarrantys[n.sku] = n, e.mapWarrantys[n.aliases] = n, e.listWarrantysT2.push(n)
        }), $.each(i, function(t, n) {
            n = $.extend({}, n), n.image = n.img, n.id = n.goods_id = n.sku, e.mapWarrantys[n.sku] = n, e.mapWarrantys[n.aliases] = n, e.listWarrantysNuts.push(n)
        })
    }, r.prototype.formatCoverData = function() {
        var e = this,
            t = e.modelCover(),
            n = [].concat(t.nuts),
            o = [].concat(t.t2);
        $.each(n, function(t, n) {
            n = $.extend({}, n), n.image = n.img, n.id = n.goods_id = n.sku, e.mapCovers[n.sku] = n, e.listCoversNuts.push(n)
        }), $.each(o, function(t, n) {
            n = $.extend({}, n), n.image = n.img, n.id = n.goods_id = n.sku, e.mapCovers[n.sku] = n, e.listCoversT2.push(n)
        })
    }, r.prototype.formatHeadsetData = function() {
        var e = this,
            t = e.modelHeadset(),
            n = [].concat(t);
        $.each(n, function(t, n) {
            n = $.extend({}, n), n.image = n.img, n.id = n.goods_id = n.sku, e.mapHeadset[n.sku] = n, e.listHeadset.push(n)
        })
    }, r.prototype.getMobileSkus = function() {
        return {
            t2: _.pluck(this.t2(), "sku"),
            jianguo: _.pluck(this.nuts(), "sku")
        }
    }, r.prototype.getMobileSpus = function() {
        return {
            t2: ["1000145", "1000170"],
            jianguo: ["1000073", "1000129", "1000130", "1000131", "1000132", "1000133", "1000158", "1000159", "1000169", "1000203", "1000204", "1000205", "1000206"]
        }
    }, r.prototype.getQHCoversSkus = function() {
        return ["100016001", "100014801", "100014701", "100014601", "100014101", "100014001", "100013801", "100012601", "100012501", "100012301", "100012201", "100012001", "100011901", "100011801", "100011701", "100011601", "100011501", "100011301", "100011201", "100011102", "100011101", "100011001", "100010901"]
    }, new r
}]), appsServices.factory("MobileService", ["$q", "StorageService", "StoreConfig", "MobileGoodsService", "CartRequest", function(e, t, n, o, i) {
    function a() {
        var e = this;
        e.type = {}, e.UserService = null, e.MobileGoodsService = null, e.StorageService = null
    }
    return a.prototype.createTempOrder = function(n) {
        var o = this,
            i = "o" + (new Date).getTime(),
            a = 2;
        n.mobileData && n.mobileData.usePresale && (a = 1);
        var r = {
            id: i,
            mobile_id: n.mobileData.id,
            pay_type: a,
            discount_amount: n.discount_amount || 0
        };
        n.cdkey_code && (r.cdkey_code = n.cdkey_code), o.removeCache(function() {
            t.set(i, r, {
                useCookie: !0,
                domain: ".smartisan.com"
            })
        });
        var s = e.defer();
        return s.resolve({
            id: i
        }), s.promise
    }, a.prototype.completeTempOrder = function(n) {
        var o = this,
            i = $.extend({
                mobileGoods: [n.mobile_id]
            }, n);
        i.id = i.id || "o" + (new Date).getTime(), n.safety1 && i.mobileGoods.push(n.safety1), n.safety2 && i.mobileGoods.push(n.safety2), delete n.mobile_id, delete n.safety1, delete n.safety2, i.mobileGoods.push(1), i.mobileGoods = i.mobileGoods.join(":"), o.removeCache(function() {
            t.set(i.id, i, {
                useCookie: !0,
                domain: ".smartisan.com"
            })
        });
        var a = e.defer();
        return a.resolve(i), a.promise
    }, a.prototype.removeCache = function(e) {
        var n = t.filter("^o");
        $.each(n, function(e, n) {
            t.remove(e, {
                domain: ".smartisan.com"
            })
        }), "function" == typeof e && e()
    }, a.prototype.parseTempOrderParams = function(e, t) {
        var o = {};
        if (e.mobile_id && (o.m = e.mobile_id), e.cdkey_code && (o.c = e.cdkey_code), e.discount_amount && (o.d = e.discount_amount), e.safety1 && (o.w1 = e.safety1), e.safety2 && (o.w2 = e.safety2), e.fitting && (o.fitting = e.fitting), e.goods_infos && (o.g = e.goods_infos), t) {
            var i = e.mobileGoods || [],
                a = [];
            if (e.mobile_id) {
                var r = [];
                r.push(e.mobile_id), e.safety1 && r.push(e.safety1), e.safety2 && r.push(e.safety2), r.push(1), a.push(r.join(":"))
            }
            $.each(i, function(e, t) {
                var n = [t.id]; !! t.warranty && n.push(t.warranty), n.push(t.num), a.push(n.join(":"))
            }), a.length && (o.mg = a.join(","))
        }
        return n.formatJSONToHash(o)
    }, a.prototype.parseOrderViewData = function(e) {
        var t = {
                total: 0,
                amountTotal: 0
            },
            n = [],
            i = [];
        return e.m && (t.isMobileOrder = !0, t.mobileData = o.mapPhones[e.m], n.push(t.mobileData), t.total += t.mobileData.price), e.c && (t.cdkey_code = e.c), t.discount_amount = e.d || 0, t.discount_amount > t.total && (t.discount_amount = 0), e.w1 && (t.isMobileOrder = !0, t.safety1 = e.w1, i.push(o.mapWarrantys[e.w1]), t.total += o.mapWarrantys[e.w1].price), e.w2 && (t.isMobileOrder = !0, t.safety2 = e.w2, i.push(o.mapWarrantys[e.w2]), t.total += o.mapWarrantys[e.w2].price), t.mobiles = n, t.warrantys = i, e.fitting && (t.fitting = e.fitting), e.g && (t.goods_infos = e.g), t.amountTotal = t.total - t.discount_amount, t
    }, a.prototype.verifyMobileCdkey = function(t) {
        return i.CdkeyVerify(t).then(function(t) {
            var n = e.defer();
            return n.resolve(t), n.promise
        }, function(e) {
            return !1
        })
    }, new a
}]), appsServices.factory("ActivityTime", ["$timeout", "$q", "StoreConfig", function(e, t, n) {
    function o() {
        var e = this;
        e.nowActivity = {}, e.activityArr = [{
            name: "0815",
            startTime: 1469980800,
            endTime: 1471795199
        }, {
            name: "jianguo",
            startTime: 1471831200,
            endTime: 1661004e3
        }], e.activityArr = _.sortBy(e.activityArr, "startTime")
    }
    return o.prototype.set = function(e) {
        e = e || {};
        var n = this,
            o = t.defer(),
            i = "http://setting.smartisan.com/info/time?jsonp=1",
            a = null,
            r = new Date;
        return r.setMinutes(r.getMinutes() + r.getTimezoneOffset() + 480), a = r.getTime(), $.ajax({
            type: "get",
            dataType: "jsonp",
            url: i,
            success: function(e) {
                return e && 0 == e.code && e.data.timestamp && (a = parseInt(e.data.timestamp), _.indexOf(location.host.split("#"), "www.smartisan.com") == -1), n.setInnerActivity(a), o.resolve(n.nowActivity), o.promise
            },
            error: function() {
                n.setInnerActivity(a), o.resolve(n.nowActivity)
            }
        }), o.promise
    }, o.prototype.setInnerActivity = function(e) {
        var t = this,
            o = !1;
        angular.forEach(t.activityArr, function(n, i) {
            e >= n.startTime && e <= n.endTime && (o = !0, t.nowActivity = angular.extend({}, n, {
                now: e
            }))
        }), o || (t.nowActivity = {
            name: "",
            startTime: 0,
            endTime: 0,
            now: 0
        }), n.nowActivity = angular.extend(n.nowActivity, t.nowActivity)
    }, new o
}]), appsServices.factory("DialogService", ["$rootScope", "$animate", function(e, t) {
    var n = {},
        o = {},
        i = function() {},
        a = function() {},
        r = function() {},
        s = e.isMobile ? ".m-module-dialog" : ".module-dialog",
        l = e.isMobile ? "m-module-dialog-show" : "module-dialog-show",
        c = "",
        u = {
            mark: "",
            isLayer: !0,
            isCenter: !1,
            once: !1,
            top: !1,
            title: "提示",
            dialogClass: "",
            doneText: "确定",
            cancelText: "取消",
            template: "",
            templateUrl: "",
            templateData: null,
            hasBtn: !0,
            useBtn: !1,
            hasCancel: !1,
            params: {},
            content: null,
            done: null,
            cancel: null,
            closeFn: null
        };
    return {
        setContent: function(e, i) {
            function a(e, t) {
                return angular.element((t || document).querySelectorAll(e))
            }
            o[e].dialogContent = angular.extend({}, u, i);
            var r = a(".js-dialog-container", n[e][0]);
            r[0] && r[0].lastChild ? angular.element(r[0].lastChild) : null;
            return r.html(""), angular.isObject(o[e].dialogContent.templateObj) ? t.enter(o[e].dialogContent.templateObj, r) : t.enter($('<div class="confirm-msg">' + o[e].dialogContent.message + "</div>"), r), this
        },
        open: function(t, u, m, p) {
            var d = this;
            i = function() {
                d.close()
            }, a = function() {
                d.close()
            }, r = function() {
                d.close()
            }, angular.isFunction(u) ? (i = u, o[t].dialogContent.dialogConfirm = u) : o[t].dialogContent.dialogConfirm = d.close, angular.isFunction(m) ? (a = m, o[t].dialogContent.dialogCancel = m) : o[t].dialogContent.dialogCancel = d.close, angular.isFunction(p) && (r = p, o[t].dialogContent.dialogCustom = p), n[c] && (n[c].find(s).removeClass(l), n[c].find(".module-dialog-layer").hide()), c = t, n[c].find(".module-dialog-layer").show(), n[c].find(s).show(20).delay().addClass(l), setTimeout(function() {
                $("body").one("click.dialog", function() {
                    $(document).off("keyup.dialog")
                }), $(document).one("keyup.dialog", function(n) {
                    27 === n.keyCode ? ($("body").off("click.dialog"), e.$apply(function() {
                        o[t].dialogContent.dialogCancel()
                    })) : 13 === n.keyCode && e.$apply(function() {
                        o[t].dialogContent.dialogConfirm()
                    })
                })
            }, 1)
        },
        close: function() {
            $("body").off("click.dialog"), $(document).off("keyup.dialog"), n[c].find(s).removeClass(l), setTimeout(function() {
                n[c].find(s).hide(), n[c].find(".module-dialog-layer").hide()
            }, 190)
        },
        cancel: function() {
            a()
        },
        confirm: function() {
            i()
        },
        custom: function(e) {
            r(e)
        },
        addDom: function(e, t, i) {
            n[e] = t, o[e] = i
        }
    }
}]), appsServices.factory("AddCartAnimation", ["$rootScope", "$collection", "Config", function(e, t, n) {
    function o(e) {
        var t = this,
            n = {
                mask: ".addcart-mask",
                maskY: ".mask-y",
                maskX: ".mask-x",
                maskItem: ".mask-item",
                el: ".content",
                button: ".blue-title-btn",
                cartLabel: ".cart-label",
                cartIcon: ".cart-link",
                cartNumber: ".cart-num",
                cartEmptyNumber: ".cart-empty-num",
                cartFullNumber: ".cart-full-num",
                speedTime: 300
            };
        t.settings = $.extend(n, e || {}), t.len_x = 0, t.len_y = 0, t.slidTime = 0, t.bounceMoreY = 45, t.cartTop = 160, t.itemToCart = !0, t.isCartHide = !1, t.timeMenuInit, t.timeMenuHide, $.each(t.settings, function(e, n) {
            t.settings[e] = $.trim(n)
        }), t.isRunning = !1, $(window).scroll(function() {
            var e = $(window).scrollTop();
            e >= t.cartTop ? t.isCartHide = !0 : t.isCartHide = !1
        })
    }
    return o.prototype.init = function(e, t) {
        var n = this;
        n.isRunning || (n.timeMenuInit = !0, t = t || "", n.$mask = $(n.settings.mask), n.$maskY = n.$mask.find(n.settings.maskY), n.$maskX = n.$mask.find(n.settings.maskX), n.$maskItem = n.$mask.find(n.settings.maskItem), n.$el = $(n.settings.el), n.$button = n.$el.find(n.settings.button), n.$cartLabel = $(n.settings.cartLabel), n.$cartIcon = n.$cartLabel.find(n.settings.cartIcon), n.$cartNumber = n.$cartLabel.find(n.settings.cartNumber), n.$cartEmptyNumber = n.$cartNumber.find(n.settings.cartEmptyNumber), n.$cartFullNumber = n.$cartNumber.find(n.settings.cartFullNumber), 0 == n.$button.length && (n.itemToCart = !1, n.$button = $(e)), t && n.$maskItem.css({
            "background-image": "url( " + t + ")"
        }))
    }, o.prototype.start = function() {
        var e = this,
            t = {},
            n = 10;
        if (e.itemToCart || !e.isCartHide) e.maskWidth = e.$cartIcon.offset().left + 22 - (e.$button.offset().left + e.$button[0].clientWidth / 2), e.maskHeight = Math.abs(e.$cartIcon.offset().top + 10 - (e.$button.offset().top + e.$button[0].clientHeight / 2));
        else {
            var o = e.$el.width() + e.$el.offset().left - e.$cartIcon.width() - e.$cartIcon.offset().left,
                i = ($(window).width() - e.$el.width()) / 2;
            e.maskHeight = e.$button.offset().top - $(window).scrollTop(), e.maskWidth = e.$el.width() + i - e.$button.offset().left - o, n = $(window).scrollTop() - 150
        }
        e.len_x = Math.abs(e.maskWidth / 279) / 10, e.len_y = Math.abs(e.maskHeight / 360) / 10, e.slidTime = Math.max(e.len_x, e.len_y), e.$mask.show(20), setTimeout(function() {
            e.isRunning = !0, t = {
                width: e.maskWidth,
                height: e.maskHeight,
                top: n
            }, e.$mask.css(t), setTimeout(function() {
                e.slidInto()
            }, 20), setTimeout(function() {
                e.reset(), e.timeMenuInit && (clearTimeout(e.timeMenuHide), e.timeMenuHide = setTimeout(function() {
                    e.menuHide()
                }, 6e3))
            }, e.itemToCart ? 900 : 900 + 1e3 * e.slidTime)
        }, 30)
    }, o.prototype.getIsRunnng = function() {
        var e = this;
        return e.isRunning
    }, o.prototype.slidInto = function() {
        var e = this;
        e.itemToCart ? e.$maskY.addClass("mask-y1") : e.$maskY.css({
            transform: "translateY(-" + (e.maskHeight + e.bounceMoreY) + "px)",
            transition: "transform " + (.3 + e.slidTime) + "s cubic-bezier(0,0,.58,1)"
        }), e.itemToCart ? e.$maskX.addClass("mask-x1") : e.$maskX.css({
            transform: "translateX(" + e.maskWidth + "px)",
            transition: "transform " + (.45 + e.slidTime) + "s cubic-bezier(0, 0, 1, 1)"
        }), e.$maskItem.addClass("mask-item1");
        var t = !1;
        e.$maskY.on("webkitTransitionEnd transitionend", function(n) {
            var o = $(n.target);
            o.hasClass(e.settings.maskY.substr(1)) && !t && (t = !0, e.itemToCart ? e.$maskY.addClass("mask-y2") : e.$maskY.css({
                transform: "translateY(-" + e.maskHeight + "px)",
                transition: "transform 0.2s cubic-bezier(0,0,.58,1)"
            }), $(this).off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"))
        }), setTimeout(function() {
            e.$maskItem.addClass("mask-item2"), e.$cartLabel.addClass("cart-label-hover")
        }, e.itemToCart ? 600 : 400 + 1e3 * e.slidTime)
    }, o.prototype.pop = function() {
        var e = this;
        e.$cartNumber.addClass("cart-num-active"), e.$cartFullNumber.addClass("cart-full-num-active")
    }, o.prototype.menuHide = function() {
        var e = this;
        e.$cartLabel.removeClass("cart-label-hover")
    }, o.prototype.clearTimeMenuHide = function() {
        var e = this;
        e.timeMenuInit && (clearTimeout(e.timeMenuHide), e.timeMenuInit = !1)
    }, o.prototype.reset = function() {
        var e = this;
        e.itemToCart ? (e.$maskY.removeClass("mask-y1 mask-y2"), e.$maskX.removeClass("mask-x1")) : (e.$maskY.removeAttr("style"), e.$maskX.removeAttr("style")), e.$maskItem.removeClass("mask-item1 mask-item2"), e.$cartNumber.removeClass("cart-num-active"), e.$mask.hide(20), e.isRunning = !1
    }, new o({
        el: ".store-content",
        button: ".banner .blue-title-btn",
        cartLabel: ".layout-sub-header .cart-label"
    })
}]), appsFilters.filter("realImage", ["StoreConfig", function(e) {
    return function(t, n, o) {
        var o = o || "jpg";
        if (t) {
            if (_.indexOf(t.split(","), ".png") > -1) return t;
            var i = e.isRetina,
                a = "";
            return a = i ? t + n + "X" + n + "@2x." + o : t + n + "X" + n + "." + o
        }
        return ""
    }
}]).filter("onlineImage", ["StoreConfig", function(e) {
    var t = [function(t, n, o) {
        if (t) {
            if (_.indexOf(t.split(","), ".png") > -1) return t;
            var i = e.isRetina,
                a = "";
            return a = i ? t + n + "X" + n + "@2x." + o : t + n + "X" + n + "." + o
        }
        return ""
    }, function(t, n, o) {
        if (!t) return "";
        var i = e.isRetina;
        return n = i ? 2 * n : n, t + "@0o_0l_" + n + "w_100q.src"
    }];
    return function(e, n, o, i) {
        o = o || 0;
        var i = i || "jpg";
        return o = parseInt(o), t[o](e, n, i)
    }
}]).filter("retinaSrc", ["StoreConfig", function(e) {
    return function(e) {
        var t = "@2x",
            n = e.split(".");
        return n.length < 2 ? url : (n[n.length - 2] += t, n.join("."))
    }
}]).filter("nextDate", ["StoreConfig", function(e) {
    return function(e) {
        var t = new Date,
            e = 0 | e;
        return t.setDate(t.getDate() + e), t
    }
}]).filter("floatNumber", ["StoreConfig", function(e) {
    return function(e, t) {
        var n = e + "",
            o = n,
            i = "";
        return n.match(/[^\d\.]/) ? e : (n.match(/\./) && (o = n.replace(/\..*$/gi, ""), i = n.replace(/^[^\.]+\.?/gi, ""), i = i.replace(/^(\d{1,2})\d*/, "$1"), i = 2 == i.length ? i : i + "0"), t ? o + "." + ("" == i ? "00" : i) : o + "." + ("" == i ? "00" : i) - 0)
    }
}]).filter("rmb", ["StoreConfig", function(e) {
    return function(e, t, n) {
        if (void 0 == e) return 0;
        var o = e + "",
            i = o,
            a = "";
        if (o.match(/[^\d\.]/)) return e;
        o.match(/\./) && (i = o.replace(/\..*$/gi, ""), a = o.replace(/^[^\.]+\.?/gi, ""), a = a.replace(/^(\d{1,2})\d*/, "$1"), a = 2 == a.length ? a : a + "0");
        for (var r = i.split("").reverse(), s = [], l = 0; l < r.length; l++) l % 3 == 0 && s.push(","), s.push(r[l]);
        var c = s.reverse().join("").replace(/\,$/gi, "");
        return c = n ? c : "¥ " + c, ("boolean" == typeof t && t || "true" == t) && (c = c + "." + ("" == a ? "00" : a)), c
    }
}]).filter("decimal", ["StoreConfig", "$filter", function(e, t) {
    return function(e, n) {
        var o = t("rmb")(e, n),
            i = o.indexOf("¥ ");
        return o = i >= 0 ? o.substr(i + 2) : o
    }
}]).filter("ellipsis", ["StoreConfig", "$filter", function(e, t) {
    return function(e, t) {
        var e = e + "",
            n = "",
            o = e.replace(/[^\x00-\xff]/g, ">>");
        if (o.length <= 2 * t) return e;
        var i = o.substr(0, 2 * t).split(">>"),
            a = 0;
        return $.each(i, function(t, o) {
            "" == o ? (n += e.substr(a, 1), a++) : (n += e.substr(a, o.length), a += o.length)
        }), n + "..."
    }
}]).filter("ellipsisLast2", ["StoreConfig", "$filter", function(e, t) {
    return function(e, n) {
        function o(e) {
            for (var t = "", n = 0; n < e.length; n++) t += e.charAt(e.length - n - 1);
            return t
        }
        var e = e + "",
            i = e.replace(/[^\x00-\xff]/g, ">>");
        if (i.length <= 2 * n) return e;
        var a = t("ellipsis")(e, n - 2),
            r = t("ellipsis")(o(e), 1);
        return r = o(r.replace(/...$/, "")), a + r
    }
}]), appsDirectives.directive("realSrc", ["$timeout", "StoreConfig", function(e, t) {
    return {
        restrict: "A",
        link: function(e, n, o, i) {
            function a(e) {
                o.$set("src", e), t.configmsie && n.prop("src", e)
            }
            o.$observe("realSrc", function(e) {
                e && a(e)
            })
        }
    }
}]).directive("uiRadio", ["$timeout", function(e) {
    return {
        restrict: "EA",
        templateUrl: "view/html/tempUiRadio.html",
        replace: !0,
        scope: {
            name: "@name",
            options: "=options",
            value: "@",
            parentEl: "@",
            checked: "=checked"
        },
        link: function(t, n, o, i) {
            t.normalClass = !! t.options && t.options.normalClass || "blue-radio", n && e(function() {
                t.options && t.options.parentEl ? n.closest(t.options.parentEl).click(function(e) {
                    t.$apply(function() {
                        t.options && angular.isFunction(t.options.callback) && t.options.callback(n, t.name, t.checked, t.value)
                    })
                }) : t.toggleRadio = function(e) {
                    t.options && angular.isFunction(t.options.callback) && t.options.callback(n, t.name, t.checked, t.value)
                }
            }, 500)
        }
    }
}]).directive("uiCheckbox", ["$timeout", function(e) {
    return {
        restrict: "EA",
        templateUrl: "view/html/tempUiCheckbox.html",
        replace: !0,
        scope: {
            name: "@",
            options: "=options",
            checked: "=checked",
            parentEl: "@",
            disableddd: "=disableddd"
        },
        link: function(t, n, o, i) {
            t.normalClass = t.options && t.options.normalClass || "blue-checkbox", n && e(function() {
                t.options && t.options.parentEl ? n.closest(t.options.parentEl).click(function(e) {
                    t.$apply(function() {
                        t.disableddd || (t.checked = !t.checked, t.options && angular.isFunction(t.options.callback) && t.options.callback(n, t.name, t.checked))
                    })
                }) : t.toggleCheck = function(e) {
                    t.disableddd || (t.checked = !t.checked, t.options && angular.isFunction(t.options.callback) && t.options.callback(n, t.name, t.checked))
                }
            }, 500)
        }
    }
}]).directive("cartQuantity", ["$timeout", "DialogService", "Navigator", function(e, t, n) {
    return {
        restrict: "EA",
        templateUrl: "view/html/tempCartQuantity.html",
        replace: !0,
        scope: {
            options: "=options",
            value: "=value",
            sku: "@",
            min: "@",
            max: "@"
        },
        link: function(o, i, a, r) {
            o.arr = [1, 2];
            var s = !1;
            if (o.customClass = o.options && o.options.customClass || "select", i) {
                var l = function() {
                    o.options && !o.options.inputType && (o.options.inputType = n.isMobile ? "number" : "text"), n.isMobile && (o.arr = [o.value - 1, o.value, o.value - 0 + 1]), 0 == o.max && 0 == o.min ? (s = !0, $(i).find(".num input").attr("readonly", "readonly")) : s = !1, 1 == o.value && o.options && !o.options.canDelete ? $(i).find(".down").addClass("down-disabled") : $(i).find(".down").removeClass("down-disabled"), o.value >= o.max ? $(i).find(".up").addClass("up-disabled") : $(i).find(".up").removeClass("up-disabled")
                };
                o.options && angular.isFunction(o.options.refresh) ? o.options.refresh(l) : e(function() {
                    l()
                }, 20), o.resetList = function(e, t) {
                    n.isMobile ? (o.value = t, o.arr = [t - 1, t, t - 0 + 1], angular.isFunction(o.options.callback) && o.options.callback(e, o.sku, t)) : o.$apply(function() {
                        o.value = t, o.arr = [t - 1, t, t - 0 + 1], angular.isFunction(o.options.callback) && o.options.callback(e, o.sku, t)
                    })
                }, i.find("input").on("keydown", function(e) {
                    var t = e.keyCode;
                    return !e.shiftKey && (t > 47 && t < 58 || t > 94 && t < 106 || 8 == t || 13 == t) && void(13 == t && $(e.currentTarget).blur())
                }), i.find("input").on("blur", function(e) {
                    if (s) return !1;
                    var t = $(e.currentTarget),
                        n = t.siblings("ul"),
                        i = (t.closest(".cart-items"), t.closest(".js-select-quantity")),
                        a = i.find(".down"),
                        r = i.find(".up"),
                        l = 0 | o.min || 1,
                        c = 0 | o.max || 0,
                        u = t.val();
                    u = u.match(/^\d+$/) ? u : 1, u = Math.max(u, l), u = Math.min(u, c), r.hasClass("up-disabled") && r.removeClass("up-disabled"), u >= c && r.addClass("up-disabled"), a.hasClass("down-disabled") && a.removeClass("down-disabled"), 1 != u || o.options.canDelete || a.addClass("down-disabled"), t.val(u), o.resetList(n, u)
                }), o.up = function(i) {
                    var a = $(i.currentTarget),
                        r = a.siblings(".num"),
                        l = r.find("input"),
                        c = r.find("ul"),
                        u = a.siblings(".down"),
                        m = a.closest(".cart-items"),
                        p = (l.closest(".js-select-quantity"), o.max || 0),
                        d = o.value,
                        g = r.height();
                    return !(s || !o.options.useData && a.hasClass("up-disabled")) && (u.hasClass("down-disabled") && u.removeClass("down-disabled"), p = Math.max(p, 1), !m.hasClass("cart-disabled-items") && (d >= p && o.options.useData ? (t.setContent("dialog", {
                            message: "已达到可购买的最大数量",
                            dialogClass: "module-dialog-confirm"
                        }), e(function() {
                            t.open("dialog")
                        }, 50), !1) : !(c.is("animated") || d >= p) && void(n.isMobile ? (++d, d >= p && a.addClass("up-disabled"), o.resetList(c, d)) : (l.hide(), c.show(), c.animate({
                            top: "-=" + g
                        }, 100, function() {
                            ++d, l.show(), c.css("top", "-" + g + "px").hide(), d >= p && a.addClass("up-disabled"), o.resetList(c, d)
                        })))))
                }, o.down = function(e) {
                    var t = $(e.currentTarget),
                        i = t.siblings(".num"),
                        a = t.siblings(".up"),
                        r = i.find("input"),
                        l = i.find("ul"),
                        c = t.closest(".cart-items"),
                        u = (r.closest(".js-select-quantity"), o.min || 1),
                        m = o.value,
                        p = i.height();
                    return !s && !t.hasClass("down-disabled") && (1 != o.max && a.hasClass("up-disabled") && a.removeClass("up-disabled"), o.options.canDelete && (u = 0), !c.hasClass("cart-disabled-items") && (!(1 == m && !o.options.canDelete) && (!(l.is("animated") || m <= u) && void(n.isMobile ? (--m, o.resetList(l, m)) : (r.hide(), l.show(), l.animate({
                            top: "+=" + p
                        }, 100, function() {
                            --m, r.show(), l.css("top", "-" + p + "px").hide(), 1 != m || o.options.canDelete || t.addClass("down-disabled"), o.resetList(l, m)
                        }))))))
                }
            }
        }
    }
}]).directive("tempSubNavGoodsItem", ["$timeout", "StoreConfig", "CartRequest", "$q", "ActivityTime", function(e, t, n, o, i) {
    return {
        restrict: "EA",
        templateUrl: "view/html/tempSubNavGoodsItem.html",
        replace: !0,
        link: function(t, i, a, r) {
            if (i) {
                t.navGoods = [{
                    category: "mobile",
                    list: [{
                        mark: "t2",
                        name: "Smartisan T2",
                        price: 2499,
                        link: "t2",
                        sku: 100014502
                    }, {
                        mark: "youth",
                        name: "坚果手机标准版",
                        price: 699,
                        link: "jianguo?name=youth",
                        sku: 100007312
                    }, {
                        mark: "art",
                        name: "坚果手机文艺青年版",
                        price: 799,
                        link: "jianguo?name=art",
                        sku: 100013107
                    }, {
                        mark: "black",
                        name: "坚果手机黑色版",
                        price: 699,
                        link: "jianguo?name=black",
                        sku: 100007316
                    }]
                }, {
                    category: "warranty",
                    list: [{
                        mark: "accident",
                        name: "意外保修服务",
                        link: "insurance/information"
                    }, {
                        mark: "delay",
                        name: "延长保修服务",
                        link: "insurance/information"
                    }]
                }];
                var s = [];
                angular.forEach(t.navGoods[0].list, function(e, t) {
                    s.push(e.sku)
                }), o.all({
                    mobileData: n.GetSkusInfo({
                        ids: s.join(",")
                    })
                }).then(function(n) {
                    e(function() {
                        n.mobileData.code || angular.forEach(t.navGoods[0].list, function(e, t) {
                            e.oldPrice || (e.oldPrice = e.price);
                            var o = _.where(n.mobileData.data.list, {
                                id: e.sku
                            });
                            o.length > 0 && (e.price = o[0].price)
                        })
                    }, 50)
                });
                var l = !1,
                    c = "",
                    u = $(".sub-nav-fix-panel"),
                    m = function(e) {
                        u.find('.js-sub-nav-list li[data-category="' + e + '"]').toggleClass("selected", !0)
                    },
                    p = function() {
                        u.find(".js-sub-nav-list li .js-toggle-nav").parent().removeClass("selected")
                    },
                    d = function() {
                        u.toggleClass("open-nav", !1), $(document).off("click.openSubNav"), l = !1, p(), c = ""
                    },
                    g = function(e) {
                        u.find(".js-nav-goods-list").toggleClass("on", !1), u.find('.js-nav-goods-list[data-type="' + e + '"]').toggleClass("on", !0)
                    };
                $(document).on("click", ".js-toggle-nav", function(e) {
                    var t = $(e.currentTarget),
                        n = $(".js-nav-zoom-panel"),
                        o = t.data("type"),
                        i = t.data("close");
                    return n.length ? void n.find(".js-banner-zoom").toggleClass("banner-zoom", !0) : i ? void d() : (o || (o = t.parent("li").data("category")), m(o), l ? c == o ? d() : g(o) : (l = !0, u.toggleClass("open-nav", !0), g(o), setTimeout(function() {
                        $(document).on("click.openSubNav", function(e) {
                            $(e.target).closest(".js-sub-nav-list").length || d(), $(e.target).data("close") && !$(e.target).hasClass("js-toggle-nav") && d()
                        })
                    }, 50)), void(c = o))
                })
            }
        }
    }
}]).directive("tempDialog", ["$timeout", "DialogService", function(e, t) {
    return {
        restrict: "EA",
        templateUrl: "view/html/tempDialog.html",
        link: function(e, n, o, i) {
            n && t.addDom(o.dialog, n, e)
        }
    }
}]).directive("tempPaging", ["$timeout", "StoreConfig", "PagingService", function(e, t, n) {
    return {
        restrict: "EA",
        templateUrl: "view/html/tempPaging.html",
        link: function(e, t, o, i) {
            n.addDom(null, t, e)
        }
    }
}]).directive("uiShoppingService", ["$timeout", function(e) {
    return {
        restrict: "EA",
        templateUrl: "view/html/tempUiShoppingService.html",
        link: function(e, t, n, o) {}
    }
}]).directive("skuChange", ["$timeout", function(e) {
    return {
        restrict: "A",
        link: function(t, n, o) {
            t.$watch(function() {
                return o.model
            }, function() {
                e(function() {
                    n.addClass("on-opc")
                }, 100)
            })
        }
    }
}]), appsDirectives.directive("cartMain", ["$rootScope", "$document", "$filter", "$timeout", "CartService", "StoreConfig", "Config", "CartCollection", "MobileGoodsService", "AddCartAnimation", function(e, t, n, o, i, a, r, s, l, c) {
    return {
        restrict: "EA",
        templateUrl: "view/html/tempMainCart.html",
        scope: {
            options: "@options"
        },
        link: function(r, u, m, p) {
            var d, g = !1;
            if (u) {
                r.storePathName = e.storePathName, r.cartsMain = [], r.num = 0, r.isCartLoading = !0;
                var f, h = !1;
                r.render = function() {
                    var e = s.CartCollection.all(),
                        t = l.mapPhones,
                        o = i.countCart(),
                        a = [],
                        c = n("orderBy");
                    if (e.length > 0 && angular.forEach(e, function(e, n) {
                            if (e && (t[e.sku] && (e.category = t[e.sku].category), t[e.sku] ? ("t2" == t[e.sku].category && (e.categoryOrder = 11), "nuts" == t[e.sku].category && (e.categoryOrder = 31)) : e.categoryOrder = 100), e.isSell) {
                                if (e.isMobile && !e.isOut) {
                                    var o = [];
                                    e.isAccident && o.push(e.accident), e.isDelay && o.push(e.delay), e.warrantyLittle = o
                                }
                                a.push(e)
                            }
                        }), e.length ? f = !0 : (f = !1, r.num = o.num, $(".layout-sub-header .cart-full-num").toggleClass("cart-full-num-active", !! r.num)), r.cartsMain = c(a, ["isOut", "categoryOrder", "sku"]), d) {
                        var u = _.findIndex(r.cartsMain, {
                                sku: parseInt(d)
                            }),
                            m = _.findIndex(r.cartsMain, {
                                sku: d + ""
                            });
                        if (u = Math.max(u, m), u > 0) {
                            var p = r.cartsMain.splice(u, 1);
                            r.cartsMain.splice(0, 0, p[0])
                        }
                    }
                    r.countTotal()
                }, r.countTotal = function() {
                    var e = r.cartsMain,
                        t = (i.countCart(), 0),
                        n = 0;
                    e.length > 0 && angular.forEach(e, function(e, o) {
                        e.isSell && (t += e.num, e.isOut || (n += e.subtotal, e.isMobile && (e.isAccident && (t += e.num, n += e.accident.price * e.num), e.isDelay && (t += e.num, n += e.delay.price * e.num))))
                    }), f && (r.num = t, $(".layout-sub-header .cart-full-num").toggleClass("cart-full-num-active", !! t)), r.total = n
                }, r.removeCart = function(e) {
                    var t = $(e.currentTarget),
                        n = t.closest(".cart-item"),
                        c = n.data("id"),
                        u = n.data("mobile"),
                        m = s.CartCollection.get({
                            id: u
                        });
                    if (u && m && l.mapWarrantys[c]) {
                        var p = m,
                            d = {
                                sku: u,
                                num: p.num,
                                warranty: p.warranty ? p.warranty + "" : null
                            };
                        d.warranty && (d.warranty = d.warranty.replace(c, "").replace(/^\:|\:$/gi, "")), a.opacity ? (r.removeItem({
                            sku: c,
                            mobile: u
                        }), o(function() {
                            i.updateCart(d)
                        }, 290)) : i.updateCart(d)
                    } else i.removeCart(c)
                }, r.removeItem = function(e) {
                    if (!e) return !1;
                    var t = e.sku,
                        n = e.mobile,
                        i = _.findIndex(r.cartsMain, {
                            sku: t
                        });
                    if (i >= 0 || n) {
                        var s = $(".layout-sub-header .js-cart-item[data-id=" + t + "]");
                        n || (s = s.parent()), a.csstransitions ? (s.height(s.height()), o(function() {
                            s.addClass("carts-items-removed")
                        }, 0), o(function() {
                            !n && r.cartsMain.splice(i, 1), o(function() {
                                r.countTotal()
                            }, 20)
                        }, 280)) : (!n && r.cartsMain.splice(i, 1), r.countTotal())
                    }
                }, r.getList = function(e) {
                    if (!h) {
                        var t = null;
                        t = o(function() {
                            i.syncList().then(function(e) {
                                h = !0, r.isCartLoading = !1, o.cancel(t), r.render()
                            }, function(e) {
                                i.getLocalList().then(function(e) {
                                    h = !0, r.isCartLoading = !1, o.cancel(t), r.render()
                                }, function(e) {})
                            })
                        }, 20)
                    }
                }, o(function() {
                    r.render()
                }, 50);
                var v = !1;
                u.on("mouseenter", function(e) {
                    return !v && (v = !0, e.preventDefault(), c.clearTimeMenuHide(), r.$apply(function() {
                            r.getList()
                        }), void $(this).addClass("cart-label-hover"))
                }).on("mouseleave", function(e) {
                    v = !1, e.preventDefault(), $(this).removeClass("cart-label-hover")
                }), a.csstransitions && t.on("click", function(e) {
                    var t = $(e.target);
                    t.attr("data-cart") || t.closest("#js-main-cart-panel").is("#js-main-cart-panel") || (v = !1, $("#js-main-cart-panel").removeClass("cart-label-hover"))
                }), e.$on("cart", function(e, t) {
                    if (t && angular.isObject(t)) switch (t.name) {
                        case "addCartInAnimation":
                            g = !0, d = t.sku + "";
                            break;
                        case "changeCart":
                            g ? o(function() {
                                g = !1, a.csstransitions && c.pop(), h ? r.render() : r.getList(), g = !1
                            }, 700) : o(function() {
                                r.render()
                            }, 50);
                            break;
                        case "removeSingleCart":
                            r.removeItem(t.data.model);
                            break;
                        case "syncList":
                            o(function() {
                                h = !1, r.getList()
                            }, 50);
                            break;
                        case "removeCartAll":
                            i.removeAll(!0)
                    }
                })
            }
        }
    }
}]), appsServices.factory("HomeService", ["$http", "Config", "$q", "$filter", "CartRequest", "GoodsService", "Utils", "MobileGoodsService", "$rootScope", function(e, t, n, o, i, a, r, s, l) {
    function c() {}
    var u = function(e, t, n) {
            for (var o = [], i = null, a = 0; a < e.length; a++) if (e[a].color_id == t) {
                if (e[a].sku_id == n) {
                    i = e[a];
                    break
                }
                o.push(e[a])
            }
            return i ? i : o[0]
        },
        m = function(e) {
            var n, i = e.spu,
                a = e.sku_id,
                r = (s.getMobileSkus(), s.getQHCoversSkus()),
                l = {
                    id: i.id,
                    title: i.shop_info.spu_title,
                    subTitle: i.shop_info.spu_sub_title,
                    price: i.price
                },
                c = i.sku_info,
                m = {},
                p = !1,
                d = null;
            angular.forEach(i.shop_info.spec_v2, function(e, t) {
                1 == e.spec_id && (p = !0, d = e.spec_values)
            });
            var g = [];
            return p ? angular.forEach(d, function(e, s) {
                var l = u(i.sku_info, e.id, a);
                1 == e.spec_id && l && (l = angular.extend({
                    skuId: l.sku_id,
                    title: l.title,
                    subTitle: l.sub_title,
                    promoTitle: l.promo_title,
                    colorId: l.colorId,
                    directToCart: l.direct_to_cart,
                    price: l.price,
                    image: l.image,
                    colorImage: e.image,
                    colorValue: e.item_value,
                    targetUrl: "../shop/#/item/" + l.sku_id
                }), _.indexOf(r, l.skuId) >= 0 && (l.skuType = "qh"), l.showColorImage = !! l.colorImage && "qh" != l.skuType, l.colorImage = o("onlineImage")(t.imgUrl + l.colorImage, 20), l.image = t.imgUrl + l.image, l.skuId == a && (n = l), g.push(l), m[l.skuId] = l)
            }) : angular.forEach(c, function(e, o) {
                e && e.sku_id && e.sku_id == a && (n = angular.extend({
                    colorId: e.color_id,
                    directToCart: e.direct_to_cart,
                    image: e.image,
                    price: e.price,
                    promoTitle: e.promo_title,
                    skuId: e.sku_id,
                    subTitle: e.sub_title,
                    targetUrl: "../shop/#/item/" + e.sku_id,
                    title: e.title
                }), n.image = t.imgUrl + n.image)
            }), l.currentSku = n ? n : g[0], l.skuInfo = m, l.skuList = g, l
        },
        p = function(e) {
            var t = {},
                n = [];
            angular.forEach(e.home_activities, function(e, t) {
                var o = {
                    link: e.link,
                    image: e.image,
                    imageMobile: e.image_mobile
                };
                n.push(o)
            }), t.activities = n;
            var o = [];
            angular.forEach(e.home_hot, function(e, t) {
                var n = {};
                e.hasOwnProperty("link") ? angular.extend(n, {
                    type: "link",
                    image: e.image,
                    imageMobile: e.image_mobile
                }) : e.hasOwnProperty("spu") && angular.extend(n, {
                    type: "product"
                }, m(e)), o.push(n)
            }), t.hot = o;
            var i = [];
            return angular.forEach(e.home_floors, function(e, t) {
                var n = e.tabs,
                    o = [],
                    a = 0,
                    r = !1;
                e.showTabItems = n.length > 1, angular.forEach(n, function(e, t) {
                    var n = {};
                    if (e.hasOwnProperty("tab_link")) n.type = "tab-link", n.tabName = e.tab_name, n.tabLink = e.tab_link;
                    else {
                        r || (r = !0, a = t), n.type = "tab-nav", n.tabName = e.tab_name;
                        var i = e.tab_items,
                            s = [];
                        angular.forEach(i, function(e, t) {
                            var n = {};
                            e.hasOwnProperty("link") ? angular.extend(n, e, {
                                type: "link",
                                imageMobile: e.image_mobile
                            }) : e.hasOwnProperty("spu") && angular.extend(n, {
                                type: "product"
                            }, m(e)), s.push(n)
                        });
                        var l = s.length;
                        l > 3 && (l = 4 * Math.floor((l + 1) / 4) - 1), s = s.slice(0, l), n.tabInfo = s
                    }
                    o.push(n)
                }), e.tabs = o, e.currentTabIndex = a, e.currentTab = e.tabs[e.currentTabIndex], i.push(e)
            }), t.floors = i, l.isMobile && (t.hot.length > 4 && (t.hot = t.hot.slice(0, 4)), angular.forEach(t.floors, function(e, t) {
                var n = e.currentTab.tabInfo;
                n && n.length > 7 && (e.currentTab.tabInfo = n.slice(0, 7))
            })), t
        };
    return c.prototype.getHomeWithPromo = function() {
        var e = this,
            t = a.fetchPromotionBrief().then(function(e) {
                return e
            });
        return n.all([e.getHome(), t])
    }, c.prototype.getHome = function() {
        return i.getHome().then(function(e) {
            return p(e.data)
        })
    }, new c
}]);