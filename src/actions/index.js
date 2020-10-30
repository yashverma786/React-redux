const ADD_TODO='ADD_TODO'
export const addtodo=(message)=>({
    type:'ADD_TODO',
   message:message,
    id: Math.random()
})


const DELETE_TODO='DELETE_TODO'
export const deleteTodo=(id)=>({
    type:'DELETE_TODO',
    id
})

// const DELETE_TODO='DELETE_TODO'
// export const deleteTodo=(id)=>{
   // return{
//     type:'DELETE_TODO',                //upar wla aur neeche wla code same hai upar wle code 
//     message:message                      me hame curly braces aur return statement nahi laganin padti wo automatically return kar deta hai
  //  }                                       
// }