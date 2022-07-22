import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

import GRRecycle from "../../images/GRrecycle.png";
import GRHeart from "../../images/GRheart.png";
import GRLocation from "../../images/GRLocation.png";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`,
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
// const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc: GRRecycle,
      category: "   Close the gap & Save     ",
      title:
        " Our product makes waste recovery easier for all stakeholders, Recover all wastes and Reduce expenses for our customers      ",
      // url: "https://timerse.com",
    },
    {
      imageSrc: GRLocation,
      category: "transparency",
      title:
        " Gives access to everyone wanting to flip unwanted item in the market directly for Households and Businesses        ",
      // url: "https://reddit.com",
    },
    {
      imageSrc: GRHeart,
      category: "Easy to use      ",
      title:
        " A simple product that gives customers the ease they need in order to help manage waste and yield more value from their items.      ",
      // url: "https://timerse.com",
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Some Problems & Solutions</HeadingTitle>
          <HeadingDescription>
            Landfills, considered the last resort in the waste hierarchy,
            release powerful greenhouses gas linked to climate change.
          </HeadingDescription>
          <HeadingDescription>
            Some available method of waste disposal pose major security threat
            to our lives and property
          </HeadingDescription>
          <HeadingDescription>
            Many households are cost sensitive and always on the look to reduce
            cost while available alternatives are cumbersome to use
          </HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                {/* <Link href={post.url}>Read Post</Link> */}
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
