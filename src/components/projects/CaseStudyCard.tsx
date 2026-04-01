import React from 'react'; 

interface CaseStudyCardProps {
    title: string; 
    image?: string; 
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, image }) => {
    return (
        <div className="flex flex-col text-start min-w-50 max-w-70 bg-white shadow border border-neutral-300 rounded-lg">
            <img className='w-full h-auto aspect-video object-cover' src={image || 'images/banner-placeholder.jpg'} alt={title}/>
            <div className="flex flex-col px-5 py-3">
                <h4 className='fs-18 font-semibold'>{title}</h4>
            </div>
        </div> 
    );
};

export default CaseStudyCard;