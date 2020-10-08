export const songs = [
  {
    id: "1",
    title: "Song A",
    author: "Rachmaninoff",
    description: "Test #1",
    keySignature: "D",
    time: "4/4",
    systems: [
      {
        bars: [
          {
            notes: [{ note: "D" }, { note: "F-sharp" }],
          },
          {
            notes: [
              { note: "E" },
              { note: "F-sharp" },
              { note: "G" },
              { note: "A" },
            ],
          },
          {
            notes: [{ note: "B" }, { note: "C" }, { note: "C-sharp" }],
          },
        ],
      },
      {
        bars: [
          {
            notes: [{ note: "D" }, { note: "D" }, { note: "D" }],
          },
          {
            notes: [
              { note: "D+" },
              { note: "E+" },
              { note: "C-sharp" },
              { note: "C-sharp" },
            ],
          },
          {
            notes: [
              { note: "C" },
              { note: "C" },
              { note: "D" },
              { note: "D" },
              { note: "C" },
            ],
          },
        ],
      },
    ],
  },
];
export const fingerings = {
  D: [
    { note: "D", fingering: [1, 1, 1, 1, 1, 1] },
    { note: "E", fingering: [1, 1, 1, 1, 1, 0] },
    { note: "F-sharp", fingering: [1, 1, 1, 1, 0, 0] },
    { note: "G", fingering: [1, 1, 1, 0, 0, 0] },
    { note: "A", fingering: [1, 1, 0, 0, 0, 0] },
    { note: "B", fingering: [1, 0, 0, 0, 0, 0] },
    { note: "C", fingering: [0, 1, 1, 0, 0, 0] },
    { note: "C-sharp", fingering: [0, 0, 0, 0, 0, 0] },
    { note: "D+", fingering: [0, 1, 1, 1, 1, 1] },
    { note: "E+", fingering: [1, 1, 1, 1, 1, 0] },
    { note: "F-sharp+", fingering: [1, 1, 1, 1, 0, 0] },
    { note: "G+", fingering: [1, 1, 1, 0, 0, 0] },
    { note: "A+", fingering: [1, 1, 0, 0, 0, 0] },
    { note: "B", fingering: [1, 0, 0, 0, 0, 0] },
    { note: "C+", fingering: [0, 1, 1, 1, 0, 0] },
    { note: "C-sharp+", fingering: [0, 0, 0, 0, 0, 0] },
  ],
};
