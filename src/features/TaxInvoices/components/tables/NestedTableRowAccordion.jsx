import { TableCell, TableRow } from '@/components/ui/table';
import TablePortfolios from './TablePortfolios';

const NestedTableRowAccordion = ({ data, tableClassName }) => {
  return (
    <TableRow>
      <TableCell className=" p-0 " colSpan={7}>
        <TablePortfolios
          data={data}
          classNames="border-0"
          tableClassName={tableClassName}
        />
      </TableCell>
    </TableRow>
  );
};

export default NestedTableRowAccordion;
