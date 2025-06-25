import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Card from '@/features/statistics/components/Card';
import CardSkeleton from '@/features/statistics/components/CardSkeleton';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { initialCardsData } from '@/constants/statistics';
import { Loader2 } from 'lucide-react';
import { getStatsService } from '@/features/statistics/services/services';
import ErrorFallback from '@/features/contracts/components/ErrorFallback';
import Fallback from '@/components/Fallback';
import { useSelector } from 'react-redux';
import { getAdminLegalOwner } from '@/layouts/store/prevailageSlice';

const Statistics = () => {
  const [portfolioNumber, setPortfolioNumber] = useState(null);
  const selectedLegalOwner = useSelector(getAdminLegalOwner);

  const getStatsData = async () => {
    const response = await getStatsService({
      portfolioNumber,
      selectedLegalOwner,
    });
    const apiData = response.data.data;

    const updatedCardsData = initialCardsData.map((card) => {
      const key = Object.keys(card)[0];
      if (apiData[key]) {
        let content = apiData[key];

        return {
          [key]: {
            ...card[key],
            content,
          },
        };
      }
      return card;
    });

    return {
      cardsData: updatedCardsData,
      portfoliosData: apiData.portfoliosData,
    };
  };

  const {
    data: statsData,
    error,
    isLoading: statsLoading,
  } = useQuery({
    queryKey: ['contracts-statistics', portfolioNumber, selectedLegalOwner],
    queryFn: () => getStatsData(),
    placeholderData: keepPreviousData,
  });

  const handlePortfolioChange = (selectedId) => {
    setPortfolioNumber(selectedId);
  };
  if (error) {
    return (
      <Fallback
        title=" خطأ في تحميل البيانات"
        subtitle="حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى"
      />
    );
  }

  return (
    <div className="px-6 mt-4 z-20 ">
      {/*  */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-4">
        <h2 className=" font-bold text-2xl">الإحصائيات</h2>
        <div className=" flex flex-col gap-2 bg-primary-50 rounded-lg shadow-md p-3">
          <h3 className="title text-ivory-900 text-sm">المحفظة</h3>
          <Select onValueChange={handlePortfolioChange}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="الكل" />
            </SelectTrigger>

            <SelectContent>
              {statsLoading ? (
                <div className="flex justify-center items-center p-2">
                  <Loader2 className="h-4 w-4 animate-spin" /> {/* Spinner */}
                </div>
              ) : (
                <>
                  <SelectItem value={null} key="select-all">
                    الكل
                  </SelectItem>
                  {statsData?.portfoliosData?.length > 0
                    ? statsData?.portfoliosData?.map((item) => (
                        <SelectItem
                          value={item.portfolioNumber}
                          key={item.portfolioNumber}
                        >
                          {item.portfolioName}
                        </SelectItem>
                      ))
                    : null}
                </>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/*  */}
      <ErrorFallback>
        <div className="grid md:grid-cols-[repeat(2,1fr)] grid-cols-1 gap-4">
          {!statsLoading ? (
            <Card cardsData={statsData.cardsData} />
          ) : (
            <CardSkeleton />
          )}
        </div>
      </ErrorFallback>
    </div>
  );
};

export default Statistics;
