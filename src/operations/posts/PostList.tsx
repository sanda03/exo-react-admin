import { Datagrid, FunctionField, List, TextField, useGetOne, useRecordContext } from "react-admin";
import { CommentLink } from "./components/CommentLink";

export function UserField() {
  const { id: postId } = useRecordContext();
  const { data: user } = useGetOne("users", { id: postId });
  return <TextField record={user} source="name" label="test" />;
}

export function PostList() {
  return (
    <List title="Post list">
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <FunctionField label="User" render={() => <UserField />} />
        <CommentLink />
      </Datagrid>
    </List>
  );
}
