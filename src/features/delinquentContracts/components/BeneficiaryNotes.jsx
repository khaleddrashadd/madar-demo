import { Card, CardContent, CardHeader } from '@/components/card';
import { Input } from '@/components/ui/input';

import personPlaceholder from '@/assets/images/person-placeholder.png';

const BeneficiaryNotes = () => {
  return (
    <Card className="py-1 px-3  h-fit">
      <CardHeader>
        <div className="p-3 flex flex-col gap-2">
          <h4 className="text-xl font-bold">ملاحظات</h4>

          <div className="flex items-center gap-2">
            <img
              src={personPlaceholder}
              alt="person"
              className="w-11 h-11 rounded-full"
            />
            <Input
              className="rounded-md bg-ivory-200/50 py-4"
              placeholder="اكتب تعليق"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="border-0">
        <div className="flex flex-col">
          <div className="p-3 flex flex-col gap-2 border-b border-ivory-200">
            <div className="flex items-center gap-2">
              <img
                src={personPlaceholder}
                alt="person"
                className="w-11 h-11 rounded-full"
              />
              <div className="flex flex-col gap-1 text-sm">
                <h6 className="text-ivory-950 font-semibold">عمار السيد </h6>
                <p className="text-ivory-800">وعد بالسداد في يوم ٢٥ مايو</p>
              </div>
            </div>
            <span className="text-sm text-ivory-660">٢٥ مارس</span>
          </div>
          <div className="p-3 flex flex-col gap-2 border-b border-ivory-200">
            <div className="flex items-center gap-2">
              <img
                src={personPlaceholder}
                alt="person"
                className="w-11 h-11 rounded-full"
              />
              <div className="flex flex-col gap-1 text-sm">
                <h6 className="text-ivory-950 font-semibold">عمار السيد </h6>
                <p className="text-ivory-800">
                  طلب التاجيل ليوم الثلاثاء ١٢ فبرير
                </p>
              </div>
            </div>
            <span className="text-sm text-ivory-660">١٢ فبراير</span>
          </div>
          <div className="p-3 flex flex-col gap-2 border-b border-ivory-200">
            <div className="flex items-center gap-2">
              <img
                src={personPlaceholder}
                alt="person"
                className="w-11 h-11 rounded-full"
              />
              <div className="flex flex-col gap-1 text-sm">
                <h6 className="text-ivory-950 font-semibold">عمار السيد </h6>
                <p className="text-ivory-800">تعِثر و طلب تاجيل ليوم ٢٥ مارس</p>
              </div>
            </div>
            <span className="text-sm text-ivory-660">٧ يناير</span>
          </div>
        </div>
        <div className="py-4 px-3 text-sm text-ivory-800 font-semibold cursor-pointer">
          المزيد
        </div>
      </CardContent>
    </Card>
  );
};
export default BeneficiaryNotes;
