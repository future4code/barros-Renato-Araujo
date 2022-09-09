import { Box } from '@mui/material';
import React from 'react';
import BGTop from '../media/pokedex.png'

export default function PokedexScreen() {
 return (
   <Box sx={{width: '80%'}}>
    <img src={BGTop} alt='pokeball' width='100%' object-fit='contain'></img>
        <h1>Hello</h1>
   </Box>
 );
}