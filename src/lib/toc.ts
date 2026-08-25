export type TocItem = {
  id: string;
  n: string | null;
  title: string;
  depth: 0 | 1 | 2;
};

export const TOC: TocItem[] = [
  { id: "abstract", n: null, title: "Abstract", depth: 0 },
  { id: "s1", n: "1", title: "The finished matrix", depth: 1 },
  { id: "s2", n: "2", title: "Energy pools", depth: 1 },
  { id: "s3", n: "3", title: "The ratio of two finished scales", depth: 1 },
  { id: "s4", n: "4", title: "The successful correspondence", depth: 1 },
  { id: "s5", n: "5", title: "Approaches that did not work", depth: 1 },
  { id: "s51", n: "5.1", title: "Explosive meeting", depth: 2 },
  { id: "s52", n: "5.2", title: "Continuous interpolation", depth: 2 },
  { id: "s53", n: "5.3", title: "Energy pools without frames", depth: 2 },
  { id: "s54", n: "5.4", title: "Static lookup table", depth: 2 },
  { id: "s55", n: "5.5", title: "Geometry too early", depth: 2 },
  { id: "s6", n: "6", title: "Why the native-base reading succeeds", depth: 1 },
  { id: "s7", n: "7", title: "Open directions", depth: 1 },
  { id: "s8", n: "8", title: "Conclusion", depth: 1 },
];
