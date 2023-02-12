const nodeFactory = (value = null, nextNode = null) => {
  // Store the parameters in private variables
  let storedValue = value;
  let storedNode = nextNode;

  // Methods to get the stored info
  const getValue = () => storedValue;
  const getNextNode = () => storedNode;

  // Methods to set the stored info
  const setValue = (newValue) => {
    storedValue = newValue;
  };
  const setNextNode = (newNextNode) => {
    storedNode = newNextNode;
  };

  return {
    getValue, getNextNode, setValue, setNextNode,
  };
};

const linkedListFactory = () => {
  // Initialize head, tail, and length
  let head = null;
  let tail = null;
  let listLength = 0;

  const getLength = () => listLength;
  const getHead = () => head;
  const getTail = () => tail;

  // Method to append new node
  const append = (value) => {
    // Create node with given value
    const newNode = nodeFactory(value);
    // If first node, will place it at the head
    if (head === null) {
      head = newNode;
    } else {
      tail = newNode;
    }
    // Increase length counter
    listLength += 1;
  };

  return {
    append, getLength, getHead, getTail,
  };
};

const testNode = nodeFactory('ooh yeah');
console.log(testNode.getValue());
testNode.setValue('Ooompah');
console.log(testNode.getValue());

const testList = linkedListFactory();
console.log(testList);
console.log(testList.getLength());
testList.append('hello');
console.log(testList.getLength());
console.log(testList.getHead().getValue());
console.log(testList.getTail());
testList.append('I so pale');
console.log(testList.getTail().getValue());
