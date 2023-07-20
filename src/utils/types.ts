import { IconType } from "react-icons";

export type TypePageIntro = {
  title: string;
  icon: React.ReactNode;
  pageintro: string;
}

export type TypeParamProps = {
  params: {
    url: string
    noteid: string
  };
  searchParams: {
    query: string
  }
}

type Reply = {
  name: string;
  email: string;
  reply: string;
  likes: string[];
};

export type TypeComment = {
  _id: string;
  name: string;
  email: string;
  comment: string;
  likes: string[];
  replies: Reply[];
};

export type TransformedNote = {
  _id: string;
  title: string;
  commentslength: number;
  views: number;
  upvotes: number;
  isupdated?: {
    state: boolean;
    date: Date;
  }
  intro: string;
  noteid: string;
  date: string;
  review: boolean;
  published: boolean;
};


export interface mongoNote {
  _id: string;
  title: string;
  noteid: string;
  category: string;
  subcategory?: string;
  author?: string;
  intro: string;
  introimage: string;
  content: string;
  review?: boolean;
  published?: boolean;
  keywords?: string;
  readtime?: string;
  upvote: string[];
  downvote: string[];
  comments?: TypeComment[];
  isupdated?: {
    state: boolean;
    date: Date;
  }
  date?: Date;
  views?: number;
  rating?: number;
}

export type SingleNoteProps = {
  note: mongoNote;
}

export type TypeInputProps = {
  value: string,
  setValueFunction: (val: string) => void,
  label: string
}