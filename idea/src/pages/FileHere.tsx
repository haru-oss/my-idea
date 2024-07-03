import { FC } from "react"
import { PageHeading } from "../atoms/buttons/heading/PageHeading"
import { FileUploader } from "../atoms/input/FileUploader"
import { Member } from "../user"

type Props ={
    inputFile:Member[]
    setInputFile:(obj:Member[])=>void
}

export const FileHere:FC<Props> = (props)=>{
    const {inputFile,setInputFile}=props
    return(
        <>
          <PageHeading>file here.....</PageHeading>
          <FileUploader inputFile={inputFile} setInputFile={setInputFile} />





        </>
    )
}


