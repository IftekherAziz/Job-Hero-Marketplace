import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer,Tooltip } from 'recharts';


const Statistics = () => {
    const assignments=[
        { id: "a123", assignmentTitle: "Simple HTML Project", assignmentMark: 60, assignmentNo: 1, fill: "#ca8a04" },
        { id: "b456", assignmentTitle: "Responsive Architect Website", assignmentMark: 60, assignmentNo: 2, fill: "#65a30d" },
        { id: "c789", assignmentTitle: "Tech Landing Page Using CSS Framework", assignmentMark: 60, assignmentNo: 3, fill: "#e11d48" },
        { id: "d012", assignmentTitle: "Basic JavaScript Problem Solving", assignmentMark: 60, assignmentNo: 4, fill: "#7c3aed" },
        { id: "e345", assignmentTitle: "Geometry Genius Assignment", assignmentMark: 60, assignmentNo: 5, fill: "#84cc16" },
        { id: "f678", assignmentTitle: "AI Universe API and ES6", assignmentMark: 60, assignmentNo: 6, fill: "#eab308" },
        { id: "g901", assignmentTitle: "Devtool and debugging", assignmentMark: 60, assignmentNo: 7, fill: "#dc2626" },
        { id: "h234", assignmentTitle: "Knowledge Cafe Using React", assignmentMark: 60, assignmentNo: 8, fill: "#22d3ee" }
      ]
      
    const style = {
        top: '50%',
        right: 1,
        transform: 'translate(0, -50%)',
        lineHeight: '48px',
      };
    return (
        <div className='pt-36 md:4 my-container h-500'>
           <ResponsiveContainer width="100%" aspect={3}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={20} data={assignments}>
                <RadialBar
                 minAngle={15}
                 label={{ position: 'insideStart', fill: '#fff'}}
                 background
                 clockWise
                 dataKey="assignmentMark"
                />
                <Tooltip/>
                <Legend iconSize={20} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
           </ResponsiveContainer>
        </div>
        
    );
};

export default Statistics;