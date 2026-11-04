export default function debounce(func, wait) {
	let prevFunctionCall;
  
  return function debouncedFunction(...args){
    // cancel previous function call which are not invoked yet
    clearTimeout(prevFunctionCall);
    
    return new Promise((resolve , reject)=>{
      prevFunctionCall = setTimeout(()=>{
        resolve(func.apply(this, args))
      }, wait)
    })
  }
}