 import{createContext,useReducer,useState,useEffect} from "react"
 export const PostList=createContext(
    {postList:[],
    addPost:()=>{},
    deletePost:()=>{},
    fetching:false,
    });

const postListReducer=(currPostList,action)=>
{
    let newPostList= currPostList;
    if(action.type==="DELETE_POST")
        {            
            newPostList=currPostList.filter(post=>post.id!==action.payload.postId);            
        }
        else if(action.type==="ADD_POST")
            {
                newPostList=[action.payload,...currPostList];
            }
        else if(action.type==="ADD_INITIAL_POST")
            {
                newPostList=action.payload.posts;
            }
        return newPostList;
}
const PostListProvider=({children})=>
    {
        const [postList,dispatchPostList]=useReducer(postListReducer,[]);
        const [fetching, setFetching]=useState(false);
       
        const addPost=(post)=>
        {
            console.log("Data after adding to server.",post)
            dispatchPostList({
                type:"ADD_POST",
                payload:post,                        
                });
        }

        const addIntialPosts=(posts)=>
            {
                dispatchPostList({
                    type:"ADD_INITIAL_POST",
                    payload:{posts,},});
            }

        const deletePost=(postId)=>
            {         
                dispatchPostList({
                    type:"DELETE_POST",
                    payload:{postId,},
                                    });
            };
            useEffect(()=>
                {
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
                },[]);
 
        return(                                 
        <PostList.Provider value={{postList,addPost,deletePost,fetching}}>{children}
        </PostList.Provider>
        );
    }
const DEFAULT_POST_LIST=[
    {
        id:"1",
        title:"Going to Islamabad",
        body:"I am going to Islamabad, Hopes will complete this course",
        reactions:2,
        userId:"user-9",
        tags:["vacation","Mumbai","Enjoying"],
    },
    {
        id:"2",
        title:"learn React 18",
        body:"Attending working on Block chain Technology in Multan",
        reactions:15,
        userId:"user-12",
        tags:["React 18","Development","Enjoying"],
    },
]; 
export default PostListProvider;