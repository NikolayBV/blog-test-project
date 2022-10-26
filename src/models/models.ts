export interface IPost{
    userId?: number,
    id: number,
    title: string,
    body: string,
    userName?: string,
    author?: string,
}

export interface IUser{
    "id": 1,
    "name": string,
    "username"?: string,
    "email"?: string,
    "address"?: {
        "street"?: string,
        "suite"?: string,
        "city"?: string,
        "zipcode"?: string,
        "geo"?: {
            "lat"?: string,
            "lng"?: string
        }
    },
    "phone"?: string,
    "website"?: string,
    "company"?: {
        "name"?: string,
        "catchPhrase"?: string,
        "bs"?: string
    }
}

export interface GetParam{
    page: number,
    limit: number
}

export interface PostsState {
    posts: Array<IPost>,
    postsCount: number,
    usersName: Array<IUser>,
    loading: boolean,
    error: null | string
}

export interface ObjInMainState {
    posts: Array<IPost>,
    usersName: Array<IUser>,
    count: number
}
export interface AddPost {
    id?: string;
    title: string;
    body: string;
    author: string;
}