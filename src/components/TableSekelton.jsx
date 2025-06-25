import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';

const TableSkeleton = ({ rows = 10 }) => {
  return (
    <Card className="w-full shadow-sm">
      <div className="rounded-md border">
        <Table dir="rtl">
          <TableHeader className="text-sm">
            <TableRow className="bg-primary-50">
              <TableHead className="text-center font-semibold">
                <Skeleton className="h-4 w-20 mx-auto" />
              </TableHead>
              <TableHead className="text-center font-semibold">
                <Skeleton className="h-4 w-20 mx-auto" />
              </TableHead>
              <TableHead className="text-center font-semibold">
                <Skeleton className="h-4 w-20 mx-auto" />
              </TableHead>
              <TableHead className="text-center font-semibold">
                <Skeleton className="h-4 w-24 mx-auto" />
              </TableHead>
              <TableHead className="text-center font-semibold">
                <Skeleton className="h-4 w-16 mx-auto" />
              </TableHead>
              <TableHead className="text-center font-semibold">
                <Skeleton className="h-4 w-24 mx-auto" />
              </TableHead>
              <TableHead className="text-center font-semibold">
                <Skeleton className="h-4 w-24 mx-auto" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: rows }).map((_, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">
                  <Skeleton className="h-4 w-32 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="h-4 w-20 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="h-4 w-32 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="h-4 w-24 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="h-4 w-24 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="h-4 w-24 mx-auto" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="h-4 w-24 mx-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default TableSkeleton;
