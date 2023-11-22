import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Image, Box, Flex, VStack, Container, Text, HStack} from "@chakra-ui/react"
import '../App.css';

export default class Footer extends Component {
  render() {
    return (
      <Box
      as="section"
      w={['80%', '100%', '100%']}
      left={0}
      right={0}
      margin='0 auto'
      height={280}
      bg='#edefee'
      alignContent='center'
      justifyContent='center'
      justifyItems='center'
      alignItems='center'
      justifySelf='center'
      alignSelf='center'
      >
      <Container maxWidth="1280px">
      <footer className="footer">
      <Flex
          as='section'
          px={12}
          py={8}
          color="#333"
          justifyContent="space-between"
          alignItems="center"
          fontSize={['12', '16', '18']}
          fontFamily={"Poppins"}
          gap={2}
          >
          <Box overflow='hidden' borderRadius='full' boxShadow='dark-lg'>
          <Link to="/"><Image className='image' src="./bynd.png" alt="Logo" boxSize='150px'/></Link>
          </Box>
          <VStack spacing={2} alignItems="flex-start">
            <Text fontWeight={"semibold"}>Navigation</Text>
            <Link className='link2' to="/">Home</Link>
            <Link className='link2' to="/gallery">Gallery</Link>
            <Link className='link2' to='/explore'>Explore</Link>
            <Link className='link2' to='/contact'>Connect</Link>
          </VStack>
          <Text fontWeight={"semibold"} /* alignSelf="end" */>&copy; Bynd 2023</Text>
        </Flex>
        </footer>
        </Container>
        </Box>
    )
  }
}