import NextLink from "next/link";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Kbd,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  chakra,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import router from "next/router";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Nav - Start */}
      <chakra.header id="header">
        <Box
          w="100%"
          // background="whiteAlpha.100"
          background="blackAlpha.100"
          backdropFilter={"blur(40px)"}
          position="fixed"
          zIndex="999"
          boxShadow="sm"
          px={{
            base: "20px",
            sm: "50px",
            md: "180px",
            lg: "80px",
            xl: "120px",
            "2xl": "180px",
          }}
        >
          <HStack h={20} align="center" justify="space-between">
            <Box>
              <Link
                as={NextLink}
                href="/"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <HStack alignItems="center" spacing="10px">
                  <Text
                    display="inline-block"
                    color={"white"}
                    fontWeight={500}
                    fontSize={{ base: "22px", sm: "26px", md: "26px" }}
                    lineHeight={"30px"}
                  >
                    OmkarH{" "}
                    <Kbd
                      color={"whiteAlpha.600"}
                      background={"black2"}
                      py={{ base: "3px", sm: "5px" }}
                      px={{ base: "5px", sm: "8px" }}
                      fontSize={{ base: "10px", sm: "12px" }}
                      fontWeight={"200"}
                      letterSpacing={"0.5px"}
                      position={"relative"}
                      top={"-10px"}
                      borderColor={"whiteAlpha.400"}
                    >
                      Portfolio
                    </Kbd>
                  </Text>
                </HStack>
              </Link>
            </Box>
            <Spacer />
            <HStack
              as="nav"
              spacing={{ base: "24px", xl: "22px" }}
              display={{ base: "none", lg: "flex" }}
              // mr={{ base: "24px", xl: "42px" }}
            >
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                href="#about"
              >
                about me.
              </Link>
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                href="#tech"
              >
                tech.
              </Link>
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                href="#portfolio"
              >
                portfolio.
              </Link>
              <Link
                as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                href="#contact"
              >
                contact.
              </Link>
            </HStack>
            <HStack
              as="nav"
              spacing={{ base: "24px", xl: "22px" }}
              display={{ base: "flex", lg: "none" }}
            >
              <Menu autoSelect={false}>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  // color={"#c1c1c1"}
                />
                <MenuList className="mobile-menu-list">
                  <MenuItem as="a" href="#home" className="mobile-menu-item">
                    home.
                  </MenuItem>
                  <MenuItem as="a" href="#about" className="mobile-menu-item">
                    about me.
                  </MenuItem>
                  <MenuItem as="a" href="#tech" className="mobile-menu-item">
                    tech.
                  </MenuItem>
                  <MenuItem
                    as="a"
                    href="#portfolio"
                    className="mobile-menu-item"
                  >
                    portfolio.
                  </MenuItem>
                  <MenuItem as="a" href="#contact" className="mobile-menu-item">
                    contact.
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </Box>
      </chakra.header>
      {/* Nav - end */}

      {/* Drawer Start  */}
      <Flex zIndex="3" display={{ base: "flex", lg: "none" }}>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size={"full"}
        >
          <DrawerOverlay />
          <DrawerContent background="white">
            <Button
              position="absolute"
              top="32px"
              right="32px"
              variant="unstyled"
              p="0"
              onClick={onClose}
              _focus={{
                boxShadow: "none",
              }}
              _hover={{
                bg: "transparent",
              }}
            >
              <CloseIcon boxSize="17px" color={"primary"} />{" "}
              {/* Adjust the boxSize as needed */}
            </Button>
            {/* <DrawerCloseButton /> */}
            <DrawerBody px="32px">
              <Flex
                as="nav"
                direction="column"
                justifyContent="center"
                alignItems="center"
                height="full"
              >
                <Link
                  // as={NextLink}
                  color="primary"
                  fontWeight="nav-link-mobile"
                  fontSize="nav-link-mobile"
                  lineHeight="nav-link-mobile"
                  py={"32px"}
                  w={"100%"}
                  textAlign={"center"}
                  href="/#home"
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={(e) => {
                    onClose();
                    e.preventDefault();
                    router.push("/").then(() => {
                      const yOffset = 0; // Adjust this value for your offset
                      const element = document.getElementById("home");
                      if (element) {
                        const y =
                          element.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    });
                  }}
                >
                  Home
                </Link>
                <Divider borderColor={"secondary"} />
                <Link
                  as={NextLink}
                  color="primary"
                  fontWeight="nav-link-mobile"
                  fontSize="nav-link-mobile"
                  lineHeight="nav-link-mobile"
                  py={"32px"}
                  w={"100%"}
                  textAlign={"center"}
                  href="/about"
                  _hover={{
                    textDecoration: "none",
                  }}
                  // onClick={() => router.push("/about")}
                  onClick={(e) => {
                    onClose();
                    e.preventDefault();
                    router.push("/about");
                  }}
                >
                  About
                </Link>

                <Divider borderColor={"secondary"} />

                <Link
                  as={NextLink}
                  color="primary"
                  fontWeight="nav-link-mobile"
                  fontSize="nav-link-mobile"
                  lineHeight="nav-link-mobile"
                  py={"32px"}
                  w={"100%"}
                  textAlign={"center"}
                  href="/services"
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={(e) => {
                    onClose();
                    e.preventDefault();
                    router.push("/services");
                  }}
                >
                  Services
                </Link>

                <Divider borderColor={"secondary"} />

                <Link
                  // as={NextLink}
                  color="primary"
                  fontWeight="nav-link-mobile"
                  fontSize="nav-link-mobile"
                  lineHeight="nav-link-mobile"
                  py={"32px"}
                  w={"100%"}
                  textAlign={"center"}
                  href="/#process"
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={(e) => {
                    onClose();
                    e.preventDefault();
                    router.push("/").then(() => {
                      const yOffset = -100; // Adjust this value for your offset
                      const element = document.getElementById("process");
                      if (element) {
                        const y =
                          element.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    });
                  }}
                >
                  Process
                </Link>

                <Divider borderColor={"secondary"} />

                <Link
                  as={NextLink}
                  color="primary"
                  fontWeight="nav-link-mobile"
                  fontSize="nav-link-mobile"
                  lineHeight="nav-link-mobile"
                  py={"32px"}
                  w={"100%"}
                  textAlign={"center"}
                  href="/#blogs"
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={(e) => {
                    onClose();
                    e.preventDefault();
                    router.push("/").then(() => {
                      const yOffset = -100; // Adjust this value for your offset
                      const element = document.getElementById("blogs");
                      if (element) {
                        const y =
                          element.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    });
                  }}
                >
                  Blogs
                </Link>
                <Link
                  as={NextLink}
                  width={"full"}
                  backgroundColor="primary"
                  color="secondary"
                  fontSize="nav-button-desktop"
                  lineHeight="nav-button-desktop"
                  fontWeight="nav-button-desktop"
                  mt={"30px"}
                  py={"20px"}
                  // mx={"32px"}
                  textAlign={"center"}
                  _hover={{
                    backgroundColor: "secondary",
                    color: "primary",
                  }}
                  borderRadius={0}
                  href="#get-in-touch"
                  onClick={(e) => {
                    onClose();
                    e.preventDefault();
                    const yOffset = -100; // Adjust this value for your offset
                    const element = document.getElementById("get-in-touch");
                    if (element) {
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  Get in touch
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      {/* Drawer end  */}
    </>
  );
};

export default Header;
