const nodeFactory = (value = null, nextNode = null) => {
  // Store the parameters in private variables
  let _storedValue = value;
  let _storedNode = nextNode;

  // Methods to get the stored info
  const getValue = () => _storedValue;
  const getNextNode = () => _storedNode;

  // Methods to set the stored info
  const setValue = (newValue) => {
    _storedValue = newValue;
  };
  const setNextNode = (newNextNode) => {
    _storedNode = newNextNode;
  };

  return {
    getValue, getNextNode, setValue, setNextNode,
  };
};

const linkedListFactory = () => ({});
