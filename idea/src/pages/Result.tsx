import { FC } from "react"
import { UserTable } from "../molquere/UserTable"
import { Member } from "../user"


type Props ={
    inputFile:Member[]
  }

export const Result:FC<Props> = (props)=>{
  const {inputFile}= props;

    return(<>
            {inputFile.length > 0 ?

          (<UserTable  inputFile={inputFile}/>)  : (<p>No data available</p>)

          }


    </>)
}

