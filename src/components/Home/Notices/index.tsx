import Link from "next/link";
import { useNotices } from "../../../hooks/useNotices";
import { NoticeCard } from "../NoticeCard";
import { Container, NoticeTitle } from "./styles";

interface Notice {
  uid: string;
  title: string;
  image: string;
  description: string;
}

export function Notices() {
  const { notices } = useNotices();

  return (
    <> 
      <NoticeTitle>
        <h3>Notícias mais recentes</h3>
        <div className="underline"></div>
      </NoticeTitle>
      <Container>
        {
          notices.map(notice => (
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