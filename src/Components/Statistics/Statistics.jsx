import { key } from "localforage";
import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      id: 1,
      name: "Assignment 1",
      result: 57,
    },
    {
      id: 2,
      name: "Assignment 2",
      result: 58,
    },
    {
      id: 3,
      name: "Assignment 3",
      result: 59,
    },
    {
      id: 4,
      name: "Assignment 4",
      result: 30,
    },
    {
      id: 5,
      name: "Assignment 5",
      result: 54,
    },
    {
      id: 6,
      name: "Assignment 6",
      result: 56,
    },
    {
      id: 7,
      name: "Assignment 7",
      result: 60,
    },
    {
      id: 8,
      name: "Assignment 8",
      result: 46,
    },
  ];
  return (
    <div>
      <ComposedChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />

        <XAxis
          dataKey="name"
          label={{ position: "insideBottomRight", offset: 0 }}
        />
        <YAxis
          dataKey="result"
          label={{ angle: -90, position: "insideLeft" }}
        />
        <Scatter name="name" dataKey="name" fill="red" />
        <Scatter name="result" dataKey="result" fill="blue" />
        <Line
          dataKey="name"
          stroke="blue"
          dot={false}
          activeDot={false}
          legendType="none"
        />
        <Line
          dataKey="result"
          stroke="red"
          dot={false}
          activeDot={false}
          legendType="none"
        />
      </ComposedChart>
    </div>
  );
};

export default Statistics;
