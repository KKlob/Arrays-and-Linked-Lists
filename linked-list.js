/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail = newNode;

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    // if list is empty, throw error
    if (!current) {
      throw new Error("List is empty");
    }

    //otherwise, loop to 1 node before tail, then update and break loop
    for (let i = 1; i <= ((this.length - 1) || 1); i++) {
      if (i === (this.length - 1)) {
        const popNode = this.tail;
        this.tail = current;
        current.next = null;
        this.length = this.length - 1;
        if (this.length === 1) this.head = current;
        return popNode.val;
      }

      if (i === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return current.val;
      }
      // pushes loop forward through nodes
      current = current.next;
    }

  }

  /** shift(): return & remove first item. */

  shift() {
    let current = this.head;

    if (!current) throw new Error("List is empty");

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return current.val;
    } else {
      const shiftNode = current;
      current = current.next;
      this.length--;
      if (this.length === 1) this.tail = current;
      this.head = current;
      return shiftNode.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;

    if (!current) throw new Error("List is empty");

    if (idx > this.length - 1) throw new Error("Invalid index: Greater than list length");

    if (idx < 0) throw new Error("Invalid index: Index must be at least 0");

    for (let i = 0; i <= idx; i++) {

      if (i === idx) {
        return current.val;
      }

      current = current.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;

    if (!current) throw new Error("List is empty");

    if (idx > this.length - 1) throw new Error("Invalid Index: Greater than list length");

    if (idx < 0) throw new Error("Invalid index: Index must be at least 0");

    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        current.val = val;
      }
      current = current.next;
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx = 0, val) {
    let current = this.head;

    if (idx > this.length) throw new Error("Invalid Index: Greater than list length");

    if (idx < 0) throw new Error("Invalid index: Index must be at least 0");

    if (this.length === 0) {
      const newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return undefined;
    }

    for (let i = 0; i < idx; i++) {

      if (i === idx - 1) {
        const newNode = new Node(val);
        if (current.next) {
          newNode.next = current.next;
        } else {
          this.tail = newNode;
        }
        current.next = newNode;
        this.length++;
        return undefined;
      }

      current = current.next;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head;

    if (idx > this.length) throw new Error("Invalid index: Greater than list length");
    if (idx < 0) throw new Error("Invalid index: Index must be greater than 0");
    if (this.length === 0 && idx > 0) throw new Error("Invalid Index: to remove only value of list, input index of 0");

    if (this.length === 1 && idx === 0) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    if (idx === 0 && this.length !== 1) {
      const removeNode = current;
      current = current.next;
      this.head = current;
      this.length--;
      return removeNode.val;
    }

    for (let i = 0; i < idx; i++) {

      if ((i === idx - 1) && idx === (this.length - 1)) {
        const removeNode = current.next;
        this.tail = current;
        current.next = null;
        this.length--;
        return removeNode.val;
      }
      else if (i === idx - 1) {
        const removeNode = current.next;
        current.next = removeNode.next;
        this.length--;
        return removeNode.val;
      }

      current = current.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;

    if (!current) return 0;

    let sum = 0;
    let count = 0;

    for (let i = 0; i < this.length; i++) {
      sum += current.val;
      count++;
      current = current.next;
    }

    return sum / count;
  }
}

module.exports = LinkedList;
