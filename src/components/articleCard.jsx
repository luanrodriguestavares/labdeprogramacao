import React from 'react';
import { FlaskRound  } from 'lucide-react';

const ArticleCard = ({ imageSrc, title, description, buttonLink, buttonText }) => {
    return (
        <article className="flex flex-col bg-zinc-950 p-6 rounded-lg border border-zinc-800">
            <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-lg mb-4 bg-zinc-700"/>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-zinc-400 mb-4">{description}</p>
            <a href={buttonLink} className="text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-800 p-3 transition-all max-w-fit">
                <FlaskRound className="inline-block mr-2 h-5 w-5"/>
                {buttonText}
            </a>
        </article>
    );
};

export default ArticleCard;
