import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost=()=>{
  const {addPost}=useContext(PostList);
  //const {deletePost}=useContext(PostList);
  const userIdElement= useRef();
  const postTitleElement= useRef();
  const postBodyElement= useRef();
  const reactionsElement= useRef();
  const tagsElement= useRef();
  const handleSubmit=(event)=>
  {
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle= postTitleElement.current.value;
    const postBody= postBodyElement.current.value;
    const reactions= reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
    //deletePost();
    addPost(userId,postTitle,postBody,reactions,tags);
  }
    return(
    <form className="create-post" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="userid" className="form-label">User ID</label>
          <input type="text" ref={userIdElement}  id ="userid" className="form-control" placeholder="Enter your user ID"/>          
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" ref={postTitleElement} id ="title" className="form-control" placeholder="How are you feeling today ..."/>          
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post content</label>
          <textarea id ="body" ref={postBodyElement} type="text" rows="4" className="form-control" placeholder="Tell us more about it ..."/>          
        </div>

        <div className="mb-3">
          <label htmlFor="Reactions" className="form-label">Number of Reactions</label>
          <input type="text" ref={reactionsElement} id ="Reactions" className="form-control" placeholder="How many people reacted to this post"/>          
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter your Hash tags here</label>
          <input type="text" ref={tagsElement} id ="tags" className="form-control" placeholder="Enter your tags using space"/>          
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
      </form>);
};
export default CreatePost;