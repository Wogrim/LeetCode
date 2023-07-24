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
    //edge case: empty list
    if (head === null)
        return null;

    //'remove' duplicates from the start of the list

    let current = head;
    let next = current.next;
    while (true) {
        //if next is same, 'remove' duplicates
        if (next !== null && next.val === current.val) {
            do {
                next = next.next;
            }
            while (next !== null && next.val === current.val);

            //edge case: all numbers had duplicates
            if (next === null)
                return null;

            //next is different from current
            current = next;
            next = current.next;
        }
        else
            break;
    }

    //edge case: only one non-duplicate at the end of the list
    if (next === null)
        return current;

    //current is a node with no duplicates; the head of the result list
    head = current; //the 'removal' part

    //'remove' duplicates from the middle/end of the list
    let tail = current;
    current = next;
    next = current.next;
    while (true) {
        //if next is null, we are done
        if (next === null)
            break;

        //if next is same, remove duplicates
        if (next.val === current.val) {
            do {
                next = next.next;
            }
            while (next !== null && next.val === current.val);

            //edge case: duplicates until end of list
            if (next === null) {
                tail.next = null; //the 'removal' part
                break;
            }

            //next is now different from current
            tail.next = next; //the 'removal' part
            current = next;
            next = current.next;
        }
        else
        //else keep current in the list
        {
            tail = current;
            current = next;
            next = current.next;
        }
    }

    return head;
};