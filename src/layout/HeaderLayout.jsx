import { useState } from "react"
const HeaderLayout = ({mainButtonClickHandle}) => {
  const saveDate = "05.10.2024"
  const [content, setContent] = useState(saveDate);
  
  return (
    <header className="h-screen bg-header-bg bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col">
        {/* <img src={HeaderImage}></img> */}
        <p className="text-4xl text-white mb-8 font-semibold">
          Bui Hoang & Luu Thanh
        </p>
        <button className="bg-none text-3xl p-2 border-2 max-h-full text-white mb-32
         hover:bg-white hover:opacity-75 hover:text-black min-w-72" 

        onClick={mainButtonClickHandle}
        onMouseEnter={()=>setContent("save the date")} onMouseLeave={()=>setContent(saveDate)}>
            {content}
        </button>
    </header>
  )
}

export default HeaderLayout