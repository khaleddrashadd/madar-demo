import { downloadFile } from '@/lib/utils';
import { getFileName } from '@/utils/getFileName';
import { useMutation } from '@tanstack/react-query';

const useMutationExportContracts = ({ mutationFn }) => {
  const { isPending: isContractsFileLoading, mutate: exportFile } = useMutation(
    {
      mutationFn: mutationFn,
      onSuccess: (res) => {
        const fileName = getFileName(res.headers['content-disposition']);
        downloadFile(res, fileName);
      },
    }
  );
  return {
    isContractsFileLoading,
    exportFile,
  };
};
export default useMutationExportContracts;
