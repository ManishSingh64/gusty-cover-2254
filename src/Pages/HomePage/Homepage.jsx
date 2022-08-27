import { Box } from '@chakra-ui/react'
import React from 'react'
import Bitrix24 from './sections/Bitrix24'
import BitrixPress from './sections/BitrixPress'
import Footer from './sections/Footer'
import HowMuchBitrix24 from './sections/HowMuchBitrix24'
import Navbar from './sections/Navbar'

export default function Homepage() {
  return (
    <Box>
       <Navbar/>
       <Bitrix24 />
       <HowMuchBitrix24/>
       <BitrixPress />
       <Footer/>
    </Box>
  )
}
