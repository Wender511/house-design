import { Metadata } from 'next';

import BarChart from 'components/admin/BarChart';
import Header from 'components/admin/Header';
import RecentOrders from 'components/admin/RecentOrders';
import TopCards from 'components/admin/TopCards';

export const metadata: Metadata = {
  title: 'Admin',
};
const getAnalyticsOrderData = async () => {
  const request = await fetch('https://house-design-kohl.vercel.app/api/analytics/order');
  const data = await request.json();
  return data;
};
export default async function Index() {
  const data = await getAnalyticsOrderData();
  return (
    <>
      <Header />
      <TopCards data={data} />
      <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3'>
        <BarChart />
        <RecentOrders data={data} />
      </div>
    </>
  );
}
