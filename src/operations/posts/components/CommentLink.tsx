import { Button, useRecordContext, useRedirect } from "react-admin";
import { Comment } from "@mui/icons-material";

export function CommentLink() {
  const { id: postId } = useRecordContext();
  const redirect = useRedirect();

  return (
    <Button
      label="Comments"
      onClick={() => redirect(`/posts/${postId}/comments`)}
      startIcon={<Comment />}
    />
  );
}
