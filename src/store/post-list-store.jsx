 import{createContext,useReducer} from "react"
 export const PostList=createContext({postList:[],addPost:()=>{},deletePost:()=>{}});

const postListReducer=(currPostList,action)=>
{
    let newPostList= currPostList;
    if(action.type==="DELETE_POST")
        {
            console.log("postListReducer called"+newPostList[0].id);
            newPostList=currPostList.filter(post=>post.id!==action.payload.postId);
            console.log("postListReducer called"+newPostList[0].id);
        }
        return newPostList;
}
const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
    const addPost=()=>{ }

    const deletePost=(postId)=>{         
       dispatchPostList({
        type:"DELETE_POST",
        payload:{postId,},
       });
    };
   
 
    return(                                 
    <PostList.Provider value={{postList,addPost,deletePost}}>{children}
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