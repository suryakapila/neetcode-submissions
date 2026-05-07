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

    merge(first, second){
        const final = [];
        let i = 0, j = 0;
        while(i < first.length && j < second.length){
            if(first[i].key <= second[j].key){
                final.push(first[i]);
                i++;
            }
            else{
                final.push(second[j]);
                j++;
            }
        }

        while(i < first.length){
            final.push(first[i]);
                i++;
        }

        while(j < second.length){
            final.push(second[j]);
                j++;
        }

        return final;
    }

    mergeSort(pairs) {
        if(pairs.length < 2){
            return pairs;
        }
        let first = this.mergeSort(pairs.slice(0, Math.floor(pairs.length/2)));
        let second = this.mergeSort(pairs.slice(Math.floor(Math.floor(pairs.length/2), pairs.length)));
        return this.merge(first , second);
    }
}
