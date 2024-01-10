import NewTourPageComp from '@/components/NewTourPage';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

const NewTourPage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
  <NewTourPageComp />
    </HydrationBoundary>
  );
};
export default NewTourPage;