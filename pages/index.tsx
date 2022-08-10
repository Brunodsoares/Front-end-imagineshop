import type { NextPage } from "next";
import styled from "styled-components";

import Banner from "../components/Banner";
import Products from "../components/Products";
import BannerImage from "../public/images/BANNER01.png";

const Home: NextPage = () => {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} heigth={325} />
      <Products products={[]} />
    </Main>
  );
};

const Main = styled.main`
  min-height: 47vh;

`;

export default Home;
