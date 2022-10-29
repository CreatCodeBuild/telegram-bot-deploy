// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var P, d, V, C, O, N = {}, z = [], te = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(e, t) {
    for(var _ in t)e[_] = t[_];
    return e;
}
function G(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function _e(e, t, _) {
    var r, l, o, s = {};
    for(o in t)o == "key" ? r = t[o] : o == "ref" ? l = t[o] : s[o] = t[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? P.call(arguments, 2) : _), typeof e == "function" && e.defaultProps != null) for(o in e.defaultProps)s[o] === void 0 && (s[o] = e.defaultProps[o]);
    return S(e, s, r, l, null);
}
function S(e, t, _, r, l) {
    var o = {
        type: e,
        props: t,
        key: _,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: l ?? ++V
    };
    return l == null && d.vnode != null && d.vnode(o), o;
}
function W(e) {
    return e.children;
}
function D(e, t) {
    this.props = e, this.context = t;
}
function w(e, t) {
    if (t == null) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
    for(var _; t < e.__k.length; t++)if ((_ = e.__k[t]) != null && _.__e != null) return _.__e;
    return typeof e.type == "function" ? w(e) : null;
}
function q(e) {
    var t, _;
    if ((e = e.__) != null && e.__c != null) {
        for(e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)if ((_ = e.__k[t]) != null && _.__e != null) {
            e.__e = e.__c.base = _.__e;
            break;
        }
        return q(e);
    }
}
function H(e) {
    (!e.__d && (e.__d = !0) && C.push(e) && !L.__r++ || O !== d.debounceRendering) && ((O = d.debounceRendering) || setTimeout)(L);
}
function L() {
    for(var e; L.__r = C.length;)e = C.sort(function(t, _) {
        return t.__v.__b - _.__v.__b;
    }), C = [], e.some(function(t) {
        var _, r, l, o, s, f;
        t.__d && (s = (o = (_ = t).__v).__e, (f = _.__P) && (r = [], (l = k({}, o)).__v = o.__v + 1, F(f, o, l, _.__n, f.ownerSVGElement !== void 0, o.__h != null ? [
            s
        ] : null, r, s ?? w(o), o.__h), X(r, o), o.__e != s && q(o)));
    });
}
function J(e, t, _, r, l, o, s, f, p, a) {
    var n, h, u, i, c, b, v, y = r && r.__k || z, g = y.length;
    for(_.__k = [], n = 0; n < t.length; n++)if ((i = _.__k[n] = (i = t[n]) == null || typeof i == "boolean" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" ? S(null, i, null, null, i) : Array.isArray(i) ? S(W, {
        children: i
    }, null, null, null) : i.__b > 0 ? S(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null) {
        if (i.__ = _, i.__b = _.__b + 1, (u = y[n]) === null || u && i.key == u.key && i.type === u.type) y[n] = void 0;
        else for(h = 0; h < g; h++){
            if ((u = y[h]) && i.key == u.key && i.type === u.type) {
                y[h] = void 0;
                break;
            }
            u = null;
        }
        F(e, i, u = u || N, l, o, s, f, p, a), c = i.__e, (h = i.ref) && u.ref != h && (v || (v = []), u.ref && v.push(u.ref, null, i), v.push(h, i.__c || c, i)), c != null ? (b == null && (b = c), typeof i.type == "function" && i.__k === u.__k ? i.__d = p = K(i, p, e) : p = Q(e, i, u, y, c, p), typeof _.type == "function" && (_.__d = p)) : p && u.__e == p && p.parentNode != e && (p = w(u));
    }
    for(_.__e = b, n = g; n--;)y[n] != null && Z(y[n], y[n]);
    if (v) for(n = 0; n < v.length; n++)Y(v[n], v[++n], v[++n]);
}
function K(e, t, _) {
    for(var r, l = e.__k, o = 0; l && o < l.length; o++)(r = l[o]) && (r.__ = e, t = typeof r.type == "function" ? K(r, t, _) : Q(_, r, r, l, r.__e, t));
    return t;
}
function Q(e, t, _, r, l, o) {
    var s, f, p;
    if (t.__d !== void 0) s = t.__d, t.__d = void 0;
    else if (_ == null || l != o || l.parentNode == null) e: if (o == null || o.parentNode !== e) e.appendChild(l), s = null;
    else {
        for(f = o, p = 0; (f = f.nextSibling) && p < r.length; p += 2)if (f == l) break e;
        e.insertBefore(l, o), s = o;
    }
    return s !== void 0 ? s : l.nextSibling;
}
function oe(e, t, _, r, l) {
    var o;
    for(o in _)o === "children" || o === "key" || o in t || M(e, o, null, _[o], r);
    for(o in t)l && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || _[o] === t[o] || M(e, o, t[o], _[o], r);
}
function R(e, t, _) {
    t[0] === "-" ? e.setProperty(t, _) : e[t] = _ == null ? "" : typeof _ != "number" || te.test(t) ? _ : _ + "px";
}
function M(e, t, _, r, l) {
    var o;
    e: if (t === "style") if (typeof _ == "string") e.style.cssText = _;
    else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r) for(t in r)_ && t in _ || R(e.style, t, "");
        if (_) for(t in _)r && _[t] === r[t] || R(e.style, t, _[t]);
    }
    else if (t[0] === "o" && t[1] === "n") o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = _, _ ? r || e.addEventListener(t, o ? B : $, o) : e.removeEventListener(t, o ? B : $, o);
    else if (t !== "dangerouslySetInnerHTML") {
        if (l) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
            e[t] = _ ?? "";
            break e;
        } catch  {}
        typeof _ == "function" || (_ == null || _ === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, _));
    }
}
function $(e) {
    this.l[e.type + !1](d.event ? d.event(e) : e);
}
function B(e) {
    this.l[e.type + !0](d.event ? d.event(e) : e);
}
function F(e, t, _, r, l, o, s, f, p) {
    var a, n, h, u, i, c, b, v, y, g, E, x, I, A, T, m = t.type;
    if (t.constructor !== void 0) return null;
    _.__h != null && (p = _.__h, f = t.__e = _.__e, t.__h = null, o = [
        f
    ]), (a = d.__b) && a(t);
    try {
        e: if (typeof m == "function") {
            if (v = t.props, y = (a = m.contextType) && r[a.__c], g = a ? y ? y.props.value : a.__ : r, _.__c ? b = (n = t.__c = _.__c).__ = n.__E : ("prototype" in m && m.prototype.render ? t.__c = n = new m(v, g) : (t.__c = n = new D(v, g), n.constructor = m, n.render = le), y && y.sub(n), n.props = v, n.state || (n.state = {}), n.context = g, n.__n = r, h = n.__d = !0, n.__h = [], n._sb = []), n.__s == null && (n.__s = n.state), m.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = k({}, n.__s)), k(n.__s, m.getDerivedStateFromProps(v, n.__s))), u = n.props, i = n.state, h) m.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), n.componentDidMount != null && n.__h.push(n.componentDidMount);
            else {
                if (m.getDerivedStateFromProps == null && v !== u && n.componentWillReceiveProps != null && n.componentWillReceiveProps(v, g), !n.__e && n.shouldComponentUpdate != null && n.shouldComponentUpdate(v, n.__s, g) === !1 || t.__v === _.__v) {
                    for(n.props = v, n.state = n.__s, t.__v !== _.__v && (n.__d = !1), n.__v = t, t.__e = _.__e, t.__k = _.__k, t.__k.forEach(function(U) {
                        U && (U.__ = t);
                    }), E = 0; E < n._sb.length; E++)n.__h.push(n._sb[E]);
                    n._sb = [], n.__h.length && s.push(n);
                    break e;
                }
                n.componentWillUpdate != null && n.componentWillUpdate(v, n.__s, g), n.componentDidUpdate != null && n.__h.push(function() {
                    n.componentDidUpdate(u, i, c);
                });
            }
            if (n.context = g, n.props = v, n.__v = t, n.__P = e, x = d.__r, I = 0, "prototype" in m && m.prototype.render) {
                for(n.state = n.__s, n.__d = !1, x && x(t), a = n.render(n.props, n.state, n.context), A = 0; A < n._sb.length; A++)n.__h.push(n._sb[A]);
                n._sb = [];
            } else do n.__d = !1, x && x(t), a = n.render(n.props, n.state, n.context), n.state = n.__s;
            while (n.__d && ++I < 25)
            n.state = n.__s, n.getChildContext != null && (r = k(k({}, r), n.getChildContext())), h || n.getSnapshotBeforeUpdate == null || (c = n.getSnapshotBeforeUpdate(u, i)), T = a != null && a.type === W && a.key == null ? a.props.children : a, J(e, Array.isArray(T) ? T : [
                T
            ], t, _, r, l, o, s, f, p), n.base = t.__e, t.__h = null, n.__h.length && s.push(n), b && (n.__E = n.__ = null), n.__e = !1;
        } else o == null && t.__v === _.__v ? (t.__k = _.__k, t.__e = _.__e) : t.__e = re(_.__e, t, _, r, l, o, s, p);
        (a = d.diffed) && a(t);
    } catch (U) {
        t.__v = null, (p || o != null) && (t.__e = f, t.__h = !!p, o[o.indexOf(f)] = null), d.__e(U, t, _);
    }
}
function X(e, t) {
    d.__c && d.__c(t, e), e.some(function(_) {
        try {
            e = _.__h, _.__h = [], e.some(function(r) {
                r.call(_);
            });
        } catch (r) {
            d.__e(r, _.__v);
        }
    });
}
function re(e, t, _, r, l, o, s, f) {
    var p, a, n, h = _.props, u = t.props, i = t.type, c = 0;
    if (i === "svg" && (l = !0), o != null) {
        for(; c < o.length; c++)if ((p = o[c]) && "setAttribute" in p == !!i && (i ? p.localName === i : p.nodeType === 3)) {
            e = p, o[c] = null;
            break;
        }
    }
    if (e == null) {
        if (i === null) return document.createTextNode(u);
        e = l ? document.createElementNS("http://www.w3.org/2000/svg", i) : document.createElement(i, u.is && u), o = null, f = !1;
    }
    if (i === null) h === u || f && e.data === u || (e.data = u);
    else {
        if (o = o && P.call(e.childNodes), a = (h = _.props || N).dangerouslySetInnerHTML, n = u.dangerouslySetInnerHTML, !f) {
            if (o != null) for(h = {}, c = 0; c < e.attributes.length; c++)h[e.attributes[c].name] = e.attributes[c].value;
            (n || a) && (n && (a && n.__html == a.__html || n.__html === e.innerHTML) || (e.innerHTML = n && n.__html || ""));
        }
        if (oe(e, u, h, l, f), n) t.__k = [];
        else if (c = t.props.children, J(e, Array.isArray(c) ? c : [
            c
        ], t, _, r, l && i !== "foreignObject", o, s, o ? o[0] : _.__k && w(_, 0), f), o != null) for(c = o.length; c--;)o[c] != null && G(o[c]);
        f || ("value" in u && (c = u.value) !== void 0 && (c !== e.value || i === "progress" && !c || i === "option" && c !== h.value) && M(e, "value", c, h.value, !1), "checked" in u && (c = u.checked) !== void 0 && c !== e.checked && M(e, "checked", c, h.checked, !1));
    }
    return e;
}
function Y(e, t, _) {
    try {
        typeof e == "function" ? e(t) : e.current = t;
    } catch (r) {
        d.__e(r, _);
    }
}
function Z(e, t, _) {
    var r, l;
    if (d.unmount && d.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Y(r, null, t)), (r = e.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (o) {
            d.__e(o, t);
        }
        r.base = r.__P = null, e.__c = void 0;
    }
    if (r = e.__k) for(l = 0; l < r.length; l++)r[l] && Z(r[l], t, _ || typeof e.type != "function");
    _ || e.__e == null || G(e.__e), e.__ = e.__e = e.__d = void 0;
}
function le(e, t, _) {
    return this.constructor(e, _);
}
function ie(e, t, _) {
    var r, l, o;
    d.__ && d.__(e, t), l = (r = typeof _ == "function") ? null : _ && _.__k || t.__k, o = [], F(t, e = (!r && _ || t).__k = _e(W, null, [
        e
    ]), l || N, N, t.ownerSVGElement !== void 0, !r && _ ? [
        _
    ] : l ? null : t.firstChild ? P.call(t.childNodes) : null, o, !r && _ ? _ : l ? l.__e : t.firstChild, r), X(o, e);
}
P = z.slice, d = {
    __e: function(e, t, _, r) {
        for(var l, o, s; t = t.__;)if ((l = t.__c) && !l.__) try {
            if ((o = l.constructor) && o.getDerivedStateFromError != null && (l.setState(o.getDerivedStateFromError(e)), s = l.__d), l.componentDidCatch != null && (l.componentDidCatch(e, r || {}), s = l.__d), s) return l.__E = l;
        } catch (f) {
            e = f;
        }
        throw e;
    }
}, V = 0, D.prototype.setState = function(e, t) {
    var _;
    _ = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e == "function" && (e = e(k({}, _), this.props)), e && k(_, e), e != null && this.__v && (t && this._sb.push(t), H(this));
}, D.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), H(this));
}, D.prototype.render = W, C = [], L.__r = 0, 0;
function App(props) {
    return _e("h1", null, "Hello ", props.name, "!", recoveryForm());
}
var Form;
(function(Form) {
    Form["RecoveryPhrase"] = "RecoveryPhrase";
    Form["WalletName"] = "WalletName";
    Form["Password"] = "Password";
    Form["ConfirmPassword"] = "ConfirmPassword";
})(Form || (Form = {}));
function recoveryForm() {
    return _e("div", null, _e("div", null, "Restore Your Wallet"), _e("form", {
        method: "post"
    }, _e("label", null, "24 Words Recovery Phrase ", window.localStorage.length), _e("input", {
        type: "text",
        name: Form.RecoveryPhrase
    }), _e("label", null, "Wallet Name"), _e("input", {
        type: "text",
        name: Form.WalletName
    }), _e("label", null, "Password"), _e("input", {
        type: "password",
        name: Form.Password
    }), _e("label", null, "Confirm password"), _e("input", {
        type: "password",
        name: Form.ConfirmPassword
    }), _e("input", {
        type: "submit",
        value: "Submit"
    })));
}
ie(_e(App, {
    name: "世界"
}), document.body);
console.log(window.localStorage.length);
console.log(window.localStorage.setItem(Math.random(), Math.random()));

