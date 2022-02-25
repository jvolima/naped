import Link from "next/link";
import { useEffect, useState } from "react";
import { useNotices } from "../../../hooks/useNotices";
import { CardAnimeNotices } from "../CardAnimeNotices";
import { Container } from "./styles";

interface AnimeNoticesProps {
  next_page: string;
  prev_page: string;
}

interface Notice {
  data: {
    uid: string;
    title: string;
    description: string;
    image: string;
    last_publication_data: string;
  }
}

interface Data {
  total_pages: number;
  results: Notice[]
}

export function AnimeNotices({ next_page, prev_page }: AnimeNoticesProps) {
  const { notices } = useNotices();

  const [data, setData] = useState<Data>()

  useEffect(() => {
    fetch(next_page).then(response => response.json()).then(data => setData(data))
  }, [])

  async function carregarProximaPagina() {
    if(next_page !== null) {
      const response = await fetch(next_page).then(response => response.json())

      console.log(response);
    }
  }

  return (
    <Container>
      <div className="containerGrid">
        {
          notices.map(notice => (
            <CardAnimeNotices key={notice.uid} notice={notice}/>
          ))
        }
      </div>
    </Container>
  )
}
