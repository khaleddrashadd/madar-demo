const CustomPieTooltip = ({ active, payload, content }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow-lg flex items-center gap-1">
        <p className="text-sm" style={{ color: payload[0].payload.color }}>
          {content.props.label ? content.props.label : payload[0].name}:{' '}
          {content.props.valueKey
            ? payload[0].payload[content.props.valueKey]
            : payload[0].value}
        </p>
        {content.props.isPercentage && (
          <span style={{ color: payload[0].payload.color }}>%</span>
        )}
      </div>
    );
  }
  return null;
};
export default CustomPieTooltip;
