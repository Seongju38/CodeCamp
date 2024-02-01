import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    // target만 사용했을 때
    // if (event.target instanceof HTMLDivElement)
    //     alert(event.target.id + "님이 작성한 글입니다.")

    alert(event.currentTarget.id + "님이 작성한 글입니다."); // 현재 이벤트 타겟의 아이디를 가져와라
  }

  const qqq = () => {
    alert("클릭 title");
  }

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div id={el.writer} onClick={onClickAlert}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
