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
var deleteDuplicates = function (head) {
    //early exit: empty list or only 1 node
    if (!head || !head.next)
        return head;

    //2 pointers method
    let prev = head;
    let current = head.next;

    //loop through list
    while (current !== null) {
        if (current.val === prev.val) {
            //remove current
            prev.next = current.next;
            current.next = null;
            current = prev.next;
        }
        else {
            //advance pointers
            prev = current;
            current = current.next;
        }
    }

    //head never gets deleted
    return head;
};