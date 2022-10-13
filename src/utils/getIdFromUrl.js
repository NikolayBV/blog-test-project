
export function getIdFromUrl(){
    let url = window.location.href
    let id = url.split('').splice(-5).reduce((acc, cur) => {
        if(parseInt(cur)){
            acc.push(cur)
        }
        return acc
    }, [])
    return id;
}