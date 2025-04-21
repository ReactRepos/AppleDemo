import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, exploreVideo, explore2Img } from '../utils';
import gsap from 'gsap';

const Features = () => {
    const videRef = useRef();

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: "#exploreVideo",
                toggleActions:"play pause reverse restart",
                start:"-10% bottom"
            },
            onComplete:()=>{ 
                videRef.current.play()
            }
        });

        animateWithGsap('#features_title', { y: 0, opacity: 1 });
        animateWithGsap('.g_grow',
            { scale: 1, opacity: 1, ease: 'power1' },
            { scrrb: 5.5 }
        );
        animateWithGsap('.g_text', {
            opacity: 1,
            y: 0,
            ease: "power2.inOut",
            duration: 1
        })
    }, []);

    return (
        <section
            className='common-padding h-full w-full relative overflow-hidden bg-zinc-900'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full'>
                    <h1 id='features_title' className='section-heading'>Explorer the full story</h1>
                </div>
                <div className='items-center justify-center overflow-hidden flex flex-col'>
                    <div className='mt-32 mb-24 pl-24'>
                        <h2 className='font-semibold text-5xl lg:text-txl'>iPhone.</h2>
                        <h2 className='font-semibold text-5xl lg:text-txl'>Forged in titanium</h2>
                    </div>
                    <div className='flex-center flex-col sm:px-10'>
                        <div className='w-full h-[50vh] relative flex items-center'>
                            <video playsInline
                                ref={videRef}
                                muted
                                autoPlay
                                id='exploreVideo'
                                className='w-full h-full object-cover object-center' preload='none'>
                                <source src={exploreVideo} type='video/mp4'></source>
                            </video>
                        </div>
                        <div className='w-full relative flex flex-col'>
                            <div className='feature-video-container'>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore1Img} alt='titanium' className='feature-video g_grow' />
                                </div>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore2Img}
                                        alt='titanium'
                                        className='feature-video g_grow' />
                                </div>
                            </div>
                            <div className="feature-text-container">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        iPhone 15 Pro is {' '}
                                        <span className="text-white">
                                            the first iPhone to feature an aerospace-grade titanium design
                                        </span>,
                                        using the same alloy that spacecrafts use for missions to Mars.
                                    </p>
                                </div>

                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                        <span className="text-white">
                                            lightest Pro models ever.
                                        </span>
                                        You'll notice the difference the moment you pick one up.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features