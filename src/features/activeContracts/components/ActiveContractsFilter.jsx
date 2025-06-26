import { Card, CardContent } from '@/components/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileSearch, RefreshCcw, Search } from 'lucide-react';

const filterData = {
  legalOwners: [
    { id: '1', name: 'مالك 1' },
    { id: '2', name: 'مالك 2' },
    { id: '3', name: 'مالك 3' },
  ],
};

const ActiveContractsFilter = () => {
  return (
    <Card className="bg-white shadow-none">
      <CardContent className="py-3 px-4">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 items-center gap-3 flex-wrap">
            <div className="flex flex-col gap-2">
              <Label
                className="text-sm font-semibold text-gray-900"
                htmlFor="nid"
              >
                رقم الهوية
              </Label>
              <Input
                className="w-full focus-visible:ring-0 focus-visible:border-primary-500"
                placeholder="ادخل رقم الهوية"
                id="nid"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                className="text-sm font-semibold text-gray-900"
                htmlFor="contract-id"
              >
                رقم العقد
              </Label>
              <Input
                className="w-full focus-visible:ring-0 focus-visible:border-primary-500"
                placeholder="ادخل رقم العقد"
                id="contract-id"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-semibold text-gray-900">
                حالة العقد
              </Label>
              <Select dir="rtl">
                <SelectTrigger className="w-full border data-[state=open]:border-primary-500">
                  <SelectValue placeholder="اختر حالة العقد" />
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
                  <SelectValue placeholder="اختر مالك المحفظة" />
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
                منشئ المحفظة
              </Label>
              <Select dir="rtl">
                <SelectTrigger className="w-full border data-[state=open]:border-primary-500">
                  <SelectValue placeholder="اختر منشئ المحفظة" />
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
                رقم المحفظة
              </Label>
              <Select dir="rtl">
                <SelectTrigger className="w-full border data-[state=open]:border-primary-500">
                  <SelectValue placeholder="اختر رقم المحفظة" />
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
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Checkbox className="w-6 h-6 border-ivory-400" />
              <Label className="font-semibold">عرض العقود المتعثرة</Label>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="font-semibold border-primary-500 text-primary-500"
              >
                <RefreshCcw className="w-4 h-4" />
                إعادة تعيين
              </Button>
              <Button
                variant="outline"
                className="font-semibold border-primary-500 text-primary-500"
              >
                <FileSearch className="w-4 h-4" />
                بحث متقدم
              </Button>
              <Button className="hoverbg-primary-500/95 font-semibold">
                <Search className="w-4 h-4" />
                بحث
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ActiveContractsFilter;
