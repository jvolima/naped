import Link from "next/link";
import { useEffect, useState } from "react";
import { useNotices } from "../../../hooks/useNotices";
import { NoticeCard } from "../NoticeCard";
import { Container, NoticeTitle } from "./styles";

interface Notice {
  uid: string;
  title: string;
  image: string;
  description: string;
  last_publication_data: string;
}

export function Notices() {
  const { notices } = useNotices();

  const [recentNotices, setRecentNotices] = useState<Notice[]>([])

  function ordemCrescente(notice1: Notice, notice2: Notice) {
    return new Date(notice2.last_publication_data).getTime() - new Date(notice1.last_publication_data).getTime()  
  }

  useEffect(() => {
    if(notices.length >= 6) {
      let newNotices = [...notices];
      newNotices.sort(ordemCrescente);
      newNotices.splice(6, newNotices.length);
      setRecentNotices(newNotices)
    } else {
      setRecentNotices(notices)
    }
  }, [])

  return (
    <> 
      <NoticeTitle>
        <h3>Notícias mais recentes</h3>
        <div className="underline"></div>
      </NoticeTitle>
      <Container>
        {
          recentNotices.map(notice => (
            <Link href={`/notice/${notice.uid}`} key={notice.uid}>
              <a>
                <NoticeCard
                  title={notice.title} 
                  description={notice.description} 
                  image={notice.image} 
                  key={notice.uid} 
                />
              </a>
            </Link>
          ))
        }
      </Container>
    </>
  )
}