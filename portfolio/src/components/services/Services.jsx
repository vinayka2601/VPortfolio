import "./services.scss"
import{motion,useInView} from "framer-motion";
import { useRef } from "react";

const variants={
    initial:{
        x:-100,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};
const Services = () => {

    const ref=useRef()
    const isInView=useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" 
    variants={variants} 
    initial="initial"
    // whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
     >
        <motion.div className="textContainer" variants={variants}>
            <p>Eager to transform Ideas into <br/> Impactful Web Solution</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
           <img src="/people.webp" alt=""/>
           <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>

            <div className="title">
           <h1><motion.b  whileHover={{color:"orange" }}>For Your</motion.b> Projects</h1>
           <button>What I Do?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
                <h2>LinkedIn</h2>
                <p>My profile features a diverse range of projects that highlight my ability to create dynamic and interactive web applications. I bring a passion for coding and a commitment to excellence in every project.</p>
                <button>Go</button>
           </ motion.div>

            <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
                <h2>Github</h2>
                <p>Explore my GitHub repository, a hub of innovative projects showcasing my skills in React.js, JavaScript, and Data Structures & Algorithms (DSA) with Java. Dive into my collection of dynamic website projects crafted using React.jsand JavaScript, where you can see cutting-edge web development in action.</p>
                <button>Go</button>
            </motion.div>

            <motion.div className="box"whileHover={{background:"lightgray",color:"black"}}>
                <h2>Resume</h2>
                <p>Motivated fresher with 2 years of hands-on experience in developing responsive web applications. Possesses a strong foundation in Data Structures and Algorithms, demonstrated through 3 completed projects and 200+ DSA questions across various platforms. Eager to contribute to innovative projects and grow in a dynamic development environment</p>
                <button>Go</button>
            </motion.div>

     
        </motion.div>
        </motion.div>
  );
};

export default Services