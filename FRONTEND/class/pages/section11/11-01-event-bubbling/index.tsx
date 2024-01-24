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

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }} id={el.writer} onClick={onClickAlert}>{el.number}</span>
          <span style={{ margin: "10px" }} id={el.writer} onClick={onClickAlert}>{el.title}</span>
          <span style={{ margin: "10px" }} id={el.writer} onClick={onClickAlert}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
