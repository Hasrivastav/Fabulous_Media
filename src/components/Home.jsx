import React from 'react'
// 
import { FaBook, FaUserGraduate, FaLaptopCode } from "react-icons/fa";
const Home = () => {
  return (
   <>
    <div className="home" id='home'>
        <div className='lefthome'>
            <p>QUALITY IS WHAT WE STRIVE</p>
            <h1>Web Design & Marketing Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor</p>
            <button >MORE ABOUT US</button>
            <p>See live demo</p>
        </div>

        <div>
            <img  src="https://content.app-sources.com/s/11267431362003832/uploads/Images/3-9200242.png" />
        </div>
        
    </div>

<div className="home2">

<p>WHAT WE DO</p>
<h1>We Aim To Give Our Best Services At All Time</h1>
<div className="row">
      <div className="column">
        <FaBook size={32} />
        <h3>Education</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="column">
        <FaUserGraduate size={32} />
        <h3>Experience</h3>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="column">
        <FaLaptopCode size={32} />
        <h3>Skills</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
<div>
    
</div>
</div>
{/* 
    <div className="home2">

        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems 
                you face everyday.We are leadin gtetch compan whose aim is to increaase the problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3"id='about' >
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum sunt aspernatur fuga labore aperiam at repellat, sint explicabo? Architecto nulla ad, officiis numquam minima voluptatibus fuga reprehenderit, laudantium illo obcaecati assumenda quo doloribus veritatis nam odit nihil! Adipisci assumenda harum quasi in labore beatae dignissimos accusamus minima ad, totam corrupti aspernatur, impedit veritatis neque at inventore molestiae illum delectus, fugit porro possimus sequi! Hic expedita quae ipsa ipsam eius velit minima quaerat voluptatem natus reprehenderit voluptate quidem exercitationem ea reiciendis inventore officiis distinctio, facilis itaque temporibus est soluta officia vel voluptatibus. Neque ex illum fugit doloremque ad eaque, iure culpa?</p>
        </div>

    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div 
                style={{
                    animationDelay:"0.3s",
                }}
                >
                    <AiFillGoogleCircle />
                     <p>Google</p>
                </div>
                <div 
                style={{
                    animationDelay:"0.5s",
                }}
                >
                    <AiFillAmazonCircle />
                       
                    
                    <p>Amazon</p>
                </div>
                
                <div 
                style={{
                    animationDelay:"0.7s",
                }}
                >
                    <AiFillYoutube />
                        <p>Youtube</p>
                   
                </div>
                <div 
                style={{
                    animationDelay:"1s",
                }}
                >
                    <AiFillInstagram />
                        <p>Instagram</p>
                   
                </div>
                
                

            </article>
        </div>
    </div> */}
   </>
  )
}

export default Home