import { Route, Routes, useLocation, } from "react-router-dom"
import { Result } from "../pages/Result"
import { FileHere } from "../pages/FileHere"
import { FC, useState } from "react"
import { Member } from "../user"



export const Kouter:FC = ()=>{
  const [inputFile,setInputFile] =useState<Member[]>([]);





  return(
        <>

            <Routes>
              <Route path="/" element={<FileHere inputFile={inputFile} setInputFile={setInputFile} /> } />
              <Route path="/result" element={<Result inputFile={inputFile} /> } />
            </Routes>

        </>
    )
}