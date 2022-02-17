import React, { useEffect } from 'react';
import {Box, Container,Tab,TabList,TabPanel,TabPanels,Tabs,Text} from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
   const user = JSON.parse(localStorage.getItem("userInfo"))
   if(user){
     navigate('/chats')
   }
  }, [navigate]);
  
  return <Container maxW='xl' centerContent>
     <Box
     d='flex'
     justifyContent='center'
     p={3}
     bg={'white'}
     w='100%'
     m='40px 0px 15px 0px'
     borderRadius='lg'
     borderWidth='1px'
     >
       <Text fontSize='4xl' color='black' fontFamily='Work sans' >Chat-Hub</Text>
     </Box>
     <Box bg='white' width='100%' p={4} borderRadius='lg' borderWidth='1px'>
     <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList mb='1em'>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p><Login/></p>
    </TabPanel>
    <TabPanel>
      <p><SignUp/></p>
    </TabPanel>
  </TabPanels>
</Tabs>
     </Box>
  </Container>;
};

export default HomePage;
