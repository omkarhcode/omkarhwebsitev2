import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import ProjectItem from "@/components/elements/PortfolioItem";

const PortfolioSection = () => {
  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Flex
        direction={"column"}
        mb={"20px"}
        maxW={"750px"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Image
          src="/portfolio.svg"
          alt="technologies"
          boxSize={"60px"}
          mb={"10px"}
        />
        <Text
          as="h2"
          fontSize={{ base: "18px", sm: "22px" }}
          lineHeight={{ base: "26px", sm: "36px" }}
          fontWeight={"500"}
          letterSpacing={0.01}
          color={"white"}
          mb={"5px"}
        >
          PORTFOLIO
        </Text>
        {/* <Text
          fontSize={{ base: "18px", sm: "20px" }}
          lineHeight={{ base: "26px", sm: "28px" }}
          fontWeight={"500"}
          letterSpacing={"tighter"}
          color={"white"}
          mb="4"
        >
          Crafting Diverse Solutions, Uniting Technology and Innovation
        </Text> */}

        <Text
          fontSize={{ base: "18px", sm: "20px" }}
          lineHeight={{ base: "26px", sm: "28px" }}
          // fontWeight={"500"}
          // letterSpacing={"tighter"}
          color={"whiteAlpha.700"}
          mb="4"
        >
          My projects traverse various sectors, from eCommerce to Fintech,
          creating robust <span className="highlight-text">BACK-END</span>,
          <span className="highlight-text">FRONT-END</span>, and{" "}
          <span className="highlight-text">MOBILE-APP</span> solutions. I
          specialize in <span className="highlight-text">full deployment</span>,
          setting up <span className="highlight-text">CI/CD</span>, and ensuring
          secure
          <span className="highlight-text">SSL</span> configurations.
        </Text>
      </Flex>

      <Spacer p={"10px"} />
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="30px">
        <ProjectItem
          title="Baby Sure IVF"
          borderBottomColor="#214F9E"
          objective="Created a platform enabling users to directly connect with the center's receptionist through voice call from the website. Leveraged NestJs WebSockets for real-time communication"
          role="Developed the entire back-end API connected to both the website and its dashboard"
          approach="Implemented a range of back-end APIs and utilized RBAC for multiple user roles (ADMIN, RECEPTIONIST, USER). Incorporated email handling using Nodemailer for easy communication"
          link="https://www.babysureivf.com/"
        />
        <ProjectItem
          title="Slat Play - An OTT Platform"
          borderBottomColor="#BB2525"
          objective="Planned to deliver live/on-demand streaming services but didn't launch"
          role="Developed the entire back-end API"
          approach="Constructed back-end APIs linked to the website and its dashboard, implemented RBAC for ADMIN and USER roles, and established comprehensive relations between different tables for movie and web series information"
        />
        <ProjectItem
          title="Meat Wow - E-commerce Platform"
          borderBottomColor="#FF6969"
          objective="A multi-store e-commerce application with the unique feature of setting up location-based geofencing"
          role="Developed the entire back-end API"
          approach="Implemented RBAC and tackled the challenge of setting up location geofencing using MongoDB for geospatial data"
        />
        <ProjectItem
          title="Ride365"
          borderBottomColor="#FFA500"
          objective="Provided a transport solution catering to various travel requirements in India"
          role="Developed the entire back-end APIs"
          approach="Managed complex driver and agent authentication and approval processes. Established user-friendly ride booking systems and provided comprehensive admin dashboard metrics"
          link="https://www.ride365.in/"
        />
        <ProjectItem
          title="PopB"
          borderBottomColor="#00B8BC"
          objective="Developed a digital networking platform with unique features, including dynamic QR codes, customizable themes, domain name management, and analytics"
          role="Back-end development"
          approach="Utilized technologies like NextJs, TypeScript, and NestJs to create dynamic QR codes, theme customization, unique domain name/subdomain management, contact saving, and team management"
          technologyStack="Utilized NestJs, Typescript, NextJs, Prisma ORM, and hosted on Digital Ocean"
          link="https://www.popb.com/"
        />
        <ProjectItem
          title="Prompt Journey"
          borderBottomColor="#7421FB"
          objective="Created a platform offering prompts for creativity and productivity enhancement across various industries"
          role="Developed the entire back-end, Admin dashboard, and assisted with the front-end"
          approach="Focused on a user-centered approach, crafting prompts for different fields to spark innovative ideas and conducting iterative testing for a user-friendly interface"
          technologyStack="Utilized NestJs, Typescript, NextJs, and Prisma ORM, hosted on Railway.app for reliability and scalability"
          link="https://www.ride365.in/"
        />
      </SimpleGrid>
    </Flex>
  );
};

export default PortfolioSection;
