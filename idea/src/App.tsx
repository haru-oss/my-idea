import { FC, useState } from "react";



export const App:FC=()=> {

  const [inputFile,SetinputFile] =useState<string | null>(null);


  const handleFileChange=(event:React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];




    const fileReader = new FileReader();


    fileReader.onload = (e)=> {
      const content = e.target?.result as string;
      const obj = JSON.parse(content);
      console.log(obj)
      SetinputFile(obj);
    };

    fileReader.readAsText(file);

  };

  console.log(inputFile)



  return(
    <>


      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems: "center",

        flexDirection: "column"
      }}>


         <h1>移籍退会者リスト抽出いたします〜</h1>

        




         <input type="file"  style={{margin:"100px"}} onChange={handleFileChange}/>

         <button  style={{color:"purple",backgroundColor:"#deafde", padding:"5px",margin:"10px", borderRadius:"999px",cursor:"pointer"}}>change!!</button>

      </div>

    </>



  )
}


