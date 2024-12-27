"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

const ProductImages = ({ images }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[currentImage]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, idx) => (
          <div
            key={image}
            className={cn(
              "mr-2 border hover:cursor-pointer hover:border-orange-600",
              currentImage === idx &&
                "border-2 border-primary border-orange-600"
            )}
            onClick={() => setCurrentImage(idx)}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
