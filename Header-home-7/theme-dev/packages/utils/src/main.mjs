var B = Object.defineProperty;
var H = (e, t, n) => t in e ? B(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var c = (e, t, n) => (H(e, typeof t != "symbol" ? t + "" : t, n), n);
const me = {
  get: (e, t) => e.getAttribute(t) === "false" ? !1 : e.hasAttribute(t),
  set: (e, t, n) => {
    n ? e.setAttribute(t, "") : e.removeAttribute(t);
  }
};
function q(e, t) {
  throw new Error(`${e}

${t ? `Example:
${t}` : ""}`);
}
function pe(e, t, n) {
  n || q(`${e} must have a \`${t}\` attribute.`, `
<${e} ${t}="..."></${e}>
    `);
}
function ge(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function w(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function R(e) {
  return e === null || typeof e != "function" && typeof e != "object";
}
w.primitive = R;
function v(e) {
  if (w(e) === "array")
    return e.map((t) => v(t));
  if (w(e) === "object") {
    const t = {};
    for (const n in e)
      t[n] = v(e[n]);
    return t;
  } else
    return e;
}
function S(e, t) {
  for (let n = 0; n < e.length; n++)
    t(e[n], n, e);
}
const L = (e) => Object.keys(e);
function ve(e, t) {
  S(L(e), (n) => {
    customElements.get(n) || customElements.define(n, e[n], t);
  });
}
function T(e, t) {
  const n = [];
  for (let s = 0; s < e.length; s++)
    t(e[s], s, e) && n.push(e[s]);
  return n;
}
class j {
  constructor() {
    c(this, "id");
    c(this, "events");
    this.id = 0, this.events = {};
  }
  on(t, n) {
    return this.id++, this.events = {
      ...this.events,
      [t]: [
        ...this.events[t] || [],
        {
          listener: n,
          id: this.id
        }
      ]
    }, this.id;
  }
  off(t) {
    for (const n in this.events)
      this.events = {
        ...this.events,
        [n]: T(this.events[n], (s) => s.id !== t)
      };
  }
  emit(t, n) {
    this.events[t] && S(this.events[t], ({ listener: s }) => {
      s(n);
    });
  }
}
function we() {
  const e = new j();
  let t = -1, n = -1, s = -1, i = 0, r = -1, o = -1;
  function l({ to: a, from: h, duration: u = 1e3, friction: d = 1, reverseEasing: f = !1, easing: m, onStart: A, onUpdate: p, onEnd: _ }) {
    let I = null;
    i = h, A == null || A(i), e.emit("start", i), cancelAnimationFrame(o);
    function C(P) {
      I || (I = P);
      const W = P - I, y = Math.min(W / u, 1);
      i = h + (a - h) * y * d, typeof m == "function" && (f ? i = h + (a - h) * (1 - m(1 - y)) : i = h + (a - h) * m(y)), e.emit("update", i), p == null || p(i), y < 1 && (o = requestAnimationFrame(C));
    }
    return o = requestAnimationFrame(C), r = window.setTimeout(() => {
      cancelAnimationFrame(o), clearTimeout(r), i = a, p == null || p(i), _ == null || _(i), e.emit("update", i), e.emit("end", i);
    }, u), () => {
      clearTimeout(r), cancelAnimationFrame(o);
    };
  }
  return l.onStart = (a) => (t = e.on("start", a), () => e.off(t)), l.onUpdate = (a) => (n = e.on("update", a), () => e.off(n)), l.onEnd = (a) => (s = e.on("end", a), () => e.off(s)), l.off = () => {
    e.off(t), e.off(n), e.off(s), cancelAnimationFrame(o), clearTimeout(r);
  }, l.getValue = () => i, l;
}
function U(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return t >>> 0;
}
function x(e) {
  return e.replace(/\s+/g, " ").trim();
}
function ye(e = "global") {
  return (t, ...n) => {
    let s = x(t.reduce((r, o, l) => n[l] == null ? r + o : r + o + n[l], ""));
    const i = {};
    return e === "scope" && (s = x(s.replace(/(:global\(|)(?:[\.]{1})([a-zA-Z_]+[\w-_\\\[\]\+\=\{\}\?\*\!\(\)]*)(?:[\s\.\,\{\>#\:]{0})/gim, (r) => {
      if (r.includes(":global(")) {
        const a = r.replace(/:global\(\s*\.|\)$/g, "");
        return i[a] = a, `.${a}`;
      }
      const o = r.trim().replace(/^\./g, ""), l = `xo-${o}-${U(s)}`;
      return i[o] = l, `.${l}`;
    }))), {
      classes: i,
      cssText: s
    };
  };
}
function Ee(e, t) {
  var s;
  const n = t.querySelector(".xo-styles");
  if (n)
    n.textContent && !((s = n.textContent) != null && s.includes(e)) && (n.textContent += e);
  else {
    const i = document.createElement("style");
    i.classList.add("xo-styles"), i.textContent = e, t.appendChild(i);
  }
}
function be(e, t = 300) {
  let n = -1;
  return function(...i) {
    const r = this;
    clearTimeout(n), n = window.setTimeout(() => {
      e.apply(r, i);
    }, t);
  };
}
function Se(e = 0) {
  return new Promise((t) => {
    const n = window.setTimeout(() => {
      t(() => window.clearTimeout(n)), clearTimeout(n);
    }, e);
  });
}
function V(e) {
  /comp|inter/.test(document.readyState) ? e() : "addEventListener" in document ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", () => {
    document.readyState === "complete" && e();
  });
}
const M = {
  linear: (e) => e,
  ease: (e) => 0.5 * (1 - Math.cos(Math.PI * e)),
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => e * (2 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e,
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => --e * e * e + 1,
  easeInOutCubic: (e) => e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => 1 - --e * e * e * e,
  easeInOutQuart: (e) => e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => 1 + --e * e * e * e * e,
  easeInOutQuint: (e) => e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e,
  easeOutBounce: (e) => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  easeInBounce: (e) => 1 - M.easeOutBounce(1 - e),
  easeOutBack: (e) => 1 + 2.70158 * (e - 1) ** 3 + 1.70158 * (e - 1) ** 2,
  easeInBack: (e) => 2.70158 * e * e * e - 1.70158 * e * e,
  easeInOut: (e) => e < 0.5 ? M.easeInBack(e * 2) / 2 : M.easeOutBack(e * 2 - 1) / 2 + 0.5,
  easeInElastic: (e) => {
    const t = 2 * Math.PI / 3;
    return e === 0 ? 0 : e === 1 ? 1 : -(2 ** (10 * e - 10)) * Math.sin((e * 10 - 10.75) * t);
  },
  easeOutElastic: (e) => {
    const t = 2 * Math.PI / 3;
    return e === 0 ? 0 : e === 1 ? 1 : 2 ** (-10 * e) * Math.sin((e * 10 - 0.75) * t) + 1;
  },
  easeInExpo: (e) => e === 0 ? 0 : 2 ** (10 * e - 10),
  easeOutExpo: (e) => e === 1 ? 1 : 1 - 2 ** (-10 * e),
  spring: (e) => 1 - Math.cos(e * 4.5 * Math.PI) * Math.exp(-e * 6),
  decay: (e) => 1 - Math.exp(-e * 6)
};
function O(e, t) {
  if (w.primitive(e) || w.primitive(e) || e == null || t == null)
    return e === t;
  const n = Object.keys(e), s = Object.keys(t);
  if (n.length !== s.length)
    return !1;
  for (const i of n) {
    const r = e[i], o = t[i];
    if (typeof r == "object" && typeof o == "object") {
      if (!O(r, o))
        return !1;
    } else if (r !== o)
      return !1;
  }
  return !0;
}
function Ae(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n], n, e))
      return n;
  return -1;
}
function b(e, t) {
  const n = [];
  for (let s = 0; s < e.length; s++)
    n.push(t(e[s], s, e));
  return n;
}
function Q(e, t, n) {
  let s = n;
  for (let i = 0; i < e.length; i++)
    s = t(s, e[i], i, e);
  return s;
}
class z {
  constructor() {
    c(this, "frameId");
    c(this, "keepAliveFrameId");
    c(this, "lastTimestamp");
    c(this, "frames");
    c(this, "keepAliveFrames");
    c(this, "defaultTimestep");
    c(this, "handleFrameLoop", (t) => {
      if (this.lastTimestamp) {
        const n = t - this.lastTimestamp;
        S(this.keepAliveFrames, (s) => s.call(this, { delta: n, timestamp: t }));
      }
      this.lastTimestamp = t, this.keepAliveFrameId && cancelAnimationFrame(this.keepAliveFrameId), this.keepAliveFrameId = requestAnimationFrame(this.handleFrameLoop);
    });
    c(this, "handleFrame", (t) => {
      S(this.frames, (n) => n.call(this, { delta: this.defaultTimestep, timestamp: t }));
    });
    c(this, "getFrames", () => this.frames);
    c(this, "add", (t, n = !1) => (this.cancelFrame(), this.frames.includes(t) || this.frames.push(t), n && !this.keepAliveFrames.includes(t) && this.keepAliveFrames.push(t), this.start(), this));
    c(this, "start", () => {
      this.frameId = requestAnimationFrame(this.handleFrame), this.keepAliveFrameId = requestAnimationFrame(this.handleFrameLoop);
    });
    c(this, "cancelFrame", () => {
      this.frameId != null && (cancelAnimationFrame(this.frameId), this.frameId = null), this.keepAliveFrameId != null && (cancelAnimationFrame(this.keepAliveFrameId), this.keepAliveFrameId = null);
    });
    c(this, "stopFrame", (t, n) => {
      const s = t.indexOf(n);
      s !== -1 && t.splice(s, 1), t.length === 0 && (this.cancelFrame(), this.lastTimestamp = null);
    });
    c(this, "remove", (t) => (this.stopFrame(this.frames, t), this.stopFrame(this.keepAliveFrames, t), this));
    c(this, "clear", () => (this.frames = [], this.keepAliveFrames = [], this.cancelFrame(), this.lastTimestamp = null, this));
    this.frameId = null, this.keepAliveFrameId = null, this.lastTimestamp = null, this.frames = [], this.keepAliveFrames = [], this.defaultTimestep = 1 / 60 * 1e3;
  }
}
const _e = new z();
function G(e) {
  return e.replace(/([_]\w)/g, (t) => t[1].toUpperCase());
}
function J(e) {
  return e.replace(/(\-\w|\_\w)/g, (t) => t[1].toUpperCase()).replace(/^(\w)/, (t) => t[0].toUpperCase());
}
function $(e) {
  return e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`);
}
function K(e) {
  return e.replace(/^(\w)/, (t) => t[0].toUpperCase());
}
function Z(e) {
  return $(e).replace(/^_/g, "");
}
function N(e) {
  return e.replace(/^(\w)/, (t) => t[0].toLowerCase());
}
function ee(e) {
  return e.replace(/([-]\w)/g, (t) => t[1].toUpperCase());
}
function te(e) {
  return e.replace(/([-]\w)/g, (t) => t[1].toUpperCase()).replace(/^(\w)/, (t) => t[0].toUpperCase());
}
function D(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function ne(e) {
  return D(e).replace(/^-/g, "");
}
const se = {
  snakeToCamel: G,
  snakeToPascal: J,
  camelToSnake: $,
  camelToPascal: K,
  pascalToSnake: Z,
  pascalToCamel: N,
  kebabToCamel: ee,
  kebabToPascal: te,
  camelToKebab: D,
  pascalToKebab: ne
};
function Y(e) {
  const t = e.trim();
  if (/^{|\[/g.test(t))
    try {
      const s = new Function(`return ${t}`)();
      return JSON.parse(JSON.stringify(s));
    } catch {
      return /^\[/g.test(t) ? [] : {};
    }
  else
    return {};
}
function ie(e, t) {
  switch (t) {
    case "string":
      return e;
    case "number":
      return Number(e);
    case "boolean":
      return e === "true" || e === "";
    case "object":
      return Y(e);
    case "array":
      return Y(e);
    default:
      return e;
  }
}
function Ie(e, { pick: t, types: n, camelCase: s = !0, propTransformer: i } = {}) {
  let r = {};
  if (e == null)
    return r;
  const o = Array.from(e.attributes);
  t == null && (t = b(o, (l) => l.name));
  for (const l of o) {
    let a = s ? se.kebabToCamel(l.name) : l.name;
    const h = n == null ? void 0 : n[a];
    l.value != null && (t == null ? void 0 : t.includes(a)) && (typeof i == "function" && (a = i(a)), !!n && h != null ? r = { ...r, [a]: ie(l.value, h) } : r = { ...r, [a]: l.value });
  }
  return r;
}
function Me(e, { width: t, height: n } = {}) {
  const s = e.replace(/(\?|&)width=\d*/g, ""), i = s.includes("?") ? "&" : "?", r = t ? `${i}width=${t}` : "", o = n ? `${i}height=${n}` : "";
  return `${s}${r}${o}`;
}
function ke({ inputRange: e, outputRange: t, value: n, easing: s = (o) => o, reverseEasing: i = !1, extrapolate: r = "extend" }) {
  const o = b(e, (f, m) => ({ input: e[m], output: t[m] })).sort((f, m) => f.input - m.input), l = b(o, ({ input: f }) => f), a = b(o, ({ output: f }) => f);
  if (n <= l[0])
    return a[0];
  if (n >= l[l.length - 1])
    return a[a.length - 1];
  let h = 0;
  for (const f of l)
    f < n && h++;
  const u = h - 1;
  let d = (n - l[u]) / (l[h] - l[u]);
  return typeof s == "function" && (i ? d = 1 - s(1 - d) : d = s(d)), r === "clamp" && (d = Math.max(Math.min(d, 1), 0)), a[u] * (1 - d) + a[h] * d;
}
const g = {
  android: !!navigator.userAgent.match(/Android/i),
  blackBerry: !!navigator.userAgent.match(/BlackBerry/i),
  ipad: !!navigator.userAgent.match(/iPad/i),
  iOS: !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
  opera: !!navigator.userAgent.match(/Opera Mini/i),
  windows: !!navigator.userAgent.match(/Windows Phone/i),
  amazonePhone: !!navigator.userAgent.match(/(?:SD4930UR|\\bSilk(?:.+)Mobile\\b)/i),
  amazoneTablet: !!navigator.userAgent.match(/Silk/i),
  any: !!navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|Windows Phone|(?:SD4930UR|\bSilk(?:.+)Mobile\b)|Silk/i)
};
V(() => {
  const e = document.documentElement;
  g.any ? e.classList.add("is-mobile") : e.classList.add("is-desktop");
});
const Le = (e) => Object.values(e);
function re(e) {
  return e.nodeType === 9 && e.defaultView;
}
function oe(e) {
  const t = e == null ? void 0 : e.ownerDocument, n = t.documentElement, s = re(t);
  let i = { top: 0, left: 0 };
  return t ? (typeof e.getBoundingClientRect < "u" && (i = e.getBoundingClientRect()), {
    top: i.top + s.scrollY - n.clientTop,
    left: i.left + s.scrollX - n.clientLeft
  }) : {
    top: 0,
    left: 0
  };
}
class ce {
  constructor(t) {
    c(this, "dx");
    c(this, "dy");
    c(this, "vx", 0);
    c(this, "vy", 0);
    c(this, "isStart", !1);
    c(this, "isMove", !1);
    c(this, "startX", 0);
    c(this, "startY", 0);
    c(this, "options");
    c(this, "frameId", -1);
    c(this, "handleMouseDown", (t) => {
      const { onStart: n } = this.options;
      t.type === "touchstart" && t.touches.length > 1 || (g.any || t.preventDefault(), this.isStart = !0, t.type === "touchstart" ? (this.startX = t.touches[0].clientX, this.startY = t.touches[0].clientY) : (this.startX = t.clientX, this.startY = t.clientY), n == null || n(t), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("touchmove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("touchend", this.handleMouseUp));
    });
    c(this, "handleMouseMove", (t) => {
      this.frameId = requestAnimationFrame(() => {
        const { onMove: n } = this.options;
        if (t.type === "touchmove" && t.touches.length > 1 || (g.any || t.preventDefault(), !this.isStart))
          return;
        let s, i;
        t.type === "touchmove" ? (s = t.touches[0].clientX, i = t.touches[0].clientY) : (s = t.clientX, i = t.clientY);
        const r = s - this.startX, o = i - this.startY;
        this.startX = s, this.startY = i, this.dx += r, this.dy += o, this.vx = r, this.vy = o, this.isMove = !0, n == null || n({
          dx: this.dx,
          dy: this.dy,
          vx: this.vx,
          vy: this.vy
        }, t);
      });
    });
    c(this, "handleEnd", (t, n) => {
      const { onEnd: s } = this.options;
      this.isStart = !1, this.isMove && (this.isMove = !1, n && (this.dx = n.dx, this.dy = n.dy, this.vx = n.vx, this.vy = n.vy), s == null || s({
        dx: this.dx,
        dy: this.dy,
        vx: this.vx,
        vy: this.vy
      }, t), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("touchmove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchend", this.handleMouseUp), cancelAnimationFrame(this.frameId));
    });
    c(this, "handleMouseUp", (t) => {
      g.any || t.preventDefault(), this.handleEnd(t);
    });
    c(this, "setValue", ({ dx: t, dy: n }) => {
      t != null && (this.dx = t), n != null && (this.dy = n);
    });
    c(this, "destroy", () => {
      this.options.element.removeEventListener("mousedown", this.handleMouseDown), this.options.element.removeEventListener("touchstart", this.handleMouseDown), document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("touchmove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchend", this.handleMouseUp), cancelAnimationFrame(this.frameId);
    });
    this.options = t, this.dx = t.dx || 0, this.dy = t.dy || 0, t.element.addEventListener("mousedown", this.handleMouseDown), g.any && t.element.addEventListener("touchstart", this.handleMouseDown);
  }
}
function Fe(e) {
  return new ce(e);
}
class le {
  constructor(t) {
    c(this, "element");
    c(this, "onStart");
    c(this, "onPinch");
    c(this, "onEnd");
    c(this, "startScale", 1);
    c(this, "currentScale", 1);
    c(this, "startX", 0);
    c(this, "startY", 0);
    c(this, "currentX", 0);
    c(this, "currentY", 0);
    c(this, "handleStart", (t) => {
      if (t.preventDefault(), t instanceof TouchEvent && t.touches.length === 2) {
        this.startScale = this.currentScale;
        const n = t.touches[0], s = t.touches[1];
        this.startX = (n.pageX + s.pageX) / 2, this.startY = (n.pageY + s.pageY) / 2, this.onStart && this.onStart(), this.element.addEventListener("touchmove", this.handlePinch), this.element.addEventListener("touchend", this.handleEnd);
      } else
        t instanceof MouseEvent && t.button === 0 && (this.startX = t.clientX, this.startY = t.clientY, this.onStart && this.onStart(), this.element.addEventListener("mousemove", this.handlePan), this.element.addEventListener("mouseup", this.handleEnd));
    });
    c(this, "handlePinch", (t) => {
      t.preventDefault();
      const n = t.touches[0], s = t.touches[1], i = (n.pageX + s.pageX) / 2, r = (n.pageY + s.pageY) / 2, o = i - this.startX, l = r - this.startY, h = Math.sqrt(o * o + l * l) / this.startScale;
      this.currentX = i, this.currentY = r, this.currentScale = h;
      const u = {
        scale: this.currentScale,
        centerX: this.currentX,
        centerY: this.currentY
      };
      this.onPinch && this.onPinch(u, t);
    });
    c(this, "handlePan", (t) => {
      t.preventDefault();
      const n = t.clientX - this.startX, s = t.clientY - this.startY;
      this.currentX += n, this.currentY += s;
      const i = {
        scale: this.currentScale,
        centerX: this.currentX,
        centerY: this.currentY
      };
      this.onPinch && this.onPinch(i, t), this.startX = t.clientX, this.startY = t.clientY;
    });
    c(this, "handleEnd", (t) => {
      t instanceof TouchEvent ? (this.element.removeEventListener("touchmove", this.handlePinch), this.element.removeEventListener("touchend", this.handleEnd)) : t instanceof MouseEvent && (this.element.removeEventListener("mousemove", this.handlePan), this.element.removeEventListener("mouseup", this.handleEnd));
      const n = {
        scale: this.currentScale,
        centerX: this.currentX,
        centerY: this.currentY
      };
      this.onEnd && this.onEnd(n, t);
    });
    c(this, "destroy", () => {
      this.element.removeEventListener("mousedown", this.handleStart), this.element.removeEventListener("touchstart", this.handleStart), this.element.removeEventListener("touchmove", this.handlePinch), this.element.removeEventListener("touchend", this.handleEnd), this.element.removeEventListener("mousemove", this.handlePan), this.element.removeEventListener("mouseup", this.handleEnd);
    });
    this.element = t.element, this.onStart = t.onStart, this.onPinch = t.onPinch, this.onEnd = t.onEnd, this.element.addEventListener("mousedown", this.handleStart), this.element.addEventListener("touchstart", this.handleStart);
  }
}
function Ce(e) {
  return new le(e);
}
class ae {
  constructor(t, n) {
    c(this, "target");
    c(this, "options");
    c(this, "top");
    c(this, "left");
    c(this, "handlePlacement", () => {
      const { element: t, placement: n, offset: s } = this.options, { offsetWidth: i, offsetHeight: r } = this.target, { top: o, left: l } = oe(this.target), { offsetWidth: a, offsetHeight: h } = t;
      switch (n) {
        case "top-left":
          this.top = o - h - s, this.left = l;
          break;
        case "top-center":
          this.top = o - h - s, this.left = l + i / 2 - a / 2;
          break;
        case "top-right":
          this.top = o - h - s, this.left = l + i - a;
          break;
        case "bottom-left":
          this.top = o + r + s, this.left = l;
          break;
        case "bottom-center":
          this.top = o + r + s, this.left = l + i / 2 - a / 2;
          break;
        case "bottom-right":
          this.top = o + r + s, this.left = l + i - a;
          break;
        case "left-top":
          this.top = o, this.left = l - a - s;
          break;
        case "left-center":
          this.top = o + r / 2 - h / 2, this.left = l - a - s;
          break;
        case "left-bottom":
          this.top = o + r - h, this.left = l - a - s;
          break;
        case "right-top":
          this.top = o, this.left = l + i + s;
          break;
        case "right-center":
          this.top = o + r / 2 - h / 2, this.left = l + i + s;
          break;
        case "right-bottom":
          this.top = o + r - h, this.left = l + i + s;
          break;
      }
    });
    c(this, "checkBoundary", () => {
      const { element: t } = this.options, { offsetWidth: n, offsetHeight: s } = t, { clientWidth: i, clientHeight: r } = document.documentElement;
      this.top < window.scrollY ? this.top = window.scrollY : this.top + s > r + window.scrollY && (this.top = r + window.scrollY - s), this.left < 0 ? this.left = window.scrollX : this.left + n > i + window.scrollX && (this.left = i + window.scrollX - n);
    });
    c(this, "init", () => {
      const { element: t } = this.options, { width: n, height: s } = t.getBoundingClientRect();
      return this.handlePlacement(), this.checkBoundary(), {
        top: this.top,
        left: this.left,
        width: n,
        height: s
      };
    });
    this.target = t, this.options = n, this.top = 0, this.left = 0;
  }
}
function Pe(e, { element: t, placement: n = "bottom-center", offset: s = 0 }) {
  return new ae(e, {
    element: t,
    placement: n,
    offset: s
  }).init();
}
function he(e, t = !1) {
  const n = t ? {} : [], s = new URLSearchParams(e);
  for (const i of s.entries())
    if (t) {
      const [r, o] = i;
      n[r] = o;
    } else
      n.push([i[0], i[1]]);
  return n;
}
function ue(e) {
  return new URLSearchParams(e).toString().replace(/&/g, `&
`).replace(/\w.*=&?$/gm, "").replace(/\n+/g, "").replace(/&$/g, "");
}
const xe = {
  parse: he,
  stringify: ue
};
function X(e, t, n = 0.55) {
  return e * t * n / (t + n * e);
}
function Ye(e, t, n, s) {
  return n < e ? -X(e - n, t - e, s) + e : n > t ? X(n - t, t - e, s) + t : n;
}
function de() {
  let e = !1;
  const t = () => {
    if (!e) {
      e = !0;
      const i = "@xoLocalStorageCheck";
      try {
        return window.localStorage.setItem(i, i), window.localStorage.removeItem(i), !0;
      } catch {
        return !1;
      }
    }
    return !0;
  };
  return (() => t() ? window.localStorage : {
    getItem() {
      return null;
    },
    setItem() {
    },
    removeItem() {
    },
    clear() {
    },
    key() {
      return null;
    },
    length: 0
  })();
}
const k = de();
function Xe(e, t = 200) {
  let n = 0;
  return function(...s) {
    const i = this, r = Date.now();
    r - n < t || (n = r, e.apply(i, s));
  };
}
class F {
  constructor(t = {}) {
    c(this, "_store");
    c(this, "_prevStore");
    c(this, "_options");
    c(this, "_listeners");
    c(this, "_storageRegisters");
    c(this, "_useDeepEquals");
    c(this, "_handleListeners", (t) => {
      if (this._listeners[t]) {
        const n = this.get(t);
        for (let s = 0; s < this._listeners[t].length; s++) {
          const { equal: i, listener: r } = this._listeners[t][s];
          if (!i)
            r(n);
          else {
            const o = v(this._prevStore[t]);
            i(o, n) || r(n);
          }
        }
      }
    });
    c(this, "_getState", (t, n) => {
      const s = k.getItem(t);
      return s != null && s !== void 0 && this._storageRegisters[t] ? JSON.parse(s) : n;
    });
    c(this, "_setStorage", (t, n) => {
      if (!!t && n !== void 0 && this._storageRegisters[t]) {
        const s = JSON.stringify(n);
        k.setItem(t, s);
      }
    });
    c(this, "_set", (t, n) => {
      const { logger: s, loggerCollapsed: i } = this._options;
      return (this._useDeepEquals[t] ? !O(this._store[t], n) : this._store[t] !== n) && (this._prevStore[t] = v(this._store[t]), this._store[t] = n, this._setStorage(t, n), this._handleListeners(t), s) ? (o) => {
        F.logger(o, n, t, i, this._prevStore, this._store);
      } : () => {
      };
    });
    c(this, "create", (t, { initialState: n, useStorage: s, useDeepEqual: i }) => {
      const { logger: r, loggerCollapsed: o } = this._options;
      this._store[t] || (this._storageRegisters[t] = s, this._getState(t, n) || this._setStorage(t, n), this._store[t] = this._getState(t, n), s || k.removeItem(t), this._handleListeners(t), r && F.logger("@store/initialState", n, t, o)), this._useDeepEquals[t] || (this._useDeepEquals[t] = !!i);
    });
    this._store = {}, this._prevStore = {}, this._listeners = {}, this._storageRegisters = {}, this._options = {
      logger: t.logger || !1,
      loggerCollapsed: t.loggerCollapsed || !1
    }, this._useDeepEquals = {};
  }
  static logger(t, n, s, i = !1, r, o) {
    const a = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }), h = s, u = h.length < 9 ? Array(9 - h.length).fill(" ").join("") : "";
    console[i ? "groupCollapsed" : "group"](`%c XOStore: ${t}`, "color: #614eff", `@${a}`), r && console.log("%c Prev Store ", "color: #999; font-weight: 600", r), console.log(`%c ${h}  ${u}`, "color: #44b0e2; font-weight: 600", n), o && console.log("%c Next Store ", "color: #7ac143; font-weight: 600", o), console.groupEnd();
  }
  get(t) {
    return t ? this._store[t] : this._store;
  }
  set(t, n) {
    if (typeof n == "function") {
      const s = n, i = this._store[t];
      return this._set(t, s(i));
    }
    return this._set(t, n);
  }
  subscribe(t, n, s) {
    if (this._listeners[t] = this._listeners[t] || [], this._listeners[t].push({
      listener: n,
      equal: s
    }), Object.keys(this._store).includes(t)) {
      const i = this.get(t), r = v(this._prevStore[t]);
      s && s(r, i) || n(i);
    }
    return () => {
      this._listeners[t] = T(this._listeners[t], ({ listener: i }) => i !== n);
    };
  }
}
let E = null;
function Te() {
  if (E !== null)
    return E;
  if (!document.body)
    return 0;
  const e = document.createElement("div"), t = 100;
  return e.style.width = `${t}px`, e.style.height = `${t}px`, e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", document.body.appendChild(e), E = t - e.clientWidth, document.body.removeChild(e), E;
}
function Oe(e) {
  if (e == null)
    return;
  const t = L(e || {}), n = Q(t, (s, i, r) => {
    var a, h;
    const o = parseInt(i.toString()) || 0, l = parseInt(((h = (a = t[r - 1]) == null ? void 0 : a.toString) == null ? void 0 : h.call(a)) || "0");
    return window.innerWidth >= l && window.innerWidth <= o ? {
      ...s,
      ...e[i]
    } : s;
  }, {});
  if (!!L(n).length)
    return n;
}
function $e(e, t) {
  let n = window.innerWidth, s = window.innerHeight;
  return function(...r) {
    const o = this;
    e === "x" ? n !== window.innerWidth && t.apply(o, r) : e === "y" && s !== window.innerHeight && t.apply(o, r), n = window.innerWidth, s = window.innerHeight;
  };
}
const De = ({ file: e, content: t, insertPosition: n = "beforeend", id: s, parentElement: i = document.head }) => {
  if (s) {
    const r = document.getElementById(s);
    r == null || r.remove();
  }
  if (e) {
    const r = document.createElement("link");
    return s && (r.id = s), r.rel = "stylesheet", r.href = e, i.insertAdjacentElement(n, r), r;
  }
  if (t) {
    const r = document.createElement("style");
    return s && (r.id = s), r.textContent = t, i.insertAdjacentElement(n, r), r;
  }
}, We = async ({ file: e, content: t, insertPosition: n = "beforeend", id: s, parentElement: i = document.head, type: r }) => {
  if (s) {
    const l = document.getElementById(s);
    l == null || l.remove();
  }
  const o = document.createElement("script");
  return s && (o.id = s), e && (o.src = e, r && (o.type = r)), t && (o.textContent = t), !!e || !!t ? (i.insertAdjacentElement(n, o), new Promise((l) => {
    o.onload = () => {
      l(o);
    };
  })) : new Promise((l) => {
    l(o);
  });
};
function Be(e, t, n = 1) {
  const s = Math.ceil((t - e) / n);
  return Array.from({ length: s }, (i, r) => e + r * n);
}
class He {
  static toArray(t) {
    const n = [], s = t.match(/[a-df-z][^a-df-z]*/gi);
    if (!s)
      return n;
    for (let i = 0; i < s.length; i++) {
      const r = s[i], o = r.charAt(0), l = r.substring(1).split(/[\s,]+|(?=\s?[+\-])/).map((a) => +a);
      n.push({
        type: o,
        values: l
      });
    }
    return n;
  }
  static toString(t) {
    let n = "";
    for (let s = 0; s < t.length; s++) {
      const i = t[s], r = i.type, o = i.values;
      n += r;
      for (let l = 0; l < o.length; l++) {
        const a = o[l];
        n += a + (l < o.length - 1 ? " " : "");
      }
    }
    return n;
  }
}
function qe(e, t = 0) {
  const n = e.getBoundingClientRect(), s = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth, r = n.bottom >= 0 && n.right >= 0 && n.top <= s && n.left <= i;
  return t > 0 ? r || n.top - t <= s && n.bottom + t >= 0 || n.left - t <= i && n.right + t >= 0 : r;
}
export {
  V as DOMLoaded,
  j as Emitter,
  ce as PanGesture,
  ae as Popper,
  He as SVGPath,
  F as XOStore,
  Ee as appendStyle,
  me as attrBoolean,
  pe as checkAttr,
  ge as clamp,
  v as cloneDeep,
  ve as componentDefine,
  we as createAnimate,
  ye as createCssInJs,
  be as debounce,
  Se as delay,
  S as each,
  M as easings,
  O as equal,
  T as filter,
  Ae as findIndex,
  _e as frameManager,
  Ie as getAttrs,
  Oe as getBreakpointsOptions,
  Te as getScrollbarWidth,
  Me as imageUrl,
  ke as interpolate,
  g as isMobile,
  qe as isViewport,
  We as loadScript,
  De as loadStyle,
  b as map,
  se as namingConvention,
  L as objectKeys,
  Y as objectParse,
  Le as objectValues,
  oe as offset,
  Fe as panGesture,
  Ce as pinchGesture,
  Pe as popper,
  xe as queryString,
  Be as range,
  Q as reduce,
  $e as resizeAxis,
  Ye as rubberBandClamp,
  k as storage,
  Xe as throttle,
  q as throwError,
  w as typeOf
};
