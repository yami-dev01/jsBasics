
function CustomArray(arr){
    this.arr = arr

    this.reduce = function(callback , acc){
        this.arr.forEach(element => {
            acc = callback(element , acc);
        });
        return acc;
    };

    this.filter = function(callback){
        const result = [];
        for(let i =0 ; i<this.arr.length ; i++){
            const toBeAdded = callback(this.arr[i]);
            if(toBeAdded){
                result.push(this.arr[i]);
            } 
        }
        return result
    }

    this.map = function(callback){
        const result = [];
        for(let i =0; i<this.arr.length ; i++){
            const valueToBeAdded = callback(this.arr[i]);
            result.push(valueToBeAdded);
        }
        return result
    }

    this.forEach = function(callback){
        for(let i = 0; i<this.arr.length ; i++){
            callback(this.arr[i]);
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
console.log(filteredArray);






