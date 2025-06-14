export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}