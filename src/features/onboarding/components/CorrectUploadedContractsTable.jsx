import { Button } from '@/components/ui/button';
import UploadedContractsTable from './UploadedContractsTable';
import { Badge } from '@/components/ui/badge';
import { DownloadIcon, Eye } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import Pagination from '@/components/Pagination';

const CorrectUploadedContractsTable = ({
  data,
  onChangePageNumber,
  onChangePageSize,
  isLoading,
  handleExportContracts,
  isFileLoading,
  filterData,
  pagination,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="mt-6 h-fit bg-white">
      <CardHeader className="px-4 py-4 bg-white">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <div className=" flex items-center gap-4">
            <h2 className="text-lg font-semibold">العقود المرفوعة</h2>
            <Button
              disabled={isFileLoading}
              onClick={() =>
                handleExportContracts({
                  ...filterData,
                  ...pagination,
                })
              }
              variant="outline"
              className="border-primary-500 hover:bg-primary-50/50 text-primary-500 px-3"
            >
              <DownloadIcon />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full px-4">
          <div className="rounded-xl border">
            <UploadedContractsTable
              data={data}
              isLoading={isLoading}
              renderActions={(contractNumber) => (
                <div className="flex items-center gap-3 justify-center">
                  <Button
                    variant="ghost"
                    className="p-0 h-fit"
                    onClick={() =>
                      navigate(`/services/uploaded-contracts/${contractNumber}`)
                    }
                  >
                    <Badge
                      variant="wait"
                      className="border-none h-8 w-8 flex items-center justify-center rounded-md"
                    >
                      <Eye className="w-4 h-4 text-extended-500" />
                    </Badge>
                  </Button>
                  {/* <Button
                    variant="ghost"
                    className="p-0 h-fit"
                    onClick={() => console.log(data)}
                  >
                    <Badge className="border-none h-8 w-8 flex items-center justify-center rounded-md">
                      <Pencil className="w-4 h-4" />
                    </Badge>
                  </Button> */}
                </div>
              )}
            />
          </div>
          <Pagination
            currentPage={data?.pageNumber}
            pageSize={data?.pageSize}
            totalPages={data?.totalPages}
            totalItems={data?.totalCount}
            onPageChange={onChangePageNumber}
            onPageSizeChange={onChangePageSize}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default CorrectUploadedContractsTable;
