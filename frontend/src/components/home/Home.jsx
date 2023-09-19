import React, { useEffect } from 'react'
import "./Home.css"
import * as THREE from "three"
import moonImage from "../../Images/moon1.png"
import vinusImage from "../../Images/venus.jpg"
import spaceImage from "../../Images/space2.jpg"
import {Typography} from "@mui/material"
import Timeline from "../../components/timeLine/TimeLine"
import imageFace1 from "../../Images/face1.jpg";
import imageFace2 from "../../Images/face2.jpg";
import imageFace3 from "../../Images/face3.jpg";
import imageFace4 from "../../Images/face4.jpg";
import imageFace5 from "../../Images/face5.jpg";
import imageFace6 from "../../Images/face6.jpg"
import {SiCplusplus,SiReact,SiJavascript,SiMongodb,SiMongoose,SiNodedotjs,SiExpress,SiCss3,SiHtml5,SiThreedotjs} from "react-icons/si"

const Home = () => {

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000)
    camera.position.set(2,2,12)
   
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
      renderer.render(scene, camera)
    }
   animate()
    
    }
  , [])
  

  return (
    <div className='home'>

     <canvas className='homeCanvas'></canvas>     
     <div className="homeContainer">
      <Typography variant='h3'>TIMELINE</Typography>
      <Timeline timelines={[1,2,3,4]}/>
     </div>
     <div className="homeSkills">
      <Typography variant='h3'>SKILLS</Typography>
      <div className="homeCubeSkills">
        <div className="homeCubeFaces homeCubeFace1" >
          <img src={imageFace1} alt="imageFace1" />
        </div>
        <div className="homeCubeFaces homeCubeFace2" >
          <img src={imageFace2} alt="imageFace2" />
        </div>
        <div className="homeCubeFaces homeCubeFace3" >
          <img src={imageFace3} alt="imageFace3" />
        </div>
        <div className="homeCubeFaces homeCubeFace4" >
          <img src={imageFace4} alt="imageFace4" />
        </div>
        <div className="homeCubeFaces homeCubeFace5" >
          <img src={imageFace5} alt="imageFace5" />
        </div>
        <div className="homeCubeFaces homeCubeFace6" >
          <img src={imageFace6} alt="imageFace6" />
        </div>
      </div>
      <div className="cubeShadow"></div>
      <div className="homeSkillsBox">
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