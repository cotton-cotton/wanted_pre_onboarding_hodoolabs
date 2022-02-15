import type { NextPage } from 'next';

import Main from '../components/Main/Main';
import Banner from '../components/Banner/Banner';
import LiveBookClass from '../components/LiveBookClass/LiveBookClass';
import ReadingClass from '../components/ReadingClass/RedingClass';
import SelectBooks from '../components/SelectBooks/SelectBooks';
import BookList from '../components/BookList/BookList';
import CouponSection from '../components/CouponSection/CouponSection';
import DailySection from '../components/DailySection/DailySection';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import ReviewSection from '../components/ReviewSection/ReviewSection';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <Banner />
      <LiveBookClass />
      <SelectBooks />
      <ReadingClass />
      <BookList />
      <DailySection />
      <FeatureSection />
      <ReviewSection />
      <CouponSection />
    </>
  );
};

export default Home;
