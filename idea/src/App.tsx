import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Kouter } from "./router/Router";
import { Member } from "./user";

type Props = {
  inputFile:Member[]
}

export const App:FC<Props>=(props)=> {
  const {inputFile} = props;



  return(
    <>
    <ChakraProvider>
      <BrowserRouter>

              <Kouter inputFile={inputFile} />

      </BrowserRouter>
    </ChakraProvider>
    </>

)
}


// これはテスト
{/* <Flex
justify="center"
align="center"
direction="column"
> */}
// </Flex>