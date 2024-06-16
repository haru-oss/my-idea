import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'
import { FC } from 'react';
import { Member } from '../user';

type Props ={
  inputFile:Member[]
}




export const UserTable:FC<Props> =(props)=>{
    const {inputFile} =props;
    return(
        <>
           <Table variant = 'simple' ml={"22%"} >
                <Thead>
                    <Tr>
                      <Th>会員詳細</Th>
                      <Th>氏名（名）</Th>
                      <Th>氏名（姓）</Th>
                </Tr>
                </Thead>
                <Tbody>
                  {inputFile.map((file,index)=>(
                    <Tr key={index}>
                      <Td>{file["会員詳細"]}</Td>
                      <Td>{file["氏名（名）"]}</Td>
                      <Td>{file["氏名（姓）"]}</Td>
                    </Tr>

                  ))}
                </Tbody>
              </Table>


        </>
    )
}