import './App.css'
import NavigationBar from './nav'
import Card from './Card.jsx'
import Footer from './footer.jsx'
import VideoPlayer from './video.jsx'
import { Logoscene } from "./Logoscene.jsx"



function App() {
  

  return (
    <>
  
     <NavigationBar />
     <VideoPlayer />
     <Card />
     <div id="canvas3">
       <Logoscene />
     </div>
     <Footer />
    

    </>
  )
}

export default App
