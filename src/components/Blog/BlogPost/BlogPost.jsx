import React from 'react';

const BlogPost = ({blog}) => {
    const { image, title, content } = blog;
    return (
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-full w-96">
        <a href="#" className="block w-full h-full">
          <img
            alt="blog photo"
            src={image}
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-whit">
            <p className="mb-2 text-xl font-medium">
                {title}
            </p>
            <p className=" text-gray-500 font-medium text-sm text-justify">
                {content}
            </p>
          </div>
        </a>
      </div>
    );
};

export default BlogPost;