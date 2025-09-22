import { Note } from "@/types/note";
import { nextServer } from "./api";
import { User } from "@/types/user";

export interface fetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface newNote {
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
}

export type RegisterRequest = {
  email: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type CheckSessionRequest = {
  success: boolean;
};

export type UpdateUserRequest = {
  username?: string;
};

export const fetchNotes = async (
  query: string,
  page: number,
  tag?: string
): Promise<fetchNotesResponse> => {
  const response = await nextServer.get<fetchNotesResponse>(`/notes`, {
    params: {
      search: query,
      page,
      perPage: 12,
      tag,
    },
  });
  return response.data;
};

export const createNote = async (newNote: newNote): Promise<Note> => {
  const response = await nextServer.post<Note>(`/notes`, newNote);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await nextServer.delete<Note>(`/notes/${id}`);
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await nextServer.get<Note>(`/notes/${id}`);
  return response.data;
};

export const register = async (data: RegisterRequest) => {
  const response = await nextServer.post<User>("/auth/register", data);
  return response.data;
};

export const login = async (data: LoginRequest) => {
  const response = await nextServer.post<User>("/auth/login", data);
  return response.data;
};

export const checkSession = async () => {
  const response = await nextServer.get<CheckSessionRequest>("/auth/session");
  return response.data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>("/users/me");
  return data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};

export const updateMe = async (payload: UpdateUserRequest) => {
  const response = await nextServer.patch<User>("/users/me", {
    username: payload.username,
  });
  return response.data;
};
