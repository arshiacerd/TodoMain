const Increment = ()=>{
    return{
        type:"INCREMENT"
    }
}
const Decrement = ()=>{
    return{
        type:"DECREMENT"
    }
}
const AddAmount = (num)=>{
    return{
        type:"Add",
        payload:num,
    
    }
}
 const AddOdd = (num)=>{
    return{
        type:"odd",
        payloadOdd:num
    }
 }   

export {Increment,Decrement,AddAmount,AddOdd} ;