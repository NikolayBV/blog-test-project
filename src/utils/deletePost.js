
export function deletePost(setState, array, id){
    setState(array.filter((p) => {return p.id !== id}))
}