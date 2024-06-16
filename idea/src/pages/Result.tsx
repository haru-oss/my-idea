import { FC } from "react"
import { UserTable } from "../molquere/UserTable"
import { ExelButton } from "../atoms/buttons/ExelButton"
import { Member } from "../user"

type Props ={
    inputFile:Member[]
  }

export const Result:FC<Props> = (props)=>{
    const {inputFile} = props;
    return(<>
           <UserTable/>

           <ExelButton>downloadEX</ExelButton>

    </>)
}