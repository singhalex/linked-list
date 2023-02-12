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

    // If first node, will place it at the head and tail
    if (head === null) {
      head = newNode;
    } else {
      tail.setNextNode(newNode);
    }
    tail = newNode;

    // Increase length counter
    listLength += 1;
  };

  const prepend = (value) => {
    // Create new node
    const newNode = nodeFactory(value);

    // New node points to the old head
    newNode.setNextNode(head);

    // New node is set to the head of list
    head = newNode;

    // If first node of list, also makes it the tail
    if (tail === null) {
      tail = newNode;
    }

    // Increase length counter
    listLength += 1;
  };

  return {
    append, prepend, getLength, getHead, getTail,
  };
};

const testList = linkedListFactory();
testList.append('3rd Node');

testList.prepend('2nd Node');
console.log(testList.getTail().getNextNode());
console.log(testList.getHead().getNextNode().getNextNode());

testList.prepend('1st Node');
console.log(testList.getHead().getValue());
console.log(testList.getTail().getValue());
console.log(testList.getTail().getNextNode());
