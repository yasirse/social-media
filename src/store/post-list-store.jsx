 import{createContext,useReducer} from "react"
 export const PostList=createContext({postList:[],addPost:()=>{},deletePost:()=>{}});

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
        return newPostList;
}
const PostListProvider=({children})=>
    {
        const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
        const addPost=(userId,postTitle,postBody,reactions,tags)=>
        {
            console.log(`${userId}  ${postTitle} ${postBody} ${reactions} ${tags} `);
            dispatchPostList({
                type:"ADD_POST",
                payload:{
                    id:Date.now(),
                    title:postTitle,
                    body:postBody,
                    reactions:15,
                    userId:userId,
                    tags:tags,},
                });
        }

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