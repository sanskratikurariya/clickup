import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';

// One slice of 30°, rest completes 360°
const data = [
  { name: 'Slice', value: 30 },
  { name: 'Remaining', value: 330 }
];

const COLORS = ['#FFD700', '#1E3A8A']; // Yellow slice, Blue background

const WorkloadStatusChart = () => {
  return (
    <div className="bg-[#151414] text-white p-6 rounded-xl h-[40vh] border border-[#484848] flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold mb-4">Workload by Status</h2>

 
      <div className="w-60 h-60 relative">
        <ResponsiveContainer width="100%" height="100%" >
          <PieChart>
            <Pie
            
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={450}
              innerRadius={20}
              outerRadius={70}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

    
        <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-yellow-400 transform -translate-x-1/2 -translate-y-1/2 border-[3px] border-[#151414]" />
      </div>
    </div>
  );
};

export default WorkloadStatusChart;
