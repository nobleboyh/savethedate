import { useRef } from "react";
import HeaderLayout from "./layout/HeaderLayout";
import ImageSliderLayout from "./layout/ImageSliderLayout";
import WeddingLocation from "./layout/WeddingLocation";
import MessageLayout from "./layout/MessageLayout";

function App() {
  const imageSection = useRef(null);
  const handleMainButton = () => {
    imageSection.current.scrollIntoView({ behavior: 'smooth' });
    
  }
  return (
    <div className="font-mono">
      <HeaderLayout mainButtonClickHandle={handleMainButton}/>
      <section ref={imageSection} 
        className="md:min-h-screen bg-transparent py-10">
        <ImageSliderLayout/>
      </section>
      <WeddingLocation/>
      <MessageLayout/>
    </div>
  )
}

export default App
