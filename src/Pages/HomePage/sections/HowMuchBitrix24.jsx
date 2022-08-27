import { Box, Button, Heading, HStack, Select, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function HowMuchBitrix24() {
    const [selectValue, setSelectValue] =useState("3month");

    const price=[[3052, 6118, 12243, 24493],
                 [4000, 5000, 6000, 7000],
                 [4300, 5300, 6300, 7300]];
    const select=["1year","6month","3month"]             
  return (
    <>
    <Box fontSize='44px' mb="20px">How much is Bitrix24?</Box>
    <HStack justifyContent='space-between' mb="20px">
        <HStack>
            <Box w="300px">Price per month when paying for</Box>
            <Select w='120px' borderRadius='50px' 
            onChange={(e)=>setSelectValue(e.target.value)} >
                <option value="1year">1 year</option>
                <option value="3month">3 month</option>
                <option value="6month">6 month</option>
            </Select>
        </HStack>
        <Box>
            <span>Renew plans bought before August 1, 2022</span>
            <Button bgColor="white"  border="1px solid #0ebaba " borderRadius='20px'>Archived plans</Button>
        </Box>
    </HStack>

    <HStack gap="1%"  h='100%' justifyContent="center" >
        <Box bgColor="#f5fdd6"   w='19%'  h='185vh'  borderRadius='20px'>
            <Box bgColor="#e3f3a4" p='20px' borderRadius=' 20px 20px 0px 0px'>
                <Heading fontSize="3xl">Free</Heading>
                <Text>Start working online and sell movie with CRM</Text>
            </Box>
            <VStack justifyContent='space-between' gap='44px' mt='20px' alignItems="center">
                <Box>Unlimited <br/> users</Box>
                <Box >100% free</Box>
                <Box>
                    <Button bgColor='#a3cd00' borderRadius="20px" color='white'>Register for free</Button>
                </Box>
                <Box>5GB</Box>
            </VStack>
            <VStack justifyContent="left" alignItems="baseline" gap='10px' m='20px'>
                <Box>Collaboration</Box>
                <Box>Tasks & projects</Box>
                <Box >CRM</Box>
                <Box>Drive</Box>
                <Box>Contact Center</Box>
                <Box>Website builder</Box>
            </VStack>
        </Box>

        <Box  bgColor="#e7f9ff"  w='19%'  h='185vh'   borderRadius='20px'>
           <Box  bgColor="#caf0fc" p="20px"  borderRadius=' 20px 20px 0px 0px' >
                <Heading fontSize="3xl">Basic</Heading>
                <Text> Effective collaboration for small businesses and sales teams</Text>
            </Box>
            <VStack  justifyContent='space-between' gap='20px' mt='20px' alignItems="center">
                <Box>5 <br/> users</Box>
                <Box>
                    {/* <Text textDecoration='line-through'>Rs. 8,740/mo</Text> */}
                   { selectValue===select[0] && <Text>Rs.{price[0][0]}/mo </Text>}
                   { selectValue===select[1] && <Text>Rs.{price[1][0]}/mo </Text>}
                   { selectValue===select[2] && <Text>Rs.{price[2][0]}/mo </Text>}
                   <Text textDecoration="underline">for all users</Text>
                </Box>
                <Box>
                    <Button bgColor='#21bdee' w='150px' borderRadius="20px" color='white'>Buy</Button>
                </Box>
                <Box>24GB</Box>
            </VStack>
            <VStack m='20px' justifyContent="left" alignItems="baseline" gap='10px' mt='20px'>
                <Box>Collaboration</Box>
                <Box>Tasks & projects</Box>
                <Box >CRM</Box>
                <Box>Drive</Box>
                <Box>Contact Center</Box>
                <Box>Website builder</Box>
                <Box>Online store</Box>
            </VStack>
        </Box>

        <Box  bgColor="#e7f9ff"    w='19%' h='185vh'  borderRadius='20px'>
           <Box  bgColor="#caf0fc"  p="20px"  borderRadius=' 20px 20px 0px 0px'>
                <Heading fontSize="3xl">Standard</Heading>
                <Text> Effective collaboration for small businesses and sales teams</Text>
            </Box>
            <VStack justifyContent='space-between' gap='20px' mt='20px' alignItems="center">
                <Box>50 <br/> users</Box>
                <Box>
                    {/* <Text textDecoration='line-through'>Rs. 8,740/mo</Text> */}
                   { selectValue===select[0] && <Text>Rs.{price[0][1]}/mon </Text>}
                   { selectValue===select[1] && <Text>Rs.{price[1][1]}/mon </Text>}
                   { selectValue===select[2] && <Text>Rs.{price[2][1]}/mon </Text>}
                   <Text textDecoration="underline">for all users</Text>
                </Box>
                <Box>
                    <Button bgColor='#21bdee'  w='150px' borderRadius="20px" color='white'>Buy</Button>
                </Box>
                <Box>100GB</Box>
            </VStack>
            <VStack justifyContent="left" alignItems="baseline" gap='10px' m='20px'>
                <Box>Collaboration</Box>
                <Box>Tasks & projects</Box>
                <Box >CRM</Box>
                <Box>Drive</Box>
                <Box>Contact Center</Box>
                <Box>Website builder</Box>
                <Box>Online store</Box>
                <Box>Marketing</Box>
                <Box>Online documents</Box>
            </VStack>
        </Box>

        <Box  bgColor="#e7f9ff"  w='19%'  h='185vh'  borderRadius='20px'>
           <Box  bgColor="#caf0fc"  p="20px"  borderRadius=' 20px 20px 0px 0px'>
                <Heading fontSize="3xl">Professional</Heading>
                <Text> Effective collaboration for small businesses and sales teams</Text>
            </Box>
            <VStack justifyContent='space-between' gap='20px' mt='20px' alignItems="center">
                <Box>100 <br/> users</Box>
                <Box>
                    {/* <Text textDecoration='line-through'>Rs. 8,740/mo</Text> */}
                   { selectValue===select[0] && <Text>Rs.{price[0][2]}/mo </Text>}
                   { selectValue===select[1] && <Text>Rs.{price[1][2]}/mo </Text>}
                   { selectValue===select[2] && <Text>Rs.{price[2][2]}/mo </Text>}
                   <Text textDecoration="underline">for all users</Text>
                </Box>
                <Box>
                    <Button bgColor='#21bdee' w='150px' borderRadius="20px" color='white'>Buy</Button>
                </Box>
                <Box>1024GB</Box>
            </VStack>
            <VStack justifyContent="left" alignItems="baseline" gap='10px' m='20px'>
                <Box>Collaboration</Box>
                <Box>Tasks & projects</Box>
                <Box >CRM</Box>
                <Box>Drive</Box>
                <Box>Contact Center</Box>
                <Box>Website builder</Box>
                <Box>Online store</Box>
                <Box>Marketing</Box>
                <Box>Online documents</Box>
                <Box>Sales Intelligence</Box>
                <Box>Automation</Box>
                <Box>HR</Box>
            </VStack>
        </Box>

         <Box  bgColor="#e7f9ff"     w='19%'  h='185vh'  borderRadius='20px'>
            <Box  bgColor="#caf0fc"  p="20px"  borderRadius=' 20px 20px 0px 0px'>
                <Heading fontSize="3xl">Enterprise</Heading>
                <Text>Digital information tools for large businesses and enterprises</Text>
            </Box>
            <VStack justifyContent='space-between' gap='20px' mt='20px' alignItems="center">
                <Box>250 <br/> users</Box>
                <Box>
                    {/* <Text textDecoration='line-through'>Rs. 8,740/mo</Text> */}
                   { selectValue===select[0] && <Text>Rs.{price[0][3]}/mo </Text>}
                   { selectValue===select[1] && <Text>Rs.{price[1][3]}/mo </Text>}
                   { selectValue===select[2] && <Text>Rs.{price[2][3]}/mo </Text>}
                   <Text textDecoration="underline">for all users</Text>
                </Box>
                <Box>
                    <Button   w='150px' bgColor='#21bdee' borderRadius="20px" color='white'>Buy</Button>
                </Box>
                <Box>3TB</Box>
            </VStack>
            <VStack justifyContent="left" alignItems="baseline" gap='10px' m='20px'>
                <Box>Collaboration</Box>
                <Box>Tasks & projects</Box>
                <Box >CRM</Box>
                <Box>Drive</Box>
                <Box>Contact Center</Box>
                <Box>Website builder</Box>
                <Box>Online store</Box>
                <Box>Marketing</Box>
                <Box>Online documents</Box>
                <Box>Sales Intelligence</Box>
                <Box>Automation</Box>
                <Box>HR</Box>
                <Box>Multiple branches</Box>
                <Box>Scalability</Box>
                <Box>Enterprise pack</Box>
                <Box>Customer support</Box>
                <Box>Administration</Box>
            </VStack>
        </Box>
    </HStack>
    </>
  )
}
