const FAKE_SLIDES: SlideDTO[] = [
  {
    id: 1,
    type: "image",
    src: "https://via.placeholder.com/800x600.png?text=Sample+Image+1",
    duration: 5,
  },
  {
    id: 2,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: 10,
  },
  {
    id: 3,
    type: "image",
    src: "https://via.placeholder.com/800x600.png?text=Sample+Image+2",
    duration: 4,
  },
];

const getLoadingTime = () => 500 + Math.floor(Math.random() * 3000);

export const fetchSlides = () =>
  new Promise<{ data: SlideDTO[]; error: string | null }>((resolve) => {
    setTimeout(() => {
      resolve({ data: FAKE_SLIDES, error: null });
    }, getLoadingTime());
  });
