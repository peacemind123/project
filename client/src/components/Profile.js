import { useState } from "react";
import { fetchData } from "../main.js";
import { useNavigate } from "react-router-dom";
const AddPost = () => {
  const navigate = useNavigate();
    const [post, setPost] = useState({
        title: '', 
        content: '',
      });
    
      const { title, content } = post;
    
      const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value })

      const onSubmit = (e) => {
        e.preventDefault();
        let user = localStorage.getItem('user');
        let parseUser = JSON.parse(user);
        let userId = parseUser.userName;
        fetchData("/post/create",
          {
            title,
            content,
            userId
          },
          "POST")
          .then((data) => {
            if (data) {
              console.log(data);
              navigate('/posts');
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }

    return (
        <form>
            <div class="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" style={{paddingRight: "10px"}} className="form-control" id="title" onChange={onChange} placeholder="Enter title"/>
            </div>
            <div class="form-group">
                <label htmlFor="content">Content</label>
                <textarea style={{paddingRight: "10px"}} className="form-control" name="content" id="content" onChange={onChange} rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default AddPost;