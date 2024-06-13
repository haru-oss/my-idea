import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,

} from '@chakra-ui/react'

import { FC, useState } from "react";
import { Member } from "./user";
import { ChakraProvider } from "@chakra-ui/react";


export const App:FC=()=> {

  const [inputFile,SetinputFile] =useState<Member[]>([]);


  const handleFileChange=(event:React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];




    const fileReader = new FileReader();


    fileReader.onload = (e)=> {
      const content = e.target?.result as string;
      const obj:Member[] = JSON.parse(content);
      console.log(obj)
      SetinputFile(obj);
    };

    fileReader.readAsText(file);

  };

  console.log(inputFile)



  return(
    <ChakraProvider>


      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems: "center",

        flexDirection: "column"
      }}>


         <h1 style={{marginTop:"50px"}}>ファイルを貼ってください</h1>

         <input type="file"  style={{margin:"100px"}} onChange={handleFileChange}/>

         <button  style={{color:"purple",backgroundColor:"#deafde", padding:"5px",margin:"10px", borderRadius:"999px",cursor:"pointer"}}>change!!</button>

         {inputFile.length > 0 ?(



           <Table variant = 'simple' mx={"auto"} >
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


         ):(
          <p>No data available</p>
         )}





      </div>

    </ChakraProvider>



  )
}


