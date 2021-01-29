import { l, p as p$1, y, h, s, _, d as d$1, A as A$1, F as F$1, T as T$1 } from './common/hooks.module-fdc0c13d.js';
import { d, n, v, p, x as x$1, q as q$1, y as y$1, M as M$1, O as O$1, S as S$1 } from './common/preact.module-1e9e9f09.js';
import { g as getDependencyTree, R as Reaction } from './common/mobx.esm-0eb50e43.js';

function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new d).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=n.__b;n.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:x$1(x$1(n).map(t))},k={map:N,forEach:N,count:function(n){return n?x$1(n).length:0},only:function(n){var t=x$1(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:x$1},A=n.__e;function O(){this.__u=0,this.t=null,this.__b=null;}function L(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function U(n){var t,e,r;function o(o){if(t||(t=n()).then(function(n){e=n.default||n;},function(n){r=n;}),r)throw r;if(!e)throw t;return v(e,o)}return o.displayName="Lazy",o.__f=!0,o}function D(){this.o=null,this.u=null;}n.__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);},(O.prototype=new d).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var o=L(r.__v),u=!1,i=function(){u||(u=!0,e.componentWillUnmount=e.__c,o?o(f):f());};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c();};var f=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},O.prototype.componentWillUnmount=function(){this.t=[];},O.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var o=t.__e&&v(p,null,n.fallback);return o&&(o.__h=null),[v(p,null,t.__e?null:n.children),o]};var F=function(n,t,e){if(++e[1]===e[0]&&n.u.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.u.size))for(e=n.o;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.o=e=e[2];}};function M(n){return this.getChildContext=function(){return n.context},n.children}function T(n){var t=this,e=n.i;t.componentWillUnmount=function(){M$1(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n);},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n);}}),M$1(v(M,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount();}function j(n,t){return v(T,{__v:n,i:t})}(D.prototype=new d).__e=function(n){var t=this,e=L(t.__v),r=t.u.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),F(t,n,r)):o();};e?e(u):u();}},D.prototype.render=function(n){this.o=null,this.u=new Map;var t=x$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.u.set(t[e],this.o=[1,0,this.o]);return n.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var n=this;this.u.forEach(function(t,e){F(n,e,t);});};var I="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,W=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,P=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),M$1(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return O$1(n,t),"function"==typeof e&&e(),n?n.__c:null}d.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(d.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var V=n.event;function H(){}function Z(){return this.cancelBubble}function Y(){return this.defaultPrevented}n.event=function(n){return V&&(n=V(n)),n.persist=H,n.isPropagationStopped=Z,n.isDefaultPrevented=Y,n.nativeEvent=n};var $,q={configurable:!0,get:function(){return this.class}},G=n.vnode;n.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var o in r={},e){var u=e[o];"defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===u?u="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!P(e.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():W.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===u&&(u=void 0),r[o]=u;}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=x$1(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=x$1(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(q.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",q)),n.$$typeof=I,G&&G(n);};var J=n.__r;n.__r=function(n){J&&J(n),$=n.__c;};var K={ReactCurrentDispatcher:{current:{readContext:function(n){return $.__n[n.__c].props.value}}}};var on="object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()};function fn(n){return v.bind(null,n)}function cn(n){return !!n&&n.$$typeof===I}function ln(n){return cn(n)?S$1.apply(null,arguments):n}function an(n){return !!n.__k&&(M$1(null,n),!0)}function sn(n){return n&&(n.base||1===n.nodeType&&n)||null}var hn=function(n,t){return n(t)};var React = {useState:l,useReducer:p$1,useEffect:y,useLayoutEffect:h,useRef:s,useImperativeHandle:_,useMemo:d$1,useCallback:A$1,useContext:F$1,useDebugValue:T$1,version:"16.8.0",Children:k,render:z,hydrate:B,unmountComponentAtNode:an,createPortal:j,createElement:v,createContext:q$1,createFactory:fn,cloneElement:ln,createRef:y$1,Fragment:p,isValidElement:cn,findDOMNode:sn,Component:d,PureComponent:E,memo:g,forwardRef:x,unstable_batchedUpdates:hn,StrictMode:p,Suspense:O,SuspenseList:D,lazy:U,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:K};

var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var EMPTY_ARRAY = [];
function useForceUpdate() {
    var _a = __read(l(0), 2), setTick = _a[1];
    var update = A$1(function () {
        setTick(function (tick) { return tick + 1; });
    }, EMPTY_ARRAY);
    return update;
}

function printDebugValue(v) {
    return getDependencyTree(v);
}

var FinalizationRegistryLocal = typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry;

function createTrackingData(reaction) {
    var trackingData = {
        reaction: reaction,
        mounted: false,
        changedBeforeMount: false,
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;

/**
 * FinalizationRegistry-based uncommitted reaction cleanup
 */
function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry) {
    var cleanupTokenToReactionTrackingMap = new Map();
    var globalCleanupTokensCounter = 1;
    var registry = new FinalizationRegistry(function cleanupFunction(token) {
        var trackedReaction = cleanupTokenToReactionTrackingMap.get(token);
        if (trackedReaction) {
            trackedReaction.reaction.dispose();
            cleanupTokenToReactionTrackingMap.delete(token);
        }
    });
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, objectRetainedByReact) {
            var token = globalCleanupTokensCounter++;
            registry.register(objectRetainedByReact, token, reactionTrackingRef);
            reactionTrackingRef.current = createTrackingData(reaction);
            reactionTrackingRef.current.finalizationRegistryCleanupToken = token;
            cleanupTokenToReactionTrackingMap.set(token, reactionTrackingRef.current);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: function (reactionRef) {
            registry.unregister(reactionRef);
            if (reactionRef.current && reactionRef.current.finalizationRegistryCleanupToken) {
                cleanupTokenToReactionTrackingMap.delete(reactionRef.current.finalizationRegistryCleanupToken);
            }
        },
        forceCleanupTimerToRunNowForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        },
        resetCleanupScheduleForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        }
    };
}

