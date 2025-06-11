// components/GenderPieChart.tsx
'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: '男性', value: 39 },
  { name: '女性', value: 61 },
];

const COLORS = ['#385789', '#6B8BBE'];
const RADIAN = Math.PI / 180;

interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: LabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text
        x={x + (data[index].name === '男性' ? -30 : 30)}
        y={y - 15}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-3xl font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        x={x + (data[index].name === '男性' ? -10 : 10)}
        y={y + 15}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-sm"
      >
        {data[index].name}
      </text>
    </g>
  );
};

export default function GenderPieChart() {
  return (
    <div className="w-full h-96 p-4 bg-white rounded-xl shadow">
      <h3 className="mb-2 flex flex-col items-center gap-1">
        <span className="text-lg font-semibold">男女比率</span>
        <span className="text-xs text-gray-500 inline-block">※2025年6月1日時点</span>
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="40%"
            labelLine={false}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            fill="#8884d8"
            label={renderCustomizedLabel}
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
