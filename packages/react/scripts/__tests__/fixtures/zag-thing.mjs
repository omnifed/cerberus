// A trimmed Zag-style connect + machine, including an apostrophe in a comment (don't).
function connect(service, normalize) {
  const { prop, send } = service
  return {
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        id: dom.getRootId(scope),
        "data-orientation": prop("orientation")
      });
    },
    getTriggerProps(props) {
      const state = getState(props);
      return normalize.button({
        ...parts.trigger.attrs,
        "data-state": state.open ? "open" : "closed",
        "data-disabled": dataAttr(state.disabled),
        "data-index": props.index,
        "data-kind": "toggle",
        "data-ownedby": dom.getRootId(scope),
        onKeyDown(event) {
          // don't handle composing
          const keyMap = {
            ArrowDown() { send({ type: "NEXT" }) },
            " "() { send({ type: "TOGGLE" }) },
            Home: () => send({ type: "FIRST" })
          };
          keyMap[event.key]?.(event);
        }
      });
    }
  };
}
const machine = createMachine({
  props({ props }) {
    return {
      orientation: "vertical",
      loop: !!props.autoplay,
      count: 3,
      defaultValue: [],
      ...props
    };
  }
});

export { connect, machine }
