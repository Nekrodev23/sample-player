import { FC } from "react";

export const Slide: FC<{
  slide: SlideDTO;
  height: string;
  width: string;
  onLoadedData: VoidFunction;
}> = ({ slide, height, width, onLoadedData }) => {
  if (slide.type === "image") {
    return (
      <figure style={{ margin: 0 }}>
        <img
          src={slide.src}
          alt={`Slide ${slide.id}`}
          style={{
            width,
            height,
            objectFit: "cover",
          }}
          onLoad={onLoadedData}
        />
      </figure>
    );
  }

  return (
    <video
      src={slide.src}
      autoPlay
      muted
      style={{
        width,
        height,
        objectFit: "cover",
      }}
      aria-label={`Video slide`}
      onLoadedData={onLoadedData}
    >
      Your browser does not support the video tag.
    </video>
  );
};
