import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store"
import WelcomeMessage from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

const PostList=()=>{
    const {postList,addIntialPosts}=useContext(PostListData);
    const [fetching, setFetching]=useState(false);
    useEffect(()=>{
        const controller= new AbortController();
        const signal= controller.signal;
            setFetching(true);
            console.log(" 1 fetch started");
            fetch('https://dummyjson.com/posts',{signal})
            .then(res => res.json())        
            .then((data)=>{
            addIntialPosts(data.posts);
            setFetching(false);
            console.log("2 fetching returned");});
            return ()=>{console.log("useEffect cleared"); 
            controller.abort() };                   
        },[])
    
    return(
        <>
        {fetching&&<LoadingSpinner/>}
        {!fetching&&postList.length===0&&<WelcomeMessage />}
        {!fetching&&postList.map((post)=>{return(<Post key={post.id} post={post}/>)})}        
        </>

    );
}
export default PostList;