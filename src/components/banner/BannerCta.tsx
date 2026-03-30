import React from 'react'; 
import { Link } from 'react-router-dom'

interface BannerCtaProps {
    description: string; 
    cta_text: string;
    url?: string; 
}

const BannerCta: React.FC<BannerCtaProps> = ({ description, cta_text, url }) => {
    return (<>
        <style>
        {`
            .bg-banner {
            position: relative;
            overflow: hidden;
            background: linear-gradient(0deg, rgba(26, 70, 128, 1) 0%, rgba(51, 139, 255, 1) 100%);
            }

            .bg-banner::before {
            content: '';
            position: absolute;
            inset: 0;
            background: url('/images/banner-bg-image.jpeg') center/cover no-repeat;
            opacity: 0.1;
            z-index: 0;
            }

            .bg-banner > * {
            position: relative;
            z-index: 1;
            }
        `}
        </style>

        <div className="flex flex-col gap-5 text-start rounded-3xl bg-banner px-10 py-20">
            <h2 className='text-white'>{description}</h2>
            <div className="flex flex-row"> 
                <Link to={url || '#'} >
                    <button className="relative inline-block font-medium group py-4 px-5 hover:cursor-pointer">
                        <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1.5 translate-y-1.5 bg-(--primary-color) group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white group-hover:bg-white"></span>
                        <span className="relative text-black md:fs-25 fs-18">{cta_text}</span>
                    </button>
                </Link>
            </div>
        </div>
    </>
    );
};

export default BannerCta;