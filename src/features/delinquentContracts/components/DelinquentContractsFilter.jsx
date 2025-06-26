import { Card, CardContent, CardHeader } from '@/components/card';
import DatePicker from '@/components/DatePicker';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RefreshCcw, Search } from 'lucide-react';

const filterData = {
  legalOwners: [
    { id: '1', name: 'مالك 1' },
    { id: '2', name: 'مالك 2' },
  ],
  portfolio: [
    { id: '1', name: 'محفظة 1' },
    { id: '2', name: 'محفظة 2' },
    { id: '3', name: 'محفظة 3' },
  ],
};

const DelinquentContractsFilter = () => {
  return (
    <Card className="shadow-none p-4 bg-white mb-4">
      <CardHeader className="pb-2">
        <h2 className="text-xl font-bold">تصنيف</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <DatePicker label="تاريخ" isRTL={true} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-gray-900">
              مالك المحفظة
            </Label>
            <Select dir="rtl">
              <SelectTrigger className="w-full border data-[state=open]:border-primary-500">
                <SelectValue placeholder="المحفظة" />
              </SelectTrigger>
              <SelectContent>
                {filterData?.legalOwners?.map((legalOwner) => (
                  <SelectItem key={legalOwner.id} value={legalOwner.id}>
                    {legalOwner.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold text-gray-900">
              مالك المحفظة
            </Label>
            <Select dir="rtl">
              <SelectTrigger className="w-full border data-[state=open]:border-primary-500">
                <SelectValue placeholder="المحفظة" />
              </SelectTrigger>
              <SelectContent>
                {filterData?.portfolio?.map((legalOwner) => (
                  <SelectItem key={legalOwner.id} value={legalOwner.id}>
                    {legalOwner.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-3">
          <Button
            variant="outline"
            className="hover:bg-primary-500/5 border-primary-500 text-primary-500"
          >
            <RefreshCcw className="w-4 h-4" />
            إعادة تعيين
          </Button>
          <Button>
            <Search />
            بحث
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default DelinquentContractsFilter;
