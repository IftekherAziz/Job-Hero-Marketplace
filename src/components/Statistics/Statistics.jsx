import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const assignments = [
    {
      id: "1",
      name: "HTML Website",
      gotMark: 57,
      assignmentNo: 1,
      fill: "#059669",
    },
    {
      id: "2",
      name: "Architect Website",
      gotMark: 60,
      assignmentNo: 2,
      fill: "#fca5a5",
    },
    {
      id: "3",
      name: "Tech Landing Page",
      gotMark: 60,
      assignmentNo: 3,
      fill: "#d6d3d1",
    },
    {
      id: "4",
      name: "JavaScript Problem Solving",
      gotMark: 60,
      assignmentNo: 4,
      fill: "#84cc16",
    },
    {
      id: "5",
      name: "Geometry Genius",
      gotMark: 60,
      assignmentNo: 5,
      fill: "#581c87",
    },
    {
      id: "6",
      name: "AI Universe",
      gotMark: 60,
      assignmentNo: 6,
      fill: "#44403c",
    },
    {
      id: "7",
      name: "Devtool and debugging",
      gotMark: 60,
      assignmentNo: 7,
      fill: "#fde047",
    },
    {
      id: "8",
      name: "Knowledge Cafe Using React",
      gotMark: 60,
      assignmentNo: 8,
      fill: "#9333ea",
    },
  ];

  const style = {
    top: "50%",
    right: 1,
    transform: "translate(0, -50%)",
    lineHeight: "48px",
  };
  return (
    <section>
      {/* Title Section */}
      <div className="custom_bg border-t">
        <div className="mx-auto max-w-7xl py-12 px-6">
          <div>
            <h1 className="font-bold text-xl text-center py-12">Statistics</h1>
          </div>
        </div>
      </div>
      {/* Chart Section */}
      <div className="">
        <div className="mx-auto max-w-7xl pt-4 md:4 h-600">
          <ResponsiveContainer width="100%" aspect={2}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="10%"
              outerRadius="80%"
              barSize={20}
              data={assignments}
            >
              <RadialBar
                minAngle={15}
                label={{ position: "insideStart", fill: "#f43f5e" }}
                background
                clockWise
                dataKey="gotMark"
              />
              <Tooltip />
              <Legend
                iconSize={50}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
