import { FC } from "react"

import { Member } from "../../user";

import { useNavigate } from "react-router-dom";
import { Flex } from "@chakra-ui/react";


type Props ={
    inputFile:Member[];
    setInputFile:(obj:Member[])=>void
}



export const FileUploader:FC<Props> = (props) =>{
    const {inputFile,setInputFile} =props;
    const navigate =useNavigate();




    const handleFileChange=(event:React.ChangeEvent<HTMLInputElement>):void => {
    const file = event.target.files?.[0];



    const fileReader = new FileReader();


    fileReader.onload = (e)=> {

         const content = e.target?.result as string;
         const obj:Member[] = JSON.parse(content);




const  filteredMembers = obj.filter((member:Member)=>{

        ///////////////////////////////////////////

        const email = member["メール"]
        const Tfyear = email.slice(-14,-10);
        const Tfmonth = email.slice(-9,-8)
             console.log(Tfmonth);
        ////////////////////////////////////////////////////

  const now = new Date();
  const nowMonth = String(now.getMonth());
  const nowYear = String(now.getFullYear());


  return(
    (Tfyear===nowYear)&&(Tfmonth===nowMonth)

  )})





.map((member)=>{

  const Tfday = member["メール"].slice(-14,-6)
  console.log(Tfday);
  return(

    {  ...member,"移籍日":Tfday  }


)})

console.log(filteredMembers)

      setInputFile(filteredMembers);
      navigate("/result");
    };

    fileReader.readAsText(file);



  };

  console.log(inputFile)

  return(
      <Flex align="center" justify="center" m={"0"}>
            <input type="file"  style={{margin:"100px"}} onChange={handleFileChange} />
        </Flex>
    )
}

