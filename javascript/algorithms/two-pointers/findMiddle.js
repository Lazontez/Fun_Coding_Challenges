// ===========================
// 💡 Challenge: Find Middle of Linked List
// ===========================
//
// Given the head of a singly linked list, return the middle node.
// If there are two middle nodes, return the second one.
//
// 🔁 Constraints:
// - Do not use extra space like arrays.
// - Return the actual node, not just the value.
//
// 🧪 Example:
// Input: A -> B -> C -> D -> E
// Output: C
//
// Input: A -> B -> C -> D -> E -> F
// Output: D
//

// ===========================
// 🔧 Node definition
// ===========================
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // ===========================
  // 📦 Helper function to create linked list from array
  // ===========================
  function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  // ===========================
  // 🚀 Your Solution Function
  // ===========================
  function findMiddle(head) {
    // TODO: Implement fast/slow pointer logic

    let fast = head
    let slow = head
 
    while(fast != null && fast.next != null){
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }
  
  // ===========================
  // 🧪 Test Area
  // ===========================
  const list1 = createLinkedList(['A', 'B', 'C', 'D', 'E']);
  const list2 = createLinkedList(['A', 'B', 'C', 'D', 'E', 'F']);

  // Fast: null
  // Slow: D
  
  console.log(findMiddle(list1)); // Expected: Node with val 'C'
  console.log(findMiddle(list2)); // Expected: Node with val 'D'


  // I am given a singulary linked lists
  // I need to find the node that is in the middle of the collection
  // If the linked list is even return the right side of the middle
  // Once the middle is determined return the node

  // I will use the fast/slow two pointer pattern
  // Create the fast pointer and the slow pointer
  // Loop through the Linked List by seeing when the fast pointers 'next' value is null
  // Check if fast.current ever equals null. If it does return
  // Return the slow pointer as the fast pointer will be going twice the speed of slow