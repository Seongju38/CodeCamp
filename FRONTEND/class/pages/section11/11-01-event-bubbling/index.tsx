import { useQuery, gql } from "@apollo/client";

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

  const onClickAlert = (event: any) => {
    alert(event.target.id + "님이 작성한 글입니다.");
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
          <span style={{ margin: "10px" }} id={el.writer}>{el.number}</span>
          <span style={{ margin: "10px" }} id={el.writer}>{el.title}</span>
          <span style={{ margin: "10px" }} id={el.writer}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
