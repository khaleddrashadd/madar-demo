import { numberSeparator } from '@/utils/numberSeparator';
import { SaudiRiyal } from 'lucide-react';

const ContractDetailsAccordion = ({ data }) => {
  // const [selectedYear, setSelectedYear] = useState('2025');

  // const financialData = [
  //   {
  //     bucket: 'C',
  //     date: '2023-01-01',
  //   },
  //   {
  //     bucket: 'G',
  //     date: '2023-02-01',
  //   },
  //   {
  //     bucket: 'B1',
  //     date: '2023-03-01',
  //   },
  //   {
  //     bucket: 'B2',
  //     date: '2023-04-01',
  //   },
  //   {
  //     bucket: 'B3',
  //     date: '2023-05-01',
  //   },
  //   {
  //     bucket: 'B4',
  //     date: '2023-06-01',
  //   },
  //   {
  //     bucket: 'B5',
  //     date: '2023-07-01',
  //   },
  // ];

  // const timelineSteps = [
  //   { label: 'يناير' },
  //   { label: 'فبراير' },
  //   { label: 'مارس' },
  //   { label: 'أبريل' },
  //   { label: 'مايو' },
  //   { label: 'يونيو' },
  //   { label: 'يوليو' },
  // ];

  // const BUCKETSCOLORS = [
  //   { id: 1, name: 'C', color: '#00A98F' },
  //   { id: 2, name: 'G', color: '#C0C0C0' },
  //   { id: 3, name: 'B1', color: '#F4E13D' },
  //   { id: 4, name: 'B2', color: '#FFCB59' },
  //   { id: 5, name: 'B3', color: '#FFAE4C' },
  //   { id: 6, name: 'B4', color: '#F08747' },
  //   { id: 7, name: 'B5', color: '#F66143' },
  //   { id: 8, name: 'B6', color: '#F03C3C' },
  //   { id: 9, name: 'W', color: '#DA0000' },
  //   { id: 10, name: 'Cl', color: '#626262' },
  // ];
  // const progressClasses = [
  //   'after:w-0',
  //   'after:w-1/12',
  //   'after:w-2/12',
  //   'after:w-3/12',
  //   'after:w-4/12',
  //   'after:w-5/12',
  //   'after:w-6/12',
  //   'after:w-7/12',
  //   'after:w-8/12',
  //   'after:w-9/12',
  //   'after:w-10/12',
  //   'after:w-11/12',
  // ];

  return (
    <div className="bg-white">
      <div className="w-full lg:max-w-[80%] p-4" dir="rtl">
        <div className="bg-primary-350 border border-primary-100 rounded-lg p-3">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-y-2 gap-x-4 items-center text-ivory-850">
            <span>قيمة أصل القرض</span>
            <div className="flex items-center gap-[6px]">
              {numberSeparator(data?.totalPayableAmount)}
              <span>
                <SaudiRiyal size={16} />
              </span>
            </div>

            <span>رأس المال المستحق</span>
            <div className="flex items-center gap-[6px]">
              {numberSeparator(data?.originalLoanAmount)}
              <span>
                <SaudiRiyal size={16} />
              </span>
            </div>

            <span>مالك المحفظة</span>
            <span>{data?.portfolioOriginator}</span>

            <span>الأيام المتأخرة</span>
            <span>{data?.overdueDays}</span>
            <span>المبلغ المستحق</span>
            <div className="flex items-center gap-[6px]">
              {numberSeparator(data?.dueAmount)}
              <span>
                <SaudiRiyal size={16} />
              </span>
            </div>
            <span>المحفظة</span>
            <span>{data?.portfolioNumber}</span>
          </div>
          {/* <div className="mt-4 bg-white">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="financial-timeline"
                className="border rounded-lg"
              >
                <AccordionHeader className="px-4 py-3">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <Select
                        value={selectedYear}
                        onValueChange={setSelectedYear}
                        dir="rtl"
                      >
                        <span className="text-sm font-semibold">
                          حالة العقد
                        </span>

                        <SelectTrigger className="w-20 h-8 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <AccordionTrigger
                      className="hover:no-underline p-0 justify-end"
                      accordionHeaderClassName="flex-grow"
                    ></AccordionTrigger>
                  </div>
                </AccordionHeader>
                <AccordionContent className="px-4 pb-4">
                  <Card>
                    <CardContent className="p-4">

                      <div
                        className={`relative before:absolute before:top-4 before:left-6 before:right-6 before:h-[6px] before:bg-ivory-300 before:rounded-full after:absolute after:top-4 after:left-6 after:right-6 after:h-[6px] after:bg-primary-500 after:rounded-full ${
                          progressClasses[financialData.length - 1]
                        } after:transition-all after:duration-300`}
                      >

                        <div className="grid grid-cols-12 gap-4 items-center">
                          {financialData.map((step, index) => (
                            <div key={index} className="flex flex-col">

                              <div
                                className={`w-8 h-8 flex items-center text-white font-semibold justify-center rounded-full relative z-10`}
                                style={{
                                  backgroundColor: BUCKETSCOLORS.find(
                                    (color) => color.name === step.bucket
                                  )?.color,
                                }}
                              >
                                {step.bucket}
                              </div>

                              <div className="text-xs text-gray-600 mt-2">
                                {timelineSteps[index].label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default ContractDetailsAccordion;
