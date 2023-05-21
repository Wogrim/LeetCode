/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // note: no guarantee for an even number of nodes
    let current = head;
    // early exit if 0 nodes
    if (current === null)
        return null;
    let next = current.next;
    // early exit if 1 node
    if (next === null)
        return current;

    // next is the new head, do first swap
    head = next;
    let tail = next.next;
    next.next = current;
    current.next = tail;
    let prev = current;

    //loop through the rest of the list while at least 2 more nodes
    while ((current = tail) && (next = current.next)) {
        prev.next = next;
        tail = next.next;
        next.next = current;
        current.next = tail;
        prev = current;
    }

    return head;
};