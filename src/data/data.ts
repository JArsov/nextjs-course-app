export interface INote {
  id: number;
  title: string;
}

const notes: Array<INote> = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`
  }));

export default notes;