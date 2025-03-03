import React from "react";
import Image from "next/image";

interface ImageGridLayoutProps {
    images: string[];
}

const ImageGridLayout: React.FC<ImageGridLayoutProps> = ({ images }) => {
    if (images.length < 4) return null; 

    return (
        <div className="grid grid-cols-3 gap-7 auto-rows-auto">
            {[
                { span: "col-span-2", src: images[0] },
                { span: "col-span-1", src: images[1] },
                { span: "col-span-1", src: images[2] },
                { span: "col-span-2", src: images[3] },
            ].map((img, index) => (
                <div key={index} className={`${img.span} relative`}>
                    <Image
                        src={img.src}
                        alt={`Image ${index + 1}`}
                        width={816} // Adjust as needed
                        height={496} // Adjust as needed
                        className="w-full h-auto object-cover rounded-[30px]"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGridLayout;
