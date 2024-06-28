import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store"
import WelcomeMessage from "./Welcome";

const PostList=()=>{
    const {postList,addIntialPosts}=useContext(PostListData);
    const handleGetPostsClick=()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())        
        .then((data)=>{addIntialPosts(data.posts)});
        //.then((obj)=>{console.log(obj.posts[0].title)});
        
        }
    return(
        <>
        {postList.length===0&&<WelcomeMessage onGetPostsClick={handleGetPostsClick}/>}
        {postList.map((post)=>{return(<Post key={post.id} post={post}/>)})}        
        {/* {postList.map((post)=>{return(console.log(post.id))})}; */}
        </>

    );
}
export default PostList;