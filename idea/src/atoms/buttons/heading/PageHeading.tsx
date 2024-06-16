import { Heading } from '@chakra-ui/react'
import {  FC } from 'react'
import { Child } from '../../../types/Children';

export const PageHeading:FC<Child> = (props)=>{
    const {children}=props;
    return(
        <>
                    <Heading mt={"50px"}>{children}</Heading>
        </>
    )
}