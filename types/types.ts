export type TProject = {
  id: string;
  title: string;
  projectImageUrls: string[];
  projectDescription: string;
  projectSubtext: string;
};

export type TImage = {
  id: string;
  src: string;
  start: {
    top: string;
    left: string;
  };
};
