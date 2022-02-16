import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;

  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;

  width: 100%;

  padding: 0 77px;

  align-items: center;
  justify-content: space-between;

  margin: 33px auto 0 auto;
`;

export const Logo = styled(Image)``;

export const Navigation = styled.div`
  display: flex;

  gap: 70px;
`;

export const NavItem = styled.a`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  text-decoration: none;

  color: ${(props) => props.theme.colors.text};
`;

export const Signup = styled.a`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  text-decoration: none;

  padding: 4px 14px;

  color: ${(props) => props.theme.colors.text};

  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 6px;
`;

export const Overview = styled.div`
  display: flex;

  width: 100%;

  align-items: center;

  margin-top: 60px;
  padding: 0 130px;
`;

export const ODescription = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`;

export const OBanner = styled.div`
  display: flex;
  flex: 1;
`;

export const Banner = styled(Image)``;

export const Title = styled.h1`
  font-size: 58px;
  line-height: 67px;

  color: ${(props) => props.theme.colors.text};
`;

export const TitlePrimary = styled.span`
  font-size: 58px;
  line-height: 67px;

  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.p`
  width: 70%;

  font-size: 14px;
  line-height: 17px;

  color: ${(props) => props.theme.colors.text};
`;

export const Features = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;

  width: 60%;
  height: 227px;

  margin: 0 auto;
  margin-top: 50px;

  background: rgba(62, 60, 60, 0.1);

  backdrop-filter: blur(30px);

  border-radius: 20px;
`;

export const Feature = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 24px;

  width: 200px;
  height: 200px;

  background: rgba(62, 60, 60, 0.1);

  backdrop-filter: blur(30px);

  border-radius: 20px;

  transition: all 0.5s;

  :hover {
    background: rgba(63, 81, 232, 0.3);
  }
`;

export const FIcon = styled(Image)``;

export const FName = styled.span`
  width: 160px;

  text-align: center;
  font-size: 18px;
  line-height: 21px;

  color: ${(props) => props.theme.colors.text};
`;
