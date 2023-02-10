import axios from "axios";
import React, { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/posts')
      .then((data) => setPosts(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
        
      <h2 className="h2 text-center my-5">Posts</h2>
      {
        posts.length ? (<ul className="list-group list-unstyled w-50 mx-auto">
            {
                posts.map((post) => (<li className="list-group-item" key={post.id}>{post.title}</li>))
            }
        </ul>) : ('')
      }
    </div>
  );
};

