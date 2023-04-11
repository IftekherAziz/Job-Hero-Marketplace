import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {
  const [categories, setCategories] = useState([]);

  const categoriesLoader = async () => {
    const res = await fetch('category.json');
    const data = await res.json();
    return data.category;
  };

  useEffect(() => {
    const loadCategories = async () => {
      const categoryData = await categoriesLoader();
      setCategories(categoryData);
    };
    loadCategories();
  }, []);

  return (  
    <section className="mx-auto max-w-7xl px-6 mb-20">
      <div>
        <h1 className="text-center text-4xl font-bold pt-20 pb-5">
          Career Directory
        </h1>
        <p className="text-center mb-10">
          Discover a vast array of job openings complete with comprehensive
          details to help you make informed decisions.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <JobCategory key={index} category={category}></JobCategory>
        ))}
      </div>
    </section> 
   
  );
};

export default JobCategories;




// const JobCategories = () => {
//   const [categories, setCategories] = useState([]);

//   const categoriesLoader = async () => {
//     const res = await fetch('category.json');
//     const data = await res.json();
//     return data.category;
//   };

//   useEffect(() => {
//     const loadCategories = async () => {
//       const categoryData = await categoriesLoader();
//       setCategories(categoryData);
//     };
//     loadCategories();
//   }, []);

//   return (
//     <div className='category-container'>
//       <div className='text-center'>
//         <p className='text-4xl font-semibold pt-8 md:pt-14 pb-4'>Job Category List</p>
//         <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
//       </div>
//       <div>
//         {categories.map((category) => (
//           <div key={category.name}>
//             <img src={category.logo} alt={`${category.name} logo`} />
//             <h2>{category.name}</h2>
//             <p>{category.jobs_available} jobs available</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobCategories;