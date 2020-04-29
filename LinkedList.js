class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = null;
    }
  }
 
 
class LinkedList {
    constructor() {
      this.head = null;
    }
  
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, beforeValue) {
      if (this.head === null || this.head.value === beforeValue) {
        this.insertFirst(item)
        return null;
      } else {
          let prevNode = this.head
          let nextNode = this.head.next 
          while (nextNode !== null) {
            if (nextNode.value === beforeValue) {
                //found node that need to insert before
                const newNode = new _Node(item)
                prevNode.next = newNode
                newNode.next = nextNode
                return;
            }
            prevNode = prevNode.next
            nextNode = nextNode.next
          }
          console.log('Item not found')
          return null;
      }
  }

  insertAfter(item, value) {
      const currNode = this.find(value)
        if (currNode === null) {
            return null;
        }
      const nextNode = currNode.next 
      currNode.next = new _Node(item)
      currNode.next.next = nextNode
      return this.head;
  }

  insertAt(item, position) {
      let currNode = this.head
      let count = 0
      if(this.head === null) {
          console.log('exit')
          return null;}
      while(currNode !== null) {
        count += 1  
        if (count === position) {
            this.insertBefore(item, currNode.value)
            return;
        }
        currNode = currNode.next
      }
      console.log('position ',position, "not found")
      return null;
  }
  
  find(item) {
    let currNode = this.head;
  
    if (!this.head) {
      return null;
    }
  
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  
  remove(item) {
    if (!this.head) {
      return null;
    }
  
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
  
    let currNode = this.head;
    let previouseNode = this.head;
  
    while ((currNode !== null) && (currNode.value !== item)) {
      previouseNode = currNode;
      currNode = currNode.next
    }
  
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previouseNode.next = currNode.next;
    }
 }

 function display(list) {
    let currNode = list.head
    let newList = []
    while(currNode !== null){
        newList.push(currNode.value)
        currNode = currNode.next
    }
    console.log(newList)
 }

 function size(list) {
     let count = 0
     let currNode = list.head
     while(currNode !== null){
        count += 1
        currNode = currNode.next
     }
     return count
 }

 function isEmpty(list) {
     let currNode = list.head
     if (currNode) {
         return 'False'
     }
     return 'True'
 }

 function findPrevious(list, item) {
    let currNode = list.head
    //console.log(currNode.value)
    if(currNode !== null) {
        let prevNode = currNode
        currNode = currNode.next
        //console.log('prev:', prevNode.value, 'curr: ', currNode.value)
        while(currNode.value !== item) {
            currNode = currNode.next
            prevNode = prevNode.next
            //console.log('prev:', prevNode.value, 'curr: ', currNode.value)
        }
        return prevNode.value
    }
    return currNode.value
 }

 function findLast(list) {
     while(list.head.next !== null) {
         list.head = list.head.next
     }
     return list.head.value
 }

 function reverse(list) {
     let currNode = list.head
     let prevNode
     let tempNode

     while (currNode) {
         tempNode = currNode.next;
         currNode.next = prevNode;
         prevNode = currNode
         currNode = tempNode
     }

     return prevNode
 }
 
module.exports = {
    LinkedList,
    display,
    size,
    isEmpty,
    findPrevious,
    findLast,
    reverse
    }