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

  // Method to find node at specific index
  const at = (index) => {
    if (index > listLength) {
      return console.error('Sorry, the list is not that long');
    } if (index === 1) {
      return head;
    } if (index === listLength) {
      return tail;
    }

    // Tracking variables
    let counter = 1;
    let currentNode = head;

    // Loop through the list to find the node
    while (counter !== index) {
      counter += 1;
      currentNode = currentNode.getNextNode();
    }

    return currentNode;
  };

  // Method to remove last node in the list
  const pop = () => {
    // Creates a blank list if there is only one node
    if (listLength === 1 || listLength === 0) {
      head = null;
      tail = null;
      return;
    }

    // Initialize counters
    let currentNode = head;
    let counter = 2;

    // Stop at 2nd to last node
    while (counter < listLength) {
      currentNode = currentNode.getNextNode();
      counter += 1;
    }

    // New node is 2nd to last and points to null
    tail = currentNode;
    currentNode.setNextNode(null);
    // Decrement the list length
    listLength -= 1;
  };

  // Search list for given value
  const contains = (value) => {
    // Initialize counters
    let currentNode = head;
    let counter = 0;

    // Checks each node for the value
    while (counter !== listLength) {
      if (currentNode.getValue() === value) {
        return true;
      }

      // Move to the next node
      currentNode = currentNode.getNextNode();
      counter += 1;
    }
    // Return false if value not found
    return false;
  };

  // Returns the index of the node containing given value
  const find = (value) => {
    // Initialize counting variables
    let currentNode = head;
    let index = 1;

    // Checks list for given value
    while (index < listLength + 1) {
      if (currentNode.getValue() === value) {
        // Returns the index if value is found
        return index;
      }

      // Move to the next node and increment index counter
      currentNode = currentNode.getNextNode();
      index += 1;
    }

    // Returns null if not found in the list
    return null;
  };

  // Prints the linked list in the console
  const toString = () => {
    // Initialize counting variables
    let currentNode = head;
    let counter = 1;
    // String to print
    let print = '';

    // Loop through the list and append the value to the message
    while (counter < listLength + 1) {
      print += `( ${currentNode.getValue()} ) -> `;
      counter += 1;
      currentNode = currentNode.getNextNode();
    }

    // Adds the final part of the message
    print += 'null';

    console.log(print);
  };

  return {
    getHead, getTail, getLength, append, prepend, at, pop, contains, find, toString,
  };
};
