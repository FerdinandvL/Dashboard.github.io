//export const pathGenerator = (dataset) => {
//    let n = 0;
//    for(let element in dataset){
//        if(typeof(element) === "number"){
//            n++
//        }
//    }
//    let dx = 1 / n;
//    let result = [];
//    let index = 0
//    for(let element in dataset){
//        index++;
//        if(typeof(element)==="number") {
//            result.push(element)
//        }
//    }
//    return result;
//}
//
export function arrayify(dataset){
    return [
        [1, dataset.RT_7_96],
        [2, dataset.RT_8_48],
        [3, dataset.RT_8_83], 
        [4, dataset.RT_9_17], 
        [5, dataset.RT_9_62],
        [6, dataset.RT_10_07], 
        [7, dataset.RT_10_21], 
        [8, dataset.RT_10_6], 
        [9, dataset.RT_10_83], 
        [10, dataset.RT_11_91], 
        [11, dataset.RT_12_18],
        [12, dataset.RT_12_96], 
        [13, dataset.RT_13_41],
        [14, dataset.RT_13_8],
        [15, dataset.RT_14_026], 
        [16, dataset.RT_15_91], 
        [17, dataset.RT_16_55],
        [18, dataset.RT_17_14]
    ]
}