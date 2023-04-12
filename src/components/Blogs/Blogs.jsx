import React, { useEffect } from "react";
import { useState } from "react";
import BlogPost from "../BlogPost/BlogPost";

const Blog = () => {

  const [blogs, setBlogs] = useState([]);

   const blogLoaders = async () => {
     const res = await fetch("blogs.json");
     const data = await res.json();
     return data.blog_posts;
   };

   useEffect(() => {
     const loadBlogs = async () => {
       const categoryData = await blogLoaders();
       setBlogs(categoryData);
     };
     loadBlogs();
   }, []);


  return (
    <section>
      {/* Title Section */}
      <div className="custom_bg border-t">
        <div className="mx-auto max-w-7xl py-12 px-6 mb-10 ">
          <div>
            <h1 className="font-bold text-xl text-center py-12">Blog Posts</h1>
          </div>
        </div>
      </div>
      {/* Blog Section */}
      <div className="mx-auto max-w-7xl px-8 mt-20 pb-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <BlogPost key={blog.id} blog={blog}></BlogPost>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
