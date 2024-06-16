import { FC, useState } from "react";
import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { UserTable } from './molquere/UserTable';
import { Member } from "./user";
import { BrowserRouter } from "react-router-dom";


export const App:FC=()=> {

  const [inputFile,setinputFile] =useState<Member[]>([]);


  const handleFileChange=(event:React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];




    const fileReader = new FileReader();


    fileReader.onload = (e)=> {
      const content = e.target?.result as string;
      const obj:Member[] = JSON.parse(content);
      console.log(obj)
      setinputFile(obj);
    };

    fileReader.readAsText(file);

  };

  console.log(inputFile)



  return(

    <ChakraProvider>
         <BrowserRouter>


           <Flex
            justify="center"
            align="center"
            direction="column"
            >
              {/* layout */}


           {/* <Heading mt={"50px"}>ファイルを貼ってください</Heading> */}
           {/* atomsにchildrenで入れる */}
           {/* pagesで使用する */}


               <input type="file"  style={{margin:"100px"}} onChange={handleFileChange} />
               {/* FileUploader */}
               {/*  */}







           {inputFile.length > 0 ?

              (<UserTable  inputFile={inputFile}/>)  : (<p>No data available</p>)
              }
              {/* pages */}





           </Flex>

         </BrowserRouter>
      </ChakraProvider>



  )
}


// これはテスト