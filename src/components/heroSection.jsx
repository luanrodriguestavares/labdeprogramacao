import React from 'react';
import ArticleCard from './articleCard';
import { CornerRightDown } from 'lucide-react';
import imgLab01 from '../assets/img/imgLab01.png';

const HeroSection = () => {
    return (

        <>
        
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 w-full relative z-10">
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <h1 className="max-w-2xl mb-3 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                        Lab. de Programação
                    </h1>
                    <p className="max-w-2xl mb-8 font-light text-zinc-400 lg:mb-8 md:text-lg lg:text-xl">
                        Testando e refinando conceitos de programação em um ambiente controlado.
                    </p>
                    <a href="#tecnologias" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-800 transition-all max-w-fit">
                        Explore o Lab
                        <CornerRightDown className="ml-2 text-white"/>
                    </a>
                </div>
                <div className="hidden lg:col-span-5 lg:flex items-center justify-center">
                    <img src={imgLab01} alt="Lab Image" className="w-full h-auto max-w-xl" />
                </div>
            </div>
        </section>

        <section id="tecnologias" className="relative min-h-screen flex flex-col items-center bg-zinc-950 py-16">
                <div className="max-w-screen-xl px-4 mx-auto">
                    <h2 className="max-w-2xl text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl text-white mt-12 mb-12">
                        Experimentos
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <ArticleCard 
                            imageSrc="https://picsum.photos/400/300?random=1"
                            title="Java"
                            description="Uma breve descrição do artigo 1 que fornece uma visão geral do conteúdo abordado."
                            buttonLink="#"
                            buttonText="Iniciar Pesquisa"
                        />
                        <ArticleCard 
                            imageSrc="https://picsum.photos/400/300?random=2"
                            title="Python"
                            description="Uma breve descrição do artigo 2 que fornece uma visão geral do conteúdo abordado."
                            buttonLink="#"
                            buttonText="Iniciar Pesquisa"
                        />
                        <ArticleCard 
                            imageSrc="https://picsum.photos/400/300?random=3"
                            title="JavaScript"
                            description="Uma breve descrição do artigo 3 que fornece uma visão geral do conteúdo abordado."
                            buttonLink="#"
                            buttonText="Iniciar Pesquisa"
                        />
                        
                    </div>
                </div>
            </section>
    
        </>
    );
};

export default HeroSection;
