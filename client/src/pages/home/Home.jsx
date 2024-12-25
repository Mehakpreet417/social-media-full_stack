import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import { useEffect, useState } from "react"

const Home = () => {
  const [userId, setUserId] = useState(null);

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.id){
      setUserId(user.id);
      }
  },[])
  
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts />
    </div>
  )
}

export default Home