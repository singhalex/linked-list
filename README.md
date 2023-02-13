# Linked List
An assignment for The Odin Project: Factory functions to create list links and the nodes within them.

### Assignment Details
[The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists) 

### Summary
There are two factory functions: `nodeFactory`, which creates a node object that stores a value and a pointer to the next node in the list,
and `linkedListFactory`, which keeps track of the nodes and has methods to manipulate the nodes in the list.

#### Linked List Methods
- `getHead` returns the first node in the list
- `getTail` returns the last node oin the list
- `getLength` returns the total number of nodes in the list
- `append(value)` adds a new node containing `value` to the end of the list
- `prepend(value)` adds a new node containing `value` to the start of the list
- `at(index)` returns the node at the given `index`
- `pop` removes the last elemenent in the list
- `contains(value)` returns true if the passed in value is in the list, otherwise returns false
- `find(value)` returns the index of the node containing value or null if not found
- `toString` prints a visual map of the list to the console
- `insertAt(value, index)` inserts a new node with the provided `value` at the given `index`
- `removeAt(index)` removes the node at the given `index`
