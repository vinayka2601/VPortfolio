import { motion } from "framer-motion";
import "./hero.scss";
//import { useLocation } from "react-router-dom";

//import {Link,useLocation} from "react-router-dom";
//import { useEffect } from "react";

//import {useNavigation} from "react-router-dom";

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
  opacity:0,
  y:10,
  transition:{
    duration:2,
    repeat:Infinity,
  }
}
}

const sliderVariants={
  initial:{
    x:0,
    
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
    },
  },
 
};


const Hero = () => {

  //const navigate = useNavigation();
  

  // let location=useLocation();
  // useEffect(()=>{
  //   console.log(location.pathname)
  // },[location]);
  
  

  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial"
      animate="animate">
        <motion.h2 variants={textVariants}>VINAYKA AWASTHI</motion.h2>
        <motion.h1 variants={textVariants}>Your partner in Web solutions </motion.h1>
        <motion.div variants={textVariants} className="buttons">
        {/* <Link to="/services"></Link> */}
          <motion.button  variants={textVariants}className="button1">
          
          
         See the Latest Works 
        
         </motion.button>
         {/* {location.pathname.replace("/",'')} */}
         {/* <Link className={`but ${location.pathname==="/contact"?"active":""}`} to="/contact"></Link> */}
          <motion.button variants={textVariants} className="button2">
          Contact Me</motion.button>
        </motion.div>

        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants}
      initial="initial"
      animate="animate">
        ReactJs Animation Fronted Web developer
      </motion.div>
        <div className="imageContainer">
        <img src="/crazzy.png" alt="" width={450} height={700} />
        </div>
    </div>
  )
}

export default Hero