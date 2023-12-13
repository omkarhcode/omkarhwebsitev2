import Head from "next/head";
import Image from "next/image";
import PageLayout from "@/components/layouts/PageLayout";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Section1 from "@/components/sections/1/section1";
import Section2 from "@/components/sections/2/section2";
import TechnologiesSection from "@/components/sections/3/technologies";
import PortfolioSection from "@/components/sections/4/portfolio";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Versatile Full Stack Developer | Crafting Robust Backends, Seamless Frontend Experiences, and Innovative Mobile Apps"
        description="Explore the world of a seasoned Full Stack Developer with expertise in crafting robust backends, seamless frontend experiences, and innovative mobile apps. From dynamic QR codes to FinTech solutions and location-based geofencing e-commerce apps, my portfolio showcases a versatile range of projects across diverse industries. Specializing in technologies like PostgreSQL, NestJS, NextJS, and Flutter, I bring concepts to fruition with a commitment to ongoing learning and adaptability."
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend development, Backend development, Web development, Database management, Server-side scripting, Client-side scripting, API integration, User experience (UX), User interface (UI), Responsive design, Version control, Agile development, DevOps, Cross-functional teams, Code optimization, Cloud computing, Software architecture, Frameworks (e.g., React, Angular, Django), RESTful APIs, Mobile application development, Testing (unit testing, integration testing), Continuous integration/continuous deployment (CI/CD), Security protocols, Problem-solving skills",
          },
        ]}
        openGraph={{
          url: "https://www.omkarh.fyi/",
          title:
            "Full Stack and Generative AI Expert | Transforming Ideas into Impactful Digital Solutions",
          type: "website",
          description:
            "Immerse yourself in the expertise of a Full Stack and Generative AI Expert. With a profound understanding of web application architecture, my portfolio spans diverse industries, including eCommerce, fintech, and automotive. Witness the impact of projects like Uber-style rental apps, FinTech solutions, and intuitive geofencing e-commerce applications. Proficient in technologies such as JavaScript, TypeScript, Next.js, Flutter, and more, I specialize in providing versatile solutions for various digital requirements.",
          images: [
            {
              url: "https://www.omkarh.fyi/omkarh-portfolio-og.jpg",
              width: 1200,
              height: 630,
              alt: "OmkarH Portfolio",
              type: "image/jpeg",
            },
          ],
          siteName: "OmkarH Portfolio",
        }}
        twitter={{
          site: "@OHatalkar",
          cardType: "summary_large_image",
        }}
      />
      <PageLayout>
        {/* Section 1 Start */}

        <Section1 />
        <Spacer m={"40px"} />
        <Section2 />
        <Spacer m={"60px"} />
        <TechnologiesSection />
        <Spacer m={"60px"} />
        <PortfolioSection />

        {/* Section 1 End */}
      </PageLayout>
    </>
  );
}
