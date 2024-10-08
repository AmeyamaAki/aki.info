import { Metadata } from 'next';
import Image from 'next/image';

const title = 'Sota el ginkgo'
const description = '占位符占位符占位符占位符占位符'

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        type: 'website',
        locale: 'ca',
        url: 'https://aki.cat',
        images: [{ url: 'https://aki.cat/website.png'}],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: '@ameyama_aki',
        images: ['https://aki.cat/website.png'],
      },
};

export default function CatalanPage() {
    return (
        <div className="flex-grow">
            <div className="min-h-screen w-full transition-colors duration-500 flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded-xl p-8 transition-colors duration-500 flex flex-col items-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[40%] my-4">
                    <div className="mb-4">
                    <Image
                        src="/avatar.jpg"
                        alt="Avatar"
                        width={128}
                        height={128}
                        className="rounded-full"
                    />
                    </div>
                    <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">Ameyama Aki</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">占位符占位符占位符占位符占位符</p>
                    </div>
                    
                    <div className="w-full">
                    <blockquote className="blockquote-custom">
                        <p className="leading-relaxed">
                            Sota el ginkgo hi ha un nen estirat. El seu nom... era &#34;Ameyama Aki&#34;?
                        </p>
                    </blockquote>
                    <p className="leading-relaxed mb-5">
                        De moment, no hi ha més informació disponible sobre ella...
                    </p>
                    <p className="leading-relaxed mb-5">
                        Aquest lloc web també està en construcció, us demanem que tingueu paciència...
                    </p>
                    <p className="leading-relaxed mb-5">
                        Gràcies per la teva visita, et desitjo un bon dia. ♥️
                    </p>
                    </div>
                </div>
                </div>
        </div>
    );
  }