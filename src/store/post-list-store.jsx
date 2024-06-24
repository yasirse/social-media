import{createcontext} from react
const PostList=createcontext({});
const PostListProvider=({children})=>{
    return <PostList.PostListProvider>{children}</PostList.PostListProvider>;
}
export default PostListProvider;