
export function getIdFromUrl(){
    let url = window.location.href
    let id = url.split('').splice(-5).reduce((acc, cur) => {
        if(parseInt(cur)){
            acc += cur;
        }
        return acc
    }, '')
    return id;
}