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
  uid: string;
  title: string;
  description: string;
  image: string;
  last_publication_data: string;
}

interface Data {
  total_pages: number;
  results: Notice[]
}

export function AnimeNotices({ next_page, prev_page }: AnimeNoticesProps) {
  const { notices } = useNotices();

  const [pageNotices, setPageNotices] = useState<Notice[]>([])
  const [data, setData] = useState<Data>()
  const [pageNumbers, setPageNumbers] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setPageNotices(notices)
    if(next_page !== null) {
      fetch(next_page).then(response => response.json()).then(data => setData(data))
      setPageNumbers(Array.from({length:data?.total_pages as number},(v,k)=>k+1))
    }
  }, [data?.total_pages])

  async function handleClickNumber() {
    if(next_page !== null) {
      const response = await carregarProximaPagina()

      console.log(response)

      if (currentPage === pageNumbers.length) {
        setCurrentPage(oldState => oldState - 1)
      } else {
        setCurrentPage(oldState => oldState + 1)
        const newNotices: Notice[] = response.results.map((result: any) => {
          const newNotice = {
            uid: result.uid,
            title: result.data.title,
            description: result.data.description[0].text,
            image: result.data.image.url,
            last_publication_data: result.last_publication_date
          }

          return newNotice
        })

        setPageNotices(newNotices)  
      }
    }
  }


  async function carregarProximaPagina() {
    if(next_page !== null) {
      const response = await fetch(next_page).then(response => response.json())

      return response;
    }
  }

  return (
    <Container>
      <div className="containerGrid">
        {
          pageNotices.map(notice => (
            <CardAnimeNotices key={notice.uid} notice={notice}/>
          ))
        }
      </div>
      <div className="pageChanger">
        <button className="pageNumber" type="button">
          <span className={currentPage == 1 ? "firstPage" : ''}>{"<"}</span>
        </button>
        {
          pageNumbers.map(number => (
            <button 
              onClick={handleClickNumber} 
              className={`pageNumber ${currentPage == number ? "currentPage" : ''}`} 
              key={number}
            >
              <span>{number}</span>
            </button>
          ))
        }
        <button className="pageNumber" type="button">
          <span>{">"}</span>
        </button>
      </div>     
    </Container>
  )
}
