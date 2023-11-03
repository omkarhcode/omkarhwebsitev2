import Head from "next/head";
import Image from "next/image";
import PageLayout from "@/components/layouts/PageLayout";
import { Box, Flex, Text } from "@chakra-ui/react";
import Section1 from "@/components/sections/1/section1";

export default function Home() {
  return (
    <PageLayout>
      {/* Section 1 Start */}

      <Section1 />

      {/* Section 1 End */}
    </PageLayout>
  );
}
