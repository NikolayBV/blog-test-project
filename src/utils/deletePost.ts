import {IPost} from "../models/models";

export function deletePost(setState: Function, array: Array<IPost>, id: number): void{
    setState(array.filter((p) => {return p.id !== id}))
}