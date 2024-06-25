import{createContext,useReducer} from "react"


const PostList=createContext({postList:[],addPost:()=>{},deletePost:()=>{}});

const postListReducer=(currPostList,action)=>
{
    return currPostList;
}
const PostListProvider=({children})=>{
    const {postList,dispatchPostList}=useReducer(postListReducer,DEFAULT_POST_LIST);
   
    const addPost=()=>{    }
    const deletePost=()=>{     }

    return(                                 
    <PostList.Provider value={{postList,addPost,deletePost}}>{children}
    </PostList.Provider>
    );
    const DEFAULT_POST_LIST=[
        // {id:"1",
        // title:"Going to Islamabad",
        // body:"I am going to Islamabad, Hopes will complete this course",
        // reactions:2,
        // userId:"user-9",
        // tags:["vacation","Mumbai","Enjoying"],
        // },
        // {id:"2",
        //     title:"learn React 18",
        //     body:"Attending working on Block chain Technology in Multan",
        //     reactions:15,
        //     userId:"user-12",
        //     tags:["React 18","Mumbai","Enjoying"],
        //     },
    ];
}
export default PostListProvider;