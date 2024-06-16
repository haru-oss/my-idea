import { Button} from '@chakra-ui/react'
import { FC } from 'react'
import { Child } from '../../types/Children'

export const ExelButton:FC<Child> =(props)=>{
    const {children} =props
    return(
        <>
          <Button colorScheme='green'>{children}</Button>

        </>
    )
}