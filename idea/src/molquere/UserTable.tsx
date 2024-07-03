import {Table,Thead,Tbody,Tr,Th,Td,Box,} from '@chakra-ui/react'
import { FC } from 'react';
import { Member } from '../user';
import { PageHeading } from '../atoms/buttons/heading/PageHeading';

type Props ={ inputFile:Member[] }




export const UserTable:FC<Props> =(props)=>{
    const {inputFile} =props;





    return(
        <>
           <PageHeading >result</PageHeading>
           {/* <p>先月の移籍者</p> */}
           <Box w="100%" h="150vh">

             <Table variant = 'simple' ml="35px" size='sm' my="50px"  >
                  <Thead>
                      <Tr>
                        <Th>No</Th>
                        <Th>会員番号</Th>
                        <Th>会員詳細</Th>
                        <Th>氏名（姓）</Th>
                        <Th>氏名（名）</Th>
                        <Th>移籍日</Th>
                        {/* <Th>メール</Th> */}
                      </Tr>
                  </Thead>
                  <Tbody>
                    {inputFile.map((file,index)=>(
                      <Tr key={index}>
                        <Td>{index+1}</Td>
                        <Td>         </Td>
                        <Td>{file["会員詳細"]}</Td>
                        <Td>{file["氏名（姓）"]}</Td>
                        <Td>{file["氏名（名）"]}</Td>
                        <Td>{file["移籍日"]}</Td>
                        {/* <Td>{file["メール"]}</Td> */}
                      </Tr>

                    ))}
                  </Tbody>
                </Table>
           </Box>


        </>
    )
}

