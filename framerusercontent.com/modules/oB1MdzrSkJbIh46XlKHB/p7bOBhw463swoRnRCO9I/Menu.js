let r;
var d = e => {
    if (!r) {
        const n = ({
            size: o = 24,
            ...t
        }, a) => e.createElement("svg", {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            width: o,
            height: o,
            ref: a,
            ...t
        }, e.createElement("path", {
            fillRule: "evenodd",
            d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
            clipRule: "evenodd"
        }));
        r = e.forwardRef(n)
    }
    return r
};
export {
    d as
    default
};