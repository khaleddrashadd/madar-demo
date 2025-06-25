const CustomTooltip = ({
  active,
  payload,
  showKey = true,
  customData,
  titleKey,
  dir = 'rtl',
  sortedByFn,
}) => {
  if (active && payload && payload.length) {
    const data = customData && customData.length ? customData : payload;
    if (sortedByFn) {
      // data.push(data.shift());
      sortedByFn(data);
    }
    return (
      <div className="bg-white p-2 border rounded shadow-lg">
        {data.map((entry, index) => (
          <div
            className="flex items-center gap-1"
            dir={dir}
            key={index}
            style={{ color: entry.color }}
          >
            {showKey ? (
              <span>{entry.name}:</span>
            ) : titleKey ? (
              <span>{titleKey}:</span>
            ) : null}
            <span>{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
