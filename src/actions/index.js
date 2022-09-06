 export const incNumber =(num)=>{
    return{
        type:'increment',
        payload:num
    }
 }
 export const decNumber =(num)=>{
    return{
        type:'decrement',
        payload:num
        
    }
 }