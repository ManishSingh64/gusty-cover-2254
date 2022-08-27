import { Box, Button, HStack, Image, List, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export default function Bitrix24() {
  return (
    <Box bgImage="url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4NiIgaGVpZ2h0PSI5MzEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjE2MiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTU5Ljk0IDUwMy4xMTNjLTI0LjEzIDY1Ljk5Ni00Ni4wNiAxMTguMjQ3LTg5LjYgMTczLjQzOC00OS42OCA2Mi45ODEtMTI4LjM1MSA5MC4zMzctMTg3LjcyNCA5NC42NTItNTkuMzczIDQuMzE2LTEzMS44MjktOS42NzktMTg4LjIzMi01OC43MDgtNTAuNTg4LTQzLjk3NC03MC44NTEtODMuODE5LTkyLjYwMi0xNDkuMzIyLTIxLjYxMi02NS4wNzgtNDEuMjc5LTEzNi44NzYtMTYuMDE0LTIwMy42NjMgMjQuNTE5LTY0LjgyNCA5OC4yOTQtODkuNDMzIDE0NS44NTQtMTM5LjU4NyA1Ni44OTMtNTkuOTk3IDgwLjk1Ny0xODAuNjMzIDE1OS40OS0xODIuNDIgODAuMTU1LTEuODIzIDg3LjgxIDEyOS44NTYgMTUyLjEwOCAxNzUuMzMxIDYwLjggNDMuMDAxIDE3NS43IDUuNzE5IDIwNC4yNCA3Ni42OTQgMjguMTIgNjkuOTE4LTYwLjQ2IDEzOS41NzYtODcuNTIgMjEzLjU4NXoiIGZpbGw9IiMyRkM2RjYiLz48cGF0aCBvcGFjaXR5PSIuMTg2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwNy4yNjcgODg2LjA4NWMtNTcuNDE2IDIxLjYwNS0xMjAuODQxIDU1LjM1Ny0xNzcuMjg0IDQxLjY4NC01Ni40NjQtMTMuNjc4LTY3Ljc0Ni02Ni41ODEtOTAuNDktMTA2LjU1MS0yMS4xNzQtMzcuMjE1LTQ4LjU4Mi03NC43LTM2LjU1My0xMTYuNzI1IDExLjkxMi00MS42MjIgNTIuMDM4LTc5LjM1OCAxMDAuMjEyLTEwNS42ODcgNDMuMjk4LTIzLjY2NCA5Ni44OC0yNi41OCAxNDguMTYtMzAuMDU4IDQ0LjA3OC0yLjk5IDg0LjI4IDMuNDIyIDEyNS40MTQgMTEuNTAyIDQ4LjM1NiA5LjQ5OSAxMDEuNDU5IDEzLjM1MyAxMzQuNTg1IDM5LjU2OSAzOC42OTUgMzAuNjIyIDgxLjMyOSA3Mi4zODEgNjEuNjExIDExNS42OTktMjAuMDA2IDQzLjk1NS0xMDAuNzM3IDUzLjczLTE1MS45MzggODIuNzQ5LTM5LjU5OSAyMi40NDQtNjkuNjIyIDUxLjIyNS0xMTMuNzE3IDY3LjgxOHoiIGZpbGw9IiNCM0U2MDAiLz48cGF0aCBvcGFjaXR5PSIuMTIyIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01OTAuNTQyIDcxMi44MDJjLTU3Ljk2NyA4LjU4My0xMTcuODQ3LTguODk3LTE2NS40MDQtMzYuMzY1LTQ2LjcyMS0yNi45ODUtNzMuMjM3LTY5LjUwMi05My40NzMtMTEzLjE1Ny0yMC41MzUtNDQuMy0zOC4yNTctOTEuNjIyLTIyLjgwNC0xMzcuNjgzIDE1LjYwNy00Ni41MTggNTguOTktODIuOTYgMTA2LjU5My0xMTIuMDYxIDQ2LjgwMi0yOC42MTIgMTAxLjIwMy01MC4zNjggMTU5LjM4LTUwLjUzNSA1Ni44NjktLjE2NCAxMDguMTk3IDIyLjY5NCAxNTMuODg4IDQ5LjYzNCA0NC4xOTQgMjYuMDU3IDkxLjkwNiA1Ni42NjQgMTAwLjkxNSAxMDAuNjAxIDguNjU3IDQyLjIxNi0zNi40NyA3Ny42MDMtNTYuMTYyIDExNy42NDctMTcuMTUzIDM0Ljg4NS0yMi4zMzkgNzIuNDY2LTUxLjY2MiAxMDEuNjI3LTM1LjUyIDM1LjMyMy03Ni4yNjkgNzIuMTQ4LTEzMS4yNzEgODAuMjkyeiIgc3Ryb2tlPSIjNTVEMEUwIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4=')">
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
    <HStack w="70%" m='auto' mt="30px" gap="50px">
        <UnorderedList color="#0ebaba" spacing="3" textAlign="left">
            <ListItem ><span style={{color:"black"}}>Chats & video calls</span></ListItem>
            <ListItem><span style={{color:"black"}}>Online meetings</span></ListItem>
            <ListItem><span style={{color:"black"}}>Feed</span></ListItem>
            <ListItem><span style={{color:"black"}}>Calender</span></ListItem>
            <ListItem><span style={{color:"black"}}>Online documents</span></ListItem>
            <ListItem><span style={{color:"black"}}>Drive</span></ListItem>
            <ListItem><span style={{color:"black"}}>webmail</span> </ListItem>
            <ListItem><span style={{color:"black"}}>Workgroups</span></ListItem>
            <ListItem><span style={{color:"black"}}>Marketing</span></ListItem>
            <Button bgColor="#bdf300" rounded="20px" color="black">START FOR FREE</Button>
        </UnorderedList>
        <Box >
            <Image src="https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/main/header_banner/workspace.1366w.png.webp?1659420243000"/>
        </Box>
    </HStack>
    <HStack m='40px 0' h='60px' bgColor='#0ebaba' justifyContent='space-evenly' 
         alignItems='center'>
        <Box>10,000,000</Box>
        <Box>organisation has chosen Bitrix24</Box>
        <Box>available in 18 languages</Box>
    </HStack>
    </Box>
  )
}
