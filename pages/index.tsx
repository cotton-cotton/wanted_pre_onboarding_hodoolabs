import type { NextPage } from 'next';
import CouponSection from '../components/CouponSection/CouponSection';
import DailySection from '../components/DailySection/DailySection';
import FeatureSection from '../components/FeatureSection/FeatureSection';

const Home: NextPage = () => {
  return (
    <>
      <DailySection />
      <FeatureSection />
      <CouponSection />
    </>
  );
};

export default Home;
