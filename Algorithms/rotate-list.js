/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    //early exit: empty list
    if (head === null)
        return null;

    //early exit: no rotation
    if (k === 0)
        return head;

    //otherwise we need to chop the last k nodes off
    //and put them at the front
    //or for list length n, k%n if k>n

    //count number of nodes in list, keep reference to last node
    let n = 1;
    let current;
    for (current = head; current.next !== null; current = current.next)
        n++;

    //remove whole rotations
    k %= n;

    //early exit: no rotation (k was a multiple of n)
    if (k === 0)
        return head;

    //point the last node to head (list is temporarily circular)
    current.next = head;

    //go to new last node and disconnect
    current = head;
    for (let hops = n - 1 - k; hops > 0; hops--)
        current = current.next;
    //current is the new last node
    head = current.next;
    current.next = null;

    return head;
};

