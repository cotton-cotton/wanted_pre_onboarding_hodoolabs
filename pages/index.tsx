import type { NextPage } from 'next';
import CouponSection from '../components/CouponSection/CouponSection';
import DailySection from '../components/DailySection/DailySection';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import ReviewSection from '../components/ReviewSection/ReviewSection';

const Home: NextPage = () => {
  return (
    <>
      <DailySection />
      <FeatureSection />
      <ReviewSection />
      <CouponSection />
    </>
  );
};

export default Home;
