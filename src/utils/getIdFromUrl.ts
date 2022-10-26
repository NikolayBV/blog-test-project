
export function getIdFromUrl(): string{
    const url = window.location.href
    let id = url.split('').splice(-5).reduce((acc, cur) => {
        if(parseInt(cur)){
            acc += cur;
        }
        else if(cur == '0') acc+=cur;
        return acc
    }, '')
    return id;
}