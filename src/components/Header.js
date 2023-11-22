import '../App.css'
import { NavLink, Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import {HamburgerIcon} from '@chakra-ui/icons'
import { Box, VStack, HStack, MenuDivider, Hide, Flex, Spacer, Menu, MenuItem, MenuButton, Show, MenuList, IconButton, Image, Container} from "@chakra-ui/react";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() =>{
    let prevScrollPos = window.scrollY

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const headerElement = headerRef.current
      if (!headerElement){
        return
      }
      if (prevScrollPos > currentScrollPos){
        headerElement.style.transform = 'translateY(0)'
      }else{
        headerElement.style.transform = 'translateY(-200px)'
      }
      prevScrollPos = currentScrollPos
    }
    window.addEventListener('scroll', handleScroll)
      return () => {
          window.removeEventListener('scroll', handleScroll)
      }
  }, [])
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
     <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration="0.3s"
      transitionTimingFunction="ease-in-out"
      bg="#fff"
    >
        <Container maxWidth="1280px">
        <nav className="navbar" aria-label="main navigation">
        <Flex
            px={16}
            py={4}
            justifyContent='space-evenly'
            fontSize={18}
            fontWeight={"bold"}
            fontFamily={"Poppins"}
            bg="#fff"
            justifyItems='center'
        >
          <Box overflow='hidden' borderRadius='full' boxShadow='dark-lg'>
            <Link to="/" className="logo"><Image className='image' src="./bynd.png" alt="Bynd Logo" boxSize="40px"/></Link>
          </Box>
          <Hide below='md'>
          <NavLink className="link" to='/' exact='true'>Home</NavLink>
          <NavLink className="link" to="/gallery">Gallery</NavLink>
          <NavLink className="link" to="/explore">Explore</NavLink>
          <NavLink className="link" to="/contact">Connect</NavLink>
          </Hide>
          <Show below='md' >
            <Menu aria-label='menu' isLazy>
            {({ isOpen }) => (
              <>
                <MenuButton
                  aria-label='Menu button'
                  as={IconButton}
                  color="#333"
                  bg='#fff'
                  icon={<HamburgerIcon />}
                  variant='subtle'
                  _hover={{ bg: '#edeffe'}}
                  _expanded={{ bg: '#edeffe'}}
                  _focus={{ boxShadow: 'outline' }}
                  isActive={isOpen}
                >
                {isOpen ? 'Close' : 'Open'}
                </MenuButton>
                <MenuList bg='#edeffe' color='#333' >
                <MenuItem as='a' href='/'>Home</MenuItem>
                <MenuItem as='a' href='/gallery'>Gallery</MenuItem>
                <MenuItem as='a' href='/explore'>Explore</MenuItem>
                <MenuItem as='a' href='/contact'>Connect</MenuItem>
                </MenuList>
                </>
            )}
              </Menu>
              </Show>
        </Flex>
        </nav>
        </Container>
      </Box>
  );
};
export default Header;