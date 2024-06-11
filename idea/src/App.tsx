import { FC, useState } from "react";
import { Member } from "./user";


export const App:FC=()=> {

  const [inputFile,SetinputFile] =useState<Member[]>([]);


  const handleFileChange=(event:React.ChangeEvent<HTMLInputElement>) => {

    const file = event.target.files?.[0];




    const fileReader = new FileReader();


    fileReader.onload = (e)=> {
      const content = e.target?.result as string;
      const obj:Member[] = JSON.parse(content);
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


         {inputFile.length > 0 ?(
          <table style={{border:"1px"}}>
            <thead>
                <tr>
                  <th>会員詳細</th>
                  <th>氏名（名）</th>
                  <th>氏名（姓）</th>
                  {/* <th>電話番号</th>
                  <th>メール</th>
                  <th>月会費</th> */}
            </tr>
            </thead>
            <tbody>
              {inputFile.map((file,index)=>(
                <tr key={index}>
                  <td>{file["会員詳細"]}</td>
                  <td>{file["氏名（名）"]}</td>
                  <td>{file["氏名（姓）"]}</td>
                  {/* <td>{file["電話番号"]}</td>
                  <td>{file["メール"]}</td>
                  <td>{file["月会費"]}</td> */}
                </tr>

              ))}
            </tbody>
          </table>


         ):(
          <p>No data available</p>
         )}

      </div>

    </>



  )
}


