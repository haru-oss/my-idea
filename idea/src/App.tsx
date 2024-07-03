import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Kouter } from "./router/Router";



export const App:FC=()=> {







  return(
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Kouter/>
        </BrowserRouter>
      </ChakraProvider>
    </>

)}


