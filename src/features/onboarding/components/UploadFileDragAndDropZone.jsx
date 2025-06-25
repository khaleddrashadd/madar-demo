const UploadFileDragAndDropZone = ({ dragActive, handleDrag, handleDrop }) => {
  return (
    <div
      className={`relative text-center transition-colors ${
        dragActive
          ? 'border-blue-500 bg-blue-50'
          : 'border-ivory-300 hover:border-gray-400'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex flex-col gap-1 items-center bg-ivory-100 py-6 px-4 border rounded-sm">
        <h2 className="font-semibold text-ivory-950">
          انقر هنا لإضافة الملف أو اسحب الملف هنا
        </h2>
        <div className="flex flex-col text-sm text-ivory-660 gap-1">
          <p>يمكنك إضافة ملف XLS or CSV</p>
          <p>حجم الملف يجب ألا يتخطى 25 ميجا بايت</p>
        </div>
      </div>
    </div>
  );
};
export default UploadFileDragAndDropZone;
