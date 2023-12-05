import NextLink from "next/link";
import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Kbd,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Tooltip,
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
                // as={NextLink}
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
            <Tooltip
              label="My Resume"
              aria-label="My Resume"
              // hasArrow
              bg={"whiteAlpha.900"}
              color={"blackAlpha.600"}
              fontWeight={700}
              placement="left-end"
            >
              <a
                href={"https://www.omkarh.fyi/pdfs/Resume-Omkar-Hatalkar.pdf"}
                target="_blank"
              >
                <Box
                  // onMouseEnter={() => setHoverState(!hoverState)}
                  // onMouseLeave={() => setHoverState(!hoverState)}
                  // onTouchStart={() => setHoverState(!hoverState)}
                  // onTouchEnd={() => setHoverState(!hoverState)}
                  // bg={hoverState ? bgColor : "black2"}
                  borderRadius="20px"
                  transition="background-color 0.5s"
                  // _hover={{ bg: bgColor }}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  py={{ base: "20px", sm: "30px", lg: "25px" }}
                >
                  <Center height="100%">
                    <Image
                      src={"resume.svg"}
                      alt={"resume"}
                      transition="all 21s"
                      display="block"
                      mx="auto"
                      boxSize={{
                        base: "28px",
                        sm: "38px",
                        lg: "30px",
                        xl: "34px",
                        // "2xl": "40px",
                      }}
                    />
                  </Center>
                </Box>
              </a>
            </Tooltip>
            <HStack
              as="nav"
              spacing={{ base: "24px", xl: "22px" }}
              display={{ base: "none", lg: "flex" }}
              // mr={{ base: "24px", xl: "42px" }}
            >
              <Link
                // as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                transition={"color 0.5s, background 0.5s"}
                _hover={{
                  color: "black",
                  bg: "white",
                  textDecoration: "none",
                  transition: "color 0.5s, background 0.5s",
                }}
                _focus={{
                  outline: "none",
                }}
                href="#about"
              >
                about me.
              </Link>
              <Link
                // as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                transition={"color 0.5s, background 0.5s"}
                _hover={{
                  color: "black",
                  bg: "white",
                  textDecoration: "none",
                  transition: "color 0.5s, background 0.5s",
                }}
                _focus={{
                  outline: "none",
                }}
                href="#tech"
              >
                tech.
              </Link>
              <Link
                // as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                transition={"color 0.5s, background 0.5s"}
                _hover={{
                  color: "black",
                  bg: "white",
                  textDecoration: "none",
                  transition: "color 0.5s, background 0.5s",
                }}
                _focus={{
                  outline: "none",
                }}
                href="#portfolio"
              >
                portfolio.
              </Link>
              <Link
                // as={NextLink}
                color="white"
                fontWeight="400"
                fontSize="16px"
                background={"whiteAlpha.200"}
                borderRadius={"20px"}
                py={"5px"}
                px={"10px"}
                transition={"color 0.5s, background 0.5s"}
                _hover={{
                  color: "black",
                  bg: "white",
                  textDecoration: "none",
                  transition: "color 0.5s, background 0.5s",
                }}
                _focus={{
                  outline: "none",
                }}
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
                <MenuList
                  bgColor="#1a1a1a"
                  color={"whites"}
                  className="mobile-menu-list"
                >
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
    </>
  );
};

export default Header;
