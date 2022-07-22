import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Container } from "../styles/utils";
import Logo from "../assets/logo.png";

const Footer: NextPage = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
            <Image src={Logo} width={130} height={60} alt="logo" />
        </div>
        <Contact>
          Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 -
          imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Florianópolis/SC
        </Contact>
        <SocialNetworksList>
          <li>
            <SocialNetworkIcon icon={faFacebookSquare} />
          </li>
          <li>
            <SocialNetworkIcon icon={faInstagram} />
          </li>
          <li>
            <SocialNetworkIcon icon={faYoutube} />
          </li>
        </SocialNetworksList>
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100vw;
  height: 12.5rem;
  background-color: ${({ theme }) => theme.colors.backfooter};
`;

const FooterContainer = styled.div`
  ${Container};
  display: grid;
  grid-template-columns: 130px auto 130px;
  padding-top: 2.5rem;
`;

const Contact = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  text-align: center;
  margin-top: 8.125rem;
`;

const SocialNetworksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
`;

const SocialNetworkIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.875rem;
`;

export default Footer;
