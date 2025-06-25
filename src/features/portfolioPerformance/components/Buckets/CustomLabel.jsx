const CustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  value,
  color,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  if (value < 1) return null;

  // Calculate base positions
  const cos = Math.cos(-midAngle * RADIAN);
  const sin = Math.sin(-midAngle * RADIAN);

  // Determine line length based on index (alternating long and short)
  const lineLength = index % 2 === 0 ? 15 : 7; // Short vs tall line

  // Starting point (from the pie)
  const sx = cx + (outerRadius + 5) * cos;
  const sy = cy + (outerRadius + 5) * sin;

  // Middle point (breakpoint for the line)
  const mx = cx + (outerRadius + lineLength) * cos;
  const my = cy + (outerRadius + lineLength) * sin;

  // Determine text anchor and horizontal direction
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const horizontalDirection = cos >= 0 ? 1 : -1;

  // Apply alternating vertical offset
  const verticalOffset = getStaggeredOffset(index);

  // End point (where the label is)
  const ex = mx + horizontalDirection * 10; // Horizontal extension
  const ey = my + verticalOffset; // Apply vertical offset here

  return (
    <g>
      {/* First segment: from pie to breakpoint */}
      <line
        x1={sx}
        y1={sy}
        x2={mx}
        y2={my}
        stroke={color}
        strokeWidth={1}
        strokeDasharray="3,3"
      />

      {/* Second segment: horizontal break creating space */}
      <line
        x1={mx}
        y1={my}
        x2={ex}
        y2={ey}
        stroke={color}
        strokeWidth={1}
        strokeDasharray="3,3"
      />

      {/* Label */}
      <text
        x={ex + horizontalDirection * 5} // Add a little extra space
        y={ey}
        textAnchor={textAnchor}
        fill={color}
        dominantBaseline="middle"
        className="text-sm font-semibold"
        transform={`rotate(${20}, ${ex + horizontalDirection * 5}, ${ey})`}
      >
        {`${value.toFixed(2)}%`}
      </text>
    </g>
  );
};

// Helper function to create staggered (alternating up/down) offset pattern
const getStaggeredOffset = (index) => {
  // Simple alternating pattern: even indices go up, odd indices go down
  const direction = index % 2 === 0 ? -1 : 1;
  const magnitude = 5; // How far to offset each label

  return direction * magnitude;
};

export default CustomLabel;
