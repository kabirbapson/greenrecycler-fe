import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";
// import TwoColumnWithInput from "./TwoColumnWithInput.js";
import * as redux from "react-redux";
import { logout } from "store/auth.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1610093674388-cee0337f2684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
// var my_element = document.getElementById("my_element");

export default () => {
  const scrollToRef = () => {
    const scroll = document.querySelector('#collectionForm')
    scroll.scrollIntoView({behavior: 'smooth', block: 'start'})
  };
  // const executeScroll = () => (
  //   <>
  //     <div>
  //       <a href="#collectionForm"></a>
  //     </div>
  //   </>
  // );
  const dispatch = redux.useDispatch();
  const { isAuthenticated } = redux.useSelector((state) => state.auth);

  const handleLogout = () => {
    console.log("i click");
    dispatch(logout());
  };

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Blog</NavLink>
      <NavLink href="#">Locations</NavLink>
      <NavLink href="#">Pricing</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      {isAuthenticated ? (
        <PrimaryLink style={{ backgroundColor: "red" }} onClick={handleLogout}>
          Log out
        </PrimaryLink>
      ) : (
        <>
          <PrimaryLink href="/login">Login</PrimaryLink>

          <PrimaryLink
            style={{ backgroundColor: "#FFCC00", marginLeft: "10px" }}
            href="/register"
          >
            Register
          </PrimaryLink>
        </>
      )}
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>Welcome to Green Recycler</Heading>
          <PrimaryAction onClick={scrollToRef}>
            {/* <a href="#collectionForm"> */}
            Submit Material
            {/* </a> */}
          </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
