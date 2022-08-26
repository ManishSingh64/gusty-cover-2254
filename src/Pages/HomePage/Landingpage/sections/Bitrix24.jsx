import { Box, Button, HStack, Image, List, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export default function Bitrix24() {
  return (
    <>
    <Box>
        <Box display='flex' alignItems='center' justifyContent='center'
         fontSize="44px" h='150px' >Bitrix24. your ultimate workspace</Box>
        <Box></Box>
    </Box>
    <HStack color="#0ebaba" w='70%' margin="auto" justifyContent='space-between' alignItems='center' >
        <Box borderBottom="1px solid blue">Collaboration</Box>
        <Box>CRM</Box>
        <Box>Tasks & Projects</Box>
        <Box>Sites & Stores</Box>
        <Box>HR & Automation</Box>
    </HStack>
    <HStack w="70%" m='auto' mt="30px">
        <UnorderedList color="#0ebaba" spacing="3" textAlign="left">
            <ListItem ><span style={{color:"black"}}>Employee directory</span></ListItem>
            <ListItem><span style={{color:"black"}}>Worktime tracking & reports</span></ListItem>
            <ListItem><span style={{color:"black"}}>Absence management</span></ListItem>
            <ListItem><span style={{color:"black"}}>Announcement & appreciations</span></ListItem>
            <ListItem><span style={{color:"black"}}>Workflow & automation</span></ListItem>
            <ListItem><span style={{color:"black"}}>Request & approvels</span></ListItem>
            <ListItem><span style={{color:"black"}}>No-code RPA</span> </ListItem>
            <ListItem><span style={{color:"black"}}>Knowledge base</span></ListItem>
            <ListItem><span style={{color:"black"}}>Marketing</span></ListItem>
            <Button bgColor="blue" rounded="20px" color="black">START FOR FREE</Button>
        </UnorderedList>
        <Box>
            <Image src=""/>
        </Box>
    </HStack>
    <HStack m='40px 0' h='60px' bgColor='#0ebaba' justifyContent='space-evenly' 
         alignItems='center'>
        <Box>10,000,000</Box>
        <Box>organisation has chosen Bitrix24</Box>
        <Box>available in 18 languages</Box>
    </HStack>
    </>
  )
}
