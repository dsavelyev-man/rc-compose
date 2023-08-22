//@ts-nocheck
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');

function forwardRef(render) {
    {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
        } else if (typeof render !== 'function') {
        } else {
            if (render.length !== 0 && render.length !== 2) {
            }
        }

        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) {
            }
        }
    }

    var elementType = {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
    };

    {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function () {
                return ownName;
            },
            set: function (name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.forwardRef((props, ref) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.

                if (!render.name && !render.displayName) {
                    render.displayName = name;
                }
            }
        });
    }

    return elementType;
}

var REACT_MODULE_REFERENCE;

{
    REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
    if (typeof type === 'string' || typeof type === 'function') {
        return true;
    } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


    if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
        return true;
    }

    if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
            return true;
        }
    }

    return false;
}

function memo(type, compare) {
    {
        if (!isValidElementType(type)) {
            error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
        }
    }

    var elementType = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
    };

    {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function () {
                return ownName;
            },
            set: function (name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.memo((props) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.

                if (!type.name && !type.displayName) {
                    type.displayName = name;
                }
            }
        });
    }

    return elementType;
}

export default forwardRef