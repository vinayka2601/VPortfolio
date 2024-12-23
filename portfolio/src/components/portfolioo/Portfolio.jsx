import "./portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import {useRef} from "react";


const items= [
 {
  id:1,
  title:"My Self Bot",
  img:"https://images.pexels.com/photos/6146931/pexels-photo-6146931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  desc:"Immerse yourself in the cutting-edge world of AI with our intelligently crafted chatbot! Leveraging the advanced capabilities of Gemini, OpenAI, and other state-of-the-art providers, this chatbot promises to redefine user interactions.",
 },

 {
  id:2,
  title:"Weather App",
  img:"https://images.pexels.com/photos/5668093/pexels-photo-5668093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  desc:"Explore the weather around the globe with our innovative web app, crafted using React.js!This intuitive application lets you effortlessly search and check the current weather conditions for any city worldwide, thanks to the power of the Weather API.",
 },

 {
  id:3,
  title:"Spotify",
  img:"https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=600",
  desc:"In this project, you have the freedom to play, pause, and skip to the previous or next song with ease. You can also change tracks within the duration period, providing a seamless transition between your favorite tunes. Plus, there's a host of additional functionalities designed to give you more control and flexibility over your music playback.",
 },

 {
  id:4,
  title:"Tech-Freak Website ",
  img:"https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=600",
  desc:"A website crafted with Reactjs and scss. This website is not just a collection of pages its a showcase of my understanding of Reactjs fundamentals and ability to create engaging user interfaces,and flair for animation.",
 },
];

const Single =({item})=>{

  const ref =useRef();

  const {scrollYProgress}=useScroll({target:ref,
  // offset:["start start","end start"]
  });
  const y=useTransform(scrollYProgress,[0,1],[-300,300]);
  
  return(
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"ref={ref}>
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer"style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
        </div>
      </div>
      
    </section>
  )
}
const Portfolio = () => {
const ref=useRef()
  const {scrollYProgress}=useScroll({target:ref,
    offset:["end end", "start start"],
  });

  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featuread Works</h1>
        <motion.div style={{scaleX}} className="progressBar">

        </motion.div>
      </div>
      {items.map((item)=>(
        <Single item ={item} key={item.id}/>
      ))}
    </div>
  )
};

export default Portfolio