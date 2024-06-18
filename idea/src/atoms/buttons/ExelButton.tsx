import { Button, Flex} from '@chakra-ui/react'
import { FC } from 'react'
import { Child } from '../../types/Children'

export const ExelButton:FC<Child> =(props)=>{
    const {children} =props
    return(

         <Flex align="center" justify="center" m={"0"}>
           <Button colorScheme='green'>{children}</Button>
         </Flex>


    )
}