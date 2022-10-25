import {IGetPosts} from "../api/api";
import {IUser} from "../models/models";

export const madeFullPost = (posts: Pick<IGetPosts, 'posts'>, users: Array<IUser>) => {
    return posts.posts.map((post) => {
        if (post.author) {
            return post;
        } else {
            const user = users.find((user) => post.userId === user.id);
            const userName = user?.name ? user.name : "anonymus";
            const newPost = {...post, userName};
            return newPost;
        }
    })
};