var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * timers, gc-style, uncommitted reaction cleanup
 */
function createTimerBasedReactionCleanupTracking() {
    /**
     * Reactions created by components that have yet to be fully mounted.
     */
    var uncommittedReactionRefs = new Set();
    /**
     * Latest 'uncommitted reactions' cleanup timer handle.
     */
    var reactionCleanupHandle;
    /* istanbul ignore next */
    /**
     * Only to be used by test functions; do not export outside of mobx-react-lite
     */
    function forceCleanupTimerToRunNowForTests() {
        // This allows us to control the execution of the cleanup timer
        // to force it to run at awkward times in unit tests.
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            cleanUncommittedReactions();
        }
    }
    /* istanbul ignore next */
    function resetCleanupScheduleForTests() {
        var e_1, _a;
        if (uncommittedReactionRefs.size > 0) {
            try {
                for (var uncommittedReactionRefs_1 = __values(uncommittedReactionRefs), uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next(); !uncommittedReactionRefs_1_1.done; uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next()) {
                    var ref = uncommittedReactionRefs_1_1.value;
                    var tracking = ref.current;
                    if (tracking) {
                        tracking.reaction.dispose();
                        ref.current = null;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (uncommittedReactionRefs_1_1 && !uncommittedReactionRefs_1_1.done && (_a = uncommittedReactionRefs_1.return)) _a.call(uncommittedReactionRefs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            uncommittedReactionRefs.clear();
        }
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            reactionCleanupHandle = undefined;
        }
    }
    function ensureCleanupTimerRunning() {
        if (reactionCleanupHandle === undefined) {
            reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
        }
    }
    function scheduleCleanupOfReactionIfLeaked(ref) {
        uncommittedReactionRefs.add(ref);
        ensureCleanupTimerRunning();
    }
    function recordReactionAsCommitted(reactionRef) {
        uncommittedReactionRefs.delete(reactionRef);
    }
    /**
     * Run by the cleanup timer to dispose any outstanding reactions
     */
    function cleanUncommittedReactions() {
        reactionCleanupHandle = undefined;
        // Loop through all the candidate leaked reactions; those older
        // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
        var now = Date.now();
        uncommittedReactionRefs.forEach(function (ref) {
            var tracking = ref.current;
            if (tracking) {
                if (now >= tracking.cleanAt) {
                    // It's time to tidy up this leaked reaction.
                    tracking.reaction.dispose();
                    ref.current = null;
                    uncommittedReactionRefs.delete(ref);
                }
            }
        });
        if (uncommittedReactionRefs.size > 0) {
            // We've just finished a round of cleanups but there are still
            // some leak candidates outstanding.
            ensureCleanupTimerRunning();
        }
    }
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, 
        /**
         * On timer based implementation we don't really need this object,
         * but we keep the same api
         */
        objectRetainedByReact) {
            reactionTrackingRef.current = createTrackingData(reaction);
            scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: recordReactionAsCommitted,
        forceCleanupTimerToRunNowForTests: forceCleanupTimerToRunNowForTests,
        resetCleanupScheduleForTests: resetCleanupScheduleForTests
    };
}

var _a = FinalizationRegistryLocal
    ? createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistryLocal)
    : createTimerBasedReactionCleanupTracking(), addReactionToTrack = _a.addReactionToTrack, recordReactionAsCommitted = _a.recordReactionAsCommitted;

var __read$1 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
/**
 * We use class to make it easier to detect in heap snapshots by name
 */
var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {
    }
    return ObjectToBeRetainedByReact;
}());
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    var _a = __read$1(React.useState(new ObjectToBeRetainedByReact()), 1), objectRetainedByReact = _a[0];
    var forceUpdate = useForceUpdate();
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = React.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction = new Reaction(observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                forceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.
                trackingData_1.changedBeforeMount = true;
            }
        });
        var trackingData_1 = addReactionToTrack(reactionTrackingRef, newReaction, objectRetainedByReact);
    }
    var reaction = reactionTrackingRef.current.reaction;
    React.useDebugValue(reaction, printDebugValue);
    React.useEffect(function () {
        // Called on first mount only
        recordReactionAsCommitted(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
            // Got a change before first mount, force an update
            if (reactionTrackingRef.current.changedBeforeMount) {
                reactionTrackingRef.current.changedBeforeMount = false;
                forceUpdate();
            }
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This can be due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new Reaction(observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    forceUpdate();
                }),
                mounted: true,
                changedBeforeMount: false,
                cleanAt: Infinity
            };
            forceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        throw exception; // re-throw any exceptions caught during rendering
    }
    return rendering;
}

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return useObserver(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = g(x(wrappedComponent));
    }
    else {
        memoComponent = g(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}

export { observer };
