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
    if (currentPage === pageNumbers.length) {
      const response = await carregarPaginaAnterior();

      setCurrentPage(oldState => oldState - 1)
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
    } else {
      const response = await carregarProximaPagina()

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


  async function carregarProximaPagina() {
    if(next_page !== null) {
      const response = await fetch(next_page).then(response => response.json())

      return response;
    }
  }

  async function carregarPaginaAnterior() {
    const response = await fetch(next_page).then(response => response.json())
    const prevPage = await fetch(response.prev_page).then(response => response.json())

    return prevPage;
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
      {
        pageNumbers.length > 1 ?
          <div className="pageChanger">
            <button onClick={currentPage != 1 ? handleClickNumber : (() => {})} className="pageNumber" type="button">
              <span className={currentPage == 1 ? "blockClick" : ''}>{"<"}</span>
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
            <button onClick={currentPage == pageNumbers.length ? (() => {}) : handleClickNumber} className="pageNumber" type="button">
              <span className={currentPage == pageNumbers.length ? "blockClick" : ''}>{">"}</span>
            </button>
          </div>  
        : 
          ""
      }    
    </Container>
  )
}
