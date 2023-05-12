/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //convert l1 and l2 to numbers (must be BigInt for some test cases)
    let v1 = 0n;
    for (let mult = 1n; l1 !== null; mult *= 10n, l1 = l1.next)
        v1 += mult * BigInt(l1.val);
    let v2 = 0n;
    for (let mult = 1n; l2 !== null; mult *= 10n, l2 = l2.next)
        v2 += mult * BigInt(l2.val);

    //add them and convert to string for ease in getting digits
    let total = (v1 + v2).toString();

    // convert to the linked list format
    let answer = new ListNode(parseInt(total[total.length - 1]), null);
    let tail = answer;
    for (let i = total.length - 2; i >= 0; i--) {
        tail.next = new ListNode(parseInt(total[i]), null);
        tail = tail.next;
    }
    return answer;
};