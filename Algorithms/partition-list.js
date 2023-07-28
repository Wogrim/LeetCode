/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    //early exit: empty list
    if (head === null)
        return null;

    //list of nodes less than x
    let lt = null;
    let lt_last = null;
    //list of nodes greater than or equal to x
    let gte = null;
    let gte_last = null;

    //helper function to fill the lt list
    //optimization: new node isn't pointed to null
    const lt_push = node => {
        if (lt === null) {
            lt = node;
            lt_last = node;
        }
        else {
            lt_last.next = node;
            lt_last = node;
        }
    };

    //helper function to fill the gte list
    //optimization: new node isn't pointed to null
    const gte_push = node => {
        if (gte === null) {
            gte = node;
            gte_last = node;
        }
        else {
            gte_last.next = node;
            gte_last = node;
        }
    };

    //build the lists
    while (head !== null) {
        if (head.val < x)
            lt_push(head);
        else
            gte_push(head);

        head = head.next;
    }

    if (gte_last !== null)
        gte_last.next = null;
    //put the lists together (if applicable)
    if (lt_last !== null) {
        lt_last.next = gte;
        return lt;
    }
    else
        return gte;
};