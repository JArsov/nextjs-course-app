export interface INote {
  id: number;
  title: string;
}

const notes: Array<INote> = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: i + 1,
    title: `Note ${i + 1}`
  }));

export default notes;