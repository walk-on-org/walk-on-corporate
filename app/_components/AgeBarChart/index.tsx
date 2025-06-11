// components/AgeBarChart.tsx
'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { age: '20代', count: 4 },
  { age: '30代', count: 11 },
  { age: '40代以上', count: 3 },
];

const COLORS = ['#385789', '#6B8BBE', '#385789'];

interface LabelProps {
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
  index: number;
}

const renderCustomizedLabel = ({ x, y, width, height, value, index }: LabelProps) => {
  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      textAnchor="middle"
      className="text-sm font-bold"
    >
      {value}名
    </text>
  );
};

export default function AgeBarChart() {
  return (
    <div className="w-full h-96 p-4 bg-white rounded-xl shadow">
      <h3 className="mb-2 flex flex-col items-center gap-1">
        <span className="text-lg font-semibold">従業員の年齢構成</span>
        <span className="text-xs text-gray-500 inline-block">
          従業員数18名より算出
          <br />
          ※2025年6月1日時点
        </span>
      </h3>
      <div className="text-center my-4">
        <span className="text-4xl font-bold">35.2</span>
        <span className="ml-2">歳</span>
      </div>
      <ResponsiveContainer width="80%" height="60%" className="mx-auto">
        <BarChart data={data}>
          <XAxis type="category" dataKey="age" />
          <Bar dataKey="count" label={renderCustomizedLabel}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
