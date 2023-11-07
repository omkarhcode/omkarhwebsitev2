import Head from "next/head";
import Image from "next/image";
import PageLayout from "@/components/layouts/PageLayout";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Section1 from "@/components/sections/1/section1";
import Section2 from "@/components/sections/2/section2";
import TechnologiesSection from "@/components/sections/3/technologies";
import PortfolioSection from "@/components/sections/4/portfolio";

export default function Home() {
  return (
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
  );
}
