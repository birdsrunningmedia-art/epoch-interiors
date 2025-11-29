export const serviceImages = [
  "/images/service1.jpg",
  "/images/service2.jpg",
  "/images/service3.jpg",
  "/images/service4.jpg",
  "/images/service5.jpg",
  "/images/service6.jpg",
  "/images/service7.jpg",
  "/images/service8.jpg",
];

export const texts = ["Offices", "Housing", "Schools", "Cars", "Jets"];

export const serviceCopy = "We offer services to interiors of "

export const getRandomEdge = () => {
  const edge = Math.floor(Math.random() * serviceImages.length);
  const random = Math.random() * 100;

  switch (edge) {
    case 0: // top
      return { top: "0%", left: `${random}%` };
    case 1: // right
      return { top: `${random}%`, left: "100%" };
    case 2: // bottom
      return { top: "100%", left: `${random}%` };
    case 3: // left
      return { top: `${random}%`, left: "0%" };
    default:
      return { top: "0%", left: `${random}%` };
  }
};
