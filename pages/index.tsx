import Head from "next/head";
import Image from "next/image";
import PageLayout from "@/components/layouts/PageLayout";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <PageLayout>
      {/* Section 1 Start */}
      <Box>
        <Text
          color="white"
          fontWeight="900"
          fontSize={{
            base: "30px",
            md: "60px",
          }}
          lineHeight={{ base: "38px", md: "72px" }}
          // mb={"14px"}
          // my={"96"}
        >
          Unlock Your Productivity
        </Text>
      </Box>
      {/* Section 1 End */}
    </PageLayout>
  );
}
