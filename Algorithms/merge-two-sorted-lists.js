/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    //early exit if either list is empty
    if (!list1)
        return list2;
    if (!list2)
        return list1;

    //select head node with normal merge logic
    let head;
    if (list1.val < list2.val) {
        head = list1;
        list1 = list1.next;
    }
    else {
        head = list2;
        list2 = list2.next;
    }

    //remaining nodes
    let tail = head;
    while (true) {
        //if one of the lists is empty, attach the other to tail and done
        if (!list1) {
            tail.next = list2;
            break;
        }
        else if (!list2) {
            tail.next = list1;
            break;
        }

        //else do the normal merge logic
        if (list1.val < list2.val) {
            tail.next = list1;
            tail = list1;
            list1 = list1.next;
        }
        else {
            tail.next = list2;
            tail = list2;
            list2 = list2.next;
        }
    }

    return head;
};