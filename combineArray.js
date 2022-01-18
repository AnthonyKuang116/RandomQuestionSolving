let first = [
    { uuid: 2, name: "Darling" },
    { uuid: 3, name: "Cry-Baby" },
    { uuid: 4, name: "Snitch" },
    { uuid: 5, name: "Pawn" }
];

let second = [
    { uuid: 1, role: "admin" },
    { uuid: 2, role: "contributor" },
    { uuid: 3, role: "owner" },
    { uuid: 4, role: "contributor" }
];



let newArr = [];

for(let i = 0; i < first.length; i++) {
    newArr.push({...first[i], ...(second.find((item) => item.uuid === first[i].uuid))})
}
// console.log(newArr);


const mergeArr = (first, second) => {
   return first.map(item => ({
        ...second.find((info) => (info.uuid === item.uuid)),
        ...item
    }))
}
// console.log(mergeArr(first, second));

let combineArr = first.map((item) => ({...item, ...second.find(data => data.uuid === item.uuid)}))
console.log(combineArr);

