
declare global {
  type SlideDTO = {
    id: number;
    type: "video" | "image";
    src: string;
    duration: number;
  };
}

export {};
