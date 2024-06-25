import { FC } from "react"
import { UserTable } from "../molquere/UserTable"
import { ExelButton } from "../atoms/buttons/ExelButton"
import { Member } from "../user"
// import { useLocation } from "react-router-dom"

type Props ={
    inputFile:Member[]
  }

export const Result:FC<Props> = (props)=>{
  const {inputFile}= props;

  // const location = useLocation();

    // const {inputFile } = location.state as Props;

    return(<>
            {inputFile.length > 0 ?

          (<UserTable  inputFile={inputFile}/>)  : (<p>No data available</p>)
// このpタグの位置を変えたい。
          }

                     <ExelButton>downloadEX</ExelButton>

    </>)
}

