import { Key } from "react";

export interface DeckInterface {
  _id: Key | null | undefined,
  user: string,
  title: string,
  description: string,
  body: string
  index: number
}

export interface AuthState {
    user: object | null,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string | any
}

export interface BlogState {
  blogs: [] | any,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: any | string
}

export interface SelectedBlog {
  selectedBlog: {
    _id: Key | null | undefined,
    user: string | null,
    title: string | null,
    description: string | null,
    body: string | null,
    index: number
  }
}

export interface CommentState {
  comments: [] | any,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: any | string
}