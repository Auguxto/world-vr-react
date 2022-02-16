import Head from 'next/head';
import {
  Container,
  Header,
  Logo,
  Navigation,
  NavItem,
  Signup,
  Overview,
  ODescription,
  OBanner,
  Banner,
  Title,
  TitlePrimary,
  Description,
  Features,
  Feature,
  FIcon,
  FName
} from './styles';

const Home = () => {
  return (
    <>
      <Head>
        <title>Explore the fascinating world of VR</title>
      </Head>
      <Container>
        <Header>
          <Logo src="/logo.png" width={43} height={43} />
          <Navigation>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/about">About us</NavItem>
            <NavItem href="/contact">Contact us</NavItem>
          </Navigation>
          <Signup href="/signup">signup</Signup>
        </Header>
        <Overview>
          <ODescription>
            <Title>
              <TitlePrimary>Explore</TitlePrimary> the fascinating
              <br /> world of VR
            </Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
              ac ipsum sed rhoncus. Nam euismod auctor ipsum. Etiam interdum
              nulla neque, eu elementum arcu fermentum vel.
            </Description>
          </ODescription>
          <OBanner>
            <Banner src="/robo.png" width={716} height={597} />
          </OBanner>
        </Overview>
        <Features>
          <Feature>
            <FIcon src="/icons/vr.png" width={40} height={40} />
            <FName>Experience the world through VR glasses</FName>
          </Feature>
          <Feature>
            <FIcon src="/icons/360.png" width={40} height={40} />
            <FName>View all your surrounding with 360</FName>
          </Feature>
          <Feature>
            <FIcon src="/icons/control.png" width={40} height={40} />
            <FName>Incredible gaming experience</FName>
          </Feature>
          <Feature>
            <FIcon src="/icons/money.png" width={40} height={40} />
            <FName>Making meetings and tours easier</FName>
          </Feature>
        </Features>
      </Container>
    </>
  );
};

export default Home;
