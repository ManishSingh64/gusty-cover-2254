import { Box, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box  bgColor='blue' color='white' textAlign="left" lineHeight="10">
         <Box display="flex" mt="10px" justifyContent='space-evenly'  >
            <Box mt='20px'>
                <Text color="#21bdee" _hover={{color:"white"}}>BITRIX</Text>
                <Text>Bitrix24</Text>
                <Text>Pricing</Text>
                <Text>MediaKit</Text>
                <Text>Contact us</Text>
                <Text>In he press</Text>
                <Text>Bitrix24 August sale</Text>
            </Box>
            <Box mt='20px'>
                <Text color="#21bdee" _hover={{color:"white"}}>SUPPORT</Text>
                <Text>Helpdesk</Text>
                <Text>Webinars</Text>
                <Text>How to Videos</Text>
                <Text>Submit a ticket</Text>
                <Text>Schedule a demo</Text>
                <Text>Bitrix24 status code</Text>
            </Box>
            <Box mt='20px' >
                <Text color="#21bdee" _hover={{color:"white"}}>RESOURCES</Text>
                <Text>Blogs</Text>
                <Text>Solutions</Text>
                <Text>testimonial</Text>
                <Text>Alternatives</Text>
                <Text>Uses</Text>
                <Text>Guides</Text>
                <Text>Research</Text>
            </Box>
            <Box mt='20px'>
                <Text color="#21bdee" _hover={{color:"white"}}>ON-PREMISE</Text>
                <Text>On-premise edition</Text>
                <Text>Download</Text>
                <Text>Documentation</Text>
            </Box>
            <Box mt='20px' >
                <Text color="#21bdee" _hover={{color:"white"}}>APPS</Text>
                <Text>Market</Text>
                <Text>Mobile app</Text>
                <Text>Desktop app</Text>
                <Text>API/developers</Text>
            </Box>
            <Box mt='20px'>
                <Text color="#21bdee" _hover={{color:"white"}}>PARTNERS</Text>
                <Text>Find a partner</Text>
                <Text>Become a partner</Text>
                <Text>Partner login</Text>
            </Box>
         </Box>

         <Box mb="10px" w='90%' m='auto' mt="50px"   border='1px solid white'></Box>

         <Box display='flex' justifyContent={"space-between"} w='90%'  m='auto' mt='50px' paddingBottom='50px' >
            <Box w='50%' display='flex' justifyContent={"space-between"}>
                <Text>TERMS</Text>
                <Text>PRIVACY</Text>
                <Text>GDPR</Text>
                <Text>SECURITY</Text>
                <Text>ABUSE</Text>
                <Text>RULE FOR BITRIX24 SITES</Text>
            </Box>
            <Box display='flex' justifyContent={"end"} gap="5px" w='50%'>
                <Box>
                    <Image w='100px' src='https://www.mipic.co/blog/wp-content/uploads/2019/07/app-store-icon-png-14.png'/>
                </Box>
                <Box>
                    <Image w='120px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAhizKCjPRzOB469p1NoR9lFbnF3eAeZ1dw&usqp=CAU'/>
                </Box>
            </Box>
         </Box>
    </Box>
  )
}
