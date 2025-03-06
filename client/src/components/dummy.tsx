'use client';

import { useMemo } from 'react';
import { ChartContainer } from '@/components/ui/chart';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';
import { fontTitle2 } from '@/styles/typography';

interface CompletedOrdersChartProps {
  data: Array<{
    time: string;
    orders: number;
  }>;
  selectedMonth?: string;
  className?: string;
}

const mockData = [
  { time: "Jan", orders: 180 },
  { time: "Feb", orders: 220 },
  { time: "Mar", orders: 240 },
  { time: "Apr", orders: 280 },
  { time: "May", orders: 260 },
  { time: "Jun", orders: 269 },
  { time: "Jul", orders: 290 },
  { time: "Aug", orders: 310 },
  { time: "Sep", orders: 285 },
  { time: "Oct", orders: 295 },
  { time: "Nov", orders: 315 },
  { time: "Dec", orders: 330 }
];

const CustomBar = (props: any) => {
  const { x, y, width, height, fill, isActive, payload, maxValue } = props;
  
  // Use the full width provided by the chart
  const barWidth = width;
  const barX = x;
  const radius = barWidth / 2;
  const fixedHeight = 200;
  const fixedY = y + (height - fixedHeight);

  // Calculate the height of the value fill based on the data
  const valueHeight = (fixedHeight * payload.orders) / maxValue;
  const valueY = fixedY + fixedHeight - valueHeight;

  // Calculate circle size to fit text with padding
  const textWidth = 24; // Width needed for "Jan", "Jun" etc with padding
  const circleRadius = Math.max(textWidth / 2, 12); // Ensure minimum size of 12px radius

  return (
    <g>
      {/* Background capsule (always gray, fixed height) */}
      <path
        d={`
          M${barX},${fixedY + radius}
          A${radius},${radius} 0 0 1 ${barX + radius},${fixedY}
          L${barX + barWidth - radius},${fixedY}
          A${radius},${radius} 0 0 1 ${barX + barWidth},${fixedY + radius}
          L${barX + barWidth},${fixedY + fixedHeight - radius}
          A${radius},${radius} 0 0 1 ${barX + barWidth - radius},${fixedY + fixedHeight}
          L${barX + radius},${fixedY + fixedHeight}
          A${radius},${radius} 0 0 1 ${barX},${fixedY + fixedHeight - radius}
          Z
        `}
        fill="#F5F5F5"
      />
      {/* Value capsule (white or orange, height based on value) */}
      <path
        d={`
          M${barX},${valueY + radius}
          A${radius},${radius} 0 0 1 ${barX + radius},${valueY}
          L${barX + barWidth - radius},${valueY}
          A${radius},${radius} 0 0 1 ${barX + barWidth},${valueY + radius}
          L${barX + barWidth},${fixedY + fixedHeight - radius}
          A${radius},${radius} 0 0 1 ${barX + barWidth - radius},${fixedY + fixedHeight}
          L${barX + radius},${fixedY + fixedHeight}
          A${radius},${radius} 0 0 1 ${barX},${fixedY + fixedHeight - radius}
          Z
        `}
        fill={payload.time === "Jun" ? "#FF4405" : "#FFFFFF"}
      />
      {/* Month label with circular background */}
      <g transform={`translate(${barX + barWidth/2}, ${fixedY + fixedHeight - 25})`}>
        <circle
          cx="0"
          cy="0"
          r={circleRadius}
          fill={payload.time === "Jun" ? "#FFFFFF" : "#F5F5F5"}
        />
        <text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#666666"
          fontSize="11"
          fontFamily="sans-serif"
          style={{
            userSelect: "none",
            fontWeight: 500
          }}
        >
          {payload.time}
        </text>
      </g>
      {/* Permanent tooltip for June showing 269 */}
      {payload.time === "Jun" && (
        <g transform={`translate(${barX + barWidth/2}, ${fixedY - 25})`}>
          <rect
            x={-circleRadius - 2}
            y="-10"
            width={circleRadius * 2 + 4}
            height="20"
            rx="10"
            ry="10"
            fill="#000000"
          />
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFFFFF"
            fontSize="11"
            fontFamily="sans-serif"
            style={{
              fontWeight: 500
            }}
          >
            {payload.orders}
          </text>
        </g>
      )}
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  // Don't show hover tooltip since we're showing it in the bar component
  return null;
};

// Custom tick component for XAxis
const CustomTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y + 10})`}>
      <text
        x={0}
        y={0}
        dy={0}
        textAnchor="middle"
        fill="#666666"
        fontSize="12"
        fontFamily="sans-serif"
        className="recharts-cartesian-axis-tick-value"
      >
        {payload.value}
      </text>
    </g>
  );
};

export function CompletedOrdersChart({ data = mockData, className }: CompletedOrdersChartProps) {
  // Calculate the maximum value for scaling
  const maxValue = useMemo(() => Math.max(...data.map(item => item.orders)), [data]);

  const chartConfig = useMemo(
    () => ({
      bar: {
        color: 'var(--brand-background)',
      },
    }),
    []
  );

  return (
    <div className={cn("bg-white-60 rounded-3 p-4", className)}>
      <h3 className={cn(fontTitle2, "mb-4")}>Completed Orders</h3>
      <div className="h-[300px]">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 40, right: 30, left: 0, bottom: 5 }}>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={false}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis hide />
              <Tooltip
                content={<CustomTooltip />}
                cursor={false}
              />
              <Bar
                dataKey="orders"
                shape={<CustomBar maxValue={maxValue} />}
                activeBar={<CustomBar maxValue={maxValue} isActive={true} />}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
} 