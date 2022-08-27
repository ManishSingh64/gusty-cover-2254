import { Box, Button, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function BitrixPress() {
  return (
    <>
    <Box w='100%' m="100px 0px">
       <Text fontSize="36px">Bitrix24 in the Press</Text> 
       <Box display="flex" justifyContent='space-evenly'  alignItems='center' w="100%" m='auto'>
          <Box >
            <Image   src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_forbes.png.webp?1659434641000" />
          </Box>
          <Box>
            <Image src='https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcmag.png.webp?1659434641000' />
          </Box >
          <Box >
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_pcworld.png.webp?1659434641000" />
          </Box>
          <Box >
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_techradar.png.webp?1659434641000" />
          </Box>
          <Box >
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/press/icons/color_zdnet.png.webp?1659434641000" />
          </Box>
        
       </Box>
    </Box>
    <Box display="flex" justifyContent='space-around'>
        <Box w="50%" ml="50px" textAlign="left">
            <Heading mb="20px">Bitrix24 on 24 premise</Heading>
            <Text mb="30px" lineHeight="7">You can use self hosted version of Bitrix24 to run on your server
                . You get full control over data, source code access, and additional tools
                , such as helpdesk and e-learning as well as integration and customization
                options
            </Text>
            <Button variant='ghost' border='1px solid blue' borderRadius='30px'>LEARN MORE</Button>
        </Box>
        <Box w="50%">
            <Image w="90%" src="https://www.bitrix24.in/upload/optimizer/converted/images/content_common/images/tools/inc/tools_inc_on-premise_3.png.webp?1659434641000" />
        </Box>
    </Box>
    <Box m="20px 0px 80px 0px">
        <Text fontSize="36px" mb="10px">Ready to try?</Text>
        <Button bgColor='#bdf300' borderRadius='20px'>REGISTER FREE</Button>
    </Box>
    </>
  )
}
