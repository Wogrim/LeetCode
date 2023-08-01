/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    //early exit: reversing a single node does nothing
    if (left === right)
        return head;

    //if reversing the middle of the list
    //advance prev to node before left
    let prev = null;
    if (left > 1) {
        prev = head;
        for (let i = left - 2; i > 0; i--)
            prev = prev.next;
    }

    let current = prev ? prev.next : head;
    let next = current.next;
    let next_next;
    for (let i = right - left; i > 0; i--) {
        //loop through pointing next nodes to current
        next_next = next.next;
        next.next = current;
        current = next;
        next = next_next;
    }

    //point the first reversed node to the tail
    //and prev or head to last reversed node
    if (prev) {
        prev.next.next = next;
        prev.next = current;
        return head;
    }
    else {
        head.next = next;
        return current;
    }
};