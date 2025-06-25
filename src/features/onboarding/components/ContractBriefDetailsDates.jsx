import DefaultDialog from '@/components/partials/dialogs/DeafultDialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { formatDate } from '@/lib/utils';
import {
  ArrowRight,
  Check,
  EllipsisVertical,
  Printer,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CONTRACTS_STATUS, BUCKET_STATUS } from '../constants/contractsStatus';

const ContractBriefDetailsDates = ({ data }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="cursor-pointer" onClick={() => navigate(-1)}>
          <ArrowRight className="font-bold h-6 w-6" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 text-sm text-ivory-650">
            <span>
              تم الإنشاء في {formatDate(data?.originationDate, 'DD/MM/YYYY')}
            </span>
            <span>مستحق في {formatDate(data?.dueDate, 'DD/MM/YYYY')}</span>
          </div>
          <div className="flex items-center gap-4 text-2xl text-ivory-950 font-bold">
            <span>#{data?.mortgageAccountNumber}</span>
            <div className="flex items-center gap-4">
              <Badge
                variant={CONTRACTS_STATUS[data?.contractStatusId]?.variant}
                className={CONTRACTS_STATUS[data?.contractStatusId]?.className}
              >
                <span>{data?.contractStatus}</span>
              </Badge>
              <Badge className={BUCKET_STATUS[data?.bucketStatusId]?.className}>
                <span className="rtl:pr-3">{data?.bucketStatus}</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="border-secondary-400 text-secondary-400 hover:bg-secondary-50/20"
        >
          <Check />
          <span>تحقق</span>
        </Button>
        {/* <Button
          variant="outline"
          className="border-primary-500 text-primary-500 hover:bg-primary-50/20"
        >
          <ListTodo />
          <span>تفقد السبب</span>
        </Button> */}
        {/* <Button
          variant="outline"
          className="h-fit border-primary-500 text-primary-500 hover:bg-primary-50/50"
          onClick={() => setReasonModalOpen(true)}
        >
          <ListTodo className="w-4 h-4" />
          تفقد السبب
        </Button> */}
        <DropdownMenu
          dir="rtl"
          onOpenChange={setIsDropdownOpen}
          open={isDropdownOpen}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-primary-500 text-primary-500 hover:bg-primary-50/20 px-2"
            >
              <EllipsisVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36">
            <DropdownMenuItem
              className="flex items-center gap-2 text-right"
              onClick={() => console.log('Print')}
            >
              <Printer className="h-4 w-4" />
              <span>طباعة</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setIsDeleteDialogOpen(true);
                setIsDropdownOpen(false);
              }}
              className="flex items-center gap-2 text-right text-red-600 focus:text-red-600"
            >
              <Trash2 className="h-4 w-4" />
              <span>حذف</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DefaultDialog open={isDeleteDialogOpen} headerless closeable={false}>
        <div className="flex flex-col justify-center items-center pt-4">
          <div className="p-8 rounded-full bg-[#FFEDED] mb-6">
            <Trash2 className="h-14 w-14 text-red-600" />
          </div>
          <h3 className="text-ivory-950 text-xl font-semibold">
            هل أنت متأكد أنك تريد حذف هذا العقد؟
          </h3>
        </div>
        <div className="flex items-center w-full gap-6">
          <Button
            onClick={() => setIsDeleteDialogOpen(false)}
            variant="outline"
            className="border-primary-500 text-primary-500 hover:bg-primary-50/50 flex-1"
          >
            لا
          </Button>
          <Button className="flex-1">نعم، حذف العقد</Button>
        </div>
      </DefaultDialog>
    </div>
  );
};
export default ContractBriefDetailsDates;
