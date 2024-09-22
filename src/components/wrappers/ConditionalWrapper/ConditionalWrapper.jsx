const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? children : wrapper(children);
};

export default ConditionalWrapper;
