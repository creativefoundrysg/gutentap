import { createElementBlock as te, openBlock as $, normalizeClass as Yt, renderSlot as Oa, createCommentVNode as lt, defineComponent as li, h as Sn, Teleport as op, ref as Rl, getCurrentInstance as sp, watchEffect as lp, nextTick as ap, unref as cp, onBeforeUnmount as Dl, onMounted as Ku, reactive as Ju, markRaw as Gu, customRef as up, Fragment as Ot, renderList as Nt, withModifiers as Te, createElementVNode as ye, createTextVNode as dp, toDisplayString as fp, resolveComponent as Mr, createBlock as st, createVNode as Xe, withCtx as De, createSlots as hp, withKeys as pp } from "vue";
const ai = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, mp = {
  props: {
    clickHandler: {
      type: String,
      required: !1
    },
    content: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    activeClass: {
      type: String,
      required: !1,
      default: "!bg-slate-600 hover:!bg-slate-700 !text-white"
    },
    active: {
      type: Boolean
    }
  }
}, gp = ["aria-label", "data-tooltip", "title", "innerHTML"];
function yp(n, e, t, r, i, o) {
  return $(), te("button", {
    type: "button",
    class: Yt(["w-full flex p-1 flex-row items-center text-slate-600 rounded gap-2 hover:bg-slate-100", t.active ? t.activeClass : ""]),
    "aria-label": t.label,
    "data-tooltip": t.label,
    title: t.label,
    innerHTML: t.content
  }, null, 10, gp);
}
const bp = /* @__PURE__ */ ai(mp, [["render", yp]]), wp = {
  computed: {
    hasDropdown() {
      return !!this.$slots.dropdown;
    }
  },
  props: {
    align: {
      type: String,
      default: "left"
    },
    iconName: {
      type: String,
      required: !1
    },
    iconSvg: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    activeClass: {
      type: String,
      required: !1,
      default: "!bg-slate-600 hover:!bg-slate-700 !text-white rounded"
    },
    active: {
      type: Boolean
    }
  }
}, vp = { class: "group text-sm relative" };
function kp(n, e, t, r, i, o) {
  return $(), te("div", vp, [
    Oa(n.$slots, "default"),
    o.hasDropdown ? ($(), te("div", {
      key: 0,
      class: Yt(["z-10 bg-white shadow py-2 group-focus-within:block hidden overflow-hidden whitespace-nowrap absolute bottom-full sm:bottom-auto sm:top-full mt-4 rounded border border-slate-400", t.align == "left" ? "left-0" : "right-0"])
    }, [
      Oa(n.$slots, "dropdown")
    ], 2)) : lt("", !0)
  ]);
}
const xp = /* @__PURE__ */ ai(wp, [["render", kp]]), Cp = {
  props: {
    content: {
      type: String,
      required: !1
    },
    clickHandler: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    activeClass: {
      type: String,
      required: !1,
      default: "!bg-slate-600 hover:!bg-slate-700 !text-white"
    },
    active: {
      type: Boolean
    }
  }
}, Sp = ["aria-label", "title", "innerHTML"];
function Tp(n, e, t, r, i, o) {
  return $(), te("button", {
    class: Yt(["w-full flex py-1 pl-2 pr-6 flex-row items-center text-slate-600 gap-2 hover:bg-slate-100", t.active ? t.activeClass : ""]),
    "aria-label": t.label,
    title: t.label,
    innerHTML: t.content
  }, null, 10, Sp);
}
const Mp = /* @__PURE__ */ ai(Cp, [["render", Tp]]);
function ke(n) {
  this.content = n;
}
ke.prototype = {
  constructor: ke,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), o = r.content.slice();
    return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new ke(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new ke(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new ke([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new ke(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(n);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new ke(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = ke.from(n), n.size ? new ke(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = ke.from(n), n.size ? new ke(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = ke.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
ke.from = function(n) {
  if (n instanceof ke) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new ke(e);
};
function Yu(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), o = e.child(r);
    if (i == o) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return t;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        t++;
      return t;
    }
    if (i.content.size || o.content.size) {
      let s = Yu(i.content, o.content, t + 1);
      if (s != null)
        return s;
    }
    t += i.nodeSize;
  }
}
function Xu(n, e, t, r) {
  for (let i = n.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: t, b: r };
    let s = n.child(--i), l = e.child(--o), a = s.nodeSize;
    if (s == l) {
      t -= a, r -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: t, b: r };
    if (s.isText && s.text != l.text) {
      let c = 0, u = Math.min(s.text.length, l.text.length);
      for (; c < u && s.text[s.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (s.content.size || l.content.size) {
      let c = Xu(s.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class S {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, o) {
    for (let s = 0, l = 0; l < t; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && r(a, i + l, o || null, s) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (s ? s = !1 : o += r), o += c;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new S(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let o = 0, s = 0; s < t; o++) {
        let l = this.content[o], a = s + l.nodeSize;
        a > e && ((s < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, t - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, t - s - 1))), r.push(l), i += l.nodeSize), s = a;
      }
    return new S(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? S.empty : e == 0 && t == this.content.length ? this : new S(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new S(i, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new S([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new S(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Yu(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Xu(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return Ai(0, e);
    if (e == this.size)
      return Ai(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let o = this.child(r), s = i + o.nodeSize;
      if (s >= e)
        return s == e || t > 0 ? Ai(r + 1, s) : Ai(r, i);
      i = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return S.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new S(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return S.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
    }
    return new S(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return S.empty;
    if (e instanceof S)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new S([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
S.empty = new S([], 0);
const as = { index: 0, offset: 0 };
function Ai(n, e) {
  return as.index = n, as.offset = e, as;
}
function no(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!no(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !no(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let X = class $s {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        t || (t = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(o);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && no(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return $s.none;
    if (e instanceof $s)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
X.none = [];
class ro extends Error {
}
class E {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = Zu(this.content, e + this.openStart, t);
    return r && new E(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new E(Qu(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return E.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new E(S.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new E(e, r, i);
  }
}
E.empty = new E(S.empty, 0, 0);
function Qu(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), o = n.maybeChild(r), { index: s, offset: l } = n.findIndex(t);
  if (i == e || o.isText) {
    if (l != t && !n.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, o.copy(Qu(o.content, e - i - 1, t - i - 1)));
}
function Zu(n, e, t, r) {
  let { index: i, offset: o } = n.findIndex(e), s = n.maybeChild(i);
  if (o == e || s.isText)
    return n.cut(0, e).append(t).append(n.cut(e));
  let l = Zu(s.content, e - o - 1, t);
  return l && n.replaceChild(i, s.copy(l));
}
function Ap(n, e, t) {
  if (t.openStart > n.depth)
    throw new ro("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new ro("Inconsistent open depths");
  return ed(n, e, t, 0);
}
function ed(n, e, t, r) {
  let i = n.index(r), o = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let s = ed(n, e, t, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let s = n.parent, l = s.content;
      return Mn(s, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = Ep(t, n);
      return Mn(o, nd(n, s, l, e, r));
    }
  else return Mn(o, io(n, e, r));
}
function td(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new ro("Cannot join " + e.type.name + " onto " + n.type.name);
}
function js(n, e, t) {
  let r = n.node(t);
  return td(r, e.node(t)), r;
}
function Tn(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function Lr(n, e, t, r) {
  let i = (e || n).node(t), o = 0, s = e ? e.index(t) : i.childCount;
  n && (o = n.index(t), n.depth > t ? o++ : n.textOffset && (Tn(n.nodeAfter, r), o++));
  for (let l = o; l < s; l++)
    Tn(i.child(l), r);
  e && e.depth == t && e.textOffset && Tn(e.nodeBefore, r);
}
function Mn(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function nd(n, e, t, r, i) {
  let o = n.depth > i && js(n, e, i + 1), s = r.depth > i && js(t, r, i + 1), l = [];
  return Lr(null, n, i, l), o && s && e.index(i) == t.index(i) ? (td(o, s), Tn(Mn(o, nd(n, e, t, r, i + 1)), l)) : (o && Tn(Mn(o, io(n, e, i + 1)), l), Lr(e, t, i, l), s && Tn(Mn(s, io(t, r, i + 1)), l)), Lr(r, null, i, l), new S(l);
}
function io(n, e, t) {
  let r = [];
  if (Lr(null, n, t, r), n.depth > t) {
    let i = js(n, e, t + 1);
    Tn(Mn(i, io(n, e, t + 1)), r);
  }
  return Lr(e, null, t, r), new S(r);
}
function Ep(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(S.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class _r {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return X.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new oo(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, o = t;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
      if (r.push(s, l, i + a), !c || (s = s.child(l), s.isText))
        break;
      o = c - 1, i += a + 1;
    }
    return new _r(t, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = Na.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == t)
          return s;
      }
    else
      Na.set(e, r = new Op());
    let i = r.elts[r.i] = _r.resolve(e, t);
    return r.i = (r.i + 1) % Np, i;
  }
}
class Op {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Np = 12, Na = /* @__PURE__ */ new WeakMap();
class oo {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Rp = /* @__PURE__ */ Object.create(null);
let en = class _s {
  /**
  @internal
  */
  constructor(e, t, r, i = X.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || S.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && no(this.attrs, t || e.defaultAttrs || Rp) && X.sameSet(this.marks, r || X.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new _s(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new _s(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return E.empty;
    let i = this.resolve(e), o = this.resolve(t), s = r ? 0 : i.sharedDepth(t), l = i.start(s), c = i.node(s).content.cut(i.pos - l, o.pos - l);
    return new E(c, i.depth - s, o.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return Ap(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return _r.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return _r.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), rd(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = S.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), l = s && s.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < o; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, t);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = X.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!X.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = S.fromJSON(e, t.content), o = e.nodeType(t.type).create(t.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
};
en.prototype.text = void 0;
class so extends en {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : rd(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new so(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new so(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function rd(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class Dn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new Dp(e, t);
    if (r.next == null)
      return Dn.empty;
    let i = id(r);
    r.next && r.err("Unexpected trailing text");
    let o = Vp(Hp(i));
    return Fp(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let o = t; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function o(s, l) {
      let a = s.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return S.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: u, next: d } = s.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(d) == -1) {
          i.push(d);
          let f = o(d, l.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let l = i; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: l, next: a } = o.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
Dn.empty = new Dn(!0);
class Dp {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function id(n) {
  let e = [];
  do
    e.push(Lp(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Lp(n) {
  let e = [];
  do
    e.push(Ip(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Ip(n) {
  let e = zp(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = Pp(n, e);
    else
      break;
  return e;
}
function Ra(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function Pp(n, e) {
  let t = Ra(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Ra(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function Bp(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let o in t) {
    let s = t[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function zp(n) {
  if (n.eat("(")) {
    let e = id(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = Bp(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Hp(n) {
  let e = [[]];
  return i(o(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function i(s, l) {
    s.forEach((a) => a.to = l);
  }
  function o(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (s.type == "star") {
      let a = t();
      return r(l, a), i(o(s.expr, a), a), [r(a)];
    } else if (s.type == "plus") {
      let a = t();
      return i(o(s.expr, l), a), i(o(s.expr, a), a), [r(a)];
    } else {
      if (s.type == "opt")
        return [r(l)].concat(o(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let u = t();
          i(o(s.expr, a), u), a = u;
        }
        if (s.max == -1)
          i(o(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let u = t();
            r(a, u), i(o(s.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (s.type == "name")
          return [r(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function od(n, e) {
  return e - n;
}
function Da(n, e) {
  let t = [];
  return r(e), t.sort(od);
  function r(i) {
    let o = n[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    t.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: l, to: a } = o[s];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function Vp(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Da(n, 0));
  function t(r) {
    let i = [];
    r.forEach((s) => {
      n[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        Da(n, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new Dn(r.indexOf(n.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let l = i[s][1].sort(od);
      o.next.push({ type: i[s][0], next: e[l.join(",")] || t(l) });
    }
    return o;
  }
}
function Fp(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], o = !i.validEnd, s = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function sd(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function ld(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let o = n[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function ad(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let o = n[i];
    o.validate && o.validate(e[i]);
  }
}
function cd(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new jp(n, r, e[r]);
  return t;
}
let La = class ud {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = cd(e, r.attrs), this.defaultAttrs = sd(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Dn.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : ld(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new en(this, this.computeAttrs(e), S.from(t), X.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = S.from(t), this.checkContent(t), new en(this, this.computeAttrs(e), t, X.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = S.from(t), t.size) {
      let s = this.contentMatch.fillBefore(t);
      if (!s)
        return null;
      t = s.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(S.empty, !0);
    return o ? new en(this, e, t.append(o), X.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    ad(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : X.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new ud(o, t, s));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function $p(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${o}`);
  };
}
class jp {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? $p(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Po {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = cd(e, i.attrs), this.excluded = null;
    let o = sd(this.attrs);
    this.instance = o ? new X(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new X(this, ld(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new Po(o, i++, t, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    ad(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class dd {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = ke.from(e.nodes), t.marks = ke.from(e.marks || {}), this.nodes = La.compile(this.spec.nodes, this), this.marks = Po.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = Dn.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? Ia(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : Ia(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof La) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new so(r, r.defaultAttrs, e, X.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return en.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return X.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function Ia(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = n.marks[i], s = o;
    if (o)
      t.push(o);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function _p(n) {
  return n.tag != null;
}
function Wp(n) {
  return n.style != null;
}
class tn {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (_p(i))
        this.tags.push(i);
      else if (Wp(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new Ba(this, t, !1);
    return r.addAll(e, X.none, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new Ba(this, t, !0);
    return r.addAll(e, X.none, t.from, t.to), E.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (Kp(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (s.getAttrs) {
          let a = s.getAttrs(t);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < t.length; s++) {
        let l = t[s];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      t.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = za(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = za(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new tn(e, tn.schemaRules(e)));
  }
}
const fd = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Up = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, hd = { ol: !0, ul: !0 }, Wr = 1, Ws = 2, _i = 4;
function Pa(n, e, t) {
  return e != null ? (e ? Wr : 0) | (e === "full" ? Ws : 0) : n && n.whitespace == "pre" ? Wr | Ws : t & -5;
}
class Ei {
  constructor(e, t, r, i, o, s) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = X.none, this.match = o || (s & _i ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(S.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Wr)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let t = S.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(S.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !fd.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Ba {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, o, s = Pa(null, t.preserveWhitespace, 0) | (r ? _i : 0);
    i ? o = new Ei(i.type, i.attrs, X.none, !0, t.topMatch || i.type.contentMatch, s) : r ? o = new Ei(null, null, X.none, !0, null, s) : o = new Ei(e.schema.topNodeType, null, X.none, !0, null, s), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, i = this.top, o = i.options & Ws ? "full" : this.localPreserveWS || (i.options & Wr) > 0;
    if (o === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (o)
        o !== "full" ? r = r.replace(/\r?\n|\r/g, " ") : r = r.replace(/\r\n?/g, `
`);
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let s = i.content[i.content.length - 1], l = e.previousSibling;
        (!s || l && l.nodeName == "BR" || s.isText && /[ \t\r\n\u000c]$/.test(s.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), t, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let i = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = e.nodeName.toLowerCase(), l;
    hd.hasOwnProperty(s) && this.parser.normalizeLists && qp(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : Up.hasOwnProperty(s))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (fd.hasOwnProperty(s))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), c = !0, o.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let d = a && a.skip ? t : this.readStyles(e, t);
      d && this.addAll(e, d), c && this.sync(o), this.needsBlock = u;
    } else {
      let c = this.readStyles(e, t);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
        if (s)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(o, s, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, i) {
    let o, s;
    if (t.node)
      if (s = this.parser.schema.nodes[t.node], s.isLeaf)
        this.insertNode(s.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(s, t.attrs || null, r, t.preserveWhitespace);
        a && (o = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    o && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, i) {
    let o = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; s != l; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, t);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, r) {
    let i, o;
    for (let s = this.open, l = 0; s >= 0; s--) {
      let a = this.nodes[s], c = a.findWrapping(e);
      if (c && (!i || i.length > c.length + l) && (i = c, o = a, !c.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!i)
      return null;
    this.sync(o);
    for (let s = 0; s < i.length; s++)
      t = this.enterInner(i[s], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (t = this.enterInner(o, null, t));
    }
    let i = this.findPlace(e, t, r);
    if (i) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let s = X.none;
      for (let l of i.concat(e.marks))
        (o.type ? o.type.allowsMarkType(l.type) : Ha(l.type, e.type)) && (s = l.addToSet(s));
      return o.content.push(e.mark(s)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, i) {
    let o = this.findPlace(e.create(t), r, !1);
    return o && (o = this.enterInner(e, t, r, !0, i)), o;
  }
  // Open a node of the given type
  enterInner(e, t, r, i = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let l = Pa(e, o, s.options);
    s.options & _i && s.content.length == 0 && (l |= _i);
    let a = X.none;
    return r = r.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : Ha(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Ei(e, t, a, i, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= Wr);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
          if (!u || u.name != c && !u.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return s(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function qp(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && hd.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function Kp(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function za(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function Ha(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let o = [], s = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || o.indexOf(u) < 0 && s(u))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
class Fn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = cs(t).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          i = o.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], u = this.serializeMark(c, s.isInline, t);
          u && (o.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = Wi(cs(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, t);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && Wi(cs(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return Wi(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Fn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Va(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Va(e.marks);
  }
}
function Va(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function cs(n) {
  return n.document || window.document;
}
const Fa = /* @__PURE__ */ new WeakMap();
function Jp(n) {
  let e = Fa.get(n);
  return e === void 0 && Fa.set(n, e = Gp(n)), e;
}
function Gp(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function Wi(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = Jp(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (t = i.slice(0, s), i = i.slice(s + 1));
  let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let d in c)
      if (c[d] != null) {
        let f = d.indexOf(" ");
        f > 0 ? a.setAttributeNS(d.slice(0, f), d.slice(f + 1), c[d]) : a.setAttribute(d, c[d]);
      }
  }
  for (let d = u; d < e.length; d++) {
    let f = e[d];
    if (f === 0) {
      if (d < e.length - 1 || d > u)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: h, contentDOM: p } = Wi(n, f, t, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const pd = 65535, md = Math.pow(2, 16);
function Yp(n, e) {
  return n + e * md;
}
function $a(n) {
  return n & pd;
}
function Xp(n) {
  return (n - (n & pd)) / md;
}
const gd = 1, yd = 2, Ui = 4, bd = 8;
class Us {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & bd) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (gd | Ui)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (yd | Ui)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Ui) > 0;
  }
}
class We {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && We.empty)
      return We.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = $a(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + Xp(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], u = this.ranges[l + s], d = a + c;
      if (e <= d) {
        let f = c ? e == a ? -1 : e == d ? 1 : t : t, h = a + i + (f < 0 ? 0 : u);
        if (r)
          return h;
        let p = e == (t < 0 ? a : d) ? null : Yp(l / 3, e - a), g = e == a ? yd : e == d ? gd : Ui;
        return (t < 0 ? e != a : e != d) && (g |= bd), new Us(h, g, p);
      }
      i += u - c;
    }
    return r ? e + i : new Us(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = $a(t), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), o += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new We(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? We.empty : new We(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
We.empty = new We([]);
class Ur {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, r = 0, i = e ? e.length : 0) {
    this.mirror = t, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || t);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new Ur(this._maps, this.mirror, e, t);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this._maps.length; t < e._maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Ur();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this._maps[o], l = s.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Us(e, i, null);
  }
}
const us = /* @__PURE__ */ Object.create(null);
class Ne {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return We.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = us[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in us)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return us[e] = t, t.prototype.jsonID = e, t;
  }
}
class pe {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new pe(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new pe(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return pe.ok(e.replace(t, r, i));
    } catch (o) {
      if (o instanceof ro)
        return pe.fail(o.message);
      throw o;
    }
  }
}
function Ll(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let o = n.child(i);
    o.content.size && (o = o.copy(Ll(o.content, e, o))), o.isInline && (o = e(o, t, i)), r.push(o);
  }
  return S.fromArray(r);
}
class Xt extends Ne {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new E(Ll(t.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), t.openStart, t.openEnd);
    return pe.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new bt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Xt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Xt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Xt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Xt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Ne.jsonID("addMark", Xt);
class bt extends Ne {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new E(Ll(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return pe.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Xt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new bt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof bt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new bt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new bt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Ne.jsonID("removeMark", bt);
class Qt extends Ne {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return pe.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return pe.fromReplace(e, this.pos, this.pos + 1, new E(S.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new Qt(this.pos, t.marks[i]);
        return new Qt(this.pos, this.mark);
      }
    }
    return new Ln(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Qt(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Qt(t.pos, e.markFromJSON(t.mark));
  }
}
Ne.jsonID("addNodeMark", Qt);
class Ln extends Ne {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return pe.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return pe.fromReplace(e, this.pos, this.pos + 1, new E(S.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Qt(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Ln(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Ln(t.pos, e.markFromJSON(t.mark));
  }
}
Ne.jsonID("removeNodeMark", Ln);
class he extends Ne {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && qs(e, this.from, this.to) ? pe.fail("Structure replace would overwrite content") : pe.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new We([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new he(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new he(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof he) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? E.empty : new E(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new he(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? E.empty : new E(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new he(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new he(t.from, t.to, E.fromJSON(e, t.slice), !!t.structure);
  }
}
Ne.jsonID("replace", he);
class be extends Ne {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, o, s, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (qs(e, this.from, this.gapFrom) || qs(e, this.gapTo, this.to)))
      return pe.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return pe.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? pe.fromReplace(e, this.from, this.to, r) : pe.fail("Content does not fit in gap");
  }
  getMap() {
    return new We([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new be(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new be(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new be(t.from, t.to, t.gapFrom, t.gapTo, E.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
Ne.jsonID("replaceAround", be);
function qs(n, e, t) {
  let r = n.resolve(e), i = t - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function Qp(n, e, t, r) {
  let i = [], o = [], s, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(d);
      for (let g = 0; g < d.length; g++)
        d[g].isInSet(p) || (s && s.to == f && s.mark.eq(d[g]) ? s.to = h : i.push(s = new bt(f, h, d[g])));
      l && l.to == f ? l.to = h : o.push(l = new Xt(f, h, r));
    }
  }), i.forEach((a) => n.step(a)), o.forEach((a) => n.step(a));
}
function Zp(n, e, t, r) {
  let i = [], o = 0;
  n.doc.nodesBetween(e, t, (s, l) => {
    if (!s.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof Po) {
      let c = s.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else r ? r.isInSet(s.marks) && (a = [r]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let d = a[u], f;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == o - 1 && d.eq(i[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = o) : i.push({ style: d, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), i.forEach((s) => n.step(new bt(s.from, s.to, s.style)));
}
function Il(n, e, t, r = t.contentMatch, i = !0) {
  let o = n.doc.nodeAt(e), s = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), u = l + c.nodeSize, d = r.matchType(c.type);
    if (!d)
      s.push(new he(l, u, E.empty));
    else {
      r = d;
      for (let f = 0; f < c.marks.length; f++)
        t.allowsMarkType(c.marks[f].type) || n.step(new bt(l, u, c.marks[f]));
      if (i && c.isText && t.whitespace != "pre") {
        let f, h = /\r?\n|\r/g, p;
        for (; f = h.exec(c.text); )
          p || (p = new E(S.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), s.push(new he(l + f.index, l + f.index + f[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(S.empty, !0);
    n.replace(l, l, new E(a, 0, 0));
  }
  for (let a = s.length - 1; a >= 0; a--)
    n.step(s[a]);
}
function em(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function yr(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), o = n.$from.index(r), s = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(o, s, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !em(i, o, s))
      break;
  }
  return null;
}
function tm(n, e, t) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), l = i.after(o + 1), a = s, c = l, u = S.empty, d = 0;
  for (let p = o, g = !1; p > t; p--)
    g || r.index(p) > 0 ? (g = !0, u = S.from(r.node(p).copy(u)), d++) : a--;
  let f = S.empty, h = 0;
  for (let p = o, g = !1; p > t; p--)
    g || i.after(p + 1) < i.end(p) ? (g = !0, f = S.from(i.node(p).copy(f)), h++) : c++;
  n.step(new be(a, c, s, l, new E(u.append(f), d, h), u.size - d, !0));
}
function Pl(n, e, t = null, r = n) {
  let i = nm(n, e), o = i && rm(r, e);
  return o ? i.map(ja).concat({ type: e, attrs: t }).concat(o.map(ja)) : null;
}
function ja(n) {
  return { type: n, attrs: null };
}
function nm(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return t.canReplaceWith(r, i, s) ? o : null;
}
function rm(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function im(n, e, t) {
  let r = S.empty;
  for (let s = t.length - 1; s >= 0; s--) {
    if (r.size) {
      let l = t[s].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = S.from(t[s].type.create(t[s].attrs, r));
  }
  let i = e.start, o = e.end;
  n.step(new be(i, o, i, o, new E(r, 0, 0), t.length, !0));
}
function om(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = n.steps.length;
  n.doc.nodesBetween(e, t, (s, l) => {
    let a = typeof i == "function" ? i(s) : i;
    if (s.isTextblock && !s.hasMarkup(r, a) && sm(n.doc, n.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && vd(n, s, l, o), Il(n, n.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let u = n.mapping.slice(o), d = u.map(l, 1), f = u.map(l + s.nodeSize, 1);
      return n.step(new be(d, f, d + 1, f - 1, new E(S.from(r.create(a, null, s.marks)), 0, 0), 1, !0)), c === !0 && wd(n, s, l, o), !1;
    }
  });
}
function wd(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, l = /\r?\n|\r/g;
      for (; s = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + o + s.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function vd(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = n.mapping.slice(r).map(t + 1 + o);
      n.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function sm(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function lm(n, e, t, r, i) {
  let o = n.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  t || (t = o.type);
  let s = t.create(r, null, i || o.marks);
  if (o.isLeaf)
    return n.replaceWith(e, e + o.nodeSize, s);
  if (!t.validContent(o.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new be(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new E(S.from(s), 0, 0), 1, !0));
}
function zt(n, e, t = 1, r) {
  let i = n.resolve(e), o = i.depth - t, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > o; c--, u--) {
    let d = i.node(c), f = i.index(c);
    if (d.type.spec.isolating)
      return !1;
    let h = d.content.cutByIndex(f, d.childCount), p = r && r[u + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let g = r && r[u] || d;
    if (!d.canReplace(f + 1, d.childCount) || !g.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(o), a = r && r[0];
  return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
function am(n, e, t = 1, r) {
  let i = n.doc.resolve(e), o = S.empty, s = S.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    o = S.from(i.node(l).copy(o));
    let u = r && r[c];
    s = S.from(u ? u.type.create(u.attrs, s) : i.node(l).copy(s));
  }
  n.step(new he(e, e, new E(o.append(s), t, t), !0));
}
function an(n, e) {
  let t = n.resolve(e), r = t.index();
  return kd(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function cm(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == r ? n.type.schema.nodes.text : o.type;
    if (t = t.matchType(s), !t || !n.type.allowsMarks(o.marks))
      return !1;
  }
  return t.validEnd;
}
function kd(n, e) {
  return !!(n && e && !n.isLeaf && cm(n, e));
}
function Bo(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, l = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : t > 0 ? (o = r.node(i + 1), l++, s = r.node(i).maybeChild(l)) : (o = r.node(i).maybeChild(l - 1), s = r.node(i + 1)), o && !o.isTextblock && kd(o, s) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function um(n, e, t) {
  let r = null, { linebreakReplacement: i } = n.doc.type.schema, o = n.doc.resolve(e - t), s = o.node().type;
  if (i && s.inlineContent) {
    let u = s.whitespace == "pre", d = !!s.contentMatch.matchType(i);
    u && !d ? r = !1 : !u && d && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let u = n.doc.resolve(e + t);
    vd(n, u.node(), u.before(), l);
  }
  s.inlineContent && Il(n, e + t - 1, s, o.node().contentMatchAt(o.index()), r == null);
  let a = n.mapping.slice(l), c = a.map(e - t);
  if (n.step(new he(c, a.map(e + t, -1), E.empty, !0)), r === !0) {
    let u = n.doc.resolve(c);
    wd(n, u.node(), u.before(), n.steps.length);
  }
  return n;
}
function dm(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function xd(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let o = 0; o < t.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (t.openStart == 0 && t.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), u = !1;
      if (o == 1)
        u = c.canReplace(a, a, i);
      else {
        let d = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        u = d && c.canReplaceWith(a, a, d[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function zo(n, e, t = e, r = E.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), o = n.resolve(t);
  return Cd(i, o, r) ? new he(e, t, r) : new fm(i, o, r).fit();
}
function Cd(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class fm {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = S.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = S.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, l = i.depth;
    for (; s && l && o.childCount == 1; )
      o = o.firstChild.content, s--, l--;
    let a = new E(o, s, l);
    return e > -1 ? new be(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new he(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = t.firstChild;
      if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = o.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = ds(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, d = null;
          if (t == 1 && (s ? c.matchType(s.type) || (d = c.fillBefore(S.from(s), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: d };
          if (t == 2 && s && (u = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: u };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = ds(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new E(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = ds(e, t);
    if (i.childCount <= 1 && t > 0) {
      let o = e.size - t <= t + i.size;
      this.unplaced = new E(Nr(e, t - 1, 1), t - 1, o ? t - 1 : r);
    } else
      this.unplaced = new E(Nr(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: o }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (o)
      for (let g = 0; g < o.length; g++)
        this.openFrontierNode(o[g]);
    let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, u = [], { match: d, type: f } = this.frontier[t];
    if (i) {
      for (let g = 0; g < i.childCount; g++)
        u.push(i.child(g));
      d = d.matchFragment(i);
    }
    let h = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let g = l.child(c), m = d.matchType(g.type);
      if (!m)
        break;
      c++, (c > 1 || a == 0 || g.content.size) && (d = m, u.push(Sd(g.mark(f.allowedMarks(g.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = Rr(this.placed, t, S.from(u)), this.frontier[t].match = d, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, m = l; g < h; g++) {
      let y = m.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), m = y.content;
    }
    this.unplaced = p ? e == 0 ? E.empty : new E(Nr(s.content, e - 1, 1), e - 1, h < 0 ? s.openEnd : e - 1) : new E(Nr(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !fs(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = fs(e, t, i, r, o);
      if (s) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = fs(e, l, c, a, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: t, fit: s, move: o ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Rr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Rr(this.placed, this.depth, S.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(S.empty, !0);
    t.childCount && (this.placed = Rr(this.placed, this.frontier.length, t));
  }
}
function Nr(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Nr(n.firstChild.content, e - 1, t)));
}
function Rr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Rr(n.lastChild.content, e - 1, t)));
}
function ds(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Sd(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Sd(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(S.empty, !0)))), n.copy(r);
}
function fs(n, e, t, r, i) {
  let o = n.node(e), s = i ? n.indexAfter(e) : n.index(e);
  if (s == o.childCount && !t.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, s);
  return l && !hm(t, o.content, s) ? l : null;
}
function hm(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function pm(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function mm(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), o = n.doc.resolve(t);
  if (Cd(i, o, r))
    return n.step(new he(e, t, r));
  let s = Md(i, n.doc.resolve(t));
  s[s.length - 1] == 0 && s.pop();
  let l = -(i.depth + 1);
  s.unshift(l);
  for (let f = i.depth, h = i.pos - 1; f > 0; f--, h--) {
    let p = i.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    s.indexOf(f) > -1 ? l = f : i.before(f) == h && s.splice(1, 0, -f);
  }
  let a = s.indexOf(l), c = [], u = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    f = p.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let h = c[f], p = pm(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      u = f;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let g = 0; g < s.length; g++) {
        let m = s[(g + a) % s.length], y = !0;
        m < 0 && (y = !1, m = -m);
        let w = i.node(m - 1), C = i.index(m - 1);
        if (w.canReplaceWith(C, C, p.type, p.marks))
          return n.replace(i.before(m), y ? o.after(m) : t, new E(Td(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = n.steps.length;
  for (let f = s.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > d)); f--) {
    let h = s[f];
    h < 0 || (e = i.before(h), t = o.after(h));
  }
}
function Td(n, e, t, r, i) {
  if (e < t) {
    let o = n.firstChild;
    n = n.replaceChild(0, o.copy(Td(o.content, e + 1, t, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(n).append(n);
    n = s.append(o.matchFragment(s).fillBefore(S.empty, !0));
  }
  return n;
}
function gm(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = dm(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new E(S.from(r), 0, 0));
}
function ym(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), o = Md(r, i);
  for (let s = 0; s < o.length; s++) {
    let l = o[s], a = s == o.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && t > r.end(s) && i.end(s) - t != i.depth - s && r.start(s - 1) == i.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), i.index(s - 1)))
      return n.delete(r.before(s), t);
  n.delete(e, t);
}
function Md(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = n.start(i);
    if (o < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && t.push(i);
  }
  return t;
}
class sr extends Ne {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return pe.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      r[o] = t.attrs[o];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return pe.fromReplace(e, this.pos, this.pos + 1, new E(S.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return We.empty;
  }
  invert(e) {
    return new sr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new sr(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new sr(t.pos, t.attr, t.value);
  }
}
Ne.jsonID("attr", sr);
class qr extends Ne {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return pe.ok(r);
  }
  getMap() {
    return We.empty;
  }
  invert(e) {
    return new qr(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new qr(t.attr, t.value);
  }
}
Ne.jsonID("docAttr", qr);
let ar = class extends Error {
};
ar = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
ar.prototype = Object.create(Error.prototype);
ar.prototype.constructor = ar;
ar.prototype.name = "TransformError";
class Bl {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Ur();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new ar(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = E.empty) {
    let i = zo(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new E(S.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, E.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return mm(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return gm(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return ym(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return tm(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return um(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return im(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return om(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return lm(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new sr(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new qr(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new Qt(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (t instanceof X)
      t.isInSet(r.marks) && this.step(new Ln(e, t));
    else {
      let i = r.marks, o, s = [];
      for (; o = t.isInSet(i); )
        s.push(new Ln(e, o)), i = o.removeFromSet(i);
      for (let l = s.length - 1; l >= 0; l--)
        this.step(s[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, t = 1, r) {
    return am(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return Qp(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return Zp(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return Il(this, e, t, r), this;
  }
}
const hs = /* @__PURE__ */ Object.create(null);
class z {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new Ad(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = E.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], u = e.mapping.slice(o);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? E.empty : t), l == 0 && Ua(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: l } = i[o], a = e.mapping.slice(r), c = a.map(s.pos), u = a.map(l.pos);
      o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), Ua(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new I(e) : Xn(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = t < 0 ? Xn(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, r) : Xn(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new Ke(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Xn(e, e, 0, 0, 1) || new Ke(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Xn(e, e, e.content.size, e.childCount, -1) || new Ke(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = hs[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in hs)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return hs[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return I.between(this.$anchor, this.$head).getBookmark();
  }
}
z.prototype.visible = !0;
class Ad {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let _a = !1;
function Wa(n) {
  !_a && !n.parent.inlineContent && (_a = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class I extends z {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    Wa(e), Wa(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return z.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new I(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = E.empty) {
    if (super.replace(e, t), t == E.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof I && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Ho(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new I(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = z.findFrom(t, r, !0) || z.findFrom(t, -r, !0);
      if (o)
        t = o.$head;
      else
        return z.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (z.findFrom(e, -r, !0) || z.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new I(e, t);
  }
}
z.jsonID("text", I);
class Ho {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Ho(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return I.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class P extends z {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return r ? z.near(o) : new P(o);
  }
  content() {
    return new E(S.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof P && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new zl(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new P(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new P(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
P.prototype.visible = !1;
z.jsonID("node", P);
class zl {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Ho(r, r) : new zl(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && P.isSelectable(r) ? new P(t) : z.near(t);
  }
}
class Ke extends z {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = E.empty) {
    if (t == E.empty) {
      e.delete(0, e.doc.content.size);
      let r = z.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new Ke(e);
  }
  map(e) {
    return new Ke(e);
  }
  eq(e) {
    return e instanceof Ke;
  }
  getBookmark() {
    return bm;
  }
}
z.jsonID("all", Ke);
const bm = {
  map() {
    return this;
  },
  resolve(n) {
    return new Ke(n);
  }
};
function Xn(n, e, t, r, i, o = !1) {
  if (e.inlineContent)
    return I.create(n, t);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!o && P.isSelectable(l))
        return P.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = Xn(n, l, t + i, i < 0 ? l.childCount : 0, i, o);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function Ua(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof he || i instanceof be))
    return;
  let o = n.mapping.maps[r], s;
  o.forEach((l, a, c, u) => {
    s == null && (s = u);
  }), n.setSelection(z.near(n.doc.resolve(s), t));
}
const qa = 1, Ka = 2, Ja = 4;
class wm extends Bl {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | qa) & -3, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & qa) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Ka, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return X.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Ka) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & -3, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || X.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(t);
        o = r == t ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(z.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= Ja, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & Ja) > 0;
  }
}
function Ga(n, e) {
  return !e || !n ? n : n.bind(e);
}
class Dr {
  constructor(e, t, r) {
    this.name = e, this.init = Ga(t.init, r), this.apply = Ga(t.apply, r);
  }
}
const vm = [
  new Dr("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new Dr("selection", {
    init(n, e) {
      return n.selection || z.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new Dr("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new Dr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class ps {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = vm.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Dr(r.key, r.spec.state, r));
    });
  }
}
class tr {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = i ? i[s].n : 0, c = i ? i[s].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, s)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let d = 0; d < this.config.plugins.length; d++)
                i.push(d < s ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), o = !0;
          }
          i && (i[s] = { state: r, n: t.length });
        }
      }
      if (!o)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new tr(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      t[o.name] = o.apply(e, this[o.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new wm(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new ps(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new tr(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new ps(this.schema, e.plugins), r = t.fields, i = new tr(t);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (t[r] = o.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new ps(e.schema, e.plugins), o = new tr(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = en.fromJSON(e.schema, t.doc);
      else if (s.name == "selection")
        o.selection = z.fromJSON(o.doc, t.selection);
      else if (s.name == "storedMarks")
        t.storedMarks && (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              o[s.name] = c.fromJSON.call(a, e, t[l], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function Ed(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Ed(i, e, {})), t[r] = i;
  }
  return t;
}
class Z {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Ed(e.props, this, this.props), this.key = e.key ? e.key.key : Od("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ms = /* @__PURE__ */ Object.create(null);
function Od(n) {
  return n in ms ? n + "$" + ++ms[n] : (ms[n] = 0, n + "$");
}
class ce {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Od(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const xe = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, cr = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Ks = null;
const Lt = function(n, e, t) {
  let r = Ks || (Ks = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, km = function() {
  Ks = null;
}, In = function(n, e, t, r) {
  return t && (Ya(n, e, t, r, -1) || Ya(n, e, t, r, 1));
}, xm = /^(img|br|input|textarea|hr)$/i;
function Ya(n, e, t, r, i) {
  for (var o; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : et(n))) {
      let s = n.parentNode;
      if (!s || s.nodeType != 1 || ci(n) || xm.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = xe(n) + (i < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      let s = n.childNodes[e + (i < 0 ? -1 : 0)];
      if (s.nodeType == 1 && s.contentEditable == "false")
        if (!((o = s.pmViewDesc) === null || o === void 0) && o.ignoreForSelection)
          e += i;
        else
          return !1;
      else
        n = s, e = i < 0 ? et(n) : 0;
    } else
      return !1;
  }
}
function et(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Cm(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = et(n);
    } else if (n.parentNode && !ci(n))
      e = xe(n), n = n.parentNode;
    else
      return null;
  }
}
function Sm(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !ci(n))
      e = xe(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function Tm(n, e, t) {
  for (let r = e == 0, i = e == et(n); r || i; ) {
    if (n == t)
      return !0;
    let o = xe(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && o == 0, i = i && o == et(n);
  }
}
function ci(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Vo = function(n) {
  return n.focusNode && In(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function gn(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function Mm(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Am(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(et(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(et(r.startContainer), r.startOffset) };
  }
}
const vt = typeof navigator < "u" ? navigator : null, Xa = typeof document < "u" ? document : null, cn = vt && vt.userAgent || "", Js = /Edge\/(\d+)/.exec(cn), Nd = /MSIE \d/.exec(cn), Gs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(cn), He = !!(Nd || Gs || Js), nn = Nd ? document.documentMode : Gs ? +Gs[1] : Js ? +Js[1] : 0, ct = !He && /gecko\/(\d+)/i.test(cn);
ct && +(/Firefox\/(\d+)/.exec(cn) || [0, 0])[1];
const Ys = !He && /Chrome\/(\d+)/.exec(cn), Ee = !!Ys, Rd = Ys ? +Ys[1] : 0, Le = !He && !!vt && /Apple Computer/.test(vt.vendor), ur = Le && (/Mobile\/\w+/.test(cn) || !!vt && vt.maxTouchPoints > 2), Ze = ur || (vt ? /Mac/.test(vt.platform) : !1), Em = vt ? /Win/.test(vt.platform) : !1, Pt = /Android \d/.test(cn), ui = !!Xa && "webkitFontSmoothing" in Xa.documentElement.style, Om = ui ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Nm(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function Et(n, e) {
  return typeof n == "number" ? n : n[e];
}
function Rm(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Qa(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
  for (let s = t || n.dom; s; ) {
    if (s.nodeType != 1) {
      s = cr(s);
      continue;
    }
    let l = s, a = l == o.body, c = a ? Nm(o) : Rm(l), u = 0, d = 0;
    if (e.top < c.top + Et(r, "top") ? d = -(c.top - e.top + Et(i, "top")) : e.bottom > c.bottom - Et(r, "bottom") && (d = e.bottom - e.top > c.bottom - c.top ? e.top + Et(i, "top") - c.top : e.bottom - c.bottom + Et(i, "bottom")), e.left < c.left + Et(r, "left") ? u = -(c.left - e.left + Et(i, "left")) : e.right > c.right - Et(r, "right") && (u = e.right - c.right + Et(i, "right")), u || d)
      if (a)
        o.defaultView.scrollBy(u, d);
      else {
        let h = l.scrollLeft, p = l.scrollTop;
        d && (l.scrollTop += d), u && (l.scrollLeft += u);
        let g = l.scrollLeft - h, m = l.scrollTop - p;
        e = { left: e.left - g, top: e.top - m, right: e.right - g, bottom: e.bottom - m };
      }
    let f = a ? "fixed" : getComputedStyle(s).position;
    if (/^(fixed|sticky)$/.test(f))
      break;
    s = f == "absolute" ? s.offsetParent : cr(s);
  }
}
function Dm(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = t + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = n.root.elementFromPoint(o, s);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: Dd(n.dom) };
}
function Dd(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = cr(r))
    ;
  return e;
}
function Lm({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  Ld(t, r == 0 ? 0 : r - e);
}
function Ld(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: o } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let Kn = null;
function Im(n) {
  if (n.setActive)
    return n.setActive();
  if (Kn)
    return n.focus(Kn);
  let e = Dd(n);
  n.focus(Kn == null ? {
    get preventScroll() {
      return Kn = { preventScroll: !0 }, !0;
    }
  } : void 0), Kn || (Kn = !1, Ld(e, 0));
}
function Id(n, e) {
  let t, r = 2e8, i, o = 0, s = e.top, l = e.top, a, c;
  for (let u = n.firstChild, d = 0; u; u = u.nextSibling, d++) {
    let f;
    if (u.nodeType == 1)
      f = u.getClientRects();
    else if (u.nodeType == 3)
      f = Lt(u).getClientRects();
    else
      continue;
    for (let h = 0; h < f.length; h++) {
      let p = f[h];
      if (p.top <= s && p.bottom >= l) {
        s = Math.max(p.bottom, s), l = Math.min(p.top, l);
        let g = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (g < r) {
          t = u, r = g, i = g && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, u.nodeType == 1 && g && (o = d + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (o = d + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? Pm(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: o } : Id(t, i);
}
function Pm(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = _t(r, 1);
    if (o.top != o.bottom && Hl(e, o))
      return { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function Hl(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function Bm(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function zm(n, e, t) {
  let { node: r, offset: i } = Id(e, t), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && t.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, o);
}
function Hm(n, e, t, r) {
  let i = -1;
  for (let o = e, s = !1; o != n.dom; ) {
    let l = n.docView.nearestDesc(o, !0), a;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && (!s && a.left > r.left || a.top > r.top ? i = l.posBefore : (!s && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), s = !0), !l.contentDOM && i < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    o = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function Pd(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), o = i; ; ) {
      let s = n.childNodes[o];
      if (s.nodeType == 1) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (Hl(e, c))
            return Pd(s, e, c);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return n;
}
function Vm(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, o = Am(t, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = n.dom.getBoundingClientRect();
    if (!Hl(e, c) || (s = Pd(n.dom, e, c), !s))
      return null;
  }
  if (Le)
    for (let c = s; r && c; c = cr(c))
      c.draggable && (r = void 0);
  if (s = Bm(s, e), r) {
    if (ct && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let u = r.childNodes[i], d;
      u.nodeName == "IMG" && (d = u.getBoundingClientRect()).right <= e.left && d.bottom > e.top && i++;
    }
    let c;
    ui && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = Hm(n, r, i, e));
  }
  l == null && (l = zm(n, s, e));
  let a = n.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Za(n) {
  return n.top < n.bottom || n.left < n.right;
}
function _t(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (Za(r))
      return r;
  }
  return Array.prototype.find.call(t, Za) || n.getBoundingClientRect();
}
const Fm = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Bd(n, e, t) {
  let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), s = ui || ct;
  if (r.nodeType == 3)
    if (s && (Fm.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = _t(Lt(r, i, i), t);
      if (ct && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = _t(Lt(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let u = _t(Lt(r, i, i + 1), -1);
          if (u.top != a.top)
            return Ar(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, u = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, Ar(_t(Lt(r, a, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (t < 0 || i == et(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return gs(a.getBoundingClientRect(), !1);
    }
    if (o == null && i < et(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return gs(a.getBoundingClientRect(), !0);
    }
    return gs(r.getBoundingClientRect(), t >= 0);
  }
  if (o == null && i && (t < 0 || i == et(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? Lt(a, et(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return Ar(_t(c, 1), !1);
  }
  if (o == null && i < et(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? Lt(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return Ar(_t(c, -1), !0);
  }
  return Ar(_t(r.nodeType == 3 ? Lt(r) : r, -t), t >= 0);
}
function Ar(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function gs(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function zd(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function $m(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return zd(n, e, () => {
    let { node: o } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(o, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        o = l.contentDOM || l.dom;
        break;
      }
      o = l.dom.parentNode;
    }
    let s = Bd(n, i.pos, 1);
    for (let l = o.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = Lt(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? s.top - u.top > (u.bottom - s.top) * 2 : u.bottom - s.bottom > (s.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const jm = /[\u0590-\u08ac]/;
function _m(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, l = n.domSelection();
  return l ? !jm.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? o : s : zd(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: d } = n.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: g } = n.domSelectionRange(), m = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == g;
    try {
      l.collapse(u, d), a && (a != u || c != d) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), m;
  }) : r.pos == r.start() || r.pos == r.end();
}
let ec = null, tc = null, nc = !1;
function Wm(n, e, t) {
  return ec == e && tc == t ? nc : (ec = e, tc = t, nc = t == "up" || t == "down" ? $m(n, e, t) : _m(n, e, t));
}
const tt = 0, rc = 1, vn = 2, kt = 3;
class di {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = tt, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > xe(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!t || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          for (let s = 0; s < i.children.length; s++) {
            let l = i.children[s];
            if (l.size) {
              i = l;
              break;
            }
          }
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], l = o + s.size;
      if (l > e || s instanceof Vd) {
        i = e - o;
        break;
      }
      o = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof Hd && o.side >= 0; r--)
      ;
    if (t <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && t && s && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : { node: this.contentDOM, offset: o ? xe(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, t) : { node: this.contentDOM, offset: o ? xe(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (i == -1 && e <= c) {
        let u = s + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = s;
        for (let d = l; d > 0; d--) {
          let f = this.children[d - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = xe(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let d = this.children[u];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
            o = xe(d.dom);
            break;
          }
          t += d.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let o = Math.min(e, t), s = Math.max(e, t);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let g = this.children[h], m = p + g.size;
      if (o > p && s < m)
        return g.setSelection(e - p - g.border, t - p - g.border, r, i);
      p = m;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.root.getSelection(), u = r.domSelectionRange(), d = !1;
    if ((ct || Le) && e == t) {
      let { node: h, offset: p } = l;
      if (h.nodeType == 3) {
        if (d = !!(p && h.nodeValue[p - 1] == `
`), d && p == h.nodeValue.length)
          for (let g = h, m; g; g = g.parentNode) {
            if (m = g.nextSibling) {
              m.nodeName == "BR" && (l = a = { node: m.parentNode, offset: xe(m) + 1 });
              break;
            }
            let y = g.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let g = h.childNodes[p - 1];
        d = g && (g.nodeName == "BR" || g.contentEditable == "false");
      }
    }
    if (ct && u.focusNode && u.focusNode != a.node && u.focusNode.nodeType == 1) {
      let h = u.focusNode.childNodes[u.focusOffset];
      h && h.contentEditable == "false" && (i = !0);
    }
    if (!(i || d && Le) && In(l.node, l.offset, u.anchorNode, u.anchorOffset) && In(a.node, a.offset, u.focusNode, u.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == t) && !d) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > t) {
        let p = l;
        l = a, a = p;
      }
      let h = document.createRange();
      h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && t >= r : e < s && t > r) {
        let l = r + o.border, a = s - o.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == s ? vn : rc, e == l && t == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = kt : o.markDirty(e - l, t - l);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? vn : kt;
      }
      r = s;
    }
    this.dirty = vn;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? vn : rc;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class Hd extends di {
  constructor(e, t, r, i) {
    let o, s = t.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !t.type.spec.raw) {
      if (s.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(s), s = l;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = t, this.widget = t, o = this;
  }
  matchesWidget(e) {
    return this.dirty == tt && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Um extends di {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Pn extends di {
  constructor(e, t, r, i, o) {
    super(e, [], r, i), this.mark = t, this.spec = o;
  }
  static create(e, t, r, i) {
    let o = i.nodeViews[t.type.name], s = o && o(t, i, r);
    return (!s || !s.dom) && (s = Fn.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new Pn(e, t, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & kt || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != kt && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != tt) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = tt;
    }
  }
  slice(e, t, r) {
    let i = Pn.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    t < s && (o = Qs(o, t, s, r)), e > 0 && (o = Qs(o, 0, e, r));
    for (let l = 0; l < o.length; l++)
      o[l].parent = i;
    return i.children = o, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class rn extends di {
  constructor(e, t, r, i, o, s, l, a, c) {
    super(e, [], o, s), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, o, s) {
    let l = o.nodeViews[t.type.name], a, c = l && l(t, o, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), u = c && c.dom, d = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else u || ({ dom: u, contentDOM: d } = Fn.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !d && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let f = u;
    return u = jd(u, r, t), c ? a = new qm(e, t, r, i, u, d || null, f, c, o, s + 1) : t.isText ? new Fo(e, t, r, i, u, f, o) : new rn(e, t, r, i, u, d || null, f, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => S.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == tt && e.eq(this.node) && lo(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new Jm(this, s && s.node, e);
    Xm(this.node, this.innerDeco, (c, u, d) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !d && a.syncToMarks(u == this.node.childCount ? X.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i);
    }, (c, u, d, f) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, u, d, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(c, u, d, h, e) || a.updateNextNode(c, u, d, e, f, i) || a.addNode(c, u, d, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == vn) && (s && this.protectLocalComposition(e, s), Fd(this.contentDOM, this.children, e), ur && Qm(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof I) || r < t || i > t + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, l = Zm(this.node.content, s, r - t, i - t);
      return l < 0 ? null : { node: o, pos: l, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let o = t;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new Um(this, o, t, i);
    e.input.compositionNodes.push(s), this.children = Qs(this.children, r, r + i.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == kt || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = tt;
  }
  updateOuterDeco(e) {
    if (lo(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = $d(this.dom, this.nodeDOM, Xs(this.outerDeco, this.node, t), Xs(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function ic(n, e, t, r, i) {
  jd(r, e, n);
  let o = new rn(void 0, n, e, t, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class Fo extends rn {
  constructor(e, t, r, i, o, s, l) {
    super(e, t, r, i, o, null, s, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == kt || this.dirty != tt && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != tt || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = tt, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), o = document.createTextNode(i.text);
    return new Fo(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = kt);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Vd extends di {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == tt && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class qm extends rn {
  constructor(e, t, r, i, o, s, l, a, c, u) {
    super(e, t, r, i, o, s, l, c, u), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == kt)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, t, r);
      return o && this.updateInner(e, t, r, i), o;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Fd(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], l = s.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = oc(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (s instanceof Pn) {
      let a = r ? r.previousSibling : n.lastChild;
      Fd(s.contentDOM, s.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = oc(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const Ir = function(n) {
  n && (this.nodeName = n);
};
Ir.prototype = /* @__PURE__ */ Object.create(null);
const kn = [new Ir()];
function Xs(n, e, t) {
  if (n.length == 0)
    return kn;
  let r = t ? kn[0] : new Ir(), i = [r];
  for (let o = 0; o < n.length; o++) {
    let s = n[o].type.attrs;
    if (s) {
      s.nodeName && i.push(r = new Ir(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (t && i.length == 1 && i.push(r = new Ir(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function $d(n, e, t, r) {
  if (t == kn && r == kn)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], l = t[o];
    if (o) {
      let a;
      l && l.nodeName == s.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = kn[0]), i = a;
    }
    Km(i, l || kn[0], s);
  }
  return i;
}
function Km(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && n.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && n.classList.add(i[o]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function jd(n, e, t) {
  return $d(n, n, kn, Xs(e, t, n.nodeType != 1));
}
function lo(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function oc(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Jm {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Gm(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = tt, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[o]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = Pn.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, t, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          o = l;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == kt && s.dom == s.contentDOM && (s.dirty = vn), s.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, o, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof rn) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != o)
          return !1;
        let u = a.dom, d, f = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != kt && lo(t, a.outerDeco));
        if (!f && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0;
        if (!f && (d = this.recreateWrapper(a, e, t, r, i, s)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = d, d.contentDOM && (d.dirty = vn, d.updateChildren(i, s + 1), d.dirty = tt), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, o, s) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !lo(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = rn.create(this.top, t, r, i, o, s);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, o) {
    let s = rn.create(this.top, e, t, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new Hd(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Pn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Fo) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Le || Ee) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Vd(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Gm(n, e) {
  let t = e, r = t.children.length, i = n.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e: for (; i > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = t.children[r - 1];
        if (c instanceof Pn)
          t = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let a = l.node;
    if (a) {
      if (a != n.child(i - 1))
        break;
      --i, o.set(l, i), s.push(l);
    }
  }
  return { index: i, matched: o, matches: s.reverse() };
}
function Ym(n, e) {
  return n.type.side - e.type.side;
}
function Xm(n, e, t, r) {
  let i = e.locals(n), o = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, i, e.forChild(o, u), c), o += u.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let u, d;
    for (; s < i.length && i[s].to == o; ) {
      let m = i[s++];
      m.widget && (u ? (d || (d = [u])).push(m) : u = m);
    }
    if (u)
      if (d) {
        d.sort(Ym);
        for (let m = 0; m < d.length; m++)
          t(d[m], c, !!a);
      } else
        t(u, c, !!a);
    let f, h;
    if (a)
      h = -1, f = a, a = null;
    else if (c < n.childCount)
      h = c, f = n.child(c++);
    else
      break;
    for (let m = 0; m < l.length; m++)
      l[m].to <= o && l.splice(m--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      l.push(i[s++]);
    let p = o + f.nodeSize;
    if (f.isText) {
      let m = p;
      s < i.length && i[s].from < m && (m = i[s].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < m && (m = l[y].to);
      m < p && (a = f.cut(m - o), f = f.cut(0, m - o), p = m, h = -1);
    } else
      for (; s < i.length && i[s].to < p; )
        s++;
    let g = f.isInline && !f.isLeaf ? l.filter((m) => !m.inline) : l.slice();
    r(f, g, e.forChild(o, f), h), o = p;
  }
}
function Qm(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function Zm(n, e, t, r) {
  for (let i = 0, o = 0; i < n.childCount && o <= r; ) {
    let s = n.child(i++), l = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (o += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (o >= t) {
      if (o >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Qs(n, e, t, r, i) {
  let o = [];
  for (let s = 0, l = 0; s < n.length; s++) {
    let a = n[s], c = l, u = l += a.size;
    c >= t || u <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, r)), i && (o.push(i), i = void 0), u > t && o.push(a.slice(t - c, a.size, r)));
  }
  return o;
}
function Vl(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), o = i && i.size == 0, s = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (s < 0)
    return null;
  let l = r.resolve(s), a, c;
  if (Vo(t)) {
    for (a = s; i && !i.node; )
      i = i.parent;
    let d = i.node;
    if (i && d.isAtom && P.isSelectable(d) && i.parent && !(d.isInline && Tm(t.focusNode, t.focusOffset, i.dom))) {
      let f = i.posBefore;
      c = new P(s == f ? l : r.resolve(f));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let d = s, f = s;
      for (let h = 0; h < t.rangeCount; h++) {
        let p = t.getRangeAt(h);
        d = Math.min(d, n.docView.posFromDOM(p.startContainer, p.startOffset, 1)), f = Math.max(f, n.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (d < 0)
        return null;
      [a, s] = f == n.state.selection.anchor ? [f, d] : [d, f], l = r.resolve(s);
    } else
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let u = r.resolve(a);
  if (!c) {
    let d = e == "pointer" || n.state.selection.head < l.pos && !o ? 1 : -1;
    c = Fl(n, u, l, d);
  }
  return c;
}
function _d(n) {
  return n.editable ? n.hasFocus() : Ud(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function Ht(n, e = !1) {
  let t = n.state.selection;
  if (Wd(n, t), !!_d(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && Ee) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && In(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      tg(n);
    else {
      let { anchor: r, head: i } = t, o, s;
      sc && !(t instanceof I) && (t.$from.parent.inlineContent || (o = lc(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (s = lc(n, t.to))), n.docView.setSelection(r, i, n, e), sc && (o && ac(o), s && ac(s)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && eg(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const sc = Le || Ee && Rd < 63;
function lc(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
  if (Le && i && i.contentEditable == "false")
    return ys(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return ys(i);
    if (o)
      return ys(o);
  }
}
function ys(n) {
  return n.contentEditable = "true", Le && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function ac(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function eg(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!_d(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function tg(n) {
  let e = n.domSelection(), t = document.createRange();
  if (!e)
    return;
  let r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setStart(r.parentNode, xe(r) + 1) : t.setStart(r, 0), t.collapse(!0), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && He && nn <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Wd(n, e) {
  if (e instanceof P) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (cc(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    cc(n);
}
function cc(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function Fl(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || I.between(e, t, r);
}
function uc(n) {
  return n.editable && !n.hasFocus() ? !1 : Ud(n);
}
function Ud(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function ng(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return In(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Zs(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && z.findFrom(o, e);
}
function Wt(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function dc(n, e, t) {
  let r = n.state.selection;
  if (r instanceof I)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = n.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return Wt(n, new I(r.$anchor, s));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Zs(n.state, e);
        return i && i instanceof P ? Wt(n, i) : !1;
      } else if (!(Ze && t.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = n.docView.descAt(l)) && !s.contentDOM ? P.isSelectable(o) ? Wt(n, new P(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : ui ? Wt(n, new I(n.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof P && r.node.isInline)
      return Wt(n, new I(e > 0 ? r.$to : r.$from));
    {
      let i = Zs(n.state, e);
      return i ? Wt(n, i) : !1;
    }
  }
}
function ao(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Pr(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Jn(n, e) {
  return e < 0 ? rg(n) : ig(n);
}
function rg(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, o, s = !1;
  for (ct && t.nodeType == 1 && r < ao(t) && Pr(t.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (Pr(l, -1))
          i = t, o = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (qd(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && Pr(l, -1); )
          i = t.parentNode, o = xe(l), l = l.previousSibling;
        if (l)
          t = l, r = ao(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  s ? el(n, t, r) : i && el(n, i, o);
}
function ig(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = ao(t), o, s;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (Pr(l, 1))
        o = t, s = ++r;
      else
        break;
    } else {
      if (qd(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && Pr(l, 1); )
          o = l.parentNode, s = xe(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = ao(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && el(n, o, s);
}
function qd(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function og(n, e) {
  for (; n && e == n.childNodes.length && !ci(n); )
    e = xe(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function sg(n, e) {
  for (; n && !e && !ci(n); )
    e = xe(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function el(n, e, t) {
  if (e.nodeType != 3) {
    let o, s;
    (s = og(e, t)) ? (e = s, t = 0) : (o = sg(e, t)) && (e = o, t = o.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (Vo(r)) {
    let o = document.createRange();
    o.setEnd(e, t), o.setStart(e, t), r.removeAllRanges(), r.addRange(o);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && Ht(n);
  }, 50);
}
function fc(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(Ee || Em) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let o = n.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let o = n.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function hc(n, e, t) {
  let r = n.state.selection;
  if (r instanceof I && !r.empty || t.indexOf("s") > -1 || Ze && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = Zs(n.state, e);
    if (s && s instanceof P)
      return Wt(n, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, l = r instanceof Ke ? z.near(s, e) : z.findFrom(s, e);
    return l ? Wt(n, l) : !1;
  }
  return !1;
}
function pc(n, e) {
  if (!(n.state.selection instanceof I))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (o && !o.isText) {
    let s = n.state.tr;
    return e < 0 ? s.delete(t.pos - o.nodeSize, t.pos) : s.delete(t.pos, t.pos + o.nodeSize), n.dispatch(s), !0;
  }
  return !1;
}
function mc(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function lg(n) {
  if (!Le || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    mc(n, r, "true"), setTimeout(() => mc(n, r, "false"), 20);
  }
  return !1;
}
function ag(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function cg(n, e) {
  let t = e.keyCode, r = ag(e);
  if (t == 8 || Ze && t == 72 && r == "c")
    return pc(n, -1) || Jn(n, -1);
  if (t == 46 && !e.shiftKey || Ze && t == 68 && r == "c")
    return pc(n, 1) || Jn(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || Ze && t == 66 && r == "c") {
    let i = t == 37 ? fc(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return dc(n, i, r) || Jn(n, i);
  } else if (t == 39 || Ze && t == 70 && r == "c") {
    let i = t == 39 ? fc(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return dc(n, i, r) || Jn(n, i);
  } else {
    if (t == 38 || Ze && t == 80 && r == "c")
      return hc(n, -1, r) || Jn(n, -1);
    if (t == 40 || Ze && t == 78 && r == "c")
      return lg(n) || hc(n, 1, r) || Jn(n, 1);
    if (r == (Ze ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function $l(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let s = n.someProp("clipboardSerializer") || Fn.fromSchema(n.state.schema), l = Qd(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = Xd[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = l.createElement(u[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), d++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`);
  let f = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function Kd(n, e, t, r, i) {
  let o = i.parent.type.spec.code, s, l;
  if (!t && !e)
    return null;
  let a = e && (r || o || !t);
  if (a) {
    if (n.someProp("transformPastedText", (f) => {
      e = f(e, o || r, n);
    }), o)
      return e ? new E(S.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : E.empty;
    let d = n.someProp("clipboardTextParser", (f) => f(e, i, r, n));
    if (d)
      l = d;
    else {
      let f = i.marks(), { schema: h } = n.state, p = Fn.fromSchema(h);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((g) => {
        let m = s.appendChild(document.createElement("p"));
        g && m.appendChild(p.serializeNode(h.text(g, f)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (d) => {
      t = d(t, n);
    }), s = hg(t), ui && pg(s);
  let c = s && s.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let d = +u[3]; d > 0; d--) {
      let f = s.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      s = f;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || tn.fromSchema(n.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !ug.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = mg(gc(l, +u[1], +u[2]), u[4]);
  else if (l = E.maxOpen(dg(l.content, i), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = gc(l, d, f);
  }
  return n.someProp("transformPasted", (d) => {
    l = d(l, n);
  }), l;
}
const ug = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function dg(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), o, s = [];
    if (n.forEach((l) => {
      if (!s)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && o.length && Gd(a, o, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = Yd(s[s.length - 1], o.length));
        let u = Jd(l, a);
        s.push(u), i = i.matchType(u.type), o = a;
      }
    }), s)
      return S.from(s);
  }
  return n;
}
function Jd(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, S.from(n));
  return n;
}
function Gd(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let o = Gd(n, e, t, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(S.from(Jd(t, n, i + 1))));
  }
}
function Yd(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Yd(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(S.empty, !0);
  return n.copy(t.append(r));
}
function tl(n, e, t, r, i, o) {
  let s = e < 0 ? n.firstChild : n.lastChild, l = s.content;
  return n.childCount > 1 && (o = 0), i < r - 1 && (l = tl(l, e, t, r, i + 1, o)), i >= t && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(S.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, s.copy(l));
}
function gc(n, e, t) {
  return e < n.openStart && (n = new E(tl(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new E(tl(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Xd = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let yc = null;
function Qd() {
  return yc || (yc = document.implementation.createHTMLDocument("title"));
}
let bs = null;
function fg(n) {
  let e = window.trustedTypes;
  return e ? (bs || (bs = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), bs.createHTML(n)) : n;
}
function hg(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Qd().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Xd[r[1].toLowerCase()]) && (n = i.map((o) => "<" + o + ">").join("") + n + i.map((o) => "</" + o + ">").reverse().join("")), t.innerHTML = fg(n), i)
    for (let o = 0; o < i.length; o++)
      t = t.querySelector(i[o]) || t;
  return t;
}
function pg(n) {
  let e = n.querySelectorAll(Ee ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function mg(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: o, openEnd: s } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = S.from(a.create(r[l + 1], i)), o++, s++;
  }
  return new E(i, o, s);
}
const Ie = {}, Pe = {}, gg = { touchstart: !0, touchmove: !0 };
class yg {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function bg(n) {
  for (let e in Ie) {
    let t = Ie[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      vg(n, r) && !jl(n, r) && (n.editable || !(r.type in Pe)) && t(n, r);
    }, gg[e] ? { passive: !0 } : void 0);
  }
  Le && n.dom.addEventListener("input", () => null), nl(n);
}
function Zt(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function wg(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function nl(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => jl(n, r));
  });
}
function jl(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function vg(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function kg(n, e) {
  !jl(n, e) && Ie[e.type] && (n.editable || !(e.type in Pe)) && Ie[e.type](n, e);
}
Pe.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !ef(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Pt && Ee && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), ur && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, gn(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || cg(n, t) ? t.preventDefault() : Zt(n, "key");
};
Pe.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Pe.keypress = (n, e) => {
  let t = e;
  if (ef(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Ze && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof I) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode), o = () => n.state.tr.insertText(i).scrollIntoView();
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (s) => s(n, r.$from.pos, r.$to.pos, i, o)) && n.dispatch(o()), t.preventDefault();
  }
};
function $o(n) {
  return { left: n.clientX, top: n.clientY };
}
function xg(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function _l(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let o = n.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (n.someProp(e, (l) => s > o.depth ? l(n, t, o.nodeAfter, o.before(s), i, !0) : l(n, t, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function lr(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function Cg(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && P.isSelectable(r) ? (lr(n, new P(t)), !0) : !1;
}
function Sg(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof P && (r = t.node);
  let o = n.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let l = s > o.depth ? o.nodeAfter : o.node(s);
    if (P.isSelectable(l)) {
      r && t.$from.depth > 0 && s >= t.$from.depth && o.before(t.$from.depth + 1) == t.$from.pos ? i = o.before(t.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (lr(n, P.create(n.state.doc, i)), !0) : !1;
}
function Tg(n, e, t, r, i) {
  return _l(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o) => o(n, e, r)) || (i ? Sg(n, t) : Cg(n, t));
}
function Mg(n, e, t, r) {
  return _l(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function Ag(n, e, t, r) {
  return _l(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || Eg(n, t, r);
}
function Eg(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (lr(n, I.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), l = i.before(o);
    if (s.inlineContent)
      lr(n, I.create(r, l + 1, l + 1 + s.content.size));
    else if (P.isSelectable(s))
      lr(n, P.create(r, l));
    else
      continue;
    return !0;
  }
}
function Wl(n) {
  return co(n);
}
const Zd = Ze ? "metaKey" : "ctrlKey";
Ie.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = Wl(n), i = Date.now(), o = "singleClick";
  i - n.input.lastClick.time < 500 && xg(t, n.input.lastClick) && !t[Zd] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: o, button: t.button };
  let s = n.posAtCoords($o(t));
  s && (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new Og(n, s, t, !!r)) : (o == "doubleClick" ? Mg : Ag)(n, s.pos, s.inside, t) ? t.preventDefault() : Zt(n, "pointer"));
};
class Og {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Zd], this.allowDefault = r.shiftKey;
    let o, s;
    if (t.inside > -1)
      o = e.state.doc.nodeAt(t.inside), s = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      o = u.parent, s = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof P && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && ct && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Zt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Ht(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords($o(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Zt(this.view, "pointer") : Tg(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Le && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Ee && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (lr(this.view, z.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : Zt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Zt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Ie.touchstart = (n) => {
  n.input.lastTouch = Date.now(), Wl(n), Zt(n, "pointer");
};
Ie.touchmove = (n) => {
  n.input.lastTouch = Date.now(), Zt(n, "pointer");
};
Ie.contextmenu = (n) => Wl(n);
function ef(n, e) {
  return n.composing ? !0 : Le && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const Ng = Pt ? 5e3 : -1;
Pe.compositionstart = Pe.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof I && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), co(n, !0), n.markCursor = null;
    else if (co(n, !e.selection.empty), ct && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    n.input.composing = !0;
  }
  tf(n, Ng);
};
Pe.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, tf(n, 20));
};
function tf(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => co(n), e));
}
function nf(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = Dg()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function Rg(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = Cm(e.focusNode, e.focusOffset), r = Sm(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, o = n.domObserver.lastChangedTextNode;
    if (t == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let s = t.pmViewDesc;
      if (!(!s || !s.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function Dg() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function co(n, e = !1) {
  if (!(Pt && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), nf(n), e || n.docView && n.docView.dirty) {
      let t = Vl(n), r = n.state.selection;
      return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function Lg(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Kr = He && nn < 15 || ur && Om < 604;
Ie.copy = Pe.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let o = Kr ? null : t.clipboardData, s = r.content(), { dom: l, text: a } = $l(n, s);
  o ? (t.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : Lg(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Ig(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function Pg(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Jr(n, r.value, null, i, e) : Jr(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Jr(n, e, t, r, i) {
  let o = Kd(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, o || E.empty)))
    return !0;
  if (!o)
    return !1;
  let s = Ig(o), l = s ? n.state.tr.replaceSelectionWith(s, r) : n.state.tr.replaceSelection(o);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function rf(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
Pe.paste = (n, e) => {
  let t = e;
  if (n.composing && !Pt)
    return;
  let r = Kr ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && Jr(n, rf(r), r.getData("text/html"), i, t) ? t.preventDefault() : Pg(n, t);
};
class of {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const Bg = Ze ? "altKey" : "ctrlKey";
function sf(n, e) {
  let t = n.someProp("dragCopies", (r) => !r(e));
  return t ?? !e[Bg];
}
Ie.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, o = i.empty ? null : n.posAtCoords($o(t)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof P ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = P.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let d = n.docView.nearestDesc(t.target, !0);
      d && d.node.type.spec.draggable && d != n.docView && (s = P.create(n.state.doc, d.posBefore));
    }
  }
  let l = (s || n.state.selection).content(), { dom: a, text: c, slice: u } = $l(n, l);
  (!t.dataTransfer.files.length || !Ee || Rd > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Kr ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Kr || t.dataTransfer.setData("text/plain", c), n.dragging = new of(u, sf(n, t), s);
};
Ie.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Pe.dragover = Pe.dragenter = (n, e) => e.preventDefault();
Pe.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords($o(t));
  if (!i)
    return;
  let o = n.state.doc.resolve(i.pos), s = r && r.slice;
  s ? n.someProp("transformPasted", (p) => {
    s = p(s, n);
  }) : s = Kd(n, rf(t.dataTransfer), Kr ? null : t.dataTransfer.getData("text/html"), !1, o);
  let l = !!(r && sf(n, t));
  if (n.someProp("handleDrop", (p) => p(n, t, s || E.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!s)
    return;
  t.preventDefault();
  let a = s ? xd(n.state.doc, o.pos, s) : o.pos;
  a == null && (a = o.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a), d = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, f = c.doc;
  if (d ? c.replaceRangeWith(u, u, s.content.firstChild) : c.replaceRange(u, u, s), c.doc.eq(f))
    return;
  let h = c.doc.resolve(u);
  if (d && P.isSelectable(s.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new P(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((g, m, y, w) => p = w), c.setSelection(Fl(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
Ie.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Ht(n);
  }, 20));
};
Ie.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
Ie.beforeinput = (n, e) => {
  if (Ee && Pt && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (o) => o(n, gn(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Pe)
  Ie[n] = Pe[n];
function Gr(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class uo {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || An, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: o, deleted: s } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new Se(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof uo && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Gr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class on {
  constructor(e, t) {
    this.attrs = e, this.spec = t || An;
  }
  map(e, t, r, i) {
    let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new Se(o, s, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof on && Gr(this.attrs, e.attrs) && Gr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof on;
  }
  destroy() {
  }
}
class Ul {
  constructor(e, t) {
    this.attrs = e, this.spec = t || An;
  }
  map(e, t, r, i) {
    let o = e.mapResult(t.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(t.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new Se(o.pos - r, s.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), o;
    return i == t.from && !(o = e.child(r)).isText && i + o.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Ul && Gr(this.attrs, e.attrs) && Gr(this.spec, e.spec);
  }
  destroy() {
  }
}
class Se {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new Se(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new Se(e, e, new uo(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new Se(e, t, new on(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new Se(e, t, new Ul(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof on;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof uo;
  }
}
const Qn = [], An = {};
class ne {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : Qn, this.children = t.length ? t : Qn;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? fo(t, e, 0, An) : Me;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= t && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < t && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, t - l, r, i + l, o);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == Me || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || An);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, o) {
    let s;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (s || (s = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
    }
    return this.children.length ? zg(this.children, s || [], e, t, r, i, o) : s ? new ne(s.sort(En), Qn) : Me;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == Me ? ne.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, o = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = af(t, l, c)) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < a; )
          o += 3;
        i[o] == a ? i[o + 2] = i[o + 2].addInner(l, u, c + 1) : i.splice(o, 0, a, a + l.nodeSize, fo(u, l, c + 1, An)), o += 3;
      }
    });
    let s = lf(o ? cf(t) : t, -r);
    for (let l = 0; l < s.length; l++)
      s[l].type.valid(e, s[l]) || s.splice(l--, 1);
    return new ne(s.length ? this.local.concat(s).sort(En) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Me ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, l = r[o] + t, a = r[o + 1] + t;
      for (let u = 0, d; u < e.length; u++)
        (d = e[u]) && d.from > l && d.to < a && (e[u] = null, (s || (s = [])).push(d));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(s, l + 1);
      c != Me ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let l = 0; l < i.length; l++)
            i[l].eq(s, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new ne(i, r) : Me;
  }
  forChild(e, t) {
    if (this == Me)
      return this;
    if (t.isLeaf)
      return ne.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, s = o + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > o && a.type instanceof on) {
        let c = Math.max(o, a.from) - o, u = Math.min(s, a.to) - o;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new ne(i.sort(En), Qn);
      return r ? new Kt([l, r]) : l;
    }
    return r || Me;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof ne) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return ql(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Me)
      return Qn;
    if (e.inlineContent || !this.local.some(on.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof on || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
ne.empty = new ne([], []);
ne.removeOverlap = ql;
const Me = ne.empty;
class Kt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, An));
    return Kt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return ne.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, t);
      o != Me && (o instanceof Kt ? r = r.concat(o.members) : r.push(o));
    }
    return Kt.from(r);
  }
  eq(e) {
    if (!(e instanceof Kt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (o.length)
        if (!t)
          t = o;
        else {
          r && (t = t.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            t.push(o[s]);
        }
    }
    return t ? ql(r ? t : t.sort(En)) : Qn;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Me;
      case 1:
        return e[0];
      default:
        return new Kt(e.every((t) => t instanceof ne) ? e : e.reduce((t, r) => t.concat(r instanceof ne ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function zg(n, e, t, r, i, o, s) {
  let l = n.slice();
  for (let c = 0, u = o; c < t.maps.length; c++) {
    let d = 0;
    t.maps[c].forEach((f, h, p, g) => {
      let m = g - p - (h - f);
      for (let y = 0; y < l.length; y += 3) {
        let w = l[y + 1];
        if (w < 0 || f > w + u - d)
          continue;
        let C = l[y] + u - d;
        h >= C ? l[y + 1] = f <= C ? -2 : -1 : f >= u && m && (l[y] += m, l[y + 1] += m);
      }
      d += m;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + o), d = u - i;
      if (d < 0 || d >= r.content.size) {
        a = !0;
        continue;
      }
      let f = t.map(n[c + 1] + o, -1), h = f - i, { index: p, offset: g } = r.content.findIndex(d), m = r.maybeChild(p);
      if (m && g == d && g + m.nodeSize == h) {
        let y = l[c + 2].mapInner(t, m, u + 1, n[c] + o + 1, s);
        y != Me ? (l[c] = d, l[c + 1] = h, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = Hg(l, n, e, t, i, o, s), u = fo(c, r, 0, s);
    e = u.local;
    for (let d = 0; d < l.length; d += 3)
      l[d + 1] < 0 && (l.splice(d, 3), d -= 3);
    for (let d = 0, f = 0; d < u.children.length; d += 3) {
      let h = u.children[d];
      for (; f < l.length && l[f] < h; )
        f += 3;
      l.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2]);
    }
  }
  return new ne(e.sort(En), l);
}
function lf(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new Se(i.from + e, i.to + e, i.type));
  }
  return t;
}
function Hg(n, e, t, r, i, o, s) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let d = a.local[u].map(r, i, c);
      d ? t.push(d) : s.onRemove && s.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + o + 1);
  return t;
}
function af(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let o = 0, s; o < n.length; o++)
    (s = n[o]) && s.from > t && s.to < r && ((i || (i = [])).push(s), n[o] = null);
  return i;
}
function cf(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function fo(n, e, t, r) {
  let i = [], o = !1;
  e.forEach((l, a) => {
    let c = af(n, l, a + t);
    if (c) {
      o = !0;
      let u = fo(c, l, t + a + 1, r);
      u != Me && i.push(a, a + l.nodeSize, u);
    }
  });
  let s = lf(o ? cf(n) : n, -t).sort(En);
  for (let l = 0; l < s.length; l++)
    s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
  return s.length || i.length ? new ne(s, i) : Me;
}
function En(n, e) {
  return n.from - e.from || n.to - e.to;
}
function ql(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), bc(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), bc(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function bc(n, e, t) {
  for (; e < n.length && En(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function ws(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != Me && e.push(r);
  }), n.cursorWrapper && e.push(ne.create(n.state.doc, [n.cursorWrapper.deco])), Kt.from(e);
}
const Vg = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Fg = He && nn <= 11;
class $g {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class jg {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new $g(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      He && nn <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Fg && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Vg)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (uc(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Ht(this.view);
      if (He && nn <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && In(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = cr(o))
      t.add(o);
    for (let o = e.anchorNode; o; o = cr(o))
      if (t.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && uc(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let d = this.registerMutation(t[u], a);
        d && (o = o < 0 ? d.from : Math.min(d.from, o), s = s < 0 ? d.to : Math.max(d.to, s), d.typeOver && (l = !0));
      }
    if (ct && a.length) {
      let u = a.filter((d) => d.nodeName == "BR");
      if (u.length == 2) {
        let [d, f] = u;
        d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove();
      } else {
        let { focusNode: d } = this.currentSelection;
        for (let f of u) {
          let h = f.parentNode;
          h && h.nodeName == "LI" && (!d || Ug(e, d) != h) && f.remove();
        }
      }
    }
    let c = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Vo(r) && (c = Vl(e)) && c.eq(z.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Ht(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), _g(e)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Ht(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let d = e.addedNodes[u];
        t.push(d), d.nodeType == 3 && (this.lastChangedTextNode = d);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (He && nn <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: d, nextSibling: f } = e.addedNodes[u];
          (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (i = d), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (o = f);
        }
      let s = i && i.parentNode == e.target ? xe(i) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? xe(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let wc = /* @__PURE__ */ new WeakMap(), vc = !1;
function _g(n) {
  if (!wc.has(n) && (wc.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = ct, vc)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), vc = !0;
  }
}
function kc(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = n.domAtPos(n.state.selection.anchor);
  return In(s.node, s.offset, i, o) && ([t, r, i, o] = [i, o, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: o };
}
function Wg(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return kc(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? kc(n, t) : null;
}
function Ug(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function qg(n, e, t) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], Vo(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), Ee && n.input.lastKeyCode === 8)
    for (let m = o; m > i; m--) {
      let y = r.childNodes[m - 1], w = y.pmViewDesc;
      if (y.nodeName == "BR" && !w) {
        o = m;
        break;
      }
      if (!w || w.size)
        break;
    }
  let d = n.state.doc, f = n.someProp("domParser") || tn.fromSchema(n.state.schema), h = d.resolve(s), p = null, g = f.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Kg,
    context: h
  });
  if (c && c[0].pos != null) {
    let m = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = m), p = { anchor: m + s, head: y + s };
  }
  return { doc: g, sel: p, from: s, to: l };
}
function Kg(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Le && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Le && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Jg = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Gg(n, e, t, r, i) {
  let o = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let A = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, N = Vl(n, A);
    if (N && !n.state.selection.eq(N)) {
      if (Ee && Pt && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (W) => W(n, gn(13, "Enter"))))
        return;
      let B = n.state.tr.setSelection(N);
      A == "pointer" ? B.setMeta("pointer", !0) : A == "key" && B.scrollIntoView(), o && B.setMeta("composition", o), n.dispatch(B);
    }
    return;
  }
  let s = n.state.doc.resolve(e), l = s.sharedDepth(t);
  e = s.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = qg(n, e, t), u = n.state.doc, d = u.slice(c.from, c.to), f, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (f = n.state.selection.to, h = "end") : (f = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = Qg(d.content, c.doc.content, c.from, f, h);
  if (p && n.input.domChangeCount++, (ur && n.input.lastIOSEnter > Date.now() - 225 || Pt) && i.some((A) => A.nodeType == 1 && !Jg.test(A.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (A) => A(n, gn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof I && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let A = xc(n, n.state.doc, c.sel);
        if (A && !A.eq(n.state.selection)) {
          let N = n.state.tr.setSelection(A);
          o && N.setMeta("composition", o), n.dispatch(N);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof I && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), He && nn <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let g = c.doc.resolveNoCache(p.start - c.from), m = c.doc.resolveNoCache(p.endB - c.from), y = u.resolve(p.start), w = g.sameParent(m) && g.parent.inlineContent && y.end() >= p.endA, C;
  if ((ur && n.input.lastIOSEnter > Date.now() - 225 && (!w || i.some((A) => A.nodeName == "DIV" || A.nodeName == "P")) || !w && g.pos < c.doc.content.size && (!g.sameParent(m) || !g.parent.inlineContent) && !/\S/.test(c.doc.textBetween(g.pos, m.pos, "", "")) && (C = z.findFrom(c.doc.resolve(g.pos + 1), 1, !0)) && C.head > g.pos) && n.someProp("handleKeyDown", (A) => A(n, gn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && Xg(u, p.start, p.endA, g, m) && n.someProp("handleKeyDown", (A) => A(n, gn(8, "Backspace")))) {
    Pt && Ee && n.domObserver.suppressSelectionUpdates();
    return;
  }
  Ee && p.endB == p.start && (n.input.lastChromeDelete = Date.now()), Pt && !w && g.start() != m.start() && m.parentOffset == 0 && g.depth == m.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, m = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(A) {
      return A(n, gn(13, "Enter"));
    });
  }, 20));
  let b = p.start, T = p.endA, v = (A) => {
    let N = A || n.state.tr.replace(b, T, c.doc.slice(p.start - c.from, p.endB - c.from));
    if (c.sel) {
      let B = xc(n, N.doc, c.sel);
      B && !(Ee && n.composing && B.empty && (p.start != p.endB || n.input.lastChromeDelete < Date.now() - 100) && (B.head == b || B.head == N.mapping.map(T) - 1) || He && B.empty && B.head == b) && N.setSelection(B);
    }
    return o && N.setMeta("composition", o), N.scrollIntoView();
  }, O;
  if (w) {
    if (g.pos == m.pos) {
      He && nn <= 11 && g.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Ht(n), 20));
      let A = v(n.state.tr.delete(b, T)), N = u.resolve(p.start).marksAcross(u.resolve(p.endA));
      N && A.ensureMarks(N), n.dispatch(A);
    } else if (
      // Adding or removing a mark
      p.endA == p.endB && (O = Yg(g.parent.content.cut(g.parentOffset, m.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))
    ) {
      let A = v(n.state.tr);
      O.type == "add" ? A.addMark(b, T, O.mark) : A.removeMark(b, T, O.mark), n.dispatch(A);
    } else if (g.parent.child(g.index()).isText && g.index() == m.index() - (m.textOffset ? 0 : 1)) {
      let A = g.parent.textBetween(g.parentOffset, m.parentOffset), N = () => v(n.state.tr.insertText(A, b, T));
      n.someProp("handleTextInput", (B) => B(n, b, T, A, N)) || n.dispatch(N());
    }
  } else
    n.dispatch(v());
}
function xc(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : Fl(n, e.resolve(t.anchor), e.resolve(t.head));
}
function Yg(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, o = r, s, l, a;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < t.length; u++)
    o = t[u].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    l = i[0], s = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (i.length == 0 && o.length == 1)
    l = o[0], s = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (S.from(c).eq(n))
    return { mark: l, type: s };
}
function Xg(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    vs(r, !0, !1) < i.pos
  )
    return !1;
  let o = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = o.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = n.resolve(vs(o, !0, !0));
  return !s.parent.isTextblock || s.pos > t || vs(s, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function vs(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let o = n.node(r).maybeChild(n.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function Qg(n, e, t, r, i) {
  let o = n.findDiffStart(e, t);
  if (o == null)
    return null;
  let { a: s, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, o - Math.min(s, l));
    r -= s + a - o;
  }
  if (s < o && n.size < e.size) {
    let a = r <= o && r >= s ? o - r : 0;
    o -= a, o && o < e.size && Cc(e.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), l = o + (l - s), s = o;
  } else if (l < o) {
    let a = r <= o && r >= l ? o - r : 0;
    o -= a, o && o < n.size && Cc(n.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), s = o + (s - l), l = o;
  }
  return { start: o, endA: s, endB: l };
}
function Cc(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class uf {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new yg(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Ec), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Mc(this), Tc(this), this.nodeViews = Ac(this), this.docView = ic(this.state.doc, Sc(this), ws(this), this.dom, this), this.domObserver = new jg(this, (r, i, o, s) => Gg(this, r, i, o, s)), this.domObserver.start(), bg(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && nl(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Ec), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (nf(this), s = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = Ac(this);
      e1(h, this.nodeViews) && (this.nodeViews = h, o = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && nl(this), this.editable = Mc(this), Tc(this);
    let a = ws(this), c = Sc(this), u = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", d = o || !this.docView.matchesNode(e.doc, c, a);
    (d || !e.selection.eq(i.selection)) && (s = !0);
    let f = u == "preserve" && s && this.dom.style.overflowAnchor == null && Dm(this);
    if (s) {
      this.domObserver.stop();
      let h = d && (He || Ee) && !this.composing && !i.selection.empty && !e.selection.empty && Zg(i.selection, e.selection);
      if (d) {
        let p = Ee ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = Rg(this)), (o || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = ic(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && ng(this)) ? Ht(this, h) : (Wd(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : f && Lm(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof P) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Qa(this, t.getBoundingClientRect(), e);
      } else
        Qa(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - t.doc.content.size);
      (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new of(e.slice, e.move, i < 0 ? void 0 : P.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let l = o[s].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (He) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && Im(this.dom), Ht(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return Vm(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return Bd(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return Wm(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Jr(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Jr(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return $l(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (wg(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], ws(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, km());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return kg(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Le && this.root.nodeType === 11 && Mm(this.dom.ownerDocument) == this.dom && Wg(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
uf.prototype.dispatch = function(n) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, n) : this.updateState(this.state.apply(n));
};
function Sc(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [Se.node(0, n.state.doc.content.size, e)];
}
function Tc(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Se.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Mc(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Zg(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Ac(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function e1(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Ec(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var sn = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, ho = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, t1 = typeof navigator < "u" && /Mac/.test(navigator.platform), n1 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ce = 0; Ce < 10; Ce++) sn[48 + Ce] = sn[96 + Ce] = String(Ce);
for (var Ce = 1; Ce <= 24; Ce++) sn[Ce + 111] = "F" + Ce;
for (var Ce = 65; Ce <= 90; Ce++)
  sn[Ce] = String.fromCharCode(Ce + 32), ho[Ce] = String.fromCharCode(Ce);
for (var ks in sn) ho.hasOwnProperty(ks) || (ho[ks] = sn[ks]);
function r1(n) {
  var e = t1 && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || n1 && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? ho : sn)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const i1 = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function o1(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      i1 ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), s && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function s1(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[o1(t)] = n[t];
  return e;
}
function xs(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function l1(n) {
  return new Z({ props: { handleKeyDown: Kl(n) } });
}
function Kl(n) {
  let e = s1(n);
  return function(t, r) {
    let i = r1(r), o, s = e[xs(i, r)];
    if (s && s(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[xs(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = sn[r.keyCode]) && o != i) {
        let l = e[xs(o, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const Jl = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function df(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const ff = (n, e, t) => {
  let r = df(n, t);
  if (!r)
    return !1;
  let i = Gl(r);
  if (!i) {
    let s = r.blockRange(), l = s && yr(s);
    return l == null ? !1 : (e && e(n.tr.lift(s, l).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (kf(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (dr(o, "end") || P.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let l = zo(n.doc, r.before(s), r.after(s), E.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(dr(o, "end") ? z.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : P.create(a.doc, i.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, a1 = (n, e, t) => {
  let r = df(n, t);
  if (!r)
    return !1;
  let i = Gl(r);
  return i ? hf(n, i, e) : !1;
}, c1 = (n, e, t) => {
  let r = mf(n, t);
  if (!r)
    return !1;
  let i = Yl(r);
  return i ? hf(n, i, e) : !1;
};
function hf(n, e, t) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let u = i.lastChild;
    if (!u)
      return !1;
    i = u;
  }
  let s = e.nodeAfter, l = s, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = zo(n.doc, o, a, E.empty);
  if (!c || c.from != o || c instanceof he && c.slice.size >= a - o)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(I.create(u.doc, o)), t(u.scrollIntoView());
  }
  return !0;
}
function dr(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const pf = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    o = Gl(r);
  }
  let s = o && o.nodeBefore;
  return !s || !P.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(P.create(n.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function Gl(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function mf(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const gf = (n, e, t) => {
  let r = mf(n, t);
  if (!r)
    return !1;
  let i = Yl(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (kf(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (dr(o, "start") || P.isSelectable(o))) {
    let s = zo(n.doc, r.before(), r.after(), E.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = n.tr.step(s);
        l.setSelection(dr(o, "start") ? z.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : P.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, yf = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    o = Yl(r);
  }
  let s = o && o.nodeAfter;
  return !s || !P.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(P.create(n.doc, o.pos)).scrollIntoView()), !0);
};
function Yl(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const u1 = (n, e) => {
  let t = n.selection, r = t instanceof P, i;
  if (r) {
    if (t.node.isTextblock || !an(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Bo(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = n.tr.join(i);
    r && o.setSelection(P.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, d1 = (n, e) => {
  let t = n.selection, r;
  if (t instanceof P) {
    if (t.node.isTextblock || !an(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Bo(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, f1 = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && yr(i);
  return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, bf = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function Xl(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const h1 = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), s = Xl(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection(z.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, wf = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof Ke || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = Xl(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(s, o.createAndFill());
    l.setSelection(I.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, vf = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let o = t.before();
    if (zt(n.doc, o))
      return e && e(n.tr.split(o).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && yr(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
};
function p1(n) {
  return (e, t) => {
    let { $from: r, $to: i } = e.selection;
    if (e.selection instanceof P && e.selection.node.isBlock)
      return !r.parentOffset || !zt(e.doc, r.pos) ? !1 : (t && t(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], s, l, a = !1, c = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        a = r.end(h) == r.pos + (r.depth - h), c = r.start(h) == r.pos - (r.depth - h), l = Xl(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(a && l ? { type: l } : null), s = h;
        break;
      } else {
        if (h == 1)
          return !1;
        o.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof I || e.selection instanceof Ke) && u.deleteSelection();
    let d = u.mapping.map(r.pos), f = zt(u.doc, d, o.length, o);
    if (f || (o[0] = l ? { type: l } : null, f = zt(u.doc, d, o.length, o)), !f)
      return !1;
    if (u.split(d, o.length, o), !a && c && r.node(s).type != l) {
      let h = u.mapping.map(r.before(s)), p = u.doc.resolve(h);
      l && r.node(s - 1).canReplaceWith(p.index(), p.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(s)), l);
    }
    return t && t(u.scrollIntoView()), !0;
  };
}
const m1 = p1(), g1 = (n, e) => {
  let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
  return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(P.create(n.doc, i))), !0);
};
function y1(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || an(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function kf(n, e, t, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, l, a = i.type.spec.isolating || o.type.spec.isolating;
  if (!a && y1(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (l = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && l.matchType(s[0] || o.type).validEnd) {
    if (t) {
      let h = e.pos + o.nodeSize, p = S.empty;
      for (let y = s.length - 1; y >= 0; y--)
        p = S.from(s[y].create(null, p));
      p = S.from(i.copy(p));
      let g = n.tr.step(new be(e.pos - 1, h, e.pos, h, new E(p, 1, 0), s.length, !0)), m = g.doc.resolve(h + 2 * s.length);
      m.nodeAfter && m.nodeAfter.type == i.type && an(g.doc, m.pos) && g.join(m.pos), t(g.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && a ? null : z.findFrom(e, 1), d = u && u.$from.blockRange(u.$to), f = d && yr(d);
  if (f != null && f >= e.depth)
    return t && t(n.tr.lift(d, f).scrollIntoView()), !0;
  if (c && dr(o, "start", !0) && dr(i, "end")) {
    let h = i, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = o, m = 1;
    for (; !g.isTextblock; g = g.firstChild)
      m++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (t) {
        let y = S.empty;
        for (let C = p.length - 1; C >= 0; C--)
          y = S.from(p[C].copy(y));
        let w = n.tr.step(new be(e.pos - p.length, e.pos + o.nodeSize, e.pos + m, e.pos + o.nodeSize - m, new E(y, p.length, 0), 0, !0));
        t(w.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function xf(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(I.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const b1 = xf(-1), w1 = xf(1);
function v1(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = s && Pl(s, n, e);
    return l ? (r && r(t.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function Oc(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let o = 0; o < t.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: l } } = t.selection.ranges[o];
      t.doc.nodesBetween(s, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let u = t.doc.resolve(c), d = u.index();
            i = u.parent.canReplaceWith(d, d + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = t.tr;
      for (let s = 0; s < t.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[s];
        o.setBlockType(l, a, n, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
function Ql(...n) {
  return function(e, t, r) {
    for (let i = 0; i < n.length; i++)
      if (n[i](e, t, r))
        return !0;
    return !1;
  };
}
Ql(Jl, ff, pf);
Ql(Jl, gf, yf);
Ql(bf, wf, vf, m1);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function k1(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o);
    if (!s)
      return !1;
    let l = r ? t.tr : null;
    return x1(l, s, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function x1(n, e, t, r = null) {
  let i = !1, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = s.resolve(e.start - 2);
    o = new oo(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new oo(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = Pl(o, t, r, e);
  return l ? (n && C1(n, e, l, i, t), !0) : !1;
}
function C1(n, e, t, r, i) {
  let o = S.empty;
  for (let u = t.length - 1; u >= 0; u--)
    o = S.from(t[u].type.create(t[u].attrs, o));
  n.step(new be(e.start - (r ? 2 : 0), e.end, e.start, e.end, new E(o, 0, 0), t.length, !0));
  let s = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (s = u + 1);
  let l = t.length - s, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && zt(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function S1(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == n);
    return o ? t ? r.node(o.depth - 1).type == n ? T1(e, t, n, o) : M1(e, t, o) : !0 : !1;
  };
}
function T1(n, e, t, r) {
  let i = n.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new be(o - 1, s, o, s, new E(S.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new oo(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const l = yr(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.doc.resolve(i.mapping.map(o, -1) - 1);
  return an(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
}
function M1(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, g = t.startIndex; p > g; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(t.start), s = o.nodeAfter;
  if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = o.node(-1), u = o.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, s.content.append(a ? S.empty : S.from(i))))
    return !1;
  let d = o.pos, f = d + s.nodeSize;
  return r.step(new be(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new E((l ? S.empty : S.from(i.copy(S.empty))).append(a ? S.empty : S.from(i.copy(S.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function A1(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let l = o.parent, a = l.child(s - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = S.from(c ? n.create() : null), d = new E(S.from(n.create(null, S.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = o.start, h = o.end;
      t(e.tr.step(new be(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function jo(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: o } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, o = t.storedMarks, t;
    }
  };
}
class _o {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: o } = r, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => {
      const d = a(...u)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = [], a = !!e, c = e || o.tr, u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(c), l.every((f) => f === !0)), d = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...g) => {
        const m = this.buildProps(c, t), y = h(...g)(m);
        return l.push(y), d;
      }])),
      run: u
    };
    return d;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, o = e || r.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...s, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = {
      tr: e,
      editor: i,
      view: s,
      state: jo({
        state: o,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]));
      }
    };
    return l;
  }
}
class E1 {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  once(e, t) {
    const r = (...i) => {
      this.off(e, r), t.apply(this, i);
    };
    return this.on(e, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function R(n, e, t) {
  return n.config[e] === void 0 && n.parent ? R(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? R(n.parent, e, t) : null
  }) : n.config[e];
}
function Wo(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function Cf(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = Wo(n), i = [...t, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: i
    }, a = R(s, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((d) => {
        Object.entries(u.attributes).forEach(([f, h]) => {
          e.push({
            type: d,
            name: f,
            attribute: {
              ...o,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, a = R(s, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, d]) => {
      const f = {
        ...o,
        ...d
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: s.name,
        name: u,
        attribute: f
      });
    });
  }), e;
}
function ve(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function K(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const l = o ? String(o).split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[i] = [...a, ...c].join(" ");
      } else if (i === "style") {
        const l = o ? o.split(";").map((u) => u.trim()).filter(Boolean) : [], a = r[i] ? r[i].split(";").map((u) => u.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), l.forEach((u) => {
          const [d, f] = u.split(":").map((h) => h.trim());
          c.set(d, f);
        }), r[i] = Array.from(c.entries()).map(([u, d]) => `${u}: ${d}`).join("; ");
      } else
        r[i] = o;
    }), r;
  }, {});
}
function rl(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => K(t, r), {});
}
function Sf(n) {
  return typeof n == "function";
}
function V(n, e = void 0, ...t) {
  return Sf(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function O1(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function N1(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function Nc(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const l = s.attribute.parseHTML ? s.attribute.parseHTML(t) : N1(t.getAttribute(s.name));
        return l == null ? o : {
          ...o,
          [s.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Rc(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && O1(t) ? !1 : t != null)
  );
}
function R1(n, e) {
  var t;
  const r = Cf(n), { nodeExtensions: i, markExtensions: o } = Wo(n), s = (t = i.find((c) => R(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const u = r.filter((y) => y.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((y, w) => {
      const C = R(w, "extendNodeSchema", d);
      return {
        ...y,
        ...C ? C(c) : {}
      };
    }, {}), h = Rc({
      ...f,
      content: V(R(c, "content", d)),
      marks: V(R(c, "marks", d)),
      group: V(R(c, "group", d)),
      inline: V(R(c, "inline", d)),
      atom: V(R(c, "atom", d)),
      selectable: V(R(c, "selectable", d)),
      draggable: V(R(c, "draggable", d)),
      code: V(R(c, "code", d)),
      whitespace: V(R(c, "whitespace", d)),
      linebreakReplacement: V(R(c, "linebreakReplacement", d)),
      defining: V(R(c, "defining", d)),
      isolating: V(R(c, "isolating", d)),
      attrs: Object.fromEntries(u.map((y) => {
        var w;
        return [y.name, { default: (w = y == null ? void 0 : y.attribute) === null || w === void 0 ? void 0 : w.default }];
      }))
    }), p = V(R(c, "parseHTML", d));
    p && (h.parseDOM = p.map((y) => Nc(y, u)));
    const g = R(c, "renderHTML", d);
    g && (h.toDOM = (y) => g({
      node: y,
      HTMLAttributes: rl(y, u)
    }));
    const m = R(c, "renderText", d);
    return m && (h.toText = m), [c.name, h];
  })), a = Object.fromEntries(o.map((c) => {
    const u = r.filter((m) => m.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((m, y) => {
      const w = R(y, "extendMarkSchema", d);
      return {
        ...m,
        ...w ? w(c) : {}
      };
    }, {}), h = Rc({
      ...f,
      inclusive: V(R(c, "inclusive", d)),
      excludes: V(R(c, "excludes", d)),
      group: V(R(c, "group", d)),
      spanning: V(R(c, "spanning", d)),
      code: V(R(c, "code", d)),
      attrs: Object.fromEntries(u.map((m) => {
        var y;
        return [m.name, { default: (y = m == null ? void 0 : m.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), p = V(R(c, "parseHTML", d));
    p && (h.parseDOM = p.map((m) => Nc(m, u)));
    const g = R(c, "renderHTML", d);
    return g && (h.toDOM = (m) => g({
      mark: m,
      HTMLAttributes: rl(m, u)
    })), [c.name, h];
  }));
  return new dd({
    topNode: s,
    nodes: l,
    marks: a
  });
}
function Cs(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Dc(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function Zl(n, e) {
  const t = Fn.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
const D1 = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, l) => {
    var a, c;
    const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: o,
      parent: s,
      index: l
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? u : u.slice(0, Math.max(0, r - o));
  }), t;
};
function ea(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class Uo {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const L1 = (n, e) => {
  if (ea(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Oi(n) {
  var e;
  const { editor: t, from: r, to: i, text: o, rules: s, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let u = !1;
  const d = D1(c) + o;
  return s.forEach((f) => {
    if (u)
      return;
    const h = L1(d, f.find);
    if (!h)
      return;
    const p = a.state.tr, g = jo({
      state: a.state,
      transaction: p
    }), m = {
      from: r - (h[0].length - o.length),
      to: i
    }, { commands: y, chain: w, can: C } = new _o({
      editor: t,
      state: g
    });
    f.handler({
      state: g,
      range: m,
      match: h,
      commands: y,
      chain: w,
      can: C
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: o
    }), a.dispatch(p), u = !0);
  }), u;
}
function I1(n) {
  const { editor: e, rules: t } = n, r = new Z({
    state: {
      init() {
        return null;
      },
      apply(i, o, s) {
        const l = i.getMeta(r);
        if (l)
          return l;
        const a = i.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: u } = a;
          typeof u == "string" ? u = u : u = Zl(S.from(u), s.schema);
          const { from: d } = a, f = d + u.length;
          Oi({
            editor: e,
            from: d,
            to: f,
            text: u,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(i, o, s, l) {
        return Oi({
          editor: e,
          from: o,
          to: s,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && Oi({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? Oi({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function P1(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Ni(n) {
  return P1(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function qo(n, e) {
  const t = { ...n };
  return Ni(n) && Ni(e) && Object.keys(e).forEach((r) => {
    Ni(e[r]) && Ni(n[r]) ? t[r] = qo(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class _e {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = V(R(this, "addOptions", {
      name: this.name
    }))), this.storage = V(R(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new _e(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => qo(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new _e(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = V(R(t, "addOptions", {
      name: t.name
    })), t.storage = V(R(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = s.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
function B1(n) {
  return typeof n == "number";
}
class Tf {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const z1 = (n, e, t) => {
  if (ea(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const o = [i.text];
    return o.index = i.index, o.input = n, o.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(i.replaceWith)), o;
  }) : [];
};
function H1(n) {
  const { editor: e, state: t, from: r, to: i, rule: o, pasteEvent: s, dropEvent: l } = n, { commands: a, chain: c, can: u } = new _o({
    editor: e,
    state: t
  }), d = [];
  return t.doc.nodesBetween(r, i, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const g = Math.max(r, p), m = Math.min(i, p + h.content.size), y = h.textBetween(g - p, m - p, void 0, "￼");
    z1(y, o.find, s).forEach((C) => {
      if (C.index === void 0)
        return;
      const b = g + C.index + 1, T = b + C[0].length, v = {
        from: t.tr.mapping.map(b),
        to: t.tr.mapping.map(T)
      }, O = o.handler({
        state: t,
        range: v,
        match: C,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: s,
        dropEvent: l
      });
      d.push(O);
    });
  }), d.every((h) => h !== null);
}
let Ri = null;
const V1 = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function F1(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, o = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({ state: u, from: d, to: f, rule: h, pasteEvt: p }) => {
    const g = u.tr, m = jo({
      state: u,
      transaction: g
    });
    if (!(!H1({
      editor: e,
      state: m,
      from: Math.max(d - 1, 0),
      to: f.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !g.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, g;
    }
  };
  return t.map((u) => new Z({
    // we register a global drag handler to track the current drag source element
    view(d) {
      const f = (p) => {
        var g;
        r = !((g = d.dom.parentElement) === null || g === void 0) && g.contains(p.target) ? d.dom.parentElement : null, r && (Ri = e);
      }, h = () => {
        Ri && (Ri = null);
      };
      return window.addEventListener("dragstart", f), window.addEventListener("dragend", h), {
        destroy() {
          window.removeEventListener("dragstart", f), window.removeEventListener("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (d, f) => {
          if (o = r === d.dom.parentElement, l = f, !o) {
            const h = Ri;
            h && setTimeout(() => {
              const p = h.state.selection;
              p && h.commands.deleteRange({ from: p.from, to: p.to });
            }, 10);
          }
          return !1;
        },
        paste: (d, f) => {
          var h;
          const p = (h = f.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
          return s = f, i = !!(p != null && p.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (d, f, h) => {
      const p = d[0], g = p.getMeta("uiEvent") === "paste" && !i, m = p.getMeta("uiEvent") === "drop" && !o, y = p.getMeta("applyPasteRules"), w = !!y;
      if (!g && !m && !w)
        return;
      if (w) {
        let { text: T } = y;
        typeof T == "string" ? T = T : T = Zl(S.from(T), h.schema);
        const { from: v } = y, O = v + T.length, A = V1(T);
        return a({
          rule: u,
          state: h,
          from: v,
          to: { b: O },
          pasteEvt: A
        });
      }
      const C = f.doc.content.findDiffStart(h.doc.content), b = f.doc.content.findDiffEnd(h.doc.content);
      if (!(!B1(C) || !b || C === b.b))
        return a({
          rule: u,
          state: h,
          from: C,
          to: b,
          pasteEvt: s
        });
    }
  }));
}
function $1(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
class nr {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = nr.resolve(e), this.schema = R1(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = nr.sort(nr.flatten(e)), r = $1(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = R(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, i) => {
      const o = R(r, "priority") || 100, s = R(i, "priority") || 100;
      return o > s ? -1 : o < s ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: Cs(t.name, this.schema)
      }, i = R(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = nr.sort([...this.extensions].reverse()), r = [], i = [], o = t.map((s) => {
      const l = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e,
        type: Cs(s.name, this.schema)
      }, a = [], c = R(s, "addKeyboardShortcuts", l);
      let u = {};
      if (s.type === "mark" && R(s, "exitable", l) && (u.ArrowRight = () => _e.handleExit({ editor: e, mark: s })), c) {
        const g = Object.fromEntries(Object.entries(c()).map(([m, y]) => [m, () => y({ editor: e })]));
        u = { ...u, ...g };
      }
      const d = l1(u);
      a.push(d);
      const f = R(s, "addInputRules", l);
      Dc(s, e.options.enableInputRules) && f && r.push(...f());
      const h = R(s, "addPasteRules", l);
      Dc(s, e.options.enablePasteRules) && h && i.push(...h());
      const p = R(s, "addProseMirrorPlugins", l);
      if (p) {
        const g = p();
        a.push(...g);
      }
      return a;
    }).flat();
    return [
      I1({
        editor: e,
        rules: r
      }),
      ...F1({
        editor: e,
        rules: i
      }),
      ...o
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Cf(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Wo(this.extensions);
    return Object.fromEntries(t.filter((r) => !!R(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: ve(r.name, this.schema)
      }, s = R(r, "addNodeView", o);
      if (!s)
        return [];
      const l = (a, c, u, d, f) => {
        const h = rl(a, i);
        return s()({
          // pass-through
          node: a,
          view: c,
          getPos: u,
          decorations: d,
          innerDecorations: f,
          // tiptap-specific
          editor: e,
          extension: r,
          HTMLAttributes: h
        });
      };
      return [r.name, l];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: Cs(e.name, this.schema)
      };
      e.type === "mark" && (!((t = V(R(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const i = R(e, "onBeforeCreate", r), o = R(e, "onCreate", r), s = R(e, "onUpdate", r), l = R(e, "onSelectionUpdate", r), a = R(e, "onTransaction", r), c = R(e, "onFocus", r), u = R(e, "onBlur", r), d = R(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), o && this.editor.on("create", o), s && this.editor.on("update", s), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), d && this.editor.on("destroy", d);
    });
  }
}
class re {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = V(R(this, "addOptions", {
      name: this.name
    }))), this.storage = V(R(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new re(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => qo(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new re({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = V(R(t, "addOptions", {
      name: t.name
    })), t.storage = V(R(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Mf(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (a, c, u, d) => {
    var f;
    a.isBlock && c > r && (l += o);
    const h = s == null ? void 0 : s[a.type.name];
    if (h)
      return u && (l += h({
        node: a,
        pos: c,
        parent: u,
        index: d,
        range: e
      })), !1;
    a.isText && (l += (f = a == null ? void 0 : a.text) === null || f === void 0 ? void 0 : f.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function Af(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const j1 = re.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new ce("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((u) => u.$from.pos)), l = Math.max(...o.map((u) => u.$to.pos)), a = Af(t);
            return Mf(r, { from: s, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), _1 = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), W1 = (n = !1) => ({ commands: e }) => e.setContent("", n), U1 = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: o, $to: s }) => {
    n.doc.nodesBetween(o.pos, s.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const p = yr(h);
      if (l.type.isTextblock) {
        const { defaultType: g } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, g);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, q1 = (n) => (e) => n(e), K1 = () => ({ state: n, dispatch: e }) => wf(n, e), J1 = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, o = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new I(r.doc.resolve(s - 1))), !0;
}, G1 = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const l = i.before(o), a = i.after(o);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Y1 = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = ve(n, t.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const a = o.before(s), c = o.after(s);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, X1 = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, Q1 = () => ({ state: n, dispatch: e }) => Jl(n, e), Z1 = () => ({ commands: n }) => n.keyboardShortcut("Enter"), e0 = () => ({ state: n, dispatch: e }) => h1(n, e);
function po(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : ea(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Ef(n, e, t = {}) {
  return n.find((r) => r.type === e && po(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, r.attrs[i]])),
    t
  ));
}
function Lc(n, e, t = {}) {
  return !!Ef(n, e, t);
}
function ta(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let i = n.parent.childAfter(n.parentOffset);
  if ((!i.node || !i.node.marks.some((u) => u.type === e)) && (i = n.parent.childBefore(n.parentOffset)), !i.node || !i.node.marks.some((u) => u.type === e) || (t = t || ((r = i.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !Ef([...i.node.marks], e, t)))
    return;
  let s = i.index, l = n.start() + i.offset, a = s + 1, c = l + i.node.nodeSize;
  for (; s > 0 && Lc([...n.parent.child(s - 1).marks], e, t); )
    s -= 1, l -= n.parent.child(s).nodeSize;
  for (; a < n.parent.childCount && Lc([...n.parent.child(a).marks], e, t); )
    c += n.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function un(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const t0 = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const o = un(n, r.schema), { doc: s, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const d = ta(a, o, e);
    if (d && d.from <= c && d.to >= u) {
      const f = I.create(s, d.from, d.to);
      t.setSelection(f);
    }
  }
  return !0;
}, n0 = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function na(n) {
  return n instanceof I;
}
function Bt(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Of(n, e = null) {
  if (!e)
    return null;
  const t = z.atStart(n), r = z.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, o = r.to;
  return e === "all" ? I.create(n, Bt(0, i, o), Bt(n.content.size, i, o)) : I.create(n, Bt(e, i, o), Bt(e, i, o));
}
function r0() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function ra() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const i0 = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    (ra() || r0()) && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (o && n === null && !na(t.state.selection))
    return s(), !0;
  const l = Of(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return o && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, o0 = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), s0 = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), Nf = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && Nf(r);
  }
  return n;
};
function Di(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return Nf(t);
}
function Yr(n, e, t) {
  if (n instanceof en || n instanceof S)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return S.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const s = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && s.check(), s;
    } catch (o) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", o), Yr("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let s = !1, l = "";
      const a = new dd({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (s = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? tn.fromSchema(a).parseSlice(Di(n), t.parseOptions) : tn.fromSchema(a).parse(Di(n), t.parseOptions), t.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    }
    const o = tn.fromSchema(e);
    return t.slice ? o.parseSlice(Di(n), t.parseOptions).content : o.parse(Di(n), t.parseOptions);
  }
  return Yr("", e, t);
}
function l0(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof he || i instanceof be))
    return;
  const o = n.mapping.maps[r];
  let s = 0;
  o.forEach((l, a, c, u) => {
    s === 0 && (s = u);
  }), n.setSelection(z.near(n.doc.resolve(s), t));
}
const a0 = (n) => !("type" in n), c0 = (n, e, t) => ({ tr: r, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    t = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    const a = (m) => {
      o.emit("contentError", {
        editor: o,
        error: m,
        disableCollaboration: () => {
          o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
      try {
        Yr(e, o.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (m) {
        a(m);
      }
    try {
      l = Yr(e, o.schema, {
        parseOptions: c,
        errorOnInvalidContent: (s = t.errorOnInvalidContent) !== null && s !== void 0 ? s : o.options.enableContentCheck
      });
    } catch (m) {
      return a(m), !1;
    }
    let { from: u, to: d } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, f = !0, h = !0;
    if ((a0(l) ? l : [l]).forEach((m) => {
      m.check(), f = f ? m.isText && m.marks.length === 0 : !1, h = h ? m.isBlock : !1;
    }), u === d && h) {
      const { parent: m } = r.doc.resolve(u);
      m.isTextblock && !m.type.spec.code && !m.childCount && (u -= 1, d += 1);
    }
    let g;
    if (f) {
      if (Array.isArray(e))
        g = e.map((m) => m.text || "").join("");
      else if (e instanceof S) {
        let m = "";
        e.forEach((y) => {
          y.text && (m += y.text);
        }), g = m;
      } else typeof e == "object" && e && e.text ? g = e.text : g = e;
      r.insertText(g, u, d);
    } else
      g = l, r.replaceWith(u, d, g);
    t.updateSelection && l0(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, u0 = () => ({ state: n, dispatch: e }) => u1(n, e), d0 = () => ({ state: n, dispatch: e }) => d1(n, e), f0 = () => ({ state: n, dispatch: e }) => ff(n, e), h0 = () => ({ state: n, dispatch: e }) => gf(n, e), p0 = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Bo(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, m0 = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Bo(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, g0 = () => ({ state: n, dispatch: e }) => a1(n, e), y0 = () => ({ state: n, dispatch: e }) => c1(n, e);
function Rf() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function b0(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      ra() || Rf() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), s && (t = `Meta-${t}`), o && (t = `Shift-${t}`), t;
}
const w0 = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const o = b0(n).split(/-(?!$)/), s = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
};
function Xr(n, e, t = {}) {
  const { from: r, to: i, empty: o } = n.selection, s = e ? ve(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (d, f) => {
    if (d.isText)
      return;
    const h = Math.max(r, f), p = Math.min(i, f + d.nodeSize);
    l.push({
      node: d,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((d) => s ? s.name === d.node.type.name : !0).filter((d) => po(d.node.attrs, t, { strict: !1 }));
  return o ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
const v0 = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = ve(n, t.schema);
  return Xr(t, i, e) ? f1(t, r) : !1;
}, k0 = () => ({ state: n, dispatch: e }) => vf(n, e), x0 = (n) => ({ state: e, dispatch: t }) => {
  const r = ve(n, e.schema);
  return S1(r)(e, t);
}, C0 = () => ({ state: n, dispatch: e }) => bf(n, e);
function Ko(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Ic(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const S0 = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = Ko(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = ve(n, r.schema)), l === "mark" && (s = un(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      o && o === c.type && t.setNodeMarkup(u, void 0, Ic(c.attrs, e)), s && c.marks.length && c.marks.forEach((d) => {
        s === d.type && t.addMark(u, u + c.nodeSize, s.create(Ic(d.attrs, e)));
      });
    });
  }), !0) : !1;
}, T0 = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), M0 = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new Ke(n.doc);
    n.setSelection(t);
  }
  return !0;
}, A0 = () => ({ state: n, dispatch: e }) => pf(n, e), E0 = () => ({ state: n, dispatch: e }) => yf(n, e), O0 = () => ({ state: n, dispatch: e }) => g1(n, e), N0 = () => ({ state: n, dispatch: e }) => w1(n, e), R0 = () => ({ state: n, dispatch: e }) => b1(n, e);
function il(n, e, t = {}, r = {}) {
  return Yr(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const D0 = (n, e = !1, t = {}, r = {}) => ({ editor: i, tr: o, dispatch: s, commands: l }) => {
  var a, c;
  const { doc: u } = o;
  if (t.preserveWhitespace !== "full") {
    const d = il(n, i.schema, t, {
      errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : i.options.enableContentCheck
    });
    return s && o.replaceWith(0, u.content.size, d).setMeta("preventUpdate", !e), !0;
  }
  return s && o.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: u.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : i.options.enableContentCheck
  });
};
function Jo(n, e) {
  const t = un(e, n.schema), { from: r, to: i, empty: o } = n.selection, s = [];
  o ? (n.storedMarks && s.push(...n.storedMarks), s.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    s.push(...a.marks);
  });
  const l = s.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function L0(n, e) {
  const t = new Bl(n);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
function I0(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function P0(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (i, o) => {
    t(i) && r.push({
      node: i,
      pos: o
    });
  }), r;
}
function Df(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function ia(n) {
  return (e) => Df(e.$from, n);
}
function B0(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return Mf(n, t, e);
}
function z0(n, e) {
  const t = ve(e, n.schema), { from: r, to: i } = n.selection, o = [];
  n.doc.nodesBetween(r, i, (l) => {
    o.push(l);
  });
  const s = o.reverse().find((l) => l.type.name === t.name);
  return s ? { ...s.attrs } : {};
}
function Lf(n, e) {
  const t = Ko(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? z0(n, e) : t === "mark" ? Jo(n, e) : {};
}
function H0(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function V0(n) {
  const e = H0(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((o, s) => s !== r).some((o) => t.oldRange.from >= o.oldRange.from && t.oldRange.to <= o.oldRange.to && t.newRange.from >= o.newRange.from && t.newRange.to <= o.newRange.to));
}
function F0(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((i, o) => {
    const s = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        s.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[o];
      if (l === void 0 || a === void 0)
        return;
      s.push({ from: l, to: a });
    }
    s.forEach(({ from: l, to: a }) => {
      const c = e.slice(o).map(l, -1), u = e.slice(o).map(a), d = e.invert().map(c, -1), f = e.invert().map(u);
      r.push({
        oldRange: {
          from: d,
          to: f
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), V0(r);
}
function oa(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const o = t.resolve(n), s = ta(o, i.type);
    s && r.push({
      mark: i,
      ...s
    });
  }) : t.nodesBetween(n, e, (i, o) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((s) => ({
      from: o,
      to: o + i.nodeSize,
      mark: s
    })));
  }), r;
}
function qi(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((o) => o.type === e && o.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function ol(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, o = e ? un(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((d) => o ? o.name === d.type.name : !0).find((d) => po(d.attrs, t, { strict: !1 }));
  let s = 0;
  const l = [];
  if (i.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, p = f.pos;
    n.doc.nodesBetween(h, p, (g, m) => {
      if (!g.isText && !g.marks.length)
        return;
      const y = Math.max(h, m), w = Math.min(p, m + g.nodeSize), C = w - y;
      s += C, l.push(...g.marks.map((b) => ({
        mark: b,
        from: y,
        to: w
      })));
    });
  }), s === 0)
    return !1;
  const a = l.filter((d) => o ? o.name === d.mark.type.name : !0).filter((d) => po(d.mark.attrs, t, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= s;
}
function $0(n, e, t = {}) {
  if (!e)
    return Xr(n, null, t) || ol(n, null, t);
  const r = Ko(e, n.schema);
  return r === "node" ? Xr(n, e, t) : r === "mark" ? ol(n, e, t) : !1;
}
function Pc(n, e) {
  const { nodeExtensions: t } = Wo(e), r = t.find((s) => s.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = V(R(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function sa(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return n.content.forEach((o) => {
      i !== !1 && (sa(o, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function j0(n) {
  return n instanceof P;
}
function If(n, e, t) {
  const i = n.state.doc.content.size, o = Bt(e, 0, i), s = Bt(t, 0, i), l = n.coordsAtPos(o), a = n.coordsAtPos(s, -1), c = Math.min(l.top, a.top), u = Math.max(l.bottom, a.bottom), d = Math.min(l.left, a.left), f = Math.max(l.right, a.right), h = f - d, p = u - c, y = {
    top: c,
    bottom: u,
    left: d,
    right: f,
    width: h,
    height: p,
    x: d,
    y: c
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function _0(n, e, t) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (na(i) && (o = i.$cursor), o) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: s } = i;
  return s.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, d, f) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !f || f.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((g) => g.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const W0 = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: o } = t, { empty: s, ranges: l } = o, a = un(n, r.schema);
  if (i)
    if (s) {
      const c = Jo(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const u = c.$from.pos, d = c.$to.pos;
        r.doc.nodesBetween(u, d, (f, h) => {
          const p = Math.max(h, u), g = Math.min(h + f.nodeSize, d);
          f.marks.find((y) => y.type === a) ? f.marks.forEach((y) => {
            a === y.type && t.addMark(p, g, a.create({
              ...y.attrs,
              ...e
            }));
          }) : t.addMark(p, g, a.create(e));
        });
      });
  return _0(r, t, a);
}, U0 = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), q0 = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const o = ve(n, t.schema);
  let s;
  return t.selection.$anchor.sameParent(t.selection.$head) && (s = t.selection.$anchor.parent.attrs), o.isTextblock ? i().command(({ commands: l }) => Oc(o, { ...s, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => Oc(o, { ...s, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, K0 = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = Bt(n, 0, r.content.size), o = P.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, J0 = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: o } = typeof n == "number" ? { from: n, to: n } : n, s = I.atStart(r).from, l = I.atEnd(r).to, a = Bt(i, s, l), c = Bt(o, s, l), u = I.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, G0 = (n) => ({ state: e, dispatch: t }) => {
  const r = ve(n, e.schema);
  return A1(r)(e, t);
};
function Bc(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const Y0 = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: l, $to: a } = o, c = i.extensionManager.attributes, u = qi(c, l.node().type.name, l.node().attrs);
  if (o instanceof P && o.node.isBlock)
    return !l.parentOffset || !zt(s, l.pos) ? !1 : (r && (n && Bc(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const d = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : I0(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = d && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, p = zt(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && zt(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (p && (o instanceof I && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const g = e.mapping.map(l.before()), m = e.doc.resolve(g);
      l.node(-1).canReplaceWith(m.index(), m.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    n && Bc(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, X0 = (n, e = {}) => ({ tr: t, state: r, dispatch: i, editor: o }) => {
  var s;
  const l = ve(n, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const d = a.node(-1);
  if (d.type !== l)
    return !1;
  const f = o.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let y = S.empty;
      const w = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let A = a.depth - w; A >= a.depth - 3; A -= 1)
        y = S.from(a.node(A).copy(y));
      const C = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3, b = {
        ...qi(f, a.node().type.name, a.node().attrs),
        ...e
      }, T = ((s = l.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(b)) || void 0;
      y = y.append(S.from(l.createAndFill(null, T) || void 0));
      const v = a.before(a.depth - (w - 1));
      t.replace(v, a.after(-C), new E(y, 4 - w, 0));
      let O = -1;
      t.doc.nodesBetween(v, t.doc.content.size, (A, N) => {
        if (O > -1)
          return !1;
        A.isTextblock && A.content.size === 0 && (O = N + 1);
      }), O > -1 && t.setSelection(I.near(t.doc.resolve(O))), t.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? d.contentMatchAt(0).defaultType : null, p = {
    ...qi(f, d.type.name, d.attrs),
    ...e
  }, g = {
    ...qi(f, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const m = h ? [
    { type: l, attrs: p },
    { type: h, attrs: g }
  ] : [{ type: l, attrs: p }];
  if (!zt(t.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: y, storedMarks: w } = r, { splittableMarks: C } = o.extensionManager, b = w || y.$to.parentOffset && y.$from.marks();
    if (t.split(a.pos, 2, m).scrollIntoView(), !b || !i)
      return !0;
    const T = b.filter((v) => C.includes(v.type.name));
    t.ensureMarks(T);
  }
  return !0;
}, Ss = (n, e) => {
  const t = ia((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && an(n.doc, t.pos) && n.join(t.pos), !0;
}, Ts = (n, e) => {
  const t = ia((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && an(n.doc, r) && n.join(r), !0;
}, Q0 = (n, e, t, r = {}) => ({ editor: i, tr: o, state: s, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = i.extensionManager, h = ve(n, s.schema), p = ve(e, s.schema), { selection: g, storedMarks: m } = s, { $from: y, $to: w } = g, C = y.blockRange(w), b = m || g.$to.parentOffset && g.$from.marks();
  if (!C)
    return !1;
  const T = ia((v) => Pc(v.type.name, d))(g);
  if (C.depth >= 1 && T && C.depth - T.depth <= 1) {
    if (T.node.type === h)
      return c.liftListItem(p);
    if (Pc(T.node.type.name, d) && h.validContent(T.node.content) && l)
      return a().command(() => (o.setNodeMarkup(T.pos, h), !0)).command(() => Ss(o, h)).command(() => Ts(o, h)).run();
  }
  return !t || !b || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => Ss(o, h)).command(() => Ts(o, h)).run() : a().command(() => {
    const v = u().wrapInList(h, r), O = b.filter((A) => f.includes(A.type.name));
    return o.ensureMarks(O), v ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => Ss(o, h)).command(() => Ts(o, h)).run();
}, Z0 = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = t, s = un(n, r.schema);
  return ol(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, ey = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const o = ve(n, r.schema), s = ve(e, r.schema), l = Xr(r, o, t);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(s, a) : i.setNode(o, { ...a, ...t });
}, ty = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = ve(n, t.schema);
  return Xr(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, ny = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(n))) {
      if (e) {
        const s = n.tr, l = o.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          s.step(l.steps[a].invert(l.docs[a]));
        if (o.text) {
          const a = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, n.schema.text(o.text, a));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, ry = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((o) => {
    n.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, iy = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: l } = t, a = un(n, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!i)
    return !0;
  if (u && s) {
    let { from: f, to: h } = l;
    const p = (o = c.marks().find((m) => m.type === a)) === null || o === void 0 ? void 0 : o.attrs, g = ta(c, a, p);
    g && (f = g.from, h = g.to), t.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      t.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, oy = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = Ko(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = ve(n, r.schema)), l === "mark" && (s = un(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    let d, f, h, p;
    t.selection.empty ? r.doc.nodesBetween(c, u, (g, m) => {
      o && o === g.type && (h = Math.max(m, c), p = Math.min(m + g.nodeSize, u), d = m, f = g);
    }) : r.doc.nodesBetween(c, u, (g, m) => {
      m < c && o && o === g.type && (h = Math.max(m, c), p = Math.min(m + g.nodeSize, u), d = m, f = g), m >= c && m <= u && (o && o === g.type && t.setNodeMarkup(m, void 0, {
        ...g.attrs,
        ...e
      }), s && g.marks.length && g.marks.forEach((y) => {
        if (s === y.type) {
          const w = Math.max(m, c), C = Math.min(m + g.nodeSize, u);
          t.addMark(w, C, s.create({
            ...y.attrs,
            ...e
          }));
        }
      }));
    }), f && (d !== void 0 && t.setNodeMarkup(d, void 0, {
      ...f.attrs,
      ...e
    }), s && f.marks.length && f.marks.forEach((g) => {
      s === g.type && t.addMark(h, p, s.create({
        ...g.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, sy = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = ve(n, t.schema);
  return v1(i, e)(t, r);
}, ly = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = ve(n, t.schema);
  return k1(i, e)(t, r);
};
var ay = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: _1,
  clearContent: W1,
  clearNodes: U1,
  command: q1,
  createParagraphNear: K1,
  cut: J1,
  deleteCurrentNode: G1,
  deleteNode: Y1,
  deleteRange: X1,
  deleteSelection: Q1,
  enter: Z1,
  exitCode: e0,
  extendMarkRange: t0,
  first: n0,
  focus: i0,
  forEach: o0,
  insertContent: s0,
  insertContentAt: c0,
  joinBackward: f0,
  joinDown: d0,
  joinForward: h0,
  joinItemBackward: p0,
  joinItemForward: m0,
  joinTextblockBackward: g0,
  joinTextblockForward: y0,
  joinUp: u0,
  keyboardShortcut: w0,
  lift: v0,
  liftEmptyBlock: k0,
  liftListItem: x0,
  newlineInCode: C0,
  resetAttributes: S0,
  scrollIntoView: T0,
  selectAll: M0,
  selectNodeBackward: A0,
  selectNodeForward: E0,
  selectParentNode: O0,
  selectTextblockEnd: N0,
  selectTextblockStart: R0,
  setContent: D0,
  setMark: W0,
  setMeta: U0,
  setNode: q0,
  setNodeSelection: K0,
  setTextSelection: J0,
  sinkListItem: G0,
  splitBlock: Y0,
  splitListItem: X0,
  toggleList: Q0,
  toggleMark: Z0,
  toggleNode: ey,
  toggleWrap: ty,
  undoInputRule: ny,
  unsetAllMarks: ry,
  unsetMark: iy,
  updateAttributes: oy,
  wrapIn: sy,
  wrapInList: ly
});
const cy = re.create({
  name: "commands",
  addCommands() {
    return {
      ...ay
    };
  }
}), uy = re.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new ce("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })
    ];
  }
}), dy = re.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new ce("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), fy = new ce("focusEvents"), hy = re.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new Z({
        key: fy,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), py = re.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, p = d.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : d, g = p.parent.type.spec.isolating, m = d.pos - d.parentOffset, y = g && p.parent.childCount === 1 ? m === d.pos : z.atStart(c).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !y || y && d.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return ra() || Rf() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Z({
        key: new ce("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((g) => g.getMeta("composition")))
            return;
          const r = n.some((g) => g.docChanged) && !e.doc.eq(t.doc), i = n.some((g) => g.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: o, from: s, to: l } = e.selection, a = z.atStart(e.doc).from, c = z.atEnd(e.doc).to;
          if (o || !(s === a && l === c) || !sa(t.doc))
            return;
          const f = t.tr, h = jo({
            state: t,
            transaction: f
          }), { commands: p } = new _o({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), my = re.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new ce("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), gy = re.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new ce("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class yn {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new yn(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new yn(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new yn(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, o = t.isAtom && !t.isText, s = this.pos + r + (o ? 0 : 1);
      if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2)
        return;
      const l = this.resolvedPos.doc.resolve(s);
      if (!i && l.depth <= this.depth)
        return;
      const a = new yn(l, this.editor, i, i ? t : null);
      i && (a.actualDepth = this.depth + 1), e.push(new yn(l, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const o = i.node.attrs, s = Object.keys(t);
          for (let l = 0; l < s.length; l += 1) {
            const a = s[l];
            if (o[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const o = Object.keys(t);
    return this.children.forEach((s) => {
      r && i.length > 0 || (s.node.type.name === e && o.every((a) => t[a] === s.node.attrs[a]) && i.push(s), !(r && i.length > 0) && (i = i.concat(s.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}
const yy = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function by(n, e, t) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
let wy = class extends E1 {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: r, moved: i }) => this.options.onDrop(t, r, i)), this.on("paste", ({ event: t, slice: r }) => this.options.onPaste(t, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = by(yy, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, t) {
    const r = Sf(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let r = t;
    if ([].concat(e).forEach((o) => {
      const s = typeof o == "string" ? `${o}$` : o.key;
      r = r.filter((l) => !l.key.startsWith(s));
    }), t.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      dy,
      j1.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      cy,
      hy,
      py,
      gy,
      uy,
      my
    ].filter((o) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[o.name] !== !1 : !0) : [], ...this.options.extensions].filter((o) => ["extension", "node", "mark"].includes(o == null ? void 0 : o.type));
    this.extensionManager = new nr(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new _o({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var e;
    let t;
    try {
      t = il(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (s) {
      if (!(s instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(s.message))
        throw s;
      this.emit("contentError", {
        editor: this,
        error: s,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((l) => l.name !== "collaboration"), this.createExtensionManager();
        }
      }), t = il(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = Of(t, this.options.autofocus);
    this.view = new uf(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: tr.create({
        doc: t,
        selection: r || void 0
      })
    });
    const i = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(i), this.createNodeViews(), this.prependClass();
    const o = this.view.dom;
    o.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((s) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(s);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), o = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return Lf(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return $0(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Zl(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return B0(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...Af(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return sa(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const e = this.view.dom;
      e && e.editor && delete e.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new yn(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function Bn(n) {
  return new Uo({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = V(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], l = r[0];
      if (s) {
        const a = l.search(/\S/), c = t.from + l.indexOf(s), u = c + s.length;
        if (oa(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === n.type && g !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        u < t.to && o.delete(u, t.to), c > t.from && o.delete(t.from + a, c);
        const f = t.from + a + s.length;
        o.addMark(t.from + a, f, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function Pf(n) {
  return new Uo({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = V(n.getAttributes, void 0, r) || {}, { tr: o } = e, s = t.from;
      let l = t.to;
      const a = n.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = s + c;
        u > l ? u = l : l = u + r[1].length;
        const d = r[0][r[0].length - 1];
        o.insertText(d, s + r[0].length - 1), o.replaceWith(u, l, a);
      } else if (r[0]) {
        const c = n.type.isInline ? s : s - 1;
        o.insert(c, n.type.create(i)).delete(o.mapping.map(s), o.mapping.map(l));
      }
      o.scrollIntoView();
    }
  });
}
function sl(n) {
  return new Uo({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), o = V(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, o);
    }
  });
}
function Qr(n) {
  return new Uo({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const o = V(n.getAttributes, void 0, r) || {}, s = e.tr.delete(t.from, t.to), a = s.doc.resolve(t.from).blockRange(), c = a && Pl(a, n.type, o);
      if (!c)
        return null;
      if (s.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: d, storedMarks: f } = e, { splittableMarks: h } = n.editor.extensionManager, p = f || d.$to.parentOffset && d.$from.marks();
        if (p) {
          const g = p.filter((m) => h.includes(m.type.name));
          s.ensureMarks(g);
        }
      }
      if (n.keepAttributes) {
        const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(d, o).run();
      }
      const u = s.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && an(s.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && s.join(t.from - 1);
    }
  });
}
class ae {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = V(R(this, "addOptions", {
      name: this.name
    }))), this.storage = V(R(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new ae(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => qo(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new ae(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = V(R(t, "addOptions", {
      name: t.name
    })), t.storage = V(R(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function ln(n) {
  return new Tf({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const o = V(n.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: s } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), d = t.from + a.indexOf(l), f = d + l.length;
        if (oa(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((m) => m === n.type && m !== p.mark.type)).filter((p) => p.to > d).length)
          return null;
        f < t.to && s.delete(f, t.to), d > t.from && s.delete(t.from + u, d), c = t.from + u + l.length, s.addMark(t.from + u, c, n.type.create(o || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function vy(n) {
  return n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function ky(n) {
  return new Tf({
    find: n.find,
    handler({ match: e, chain: t, range: r, pasteEvent: i }) {
      const o = V(n.getAttributes, void 0, e, i), s = V(n.getContent, void 0, o);
      if (o === !1 || o === null)
        return null;
      const l = { type: n.type.name, attrs: o };
      s && (l.content = s), e.input && t().deleteRange(r).insertContentAt(r.from, l);
    }
  });
}
var Ve = "top", rt = "bottom", it = "right", Fe = "left", la = "auto", fi = [Ve, rt, it, Fe], fr = "start", Zr = "end", xy = "clippingParents", Bf = "viewport", Er = "popper", Cy = "reference", zc = /* @__PURE__ */ fi.reduce(function(n, e) {
  return n.concat([e + "-" + fr, e + "-" + Zr]);
}, []), zf = /* @__PURE__ */ [].concat(fi, [la]).reduce(function(n, e) {
  return n.concat([e, e + "-" + fr, e + "-" + Zr]);
}, []), Sy = "beforeRead", Ty = "read", My = "afterRead", Ay = "beforeMain", Ey = "main", Oy = "afterMain", Ny = "beforeWrite", Ry = "write", Dy = "afterWrite", Ly = [Sy, Ty, My, Ay, Ey, Oy, Ny, Ry, Dy];
function xt(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function Je(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function zn(n) {
  var e = Je(n).Element;
  return n instanceof e || n instanceof Element;
}
function nt(n) {
  var e = Je(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function aa(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = Je(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function Iy(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
    !nt(o) || !xt(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? o.removeAttribute(s) : o.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Py(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], o = e.attributes[r] || {}, s = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), l = s.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !nt(i) || !xt(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(a) {
        i.removeAttribute(a);
      }));
    });
  };
}
const Hf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Iy,
  effect: Py,
  requires: ["computeStyles"]
};
function wt(n) {
  return n.split("-")[0];
}
var On = Math.max, mo = Math.min, hr = Math.round;
function ll() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Vf() {
  return !/^((?!chrome|android).)*safari/i.test(ll());
}
function pr(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, o = 1;
  e && nt(n) && (i = n.offsetWidth > 0 && hr(r.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && hr(r.height) / n.offsetHeight || 1);
  var s = zn(n) ? Je(n) : window, l = s.visualViewport, a = !Vf() && t, c = (r.left + (a && l ? l.offsetLeft : 0)) / i, u = (r.top + (a && l ? l.offsetTop : 0)) / o, d = r.width / i, f = r.height / o;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function ca(n) {
  var e = pr(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function Ff(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && aa(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Vt(n) {
  return Je(n).getComputedStyle(n);
}
function By(n) {
  return ["table", "td", "th"].indexOf(xt(n)) >= 0;
}
function dn(n) {
  return ((zn(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function Go(n) {
  return xt(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (aa(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    dn(n)
  );
}
function Hc(n) {
  return !nt(n) || // https://github.com/popperjs/popper-core/issues/837
  Vt(n).position === "fixed" ? null : n.offsetParent;
}
function zy(n) {
  var e = /firefox/i.test(ll()), t = /Trident/i.test(ll());
  if (t && nt(n)) {
    var r = Vt(n);
    if (r.position === "fixed")
      return null;
  }
  var i = Go(n);
  for (aa(i) && (i = i.host); nt(i) && ["html", "body"].indexOf(xt(i)) < 0; ) {
    var o = Vt(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function hi(n) {
  for (var e = Je(n), t = Hc(n); t && By(t) && Vt(t).position === "static"; )
    t = Hc(t);
  return t && (xt(t) === "html" || xt(t) === "body" && Vt(t).position === "static") ? e : t || zy(n) || e;
}
function ua(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Br(n, e, t) {
  return On(n, mo(e, t));
}
function Hy(n, e, t) {
  var r = Br(n, e, t);
  return r > t ? t : r;
}
function $f() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function jf(n) {
  return Object.assign({}, $f(), n);
}
function _f(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var Vy = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, jf(typeof e != "number" ? e : _f(e, fi));
};
function Fy(n) {
  var e, t = n.state, r = n.name, i = n.options, o = t.elements.arrow, s = t.modifiersData.popperOffsets, l = wt(t.placement), a = ua(l), c = [Fe, it].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!o || !s)) {
    var d = Vy(i.padding, t), f = ca(o), h = a === "y" ? Ve : Fe, p = a === "y" ? rt : it, g = t.rects.reference[u] + t.rects.reference[a] - s[a] - t.rects.popper[u], m = s[a] - t.rects.reference[a], y = hi(o), w = y ? a === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, C = g / 2 - m / 2, b = d[h], T = w - f[u] - d[p], v = w / 2 - f[u] / 2 + C, O = Br(b, v, T), A = a;
    t.modifiersData[r] = (e = {}, e[A] = O, e.centerOffset = O - v, e);
  }
}
function $y(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Ff(e.elements.popper, i) && (e.elements.arrow = i));
}
const jy = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Fy,
  effect: $y,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function mr(n) {
  return n.split("-")[1];
}
var _y = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wy(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: hr(t * i) / i || 0,
    y: hr(r * i) / i || 0
  };
}
function Vc(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, o = n.variation, s = n.offsets, l = n.position, a = n.gpuAcceleration, c = n.adaptive, u = n.roundOffsets, d = n.isFixed, f = s.x, h = f === void 0 ? 0 : f, p = s.y, g = p === void 0 ? 0 : p, m = typeof u == "function" ? u({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  h = m.x, g = m.y;
  var y = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), C = Fe, b = Ve, T = window;
  if (c) {
    var v = hi(t), O = "clientHeight", A = "clientWidth";
    if (v === Je(t) && (v = dn(t), Vt(v).position !== "static" && l === "absolute" && (O = "scrollHeight", A = "scrollWidth")), v = v, i === Ve || (i === Fe || i === it) && o === Zr) {
      b = rt;
      var N = d && v === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        v[O]
      );
      g -= N - r.height, g *= a ? 1 : -1;
    }
    if (i === Fe || (i === Ve || i === rt) && o === Zr) {
      C = it;
      var B = d && v === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        v[A]
      );
      h -= B - r.width, h *= a ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: l
  }, c && _y), U = u === !0 ? Wy({
    x: h,
    y: g
  }, Je(t)) : {
    x: h,
    y: g
  };
  if (h = U.x, g = U.y, a) {
    var q;
    return Object.assign({}, W, (q = {}, q[b] = w ? "0" : "", q[C] = y ? "0" : "", q.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", q));
  }
  return Object.assign({}, W, (e = {}, e[b] = w ? g + "px" : "", e[C] = y ? h + "px" : "", e.transform = "", e));
}
function Uy(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, o = t.adaptive, s = o === void 0 ? !0 : o, l = t.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: wt(e.placement),
    variation: mr(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Vc(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Vc(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const qy = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Uy,
  data: {}
};
var Li = {
  passive: !0
};
function Ky(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, o = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, a = Je(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", t.update, Li);
  }), l && a.addEventListener("resize", t.update, Li), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", t.update, Li);
    }), l && a.removeEventListener("resize", t.update, Li);
  };
}
const Jy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ky,
  data: {}
};
var Gy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ki(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return Gy[e];
  });
}
var Yy = {
  start: "end",
  end: "start"
};
function Fc(n) {
  return n.replace(/start|end/g, function(e) {
    return Yy[e];
  });
}
function da(n) {
  var e = Je(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function fa(n) {
  return pr(dn(n)).left + da(n).scrollLeft;
}
function Xy(n, e) {
  var t = Je(n), r = dn(n), i = t.visualViewport, o = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (i) {
    o = i.width, s = i.height;
    var c = Vf();
    (c || !c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: l + fa(n),
    y: a
  };
}
function Qy(n) {
  var e, t = dn(n), r = da(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, o = On(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = On(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + fa(n), a = -r.scrollTop;
  return Vt(i || t).direction === "rtl" && (l += On(t.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: l,
    y: a
  };
}
function ha(n) {
  var e = Vt(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function Wf(n) {
  return ["html", "body", "#document"].indexOf(xt(n)) >= 0 ? n.ownerDocument.body : nt(n) && ha(n) ? n : Wf(Go(n));
}
function zr(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = Wf(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), o = Je(r), s = i ? [o].concat(o.visualViewport || [], ha(r) ? r : []) : r, l = e.concat(s);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(zr(Go(s)))
  );
}
function al(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function Zy(n, e) {
  var t = pr(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function $c(n, e, t) {
  return e === Bf ? al(Xy(n, t)) : zn(e) ? Zy(e, t) : al(Qy(dn(n)));
}
function eb(n) {
  var e = zr(Go(n)), t = ["absolute", "fixed"].indexOf(Vt(n).position) >= 0, r = t && nt(n) ? hi(n) : n;
  return zn(r) ? e.filter(function(i) {
    return zn(i) && Ff(i, r) && xt(i) !== "body";
  }) : [];
}
function tb(n, e, t, r) {
  var i = e === "clippingParents" ? eb(n) : [].concat(e), o = [].concat(i, [t]), s = o[0], l = o.reduce(function(a, c) {
    var u = $c(n, c, r);
    return a.top = On(u.top, a.top), a.right = mo(u.right, a.right), a.bottom = mo(u.bottom, a.bottom), a.left = On(u.left, a.left), a;
  }, $c(n, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Uf(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? wt(r) : null, o = r ? mr(r) : null, s = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, a;
  switch (i) {
    case Ve:
      a = {
        x: s,
        y: e.y - t.height
      };
      break;
    case rt:
      a = {
        x: s,
        y: e.y + e.height
      };
      break;
    case it:
      a = {
        x: e.x + e.width,
        y: l
      };
      break;
    case Fe:
      a = {
        x: e.x - t.width,
        y: l
      };
      break;
    default:
      a = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? ua(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case fr:
        a[c] = a[c] - (e[u] / 2 - t[u] / 2);
        break;
      case Zr:
        a[c] = a[c] + (e[u] / 2 - t[u] / 2);
        break;
    }
  }
  return a;
}
function ei(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, o = t.strategy, s = o === void 0 ? n.strategy : o, l = t.boundary, a = l === void 0 ? xy : l, c = t.rootBoundary, u = c === void 0 ? Bf : c, d = t.elementContext, f = d === void 0 ? Er : d, h = t.altBoundary, p = h === void 0 ? !1 : h, g = t.padding, m = g === void 0 ? 0 : g, y = jf(typeof m != "number" ? m : _f(m, fi)), w = f === Er ? Cy : Er, C = n.rects.popper, b = n.elements[p ? w : f], T = tb(zn(b) ? b : b.contextElement || dn(n.elements.popper), a, u, s), v = pr(n.elements.reference), O = Uf({
    reference: v,
    element: C,
    placement: i
  }), A = al(Object.assign({}, C, O)), N = f === Er ? A : v, B = {
    top: T.top - N.top + y.top,
    bottom: N.bottom - T.bottom + y.bottom,
    left: T.left - N.left + y.left,
    right: N.right - T.right + y.right
  }, W = n.modifiersData.offset;
  if (f === Er && W) {
    var U = W[i];
    Object.keys(B).forEach(function(q) {
      var fe = [it, rt].indexOf(q) >= 0 ? 1 : -1, ee = [Ve, rt].indexOf(q) >= 0 ? "y" : "x";
      B[q] += U[ee] * fe;
    });
  }
  return B;
}
function nb(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, o = t.rootBoundary, s = t.padding, l = t.flipVariations, a = t.allowedAutoPlacements, c = a === void 0 ? zf : a, u = mr(r), d = u ? l ? zc : zc.filter(function(p) {
    return mr(p) === u;
  }) : fi, f = d.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  f.length === 0 && (f = d);
  var h = f.reduce(function(p, g) {
    return p[g] = ei(n, {
      placement: g,
      boundary: i,
      rootBoundary: o,
      padding: s
    })[wt(g)], p;
  }, {});
  return Object.keys(h).sort(function(p, g) {
    return h[p] - h[g];
  });
}
function rb(n) {
  if (wt(n) === la)
    return [];
  var e = Ki(n);
  return [Fc(n), e, Fc(e)];
}
function ib(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !0 : s, a = t.fallbackPlacements, c = t.padding, u = t.boundary, d = t.rootBoundary, f = t.altBoundary, h = t.flipVariations, p = h === void 0 ? !0 : h, g = t.allowedAutoPlacements, m = e.options.placement, y = wt(m), w = y === m, C = a || (w || !p ? [Ki(m)] : rb(m)), b = [m].concat(C).reduce(function(St, ot) {
      return St.concat(wt(ot) === la ? nb(e, {
        placement: ot,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: g
      }) : ot);
    }, []), T = e.rects.reference, v = e.rects.popper, O = /* @__PURE__ */ new Map(), A = !0, N = b[0], B = 0; B < b.length; B++) {
      var W = b[B], U = wt(W), q = mr(W) === fr, fe = [Ve, rt].indexOf(U) >= 0, ee = fe ? "width" : "height", G = ei(e, {
        placement: W,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), Y = fe ? q ? it : Fe : q ? rt : Ve;
      T[ee] > v[ee] && (Y = Ki(Y));
      var _ = Ki(Y), ue = [];
      if (o && ue.push(G[U] <= 0), l && ue.push(G[Y] <= 0, G[_] <= 0), ue.every(function(St) {
        return St;
      })) {
        N = W, A = !1;
        break;
      }
      O.set(W, ue);
    }
    if (A)
      for (var oe = p ? 3 : 1, Be = function(ot) {
        var Tt = b.find(function(jn) {
          var Mt = O.get(jn);
          if (Mt)
            return Mt.slice(0, ot).every(function(_n) {
              return _n;
            });
        });
        if (Tt)
          return N = Tt, "break";
      }, me = oe; me > 0; me--) {
        var Ge = Be(me);
        if (Ge === "break") break;
      }
    e.placement !== N && (e.modifiersData[r]._skip = !0, e.placement = N, e.reset = !0);
  }
}
const ob = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ib,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function jc(n, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: n.top - e.height - t.y,
    right: n.right - e.width + t.x,
    bottom: n.bottom - e.height + t.y,
    left: n.left - e.width - t.x
  };
}
function _c(n) {
  return [Ve, it, rt, Fe].some(function(e) {
    return n[e] >= 0;
  });
}
function sb(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, s = ei(e, {
    elementContext: "reference"
  }), l = ei(e, {
    altBoundary: !0
  }), a = jc(s, r), c = jc(l, i, o), u = _c(a), d = _c(c);
  e.modifiersData[t] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const lb = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sb
};
function ab(n, e, t) {
  var r = wt(n), i = [Fe, Ve].indexOf(r) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, s = o[0], l = o[1];
  return s = s || 0, l = (l || 0) * i, [Fe, it].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function cb(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, o = i === void 0 ? [0, 0] : i, s = zf.reduce(function(u, d) {
    return u[d] = ab(d, e.rects, o), u;
  }, {}), l = s[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = s;
}
const ub = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: cb
};
function db(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Uf({
    reference: e.rects.reference,
    element: e.rects.popper,
    placement: e.placement
  });
}
const fb = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: db,
  data: {}
};
function hb(n) {
  return n === "x" ? "y" : "x";
}
function pb(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !1 : s, a = t.boundary, c = t.rootBoundary, u = t.altBoundary, d = t.padding, f = t.tether, h = f === void 0 ? !0 : f, p = t.tetherOffset, g = p === void 0 ? 0 : p, m = ei(e, {
    boundary: a,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), y = wt(e.placement), w = mr(e.placement), C = !w, b = ua(y), T = hb(b), v = e.modifiersData.popperOffsets, O = e.rects.reference, A = e.rects.popper, N = typeof g == "function" ? g(Object.assign({}, e.rects, {
    placement: e.placement
  })) : g, B = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), W = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (v) {
    if (o) {
      var q, fe = b === "y" ? Ve : Fe, ee = b === "y" ? rt : it, G = b === "y" ? "height" : "width", Y = v[b], _ = Y + m[fe], ue = Y - m[ee], oe = h ? -A[G] / 2 : 0, Be = w === fr ? O[G] : A[G], me = w === fr ? -A[G] : -O[G], Ge = e.elements.arrow, St = h && Ge ? ca(Ge) : {
        width: 0,
        height: 0
      }, ot = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : $f(), Tt = ot[fe], jn = ot[ee], Mt = Br(0, O[G], St[G]), _n = C ? O[G] / 2 - oe - Mt - Tt - B.mainAxis : Be - Mt - Tt - B.mainAxis, Ft = C ? -O[G] / 2 + oe + Mt + jn + B.mainAxis : me + Mt + jn + B.mainAxis, Wn = e.elements.arrow && hi(e.elements.arrow), gi = Wn ? b === "y" ? Wn.clientTop || 0 : Wn.clientLeft || 0 : 0, kr = (q = W == null ? void 0 : W[b]) != null ? q : 0, yi = Y + _n - kr - gi, bi = Y + Ft - kr, xr = Br(h ? mo(_, yi) : _, Y, h ? On(ue, bi) : ue);
      v[b] = xr, U[b] = xr - Y;
    }
    if (l) {
      var Cr, wi = b === "x" ? Ve : Fe, vi = b === "x" ? rt : it, At = v[T], $t = T === "y" ? "height" : "width", Sr = At + m[wi], fn = At - m[vi], Tr = [Ve, Fe].indexOf(y) !== -1, ki = (Cr = W == null ? void 0 : W[T]) != null ? Cr : 0, xi = Tr ? Sr : At - O[$t] - A[$t] - ki + B.altAxis, Ci = Tr ? At + O[$t] + A[$t] - ki - B.altAxis : fn, Si = h && Tr ? Hy(xi, At, Ci) : Br(h ? xi : Sr, At, h ? Ci : fn);
      v[T] = Si, U[T] = Si - At;
    }
    e.modifiersData[r] = U;
  }
}
const mb = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: pb,
  requiresIfExists: ["offset"]
};
function gb(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function yb(n) {
  return n === Je(n) || !nt(n) ? da(n) : gb(n);
}
function bb(n) {
  var e = n.getBoundingClientRect(), t = hr(e.width) / n.offsetWidth || 1, r = hr(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function wb(n, e, t) {
  t === void 0 && (t = !1);
  var r = nt(e), i = nt(e) && bb(e), o = dn(e), s = pr(n, i, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((xt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ha(o)) && (l = yb(e)), nt(e) ? (a = pr(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : o && (a.x = fa(o))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function vb(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    t.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(l) {
      if (!t.has(l)) {
        var a = e.get(l);
        a && i(a);
      }
    }), r.push(o);
  }
  return n.forEach(function(o) {
    t.has(o.name) || i(o);
  }), r;
}
function kb(n) {
  var e = vb(n);
  return Ly.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function xb(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function Cb(n) {
  var e = n.reduce(function(t, r) {
    var i = t[r.name];
    return t[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var Wc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Uc() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Sb(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, o = i === void 0 ? Wc : i;
  return function(l, a, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Wc, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, h = {
      state: u,
      setOptions: function(y) {
        var w = typeof y == "function" ? y(u.options) : y;
        g(), u.options = Object.assign({}, o, u.options, w), u.scrollParents = {
          reference: zn(l) ? zr(l) : l.contextElement ? zr(l.contextElement) : [],
          popper: zr(a)
        };
        var C = kb(Cb([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = C.filter(function(b) {
          return b.enabled;
        }), p(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var y = u.elements, w = y.reference, C = y.popper;
          if (Uc(w, C)) {
            u.rects = {
              reference: wb(w, hi(C), u.options.strategy === "fixed"),
              popper: ca(C)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(B) {
              return u.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var b = 0; b < u.orderedModifiers.length; b++) {
              if (u.reset === !0) {
                u.reset = !1, b = -1;
                continue;
              }
              var T = u.orderedModifiers[b], v = T.fn, O = T.options, A = O === void 0 ? {} : O, N = T.name;
              typeof v == "function" && (u = v({
                state: u,
                options: A,
                name: N,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: xb(function() {
        return new Promise(function(m) {
          h.forceUpdate(), m(u);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Uc(l, a))
      return h;
    h.setOptions(c).then(function(m) {
      !f && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function p() {
      u.orderedModifiers.forEach(function(m) {
        var y = m.name, w = m.options, C = w === void 0 ? {} : w, b = m.effect;
        if (typeof b == "function") {
          var T = b({
            state: u,
            name: y,
            instance: h,
            options: C
          }), v = function() {
          };
          d.push(T || v);
        }
      });
    }
    function g() {
      d.forEach(function(m) {
        return m();
      }), d = [];
    }
    return h;
  };
}
var Tb = [Jy, fb, qy, Hf, ub, ob, mb, jy, lb], Mb = /* @__PURE__ */ Sb({
  defaultModifiers: Tb
}), Ab = "tippy-box", qf = "tippy-content", Eb = "tippy-backdrop", Kf = "tippy-arrow", Jf = "tippy-svg-arrow", mn = {
  passive: !0,
  capture: !0
}, Gf = function() {
  return document.body;
};
function Ob(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function Ms(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r ?? (Array.isArray(t) ? t[e] : t);
  }
  return n;
}
function pa(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function Yf(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function qc(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function Nb(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function Rb(n) {
  return n.split(/\s+/).filter(Boolean);
}
function Zn(n) {
  return [].concat(n);
}
function Kc(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function Db(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function Lb(n) {
  return n.split("-")[0];
}
function go(n) {
  return [].slice.call(n);
}
function Jc(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function Hr() {
  return document.createElement("div");
}
function ti(n) {
  return ["Element", "Fragment"].some(function(e) {
    return pa(n, e);
  });
}
function Ib(n) {
  return pa(n, "NodeList");
}
function Pb(n) {
  return pa(n, "MouseEvent");
}
function Bb(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function zb(n) {
  return ti(n) ? [n] : Ib(n) ? go(n) : Array.isArray(n) ? n : go(document.querySelectorAll(n));
}
function As(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function Gc(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function Hb(n) {
  var e, t = Zn(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function Vb(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var o = i.popperRect, s = i.popperState, l = i.props, a = l.interactiveBorder, c = Lb(s.placement), u = s.modifiersData.offset;
    if (!u)
      return !0;
    var d = c === "bottom" ? u.top.y : 0, f = c === "top" ? u.bottom.y : 0, h = c === "right" ? u.left.x : 0, p = c === "left" ? u.right.x : 0, g = o.top - r + d > a, m = r - o.bottom - f > a, y = o.left - t + h > a, w = t - o.right - p > a;
    return g || m || y || w;
  });
}
function Es(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function Yc(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var yt = {
  isTouch: !1
}, Xc = 0;
function Fb() {
  yt.isTouch || (yt.isTouch = !0, window.performance && document.addEventListener("mousemove", Xf));
}
function Xf() {
  var n = performance.now();
  n - Xc < 20 && (yt.isTouch = !1, document.removeEventListener("mousemove", Xf)), Xc = n;
}
function $b() {
  var n = document.activeElement;
  if (Bb(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function jb() {
  document.addEventListener("touchstart", Fb, mn), window.addEventListener("blur", $b);
}
var _b = typeof window < "u" && typeof document < "u", Wb = _b ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function Gn(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function Qc(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function Ub(n) {
  return Qc(`
  %ctippy.js

  %c` + Qc(n) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function Qf(n) {
  return [
    Ub(n),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var ni;
process.env.NODE_ENV !== "production" && qb();
function qb() {
  ni = /* @__PURE__ */ new Set();
}
function It(n, e) {
  if (n && !ni.has(e)) {
    var t;
    ni.add(e), (t = console).warn.apply(t, Qf(e));
  }
}
function cl(n, e) {
  if (n && !ni.has(e)) {
    var t;
    ni.add(e), (t = console).error.apply(t, Qf(e));
  }
}
function Kb(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  cl(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), cl(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var Zf = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, Jb = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Ue = Object.assign({
  appendTo: Gf,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, Zf, Jb), Gb = Object.keys(Ue), Yb = function(e) {
  process.env.NODE_ENV !== "production" && th(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    Ue[r] = e[r];
  });
};
function eh(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var o = i.name, s = i.defaultValue;
    if (o) {
      var l;
      r[o] = n[o] !== void 0 ? n[o] : (l = Ue[o]) != null ? l : s;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function Xb(n, e) {
  var t = e ? Object.keys(eh(Object.assign({}, Ue, {
    plugins: e
  }))) : Gb, r = t.reduce(function(i, o) {
    var s = (n.getAttribute("data-tippy-" + o) || "").trim();
    if (!s)
      return i;
    if (o === "content")
      i[o] = s;
    else
      try {
        i[o] = JSON.parse(s);
      } catch {
        i[o] = s;
      }
    return i;
  }, {});
  return r;
}
function Zc(n, e) {
  var t = Object.assign({}, e, {
    content: Yf(e.content, [n])
  }, e.ignoreAttributes ? {} : Xb(n, e.plugins));
  return t.aria = Object.assign({}, Ue.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function th(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = Nb(Ue, Object.keys(Zf)), o = !Ob(i, r);
    o && (o = e.filter(function(s) {
      return s.name === r;
    }).length === 0), It(o, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var Qb = function() {
  return "innerHTML";
};
function ul(n, e) {
  n[Qb()] = e;
}
function eu(n) {
  var e = Hr();
  return n === !0 ? e.className = Kf : (e.className = Jf, ti(n) ? e.appendChild(n) : ul(e, n)), e;
}
function tu(n, e) {
  ti(e.content) ? (ul(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? ul(n, e.content) : n.textContent = e.content);
}
function dl(n) {
  var e = n.firstElementChild, t = go(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(qf);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(Kf) || r.classList.contains(Jf);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(Eb);
    })
  };
}
function nh(n) {
  var e = Hr(), t = Hr();
  t.className = Ab, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = Hr();
  r.className = qf, r.setAttribute("data-state", "hidden"), tu(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(o, s) {
    var l = dl(e), a = l.box, c = l.content, u = l.arrow;
    s.theme ? a.setAttribute("data-theme", s.theme) : a.removeAttribute("data-theme"), typeof s.animation == "string" ? a.setAttribute("data-animation", s.animation) : a.removeAttribute("data-animation"), s.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? a.setAttribute("role", s.role) : a.removeAttribute("role"), (o.content !== s.content || o.allowHTML !== s.allowHTML) && tu(c, n.props), s.arrow ? u ? o.arrow !== s.arrow && (a.removeChild(u), a.appendChild(eu(s.arrow))) : a.appendChild(eu(s.arrow)) : u && a.removeChild(u);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
nh.$$tippy = !0;
var Zb = 1, Ii = [], Os = [];
function ew(n, e) {
  var t = Zc(n, Object.assign({}, Ue, eh(Jc(e)))), r, i, o, s = !1, l = !1, a = !1, c = !1, u, d, f, h = [], p = qc(yi, t.interactiveDebounce), g, m = Zb++, y = null, w = Db(t.plugins), C = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, b = {
    // properties
    id: m,
    reference: n,
    popper: Hr(),
    popperInstance: y,
    props: t,
    state: C,
    plugins: w,
    // methods
    clearDelayTimeouts: xi,
    setProps: Ci,
    setContent: Si,
    show: Zh,
    hide: ep,
    hideWithInteractivity: tp,
    enable: Tr,
    disable: ki,
    unmount: np,
    destroy: rp
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && cl(!0, "render() function has not been supplied."), b;
  var T = t.render(b), v = T.popper, O = T.onUpdate;
  v.setAttribute("data-tippy-root", ""), v.id = "tippy-" + b.id, b.popper = v, n._tippy = b, v._tippy = b;
  var A = w.map(function(x) {
    return x.fn(b);
  }), N = n.hasAttribute("aria-expanded");
  return Wn(), oe(), Y(), _("onCreate", [b]), t.showOnCreate && Sr(), v.addEventListener("mouseenter", function() {
    b.props.interactive && b.state.isVisible && b.clearDelayTimeouts();
  }), v.addEventListener("mouseleave", function() {
    b.props.interactive && b.props.trigger.indexOf("mouseenter") >= 0 && fe().addEventListener("mousemove", p);
  }), b;
  function B() {
    var x = b.props.touch;
    return Array.isArray(x) ? x : [x, 0];
  }
  function W() {
    return B()[0] === "hold";
  }
  function U() {
    var x;
    return !!((x = b.props.render) != null && x.$$tippy);
  }
  function q() {
    return g || n;
  }
  function fe() {
    var x = q().parentNode;
    return x ? Hb(x) : document;
  }
  function ee() {
    return dl(v);
  }
  function G(x) {
    return b.state.isMounted && !b.state.isVisible || yt.isTouch || u && u.type === "focus" ? 0 : Ms(b.props.delay, x ? 0 : 1, Ue.delay);
  }
  function Y(x) {
    x === void 0 && (x = !1), v.style.pointerEvents = b.props.interactive && !x ? "" : "none", v.style.zIndex = "" + b.props.zIndex;
  }
  function _(x, D, H) {
    if (H === void 0 && (H = !0), A.forEach(function(j) {
      j[x] && j[x].apply(j, D);
    }), H) {
      var J;
      (J = b.props)[x].apply(J, D);
    }
  }
  function ue() {
    var x = b.props.aria;
    if (x.content) {
      var D = "aria-" + x.content, H = v.id, J = Zn(b.props.triggerTarget || n);
      J.forEach(function(j) {
        var Re = j.getAttribute(D);
        if (b.state.isVisible)
          j.setAttribute(D, Re ? Re + " " + H : H);
        else {
          var Ye = Re && Re.replace(H, "").trim();
          Ye ? j.setAttribute(D, Ye) : j.removeAttribute(D);
        }
      });
    }
  }
  function oe() {
    if (!(N || !b.props.aria.expanded)) {
      var x = Zn(b.props.triggerTarget || n);
      x.forEach(function(D) {
        b.props.interactive ? D.setAttribute("aria-expanded", b.state.isVisible && D === q() ? "true" : "false") : D.removeAttribute("aria-expanded");
      });
    }
  }
  function Be() {
    fe().removeEventListener("mousemove", p), Ii = Ii.filter(function(x) {
      return x !== p;
    });
  }
  function me(x) {
    if (!(yt.isTouch && (a || x.type === "mousedown"))) {
      var D = x.composedPath && x.composedPath()[0] || x.target;
      if (!(b.props.interactive && Yc(v, D))) {
        if (Zn(b.props.triggerTarget || n).some(function(H) {
          return Yc(H, D);
        })) {
          if (yt.isTouch || b.state.isVisible && b.props.trigger.indexOf("click") >= 0)
            return;
        } else
          _("onClickOutside", [b, x]);
        b.props.hideOnClick === !0 && (b.clearDelayTimeouts(), b.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), b.state.isMounted || Tt());
      }
    }
  }
  function Ge() {
    a = !0;
  }
  function St() {
    a = !1;
  }
  function ot() {
    var x = fe();
    x.addEventListener("mousedown", me, !0), x.addEventListener("touchend", me, mn), x.addEventListener("touchstart", St, mn), x.addEventListener("touchmove", Ge, mn);
  }
  function Tt() {
    var x = fe();
    x.removeEventListener("mousedown", me, !0), x.removeEventListener("touchend", me, mn), x.removeEventListener("touchstart", St, mn), x.removeEventListener("touchmove", Ge, mn);
  }
  function jn(x, D) {
    _n(x, function() {
      !b.state.isVisible && v.parentNode && v.parentNode.contains(v) && D();
    });
  }
  function Mt(x, D) {
    _n(x, D);
  }
  function _n(x, D) {
    var H = ee().box;
    function J(j) {
      j.target === H && (Es(H, "remove", J), D());
    }
    if (x === 0)
      return D();
    Es(H, "remove", d), Es(H, "add", J), d = J;
  }
  function Ft(x, D, H) {
    H === void 0 && (H = !1);
    var J = Zn(b.props.triggerTarget || n);
    J.forEach(function(j) {
      j.addEventListener(x, D, H), h.push({
        node: j,
        eventType: x,
        handler: D,
        options: H
      });
    });
  }
  function Wn() {
    W() && (Ft("touchstart", kr, {
      passive: !0
    }), Ft("touchend", bi, {
      passive: !0
    })), Rb(b.props.trigger).forEach(function(x) {
      if (x !== "manual")
        switch (Ft(x, kr), x) {
          case "mouseenter":
            Ft("mouseleave", bi);
            break;
          case "focus":
            Ft(Wb ? "focusout" : "blur", xr);
            break;
          case "focusin":
            Ft("focusout", xr);
            break;
        }
    });
  }
  function gi() {
    h.forEach(function(x) {
      var D = x.node, H = x.eventType, J = x.handler, j = x.options;
      D.removeEventListener(H, J, j);
    }), h = [];
  }
  function kr(x) {
    var D, H = !1;
    if (!(!b.state.isEnabled || Cr(x) || l)) {
      var J = ((D = u) == null ? void 0 : D.type) === "focus";
      u = x, g = x.currentTarget, oe(), !b.state.isVisible && Pb(x) && Ii.forEach(function(j) {
        return j(x);
      }), x.type === "click" && (b.props.trigger.indexOf("mouseenter") < 0 || s) && b.props.hideOnClick !== !1 && b.state.isVisible ? H = !0 : Sr(x), x.type === "click" && (s = !H), H && !J && fn(x);
    }
  }
  function yi(x) {
    var D = x.target, H = q().contains(D) || v.contains(D);
    if (!(x.type === "mousemove" && H)) {
      var J = $t().concat(v).map(function(j) {
        var Re, Ye = j._tippy, Un = (Re = Ye.popperInstance) == null ? void 0 : Re.state;
        return Un ? {
          popperRect: j.getBoundingClientRect(),
          popperState: Un,
          props: t
        } : null;
      }).filter(Boolean);
      Vb(J, x) && (Be(), fn(x));
    }
  }
  function bi(x) {
    var D = Cr(x) || b.props.trigger.indexOf("click") >= 0 && s;
    if (!D) {
      if (b.props.interactive) {
        b.hideWithInteractivity(x);
        return;
      }
      fn(x);
    }
  }
  function xr(x) {
    b.props.trigger.indexOf("focusin") < 0 && x.target !== q() || b.props.interactive && x.relatedTarget && v.contains(x.relatedTarget) || fn(x);
  }
  function Cr(x) {
    return yt.isTouch ? W() !== x.type.indexOf("touch") >= 0 : !1;
  }
  function wi() {
    vi();
    var x = b.props, D = x.popperOptions, H = x.placement, J = x.offset, j = x.getReferenceClientRect, Re = x.moveTransition, Ye = U() ? dl(v).arrow : null, Un = j ? {
      getBoundingClientRect: j,
      contextElement: j.contextElement || q()
    } : n, Ea = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Ti) {
        var qn = Ti.state;
        if (U()) {
          var ip = ee(), ls = ip.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Mi) {
            Mi === "placement" ? ls.setAttribute("data-placement", qn.placement) : qn.attributes.popper["data-popper-" + Mi] ? ls.setAttribute("data-" + Mi, "") : ls.removeAttribute("data-" + Mi);
          }), qn.attributes.popper = {};
        }
      }
    }, hn = [{
      name: "offset",
      options: {
        offset: J
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !Re
      }
    }, Ea];
    U() && Ye && hn.push({
      name: "arrow",
      options: {
        element: Ye,
        padding: 3
      }
    }), hn.push.apply(hn, (D == null ? void 0 : D.modifiers) || []), b.popperInstance = Mb(Un, v, Object.assign({}, D, {
      placement: H,
      onFirstUpdate: f,
      modifiers: hn
    }));
  }
  function vi() {
    b.popperInstance && (b.popperInstance.destroy(), b.popperInstance = null);
  }
  function At() {
    var x = b.props.appendTo, D, H = q();
    b.props.interactive && x === Gf || x === "parent" ? D = H.parentNode : D = Yf(x, [H]), D.contains(v) || D.appendChild(v), b.state.isMounted = !0, wi(), process.env.NODE_ENV !== "production" && It(b.props.interactive && x === Ue.appendTo && H.nextElementSibling !== v, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function $t() {
    return go(v.querySelectorAll("[data-tippy-root]"));
  }
  function Sr(x) {
    b.clearDelayTimeouts(), x && _("onTrigger", [b, x]), ot();
    var D = G(!0), H = B(), J = H[0], j = H[1];
    yt.isTouch && J === "hold" && j && (D = j), D ? r = setTimeout(function() {
      b.show();
    }, D) : b.show();
  }
  function fn(x) {
    if (b.clearDelayTimeouts(), _("onUntrigger", [b, x]), !b.state.isVisible) {
      Tt();
      return;
    }
    if (!(b.props.trigger.indexOf("mouseenter") >= 0 && b.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(x.type) >= 0 && s)) {
      var D = G(!1);
      D ? i = setTimeout(function() {
        b.state.isVisible && b.hide();
      }, D) : o = requestAnimationFrame(function() {
        b.hide();
      });
    }
  }
  function Tr() {
    b.state.isEnabled = !0;
  }
  function ki() {
    b.hide(), b.state.isEnabled = !1;
  }
  function xi() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
  }
  function Ci(x) {
    if (process.env.NODE_ENV !== "production" && It(b.state.isDestroyed, Gn("setProps")), !b.state.isDestroyed) {
      _("onBeforeUpdate", [b, x]), gi();
      var D = b.props, H = Zc(n, Object.assign({}, D, Jc(x), {
        ignoreAttributes: !0
      }));
      b.props = H, Wn(), D.interactiveDebounce !== H.interactiveDebounce && (Be(), p = qc(yi, H.interactiveDebounce)), D.triggerTarget && !H.triggerTarget ? Zn(D.triggerTarget).forEach(function(J) {
        J.removeAttribute("aria-expanded");
      }) : H.triggerTarget && n.removeAttribute("aria-expanded"), oe(), Y(), O && O(D, H), b.popperInstance && (wi(), $t().forEach(function(J) {
        requestAnimationFrame(J._tippy.popperInstance.forceUpdate);
      })), _("onAfterUpdate", [b, x]);
    }
  }
  function Si(x) {
    b.setProps({
      content: x
    });
  }
  function Zh() {
    process.env.NODE_ENV !== "production" && It(b.state.isDestroyed, Gn("show"));
    var x = b.state.isVisible, D = b.state.isDestroyed, H = !b.state.isEnabled, J = yt.isTouch && !b.props.touch, j = Ms(b.props.duration, 0, Ue.duration);
    if (!(x || D || H || J) && !q().hasAttribute("disabled") && (_("onShow", [b], !1), b.props.onShow(b) !== !1)) {
      if (b.state.isVisible = !0, U() && (v.style.visibility = "visible"), Y(), ot(), b.state.isMounted || (v.style.transition = "none"), U()) {
        var Re = ee(), Ye = Re.box, Un = Re.content;
        As([Ye, Un], 0);
      }
      f = function() {
        var hn;
        if (!(!b.state.isVisible || c)) {
          if (c = !0, v.offsetHeight, v.style.transition = b.props.moveTransition, U() && b.props.animation) {
            var ss = ee(), Ti = ss.box, qn = ss.content;
            As([Ti, qn], j), Gc([Ti, qn], "visible");
          }
          ue(), oe(), Kc(Os, b), (hn = b.popperInstance) == null || hn.forceUpdate(), _("onMount", [b]), b.props.animation && U() && Mt(j, function() {
            b.state.isShown = !0, _("onShown", [b]);
          });
        }
      }, At();
    }
  }
  function ep() {
    process.env.NODE_ENV !== "production" && It(b.state.isDestroyed, Gn("hide"));
    var x = !b.state.isVisible, D = b.state.isDestroyed, H = !b.state.isEnabled, J = Ms(b.props.duration, 1, Ue.duration);
    if (!(x || D || H) && (_("onHide", [b], !1), b.props.onHide(b) !== !1)) {
      if (b.state.isVisible = !1, b.state.isShown = !1, c = !1, s = !1, U() && (v.style.visibility = "hidden"), Be(), Tt(), Y(!0), U()) {
        var j = ee(), Re = j.box, Ye = j.content;
        b.props.animation && (As([Re, Ye], J), Gc([Re, Ye], "hidden"));
      }
      ue(), oe(), b.props.animation ? U() && jn(J, b.unmount) : b.unmount();
    }
  }
  function tp(x) {
    process.env.NODE_ENV !== "production" && It(b.state.isDestroyed, Gn("hideWithInteractivity")), fe().addEventListener("mousemove", p), Kc(Ii, p), p(x);
  }
  function np() {
    process.env.NODE_ENV !== "production" && It(b.state.isDestroyed, Gn("unmount")), b.state.isVisible && b.hide(), b.state.isMounted && (vi(), $t().forEach(function(x) {
      x._tippy.unmount();
    }), v.parentNode && v.parentNode.removeChild(v), Os = Os.filter(function(x) {
      return x !== b;
    }), b.state.isMounted = !1, _("onHidden", [b]));
  }
  function rp() {
    process.env.NODE_ENV !== "production" && It(b.state.isDestroyed, Gn("destroy")), !b.state.isDestroyed && (b.clearDelayTimeouts(), b.unmount(), gi(), delete n._tippy, b.state.isDestroyed = !0, _("onDestroy", [b]));
  }
}
function $n(n, e) {
  e === void 0 && (e = {});
  var t = Ue.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (Kb(n), th(e, t)), jb();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = zb(n);
  if (process.env.NODE_ENV !== "production") {
    var o = ti(r.content), s = i.length > 1;
    It(o && s, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var l = i.reduce(function(a, c) {
    var u = c && ew(c, r);
    return u && a.push(u), a;
  }, []);
  return ti(n) ? l[0] : l;
}
$n.defaultProps = Ue;
$n.setDefaultProps = Yb;
$n.currentInput = yt;
Object.assign({}, Hf, {
  effect: function(e) {
    var t = e.state, r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
  }
});
$n.setDefaultProps({
  render: nh
});
class tw {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: l, state: a, from: c, to: u }) => {
      const { doc: d, selection: f } = a, { empty: h } = f, p = !d.textBetween(c, u).length && na(a.selection), g = this.element.contains(document.activeElement);
      return !(!(l.hasFocus() || g) || h || p || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: l }) => {
      var a;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      l != null && l.relatedTarget && (!((a = this.element.parentNode) === null || a === void 0) && a.contains(l.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (l) => {
      this.blurHandler({ event: l });
    }, this.handleDebouncedUpdate = (l, a) => {
      const c = !(a != null && a.selection.eq(l.state.selection)), u = !(a != null && a.doc.eq(l.state.doc));
      !c && !u || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(l, c, u, a);
      }, this.updateDelay));
    }, this.updateHandler = (l, a, c, u) => {
      var d, f, h;
      const { state: p, composing: g } = l, { selection: m } = p;
      if (g || !a && !c)
        return;
      this.createTooltip();
      const { ranges: w } = m, C = Math.min(...w.map((v) => v.$from.pos)), b = Math.max(...w.map((v) => v.$to.pos));
      if (!((d = this.shouldShow) === null || d === void 0 ? void 0 : d.call(this, {
        editor: this.editor,
        view: l,
        state: p,
        oldState: u,
        from: C,
        to: b
      }))) {
        this.hide();
        return;
      }
      (f = this.tippy) === null || f === void 0 || f.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (j0(p.selection)) {
            let v = l.nodeDOM(C);
            const O = v.dataset.nodeViewWrapper ? v : v.querySelector("[data-node-view-wrapper]");
            if (O && (v = O.firstChild), v)
              return v.getBoundingClientRect();
          }
          return If(l, C, b);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = o, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = $n(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    const { state: r } = e, i = r.selection.$from.pos !== r.selection.$to.pos;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const o = !(t != null && t.selection.eq(e.state.selection)), s = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, o, s, t);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const rh = (n) => new Z({
  key: typeof n.pluginKey == "string" ? new ce(n.pluginKey) : n.pluginKey,
  view: (e) => new tw({ view: e, ...n })
});
re.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      rh({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class nw {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: l }) => {
      const { selection: a } = l, { $anchor: c, empty: u } = a, d = c.depth === 1, f = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent;
      return !(!s.hasFocus() || !u || !d || !f || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      s != null && s.relatedTarget && (!((l = this.element.parentNode) === null || l === void 0) && l.contains(s.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.editor = e, this.element = t, this.view = r, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = $n(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    var r, i, o;
    const { state: s } = e, { doc: l, selection: a } = s, { from: c, to: u } = a;
    if (t && t.doc.eq(l) && t.selection.eq(a))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: s,
      oldState: t
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((o = this.tippyOptions) === null || o === void 0 ? void 0 : o.getReferenceClientRect) || (() => If(e, c, u))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const ih = (n) => new Z({
  key: typeof n.pluginKey == "string" ? new ce(n.pluginKey) : n.pluginKey,
  view: (e) => new nw({ view: e, ...n })
});
re.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      ih({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
const rw = li({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = Rl(null);
    return Ku(() => {
      const { updateDelay: r, editor: i, pluginKey: o, shouldShow: s, tippyOptions: l } = n;
      i.registerPlugin(rh({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: o,
        shouldShow: s,
        tippyOptions: l
      }));
    }), Dl(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Sn("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function nu(n) {
  return up((e, t) => ({
    get() {
      return e(), n;
    },
    set(r) {
      n = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
class iw extends wy {
  constructor(e = {}) {
    return super(e), this.vueRenderers = Ju(/* @__PURE__ */ new Map()), this.contentComponent = null, this.reactiveState = nu(this.view.state), this.reactiveExtensionStorage = nu(this.extensionStorage), this.on("transaction", () => {
      this.reactiveState.value = this.view.state, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), Gu(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, t) {
    super.registerPlugin(e, t), this.reactiveState.value = this.view.state;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    super.unregisterPlugin(e), this.reactiveState.value = this.view.state;
  }
}
const ow = li({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = Rl(), t = sp();
    return lp(() => {
      const r = n.editor;
      r && r.options.element && e.value && ap(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = cp(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), Dl(() => {
      const r = n.editor;
      if (!r || (r.isDestroyed || r.view.setProps({
        nodeViews: {}
      }), r.contentComponent = null, !r.options.element.firstChild))
        return;
      const i = document.createElement("div");
      i.append(...r.options.element.childNodes), r.setOptions({
        element: i
      });
    }), { rootEl: e };
  },
  render() {
    const n = [];
    return this.editor && this.editor.vueRenderers.forEach((e) => {
      const t = Sn(op, {
        to: e.teleportElement,
        key: e.id
      }, Sn(e.component, {
        ref: e.id,
        ...e.props
      }));
      n.push(t);
    }), Sn("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    }, ...n);
  }
});
li({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = Rl(null);
    return Ku(() => {
      const { pluginKey: r, editor: i, tippyOptions: o, shouldShow: s } = n;
      i.registerPlugin(ih({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: o,
        shouldShow: s
      }));
    }), Dl(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Sn("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
li({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return Sn(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
li({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return Sn(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
class sw {
  constructor(e, { props: t = {}, editor: r }) {
    if (this.id = Math.floor(Math.random() * 4294967295).toString(), this.editor = r, this.component = Gu(e), this.teleportElement = document.createElement("div"), this.element = this.teleportElement, this.props = Ju(t), this.editor.vueRenderers.set(this.id, this), this.editor.contentComponent) {
      if (this.editor.contentComponent.update(), this.teleportElement.children.length !== 1)
        throw Error("VueRenderer doesn’t support multiple child elements.");
      this.element = this.teleportElement.firstElementChild;
    }
  }
  get ref() {
    var e;
    return (e = this.editor.contentComponent) === null || e === void 0 ? void 0 : e.refs[this.id];
  }
  updateProps(e = {}) {
    Object.entries(e).forEach(([t, r]) => {
      this.props[t] = r;
    });
  }
  destroy() {
    this.editor.vueRenderers.delete(this.id);
  }
}
const lw = /^\s*>\s$/, oh = ae.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      Qr({
        find: lw,
        type: this.type
      })
    ];
  }
}), aw = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, cw = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, uw = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, dw = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, fw = _e.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Bn({
        find: aw,
        type: this.type
      }),
      Bn({
        find: uw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ln({
        find: cw,
        type: this.type
      }),
      ln({
        find: dw,
        type: this.type
      })
    ];
  }
}), hw = ae.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", K(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), ru = _e.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = Jo(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), iu = /^\s*([-+*])\s$/, pw = ae.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(hw.name, this.editor.getAttributes(ru.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = Qr({
      find: iu,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Qr({
      find: iu,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(ru.name),
      editor: this.editor
    })), [
      n
    ];
  }
}), mw = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))$/, gw = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))/g, yw = _e.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      Bn({
        find: mw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ln({
        find: gw,
        type: this.type
      })
    ];
  }
}), bw = /^```([a-z]+)?[\s\n]$/, ww = /^~~~([a-z]+)?[\s\n]$/, vw = ae.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: null,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, o = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((s) => s.startsWith(t)).map((s) => s.replace(t, ""))[0];
          return o || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      K(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const o = r.parentOffset === r.parent.nodeSize - 2, s = r.parent.textContent.endsWith(`

`);
        return !o || !s ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: o } = t;
        if (!o || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 || r.nodeAt(l) ? !1 : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      sl({
        find: bw,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      sl({
        find: ww,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new Z({
        key: new ce("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, o = i == null ? void 0 : i.mode;
            if (!t || !o)
              return !1;
            const { tr: s } = n.state;
            return n.state.selection.from === n.state.doc.nodeSize - (1 + n.state.selection.$to.depth * 2) ? s.insert(n.state.selection.from - 1, this.type.create({ language: o })) : s.replaceSelectionWith(this.type.create({ language: o })), s.setSelection(I.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.insertText(t.replace(/\r\n?/g, `
`)), s.setMeta("paste", !0), n.dispatch(s), !0;
          }
        }
      })
    ];
  }
}), kw = ae.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function xw(n = {}) {
  return new Z({
    view(e) {
      return new Cw(e, n);
    }
  });
}
class Cw {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let o = (s) => {
        this[i](s);
      };
      return e.dom.addEventListener(i, o), { name: i, handler: o };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r;
    if (t) {
      let l = e.nodeBefore, a = e.nodeAfter;
      if (l || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
        if (c) {
          let u = c.getBoundingClientRect(), d = l ? u.bottom : u.top;
          l && a && (d = (d + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: u.left, right: u.right, top: d - this.width / 2, bottom: d + this.width / 2 };
        }
      }
    }
    if (!r) {
      let l = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: l.left - this.width / 2, right: l.left + this.width / 2, top: l.top, bottom: l.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let o, s;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      o = -pageXOffset, s = -pageYOffset;
    else {
      let l = i.getBoundingClientRect();
      o = l.left - i.scrollLeft, s = l.top - i.scrollTop;
    }
    this.element.style.left = r.left - o + "px", this.element.style.top = r.top - s + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !o) {
      let s = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = xd(this.editorView.state.doc, s, this.editorView.dragging.slice);
        l != null && (s = l);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const Sw = re.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      xw(this.options)
    ];
  }
});
class se extends z {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return se.valid(r) ? new se(r) : z.near(r);
  }
  content() {
    return E.empty;
  }
  eq(e) {
    return e instanceof se && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new se(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new ma(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !Tw(e) || !Mw(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e: for (; ; ) {
      if (!r && se.valid(e))
        return e;
      let i = e.pos, o = null;
      for (let s = e.depth; ; s--) {
        let l = e.node(s);
        if (t > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
          o = l.child(t > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        i += t;
        let a = e.doc.resolve(i);
        if (se.valid(a))
          return a;
      }
      for (; ; ) {
        let s = t > 0 ? o.firstChild : o.lastChild;
        if (!s) {
          if (o.isAtom && !o.isText && !P.isSelectable(o)) {
            e = e.doc.resolve(i + o.nodeSize * t), r = !1;
            continue e;
          }
          break;
        }
        o = s, i += t;
        let l = e.doc.resolve(i);
        if (se.valid(l))
          return l;
      }
      return null;
    }
  }
}
se.prototype.visible = !1;
se.findFrom = se.findGapCursorFrom;
z.jsonID("gapcursor", se);
class ma {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new ma(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return se.valid(t) ? new se(t) : z.near(t);
  }
}
function Tw(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Mw(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Aw() {
  return new Z({
    props: {
      decorations: Rw,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && se.valid(t) ? new se(t) : null;
      },
      handleClick: Ow,
      handleKeyDown: Ew,
      handleDOMEvents: { beforeinput: Nw }
    }
  });
}
const Ew = Kl({
  ArrowLeft: Pi("horiz", -1),
  ArrowRight: Pi("horiz", 1),
  ArrowUp: Pi("vert", -1),
  ArrowDown: Pi("vert", 1)
});
function Pi(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, o) {
    let s = r.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof I) {
      if (!o.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = se.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new se(c))), !0) : !1;
  };
}
function Ow(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!se.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && P.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new se(r))), !0);
}
function Nw(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof se))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = S.empty;
  for (let s = r.length - 1; s >= 0; s--)
    i = S.from(r[s].createAndFill(null, i));
  let o = n.state.tr.replace(t.pos, t.pos, new E(i, 0, 0));
  return o.setSelection(I.near(o.doc.resolve(t.pos + 1))), n.dispatch(o), !1;
}
function Rw(n) {
  if (!(n.selection instanceof se))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", ne.create(n.doc, [Se.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const Dw = re.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      Aw()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = V(R(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), Lw = ae.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", K(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: o } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: l } = r.extensionManager, a = o || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => {
            if (u && a && s) {
              const d = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), Iw = ae.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, K(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => sl({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var yo = 200, we = function() {
};
we.prototype.append = function(e) {
  return e.length ? (e = we.from(e), !this.length && e || e.length < yo && this.leafAppend(e) || this.length < yo && e.leafPrepend(this) || this.appendInner(e)) : this;
};
we.prototype.prepend = function(e) {
  return e.length ? we.from(e).append(this) : this;
};
we.prototype.appendInner = function(e) {
  return new Pw(this, e);
};
we.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? we.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
we.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
we.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
we.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, t, r), i;
};
we.from = function(e) {
  return e instanceof we ? e : e && e.length ? new sh(e) : we.empty;
};
var sh = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, l) {
    for (var a = o; a < s; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, l) {
    for (var a = o - 1; a >= s; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= yo)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= yo)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(we);
we.empty = new sh([]);
var Pw = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, o) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(r, Math.min(i, l), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(we);
const Bw = 500;
class at {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    t && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, l, a, c = [], u = [];
    return this.items.forEach((d, f) => {
      if (!d.step) {
        i || (i = this.remapping(r, f + 1), o = i.maps.length), o--, u.push(d);
        return;
      }
      if (i) {
        u.push(new ht(d.map));
        let h = d.step.map(i.slice(o)), p;
        h && s.maybeStep(h).doc && (p = s.mapping.maps[s.mapping.maps.length - 1], c.push(new ht(p, void 0, void 0, c.length + u.length))), o--, p && i.appendMap(p, o);
      } else
        s.maybeStep(d.step);
      if (d.selection)
        return l = i ? d.selection.map(i.slice(o)) : d.selection, a = new at(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let o = [], s = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let d = e.steps[u].invert(e.docs[u]), f = new ht(e.mapping.maps[u], d, t), h;
      (h = a && a.merge(f)) && (f = h, u ? o.pop() : l = l.slice(0, l.length - 1)), o.push(f), t && (s++, t = void 0), i || (a = f);
    }
    let c = s - r.depth;
    return c > Hw && (l = zw(l, c), s -= c), new at(l.append(o), s);
  }
  remapping(e, t) {
    let r = new Ur();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new at(this.items.append(e.map((t) => new ht(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), o = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((f) => {
      let h = o.getMirror(--a);
      if (h == null)
        return;
      s = Math.min(s, h);
      let p = o.maps[h];
      if (f.step) {
        let g = e.steps[h].invert(e.docs[h]), m = f.selection && f.selection.map(o.slice(a + 1, h));
        m && l++, r.push(new ht(p, g, m));
      } else
        r.push(new ht(p));
    }, i);
    let c = [];
    for (let f = t; f < s; f++)
      c.push(new ht(o.maps[f]));
    let u = this.items.slice(0, i).append(c).append(r), d = new at(u, l);
    return d.emptyItemCount() > Bw && (d = d.compress(this.items.length - r.length)), d;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], o = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let a = s.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = s.selection && s.selection.map(t.slice(r));
          u && o++;
          let d = new ht(c.invert(), a, u), f, h = i.length - 1;
          (f = i.length && i[h].merge(d)) ? i[h] = f : i.push(d);
        }
      } else s.map && r--;
    }, this.items.length, 0), new at(we.from(i.reverse()), o);
  }
}
at.empty = new at(we.empty, 0);
function zw(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class ht {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new ht(t.getMap().invert(), t, this.selection);
    }
  }
}
class Ut {
  constructor(e, t, r, i, o) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const Hw = 20;
function Vw(n, e, t, r) {
  let i = t.getMeta(Nn), o;
  if (i)
    return i.historyState;
  t.getMeta(jw) && (n = new Ut(n.done, n.undone, null, 0, -1));
  let s = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (s && s.getMeta(Nn))
    return s.getMeta(Nn).redo ? new Ut(n.done.addTransform(t, void 0, r, Ji(e)), n.undone, ou(t.mapping.maps), n.prevTime, n.prevComposition) : new Ut(n.done, n.undone.addTransform(t, void 0, r, Ji(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !s && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !Fw(t, n.prevRanges)), c = s ? Ns(n.prevRanges, t.mapping) : ou(t.mapping.maps);
    return new Ut(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Ji(e)), at.empty, c, t.time, l ?? n.prevComposition);
  } else return (o = t.getMeta("rebased")) ? new Ut(n.done.rebased(t, o), n.undone.rebased(t, o), Ns(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new Ut(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), Ns(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function Fw(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (t = !0);
  }), t;
}
function ou(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function Ns(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
    i <= o && t.push(i, o);
  }
  return t;
}
function $w(n, e, t) {
  let r = Ji(e), i = Nn.get(e).spec.config, o = (t ? n.undone : n.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), l = (t ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), a = new Ut(t ? l : o.remaining, t ? o.remaining : l, null, 0, -1);
  return o.transform.setSelection(s).setMeta(Nn, { redo: t, historyState: a });
}
let Rs = !1, su = null;
function Ji(n) {
  let e = n.plugins;
  if (su != e) {
    Rs = !1, su = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        Rs = !0;
        break;
      }
  }
  return Rs;
}
const Nn = new ce("history"), jw = new ce("closeHistory");
function _w(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new Z({
    key: Nn,
    state: {
      init() {
        return new Ut(at.empty, at.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return Vw(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? ah : r == "historyRedo" ? ch : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function lh(n, e) {
  return (t, r) => {
    let i = Nn.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let o = $w(i, t, n);
      o && r(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const ah = lh(!1, !0), ch = lh(!0, !0), Ww = re.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => ah(n, e),
      redo: () => ({ state: n, dispatch: e }) => ch(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      _w(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), Uw = ae.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", K(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        const { $to: t } = e.selection, r = n();
        return t.parentOffset === 0 ? r.insertContentAt(Math.max(t.pos - 2, 0), { type: this.name }) : r.insertContent({ type: this.name }), r.command(({ tr: i, dispatch: o }) => {
          var s;
          if (o) {
            const { $to: l } = i.selection, a = l.end();
            if (l.nodeAfter)
              l.nodeAfter.isTextblock ? i.setSelection(I.create(i.doc, l.pos + 1)) : l.nodeAfter.isBlock ? i.setSelection(P.create(i.doc, l.pos)) : i.setSelection(I.create(i.doc, l.pos));
            else {
              const c = (s = l.parent.type.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.create();
              c && (i.insert(a, c), i.setSelection(I.create(i.doc, a + 1)));
            }
            i.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Pf({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), qw = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Kw = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Jw = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Gw = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Yw = _e.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Bn({
        find: qw,
        type: this.type
      }),
      Bn({
        find: Jw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ln({
        find: Kw,
        type: this.type
      }),
      ln({
        find: Gw,
        type: this.type
      })
    ];
  }
}), Xw = ae.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", K(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), Qw = ae.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", K(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), lu = _e.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = Jo(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), au = /^(\d+)\.\s$/, Zw = ae.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", K(this.options.HTMLAttributes, t), 0] : ["ol", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Qw.name, this.editor.getAttributes(lu.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = Qr({
      find: au,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Qr({
      find: au,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(lu.name) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), ev = ae.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), tv = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, nv = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, rv = _e.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      Bn({
        find: tv,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ln({
        find: nv,
        type: this.type
      })
    ];
  }
}), iv = ae.create({
  name: "text",
  group: "inline"
}), ov = re.create({
  name: "starterKit",
  addExtensions() {
    var n, e, t, r, i, o, s, l, a, c, u, d, f, h, p, g, m, y;
    const w = [];
    return this.options.blockquote !== !1 && w.push(oh.configure((n = this.options) === null || n === void 0 ? void 0 : n.blockquote)), this.options.bold !== !1 && w.push(fw.configure((e = this.options) === null || e === void 0 ? void 0 : e.bold)), this.options.bulletList !== !1 && w.push(pw.configure((t = this.options) === null || t === void 0 ? void 0 : t.bulletList)), this.options.code !== !1 && w.push(yw.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && w.push(vw.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && w.push(kw.configure((o = this.options) === null || o === void 0 ? void 0 : o.document)), this.options.dropcursor !== !1 && w.push(Sw.configure((s = this.options) === null || s === void 0 ? void 0 : s.dropcursor)), this.options.gapcursor !== !1 && w.push(Dw.configure((l = this.options) === null || l === void 0 ? void 0 : l.gapcursor)), this.options.hardBreak !== !1 && w.push(Lw.configure((a = this.options) === null || a === void 0 ? void 0 : a.hardBreak)), this.options.heading !== !1 && w.push(Iw.configure((c = this.options) === null || c === void 0 ? void 0 : c.heading)), this.options.history !== !1 && w.push(Ww.configure((u = this.options) === null || u === void 0 ? void 0 : u.history)), this.options.horizontalRule !== !1 && w.push(Uw.configure((d = this.options) === null || d === void 0 ? void 0 : d.horizontalRule)), this.options.italic !== !1 && w.push(Yw.configure((f = this.options) === null || f === void 0 ? void 0 : f.italic)), this.options.listItem !== !1 && w.push(Xw.configure((h = this.options) === null || h === void 0 ? void 0 : h.listItem)), this.options.orderedList !== !1 && w.push(Zw.configure((p = this.options) === null || p === void 0 ? void 0 : p.orderedList)), this.options.paragraph !== !1 && w.push(ev.configure((g = this.options) === null || g === void 0 ? void 0 : g.paragraph)), this.options.strike !== !1 && w.push(rv.configure((m = this.options) === null || m === void 0 ? void 0 : m.strike)), this.options.text !== !1 && w.push(iv.configure((y = this.options) === null || y === void 0 ? void 0 : y.text)), w;
  }
}), sv = "aaa1rp3barth4b0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0faromeo7ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re2s2c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y0eats7k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking0channel11l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t0isalat7u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0at2delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d0network8tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntdoor4ier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5gtv3iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0eles2s3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1nder2le4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster5ia3d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4de2k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0cys3drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7serati6ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic3tual5v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rthwesternmutual14on4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3ssagens7y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cher3ks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w0time7i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ffany5ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0channel7ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lkswagen7vo3te1ing3o2yage5u0elos6wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", lv = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5تصالات6رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", gr = (n, e) => {
  for (const t in e)
    n[t] = e[t];
  return n;
}, fl = "numeric", hl = "ascii", pl = "alpha", Gi = "asciinumeric", Bi = "alphanumeric", ml = "domain", uh = "emoji", av = "scheme", cv = "slashscheme", cu = "whitespace";
function uv(n, e) {
  return n in e || (e[n] = []), e[n];
}
function xn(n, e, t) {
  e[fl] && (e[Gi] = !0, e[Bi] = !0), e[hl] && (e[Gi] = !0, e[pl] = !0), e[Gi] && (e[Bi] = !0), e[pl] && (e[Bi] = !0), e[Bi] && (e[ml] = !0), e[uh] && (e[ml] = !0);
  for (const r in e) {
    const i = uv(r, t);
    i.indexOf(n) < 0 && i.push(n);
  }
}
function dv(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function ze(n) {
  n === void 0 && (n = null), this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
ze.groups = {};
ze.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(n))
        return o;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(n, e) {
    return e === void 0 && (e = !1), e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, r) {
    for (let i = 0; i < n.length; i++)
      this.tt(n[i], e, t, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(n, e, t, r) {
    r = r || ze.groups;
    let i;
    return e && e.j ? i = e : (i = new ze(e), t && r && xn(e, t, r)), this.jr.push([n, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(n, e, t, r) {
    let i = this;
    const o = n.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(n[s]);
    return i.tt(n[o - 1], e, t, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(n, e, t, r) {
    r = r || ze.groups;
    const i = this;
    if (e && e.j)
      return i.j[n] = e, e;
    const o = e;
    let s, l = i.go(n);
    if (l ? (s = new ze(), gr(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new ze(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const a = gr(dv(s.t, r), t);
          xn(o, a, r);
        } else t && xn(o, t, r);
      s.t = o;
    }
    return i.j[n] = s, s;
  }
};
const L = (n, e, t, r, i) => n.ta(e, t, r, i), Qe = (n, e, t, r, i) => n.tr(e, t, r, i), uu = (n, e, t, r, i) => n.ts(e, t, r, i), M = (n, e, t, r, i) => n.tt(e, t, r, i), Rt = "WORD", gl = "UWORD", ri = "LOCALHOST", yl = "TLD", bl = "UTLD", Yi = "SCHEME", er = "SLASH_SCHEME", ga = "NUM", dh = "WS", ya = "NL", rr = "OPENBRACE", Vr = "OPENBRACKET", Fr = "OPENANGLEBRACKET", $r = "OPENPAREN", bn = "CLOSEBRACE", ir = "CLOSEBRACKET", or = "CLOSEANGLEBRACKET", wn = "CLOSEPAREN", bo = "AMPERSAND", wo = "APOSTROPHE", vo = "ASTERISK", qt = "AT", ko = "BACKSLASH", xo = "BACKTICK", Co = "CARET", Jt = "COLON", ba = "COMMA", So = "DOLLAR", pt = "DOT", To = "EQUALS", wa = "EXCLAMATION", mt = "HYPHEN", Mo = "PERCENT", Ao = "PIPE", Eo = "PLUS", Oo = "POUND", No = "QUERY", va = "QUOTE", ka = "SEMI", gt = "SLASH", jr = "TILDE", Ro = "UNDERSCORE", fh = "EMOJI", Do = "SYM";
var hh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD: Rt,
  UWORD: gl,
  LOCALHOST: ri,
  TLD: yl,
  UTLD: bl,
  SCHEME: Yi,
  SLASH_SCHEME: er,
  NUM: ga,
  WS: dh,
  NL: ya,
  OPENBRACE: rr,
  OPENBRACKET: Vr,
  OPENANGLEBRACKET: Fr,
  OPENPAREN: $r,
  CLOSEBRACE: bn,
  CLOSEBRACKET: ir,
  CLOSEANGLEBRACKET: or,
  CLOSEPAREN: wn,
  AMPERSAND: bo,
  APOSTROPHE: wo,
  ASTERISK: vo,
  AT: qt,
  BACKSLASH: ko,
  BACKTICK: xo,
  CARET: Co,
  COLON: Jt,
  COMMA: ba,
  DOLLAR: So,
  DOT: pt,
  EQUALS: To,
  EXCLAMATION: wa,
  HYPHEN: mt,
  PERCENT: Mo,
  PIPE: Ao,
  PLUS: Eo,
  POUND: Oo,
  QUERY: No,
  QUOTE: va,
  SEMI: ka,
  SLASH: gt,
  TILDE: jr,
  UNDERSCORE: Ro,
  EMOJI: fh,
  SYM: Do
});
const Yn = /[a-z]/, Ds = new RegExp("\\p{L}", "u"), Ls = new RegExp("\\p{Emoji}", "u"), Is = /\d/, du = /\s/, fu = `
`, fv = "️", hv = "‍";
let zi = null, Hi = null;
function pv(n) {
  n === void 0 && (n = []);
  const e = {};
  ze.groups = e;
  const t = new ze();
  zi == null && (zi = hu(sv)), Hi == null && (Hi = hu(lv)), M(t, "'", wo), M(t, "{", rr), M(t, "[", Vr), M(t, "<", Fr), M(t, "(", $r), M(t, "}", bn), M(t, "]", ir), M(t, ">", or), M(t, ")", wn), M(t, "&", bo), M(t, "*", vo), M(t, "@", qt), M(t, "`", xo), M(t, "^", Co), M(t, ":", Jt), M(t, ",", ba), M(t, "$", So), M(t, ".", pt), M(t, "=", To), M(t, "!", wa), M(t, "-", mt), M(t, "%", Mo), M(t, "|", Ao), M(t, "+", Eo), M(t, "#", Oo), M(t, "?", No), M(t, '"', va), M(t, "/", gt), M(t, ";", ka), M(t, "~", jr), M(t, "_", Ro), M(t, "\\", ko);
  const r = Qe(t, Is, ga, {
    [fl]: !0
  });
  Qe(r, Is, r);
  const i = Qe(t, Yn, Rt, {
    [hl]: !0
  });
  Qe(i, Yn, i);
  const o = Qe(t, Ds, gl, {
    [pl]: !0
  });
  Qe(o, Yn), Qe(o, Ds, o);
  const s = Qe(t, du, dh, {
    [cu]: !0
  });
  M(t, fu, ya, {
    [cu]: !0
  }), M(s, fu), Qe(s, du, s);
  const l = Qe(t, Ls, fh, {
    [uh]: !0
  });
  Qe(l, Ls, l), M(l, fv, l);
  const a = M(l, hv);
  Qe(a, Ls, l);
  const c = [[Yn, i]], u = [[Yn, null], [Ds, o]];
  for (let d = 0; d < zi.length; d++)
    jt(t, zi[d], yl, Rt, c);
  for (let d = 0; d < Hi.length; d++)
    jt(t, Hi[d], bl, gl, u);
  xn(yl, {
    tld: !0,
    ascii: !0
  }, e), xn(bl, {
    utld: !0,
    alpha: !0
  }, e), jt(t, "file", Yi, Rt, c), jt(t, "mailto", Yi, Rt, c), jt(t, "http", er, Rt, c), jt(t, "https", er, Rt, c), jt(t, "ftp", er, Rt, c), jt(t, "ftps", er, Rt, c), xn(Yi, {
    scheme: !0,
    ascii: !0
  }, e), xn(er, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((d, f) => d[0] > f[0] ? 1 : -1);
  for (let d = 0; d < n.length; d++) {
    const f = n[d][0], p = n[d][1] ? {
      [av]: !0
    } : {
      [cv]: !0
    };
    f.indexOf("-") >= 0 ? p[ml] = !0 : Yn.test(f) ? Is.test(f) ? p[Gi] = !0 : p[hl] = !0 : p[fl] = !0, uu(t, f, f, p);
  }
  return uu(t, "localhost", ri, {
    ascii: !0
  }), t.jd = new ze(Do), {
    start: t,
    tokens: gr({
      groups: e
    }, hh)
  };
}
function mv(n, e) {
  const t = gv(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let l = n, a = null, c = 0, u = null, d = -1, f = -1;
    for (; s < r && (a = l.go(t[s])); )
      l = a, l.accepts() ? (d = 0, f = 0, u = l) : d >= 0 && (d += t[s].length, f++), c += t[s].length, o += t[s].length, s++;
    o -= d, s -= f, c -= d, i.push({
      t: u.t,
      // token type/name
      v: e.slice(o - c, o),
      // string value
      s: o - c,
      // start index
      e: o
      // end index (excluding)
    });
  }
  return i;
}
function gv(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let i = n.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === t || (o = n.charCodeAt(r + 1)) < 56320 || o > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function jt(n, e, t, r, i) {
  let o;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    n.j[a] ? o = n.j[a] : (o = new ze(r), o.jr = i.slice(), n.j[a] = o), n = o;
  }
  return o = new ze(t), o.jr = i.slice(), n.j[e[s - 1]] = o, o;
}
function hu(n) {
  const e = [], t = [];
  let r = 0, i = "0123456789";
  for (; r < n.length; ) {
    let o = 0;
    for (; i.indexOf(n[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(t.join(""));
      for (let s = parseInt(n.substring(r, r + o), 10); s > 0; s--)
        t.pop();
      r += o;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const ii = {
  defaultProtocol: "http",
  events: null,
  format: pu,
  formatHref: pu,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function xa(n, e) {
  e === void 0 && (e = null);
  let t = gr({}, ii);
  n && (t = gr(t, n instanceof xa ? n.o : n));
  const r = t.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
xa.prototype = {
  o: ii,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(n, e, t) {
    const r = e != null;
    let i = this.o[n];
    return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : ii[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function pu(n) {
  return n;
}
function ph(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
ph.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
  */
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(n) {
    return n === void 0 && (n = ii.defaultProtocol), {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), o = this.toFormattedString(n), s = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), u = n.getObj("attributes", t, e), d = n.getObj("events", t, e);
    return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), u && gr(s, u), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: d
    };
  }
};
function Yo(n, e) {
  class t extends ph {
    constructor(i, o) {
      super(i, o), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const mu = Yo("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), gu = Yo("text"), yv = Yo("nl"), pn = Yo("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n) {
    return n === void 0 && (n = ii.defaultProtocol), this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== ri && n[1].t === Jt;
  }
}), ge = (n) => new ze(n);
function bv(n) {
  let {
    groups: e
  } = n;
  const t = e.domain.concat([bo, vo, qt, ko, xo, Co, So, To, mt, ga, Mo, Ao, Eo, Oo, gt, Do, jr, Ro]), r = [wo, or, bn, ir, wn, Jt, ba, pt, wa, Fr, rr, Vr, $r, No, va, ka], i = [bo, wo, vo, ko, xo, Co, bn, So, To, mt, rr, Mo, Ao, Eo, Oo, No, gt, Do, jr, Ro], o = ge(), s = M(o, jr);
  L(s, i, s), L(s, e.domain, s);
  const l = ge(), a = ge(), c = ge();
  L(o, e.domain, l), L(o, e.scheme, a), L(o, e.slashscheme, c), L(l, i, s), L(l, e.domain, l);
  const u = M(l, qt);
  M(s, qt, u), M(a, qt, u), M(c, qt, u);
  const d = M(s, pt);
  L(d, i, s), L(d, e.domain, s);
  const f = ge();
  L(u, e.domain, f), L(f, e.domain, f);
  const h = M(f, pt);
  L(h, e.domain, f);
  const p = ge(mu);
  L(h, e.tld, p), L(h, e.utld, p), M(u, ri, p);
  const g = M(f, mt);
  L(g, e.domain, f), L(p, e.domain, f), M(p, pt, h), M(p, mt, g);
  const m = M(p, Jt);
  L(m, e.numeric, mu);
  const y = M(l, mt), w = M(l, pt);
  L(y, e.domain, l), L(w, i, s), L(w, e.domain, l);
  const C = ge(pn);
  L(w, e.tld, C), L(w, e.utld, C), L(C, e.domain, l), L(C, i, s), M(C, pt, w), M(C, mt, y), M(C, qt, u);
  const b = M(C, Jt), T = ge(pn);
  L(b, e.numeric, T);
  const v = ge(pn), O = ge();
  L(v, t, v), L(v, r, O), L(O, t, v), L(O, r, O), M(C, gt, v), M(T, gt, v);
  const A = M(a, Jt), N = M(c, Jt), B = M(N, gt), W = M(B, gt);
  L(a, e.domain, l), M(a, pt, w), M(a, mt, y), L(c, e.domain, l), M(c, pt, w), M(c, mt, y), L(A, e.domain, v), M(A, gt, v), L(W, e.domain, v), L(W, t, v), M(W, gt, v);
  const U = M(v, rr), q = M(v, Vr), fe = M(v, Fr), ee = M(v, $r);
  M(O, rr, U), M(O, Vr, q), M(O, Fr, fe), M(O, $r, ee), M(U, bn, v), M(q, ir, v), M(fe, or, v), M(ee, wn, v), M(U, bn, v);
  const G = ge(pn), Y = ge(pn), _ = ge(pn), ue = ge(pn);
  L(U, t, G), L(q, t, Y), L(fe, t, _), L(ee, t, ue);
  const oe = ge(), Be = ge(), me = ge(), Ge = ge();
  return L(U, r), L(q, r), L(fe, r), L(ee, r), L(G, t, G), L(Y, t, Y), L(_, t, _), L(ue, t, ue), L(G, r, G), L(Y, r, Y), L(_, r, _), L(ue, r, ue), L(oe, t, oe), L(Be, t, Y), L(me, t, _), L(Ge, t, ue), L(oe, r, oe), L(Be, r, Be), L(me, r, me), L(Ge, r, Ge), M(Y, ir, v), M(_, or, v), M(ue, wn, v), M(G, bn, v), M(Be, ir, v), M(me, or, v), M(Ge, wn, v), M(oe, wn, v), M(o, ri, C), M(o, ya, yv), {
    start: o,
    tokens: hh
  };
}
function wv(n, e, t) {
  let r = t.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let l = n, a = null, c = null, u = 0, d = null, f = -1;
    for (; i < r && !(a = l.go(t[i].t)); )
      s.push(t[i++]);
    for (; i < r && (c = a || l.go(t[i].t)); )
      a = null, l = c, l.accepts() ? (f = 0, d = l) : f >= 0 && f++, i++, u++;
    if (f < 0)
      i -= u, i < r && (s.push(t[i]), i++);
    else {
      s.length > 0 && (o.push(Ps(gu, e, s)), s = []), i -= f, u -= f;
      const h = d.t, p = t.slice(i - u, i);
      o.push(Ps(h, e, p));
    }
  }
  return s.length > 0 && o.push(Ps(gu, e, s)), o;
}
function Ps(n, e, t) {
  const r = t[0].s, i = t[t.length - 1].e, o = e.slice(r, i);
  return new n(o, t);
}
const vv = typeof console < "u" && console && console.warn || (() => {
}), kv = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ie = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function xv() {
  ze.groups = {}, ie.scanner = null, ie.parser = null, ie.tokenQueue = [], ie.pluginQueue = [], ie.customSchemes = [], ie.initialized = !1;
}
function yu(n, e) {
  if (e === void 0 && (e = !1), ie.initialized && vv(`linkifyjs: already initialized - will not register custom scheme "${n}" ${kv}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
 1. Must only contain digits, lowercase ASCII letters or "-"
 2. Cannot start or end with "-"
 3. "-" cannot repeat`);
  ie.customSchemes.push([n, e]);
}
function Cv() {
  ie.scanner = pv(ie.customSchemes);
  for (let n = 0; n < ie.tokenQueue.length; n++)
    ie.tokenQueue[n][1]({
      scanner: ie.scanner
    });
  ie.parser = bv(ie.scanner.tokens);
  for (let n = 0; n < ie.pluginQueue.length; n++)
    ie.pluginQueue[n][1]({
      scanner: ie.scanner,
      parser: ie.parser
    });
  ie.initialized = !0;
}
function mh(n) {
  return ie.initialized || Cv(), wv(ie.parser.start, n, mv(ie.scanner.start, n));
}
function gh(n, e, t) {
  if (e === void 0 && (e = null), t === void 0 && (t = null), e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new xa(t), i = mh(n), o = [];
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    l.isLink && (!e || l.t === e) && o.push(l.toFormattedObject(r));
  }
  return o;
}
function Sv(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function Tv(n) {
  return new Z({
    key: new ce("autolink"),
    appendTransaction: (e, t, r) => {
      const i = e.some((c) => c.docChanged) && !t.doc.eq(r.doc), o = e.some((c) => c.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: s } = r, l = L0(t.doc, [...e]);
      if (F0(l).forEach(({ newRange: c }) => {
        const u = P0(r.doc, c, (h) => h.isTextblock);
        let d, f;
        if (u.length > 1 ? (d = u[0], f = r.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ")) : u.length && r.doc.textBetween(c.from, c.to, " ", " ").endsWith(" ") && (d = u[0], f = r.doc.textBetween(d.pos, c.to, void 0, " ")), d && f) {
          const h = f.split(" ").filter((y) => y !== "");
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], g = d.pos + f.lastIndexOf(p);
          if (!p)
            return !1;
          const m = mh(p).map((y) => y.toObject());
          if (!Sv(m))
            return !1;
          m.filter((y) => y.isLink).map((y) => ({
            ...y,
            from: g + y.start + 1,
            to: g + y.end + 1
          })).filter((y) => r.schema.marks.code ? !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code) : !0).filter((y) => n.validate ? n.validate(y.value) : !0).forEach((y) => {
            oa(y.from, y.to, r.doc).some((w) => w.mark.type === n.type) || s.addMark(y.from, y.to, n.type.create({
              href: y.href
            }));
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function Mv(n) {
  return new Z({
    key: new ce("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var i, o;
        if (n.whenNotEditable && e.editable || r.button !== 0)
          return !1;
        let s = r.target;
        const l = [];
        for (; s.nodeName !== "DIV"; )
          l.push(s), s = s.parentNode;
        if (!l.find((f) => f.nodeName === "A"))
          return !1;
        const a = Lf(e.state, n.type.name), c = r.target, u = (i = c == null ? void 0 : c.href) !== null && i !== void 0 ? i : a.href, d = (o = c == null ? void 0 : c.target) !== null && o !== void 0 ? o : a.target;
        return c && u ? (window.open(u, d), !0) : !1;
      }
    }
  });
}
function Av(n) {
  return new Z({
    key: new ce("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: i } = e, { selection: o } = i, { empty: s } = o;
        if (s)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = gh(l).find((c) => c.isLink && c.value === l);
        return !l || !a ? !1 : (n.editor.commands.setMark(n.type, {
          href: a.href
        }), !0);
      }
    }
  });
}
const Ev = _e.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  onCreate() {
    this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        yu(n);
        return;
      }
      yu(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    xv();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      validate: void 0
    };
  },
  addAttributes() {
    return {
      href: {
        default: null
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [{ tag: 'a[href]:not([href *= "javascript:" i])' }];
  },
  renderHTML({ HTMLAttributes: n }) {
    var e;
    return !((e = n.href) === null || e === void 0) && e.startsWith("javascript:") ? ["a", K(this.options.HTMLAttributes, { ...n, href: "" }), 0] : ["a", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => e().setMark(this.name, n).setMeta("preventAutolink", !0).run(),
      toggleLink: (n) => ({ chain: e }) => e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run(),
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      ln({
        find: (n) => {
          const e = [];
          if (n) {
            const t = gh(n).filter((r) => r.isLink);
            t.length && t.forEach((r) => e.push({
              text: r.value,
              data: {
                href: r.href
              },
              index: r.start
            }));
          }
          return e;
        },
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [];
    return this.options.autolink && n.push(Tv({
      type: this.type,
      validate: this.options.validate
    })), this.options.openOnClick && n.push(Mv({
      type: this.type,
      whenNotEditable: this.options.openOnClick === "whenNotEditable"
    })), this.options.linkOnPaste && n.push(Av({
      editor: this.editor,
      type: this.type
    })), n;
  }
}), Ov = re.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      considerAnyAsEmpty: !1,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new Z({
        key: new ce("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            var t;
            const r = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: i } = e, o = [];
            if (!r)
              return null;
            const { firstChild: s } = n.content, l = s && s.type.isLeaf, a = s && s.isAtom, c = this.options.considerAnyAsEmpty ? !0 : s && s.type.name === ((t = n.type.contentMatch.defaultType) === null || t === void 0 ? void 0 : t.name), u = n.content.childCount <= 1 && s && c && s.nodeSize <= 2 && (!l || !a);
            return n.descendants((d, f) => {
              const h = i >= f && i <= f + d.nodeSize, p = !d.isLeaf && !d.childCount;
              if ((h || !this.options.showOnlyCurrent) && p) {
                const g = [this.options.emptyNodeClass];
                u && g.push(this.options.emptyEditorClass);
                const m = Se.node(f, f + d.nodeSize, {
                  class: g.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: d,
                    pos: f,
                    hasAnchor: h
                  }) : this.options.placeholder
                });
                o.push(m);
              }
              return this.options.includeChildren;
            }), ne.create(n, o);
          }
        }
      })
    ];
  }
});
var wl, vl;
if (typeof WeakMap < "u") {
  let n = /* @__PURE__ */ new WeakMap();
  wl = (e) => n.get(e), vl = (e, t) => (n.set(e, t), t);
} else {
  const n = [];
  let t = 0;
  wl = (r) => {
    for (let i = 0; i < n.length; i += 2)
      if (n[i] == r) return n[i + 1];
  }, vl = (r, i) => (t == 10 && (t = 0), n[t++] = r, n[t++] = i);
}
var le = class {
  constructor(n, e, t, r) {
    this.width = n, this.height = e, this.map = t, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(n) {
    for (let e = 0; e < this.map.length; e++) {
      const t = this.map[e];
      if (t != n) continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let l = 1; o < this.width && this.map[e + l] == t; l++)
        o++;
      for (let l = 1; s < this.height && this.map[e + this.width * l] == t; l++)
        s++;
      return { left: r, top: i, right: o, bottom: s };
    }
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(n) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == n)
        return e % this.width;
    throw new RangeError(`No cell with offset ${n} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(n, e, t) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(n);
    return e == "horiz" ? (t < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (t < 0 ? r - 1 : i)] : (t < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (t < 0 ? o - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(n, e) {
    const {
      left: t,
      right: r,
      top: i,
      bottom: o
    } = this.findCell(n), {
      left: s,
      right: l,
      top: a,
      bottom: c
    } = this.findCell(e);
    return {
      left: Math.min(t, s),
      top: Math.min(i, a),
      right: Math.max(r, l),
      bottom: Math.max(o, c)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(n) {
    const e = [], t = {};
    for (let r = n.top; r < n.bottom; r++)
      for (let i = n.left; i < n.right; i++) {
        const o = r * this.width + i, s = this.map[o];
        t[s] || (t[s] = !0, !(i == n.left && i && this.map[o - 1] == s || r == n.top && r && this.map[o - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(n, e, t) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + t.child(r).nodeSize;
      if (r == n) {
        let s = e + n * this.width;
        const l = (n + 1) * this.width;
        for (; s < l && this.map[s] < i; ) s++;
        return s == l ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  // Find the table map for the given table node.
  static get(n) {
    return wl(n) || vl(n, Nv(n));
  }
};
function Nv(n) {
  if (n.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + n.type.name);
  const e = Rv(n), t = n.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let c = 0, u = e * t; c < u; c++) r[c] = 0;
  for (let c = 0, u = 0; c < t; c++) {
    const d = n.child(c);
    u++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; ) i++;
      if (p == d.childCount) break;
      const g = d.child(p), { colspan: m, rowspan: y, colwidth: w } = g.attrs;
      for (let C = 0; C < y; C++) {
        if (C + c >= t) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: u,
            n: y - C
          });
          break;
        }
        const b = i + C * e;
        for (let T = 0; T < m; T++) {
          r[b + T] == 0 ? r[b + T] = u : (o || (o = [])).push({
            type: "collision",
            row: c,
            pos: u,
            n: m - T
          });
          const v = w && w[T];
          if (v) {
            const O = (b + T) % e * 2, A = s[O];
            A == null || A != v && s[O + 1] == 1 ? (s[O] = v, s[O + 1] = 1) : A == v && s[O + 1]++;
          }
        }
      }
      i += m, u += g.nodeSize;
    }
    const f = (c + 1) * e;
    let h = 0;
    for (; i < f; ) r[i++] == 0 && h++;
    h && (o || (o = [])).push({ type: "missing", row: c, n: h }), u++;
  }
  (e === 0 || t === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const l = new le(e, t, r, o);
  let a = !1;
  for (let c = 0; !a && c < s.length; c += 2)
    s[c] != null && s[c + 1] < t && (a = !0);
  return a && Dv(l, s, n), l;
}
function Rv(n) {
  let e = -1, t = !1;
  for (let r = 0; r < n.childCount; r++) {
    const i = n.child(r);
    let o = 0;
    if (t)
      for (let s = 0; s < r; s++) {
        const l = n.child(s);
        for (let a = 0; a < l.childCount; a++) {
          const c = l.child(a);
          s + c.attrs.rowspan > r && (o += c.attrs.colspan);
        }
      }
    for (let s = 0; s < i.childCount; s++) {
      const l = i.child(s);
      o += l.attrs.colspan, l.attrs.rowspan > 1 && (t = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function Dv(n, e, t) {
  n.problems || (n.problems = []);
  const r = {};
  for (let i = 0; i < n.map.length; i++) {
    const o = n.map[i];
    if (r[o]) continue;
    r[o] = !0;
    const s = t.nodeAt(o);
    if (!s)
      throw new RangeError(`No cell with offset ${o} found`);
    let l = null;
    const a = s.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const u = (i + c) % n.width, d = e[u * 2];
      d != null && (!a.colwidth || a.colwidth[c] != d) && ((l || (l = Lv(a)))[c] = d);
    }
    l && n.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: l
    });
  }
}
function Lv(n) {
  if (n.colwidth) return n.colwidth.slice();
  const e = [];
  for (let t = 0; t < n.colspan; t++) e.push(0);
  return e;
}
function Oe(n) {
  let e = n.cached.tableNodeTypes;
  if (!e) {
    e = n.cached.tableNodeTypes = {};
    for (const t in n.nodes) {
      const r = n.nodes[t], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
var Gt = new ce("selectingCells");
function br(n) {
  for (let e = n.depth - 1; e > 0; e--)
    if (n.node(e).type.spec.tableRole == "row")
      return n.node(0).resolve(n.before(e + 1));
  return null;
}
function Iv(n) {
  for (let e = n.depth; e > 0; e--) {
    const t = n.node(e).type.spec.tableRole;
    if (t === "cell" || t === "header_cell") return n.node(e);
  }
  return null;
}
function ut(n) {
  const e = n.selection.$head;
  for (let t = e.depth; t > 0; t--)
    if (e.node(t).type.spec.tableRole == "row") return !0;
  return !1;
}
function Xo(n) {
  const e = n.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const t = br(e.$head) || Pv(e.$head);
  if (t)
    return t;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function Pv(n) {
  for (let e = n.nodeAfter, t = n.pos; e; e = e.firstChild, t++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return n.doc.resolve(t);
  }
  for (let e = n.nodeBefore, t = n.pos; e; e = e.lastChild, t--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return n.doc.resolve(t - e.nodeSize);
  }
}
function kl(n) {
  return n.parent.type.spec.tableRole == "row" && !!n.nodeAfter;
}
function Bv(n) {
  return n.node(0).resolve(n.pos + n.nodeAfter.nodeSize);
}
function Ca(n, e) {
  return n.depth == e.depth && n.pos >= e.start(-1) && n.pos <= e.end(-1);
}
function yh(n, e, t) {
  const r = n.node(-1), i = le.get(r), o = n.start(-1), s = i.nextCell(n.pos - o, e, t);
  return s == null ? null : n.node(0).resolve(o + s);
}
function Hn(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan - t };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, t), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function bh(n, e, t = 1) {
  const r = { ...n, colspan: n.colspan + t };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < t; i++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function zv(n, e, t) {
  const r = Oe(e.type.schema).header_cell;
  for (let i = 0; i < n.height; i++)
    if (e.nodeAt(n.map[t + i * n.width]).type != r)
      return !1;
  return !0;
}
var Q = class Dt extends z {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, t = e) {
    const r = e.node(-1), i = le.get(r), o = e.start(-1), s = i.rectBetween(
      e.pos - o,
      t.pos - o
    ), l = e.node(0), a = i.cellsInRect(s).filter((u) => u != t.pos - o);
    a.unshift(t.pos - o);
    const c = a.map((u) => {
      const d = r.nodeAt(u);
      if (!d)
        throw RangeError(`No cell with offset ${u} found`);
      const f = o + u + 1;
      return new Ad(
        l.resolve(f),
        l.resolve(f + d.content.size)
      );
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
  }
  map(e, t) {
    const r = e.resolve(t.map(this.$anchorCell.pos)), i = e.resolve(t.map(this.$headCell.pos));
    if (kl(r) && kl(i) && Ca(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? Dt.rowSelection(r, i) : o && this.isColSelection() ? Dt.colSelection(r, i) : new Dt(r, i);
    }
    return I.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), t = le.get(e), r = this.$anchorCell.start(-1), i = t.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), o = {}, s = [];
    for (let a = i.top; a < i.bottom; a++) {
      const c = [];
      for (let u = a * t.width + i.left, d = i.left; d < i.right; d++, u++) {
        const f = t.map[u];
        if (o[f]) continue;
        o[f] = !0;
        const h = t.findCell(f);
        let p = e.nodeAt(f);
        if (!p)
          throw RangeError(`No cell with offset ${f} found`);
        const g = i.left - h.left, m = h.right - i.right;
        if (g > 0 || m > 0) {
          let y = p.attrs;
          if (g > 0 && (y = Hn(y, 0, g)), m > 0 && (y = Hn(
            y,
            y.colspan - m,
            m
          )), h.left < i.left) {
            if (p = p.type.createAndFill(y), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(y)}`
              );
          } else
            p = p.type.create(y, p.content);
        }
        if (h.top < i.top || h.bottom > i.bottom) {
          const y = {
            ...p.attrs,
            rowspan: Math.min(h.bottom, i.bottom) - Math.max(h.top, i.top)
          };
          h.top < i.top ? p = p.type.createAndFill(y) : p = p.type.create(y, p.content);
        }
        c.push(p);
      }
      s.push(e.child(a).copy(S.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : s;
    return new E(S.from(l), 1, 1);
  }
  replace(e, t = E.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: l, $to: a } = i[s], c = e.mapping.slice(r);
      e.replace(
        c.map(l.pos),
        c.map(a.pos),
        s ? E.empty : t
      );
    }
    const o = z.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    o && e.setSelection(o);
  }
  replaceWith(e, t) {
    this.replace(e, new E(S.from(t), 0, 0));
  }
  forEachCell(e) {
    const t = this.$anchorCell.node(-1), r = le.get(t), i = this.$anchorCell.start(-1), o = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let s = 0; s < o.length; s++)
      e(t.nodeAt(o[s]), i + o[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
    if (Math.min(e, t) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = t + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, i) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, t = e) {
    const r = e.node(-1), i = le.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
    return s.top <= l.top ? (s.top > 0 && (e = a.resolve(o + i.map[s.left])), l.bottom < i.height && (t = a.resolve(
      o + i.map[i.width * (i.height - 1) + l.right - 1]
    ))) : (l.top > 0 && (t = a.resolve(o + i.map[l.left])), s.bottom < i.height && (e = a.resolve(
      o + i.map[i.width * (i.height - 1) + s.right - 1]
    ))), new Dt(e, t);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), t = le.get(e), r = this.$anchorCell.start(-1), i = t.colCount(this.$anchorCell.pos - r), o = t.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0) return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, l) == t.width;
  }
  eq(e) {
    return e instanceof Dt && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, t = e) {
    const r = e.node(-1), i = le.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
    return s.left <= l.left ? (s.left > 0 && (e = a.resolve(
      o + i.map[s.top * i.width]
    )), l.right < i.width && (t = a.resolve(
      o + i.map[i.width * (l.top + 1) - 1]
    ))) : (l.left > 0 && (t = a.resolve(o + i.map[l.top * i.width])), s.right < i.width && (e = a.resolve(
      o + i.map[i.width * (s.top + 1) - 1]
    ))), new Dt(e, t);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, t) {
    return new Dt(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    return new Dt(e.resolve(t), e.resolve(r));
  }
  getBookmark() {
    return new Hv(this.$anchorCell.pos, this.$headCell.pos);
  }
};
Q.prototype.visible = !1;
z.jsonID("cell", Q);
var Hv = class wh {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new wh(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const t = e.resolve(this.anchor), r = e.resolve(this.head);
    return t.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && r.index() < r.parent.childCount && Ca(t, r) ? new Q(t, r) : z.near(r, 1);
  }
};
function Vv(n) {
  if (!(n.selection instanceof Q)) return null;
  const e = [];
  return n.selection.forEachCell((t, r) => {
    e.push(
      Se.node(r, r + t.nodeSize, { class: "selectedCell" })
    );
  }), ne.create(n.doc, e);
}
function Fv({ $from: n, $to: e }) {
  if (n.pos == e.pos || n.pos < e.pos - 6) return !1;
  let t = n.pos, r = e.pos, i = n.depth;
  for (; i >= 0 && !(n.after(i + 1) < n.end(i)); i--, t++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return t == r && /row|table/.test(n.node(i).type.spec.tableRole);
}
function $v({ $from: n, $to: e }) {
  let t, r;
  for (let i = n.depth; i > 0; i--) {
    const o = n.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      t = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return t !== r && e.parentOffset === 0;
}
function jv(n, e, t) {
  const r = (e || n).selection, i = (e || n).doc;
  let o, s;
  if (r instanceof P && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = Q.create(i, r.from);
    else if (s == "row") {
      const l = i.resolve(r.from + 1);
      o = Q.rowSelection(l, l);
    } else if (!t) {
      const l = le.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      o = Q.create(i, a + 1, c);
    }
  } else r instanceof I && Fv(r) ? o = I.create(i, r.from) : r instanceof I && $v(r) && (o = I.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = n.tr)).setSelection(o), e;
}
var _v = new ce("fix-tables");
function vh(n, e, t, r) {
  const i = n.childCount, o = e.childCount;
  e: for (let s = 0, l = 0; s < o; s++) {
    const a = e.child(s);
    for (let c = l, u = Math.min(i, s + 3); c < u; c++)
      if (n.child(c) == a) {
        l = c + 1, t += a.nodeSize;
        continue e;
      }
    r(a, t), l < i && n.child(l).sameMarkup(a) ? vh(n.child(l), a, t + 1, r) : a.nodesBetween(0, a.content.size, r, t + 1), t += a.nodeSize;
  }
}
function kh(n, e) {
  let t;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (t = Wv(n, i, o, t));
  };
  return e ? e.doc != n.doc && vh(e.doc, n.doc, 0, r) : n.doc.descendants(r), t;
}
function Wv(n, e, t, r) {
  const i = le.get(e);
  if (!i.problems) return r;
  r || (r = n.tr);
  const o = [];
  for (let a = 0; a < i.height; a++) o.push(0);
  for (let a = 0; a < i.problems.length; a++) {
    const c = i.problems[a];
    if (c.type == "collision") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      const d = u.attrs;
      for (let f = 0; f < d.rowspan; f++) o[c.row + f] += c.n;
      r.setNodeMarkup(
        r.mapping.map(t + 1 + c.pos),
        null,
        Hn(d, d.colspan - c.n, c.n)
      );
    } else if (c.type == "missing")
      o[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...u.attrs,
        rowspan: u.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const u = e.nodeAt(c.pos);
      if (!u) continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
        ...u.attrs,
        colwidth: c.colwidth
      });
    } else if (c.type == "zero_sized") {
      const u = r.mapping.map(t);
      r.delete(u, u + e.nodeSize);
    }
  }
  let s, l;
  for (let a = 0; a < o.length; a++)
    o[a] && (s == null && (s = a), l = a);
  for (let a = 0, c = t + 1; a < i.height; a++) {
    const u = e.child(a), d = c + u.nodeSize, f = o[a];
    if (f > 0) {
      let h = "cell";
      u.firstChild && (h = u.firstChild.type.spec.tableRole);
      const p = [];
      for (let m = 0; m < f; m++) {
        const y = Oe(n.schema)[h].createAndFill();
        y && p.push(y);
      }
      const g = (a == 0 || s == a - 1) && l == a ? c + 1 : d - 1;
      r.insert(r.mapping.map(g), p);
    }
    c = d;
  }
  return r.setMeta(_v, { fixTables: !0 });
}
function Ct(n) {
  const e = n.selection, t = Xo(n), r = t.node(-1), i = t.start(-1), o = le.get(r);
  return { ...e instanceof Q ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(t.pos - i), tableStart: i, map: o, table: r };
}
function xh(n, { map: e, tableStart: t, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  zv(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const l = s * e.width + i;
    if (i > 0 && i < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      n.setNodeMarkup(
        n.mapping.map(t + a),
        null,
        bh(c.attrs, i - e.colCount(a))
      ), s += c.attrs.rowspan - 1;
    } else {
      const a = o == null ? Oe(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(s, i, r);
      n.insert(n.mapping.map(t + c), a.createAndFill());
    }
  }
  return n;
}
function Uv(n, e) {
  if (!ut(n)) return !1;
  if (e) {
    const t = Ct(n);
    e(xh(n.tr, t, t.left));
  }
  return !0;
}
function qv(n, e) {
  if (!ut(n)) return !1;
  if (e) {
    const t = Ct(n);
    e(xh(n.tr, t, t.right));
  }
  return !0;
}
function Kv(n, { map: e, table: t, tableStart: r }, i) {
  const o = n.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const l = s * e.width + i, a = e.map[l], c = t.nodeAt(a), u = c.attrs;
    if (i > 0 && e.map[l - 1] == a || i < e.width - 1 && e.map[l + 1] == a)
      n.setNodeMarkup(
        n.mapping.slice(o).map(r + a),
        null,
        Hn(u, i - e.colCount(a))
      );
    else {
      const d = n.mapping.slice(o).map(r + a);
      n.delete(d, d + c.nodeSize);
    }
    s += u.rowspan;
  }
}
function Jv(n, e) {
  if (!ut(n)) return !1;
  if (e) {
    const t = Ct(n), r = n.tr;
    if (t.left == 0 && t.right == t.map.width) return !1;
    for (let i = t.right - 1; Kv(r, t, i), i != t.left; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = le.get(o);
    }
    e(r);
  }
  return !0;
}
function Gv(n, e, t) {
  var r;
  const i = Oe(e.type.schema).header_cell;
  for (let o = 0; o < n.width; o++)
    if (((r = e.nodeAt(n.map[o + t * n.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function Ch(n, { map: e, tableStart: t, table: r }, i) {
  var o;
  let s = t;
  for (let c = 0; c < i; c++) s += r.child(c).nodeSize;
  const l = [];
  let a = i > 0 ? -1 : 0;
  Gv(e, r, i + a) && (a = i == 0 || i == e.height ? null : 0);
  for (let c = 0, u = e.width * i; c < e.width; c++, u++)
    if (i > 0 && i < e.height && e.map[u] == e.map[u - e.width]) {
      const d = e.map[u], f = r.nodeAt(d).attrs;
      n.setNodeMarkup(t + d, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), c += f.colspan - 1;
    } else {
      const d = a == null ? Oe(r.type.schema).cell : (o = r.nodeAt(e.map[u + a * e.width])) == null ? void 0 : o.type, f = d == null ? void 0 : d.createAndFill();
      f && l.push(f);
    }
  return n.insert(s, Oe(r.type.schema).row.create(null, l)), n;
}
function Yv(n, e) {
  if (!ut(n)) return !1;
  if (e) {
    const t = Ct(n);
    e(Ch(n.tr, t, t.top));
  }
  return !0;
}
function Xv(n, e) {
  if (!ut(n)) return !1;
  if (e) {
    const t = Ct(n);
    e(Ch(n.tr, t, t.bottom));
  }
  return !0;
}
function Qv(n, { map: e, table: t, tableStart: r }, i) {
  let o = 0;
  for (let c = 0; c < i; c++) o += t.child(c).nodeSize;
  const s = o + t.child(i).nodeSize, l = n.mapping.maps.length;
  n.delete(o + r, s + r);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, u = i * e.width; c < e.width; c++, u++) {
    const d = e.map[u];
    if (!a.has(d)) {
      if (a.add(d), i > 0 && d == e.map[u - e.width]) {
        const f = t.nodeAt(d).attrs;
        n.setNodeMarkup(n.mapping.slice(l).map(d + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (i < e.height && d == e.map[u + e.width]) {
        const f = t.nodeAt(d), h = f.attrs, p = f.type.create(
          { ...h, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), g = e.positionAt(i + 1, c, t);
        n.insert(n.mapping.slice(l).map(r + g), p), c += h.colspan - 1;
      }
    }
  }
}
function Zv(n, e) {
  if (!ut(n)) return !1;
  if (e) {
    const t = Ct(n), r = n.tr;
    if (t.top == 0 && t.bottom == t.map.height) return !1;
    for (let i = t.bottom - 1; Qv(r, t, i), i != t.top; i--) {
      const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      t.table = o, t.map = le.get(t.table);
    }
    e(r);
  }
  return !0;
}
function bu(n) {
  const e = n.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function e2({ width: n, height: e, map: t }, r) {
  let i = r.top * n + r.left, o = i, s = (r.bottom - 1) * n + r.left, l = i + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && t[o] == t[o - 1] || r.right < n && t[l] == t[l + 1])
      return !0;
    o += n, l += n;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && t[i] == t[i - n] || r.bottom < e && t[s] == t[s + n])
      return !0;
    i++, s++;
  }
  return !1;
}
function wu(n, e) {
  const t = n.selection;
  if (!(t instanceof Q) || t.$anchorCell.pos == t.$headCell.pos)
    return !1;
  const r = Ct(n), { map: i } = r;
  if (e2(i, r)) return !1;
  if (e) {
    const o = n.tr, s = {};
    let l = S.empty, a, c;
    for (let u = r.top; u < r.bottom; u++)
      for (let d = r.left; d < r.right; d++) {
        const f = i.map[u * i.width + d], h = r.table.nodeAt(f);
        if (!(s[f] || !h))
          if (s[f] = !0, a == null)
            a = f, c = h;
          else {
            bu(h) || (l = l.append(h.content));
            const p = o.mapping.map(f + r.tableStart);
            o.delete(p, p + h.nodeSize);
          }
      }
    if (a == null || c == null)
      return !0;
    if (o.setNodeMarkup(a + r.tableStart, null, {
      ...bh(
        c.attrs,
        c.attrs.colspan,
        r.right - r.left - c.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), l.size) {
      const u = a + 1 + c.content.size, d = bu(c) ? a + 1 : u;
      o.replaceWith(d + r.tableStart, u + r.tableStart, l);
    }
    o.setSelection(
      new Q(o.doc.resolve(a + r.tableStart))
    ), e(o);
  }
  return !0;
}
function vu(n, e) {
  const t = Oe(n.schema);
  return t2(({ node: r }) => t[r.type.spec.tableRole])(n, e);
}
function t2(n) {
  return (e, t) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof Q) {
      if (i.$anchorCell.pos != i.$headCell.pos) return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = Iv(i.$from), !o) return !1;
      s = (r = br(i.$from)) == null ? void 0 : r.pos;
    }
    if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1)
      return !1;
    if (t) {
      let l = o.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = { ...l, rowspan: 1 }), l.colspan > 1 && (l = { ...l, colspan: 1 });
      const u = Ct(e), d = e.tr;
      for (let h = 0; h < u.right - u.left; h++)
        a.push(
          c ? {
            ...l,
            colwidth: c && c[h] ? [c[h]] : null
          } : l
        );
      let f;
      for (let h = u.top; h < u.bottom; h++) {
        let p = u.map.positionAt(h, u.left, u.table);
        h == u.top && (p += o.nodeSize);
        for (let g = u.left, m = 0; g < u.right; g++, m++)
          g == u.left && h == u.top || d.insert(
            f = d.mapping.map(p + u.tableStart, 1),
            n({ node: o, row: h, col: g }).createAndFill(a[m])
          );
      }
      d.setNodeMarkup(
        s,
        n({ node: o, row: u.top, col: u.left }),
        a[0]
      ), i instanceof Q && d.setSelection(
        new Q(
          d.doc.resolve(i.$anchorCell.pos),
          f ? d.doc.resolve(f) : void 0
        )
      ), t(d);
    }
    return !0;
  };
}
function n2(n, e) {
  return function(t, r) {
    if (!ut(t)) return !1;
    const i = Xo(t);
    if (i.nodeAfter.attrs[n] === e) return !1;
    if (r) {
      const o = t.tr;
      t.selection instanceof Q ? t.selection.forEachCell((s, l) => {
        s.attrs[n] !== e && o.setNodeMarkup(l, null, {
          ...s.attrs,
          [n]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [n]: e
      }), r(o);
    }
    return !0;
  };
}
function r2(n) {
  return function(e, t) {
    if (!ut(e)) return !1;
    if (t) {
      const r = Oe(e.schema), i = Ct(e), o = e.tr, s = i.map.cellsInRect(
        n == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : n == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), l = s.map((a) => i.table.nodeAt(a));
      for (let a = 0; a < s.length; a++)
        l[a].type == r.header_cell && o.setNodeMarkup(
          i.tableStart + s[a],
          r.cell,
          l[a].attrs
        );
      if (o.steps.length == 0)
        for (let a = 0; a < s.length; a++)
          o.setNodeMarkup(
            i.tableStart + s[a],
            r.header_cell,
            l[a].attrs
          );
      t(o);
    }
    return !0;
  };
}
function ku(n, e, t) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: n == "row" ? e.map.width : 1,
    bottom: n == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== t.header_cell)
      return !1;
  }
  return !0;
}
function oi(n, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? r2(n) : function(t, r) {
    if (!ut(t)) return !1;
    if (r) {
      const i = Oe(t.schema), o = Ct(t), s = t.tr, l = ku("row", o, i), a = ku(
        "column",
        o,
        i
      ), u = (n === "column" ? l : n === "row" ? a : !1) ? 1 : 0, d = n == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: o.map.height
      } : n == "row" ? {
        left: u,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, f = n == "column" ? a ? i.cell : i.header_cell : n == "row" ? l ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(d).forEach((h) => {
        const p = h + o.tableStart, g = s.doc.nodeAt(p);
        g && s.setNodeMarkup(p, f, g.attrs);
      }), r(s);
    }
    return !0;
  };
}
oi("row", {
  useDeprecatedLogic: !0
});
oi("column", {
  useDeprecatedLogic: !0
});
var i2 = oi("cell", {
  useDeprecatedLogic: !0
});
function o2(n, e) {
  if (e < 0) {
    const t = n.nodeBefore;
    if (t) return n.pos - t.nodeSize;
    for (let r = n.index(-1) - 1, i = n.before(); r >= 0; r--) {
      const o = n.node(-1).child(r), s = o.lastChild;
      if (s)
        return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (n.index() < n.parent.childCount - 1)
      return n.pos + n.nodeAfter.nodeSize;
    const t = n.node(-1);
    for (let r = n.indexAfter(-1), i = n.after(); r < t.childCount; r++) {
      const o = t.child(r);
      if (o.childCount) return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function xu(n) {
  return function(e, t) {
    if (!ut(e)) return !1;
    const r = o2(Xo(e), n);
    if (r == null) return !1;
    if (t) {
      const i = e.doc.resolve(r);
      t(
        e.tr.setSelection(I.between(i, Bv(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function s2(n, e) {
  const t = n.selection.$anchor;
  for (let r = t.depth; r > 0; r--)
    if (t.node(r).type.spec.tableRole == "table")
      return e && e(
        n.tr.delete(t.before(r), t.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function Vi(n, e) {
  const t = n.selection;
  if (!(t instanceof Q)) return !1;
  if (e) {
    const r = n.tr, i = Oe(n.schema).cell.createAndFill().content;
    t.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + o.nodeSize - 1),
        new E(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function l2(n) {
  if (!n.size) return null;
  let { content: e, openStart: t, openEnd: r } = n;
  for (; e.childCount == 1 && (t > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    t--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, l = [];
  if (o == "row")
    for (let a = 0; a < e.childCount; a++) {
      let c = e.child(a).content;
      const u = a ? 0 : Math.max(0, t - 1), d = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (u || d) && (c = xl(
        Oe(s).row,
        new E(c, u, d)
      ).content), l.push(c);
    }
  else if (o == "cell" || o == "header_cell")
    l.push(
      t || r ? xl(
        Oe(s).row,
        new E(e, t, r)
      ).content : e
    );
  else
    return null;
  return a2(s, l);
}
function a2(n, e) {
  const t = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: l, colspan: a } = o.child(s).attrs;
      for (let c = i; c < i + l; c++)
        t[c] = (t[c] || 0) + a;
    }
  }
  let r = 0;
  for (let i = 0; i < t.length; i++) r = Math.max(r, t[i]);
  for (let i = 0; i < t.length; i++)
    if (i >= e.length && e.push(S.empty), t[i] < r) {
      const o = Oe(n).cell.createAndFill(), s = [];
      for (let l = t[i]; l < r; l++)
        s.push(o);
      e[i] = e[i].append(S.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function xl(n, e) {
  const t = n.createAndFill();
  return new Bl(t).replace(0, t.content.size, e).doc;
}
function c2({ width: n, height: e, rows: t }, r, i) {
  if (n != r) {
    const o = [], s = [];
    for (let l = 0; l < t.length; l++) {
      const a = t[l], c = [];
      for (let u = o[l] || 0, d = 0; u < r; d++) {
        let f = a.child(d % a.childCount);
        u + f.attrs.colspan > r && (f = f.type.createChecked(
          Hn(
            f.attrs,
            f.attrs.colspan,
            u + f.attrs.colspan - r
          ),
          f.content
        )), c.push(f), u += f.attrs.colspan;
        for (let h = 1; h < f.attrs.rowspan; h++)
          o[l + h] = (o[l + h] || 0) + f.attrs.colspan;
      }
      s.push(S.from(c));
    }
    t = s, n = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, l = 0; s < i; s++, l++) {
      const a = [], c = t[l % e];
      for (let u = 0; u < c.childCount; u++) {
        let d = c.child(u);
        s + d.attrs.rowspan > i && (d = d.type.create(
          {
            ...d.attrs,
            rowspan: Math.max(1, i - d.attrs.rowspan)
          },
          d.content
        )), a.push(d);
      }
      o.push(S.from(a));
    }
    t = o, e = i;
  }
  return { width: n, height: e, rows: t };
}
function u2(n, e, t, r, i, o, s) {
  const l = n.doc.type.schema, a = Oe(l);
  let c, u;
  if (i > e.width)
    for (let d = 0, f = 0; d < e.height; d++) {
      const h = t.child(d);
      f += h.nodeSize;
      const p = [];
      let g;
      h.lastChild == null || h.lastChild.type == a.cell ? g = c || (c = a.cell.createAndFill()) : g = u || (u = a.header_cell.createAndFill());
      for (let m = e.width; m < i; m++) p.push(g);
      n.insert(n.mapping.slice(s).map(f - 1 + r), p);
    }
  if (o > e.height) {
    const d = [];
    for (let p = 0, g = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const m = p >= e.width ? !1 : t.nodeAt(e.map[g + p]).type == a.header_cell;
      d.push(
        m ? u || (u = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill())
      );
    }
    const f = a.row.create(null, S.from(d)), h = [];
    for (let p = e.height; p < o; p++) h.push(f);
    n.insert(n.mapping.slice(s).map(r + t.nodeSize - 2), h);
  }
  return !!(c || u);
}
function Cu(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.height) return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const u = s * e.width + c, d = e.map[u];
    if (e.map[u - e.width] == d) {
      a = !0;
      const f = t.nodeAt(d), { top: h, left: p } = e.findCell(d);
      n.setNodeMarkup(n.mapping.slice(l).map(d + r), null, {
        ...f.attrs,
        rowspan: s - h
      }), n.insert(
        n.mapping.slice(l).map(e.positionAt(s, p, t)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: h + f.attrs.rowspan - s
        })
      ), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function Su(n, e, t, r, i, o, s, l) {
  if (s == 0 || s == e.width) return !1;
  let a = !1;
  for (let c = i; c < o; c++) {
    const u = c * e.width + s, d = e.map[u];
    if (e.map[u - 1] == d) {
      a = !0;
      const f = t.nodeAt(d), h = e.colCount(d), p = n.mapping.slice(l).map(d + r);
      n.setNodeMarkup(
        p,
        null,
        Hn(
          f.attrs,
          s - h,
          f.attrs.colspan - (s - h)
        )
      ), n.insert(
        p + f.nodeSize,
        f.type.createAndFill(
          Hn(f.attrs, 0, s - h)
        )
      ), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function Tu(n, e, t, r, i) {
  let o = t ? n.doc.nodeAt(t - 1) : n.doc;
  if (!o)
    throw new Error("No table found");
  let s = le.get(o);
  const { top: l, left: a } = r, c = a + i.width, u = l + i.height, d = n.tr;
  let f = 0;
  function h() {
    if (o = t ? d.doc.nodeAt(t - 1) : d.doc, !o)
      throw new Error("No table found");
    s = le.get(o), f = d.mapping.maps.length;
  }
  u2(d, s, o, t, c, u, f) && h(), Cu(d, s, o, t, a, c, l, f) && h(), Cu(d, s, o, t, a, c, u, f) && h(), Su(d, s, o, t, l, u, a, f) && h(), Su(d, s, o, t, l, u, c, f) && h();
  for (let p = l; p < u; p++) {
    const g = s.positionAt(p, a, o), m = s.positionAt(p, c, o);
    d.replace(
      d.mapping.slice(f).map(g + t),
      d.mapping.slice(f).map(m + t),
      new E(i.rows[p - l], 0, 0)
    );
  }
  h(), d.setSelection(
    new Q(
      d.doc.resolve(t + s.positionAt(l, a, o)),
      d.doc.resolve(t + s.positionAt(u - 1, c - 1, o))
    )
  ), e(d);
}
var d2 = Kl({
  ArrowLeft: Fi("horiz", -1),
  ArrowRight: Fi("horiz", 1),
  ArrowUp: Fi("vert", -1),
  ArrowDown: Fi("vert", 1),
  "Shift-ArrowLeft": $i("horiz", -1),
  "Shift-ArrowRight": $i("horiz", 1),
  "Shift-ArrowUp": $i("vert", -1),
  "Shift-ArrowDown": $i("vert", 1),
  Backspace: Vi,
  "Mod-Backspace": Vi,
  Delete: Vi,
  "Mod-Delete": Vi
});
function Xi(n, e, t) {
  return t.eq(n.selection) ? !1 : (e && e(n.tr.setSelection(t).scrollIntoView()), !0);
}
function Fi(n, e) {
  return (t, r, i) => {
    if (!i) return !1;
    const o = t.selection;
    if (o instanceof Q)
      return Xi(
        t,
        r,
        z.near(o.$headCell, e)
      );
    if (n != "horiz" && !o.empty) return !1;
    const s = Sh(i, n, e);
    if (s == null) return !1;
    if (n == "horiz")
      return Xi(
        t,
        r,
        z.near(t.doc.resolve(o.head + e), e)
      );
    {
      const l = t.doc.resolve(s), a = yh(l, n, e);
      let c;
      return a ? c = z.near(a, 1) : e < 0 ? c = z.near(t.doc.resolve(l.before(-1)), -1) : c = z.near(t.doc.resolve(l.after(-1)), 1), Xi(t, r, c);
    }
  };
}
function $i(n, e) {
  return (t, r, i) => {
    if (!i) return !1;
    const o = t.selection;
    let s;
    if (o instanceof Q)
      s = o;
    else {
      const a = Sh(i, n, e);
      if (a == null) return !1;
      s = new Q(t.doc.resolve(a));
    }
    const l = yh(s.$headCell, n, e);
    return l ? Xi(
      t,
      r,
      new Q(s.$anchorCell, l)
    ) : !1;
  };
}
function f2(n, e) {
  const t = n.state.doc, r = br(t.resolve(e));
  return r ? (n.dispatch(n.state.tr.setSelection(new Q(r))), !0) : !1;
}
function h2(n, e, t) {
  if (!ut(n.state)) return !1;
  let r = l2(t);
  const i = n.state.selection;
  if (i instanceof Q) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        S.from(
          xl(Oe(n.state.schema).cell, t)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), l = le.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = c2(r, l.right - l.left, l.bottom - l.top), Tu(n.state, n.dispatch, s, l, r), !0;
  } else if (r) {
    const o = Xo(n.state), s = o.start(-1);
    return Tu(
      n.state,
      n.dispatch,
      s,
      le.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function p2(n, e) {
  var t;
  if (e.ctrlKey || e.metaKey) return;
  const r = Mu(n, e.target);
  let i;
  if (e.shiftKey && n.state.selection instanceof Q)
    o(n.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = br(n.state.selection.$anchor)) != null && ((t = Bs(n, e)) == null ? void 0 : t.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(a, c) {
    let u = Bs(n, c);
    const d = Gt.getState(n.state) == null;
    if (!u || !Ca(a, u))
      if (d) u = a;
      else return;
    const f = new Q(a, u);
    if (d || !n.state.selection.eq(f)) {
      const h = n.state.tr.setSelection(f);
      d && h.setMeta(Gt, a.pos), n.dispatch(h);
    }
  }
  function s() {
    n.root.removeEventListener("mouseup", s), n.root.removeEventListener("dragstart", s), n.root.removeEventListener("mousemove", l), Gt.getState(n.state) != null && n.dispatch(n.state.tr.setMeta(Gt, -1));
  }
  function l(a) {
    const c = a, u = Gt.getState(n.state);
    let d;
    if (u != null)
      d = n.state.doc.resolve(u);
    else if (Mu(n, c.target) != r && (d = Bs(n, e), !d))
      return s();
    d && o(d, c);
  }
  n.root.addEventListener("mouseup", s), n.root.addEventListener("dragstart", s), n.root.addEventListener("mousemove", l);
}
function Sh(n, e, t) {
  if (!(n.state.selection instanceof I)) return null;
  const { $head: r } = n.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((t < 0 ? r.index(i) : r.indexAfter(i)) != (t < 0 ? 0 : o.childCount)) return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const l = r.before(i), a = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
      return n.endOfTextblock(a) ? l : null;
    }
  }
  return null;
}
function Mu(n, e) {
  for (; e && e != n.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function Bs(n, e) {
  const t = n.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return t && t ? br(n.state.doc.resolve(t.pos)) : null;
}
var m2 = class {
  constructor(e, t) {
    this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${t}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Cl(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Cl(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Cl(n, e, t, r, i, o) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const u = n.firstChild;
  if (u) {
    for (let d = 0, f = 0; d < u.childCount; d++) {
      const { colspan: h, colwidth: p } = u.child(d).attrs;
      for (let g = 0; g < h; g++, f++) {
        const m = i == f ? o : p && p[g], y = m ? m + "px" : "";
        if (l += m || r, m || (a = !1), c)
          c.style.width != y && (c.style.width = y), c = c.nextSibling;
        else {
          const w = document.createElement("col");
          w.style.width = y, e.appendChild(w);
        }
      }
    }
    for (; c; ) {
      const d = c.nextSibling;
      (s = c.parentNode) == null || s.removeChild(c), c = d;
    }
    a ? (t.style.width = l + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = l + "px");
  }
}
var qe = new ce(
  "tableColumnResizing"
);
function g2({
  handleWidth: n = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: t = 100,
  View: r = m2,
  lastColumnResizable: i = !0
} = {}) {
  const o = new Z({
    key: qe,
    state: {
      init(s, l) {
        var a, c;
        const u = (c = (a = o.spec) == null ? void 0 : a.props) == null ? void 0 : c.nodeViews, d = Oe(l.schema).table.name;
        return r && u && (u[d] = (f, h) => new r(f, t, h)), new y2(-1, !1);
      },
      apply(s, l) {
        return l.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const l = qe.getState(s);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, l) => {
          b2(s, l, n, i);
        },
        mouseleave: (s) => {
          w2(s);
        },
        mousedown: (s, l) => {
          v2(s, l, e, t);
        }
      },
      decorations: (s) => {
        const l = qe.getState(s);
        if (l && l.activeHandle > -1)
          return T2(s, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var y2 = class Qi {
  constructor(e, t) {
    this.activeHandle = e, this.dragging = t;
  }
  apply(e) {
    const t = this, r = e.getMeta(qe);
    if (r && r.setHandle != null)
      return new Qi(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new Qi(t.activeHandle, r.setDragging);
    if (t.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(t.activeHandle, -1);
      return kl(e.doc.resolve(i)) || (i = -1), new Qi(i, t.dragging);
    }
    return t;
  }
};
function b2(n, e, t, r) {
  if (!n.editable) return;
  const i = qe.getState(n.state);
  if (i && !i.dragging) {
    const o = x2(e.target);
    let s = -1;
    if (o) {
      const { left: l, right: a } = o.getBoundingClientRect();
      e.clientX - l <= t ? s = Au(n, e, "left", t) : a - e.clientX <= t && (s = Au(n, e, "right", t));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const l = n.state.doc.resolve(s), a = l.node(-1), c = le.get(a), u = l.start(-1);
        if (c.colCount(l.pos - u) + l.nodeAfter.attrs.colspan - 1 == c.width - 1)
          return;
      }
      Th(n, s);
    }
  }
}
function w2(n) {
  if (!n.editable) return;
  const e = qe.getState(n.state);
  e && e.activeHandle > -1 && !e.dragging && Th(n, -1);
}
function v2(n, e, t, r) {
  var i;
  if (!n.editable) return !1;
  const o = (i = n.dom.ownerDocument.defaultView) != null ? i : window, s = qe.getState(n.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const l = n.state.doc.nodeAt(s.activeHandle), a = k2(n, s.activeHandle, l.attrs);
  n.dispatch(
    n.state.tr.setMeta(qe, {
      setDragging: { startX: e.clientX, startWidth: a }
    })
  );
  function c(d) {
    o.removeEventListener("mouseup", c), o.removeEventListener("mousemove", u);
    const f = qe.getState(n.state);
    f != null && f.dragging && (C2(
      n,
      f.activeHandle,
      Eu(f.dragging, d, t)
    ), n.dispatch(
      n.state.tr.setMeta(qe, { setDragging: null })
    ));
  }
  function u(d) {
    if (!d.which) return c(d);
    const f = qe.getState(n.state);
    if (f && f.dragging) {
      const h = Eu(f.dragging, d, t);
      Ou(
        n,
        f.activeHandle,
        h,
        r
      );
    }
  }
  return Ou(
    n,
    s.activeHandle,
    a,
    r
  ), o.addEventListener("mouseup", c), o.addEventListener("mousemove", u), e.preventDefault(), !0;
}
function k2(n, e, { colspan: t, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i) return i;
  const o = n.domAtPos(e);
  let l = o.node.childNodes[o.offset].offsetWidth, a = t;
  if (r)
    for (let c = 0; c < t; c++)
      r[c] && (l -= r[c], a--);
  return l / a;
}
function x2(n) {
  for (; n && n.nodeName != "TD" && n.nodeName != "TH"; )
    n = n.classList && n.classList.contains("ProseMirror") ? null : n.parentNode;
  return n;
}
function Au(n, e, t, r) {
  const i = t == "right" ? -r : r, o = n.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: s } = o, l = br(n.state.doc.resolve(s));
  if (!l) return -1;
  if (t == "right") return l.pos;
  const a = le.get(l.node(-1)), c = l.start(-1), u = a.map.indexOf(l.pos - c);
  return u % a.width == 0 ? -1 : c + a.map[u - 1];
}
function Eu(n, e, t) {
  const r = e.clientX - n.startX;
  return Math.max(t, n.startWidth + r);
}
function Th(n, e) {
  n.dispatch(
    n.state.tr.setMeta(qe, { setHandle: e })
  );
}
function C2(n, e, t) {
  const r = n.state.doc.resolve(e), i = r.node(-1), o = le.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, a = n.state.tr;
  for (let c = 0; c < o.height; c++) {
    const u = c * o.width + l;
    if (c && o.map[u] == o.map[u - o.width]) continue;
    const d = o.map[u], f = i.nodeAt(d).attrs, h = f.colspan == 1 ? 0 : l - o.colCount(d);
    if (f.colwidth && f.colwidth[h] == t) continue;
    const p = f.colwidth ? f.colwidth.slice() : S2(f.colspan);
    p[h] = t, a.setNodeMarkup(s + d, null, { ...f, colwidth: p });
  }
  a.docChanged && n.dispatch(a);
}
function Ou(n, e, t, r) {
  const i = n.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), l = le.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let a = n.domAtPos(i.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; )
    a = a.parentNode;
  a && Cl(
    o,
    a.firstChild,
    a,
    r,
    l,
    t
  );
}
function S2(n) {
  return Array(n).fill(0);
}
function T2(n, e) {
  var t;
  const r = [], i = n.doc.resolve(e), o = i.node(-1);
  if (!o)
    return ne.empty;
  const s = le.get(o), l = i.start(-1), a = s.colCount(i.pos - l) + i.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < s.height; c++) {
    const u = a + c * s.width;
    if ((a == s.width - 1 || s.map[u] != s.map[u + 1]) && (c == 0 || s.map[u] != s.map[u - s.width])) {
      const d = s.map[u], f = l + d + o.nodeAt(d).nodeSize - 1, h = document.createElement("div");
      h.className = "column-resize-handle", (t = qe.getState(n)) != null && t.dragging && r.push(
        Se.node(
          l + d,
          l + d + o.nodeAt(d).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(Se.widget(f, h));
    }
  }
  return ne.create(n.doc, r);
}
function M2({
  allowTableNodeSelection: n = !1
} = {}) {
  return new Z({
    key: Gt,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        const r = e.getMeta(Gt);
        if (r != null) return r == -1 ? null : r;
        if (t == null || !e.docChanged) return t;
        const { deleted: i, pos: o } = e.mapping.mapResult(t);
        return i ? null : o;
      }
    },
    props: {
      decorations: Vv,
      handleDOMEvents: {
        mousedown: p2
      },
      createSelectionBetween(e) {
        return Gt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: f2,
      handleKeyDown: d2,
      handlePaste: h2
    },
    appendTransaction(e, t, r) {
      return jv(
        r,
        kh(r, t),
        n
      );
    }
  });
}
function Nu(n, e, t, r, i, o) {
  let s = 0, l = !0, a = e.firstChild;
  const c = n.firstChild;
  for (let u = 0, d = 0; u < c.childCount; u += 1) {
    const { colspan: f, colwidth: h } = c.child(u).attrs;
    for (let p = 0; p < f; p += 1, d += 1) {
      const g = i === d ? o : h && h[p], m = g ? `${g}px` : "";
      s += g || r, g || (l = !1), a ? (a.style.width !== m && (a.style.width = m), a = a.nextSibling) : e.appendChild(document.createElement("col")).style.width = m;
    }
  }
  for (; a; ) {
    const u = a.nextSibling;
    a.parentNode.removeChild(a), a = u;
  }
  l ? (t.style.width = `${s}px`, t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = `${s}px`);
}
class A2 {
  constructor(e, t) {
    this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Nu(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type !== this.node.type ? !1 : (this.node = e, Nu(e, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type === "attributes" && (e.target === this.table || this.colgroup.contains(e.target));
  }
}
function E2(n, e, t, r) {
  let i = 0, o = !0;
  const s = [], l = n.firstChild;
  if (!l)
    return {};
  for (let d = 0, f = 0; d < l.childCount; d += 1) {
    const { colspan: h, colwidth: p } = l.child(d).attrs;
    for (let g = 0; g < h; g += 1, f += 1) {
      const m = t === f ? r : p && p[g], y = m ? `${m}px` : "";
      i += m || e, m || (o = !1), s.push(["col", y ? { style: `width: ${y}` } : {}]);
    }
  }
  const a = o ? `${i}px` : "", c = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: a, tableMinWidth: c };
}
function Ru(n, e) {
  return n.createAndFill();
}
function O2(n) {
  if (n.cached.tableNodeTypes)
    return n.cached.tableNodeTypes;
  const e = {};
  return Object.keys(n.nodes).forEach((t) => {
    const r = n.nodes[t];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), n.cached.tableNodeTypes = e, e;
}
function N2(n, e, t, r, i) {
  const o = O2(n), s = [], l = [];
  for (let c = 0; c < t; c += 1) {
    const u = Ru(o.cell);
    if (u && l.push(u), r) {
      const d = Ru(o.header_cell);
      d && s.push(d);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(o.row.createChecked(null, r && c === 0 ? s : l));
  return o.table.createChecked(null, a);
}
function R2(n) {
  return n instanceof Q;
}
const ji = ({ editor: n }) => {
  const { selection: e } = n.state;
  if (!R2(e))
    return !1;
  let t = 0;
  const r = Df(e.ranges[0].$from, (o) => o.type.name === "table");
  return r == null || r.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (t += 1);
  }), t === e.ranges.length ? (n.commands.deleteTable(), !0) : !1;
}, D2 = ae.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: A2,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    const { colgroup: t, tableWidth: r, tableMinWidth: i } = E2(n, this.options.cellMinWidth);
    return [
      "table",
      K(this.options.HTMLAttributes, e, {
        style: r ? `width: ${r}` : `minWidth: ${i}`
      }),
      t,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: n = 3, cols: e = 3, withHeaderRow: t = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = N2(o.schema, n, e, t);
        if (i) {
          const l = r.selection.anchor + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(I.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: n, dispatch: e }) => Uv(n, e),
      addColumnAfter: () => ({ state: n, dispatch: e }) => qv(n, e),
      deleteColumn: () => ({ state: n, dispatch: e }) => Jv(n, e),
      addRowBefore: () => ({ state: n, dispatch: e }) => Yv(n, e),
      addRowAfter: () => ({ state: n, dispatch: e }) => Xv(n, e),
      deleteRow: () => ({ state: n, dispatch: e }) => Zv(n, e),
      deleteTable: () => ({ state: n, dispatch: e }) => s2(n, e),
      mergeCells: () => ({ state: n, dispatch: e }) => wu(n, e),
      splitCell: () => ({ state: n, dispatch: e }) => vu(n, e),
      toggleHeaderColumn: () => ({ state: n, dispatch: e }) => oi("column")(n, e),
      toggleHeaderRow: () => ({ state: n, dispatch: e }) => oi("row")(n, e),
      toggleHeaderCell: () => ({ state: n, dispatch: e }) => i2(n, e),
      mergeOrSplit: () => ({ state: n, dispatch: e }) => wu(n, e) ? !0 : vu(n, e),
      setCellAttribute: (n, e) => ({ state: t, dispatch: r }) => n2(n, e)(t, r),
      goToNextCell: () => ({ state: n, dispatch: e }) => xu(1)(n, e),
      goToPreviousCell: () => ({ state: n, dispatch: e }) => xu(-1)(n, e),
      fixTables: () => ({ state: n, dispatch: e }) => (e && kh(n), !0),
      setCellSelection: (n) => ({ tr: e, dispatch: t }) => {
        if (t) {
          const r = Q.create(e.doc, n.anchorCell, n.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: ji,
      "Mod-Backspace": ji,
      Delete: ji,
      "Mod-Delete": ji
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        g2({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          // @ts-ignore (incorrect type)
          View: this.options.View,
          // TODO: PR for @types/prosemirror-tables
          // @ts-ignore (incorrect type)
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      M2({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(n) {
    const e = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      tableRole: V(R(n, "tableRole", e))
    };
  }
}), L2 = ae.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? [parseInt(e, 10)] : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "td" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["td", K(this.options.HTMLAttributes, n), 0];
  }
}), I2 = ae.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? [parseInt(e, 10)] : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [
      { tag: "th" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["th", K(this.options.HTMLAttributes, n), 0];
  }
}), P2 = ae.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [
      { tag: "tr" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["tr", K(this.options.HTMLAttributes, n), 0];
  }
}), B2 = re.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: "left"
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (n) => n.style.textAlign || this.options.defaultAlignment,
            renderHTML: (n) => n.textAlign === this.options.defaultAlignment ? {} : { style: `text-align: ${n.textAlign}` }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (n) => ({ commands: e }) => this.options.alignments.includes(n) ? this.options.types.map((t) => e.updateAttributes(t, { textAlign: n })).every((t) => t) : !1,
      unsetTextAlign: () => ({ commands: n }) => this.options.types.map((e) => n.resetAttributes(e, "textAlign")).every((e) => e)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), z2 = _e.create({
  name: "subscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sub"
      },
      {
        style: "vertical-align",
        getAttrs(n) {
          return n !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["sub", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: n }) => n.setMark(this.name),
      toggleSubscript: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetSubscript: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), H2 = _e.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sup"
      },
      {
        style: "vertical-align",
        getAttrs(n) {
          return n !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["sup", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: n }) => n.setMark(this.name),
      toggleSuperscript: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
}), V2 = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, F2 = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, $2 = _e.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (n) => n.getAttribute("data-color") || n.style.backgroundColor,
        renderHTML: (n) => n.color ? {
          "data-color": n.color,
          style: `background-color: ${n.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["mark", K(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setHighlight: (n) => ({ commands: e }) => e.setMark(this.name, n),
      toggleHighlight: (n) => ({ commands: e }) => e.toggleMark(this.name, n),
      unsetHighlight: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      Bn({
        find: V2,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ln({
        find: F2,
        type: this.type
      })
    ];
  }
}), j2 = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, _2 = ae.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["img", K(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setImage: (n) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: n
      })
    };
  },
  addInputRules() {
    return [
      Pf({
        find: j2,
        type: this.type,
        getAttributes: (n) => {
          const [, , e, t, r] = n;
          return { src: t, alt: e, title: r };
        }
      })
    ];
  }
});
function Mh(n, e) {
  return function() {
    return n.apply(e, arguments);
  };
}
const { toString: W2 } = Object.prototype, { getPrototypeOf: Sa } = Object, { iterator: Qo, toStringTag: Ah } = Symbol, Zo = /* @__PURE__ */ ((n) => (e) => {
  const t = W2.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dt = (n) => (n = n.toLowerCase(), (e) => Zo(e) === n), es = (n) => (e) => typeof e === n, { isArray: wr } = Array, si = es("undefined");
function U2(n) {
  return n !== null && !si(n) && n.constructor !== null && !si(n.constructor) && $e(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Eh = dt("ArrayBuffer");
function q2(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && Eh(n.buffer), e;
}
const K2 = es("string"), $e = es("function"), Oh = es("number"), ts = (n) => n !== null && typeof n == "object", J2 = (n) => n === !0 || n === !1, Zi = (n) => {
  if (Zo(n) !== "object")
    return !1;
  const e = Sa(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Ah in n) && !(Qo in n);
}, G2 = dt("Date"), Y2 = dt("File"), X2 = dt("Blob"), Q2 = dt("FileList"), Z2 = (n) => ts(n) && $e(n.pipe), ek = (n) => {
  let e;
  return n && (typeof FormData == "function" && n instanceof FormData || $e(n.append) && ((e = Zo(n)) === "formdata" || // detect form-data instance
  e === "object" && $e(n.toString) && n.toString() === "[object FormData]"));
}, tk = dt("URLSearchParams"), [nk, rk, ik, ok] = ["ReadableStream", "Request", "Response", "Headers"].map(dt), sk = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function pi(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let r, i;
  if (typeof n != "object" && (n = [n]), wr(n))
    for (r = 0, i = n.length; r < i; r++)
      e.call(null, n[r], r, n);
  else {
    const o = t ? Object.getOwnPropertyNames(n) : Object.keys(n), s = o.length;
    let l;
    for (r = 0; r < s; r++)
      l = o[r], e.call(null, n[l], l, n);
  }
}
function Nh(n, e) {
  e = e.toLowerCase();
  const t = Object.keys(n);
  let r = t.length, i;
  for (; r-- > 0; )
    if (i = t[r], e === i.toLowerCase())
      return i;
  return null;
}
const Cn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rh = (n) => !si(n) && n !== Cn;
function Sl() {
  const { caseless: n } = Rh(this) && this || {}, e = {}, t = (r, i) => {
    const o = n && Nh(e, i) || i;
    Zi(e[o]) && Zi(r) ? e[o] = Sl(e[o], r) : Zi(r) ? e[o] = Sl({}, r) : wr(r) ? e[o] = r.slice() : e[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && pi(arguments[r], t);
  return e;
}
const lk = (n, e, t, { allOwnKeys: r } = {}) => (pi(e, (i, o) => {
  t && $e(i) ? n[o] = Mh(i, t) : n[o] = i;
}, { allOwnKeys: r }), n), ak = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), ck = (n, e, t, r) => {
  n.prototype = Object.create(e.prototype, r), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, uk = (n, e, t, r) => {
  let i, o, s;
  const l = {};
  if (e = e || {}, n == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(n), o = i.length; o-- > 0; )
      s = i[o], (!r || r(s, n, e)) && !l[s] && (e[s] = n[s], l[s] = !0);
    n = t !== !1 && Sa(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, dk = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const r = n.indexOf(e, t);
  return r !== -1 && r === t;
}, fk = (n) => {
  if (!n) return null;
  if (wr(n)) return n;
  let e = n.length;
  if (!Oh(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = n[e];
  return t;
}, hk = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && Sa(Uint8Array)), pk = (n, e) => {
  const r = (n && n[Qo]).call(n);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    e.call(n, o[0], o[1]);
  }
}, mk = (n, e) => {
  let t;
  const r = [];
  for (; (t = n.exec(e)) !== null; )
    r.push(t);
  return r;
}, gk = dt("HTMLFormElement"), yk = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, i) {
    return r.toUpperCase() + i;
  }
), Du = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), bk = dt("RegExp"), Dh = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), r = {};
  pi(t, (i, o) => {
    let s;
    (s = e(i, o, n)) !== !1 && (r[o] = s || i);
  }), Object.defineProperties(n, r);
}, wk = (n) => {
  Dh(n, (e, t) => {
    if ($e(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = n[t];
    if ($e(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, vk = (n, e) => {
  const t = {}, r = (i) => {
    i.forEach((o) => {
      t[o] = !0;
    });
  };
  return wr(n) ? r(n) : r(String(n).split(e)), t;
}, kk = () => {
}, xk = (n, e) => n != null && Number.isFinite(n = +n) ? n : e;
function Ck(n) {
  return !!(n && $e(n.append) && n[Ah] === "FormData" && n[Qo]);
}
const Sk = (n) => {
  const e = new Array(10), t = (r, i) => {
    if (ts(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[i] = r;
        const o = wr(r) ? [] : {};
        return pi(r, (s, l) => {
          const a = t(s, i + 1);
          !si(a) && (o[l] = a);
        }), e[i] = void 0, o;
      }
    }
    return r;
  };
  return t(n, 0);
}, Tk = dt("AsyncFunction"), Mk = (n) => n && (ts(n) || $e(n)) && $e(n.then) && $e(n.catch), Lh = ((n, e) => n ? setImmediate : e ? ((t, r) => (Cn.addEventListener("message", ({ source: i, data: o }) => {
  i === Cn && o === t && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), Cn.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  $e(Cn.postMessage)
), Ak = typeof queueMicrotask < "u" ? queueMicrotask.bind(Cn) : typeof process < "u" && process.nextTick || Lh, Ek = (n) => n != null && $e(n[Qo]), k = {
  isArray: wr,
  isArrayBuffer: Eh,
  isBuffer: U2,
  isFormData: ek,
  isArrayBufferView: q2,
  isString: K2,
  isNumber: Oh,
  isBoolean: J2,
  isObject: ts,
  isPlainObject: Zi,
  isReadableStream: nk,
  isRequest: rk,
  isResponse: ik,
  isHeaders: ok,
  isUndefined: si,
  isDate: G2,
  isFile: Y2,
  isBlob: X2,
  isRegExp: bk,
  isFunction: $e,
  isStream: Z2,
  isURLSearchParams: tk,
  isTypedArray: hk,
  isFileList: Q2,
  forEach: pi,
  merge: Sl,
  extend: lk,
  trim: sk,
  stripBOM: ak,
  inherits: ck,
  toFlatObject: uk,
  kindOf: Zo,
  kindOfTest: dt,
  endsWith: dk,
  toArray: fk,
  forEachEntry: pk,
  matchAll: mk,
  isHTMLForm: gk,
  hasOwnProperty: Du,
  hasOwnProp: Du,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Dh,
  freezeMethods: wk,
  toObjectSet: vk,
  toCamelCase: yk,
  noop: kk,
  toFiniteNumber: xk,
  findKey: Nh,
  global: Cn,
  isContextDefined: Rh,
  isSpecCompliantForm: Ck,
  toJSONObject: Sk,
  isAsyncFn: Tk,
  isThenable: Mk,
  setImmediate: Lh,
  asap: Ak,
  isIterable: Ek
};
function F(n, e, t, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null);
}
k.inherits(F, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ih = F.prototype, Ph = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((n) => {
  Ph[n] = { value: n };
});
Object.defineProperties(F, Ph);
Object.defineProperty(Ih, "isAxiosError", { value: !0 });
F.from = (n, e, t, r, i, o) => {
  const s = Object.create(Ih);
  return k.toFlatObject(n, s, function(a) {
    return a !== Error.prototype;
  }, (l) => l !== "isAxiosError"), F.call(s, n.message, e, t, r, i), s.cause = n, s.name = n.name, o && Object.assign(s, o), s;
};
const Ok = null;
function Tl(n) {
  return k.isPlainObject(n) || k.isArray(n);
}
function Bh(n) {
  return k.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Lu(n, e, t) {
  return n ? n.concat(e).map(function(i, o) {
    return i = Bh(i), !t && o ? "[" + i + "]" : i;
  }).join(t ? "." : "") : e;
}
function Nk(n) {
  return k.isArray(n) && !n.some(Tl);
}
const Rk = k.toFlatObject(k, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ns(n, e, t) {
  if (!k.isObject(n))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = k.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !k.isUndefined(m[g]);
  });
  const r = t.metaTokens, i = t.visitor || u, o = t.dots, s = t.indexes, a = (t.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(e);
  if (!k.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (k.isDate(p))
      return p.toISOString();
    if (k.isBoolean(p))
      return p.toString();
    if (!a && k.isBlob(p))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(p) || k.isTypedArray(p) ? a && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, g, m) {
    let y = p;
    if (p && !m && typeof p == "object") {
      if (k.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), p = JSON.stringify(p);
      else if (k.isArray(p) && Nk(p) || (k.isFileList(p) || k.endsWith(g, "[]")) && (y = k.toArray(p)))
        return g = Bh(g), y.forEach(function(C, b) {
          !(k.isUndefined(C) || C === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Lu([g], b, o) : s === null ? g : g + "[]",
            c(C)
          );
        }), !1;
    }
    return Tl(p) ? !0 : (e.append(Lu(m, g, o), c(p)), !1);
  }
  const d = [], f = Object.assign(Rk, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Tl
  });
  function h(p, g) {
    if (!k.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(p), k.forEach(p, function(y, w) {
        (!(k.isUndefined(y) || y === null) && i.call(
          e,
          y,
          k.isString(w) ? w.trim() : w,
          g,
          f
        )) === !0 && h(y, g ? g.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!k.isObject(n))
    throw new TypeError("data must be an object");
  return h(n), e;
}
function Iu(n) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function Ta(n, e) {
  this._pairs = [], n && ns(n, this, e);
}
const zh = Ta.prototype;
zh.append = function(e, t) {
  this._pairs.push([e, t]);
};
zh.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, Iu);
  } : Iu;
  return this._pairs.map(function(i) {
    return t(i[0]) + "=" + t(i[1]);
  }, "").join("&");
};
function Dk(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Hh(n, e, t) {
  if (!e)
    return n;
  const r = t && t.encode || Dk;
  k.isFunction(t) && (t = {
    serialize: t
  });
  const i = t && t.serialize;
  let o;
  if (i ? o = i(e, t) : o = k.isURLSearchParams(e) ? e.toString() : new Ta(e, t).toString(r), o) {
    const s = n.indexOf("#");
    s !== -1 && (n = n.slice(0, s)), n += (n.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return n;
}
class Pu {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, t, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    k.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Vh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Lk = typeof URLSearchParams < "u" ? URLSearchParams : Ta, Ik = typeof FormData < "u" ? FormData : null, Pk = typeof Blob < "u" ? Blob : null, Bk = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Lk,
    FormData: Ik,
    Blob: Pk
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ma = typeof window < "u" && typeof document < "u", Ml = typeof navigator == "object" && navigator || void 0, zk = Ma && (!Ml || ["ReactNative", "NativeScript", "NS"].indexOf(Ml.product) < 0), Hk = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Vk = Ma && window.location.href || "http://localhost", Fk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ma,
  hasStandardBrowserEnv: zk,
  hasStandardBrowserWebWorkerEnv: Hk,
  navigator: Ml,
  origin: Vk
}, Symbol.toStringTag, { value: "Module" })), Ae = {
  ...Fk,
  ...Bk
};
function $k(n, e) {
  return ns(n, new Ae.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, i, o) {
      return Ae.isNode && k.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function jk(n) {
  return k.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function _k(n) {
  const e = {}, t = Object.keys(n);
  let r;
  const i = t.length;
  let o;
  for (r = 0; r < i; r++)
    o = t[r], e[o] = n[o];
  return e;
}
function Fh(n) {
  function e(t, r, i, o) {
    let s = t[o++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), a = o >= t.length;
    return s = !s && k.isArray(i) ? i.length : s, a ? (k.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !l) : ((!i[s] || !k.isObject(i[s])) && (i[s] = []), e(t, r, i[s], o) && k.isArray(i[s]) && (i[s] = _k(i[s])), !l);
  }
  if (k.isFormData(n) && k.isFunction(n.entries)) {
    const t = {};
    return k.forEachEntry(n, (r, i) => {
      e(jk(r), i, t, 0);
    }), t;
  }
  return null;
}
function Wk(n, e, t) {
  if (k.isString(n))
    try {
      return (e || JSON.parse)(n), k.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(n);
}
const mi = {
  transitional: Vh,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const r = t.getContentType() || "", i = r.indexOf("application/json") > -1, o = k.isObject(e);
    if (o && k.isHTMLForm(e) && (e = new FormData(e)), k.isFormData(e))
      return i ? JSON.stringify(Fh(e)) : e;
    if (k.isArrayBuffer(e) || k.isBuffer(e) || k.isStream(e) || k.isFile(e) || k.isBlob(e) || k.isReadableStream(e))
      return e;
    if (k.isArrayBufferView(e))
      return e.buffer;
    if (k.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return $k(e, this.formSerializer).toString();
      if ((l = k.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return ns(
          l ? { "files[]": e } : e,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return o || i ? (t.setContentType("application/json", !1), Wk(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || mi.transitional, r = t && t.forcedJSONParsing, i = this.responseType === "json";
    if (k.isResponse(e) || k.isReadableStream(e))
      return e;
    if (e && k.isString(e) && (r && !this.responseType || i)) {
      const s = !(t && t.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? F.from(l, F.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ae.classes.FormData,
    Blob: Ae.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  mi.headers[n] = {};
});
const Uk = k.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), qk = (n) => {
  const e = {};
  let t, r, i;
  return n && n.split(`
`).forEach(function(s) {
    i = s.indexOf(":"), t = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!t || e[t] && Uk[t]) && (t === "set-cookie" ? e[t] ? e[t].push(r) : e[t] = [r] : e[t] = e[t] ? e[t] + ", " + r : r);
  }), e;
}, Bu = Symbol("internals");
function Or(n) {
  return n && String(n).trim().toLowerCase();
}
function eo(n) {
  return n === !1 || n == null ? n : k.isArray(n) ? n.map(eo) : String(n);
}
function Kk(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(n); )
    e[r[1]] = r[2];
  return e;
}
const Jk = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function zs(n, e, t, r, i) {
  if (k.isFunction(r))
    return r.call(this, e, t);
  if (i && (e = t), !!k.isString(e)) {
    if (k.isString(r))
      return e.indexOf(r) !== -1;
    if (k.isRegExp(r))
      return r.test(e);
  }
}
function Gk(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r);
}
function Yk(n, e) {
  const t = k.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + t, {
      value: function(i, o, s) {
        return this[r].call(this, e, i, o, s);
      },
      configurable: !0
    });
  });
}
let je = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const i = this;
    function o(l, a, c) {
      const u = Or(a);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = k.findKey(i, u);
      (!d || i[d] === void 0 || c === !0 || c === void 0 && i[d] !== !1) && (i[d || a] = eo(l));
    }
    const s = (l, a) => k.forEach(l, (c, u) => o(c, u, a));
    if (k.isPlainObject(e) || e instanceof this.constructor)
      s(e, t);
    else if (k.isString(e) && (e = e.trim()) && !Jk(e))
      s(qk(e), t);
    else if (k.isObject(e) && k.isIterable(e)) {
      let l = {}, a, c;
      for (const u of e) {
        if (!k.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[c = u[0]] = (a = l[c]) ? k.isArray(a) ? [...a, u[1]] : [a, u[1]] : u[1];
      }
      s(l, t);
    } else
      e != null && o(t, e, r);
    return this;
  }
  get(e, t) {
    if (e = Or(e), e) {
      const r = k.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!t)
          return i;
        if (t === !0)
          return Kk(i);
        if (k.isFunction(t))
          return t.call(this, i, r);
        if (k.isRegExp(t))
          return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = Or(e), e) {
      const r = k.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || zs(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let i = !1;
    function o(s) {
      if (s = Or(s), s) {
        const l = k.findKey(r, s);
        l && (!t || zs(r, r[l], l, t)) && (delete r[l], i = !0);
      }
    }
    return k.isArray(e) ? e.forEach(o) : o(e), i;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length, i = !1;
    for (; r--; ) {
      const o = t[r];
      (!e || zs(this, this[o], o, e, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(e) {
    const t = this, r = {};
    return k.forEach(this, (i, o) => {
      const s = k.findKey(r, o);
      if (s) {
        t[s] = eo(i), delete t[o];
        return;
      }
      const l = e ? Gk(o) : String(o).trim();
      l !== o && delete t[o], t[l] = eo(i), r[l] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return k.forEach(this, (r, i) => {
      r != null && r !== !1 && (t[i] = e && k.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const r = new this(e);
    return t.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[Bu] = this[Bu] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(s) {
      const l = Or(s);
      r[l] || (Yk(i, s), r[l] = !0);
    }
    return k.isArray(e) ? e.forEach(o) : o(e), this;
  }
};
je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(je.prototype, ({ value: n }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(r) {
      this[t] = r;
    }
  };
});
k.freezeMethods(je);
function Hs(n, e) {
  const t = this || mi, r = e || t, i = je.from(r.headers);
  let o = r.data;
  return k.forEach(n, function(l) {
    o = l.call(t, o, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), o;
}
function $h(n) {
  return !!(n && n.__CANCEL__);
}
function vr(n, e, t) {
  F.call(this, n ?? "canceled", F.ERR_CANCELED, e, t), this.name = "CanceledError";
}
k.inherits(vr, F, {
  __CANCEL__: !0
});
function jh(n, e, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? n(t) : e(new F(
    "Request failed with status code " + t.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function Xk(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
}
function Qk(n, e) {
  n = n || 10;
  const t = new Array(n), r = new Array(n);
  let i = 0, o = 0, s;
  return e = e !== void 0 ? e : 1e3, function(a) {
    const c = Date.now(), u = r[o];
    s || (s = c), t[i] = a, r[i] = c;
    let d = o, f = 0;
    for (; d !== i; )
      f += t[d++], d = d % n;
    if (i = (i + 1) % n, i === o && (o = (o + 1) % n), c - s < e)
      return;
    const h = u && c - u;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function Zk(n, e) {
  let t = 0, r = 1e3 / e, i, o;
  const s = (c, u = Date.now()) => {
    t = u, i = null, o && (clearTimeout(o), o = null), n.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - t;
    d >= r ? s(c, u) : (i = c, o || (o = setTimeout(() => {
      o = null, s(i);
    }, r - d)));
  }, () => i && s(i)];
}
const Lo = (n, e, t = 3) => {
  let r = 0;
  const i = Qk(50, 250);
  return Zk((o) => {
    const s = o.loaded, l = o.lengthComputable ? o.total : void 0, a = s - r, c = i(a), u = s <= l;
    r = s;
    const d = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && l && u ? (l - s) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    n(d);
  }, t);
}, zu = (n, e) => {
  const t = n != null;
  return [(r) => e[0]({
    lengthComputable: t,
    total: n,
    loaded: r
  }), e[1]];
}, Hu = (n) => (...e) => k.asap(() => n(...e)), ex = Ae.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, e) => (t) => (t = new URL(t, Ae.origin), n.protocol === t.protocol && n.host === t.host && (e || n.port === t.port)))(
  new URL(Ae.origin),
  Ae.navigator && /(msie|trident)/i.test(Ae.navigator.userAgent)
) : () => !0, tx = Ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, e, t, r, i, o) {
      const s = [n + "=" + encodeURIComponent(e)];
      k.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), k.isString(r) && s.push("path=" + r), k.isString(i) && s.push("domain=" + i), o === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(n) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function nx(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function rx(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function _h(n, e, t) {
  let r = !nx(e);
  return n && (r || t == !1) ? rx(n, e) : e;
}
const Vu = (n) => n instanceof je ? { ...n } : n;
function Vn(n, e) {
  e = e || {};
  const t = {};
  function r(c, u, d, f) {
    return k.isPlainObject(c) && k.isPlainObject(u) ? k.merge.call({ caseless: f }, c, u) : k.isPlainObject(u) ? k.merge({}, u) : k.isArray(u) ? u.slice() : u;
  }
  function i(c, u, d, f) {
    if (k.isUndefined(u)) {
      if (!k.isUndefined(c))
        return r(void 0, c, d, f);
    } else return r(c, u, d, f);
  }
  function o(c, u) {
    if (!k.isUndefined(u))
      return r(void 0, u);
  }
  function s(c, u) {
    if (k.isUndefined(u)) {
      if (!k.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, d) {
    if (d in e)
      return r(c, u);
    if (d in n)
      return r(void 0, c);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (c, u, d) => i(Vu(c), Vu(u), d, !0)
  };
  return k.forEach(Object.keys(Object.assign({}, n, e)), function(u) {
    const d = a[u] || i, f = d(n[u], e[u], u);
    k.isUndefined(f) && d !== l || (t[u] = f);
  }), t;
}
const Wh = (n) => {
  const e = Vn({}, n);
  let { data: t, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: l } = e;
  e.headers = s = je.from(s), e.url = Hh(_h(e.baseURL, e.url, e.allowAbsoluteUrls), n.params, n.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let a;
  if (k.isFormData(t)) {
    if (Ae.hasStandardBrowserEnv || Ae.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((a = s.getContentType()) !== !1) {
      const [c, ...u] = a ? a.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Ae.hasStandardBrowserEnv && (r && k.isFunction(r) && (r = r(e)), r || r !== !1 && ex(e.url))) {
    const c = i && o && tx.read(o);
    c && s.set(i, c);
  }
  return e;
}, ix = typeof XMLHttpRequest < "u", ox = ix && function(n) {
  return new Promise(function(t, r) {
    const i = Wh(n);
    let o = i.data;
    const s = je.from(i.headers).normalize();
    let { responseType: l, onUploadProgress: a, onDownloadProgress: c } = i, u, d, f, h, p;
    function g() {
      h && h(), p && p(), i.cancelToken && i.cancelToken.unsubscribe(u), i.signal && i.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(i.method.toUpperCase(), i.url, !0), m.timeout = i.timeout;
    function y() {
      if (!m)
        return;
      const C = je.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), T = {
        data: !l || l === "text" || l === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: C,
        config: n,
        request: m
      };
      jh(function(O) {
        t(O), g();
      }, function(O) {
        r(O), g();
      }, T), m = null;
    }
    "onloadend" in m ? m.onloadend = y : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, m.onabort = function() {
      m && (r(new F("Request aborted", F.ECONNABORTED, n, m)), m = null);
    }, m.onerror = function() {
      r(new F("Network Error", F.ERR_NETWORK, n, m)), m = null;
    }, m.ontimeout = function() {
      let b = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const T = i.transitional || Vh;
      i.timeoutErrorMessage && (b = i.timeoutErrorMessage), r(new F(
        b,
        T.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        n,
        m
      )), m = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in m && k.forEach(s.toJSON(), function(b, T) {
      m.setRequestHeader(T, b);
    }), k.isUndefined(i.withCredentials) || (m.withCredentials = !!i.withCredentials), l && l !== "json" && (m.responseType = i.responseType), c && ([f, p] = Lo(c, !0), m.addEventListener("progress", f)), a && m.upload && ([d, h] = Lo(a), m.upload.addEventListener("progress", d), m.upload.addEventListener("loadend", h)), (i.cancelToken || i.signal) && (u = (C) => {
      m && (r(!C || C.type ? new vr(null, n, m) : C), m.abort(), m = null);
    }, i.cancelToken && i.cancelToken.subscribe(u), i.signal && (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
    const w = Xk(i.url);
    if (w && Ae.protocols.indexOf(w) === -1) {
      r(new F("Unsupported protocol " + w + ":", F.ERR_BAD_REQUEST, n));
      return;
    }
    m.send(o || null);
  });
}, sx = (n, e) => {
  const { length: t } = n = n ? n.filter(Boolean) : [];
  if (e || t) {
    let r = new AbortController(), i;
    const o = function(c) {
      if (!i) {
        i = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof F ? u : new vr(u instanceof Error ? u.message : u));
      }
    };
    let s = e && setTimeout(() => {
      s = null, o(new F(`timeout ${e} of ms exceeded`, F.ETIMEDOUT));
    }, e);
    const l = () => {
      n && (s && clearTimeout(s), s = null, n.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), n = null);
    };
    n.forEach((c) => c.addEventListener("abort", o));
    const { signal: a } = r;
    return a.unsubscribe = () => k.asap(l), a;
  }
}, lx = function* (n, e) {
  let t = n.byteLength;
  if (t < e) {
    yield n;
    return;
  }
  let r = 0, i;
  for (; r < t; )
    i = r + e, yield n.slice(r, i), r = i;
}, ax = async function* (n, e) {
  for await (const t of cx(n))
    yield* lx(t, e);
}, cx = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const e = n.getReader();
  try {
    for (; ; ) {
      const { done: t, value: r } = await e.read();
      if (t)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, Fu = (n, e, t, r) => {
  const i = ax(n, e);
  let o = 0, s, l = (a) => {
    s || (s = !0, r && r(a));
  };
  return new ReadableStream({
    async pull(a) {
      try {
        const { done: c, value: u } = await i.next();
        if (c) {
          l(), a.close();
          return;
        }
        let d = u.byteLength;
        if (t) {
          let f = o += d;
          t(f);
        }
        a.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(a) {
      return l(a), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, rs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Uh = rs && typeof ReadableStream == "function", ux = rs && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (e) => n.encode(e))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), qh = (n, ...e) => {
  try {
    return !!n(...e);
  } catch {
    return !1;
  }
}, dx = Uh && qh(() => {
  let n = !1;
  const e = new Request(Ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !e;
}), $u = 64 * 1024, Al = Uh && qh(() => k.isReadableStream(new Response("").body)), Io = {
  stream: Al && ((n) => n.body)
};
rs && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Io[e] && (Io[e] = k.isFunction(n[e]) ? (t) => t[e]() : (t, r) => {
      throw new F(`Response type '${e}' is not supported`, F.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const fx = async (n) => {
  if (n == null)
    return 0;
  if (k.isBlob(n))
    return n.size;
  if (k.isSpecCompliantForm(n))
    return (await new Request(Ae.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (k.isArrayBufferView(n) || k.isArrayBuffer(n))
    return n.byteLength;
  if (k.isURLSearchParams(n) && (n = n + ""), k.isString(n))
    return (await ux(n)).byteLength;
}, hx = async (n, e) => {
  const t = k.toFiniteNumber(n.getContentLength());
  return t ?? fx(e);
}, px = rs && (async (n) => {
  let {
    url: e,
    method: t,
    data: r,
    signal: i,
    cancelToken: o,
    timeout: s,
    onDownloadProgress: l,
    onUploadProgress: a,
    responseType: c,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = Wh(n);
  c = c ? (c + "").toLowerCase() : "text";
  let h = sx([i, o && o.toAbortSignal()], s), p;
  const g = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let m;
  try {
    if (a && dx && t !== "get" && t !== "head" && (m = await hx(u, r)) !== 0) {
      let T = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), v;
      if (k.isFormData(r) && (v = T.headers.get("content-type")) && u.setContentType(v), T.body) {
        const [O, A] = zu(
          m,
          Lo(Hu(a))
        );
        r = Fu(T.body, $u, O, A);
      }
    }
    k.isString(d) || (d = d ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    p = new Request(e, {
      ...f,
      signal: h,
      method: t.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: y ? d : void 0
    });
    let w = await fetch(p, f);
    const C = Al && (c === "stream" || c === "response");
    if (Al && (l || C && g)) {
      const T = {};
      ["status", "statusText", "headers"].forEach((N) => {
        T[N] = w[N];
      });
      const v = k.toFiniteNumber(w.headers.get("content-length")), [O, A] = l && zu(
        v,
        Lo(Hu(l), !0)
      ) || [];
      w = new Response(
        Fu(w.body, $u, O, () => {
          A && A(), g && g();
        }),
        T
      );
    }
    c = c || "text";
    let b = await Io[k.findKey(Io, c) || "text"](w, n);
    return !C && g && g(), await new Promise((T, v) => {
      jh(T, v, {
        data: b,
        headers: je.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: n,
        request: p
      });
    });
  } catch (y) {
    throw g && g(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new F("Network Error", F.ERR_NETWORK, n, p),
      {
        cause: y.cause || y
      }
    ) : F.from(y, y && y.code, n, p);
  }
}), El = {
  http: Ok,
  xhr: ox,
  fetch: px
};
k.forEach(El, (n, e) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
const ju = (n) => `- ${n}`, mx = (n) => k.isFunction(n) || n === null || n === !1, Kh = {
  getAdapter: (n) => {
    n = k.isArray(n) ? n : [n];
    const { length: e } = n;
    let t, r;
    const i = {};
    for (let o = 0; o < e; o++) {
      t = n[o];
      let s;
      if (r = t, !mx(t) && (r = El[(s = String(t)).toLowerCase()], r === void 0))
        throw new F(`Unknown adapter '${s}'`);
      if (r)
        break;
      i[s || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(i).map(
        ([l, a]) => `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = e ? o.length > 1 ? `since :
` + o.map(ju).join(`
`) : " " + ju(o[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: El
};
function Vs(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new vr(null, n);
}
function _u(n) {
  return Vs(n), n.headers = je.from(n.headers), n.data = Hs.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Kh.getAdapter(n.adapter || mi.adapter)(n).then(function(r) {
    return Vs(n), r.data = Hs.call(
      n,
      n.transformResponse,
      r
    ), r.headers = je.from(r.headers), r;
  }, function(r) {
    return $h(r) || (Vs(n), r && r.response && (r.response.data = Hs.call(
      n,
      n.transformResponse,
      r.response
    ), r.response.headers = je.from(r.response.headers))), Promise.reject(r);
  });
}
const Jh = "1.10.0", is = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  is[n] = function(r) {
    return typeof r === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const Wu = {};
is.transitional = function(e, t, r) {
  function i(o, s) {
    return "[Axios v" + Jh + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, l) => {
    if (e === !1)
      throw new F(
        i(s, " has been removed" + (t ? " in " + t : "")),
        F.ERR_DEPRECATED
      );
    return t && !Wu[s] && (Wu[s] = !0, console.warn(
      i(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(o, s, l) : !0;
  };
};
is.spelling = function(e) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function gx(n, e, t) {
  if (typeof n != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], s = e[o];
    if (s) {
      const l = n[o], a = l === void 0 || s(l, o, n);
      if (a !== !0)
        throw new F("option " + o + " must be " + a, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new F("Unknown option " + o, F.ERR_BAD_OPTION);
  }
}
const to = {
  assertOptions: gx,
  validators: is
}, ft = to.validators;
let Rn = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Pu(),
      response: new Pu()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Vn(this.defaults, t);
    const { transitional: r, paramsSerializer: i, headers: o } = t;
    r !== void 0 && to.assertOptions(r, {
      silentJSONParsing: ft.transitional(ft.boolean),
      forcedJSONParsing: ft.transitional(ft.boolean),
      clarifyTimeoutError: ft.transitional(ft.boolean)
    }, !1), i != null && (k.isFunction(i) ? t.paramsSerializer = {
      serialize: i
    } : to.assertOptions(i, {
      encode: ft.function,
      serialize: ft.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), to.assertOptions(t, {
      baseUrl: ft.spelling("baseURL"),
      withXsrfToken: ft.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = o && k.merge(
      o.common,
      o[t.method]
    );
    o && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), t.headers = je.concat(s, o);
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (a = a && g.synchronous, l.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, f;
    if (!a) {
      const p = [_u.bind(this), void 0];
      for (p.unshift.apply(p, l), p.push.apply(p, c), f = p.length, u = Promise.resolve(t); d < f; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    f = l.length;
    let h = t;
    for (d = 0; d < f; ) {
      const p = l[d++], g = l[d++];
      try {
        h = p(h);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      u = _u.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(e) {
    e = Vn(this.defaults, e);
    const t = _h(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Hh(t, e.params, e.paramsSerializer);
  }
};
k.forEach(["delete", "get", "head", "options"], function(e) {
  Rn.prototype[e] = function(t, r) {
    return this.request(Vn(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
k.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(o, s, l) {
      return this.request(Vn(l || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  Rn.prototype[e] = t(), Rn.prototype[e + "Form"] = t(!0);
});
let yx = class Gh {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(o) {
      t = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const s = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(i);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, e(function(o, s, l) {
      r.reason || (r.reason = new vr(o, s, l), t(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), t = (r) => {
      e.abort(r);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Gh(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
};
function bx(n) {
  return function(t) {
    return n.apply(null, t);
  };
}
function wx(n) {
  return k.isObject(n) && n.isAxiosError === !0;
}
const Ol = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ol).forEach(([n, e]) => {
  Ol[e] = n;
});
function Yh(n) {
  const e = new Rn(n), t = Mh(Rn.prototype.request, e);
  return k.extend(t, Rn.prototype, e, { allOwnKeys: !0 }), k.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(i) {
    return Yh(Vn(n, i));
  }, t;
}
const de = Yh(mi);
de.Axios = Rn;
de.CanceledError = vr;
de.CancelToken = yx;
de.isCancel = $h;
de.VERSION = Jh;
de.toFormData = ns;
de.AxiosError = F;
de.Cancel = de.CanceledError;
de.all = function(e) {
  return Promise.all(e);
};
de.spread = bx;
de.isAxiosError = wx;
de.mergeConfig = Vn;
de.AxiosHeaders = je;
de.formToJSON = (n) => Fh(k.isHTMLForm(n) ? new FormData(n) : n);
de.getAdapter = Kh.getAdapter;
de.HttpStatusCode = Ol;
de.default = de;
const {
  Axios: AC,
  AxiosError: EC,
  CanceledError: OC,
  isCancel: NC,
  CancelToken: RC,
  VERSION: DC,
  all: LC,
  Cancel: IC,
  isAxiosError: PC,
  spread: BC,
  toFormData: zC,
  AxiosHeaders: HC,
  HttpStatusCode: VC,
  formToJSON: FC,
  getAdapter: $C,
  mergeConfig: jC
} = de, vx = function(n) {
  let t = n.state.selection.$from.before(1), r = n.coordsAtPos(t);
  return new DOMRect(
    r.left,
    r.top,
    r.right - r.left,
    r.bottom - r.top
  );
}, kx = function(n) {
  const e = n.state.selection.$from;
  let t = e.depth;
  for (; t > 1 && e.node(t).type.name != "tableRow"; )
    t--;
  let r = e.before(t), i = n.nodeDOM(r).getBoundingClientRect();
  return new DOMRect(i.x, i.y, i.width, i.height);
}, xx = function(n) {
  const e = n.state.selection.$from;
  let t = e.depth, r = 0, i = 0;
  for (; t > 0; ) {
    if ((e.node(t).type.name == "tableCell" || e.node(t).type.name == "tableHeader") && (r = t), e.node(t).type.name == "table") {
      i = t;
      break;
    }
    t--;
  }
  if (!(i && r))
    return !1;
  let o = n.nodeDOM(e.before(r)).getBoundingClientRect(), s = n.nodeDOM(e.before(i)).getBoundingClientRect();
  return new DOMRect(o.x, s.y, o.width, s.height);
}, Aa = function(n) {
  const e = n.state.selection.$from;
  return e.node(1) == null && n.lastSelectedViewDesc ? n.lastSelectedViewDesc.node : e.node(1);
};
let Xh = function(n, e) {
  const t = [];
  for (let r = 0; r < n.childCount; r++)
    t.push(
      e(n.child(r), r, n instanceof S ? n : n.content)
    );
  return t;
};
const Cx = function({
  view: n,
  state: e,
  draggedNodePosition: t,
  targetNodePosition: r
}) {
  let i = e.doc.resolve(r), o = e.doc.resolve(t).node(1), s = i.node(1) ?? i.nodeAfter;
  const l = i.node(0), a = i.start(0);
  let c = n.state.tr;
  const u = Xh(l, (y) => y);
  let d = a, f = i.end(0), h = u.indexOf(o), p = u.indexOf(s);
  p > h && --p;
  let g = u[h];
  u.splice(h, 1), u.splice(p, 0, g);
  const m = new E(S.fromArray(u), 0, 0);
  c.step(new he(d, f, m, !1)), c.setSelection(z.near(c.doc.resolve(r))), n.dispatch(c);
}, Sx = function({ view: n, dir: e, currentResolved: t }) {
  if (!t)
    return !1;
  let r = n.state.tr;
  const i = e === "DOWN", o = t.node(1) || t.nodeAfter, s = 0, l = t.node(s), a = t.start(s), c = Xh(l, (m) => m);
  let u = c.indexOf(o);
  if (u == -1)
    return !1;
  let d = i ? u + 1 : u - 1;
  if (d >= c.length || d < 0)
    return !1;
  const f = c[d].nodeSize;
  [c[u], c[d]] = [c[d], c[u]];
  let h = a, p = t.end(s);
  const g = new E(S.fromArray(c), 0, 0);
  r.step(new he(h, p, g, !1)), r.setSelection(
    z.near(
      r.doc.resolve(
        i ? t.pos + f : t.pos - f
      )
    )
  ), n.dispatch(r);
};
function Fs(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function Tx(n) {
  return n && typeof n == "object" && Array.isArray(n);
}
function Qh(n, e) {
  if (Fs(n) && Fs(e))
    for (const t in e)
      Fs(e[t]) ? (n[t] || Object.assign(n, { [t]: {} }), Qh(n[t], e[t])) : Tx(e[t]) ? (n[t] || (n[t] = []), Nl(n[t], e[t])) : Object.assign(n, { [t]: e[t] });
  return n;
}
const Nl = function(n, e) {
  return e.forEach((t, r) => {
    !n || !n.find((i) => i.name == t.name) ? n.push(t) : Qh(
      n.find((i) => i.name == t.name),
      t
    );
  }), n;
}, Mx = re.create({
  name: "blockWidth",
  addOptions() {
    return {
      types: [],
      alignments: ["normal", "wide", "full", "sidebar"],
      defaultAlignment: "normal"
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          blockWidth: {
            default: this.options.defaultAlignment,
            parseHTML: (n) => n.dataset.blockWidth || this.options.defaultAlignment,
            renderHTML: (n) => n.blockWidth === this.options.defaultAlignment ? {} : { "data-block-width": n.blockWidth }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBlockWidth: (n) => ({ commands: e, view: t }) => this.options.alignments.includes(n) ? (e.updateAttributes(Aa(t).type.name, {
        blockWidth: n
      }), !0) : !1,
      unsetBlockWidth: () => ({ commands: n }) => this.options.types.every(
        (e) => n.resetAttributes(e, "blockWidth")
      )
    };
  },
  addKeyboardShortcuts() {
    return {
      // 'Mod-Shift-l': () => this.editor.commands.setTextAlign('left'),
      // 'Mod-Shift-e': () => this.editor.commands.setTextAlign('center'),
      // 'Mod-Shift-r': () => this.editor.commands.setTextAlign('right'),
      // 'Mod-Shift-j': () => this.editor.commands.setTextAlign('justify'),
    };
  }
}), Ax = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/, Ex = /^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/g, Ox = (n) => n.match(Ax), Uu = (n) => n ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/", Nx = (n) => {
  const {
    url: e,
    allowFullscreen: t,
    autoplay: r,
    ccLanguage: i,
    ccLoadPolicy: o,
    controls: s,
    disableKBcontrols: l,
    enableIFrameApi: a,
    endTime: c,
    interfaceLanguage: u,
    ivLoadPolicy: d,
    loop: f,
    modestBranding: h,
    nocookie: p,
    origin: g,
    playlist: m,
    progressBarColor: y,
    startAt: w
  } = n;
  if (e.includes("/embed/"))
    return e;
  if (e.includes("youtu.be")) {
    const O = e.split("/").pop();
    return O ? `${Uu(p)}${O}` : null;
  }
  const b = /v=([-\w]+)/gm.exec(e);
  if (!b || !b[1])
    return null;
  let T = `${Uu(p)}${b[1]}`;
  const v = [];
  return t === !1 && v.push("fs=0"), r && v.push("autoplay=1"), i && v.push(`cc_lang_pref=${i}`), o && v.push("cc_load_policy=1"), s || v.push("controls=0"), l && v.push("disablekb=1"), a && v.push("enablejsapi=1"), c && v.push(`end=${c}`), u && v.push(`hl=${u}`), d && v.push(`iv_load_policy=${d}`), f && v.push("loop=1"), h && v.push("modestbranding=1"), g && v.push(`origin=${g}`), m && v.push(`playlist=${m}`), w && v.push(`start=${w}`), y && v.push(`color=${y}`), v.length && (T += `?${v.join("&")}`), T;
}, Rx = ae.create({
  name: "youtube",
  addOptions() {
    return {
      addPasteHandler: !0,
      allowFullscreen: !0,
      autoplay: !1,
      ccLanguage: void 0,
      ccLoadPolicy: void 0,
      controls: !0,
      disableKBcontrols: !1,
      enableIFrameApi: !1,
      endTime: 0,
      height: 480,
      interfaceLanguage: void 0,
      ivLoadPolicy: 0,
      loop: !1,
      modestBranding: !1,
      HTMLAttributes: {},
      inline: !1,
      nocookie: !1,
      origin: "",
      playlist: "",
      progressBarColor: void 0,
      width: 640
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  content: "inline*",
  draggable: !0,
  isolating: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      start: {
        default: 0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: this.options.height
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "figure[data-youtube-video]",
        contentElement: "figcaption"
      }
    ];
  },
  addCommands() {
    return {
      setYoutubeVideo: (n) => ({ commands: e }) => Ox(n.src) ? e.insertContent({
        type: this.name,
        attrs: n
      }) : !1
    };
  },
  addPasteRules() {
    return this.options.addPasteHandler ? [
      ky({
        find: Ex,
        type: this.type,
        getAttributes: (n) => ({ src: n.input })
      })
    ] : [];
  },
  renderHTML({ HTMLAttributes: n }) {
    const e = Nx({
      url: n.src,
      allowFullscreen: this.options.allowFullscreen,
      autoplay: this.options.autoplay,
      ccLanguage: this.options.ccLanguage,
      ccLoadPolicy: this.options.ccLoadPolicy,
      controls: this.options.controls,
      disableKBcontrols: this.options.disableKBcontrols,
      enableIFrameApi: this.options.enableIFrameApi,
      endTime: this.options.endTime,
      interfaceLanguage: this.options.interfaceLanguage,
      ivLoadPolicy: this.options.ivLoadPolicy,
      loop: this.options.loop,
      modestBranding: this.options.modestBranding,
      nocookie: this.options.nocookie,
      origin: this.options.origin,
      playlist: this.options.playlist,
      progressBarColor: this.options.progressBarColor,
      startAt: n.start || 0
    }), t = n["data-block-width"];
    return n["data-block-width"] = null, n.src = e, [
      "figure",
      {
        "data-youtube-video": "",
        "data-block-width": t,
        class: "bg-slate-100 pb-4 text-center"
      },
      [
        "iframe",
        K(
          this.options.HTMLAttributes,
          {
            contenteditable: !1,
            draggable: !1,
            width: this.options.width,
            height: this.options.height,
            allowfullscreen: this.options.allowFullscreen,
            autoplay: this.options.autoplay,
            ccLanguage: this.options.ccLanguage,
            ccLoadPolicy: this.options.ccLoadPolicy,
            disableKBcontrols: this.options.disableKBcontrols,
            enableIFrameApi: this.options.enableIFrameApi,
            endTime: this.options.endTime,
            interfaceLanguage: this.options.interfaceLanguage,
            ivLoadPolicy: this.options.ivLoadPolicy,
            loop: this.options.loop,
            modestBranding: this.options.modestBranding,
            origin: this.options.origin,
            playlist: this.options.playlist,
            progressBarColor: this.options.progressBarColor
          },
          n
        )
      ],
      ["figcaption", 0]
    ];
  }
});
function qu({ types: n, node: e }) {
  return Array.isArray(n) && n.includes(e.type) || e.type === n;
}
const Dx = re.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: ["paragraph"]
    };
  },
  addProseMirrorPlugins() {
    const n = new ce(this.name), e = Object.entries(this.editor.schema.nodes).map(([, t]) => t).filter((t) => this.options.notAfter.includes(t.name));
    return [
      new Z({
        key: n,
        appendTransaction: (t, r, i) => {
          const { doc: o, tr: s, schema: l } = i, a = n.getState(i), c = o.content.size, u = l.nodes[this.options.node];
          if (a)
            return s.insert(c, u.create());
        },
        state: {
          init: (t, r) => {
            const i = r.tr.doc.lastChild;
            return !qu({ node: i, types: e });
          },
          apply: (t, r) => {
            if (!t.docChanged)
              return r;
            const i = t.doc.lastChild;
            return !qu({ node: i, types: e });
          }
        }
      })
    ];
  }
}), Lx = re.create({
  name: "insertBetween",
  addOptions() {
    return {};
  },
  addProseMirrorPlugins() {
    var l;
    let n = !1, e = 0, t = this.editor, { view: r } = t;
    const i = document.createElement("button");
    i.classList.add("editor-node-tools"), i.ariaLabel = "Insert block here", i.style.display = "none", t.view.dom.addEventListener("click", () => {
      i.style.display = "none";
    }), i.addEventListener("click", (a) => {
      t.view.focus(), a.preventDefault();
      const c = s(
        r,
        a.clientX,
        a.clientY - 25,
        !0
      );
      console.log(c);
      const u = t.schema.nodes.paragraph;
      let d = t.state.tr.insert(c, u.create());
      d.setSelection(I.create(d.doc, c)), t.view.dispatch(d), i.style.display = "none";
    }), (l = t.view.dom.parentElement) == null || l.appendChild(i);
    const o = (a, c) => {
      let u = s(
        a,
        c.clientX,
        c.clientY - 25
      );
      return a.nodeDOM(u);
    }, s = (a, c, u, d = !1) => {
      let f = a.posAtCoords({
        left: c,
        top: u
      });
      if (!f) return null;
      let h = a.state.doc.resolve(f.pos);
      return d ? h.after(1) : h.before(1);
    };
    return [
      new Z({
        key: new ce(this.name),
        props: {
          handleDOMEvents: {
            mousemove: (a, c) => {
              let u = o(a, c);
              if (u) {
                let d = u.getBoundingClientRect(), f = d.bottom - a.dom.getBoundingClientRect().top + a.dom.offsetTop;
                c.clientY > d.bottom - 50 && (f !== e || !n) ? (n = !0, e = f, i.style.top = `${f}px`, i.style.right = `${d.right - d.width}px`, i.style.left = `${d.left}px`, i.style.display = "") : c.clientY <= d.bottom - 50 && n && (i.style.display = "none", n = !1, f = 0);
              }
            }
          }
        }
      })
    ];
  }
}), Ix = re.create({
  name: "Variants",
  addOptions() {
    return {
      types: [],
      defaultVariant: "default"
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          variant: {
            default: this.options.defaultVariant,
            parseHTML: (n) => n.dataset.variant,
            renderHTML: (n) => n.variant === this.options.defaultVariant ? {} : {
              "data-variant": n.variant
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setVariant: (n) => ({ commands: e, view: t }) => (e.updateAttributes(Aa(t).type.name, {
        variant: n
      }), !0),
      unsetVariant: () => ({ commands: n }) => this.options.types.every(
        (e) => n.resetAttributes(e, "variant")
      )
    };
  }
});
function Px(n) {
  var e;
  const { char: t, allowSpaces: r, allowedPrefixes: i, startOfLine: o, $position: s } = n, l = vy(t), a = new RegExp(`\\s${l}$`), c = o ? "^" : "", u = r ? new RegExp(`${c}${l}.*?(?=\\s${l}|$)`, "gm") : new RegExp(`${c}(?:^)?${l}[^\\s${l}]*`, "gm"), d = ((e = s.nodeBefore) === null || e === void 0 ? void 0 : e.isText) && s.nodeBefore.text;
  if (!d)
    return null;
  const f = s.pos - d.length, h = Array.from(d.matchAll(u)).pop();
  if (!h || h.input === void 0 || h.index === void 0)
    return null;
  const p = h.input.slice(Math.max(0, h.index - 1), h.index), g = new RegExp(`^[${i == null ? void 0 : i.join("")}\0]?$`).test(p);
  if (i !== null && !g)
    return null;
  const m = f + h.index;
  let y = m + h[0].length;
  return r && a.test(d.slice(y - 1, y + 1)) && (h[0] += " ", y += 1), m < s.pos && y >= s.pos ? {
    range: {
      from: m,
      to: y
    },
    query: h[0].slice(t.length),
    text: h[0]
  } : null;
}
const Bx = new ce("suggestion");
function zx({ pluginKey: n = Bx, editor: e, char: t = "@", allowSpaces: r = !1, allowedPrefixes: i = [" "], startOfLine: o = !1, decorationTag: s = "span", decorationClass: l = "suggestion", command: a = () => null, items: c = () => [], render: u = () => ({}), allow: d = () => !0, findSuggestionMatch: f = Px }) {
  let h;
  const p = u == null ? void 0 : u(), g = new Z({
    key: n,
    view() {
      return {
        update: async (m, y) => {
          var w, C, b, T, v, O, A;
          const N = (w = this.key) === null || w === void 0 ? void 0 : w.getState(y), B = (C = this.key) === null || C === void 0 ? void 0 : C.getState(m.state), W = N.active && B.active && N.range.from !== B.range.from, U = !N.active && B.active, q = N.active && !B.active, fe = !U && !q && N.query !== B.query, ee = U || W, G = fe && !W, Y = q || W;
          if (!ee && !G && !Y)
            return;
          const _ = Y && !ee ? N : B, ue = m.dom.querySelector(`[data-decoration-id="${_.decorationId}"]`);
          h = {
            editor: e,
            range: _.range,
            query: _.query,
            text: _.text,
            items: [],
            command: (oe) => a({
              editor: e,
              range: _.range,
              props: oe
            }),
            decorationNode: ue,
            // virtual node for popper.js or tippy.js
            // this can be used for building popups without a DOM node
            clientRect: ue ? () => {
              var oe;
              const { decorationId: Be } = (oe = this.key) === null || oe === void 0 ? void 0 : oe.getState(e.state), me = m.dom.querySelector(`[data-decoration-id="${Be}"]`);
              return (me == null ? void 0 : me.getBoundingClientRect()) || null;
            } : null
          }, ee && ((b = p == null ? void 0 : p.onBeforeStart) === null || b === void 0 || b.call(p, h)), G && ((T = p == null ? void 0 : p.onBeforeUpdate) === null || T === void 0 || T.call(p, h)), (G || ee) && (h.items = await c({
            editor: e,
            query: _.query
          })), Y && ((v = p == null ? void 0 : p.onExit) === null || v === void 0 || v.call(p, h)), G && ((O = p == null ? void 0 : p.onUpdate) === null || O === void 0 || O.call(p, h)), ee && ((A = p == null ? void 0 : p.onStart) === null || A === void 0 || A.call(p, h));
        },
        destroy: () => {
          var m;
          h && ((m = p == null ? void 0 : p.onExit) === null || m === void 0 || m.call(p, h));
        }
      };
    },
    state: {
      // Initialize the plugin's internal state.
      init() {
        return {
          active: !1,
          range: {
            from: 0,
            to: 0
          },
          query: null,
          text: null,
          composing: !1
        };
      },
      // Apply changes to the plugin state from a view transaction.
      apply(m, y, w, C) {
        const { isEditable: b } = e, { composing: T } = e.view, { selection: v } = m, { empty: O, from: A } = v, N = { ...y };
        if (N.composing = T, b && (O || e.view.composing)) {
          (A < y.range.from || A > y.range.to) && !T && !y.composing && (N.active = !1);
          const B = f({
            char: t,
            allowSpaces: r,
            allowedPrefixes: i,
            startOfLine: o,
            $position: v.$from
          }), W = `id_${Math.floor(Math.random() * 4294967295)}`;
          B && d({ editor: e, state: C, range: B.range }) ? (N.active = !0, N.decorationId = y.decorationId ? y.decorationId : W, N.range = B.range, N.query = B.query, N.text = B.text) : N.active = !1;
        } else
          N.active = !1;
        return N.active || (N.decorationId = null, N.range = { from: 0, to: 0 }, N.query = null, N.text = null), N;
      }
    },
    props: {
      // Call the keydown hook if suggestion is active.
      handleKeyDown(m, y) {
        var w;
        const { active: C, range: b } = g.getState(m.state);
        return C && ((w = p == null ? void 0 : p.onKeyDown) === null || w === void 0 ? void 0 : w.call(p, { view: m, event: y, range: b })) || !1;
      },
      // Setup decorator on the currently active suggestion.
      decorations(m) {
        const { active: y, range: w, decorationId: C } = g.getState(m);
        return y ? ne.create(m.doc, [
          Se.inline(w.from, w.to, {
            nodeName: s,
            class: l,
            "data-decoration-id": C
          })
        ]) : null;
      }
    }
  });
  return g;
}
const Hx = re.create({
  name: "commands",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        startOfLine: !0,
        command: ({ editor: n, range: e, props: t }) => {
          t.insertCommand({ editor: n, range: e });
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      zx({
        editor: this.editor,
        ...this.options.suggestion
      })
    ];
  }
}), Vx = {
  props: {
    items: {
      type: Array,
      required: !0
    },
    command: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      selectedIndex: 0
    };
  },
  watch: {
    items() {
      this.selectedIndex = 0;
    }
  },
  computed: {
    itemsWithInsertCommand() {
      return this.items.filter((n) => n.insertCommand);
    }
  },
  methods: {
    onKeyDown({ event: n }) {
      return n.key === "ArrowUp" ? (this.upHandler(), !0) : n.key === "ArrowDown" ? (this.downHandler(), !0) : n.key === "Enter" ? (this.enterHandler(), !0) : !1;
    },
    upHandler() {
      this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length;
    },
    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },
    enterHandler() {
      this.selectItem(this.selectedIndex);
    },
    selectItem(n) {
      const e = this.itemsWithInsertCommand[n];
      e && this.command(e);
    }
  }
}, Fx = { class: "bg-white border border-slate-400 rounded overflow-hidden shadow" }, $x = ["onClick"], jx = ["innerHTML"], _x = {
  key: 1,
  class: "p-2 text-slate-600 text-sm w-full"
};
function Wx(n, e, t, r, i, o) {
  return $(), te("div", Fx, [
    t.items.length ? ($(!0), te(Ot, { key: 0 }, Nt(o.itemsWithInsertCommand, (s, l) => ($(), te("button", {
      class: Yt(["flex flex-row gap-2 items-center w-full p-2 pr-12 text-slate-600 hover:bg-slate-50 text-sm", { "bg-slate-100": l === i.selectedIndex }]),
      key: l,
      onClick: Te((a) => o.selectItem(l), ["prevent"])
    }, [
      ye("span", {
        innerHTML: s.icon
      }, null, 8, jx),
      dp(" " + fp(s.title), 1)
    ], 10, $x))), 128)) : ($(), te("div", _x, "No result"))
  ]);
}
const Ux = /* @__PURE__ */ ai(Vx, [["render", Wx]]);
function qx(n) {
  return {
    items: ({ query: e }) => n.filter(
      (t) => t.title.toLowerCase().startsWith(e.toLowerCase())
    ),
    render: () => {
      let e, t;
      return {
        onStart: (r) => {
          e = new sw(Ux, {
            // using vue 2:
            // parent: this,
            // propsData: props,
            props: r,
            editor: r.editor
          }), r.clientRect && (t = $n("body", {
            getReferenceClientRect: r.clientRect,
            appendTo: () => e.editor.view.dom.parentNode.parentNode,
            content: e.element,
            showOnCreate: !0,
            interactive: !0,
            trigger: "manual",
            placement: "bottom-start"
          }));
        },
        onUpdate(r) {
          e.updateProps(r), r.clientRect && t[0].setProps({
            getReferenceClientRect: r.clientRect
          });
        },
        onKeyDown(r) {
          var i;
          return r.event.key === "Escape" ? (t[0].hide(), !0) : (i = e.ref) == null ? void 0 : i.onKeyDown(r);
        },
        onExit() {
          t[0].destroy(), e.destroy();
        }
      };
    }
  };
}
function Kx() {
  return [
    {
      name: "paragraph",
      title: "Paragraph",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).setNode("paragraph").run();
      },
      convertCommand: (n) => {
        n.chain().focus().setParagraph().run();
      },
      canBeConverted: !0,
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("paragraph")
    },
    {
      title: "Heading",
      name: "heading",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).setNode("heading", { level: 2 }).run();
      },
      convertCommand: (n) => {
        n.chain().focus().toggleHeading({ level: 2 }).run();
      },
      canBeConverted: !0,
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("heading"),
      tools: [
        {
          title: "Heading 1",
          name: "heading1",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z"></path></svg>',
          command: (n) => {
            n.chain().focus().setHeading({ level: 1 }).run();
          },
          isActiveTest: (n) => n.isActive("heading", { level: 1 })
        },
        {
          title: "Heading 2",
          name: "heading2",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" aria-hidden="true" focusable="false"><path d="M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z"></path></svg>',
          command: (n) => {
            n.chain().focus().setHeading({ level: 2 }).run();
          },
          isActiveTest: (n) => n.isActive("heading", { level: 2 })
        },
        {
          title: "Heading 3",
          name: "heading3",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z"></path></svg>',
          command: (n) => {
            n.chain().focus().setHeading({ level: 3 }).run();
          },
          isActiveTest: (n) => n.isActive("heading", { level: 3 })
        }
      ]
    },
    {
      title: "List",
      name: "list",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="0" stroke="currentColor" fill="currentColor"  focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).toggleBulletList().run();
      },
      convertCommand: (n) => {
        n.chain().focus().toggleBulletList().run();
      },
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("bulletList") || n.isActive("orderedList"),
      tools: [
        {
          title: "Bullet list",
          name: "bulletList",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-width="1"  fill="currentColor"  focusable="false"><path d="M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path></svg>',
          command: (n) => {
            n.chain().focus().toggleBulletList().run();
          },
          isActiveTest: (n) => n.isActive("bulletList")
        },
        {
          title: "Ordered list",
          name: "orderedList",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path d="M11 6h9M11 12h9M12 18h8M4 16a2 2 0 114 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6"/></svg>',
          command: (n) => {
            n.chain().focus().toggleOrderedList().run();
          },
          isActiveTest: (n) => n.isActive("orderedList")
        },
        {
          title: "Sink list item",
          name: "sinklistitem",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"></path></svg>',
          command: (n) => {
            n.chain().focus().sinkListItem("listItem").run();
          },
          isDisabledTest: (n) => !n.can().sinkListItem("listItem")
        },
        {
          title: "Lift list item",
          name: "liftlistitem",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"></path></svg>',
          command: (n) => {
            n.chain().focus().liftListItem("listItem").run();
          },
          isDisabledTest: (n) => !n.can().liftListItem("listItem")
        }
      ]
    },
    {
      title: "Code block",
      name: "codeBlock",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).toggleCodeBlock().run();
      },
      hasInlineTools: !1,
      convertCommand: (n) => {
        n.chain().focus().toggleCodeBlock().run();
      },
      isActiveTest: (n) => n.isActive("codeBlock")
    },
    {
      title: "Blockquote",
      name: "blockquote",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).toggleBlockquote().run();
      },
      hasInlineTools: !0,
      canBeConverted: !0,
      convertCommand: (n) => {
        n.chain().focus().toggleBlockquote().run();
      },
      isActiveTest: (n) => n.isActive("blockquote")
    },
    {
      title: "Horizontal rule",
      name: "horizontalRule",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M20.2 7v4H3.8V7H2.2v9h1.6v-3.5h16.4V16h1.6V7z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).setHorizontalRule().run();
      },
      hasInlineTools: !1,
      isActiveTest: (n) => n.isActive("horizontalRule")
    },
    {
      title: "Table",
      name: "table",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" focusable="false"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"></path></svg>',
      insertCommand: ({ editor: n, range: e }) => {
        n.chain().focus().deleteRange(e).insertTable({ rows: 3, cols: 3, withHeaderRow: !0 }).run();
      },
      hasInlineTools: !0,
      isActiveTest: (n) => n.isActive("table"),
      tools: [
        {
          title: "Toggle header row",
          name: "toggleHeaderRow",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="21" height="16.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 21 16.5"><path stroke-linecap="round" stroke-linejoin="round" d="M1.875 15.75h17.25m-17.25 0A1.125 1.125 0 0 1 .75 14.625m1.125 1.125h3.381c.621 0 1.125-.504 1.125-1.125m-5.631 0V1.875m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V1.875m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75H7.506a1.125 1.125 0 0 1-1.125-1.125M20.25 1.875c0-.621-.504-1.125-1.125-1.125H1.875C1.254.75.75 1.254.75 1.875m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M.75 1.875v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h3.381c.748 0 1.125.504 1.125 1.125M1.875 4.5C1.254 4.5.75 5.004.75 5.625v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75H7.506c-.62 0-1.125.504-1.125 1.125M19.125 4.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m-3.381 0C1.254 8.25.75 8.754.75 9.375v1.5c0 .621.504 1.125 1.125 1.125m4.506-4.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M7.506 8.25h11.619m-11.619 0c-.62 0-1.125.504-1.125 1.125M19.125 8.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m1.125-1.125v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h11.619"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M.737.877H20.212V4.182H.737z" /></svg>',
          command: (n) => {
            n.commands.toggleHeaderRow();
          }
        },
        {
          title: "Toggle header column",
          name: "toggleHeaderColumn",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="21" height="16.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 21 16.5"><path stroke-linecap="round" stroke-linejoin="round" d="M1.875 15.75h17.25m-17.25 0A1.125 1.125 0 0 1 .75 14.625m1.125 1.125h3.381c.621 0 1.125-.504 1.125-1.125m-5.631 0V1.875m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V1.875m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75H7.506a1.125 1.125 0 0 1-1.125-1.125M20.25 1.875c0-.621-.504-1.125-1.125-1.125H1.875C1.254.75.75 1.254.75 1.875m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M.75 1.875v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h3.381c.748 0 1.125.504 1.125 1.125M1.875 4.5C1.254 4.5.75 5.004.75 5.625v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75H7.506c-.62 0-1.125.504-1.125 1.125M19.125 4.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m-3.381 0C1.254 8.25.75 8.754.75 9.375v1.5c0 .621.504 1.125 1.125 1.125m4.506-4.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M7.506 8.25h11.619m-11.619 0c-.62 0-1.125.504-1.125 1.125M19.125 8.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h3.381m1.125-1.125v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125m1.125-1.125c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h11.619"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M.737.877H7.042V15.369000000000002H.737z" /></svg>',
          command: (n) => {
            n.commands.toggleHeaderColumn();
          }
        },
        {
          title: "Merge or split cells",
          name: "mergeOrSplit",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" fill="none" height="21" width="21" viewBox="0 0 48 48" stroke="currentColor" width="48" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><g stroke-linecap="round" stroke-width="4"><path d="m20 14v-9c0-.55228-.4477-1-1-1h-14c-.55228 0-1 .44772-1 1v38c0 .5523.44772 1 1 1h14c.5523 0 1-.4477 1-1v-9"/><path d="m28 34v9c0 .5523.4477 1 1 1h14c.5523 0 1-.4477 1-1v-38c0-.55228-.4477-1-1-1h-14c-.5523 0-1 .44772-1 1v9"/><path d="m28 24h16"/><path d="m5 24h15"/><path d="m32.7485 28.8183-1.591-1.5909-3.1819-3.182 3.1819-3.182 1.591-1.591" stroke-linejoin="round"/><path d="m15.375 28.8183 1.591-1.5909 3.182-3.182-3.182-3.182-1.591-1.591" stroke-linejoin="round"/></g></svg>',
          command: (n) => {
            n.commands.mergeOrSplit();
          }
        }
      ]
    },
    {
      title: "YouTube",
      name: "youtube",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24" version="1.1" viewBox="0 0 461.001 461.001"><path fill="currentColor" d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"/></svg>',
      hasInlineTools: !1,
      canBeConverted: !1,
      isActiveTest: (n) => n.isActive("youtube")
    }
  ];
}
function Jx() {
  return [
    {
      title: "Bold",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"></path></svg>',
      command: (n) => {
        n.chain().focus().toggleBold().run();
      },
      isActiveTest: (n) => n.isActive("bold")
    },
    {
      title: "Italic",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M12.5 5L10 19h1.9l2.5-14z"></path></svg>',
      command: (n) => {
        n.chain().focus().toggleItalic().run();
      },
      isActiveTest: (n) => n.isActive("italic")
    },
    {
      title: "Link",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"></path></svg>',
      command: (n) => {
        const e = n.getAttributes("link").href, t = window.prompt("URL", e);
        if (t !== null) {
          if (t === "") {
            n.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
          }
          n.chain().focus().extendMarkRange("link").setLink({ href: t }).run();
        }
      },
      isActiveTest: (n) => n.isActive("link"),
      isActiveClass: "hidden"
    },
    {
      title: "Unlink",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"></path></svg>',
      command: (n) => n.chain().focus().unsetLink().run(),
      isActiveTest: (n) => !n.isActive("link"),
      isActiveClass: "hidden"
    },
    {
      title: "More inline tools",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path></svg>',
      isActiveTest: () => !1,
      command: () => null,
      tools: [
        {
          title: "Strikethrough",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"></path></svg>',
          command: (n) => n.commands.toggleStrike(),
          isActiveTest: (n) => n.isActive("strike")
        },
        {
          title: "Inline code",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" focusable="false"><path d="M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"></path></svg>',
          command: (n) => n.commands.toggleCode(),
          isActiveTest: (n) => n.isActive("code")
        },
        {
          title: "Highlight",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
          command: (n) => n.commands.toggleHighlight(),
          isActiveTest: (n) => n.isActive("highlight")
        },
        {
          title: "Subscript",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"></path></svg>',
          command: (n) => n.commands.toggleSubscript(),
          isActiveTest: (n) => n.isActive("subscript")
        },
        {
          title: "Superscript",
          icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"></path></svg>',
          command: (n) => n.commands.toggleSuperscript(),
          isActiveTest: (n) => n.isActive("superscript")
        }
      ]
    }
  ];
}
function Gx() {
  return [
    [
      {
        title: "Align text left",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"></path></svg>',
        command: (n) => {
          n.chain().focus().setTextAlign("left").run();
        },
        isActiveTest: (n) => n.isActive({ textAlign: "left" })
      },
      {
        title: "Align text centre",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setTextAlign("center").run();
        },
        isActiveTest: (n) => n.isActive({ textAlign: "center" })
      },
      {
        title: "Align text right",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" focusable="false"><path d="M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setTextAlign("right").run();
        },
        isActiveTest: (n) => n.isActive({ textAlign: "right" })
      }
    ],
    [
      {
        title: "Normal width",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("normal").run();
        },
        isActiveTest: (n, e) => n.isActive(e, { blockWidth: "normal" })
      },
      {
        title: "Wide width",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 9v6h14V9H5zm11-4.8H8v1.5h8V4.2zM8 19.8h8v-1.5H8v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("wide").run();
        },
        isActiveTest: (n, e) => n.isActive(e, { blockWidth: "wide" })
      },
      {
        title: "Full width",
        icon: '<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 4v11h14V4H5zm3 15.8h8v-1.5H8v1.5z"></path></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("full").run();
        },
        isActiveTest: (n, e) => n.isActive(e, { blockWidth: "full" })
      },
      {
        title: "Sidebar",
        icon: '<svg  class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0" y="0" enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24"><path  fill="currentColor" d="M14.7 9v6h5.9V9h-5.9zm2.6-2.9H5.1v1.5h12.3V6.1zM5.1 17.9h11.7v-1.5H5.1v1.5zm8-6.6h-8v1.5h8v-1.5z"/></svg>',
        command: (n) => {
          n.chain().focus().setBlockWidth("sidebar").run();
        },
        isActiveTest: (n, e) => n.isActive(e, {
          blockWidth: "sidebar"
        })
      }
    ]
  ];
}
function Yx() {
  return [
    {
      title: "Add row before",
      name: "addRowBefore",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84zM6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z"></path></svg>',
      command: (n) => {
        n.commands.addRowBefore();
      }
    },
    {
      title: "Add row after",
      name: "addRowAfter",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z"></path></svg>',
      command: (n) => {
        n.commands.addRowAfter();
      }
    },
    {
      title: "Delete row",
      name: "deleteRow",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z"></path></svg>',
      command: (n) => {
        n.commands.deleteRow();
      }
    }
  ];
}
function Xx() {
  return [
    {
      title: "Add column before",
      name: "addColumnBefore",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z"></path></svg>',
      command: (n) => {
        n.commands.addColumnBefore();
      }
    },
    {
      title: "Add column after",
      name: "addColumnAfter",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z"></path></svg>',
      command: (n) => {
        n.commands.addColumnAfter();
      }
    },
    {
      title: "Delete column",
      name: "deleteColumn",
      icon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" height="24" aria-hidden="true" stroke-width="1"  fill="currentColor" focusable="false"><path d="M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z"></path></svg>',
      command: (n) => {
        n.commands.deleteColumn();
      }
    }
  ];
}
const Qx = {
  props: {
    modelValue: {},
    editable: {
      default: !0
    },
    placeholder: {
      type: String,
      default: "Type / to choose a block"
    },
    editorClass: {
      type: String
    },
    mode: {
      type: String,
      default: "html"
    },
    extensions: {
      type: Array,
      default: () => []
    },
    blockTools: {
      type: Array,
      default: () => []
    },
    inlineTools: {
      type: Array,
      default: () => []
    },
    alignmentTools: {
      type: Array,
      default: () => []
    },
    blockWidthTypes: {
      type: Array,
      default: () => ["horizontalRule", "blockquote", "youtube"]
    },
    variantsTypes: {
      type: Array,
      default: () => [
        "paragraph",
        "heading",
        "horizontalRule",
        "blockquote",
        "list",
        "youtube"
      ]
    }
  },
  components: {
    BubbleMenu: rw,
    EditorContent: ow,
    MenuButton: bp,
    MenuItem: xp,
    MenuDropdownButton: Mp
  },
  data() {
    return {
      dragging: !1,
      draggedNodePosition: null,
      editor: null,
      allBlockTools: Nl(Kx(), this.blockTools),
      allInlineTools: Nl(Jx(), this.inlineTools),
      allAlignmentTools: this.alignmentTools.length ? this.alignmentTools : Gx(),
      tableRowTools: Yx(),
      tableColumnTools: Xx(),
      topLevelNodeType: null,
      currentBlockTool: null,
      typingTimeout: null,
      isTyping: !1,
      showMainToolbar: !1,
      moreIcon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/></svg>',
      deleteIcon: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/></svg>',
      moreIconRound: '<svg class="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
    };
  },
  created: function() {
  },
  unmounted: function() {
  },
  mounted() {
    this.editor = new iw({
      extensions: [
        ov.configure({
          blockquote: !1
        }),
        oh.extend({
          content: "paragraph"
        }),
        Dx,
        Lx,
        z2,
        H2,
        $2,
        _2.configure({ inline: !1, allowBase64: !1 }),
        Hx.configure({
          suggestion: qx(this.allBlockTools)
        }),
        Ev.configure({
          openOnClick: !1
        }),
        Ov.configure({
          placeholder: this.placeholder
        }),
        Mx.configure({
          types: this.blockWidthTypes
        }),
        Ix.configure({
          types: this.variantsTypes
        }),
        B2.configure({
          types: ["heading", "paragraph"]
        }),
        D2.configure({
          resizable: !0
        }),
        P2.extend({
          allowGapCursor: !1
        }),
        I2.extend({
          content: "(inline|hardBreak?)*",
          isolating: !1
        }),
        L2.extend({
          content: "(inline|hardBreak?)*",
          isolating: !1
        }),
        Rx.configure({
          inline: !1,
          HTMLAttributes: {
            class: "aspect-video h-auto w-full"
          }
        }),
        ...this.extensions
      ],
      onUpdate: () => {
        this.updateToolbar(), this.$emit(
          "update:modelValue",
          this.mode == "json" ? this.editor.getJSON().content : this.editor.getHTML()
        );
      },
      onSelectionUpdate: () => {
        this.updateToolbar();
      }
    }), this.editor.commands.setContent(
      this.mode == "json" ? {
        type: "doc",
        content: this.modelValue
      } : this.modelValue
    ), this.editor.setEditable(this.editable);
  },
  beforeUnmount() {
    this.editor.destroy();
  },
  watch: {
    topLevelNodeType() {
      this.currentBlockTool = this.getCurrentBlockTool();
    },
    editable() {
      this.editor.setEditable(this.editable);
    }
  },
  computed: {
    activeAlignmentTools() {
      return this.topLevelNodeType ? this.allAlignmentTools.filter(
        (n) => n.find(
          (e) => e.isActiveTest(this.editor, this.topLevelNodeType)
        )
      ) : null;
    }
  },
  methods: {
    triggerImagePicker() {
      this.$refs.fileInput.click();
    },
    async onImageSelected(n) {
      var o;
      const e = (o = n.target.files) == null ? void 0 : o[0];
      if (!e) return;
      const t = new FormData();
      t.append("file", e);
      const i = (await de.post("/api/upload", t, {
        headers: { "Content-Type": "multipart/form-data" }
      })).data.url;
      this.editor.chain().focus().setImage({ src: i }).run(), n.target.value = null;
    },
    handleTyping() {
      this.isTyping = !0, this.typingTimeout && clearTimeout(this.typingTimeout), this.typingTimeout = setTimeout(() => {
        this.isTyping = !1, this.typingTimeout = null;
      }, 1500);
    },
    cancelTyping() {
      this.$nextTick(() => this.isTyping = !1);
    },
    shouldShowMainToolbar() {
      return this.editable && this.editor.isActive() && this.modelValue;
    },
    updateToolbar() {
      this.topLevelNodeType = this.getTopLevelNodeType();
    },
    getCurrentBlockTool() {
      return this.allBlockTools.find(
        (n) => {
          var e;
          return n.name == this.topLevelNodeType || ((e = n.tools) == null ? void 0 : e.find((t) => t.name == this.topLevelNodeType));
        }
      );
    },
    deleteNode(n) {
      this.editor.commands.deleteNode(n), this.$refs.deleteButton.$el.blur();
    },
    getMenuCoords() {
      return vx(this.editor.view);
    },
    getTableRowMenuCoords() {
      return kx(this.editor.view);
    },
    getTableColumnMenuCoords() {
      return xx(this.editor.view);
    },
    startDragging(n) {
      let e = { left: n.clientX, top: n.clientY + 48 };
      this.draggedNodePosition = this.editor.view.posAtCoords(e).pos, this.dragging = !0;
    },
    endDragging(n) {
      let e = this.editor.view.posAtCoords({
        left: n.clientX,
        top: n.clientY + 20
      });
      e && Cx({
        view: this.editor.view,
        state: this.editor.state,
        draggedNodePosition: this.draggedNodePosition,
        targetNodePosition: e.pos
      }), this.dragging = !1, this.draggedNode = null;
    },
    tableIsActive() {
      return this.editable && this.getTopLevelNodeType() == "table";
    },
    moveNode(n = "UP") {
      Sx({
        view: this.editor.view,
        dir: n,
        currentResolved: this.editor.view.state.selection.$from
      });
    },
    getTopLevelNodeType() {
      var n;
      return (n = Aa(this.editor.view)) == null ? void 0 : n.type.name;
    },
    canMoveNodeDown() {
      const n = this.editor.view.state.selection.$from;
      return n.index(0) < n.node(0).childCount - 1;
    },
    canMoveNodeUp() {
      return this.editor.view.state.selection.$from.index(0) > 0;
    }
  }
}, Zx = { class: "gutentap" }, eC = { class: "flex flex-row" }, tC = /* @__PURE__ */ ye("svg", {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  focusable: "false",
  class: "w-5 h-5 md:w-6 md:h-6"
}, [
  /* @__PURE__ */ ye("path", { d: "M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z" })
], -1), nC = [
  tC
], rC = {
  key: 0,
  class: "py-1 md:py-2 group relative"
}, iC = /* @__PURE__ */ ye("div", { class: "p-3 uppercase text-gray-600 text-xs pb-1 tracking-wide" }, " Transform to ", -1), oC = {
  key: 1,
  class: "pr-2 flex flex-col"
}, sC = ["disabled"], lC = /* @__PURE__ */ ye("svg", {
  width: "24",
  height: "24",
  class: "pointer-events-none w-5 h-5 md:w-6 md:h-6",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
}, [
  /* @__PURE__ */ ye("path", { d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z" })
], -1), aC = [
  lC
], cC = ["disabled"], uC = /* @__PURE__ */ ye("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "currentColor",
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
  class: "pointer-events-none -mt-2 w-5 h-5 md:w-6 md:h-6"
}, [
  /* @__PURE__ */ ye("path", { d: "M17.5 11.6 12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" })
], -1), dC = [
  uC
], fC = {
  key: 0,
  class: "flex gap-1 items-center hide-empty flex-row p-1 md:p-2"
}, hC = ["disabled"], pC = /* @__PURE__ */ ye("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-image-icon lucide-image"
}, [
  /* @__PURE__ */ ye("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2"
  }),
  /* @__PURE__ */ ye("circle", {
    cx: "9",
    cy: "9",
    r: "2"
  }),
  /* @__PURE__ */ ye("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
], -1), mC = [
  pC
], gC = {
  key: 1,
  class: "flex gap-1 items-center hide-empty flex-row p-1 md:p-2"
}, yC = {
  key: 2,
  class: "gap-1 flex flex-row items-center p-1 md:p-2"
}, bC = {
  key: 3,
  class: "p-1 gap-0.5 md:p-2 md:gap-1 flex relative flex-row items-center"
}, wC = {
  key: 4,
  class: "p-1 gap-0.5 md:p-2 md:gap-1 flex group flex-row items-center relative"
};
function vC(n, e, t, r, i, o) {
  const s = Mr("menu-button"), l = Mr("menu-dropdown-button"), a = Mr("menu-item"), c = Mr("bubble-menu"), u = Mr("editor-content");
  return $(), te("div", Zx, [
    i.editor && i.tableRowTools ? ($(), st(c, {
      key: 0,
      editor: i.editor,
      pluginKey: "tableRowMenu",
      "should-show": o.tableIsActive,
      "tippy-options": {
        placement: "left",
        getReferenceClientRect: o.getTableRowMenuCoords
      }
    }, {
      default: De(() => [
        Xe(a, null, {
          dropdown: De(() => [
            ($(!0), te(Ot, null, Nt(i.tableRowTools, (d) => ($(), st(l, {
              innerHTML: d.icon + " " + d.title,
              key: d.title,
              label: d.title,
              onClick: Te((f) => d.command(i.editor), ["prevent"])
            }, null, 8, ["innerHTML", "label", "onClick"]))), 128))
          ]),
          default: De(() => [
            Xe(s, {
              title: "Row tools",
              class: "rounded-full text-slate-400 hover:text-slate-800",
              content: i.moreIconRound
            }, null, 8, ["content"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["editor", "should-show", "tippy-options"])) : lt("", !0),
    i.editor && i.tableColumnTools ? ($(), st(c, {
      key: 1,
      editor: i.editor,
      pluginKey: "tableColumnMenu",
      "should-show": o.tableIsActive,
      "tippy-options": {
        placement: "bottom",
        getReferenceClientRect: o.getTableColumnMenuCoords
      }
    }, {
      default: De(() => [
        Xe(a, null, {
          dropdown: De(() => [
            ($(!0), te(Ot, null, Nt(i.tableColumnTools, (d) => ($(), st(l, {
              content: d.icon + " " + d.title,
              key: d.title,
              label: d.title,
              onClick: Te((f) => d.command(i.editor), ["prevent"])
            }, null, 8, ["content", "label", "onClick"]))), 128))
          ]),
          default: De(() => [
            Xe(s, {
              title: "Column tools",
              content: i.moreIconRound,
              class: "rounded-full text-slate-400 hover:text-slate-800"
            }, null, 8, ["content"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["editor", "should-show", "tippy-options"])) : lt("", !0),
    i.editor ? ($(), st(c, {
      key: 2,
      pluginKey: "mainMenu",
      onDragend: e[11] || (e[11] = (d) => o.endDragging(d)),
      draggable: i.dragging,
      "should-show": o.shouldShowMainToolbar,
      class: Yt(["text-sm bg-white max-w-screen flex divide-x max-w-full divide-slate-400 flex-row border-slate-400 md:rounded border-t md:border", {
        "mouse:pointer-events-none mouse:opacity-0": i.isTyping
      }]),
      editor: i.editor,
      "update-delay": 0,
      "tippy-options": {
        maxWidth: "none",
        placement: "top-start",
        getReferenceClientRect: o.getMenuCoords,
        hideOnClick: !1,
        onCreate: (d) => d.popper.classList.add(
          "max-md:!sticky",
          "max-md:!bottom-0",
          "max-md:!top-auto",
          "max-md:!transform-none"
        )
      }
    }, {
      default: De(() => {
        var d, f, h, p, g;
        return [
          ye("div", eC, [
            ye("button", {
              onClick: e[0] || (e[0] = Te(() => {
              }, ["prevent"])),
              onMousedown: e[1] || (e[1] = (m) => o.startDragging(m)),
              onMouseup: e[2] || (e[2] = (m) => {
                i.draggedNodePosition = !1, i.dragging = !1;
              }),
              class: Yt(["hidden md:block ml-1 my-2 hover:bg-slate-100 rounded", {
                "cursor-grab": !i.dragging,
                "cursor-grabbing mr-1": i.dragging
              }]),
              "aria-label": "Drag",
              "data-tooltip": "Drag"
            }, nC, 34),
            !i.dragging && i.currentBlockTool ? ($(), te("div", rC, [
              Xe(a, null, hp({
                default: De(() => {
                  var m, y, w;
                  return [
                    Xe(s, {
                      onClick: e[3] || (e[3] = Te(() => {
                      }, ["prevent"])),
                      title: (m = i.currentBlockTool) == null ? void 0 : m.name,
                      content: (y = i.currentBlockTool) == null ? void 0 : y.icon,
                      class: Yt(
                        ((w = i.currentBlockTool) == null ? void 0 : w.canBeConverted) && "group-focus-within:bg-slate-600 !cursor-pointer group-focus-within:text-white hover:bg-slate-50"
                      )
                    }, null, 8, ["title", "content", "class"])
                  ];
                }),
                _: 2
              }, [
                (d = i.currentBlockTool) != null && d.canBeConverted ? {
                  name: "dropdown",
                  fn: De(() => [
                    iC,
                    ($(!0), te(Ot, null, Nt(i.allBlockTools.filter(
                      (m) => m.convertCommand
                    ), (m) => ($(), st(l, {
                      content: m.icon + " " + m.title,
                      key: m.title,
                      label: m.title,
                      onClick: Te((y) => m.convertCommand(i.editor), ["prevent"]),
                      activeClass: "hidden",
                      active: m.isActiveTest(i.editor)
                    }, null, 8, ["content", "label", "onClick", "active"]))), 128))
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ])) : lt("", !0),
            i.dragging ? lt("", !0) : ($(), te("div", oC, [
              ye("button", {
                onClick: e[4] || (e[4] = Te((m) => o.moveNode("UP"), ["prevent"])),
                disabled: !o.canMoveNodeUp(),
                "data-tooltip": "Move up",
                class: "mt-1 md:mt-2"
              }, aC, 8, sC),
              ye("button", {
                onClick: e[5] || (e[5] = Te((m) => o.moveNode("DOWN"), ["prevent"])),
                disabled: !o.canMoveNodeDown(),
                "data-tooltip": "Move down",
                class: "-mt-1.5"
              }, dC, 8, cC)
            ]))
          ]),
          i.dragging ? lt("", !0) : ($(), te("div", fC, [
            ye("button", {
              onClick: e[6] || (e[6] = Te((...m) => o.triggerImagePicker && o.triggerImagePicker(...m), ["prevent"])),
              disabled: !i.editor,
              class: "p-1 hover:bg-slate-100 rounded",
              title: "Upload image"
            }, mC, 8, hC),
            ye("input", {
              ref: "fileInput",
              type: "file",
              accept: "image/*",
              class: "hidden",
              onChange: e[7] || (e[7] = (...m) => o.onImageSelected && o.onImageSelected(...m))
            }, null, 544)
          ])),
          i.dragging ? lt("", !0) : ($(), te("div", gC, [
            ($(!0), te(Ot, null, Nt(o.activeAlignmentTools, (m, y) => ($(), st(a, { key: y }, {
              dropdown: De(() => [
                ($(!0), te(Ot, null, Nt(m, (w) => ($(), st(l, {
                  key: w.title,
                  content: w.icon + " " + w.title,
                  label: w.title,
                  onClick: Te((C) => w.command(i.editor), ["prevent"]),
                  active: w.isActiveTest(i.editor, i.topLevelNodeType)
                }, null, 8, ["content", "label", "onClick", "active"]))), 128))
              ]),
              default: De(() => {
                var w, C;
                return [
                  Xe(s, {
                    onClick: e[8] || (e[8] = Te(() => {
                    }, ["prevent"])),
                    title: (w = m.find(
                      (b) => b.isActiveTest(i.editor, i.topLevelNodeType)
                    )) == null ? void 0 : w.title,
                    content: (C = m.find(
                      (b) => b.isActiveTest(i.editor, i.topLevelNodeType)
                    )) == null ? void 0 : C.icon
                  }, null, 8, ["title", "content"])
                ];
              }),
              _: 2
            }, 1024))), 128))
          ])),
          !i.dragging && ((h = (f = i.currentBlockTool) == null ? void 0 : f.tools) != null && h.length) ? ($(), te("div", yC, [
            ($(!0), te(Ot, null, Nt((p = i.currentBlockTool) == null ? void 0 : p.tools, (m) => {
              var y, w;
              return $(), st(s, {
                key: m.name,
                content: m.icon,
                label: m.title,
                activeClass: m.isActiveClass,
                onClick: Te((C) => m.command.call(0, i.editor), ["prevent"]),
                disabled: (y = m.isDisabledTest) == null ? void 0 : y.call(0, i.editor),
                active: (w = m.isActiveTest) == null ? void 0 : w.call(0, i.editor)
              }, null, 8, ["content", "label", "activeClass", "onClick", "disabled", "active"]);
            }), 128))
          ])) : lt("", !0),
          (g = i.currentBlockTool) != null && g.hasInlineTools && !i.dragging ? ($(), te("div", bC, [
            ($(!0), te(Ot, null, Nt(i.allInlineTools, (m) => ($(), st(a, {
              align: "right",
              key: m.title
            }, {
              dropdown: De(() => [
                ($(!0), te(Ot, null, Nt(m.tools, (y) => ($(), st(l, {
                  key: y.name,
                  content: y.icon + " " + y.title,
                  onClick: Te((w) => y.command(i.editor), ["prevent"]),
                  active: y.isActiveTest(i.editor)
                }, null, 8, ["content", "onClick", "active"]))), 128))
              ]),
              default: De(() => [
                Xe(s, {
                  content: m.icon,
                  label: m.title,
                  activeClass: m.isActiveClass,
                  onClick: Te((y) => m.command(i.editor), ["prevent"]),
                  active: m.isActiveTest(i.editor)
                }, null, 8, ["content", "label", "activeClass", "onClick", "active"])
              ]),
              _: 2
            }, 1024))), 128))
          ])) : lt("", !0),
          i.editor && i.editor.can().deleteNode(i.topLevelNodeType) && !i.dragging ? ($(), te("div", wC, [
            Xe(a, { align: "right" }, {
              dropdown: De(() => [
                Xe(l, {
                  ref: "deleteButton",
                  content: i.deleteIcon + " Delete",
                  label: "Delete block",
                  onClick: e[10] || (e[10] = Te((m) => o.deleteNode(i.topLevelNodeType), ["prevent"]))
                }, null, 8, ["content"])
              ]),
              default: De(() => [
                Xe(s, {
                  onClick: e[9] || (e[9] = Te(() => {
                  }, ["prevent"])),
                  content: i.moreIcon,
                  label: "More options"
                }, null, 8, ["content"])
              ]),
              _: 1
            })
          ])) : lt("", !0)
        ];
      }),
      _: 1
    }, 8, ["draggable", "should-show", "editor", "class", "tippy-options"])) : lt("", !0),
    Xe(u, {
      class: Yt(t.editorClass ?? "prose"),
      onKeydown: o.handleTyping,
      onKeyup: e[12] || (e[12] = pp((d) => i.isTyping = !1, ["esc"])),
      ref: "editor",
      editor: i.editor
    }, null, 8, ["class", "onKeydown", "editor"])
  ]);
}
const kC = /* @__PURE__ */ ai(Qx, [["render", vC]]), _C = kC;
export {
  _C as GutenTap
};
