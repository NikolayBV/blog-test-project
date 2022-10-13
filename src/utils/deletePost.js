
export function deletePost(state, array, id){
    state(array.filter(p => p.id !== id))
}