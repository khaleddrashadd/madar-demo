import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContractDataGridTitle = ({
  title,
  currentTab,
  handleNextTab,
  handlePrevTab,
  children,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-ivory-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-5">
          <Button
            onClick={handlePrevTab}
            variant="outline"
            className="rounded-full text-primary-500 px-2 aspect-square border-primary-500 hover:bg-primary-50/20"
            disabled={currentTab === 'basic'}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleNextTab}
            variant="outline"
            className="rounded-full text-primary-500 px-2 aspect-square border-primary-500 hover:bg-primary-50/20"
            disabled={currentTab === 'docs'}
          >
            <ChevronLeft className="h-4 w-4 flex-shrink-0" />
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};
export default ContractDataGridTitle;
