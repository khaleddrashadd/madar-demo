import { Button } from '@/components/ui/button';
import UploadedContractsTable from './UploadedContractsTable';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  ClockFading,
  DownloadIcon,
  Eye,
  Pencil,
  ShieldCheck,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import Pagination from '@/components/Pagination';
import { useState } from 'react';

const ManualUploadedContractsTable = ({
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
  const [selectedContracts, setSelectedContracts] = useState([]);

  const selectedContractsObj = data?.items?.filter((contract) =>
    selectedContracts.includes(contract.contractNumber)
  );

  const hasVerifiedContracts = selectedContractsObj?.some(
    (contract) => contract.contractStatusId === 'Verified'
  );

  const hasPendingVerificationContracts = selectedContractsObj?.some(
    (contract) => contract.contractStatusId === 'PendingVerification'
  );

  return (
    <Card className="mt-6 h-fit bg-white">
      <CardHeader className="px-4 py-4 bg-white">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className=" flex items-center gap-4">
              <h2 className="text-lg font-semibold">العقود المرفوعة يدويا</h2>
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
            <div className="flex items-center gap-2">
              <Button
                disabled={!hasPendingVerificationContracts}
                variant="outline"
                className="border-secondary-400 text-secondary-400 hover:bg-secondary-500/5"
              >
                <Check className="w-4 h-4" />
                التحقق من الكل
              </Button>
              <Button
                disabled={!hasVerifiedContracts}
                className="border-secondary-400"
                variant="secondary"
              >
                <ShieldCheck />
                تفعيل الكل
              </Button>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full px-4">
          <div className="rounded-xl border">
            <UploadedContractsTable
              selectedContracts={selectedContracts}
              setSelectedContracts={setSelectedContracts}
              data={data}
              isLoading={isLoading}
              renderActions={(contractNumber, contractStatusId) => (
                <div className="flex items-center gap-3 justify-center">
                  {contractStatusId === 'Verified' && (
                    <Button
                      variant="secondary"
                      className=" border-secondary-400 hover:bg-secondary-400/95 h-fit"
                      onClick={() => {}}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      تفعيل
                    </Button>
                  )}
                  {contractStatusId === 'PendingVerification' && (
                    <Button
                      variant="outline"
                      className=" border-secondary-400 text-secondary-400 hover:bg-secondary-500/5 h-fit"
                      onClick={() => {}}
                    >
                      <Check className="w-4 h-4 text-secondary-400" />
                      تحقق
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    className="p-0 h-fit"
                    onClick={() => navigate(`/add-contracts/${contractNumber}`)}
                  >
                    <Badge
                      variant="wait"
                      className="border-none h-8 w-8 flex items-center justify-center rounded-md"
                    >
                      <Eye className="w-4 h-4 text-extended-500" />
                    </Badge>
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 h-fit"
                    onClick={() => {}}
                  >
                    <Badge className="border-none h-8 w-8 flex items-center justify-center rounded-md">
                      <Pencil className="w-4 h-4 text-primary-500" />
                    </Badge>
                  </Button>
                  <Button variant="ghost" className="p-0 h-fit">
                    <Badge className="bg-ivory-300 border-none h-8 w-8 flex items-center justify-center rounded-md">
                      <ClockFading className="w-4 h-4 text-ivory-900" />
                    </Badge>
                  </Button>
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
export default ManualUploadedContractsTable;
