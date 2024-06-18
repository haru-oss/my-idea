import { Flex, Heading } from '@chakra-ui/react'
import {  FC } from 'react'
import { Child } from '../../../types/Children';

export const PageHeading:FC<Child> = (props)=>{
    const {children}=props;
    return(

         <Flex align="center" justify="center" m={"0"}>
             <Heading mt={"50px"}>{children}</Heading>
         </Flex>


    )
}