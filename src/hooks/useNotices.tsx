import { createContext, ReactNode, useContext, useState } from "react"

const NoticesContext = createContext<NoticesContextData>(
  {} as NoticesContextData
)

interface NoticesProviderProps {
  children: ReactNode;
  notices: Notice[];
}

interface Notice {
  uid: string;
  title: string;
  description: string;
  image: string;
  last_publication_data: string;
  firstParagraph: string;
}

interface NoticesContextData {
  notices: Notice[];
}

export function NoticesProvider({ children, notices }: NoticesProviderProps) {
  return (
    <NoticesContext.Provider value={{ notices }}>
      {children}
    </NoticesContext.Provider>
  )
}

export function useNotices() {
  const context = useContext(NoticesContext);

  return context;
}