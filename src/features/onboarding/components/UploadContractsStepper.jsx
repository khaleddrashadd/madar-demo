import React from 'react';

const ContractUploadPage = ({
  steps = [],
  currentStep = 1,
  onStepClick,
  className,
}) => {
  return (
    <div className={`md:w-5/6 w-full ${className || ''}`}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index === currentStep - 1;
          const isCompleted = index < currentStep - 1;
          const isClickable = onStepClick && (isCompleted || isActive);

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors ${
                    isActive || isCompleted
                      ? 'border-primary-500 bg-primary-500 text-white'
                      : 'text-white bg-ivory-600'
                  } ${
                    isClickable ? 'cursor-pointer hover:border-primary-600' : ''
                  }`}
                  onClick={() => isClickable && onStepClick(index)}
                >
                  <span>{index + 1}</span>
                </div>

                <div className="mt-2 text-center">
                  <p
                    className={`text-sm font-semibold ${
                      isActive || isCompleted
                        ? 'text-primary-500'
                        : 'text-ivory-660'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              </div>

              {index < steps?.length - 1 && (
                <div className="flex-1">
                  <div
                    className={`h-0.5 transition-colors ${
                      index < currentStep - 1
                        ? 'bg-primary-500'
                        : 'bg-ivory-300'
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

// const ContractUploadPage = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [dragActive, setDragActive] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const steps = [
//     { id: 'step-1', title: 'رفع العقود' },
//     { id: 'step-2', title: 'جدول السداد' },
//     { id: 'step-3', title: 'جدول عمليات السداد' },
//   ];

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === 'dragenter' || e.type === 'dragover') {
//       setDragActive(true);
//     } else if (e.type === 'dragleave') {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);

//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       handleFiles(e.dataTransfer.files);
//     }
//   };

//   const handleChange = (e) => {
//     e.preventDefault();
//     if (e.target.files && e.target.files[0]) {
//       handleFiles(e.target.files);
//     }
//   };

//   const handleFiles = (files) => {
//     const newFiles = Array.from(files).map((file) => ({
//       id: Date.now() + Math.random(),
//       name: file.name,
//       size: file.size,
//       file: file,
//     }));
//     setUploadedFiles((prev) => [...prev, ...newFiles]);
//   };

//   const removeFile = (fileId) => {
//     setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
//   };

//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//   };

//   return (
//     <div className="min-h-screen bg-gray-50" dir="rtl">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200 px-6 py-4">
//         <div className="flex items-center justify-between">
//           <h1 className="text-xl font-semibold text-gray-900">إسناد المحاطة</h1>
//           <button className="text-ivory-660 hover:text-gray-600">
//             <X className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-6 py-8">
//         {/* Stepper */}
//         <div className="mb-12">
//           <Stepper
//             steps={steps}
//             currentStep={currentStep}
//             onStepClick={setCurrentStep}
//           />
//         </div>

//         {/* Upload Section */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
//           <div className="text-center mb-8">
//             <h2 className="text-lg font-medium text-gray-900 mb-2">
//               ملف العقود
//             </h2>
//             <p className="text-gray-600 mb-1">
//               اختار ملف برنامج العقود أو اسحبه الى المكان هنا
//             </p>
//             <p className="text-sm text-gray-500">
//               يجب أن يكال الملف من نوع CSV أو Excel
//             </p>
//             <p className="text-sm text-gray-500">
//               يجب ألا يتعدى حجم الملف 10 ميجا بايت
//             </p>
//           </div>

//           {/* Upload Area */}
//           <div
//             className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
//               dragActive
//                 ? 'border-blue-500 bg-blue-50'
//                 : 'border-ivory-300 hover:border-gray-400'
//             }`}
//             onDragEnter={handleDrag}
//             onDragLeave={handleDrag}
//             onDragOver={handleDrag}
//             onDrop={handleDrop}
//           >
//             <input
//               type="file"
//               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               multiple
//               accept=".csv,.xlsx,.xls"
//               onChange={handleChange}
//             />

//             <div className="flex flex-col items-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                 <Upload className="h-6 w-6 text-blue-600" />
//               </div>
//               <p className="text-blue-600 font-medium mb-1">تحميل ملف</p>
//               <p className="text-sm text-gray-500">CSV, Excel</p>
//             </div>
//           </div>

//           {/* Uploaded Files */}
//           {uploadedFiles.length > 0 && (
//             <div className="mt-6 space-y-3">
//               <h3 className="text-sm font-medium text-gray-900">
//                 الملفات المرفوعة:
//               </h3>
//               {uploadedFiles.map((file) => (
//                 <div
//                   key={file.id}
//                   className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
//                 >
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center ml-3">
//                       <Upload className="h-4 w-4 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-gray-900">
//                         {file.name}
//                       </p>
//                       <p className="text-xs text-gray-500">
//                         {formatFileSize(file.size)}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => removeFile(file.id)}
//                     className="text-ivory-660 hover:text-red-500 transition-colors"
//                   >
//                     <X className="h-4 w-4" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Footer Navigation */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
//         <div className="max-w-6xl mx-auto flex justify-between items-center">
//           <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
//             <ChevronLeft className="h-4 w-4 ml-2" />
//             التالي
//           </button>

//           <button className="text-gray-500 hover:text-gray-700 transition-colors">
//             إغلاق
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default ContractUploadPage;
