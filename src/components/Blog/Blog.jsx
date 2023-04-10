import React, { useEffect } from 'react';
import { useState } from 'react';
import BlogPost from './BlogPost/BlogPost';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/IftekherAziz/Module-57/main/public/blogs.json"
        )
          .then((res) => res.json())
          .then((data) => setBlogs(data.blog_posts));
    }, [])

    return (
      <div className="mx-auto max-w-7xl px-8 mt-20 pb-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {
            blogs.map(blog => <BlogPost key={blog.id} blog={blog}></BlogPost>)
        }    
        </div>
      </div>
    );
};

export default Blog;