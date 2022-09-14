import React ,{useState, useEffect}from 'react';
import '../@styles/Landing.css';
import { useNavigate } from 'react-router';

const Landing = () => {
  // slides 
const [currentSlide, setCurrentSlide] = useState(0)



//array of images
	const SliderData = [
		{ image: require('../@assests/image.png'), title: "Let's help you manage your community and virtual class from anywhere"},
		{ image: require('../@assests/image-2.png'), title: "Let's create an opportunity to get wide base of varied interest" },
		{ image: require('../@assests/image-3.png'), title: "Let's ensure the tracking of users" },
	];
  const slideLength = SliderData.length;
useEffect(() => {
setCurrentSlide(0)
}, [])

//
const nextSlide = (slideIndex) =>{
  setCurrentSlide(slideIndex)

}

// navigation to register page
	const navigate = useNavigate();
	const handleRegister = () => {
		navigate('register');
	};
	return (
		<div className='container'>
			<div className='pattern'>
				<div className='img-slider'>
					{SliderData.map((slide, index) => {
						return (
							<div className={index=== currentSlide ? "slide current" : "slide"} key={index}>
                {index === currentSlide &&  (
                <>
								<img src={slide.image} alt='' />
                <div className='landing-paragraph'>
					<p>{slide.title}</p>
				</div>

        <div className='sm-circle'>
          {SliderData.map((slide, slideIndex) =>(
            <div key={slideIndex} onClick={()=> nextSlide(slideIndex)}></div>)
          )
          }
        </div>
        </>
        )}
							</div>
						);
					})}
				</div>
</div>
				<div className='btn'>
					<button onClick={handleRegister}>Get started</button>
				</div>
			</div>
		
	);
};

export default Landing;
