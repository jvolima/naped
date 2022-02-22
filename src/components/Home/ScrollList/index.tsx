import { Container } from "./styles";

import { ScrollCard } from "../ScrollCard";
import { useNotices } from "../../../hooks/useNotices";

export function ScrollList() {
  const { notices } = useNotices();

  return (
    <Container>
      {
        notices.map(notice => (
          <ScrollCard 
            uid={notice.uid}
            title={notice.title}
            description={notice.description}
            last_publication_data={notice.last_publication_data}
            image={notice.image} 
            key={notice.uid}
          />
        ))
      }
    </Container>
  )
}