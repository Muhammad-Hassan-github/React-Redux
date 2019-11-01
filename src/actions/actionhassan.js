const myaction = (name)=>{
    return{
        type:"CHANGE_NAME",payload:name
    }
}
const myaction2 = (rollno)=>{
    return{
        type:"CHANGE_ROLLNO",payload:rollno
    }
}
export { myaction , myaction2}


// export const myaction = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(data => {
//                 dispatch({
//                     type: "CHANGE_NAME", payload: data[0].name
//                 })
//             }

//             )
//     }
// }