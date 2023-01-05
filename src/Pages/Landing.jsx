import React ,{useState, useEffect, useRef}from 'react';
import '../@styles/Landing.css';
import { useNavigate } from 'react-router';
import Loader from "./Loader"


const Landing = () => {
// loader
const [loading, setLoading] = useState(true)

  // slides 
const [currentSlide, setCurrentSlide] = useState(0);
const [autoPlay, setAutoPlay] = useState(true);
let timer = useRef(null);



//array of images
	const sliderData = [
		{ image: require('../@assests/image.png'), message: "Create a commummity.",title: "Let's create a community of wide base of varied interest."},
		{ image: require('../@assests/image-2.png'), message: "Add new users.",title: "Let's add new members and monitor their activities." },
		{ image: require('../@assests/image-3.png'), message: "Track your earning.",title: "Let's track your earnings from every community." },
	];
  const slideLength = sliderData.length;
useEffect(() => {
setCurrentSlide(0)
}, [])

useEffect(()=>{
	timer.current = autoPlay && setTimeout(()=> {
		nextSlide();
	}, 4000)
})


const nextSlide =()=>{
	setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
}
// const prevSlide =() =>{
// setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1)
// }
//
useEffect(() => {
	setTimeout(() => setLoading(false), 3000)
}, [])



// navigation to register page
	const navigate = useNavigate();
	const handleRegister = () => {
		navigate('register');
	};



	return (
		 !loading ?  

	(<div className='container'>
			<div className='pattern'
			 onMouseEnter={()=>{
				setAutoPlay(false);
				clearTimeout(timer)
			}}
			onMouseLeave={()=>{
				setAutoPlay(true);
			}}>
				<div className='img-slider'>
					{sliderData.map((slide, index) => {
						return (
							<div className={index=== currentSlide ? "slide current" : "slide"} key={index}>
                {index === currentSlide &&  (
                <>
                <div className='landing-paragraph'>
				<img src={slide.image} alt='' />

					<h4>{slide.message}</h4>
					<p>{slide.title}</p>
				</div>

      
        </>
        )}
							</div>
						);
					})}
					<div className='sm-circle'>
          {sliderData.map((slide, index) =>(
            <div key={index} 
			className={index ===currentSlide ? " sm-circle-dot-active  sm-circle-dot" : "sm-circle-dot"} 
				onClick={()=> setCurrentSlide(index)}></div>)
          )
          }
        </div>
		
			</div>
			
		<div className='btn'>
					<button onClick={handleRegister}>Get started</button>
				</div>
				</div>
</div>

		 ) : (<Loader/>)
		 
	);
};


export default Landing;
