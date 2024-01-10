import TourPage from '@/components/TourPage';
import { getAllTours } from '@/utils/action';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

const AllToursPage = async () => {
  
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey:['tours'],
    queryFn: ()=>getAllTours()
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
<TourPage />
    </HydrationBoundary>
  );
};
export default AllToursPage;