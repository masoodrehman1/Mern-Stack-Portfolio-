import React, { useEffect } from 'react'
import "./Home.css"
import * as THREE from "three"
import moonImage from "../../Images/moon1.png"
import vinusImage from "../../Images/venus.jpg"
import spaceImage from "../../Images/space2.jpg"
import {Typography} from "@mui/material"
import Timeline from "../../components/timeLine/TimeLine"
import {SiCplusplus,SiReact,SiJavascript,SiMongodb,SiMongoose,SiNodedotjs,SiExpress,SiCss3,SiHtml5,SiThreedotjs} from "react-icons/si"
import { Link } from 'react-router-dom'
import { MouseOutlined } from '@mui/icons-material'


const Home = ({timeline, skills}) => {
  useEffect(() => {
    const scene = new THREE.Scene()
const sceneCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
sceneCamera.position.set(2, 2, 12);
const backgroundCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
backgroundCamera.position.set(2, 2, 12);
   
    const canvas= document.querySelector(".homeCanvas")
    const renderer = new THREE.WebGLRenderer({canvas})
    renderer.setPixelRatio( window.devicePixelRatio );

    
    const textureLoader= new THREE.TextureLoader()
    const moonTexture= textureLoader.load(moonImage)
    const moonMaterial = new THREE.MeshStandardMaterial({map:moonTexture});
    const moonGeometry= new THREE.SphereGeometry(3,64,64)

    const vinusTexture= textureLoader.load(vinusImage)
    const vinusGeometry= new THREE.SphereGeometry(4,64,64)
    const vinusMaterial = new THREE.MeshBasicMaterial({map: vinusTexture})
    const vinus= new THREE.Mesh(vinusGeometry, vinusMaterial)
    vinus.position.set(8,5,5)
    
    const spaceTexture= textureLoader.load(spaceImage)
    
   
    const moon= new THREE.Mesh(moonGeometry, moonMaterial)
    const pointLight= new THREE.PointLight(0xffffff, 100)
    const pointLight2= new THREE.PointLight(0xffffff, 5)
    pointLight.position.set(8,5,5)
    pointLight2.position.set(-8,-5,-5)
    

    
    scene.add(vinus)
    scene.add(moon)
    scene.add(pointLight)
    scene.add(pointLight2)
    scene.background= spaceTexture

    let constSpeed=0.006
    window.addEventListener("mousemove",(e)=>{
      if(e.clientX<=window.innerWidth/2){
        moon.rotation.x -=constSpeed
        moon.rotation.y +=constSpeed
        vinus.rotation.x -=constSpeed
        vinus.rotation.y +=constSpeed
      }
      if(e.clientX >window.innerWidth/2){
        moon.rotation.x -=constSpeed
        moon.rotation.y -=constSpeed
        vinus.rotation.x -=constSpeed
        vinus.rotation.y -=constSpeed
      }
      if(e.clientY<=window.innerHeight/2){
        moon.rotation.x -=constSpeed
        moon.rotation.y +=constSpeed
        vinus.rotation.x -=constSpeed
        vinus.rotation.y +=constSpeed
      }
      if(e.clientY<=window.innerHeight/2){
        moon.rotation.x -=constSpeed
        moon.rotation.y -=constSpeed
        vinus.rotation.x -=constSpeed
        vinus.rotation.y -=constSpeed
      }
    })
    
    const animate=()=>{
      requestAnimationFrame(animate)
      moon.rotation.y += 0.001
      vinus.rotation.y += 0.001
      moon.rotation.x -= 0.001
      vinus.rotation.x -= 0.001
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, sceneCamera)
      renderer.render(scene, backgroundCamera)

    }
   animate()

   return window.addEventListener("scroll",()=>{
    backgroundCamera.rotation.z = window.scrollY * 0.003;
    backgroundCamera.rotation.y = window.scrollY * 0.003;

    const skillsBox=document.getElementById("homeSkillsBox")
    if (window.scrollY > 1000) {
      skillsBox.style.animation = "skillCubeBoxAnimationOn 1s linear forwards";
    } else {
      skillsBox.style.animation = "skillCubeBoxAnimationOff 1s linear forwards";
    }
   })
    
    }
  , [])
  

  return (
    <div className='home'>

     <canvas className='homeCanvas'></canvas>    
     <div className="homeCanvasContainer">
      <Typography variant='h1'>
      <p>M</p>
      <p>a</p>
      <p>s</p>
      <p>o</p>
      <p>o</p>
      <p>d</p>

      </Typography>
     
      <div className="homeCanvasBox">
        <Typography variant='h2'>Designer</Typography>
        <Typography variant='h2'>Developer</Typography>
        <Typography variant='h2'>Creater</Typography>
      </div>
      <Link to="/projects">VIEW MY WORK</Link>
      </div> 
      <div className="homeScrollBtn">
       <MouseOutlined/>

      </div>
     <div className="homeContainer">
      <Typography variant='h3'>TIMELINE</Typography>
      <Timeline timelines={timeline}/>
     </div>
     <div className="homeSkills">
      <Typography variant='h3'>SKILLS</Typography>
      <div className="homeCubeSkills">{[1,2,3,4,5,6].map((val)=>(
        <div key={val} className={`homeCubeFaces homeCubeFace${val}`} >
        <img src={skills[`image${val}`]?.url} alt={`imageFace${val}`} />
      </div>
      ))
        
   }
      </div>
      <div className="cubeShadow"></div>
      <div className="homeSkillsBox" id='homeSkillsBox'>
        <SiCplusplus/><SiCss3/><SiJavascript/><SiHtml5/><SiReact/><SiNodedotjs/><SiExpress/><SiMongoose/><SiMongodb/>
        <SiThreedotjs/>
      </div>
     </div>
     <div className="homeYoutube">
      <Typography variant='h3'>YOUTUBE VIDEOS</Typography>
      <div className="homeYoutubeRaper"></div>
     </div>
    </div>
  )
}

export default Home