import Image from "next/image";

interface GalleryGridProps {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="break-inside-avoid relative group overflow-hidden rounded-xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 600}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Optional: Add an icon or text on hover */}
          </div>
        </div>
      ))}
    </div>
  );
}
