import UnauthorizedPage from '@/pages/Unauthorized';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/unauthorized')({
  component: UnauthorizedPage,
});
