import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = () => {
    // 여기서 수정하기 하자!!
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <div>$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
      />
      <div>$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$</div>
    </div>
  );
}
