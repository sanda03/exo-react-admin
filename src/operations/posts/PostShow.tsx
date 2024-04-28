import {
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from "react-admin";
import { CommentLink } from "./components/CommentLink";
import { UserField } from "./PostList";

export function PostShow() {
  return (
    <Show
      actions={
        <TopToolbar>
          <CommentLink />
        </TopToolbar>
      }
    >
      <SimpleShowLayout>
        <TextField source="id" label="ID" />
        <TextField source="title" label="Title" />
        <FunctionField label="User" render={() => <UserField />} />
      </SimpleShowLayout>
    </Show>
  );
}
