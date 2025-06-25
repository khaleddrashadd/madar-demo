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

export default ContractUploadPage;
