import { useState } from "react";

type T = {
  showFile: ()=>void
}

function App() {

  const [inputFile,SetinputFile] =useState(null)
  const handleFileChange = (event) => {
    SetinputFile(event.target.files[0]);
  };
  const f= JSON.parse(inputFile)


  console.log(f)



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

export default App;
