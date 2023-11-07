import {
  Box,
  Heading,
  Text,
  Link,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  CardFooter,
  Spacer,
} from "@chakra-ui/react";

const ProjectItem = ({
  title,
  objective,
  role,
  approach,
  technologyStack,
  link,
  borderBottomColor,
}: any) => (
  <Card
    boxShadow="md"
    borderRadius="20px"
    bgColor={"black2"}
    h={"100%"}
    _hover={{
      background: `linear-gradient(270deg, #1a1a1a 99.1%, ${borderBottomColor} 100%)`,
    }}
    className="portfolio-card"
  >
    <CardHeader pb={"0"}>
      <Heading
        as="h3"
        fontSize={{ base: "20px", sm: "22px" }}
        lineHeight={{ base: "28px", sm: "36px" }}
        fontWeight={"500"}
        letterSpacing={0.01}
        color={"white"}
        borderBottomColor={borderBottomColor}
        borderBottomWidth={"4px"}
        borderBottomStyle={"double"}
        width={"fit-content"}
      >
        {title}
      </Heading>
    </CardHeader>
    <CardBody pb={"0"}>
      <Stack
        divider={<StackDivider borderColor="#a1a1a1" w={"90%"} />}
        spacing="4"
      >
        <Box>
          <Text className="sub-title">Objective:</Text>
          <Spacer pb={"5px"} />
          <Text className="sub-text">{objective}</Text>
        </Box>
        <Box>
          <Text className="sub-title">Role and Responsibilities:</Text>
          <Spacer pb={"5px"} />
          <Text className="sub-text">{role}</Text>
        </Box>
        <Box>
          <Text className="sub-title">Approach & Strategy:</Text>
          <Spacer pb={"5px"} />
          <Text className="sub-text">{approach}</Text>
        </Box>

        {technologyStack && (
          <Box>
            <Text className="sub-title">Technology Stack:</Text>
            <Spacer pb={"5px"} />
            <Text className="sub-text">{technologyStack}</Text>
          </Box>
        )}
      </Stack>
    </CardBody>
    <CardFooter>
      {link && (
        <Link
          href={link}
          isExternal
          color={borderBottomColor}
          fontSize="medium"
        >
          {link}
        </Link>
      )}
    </CardFooter>
  </Card>
);

export default ProjectItem;
