import type { NextPage } from 'next';
import styled from 'styled-components';
import Main from '../components/Main/Main';
import Banner from '../components/Banner/Banner';
import LiveBookClass from '../components/LiveBookClass/LiveBookClass';
import ReadingClass from '../components/ReadingClass/RedingClass';
import SelectBooks from '../components/SelectBooks/SelectBooks';
import BookList from '../components/BookList/BookList';

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <Banner />
      <LiveBookClass />
      <SelectBooks />
      <ReadingClass />
      <BookList />
    </>
  );
};

const Container = styled.div`
  width: 400px;
  background-color: red;
`;

export default Home;
