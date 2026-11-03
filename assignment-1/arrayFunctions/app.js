
function CustomArray(arr){
    this.arr = arr

    this.reduce = function(fn , acc){
        this.arr.forEach(element => {
            acc = fn(element , acc);
        });
        return acc;
    };

    this.filter = function(fn){
        const modifiedArray = [];
        for(let i =0 ; i<this.arr.length ; i++){
            const toBeAdded = fn(this.arr[i]);
            if(toBeAdded){
                modifiedArray.push(this.arr[i]);
            } 
        }
        return modifiedArray
    }

    this.map = function(fn){
        const modifiedArray = [];
        for(let i =0; i<this.arr.length ; i++){
            const valueToBeAdded = fn(this.arr[i]);
            modifiedArray.push(valueToBeAdded);
        }
        return modifiedArray
    }

    this.forEach = function(fn){
        for(let i = 0; i<this.arr.length ; i++){
            fn(this.arr[i]);
        }
    }
}


const arr = [1 , 2 , 3 , 4];
const customArray = new CustomArray(arr);

customArray.forEach((element) => {
    console.log(element);
})


const doubledArray = customArray.map((elem) => {
    return elem * 2;
})
console.log(doubledArray)


const ans = customArray.reduce((elem , acc)=>{
    acc += elem;
    return acc;
}, 0);
console.log(ans);


const filteredArray = customArray.filter((elem) =>{
    if(elem > 2) return 1;
})
console.log(newArr);






