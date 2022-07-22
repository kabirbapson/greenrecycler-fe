import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import featuresPicOne from "../../images/GRpicker.png";
import featuresPicTwo from "../../images/GRStuff.png";
import featuresPicThree from "../../images/GRBrain.png";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;

// const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc: featuresPicOne,
      // subtitle: "Waste Management",
      title: "Proper Waste Management",
      description:
        " Proper waste management is essential today in every society. Due to an increase in population, the generation of waste is increasing at an astronomical rate day by day.  Moreover, the increase in waste generation is affecting the lives of many people when managed poorly.",
      titleA: "Poor Waste Management",
      DescriptionA: ` Poor waste management contributes to many known issues both globally and locally. 
        Without proper waste management activities, the massive production industries produce too much that will quickly destroy our environment. 
        Environmental issues such as air pollution, water pollution, land pollution, climate change, extreme weather, animal and marine death, among others directly affects many ecosystems and species. 
        Landfills, considered the last resort in the waste hierarchy, release methane, a very powerful greenhouse gas linked to climate change.
        `,
      url: "https://timerse.com",
    },

    {
      imageSrc: featuresPicTwo,
      // subtitle: "Free",
      titleA: "Values",
      DescriptionA: `The following values explain the core nature of Green Recycler.  `,
      // titleB: "Poor Waste Management",
      DescriptionB: `Leadership: 

      Green Recycler is committed to demonstrating its leadership in the circular economy industry and overall environmental stewardship through the use of proven  technology, and by establishing public-private partnerships and working cooperatively with individuals and our member communities. 
      
      Excellence: 
      
      All of us are focused on continuous improvement, on maintaining the highest standards for customer service, and on making every effort to improve the quality of the programs, services and facilities we manage. 
      
      Integrity: 
      Green Recycler has high ethical standards, and we work in a manner that is open, honest, accountable and transparent. 

      Passion:

      We all are passionate about many things, Serving our customers, improving the environment and the quality of life in Nigeria, and providing top-notch, cost-effective programs for all our  Customers.

       `,
      url: "https://timerse.com",
    },

    {
      imageSrc: featuresPicThree,
      // subtitle: "Exclusive",
      title: "Vision",
      description: `The Green Recycler vision statement is “Stop the Running Tap.” \n  This means we work to fulfill our mission without wasting environmental, financial or people resources. Establishing partnerships and maintaining sustainability are a primary way we can fulfill our vision. 
      `,

      url: "https://timerse.com",
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Green Recycler</HeadingTitle>
          <HeadingDescription>
            A Social enterprise focusing on non-hazardous waste recovery
            directly from households and businesses.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <description>{card.description}</description>
                <Title>{card.titleA}</Title>
                <description>{card.DescriptionA}</description>
                <Title>{card.titleB}</Title>
                <description>{card.DescriptionB}</description>
                {/* <Link href={card.url}>See Event Details</Link> */}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
