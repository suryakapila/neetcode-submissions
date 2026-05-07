/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSortHelper(pairs, s, e){
        if(e-s+1 <= 1){
            return pairs;
        }
        let pivot = pairs[e];
        let left  = s;
        for(let i = s; i < e; i++){
            if(pairs[i].key< pivot.key){
                let temp = pairs[i];
                pairs[i] = pairs[left];
                pairs[left] = temp;
                left++;
            }
        }

        //Move pivot in between right and left sides
        pairs[e] = pairs[left];
        pairs[left] = pivot;

        this.quickSortHelper(pairs, s, left -1);
        this.quickSortHelper(pairs, left + 1, e);
    }
    quickSort(pairs) {
        this.quickSortHelper(pairs, 0, pairs.length-1);
        return pairs;
    }
}
