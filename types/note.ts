export interface Note {
  id: string;
  title: string;
  content: string;
  tag:
    | "Work"
    | "Personal"
    | "Meeting"
    | "Shopping"
    | "Todo"
    | "Ideas"
    | "Finance"
    | "Travel"
    | "Health"
    | "Important";
  createdAt: string;
  updatedAt: string;
}

export type NewNoteData = {
  title: string;
  content?: string;
  tag:
    | "Work"
    | "Personal"
    | "Meeting"
    | "Shopping"
    | "Todo"
    | "Ideas"
    | "Finance"
    | "Travel"
    | "Health"
    | "Important";
};
