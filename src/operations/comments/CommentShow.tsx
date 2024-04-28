import { Show, SimpleShowLayout, TextField } from "react-admin";
import { useParams } from "react-router-dom";

export function CommentShow() {
  const { commentId } = useParams();
  return (
    <Show resource="comments" id={commentId}>
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="email" label="email" />
        <TextField source="name" label="name" />
      </SimpleShowLayout>
    </Show>
  );
}
