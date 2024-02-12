import React from "react";

import Link from "next/link";
const PrevoiusProjects = () => {

    return (
        <>
            <section className=' dark-section  last-section '>
                <div className="fj-inner fj-container ">
                    <div className="  projects-box  fj-y-120 ">
                        <div className="fj-inline desktop-text gap-100">
                            <h3 className="fj-h3 ">Previous Project</h3>
                            <div className="img-box">
                                <video
                                    width="100%"
                                    height="300"
                                    className="video"
                                    playsInline={true}
                                    webkit-playsinline="true"
                                    preload="auto"
                                    muted={true}
                                    loop={true}
                                    autoPlay={true}
                                >
                                    <source src="https://candokidsbastg.wpengine.com/test/new-videos/asked-ques-ani.mov" type='video/mp4; codecs="hvc1"' />
                                    <source src="https://candokidsbastg.wpengine.com/test/new-videos/asked-ques-ani.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="fj-right fj-mt-50 next-proj-btn">
                                <button className='fj-btn-text fj-text-left ' type='button'>
                                    <Link href='#' className="  fj-link1 f fj-block ">
                                    
                                        <h3 className="fj-h3">Next  Project</h3>

                                    </Link>

                                </button>
                            </div>
                        </div>

                        <div className="btn-box tab-text">

                            <div className="fj-right fj-mt-50 prev-proj-btn">
                                <button className='fj-btn-text fj-text-left ' type='button'>
                                    <Link href='#' className="  fj-link1 f fj-block ">
                                        <span className="arrow-btn">
                                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_179_9086)">
                                                    <rect x="0.5" y="1.38281" width="51" height="51" rx="25.5" stroke="#FFF3B6" />
                                                    <path d="M33 27.2728L19 27.2728M19 27.2728L26 34.2729M19 27.2728L26 20.2729" stroke="#FFF3B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <rect x="0.5" y="1.38281" width="51" height="51" rx="25.5" stroke="#FFF3B6" />
                                                <defs>
                                                    <clipPath id="clip0_179_9086">
                                                        <rect y="0.882812" width="52" height="52" rx="26" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>


                                        </span>
                                        <h3 className="fj-h3">Previous <br /> Project</h3>

                                    </Link>

                                </button>
                            </div>
                            <div className="img-box">
                                <video
                                    width="100%"
                                    height="300"
                                    className="video"
                                    playsInline={true}
                                    webkit-playsinline="true"
                                    preload="auto"
                                    muted={true}
                                    loop={true}
                                    autoPlay={true}
                                >
                                    <source src="https://candokidsbastg.wpengine.com/test/new-videos/asked-ques-ani.mov" type='video/mp4; codecs="hvc1"' />
                                    <source src="https://candokidsbastg.wpengine.com/test/new-videos/asked-ques-ani.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="fj-right fj-mt-50 next-proj-btn">
                                <button className='fj-btn-text fj-text-left ' type='button'>
                                    <Link href='#' className="  fj-link1 f fj-block ">
                                        <span className="arrow-btn">
                                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_4825_4557)">
                                                    <rect y="0.157227" width="52" height="52" rx="26" fill="white" />
                                                    <rect x="0.5" y="0.657227" width="51" height="51" rx="25.5" fill="#FAFAFA" />
                                                    <rect x="0.5" y="0.657227" width="51" height="51" rx="25.5" stroke="#FFE66D" />
                                                    <path d="M16.668 26.1572H35.3346M35.3346 26.1572L26.0013 16.8237M35.3346 26.1572L26.0013 35.4904" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <rect x="0.5" y="0.657227" width="51" height="51" rx="25.5" stroke="#FFE66D" />
                                                <defs>
                                                    <clipPath id="clip0_4825_4557">
                                                        <rect y="0.157227" width="52" height="52" rx="26" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </span>
                                        <h3 className="fj-h3">Next <br /> Project</h3>

                                    </Link>

                                </button>
                            </div>

                        </div>

                    </div>


                </div>

            </section>
        </>
    );
};

export default PrevoiusProjects;