import { Admin, Resource } from "react-admin";
import { Route } from "react-router-dom";

import { CommentList, CommentShow } from "./operations/comments";
import { dataProvider } from "./dataProvider";
import { PostList } from "./operations/posts/PostList";
import { PostShow } from "./operations/posts/PostShow";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" />
    <Resource name="comments" />
    <Resource name="posts" list={PostList} show={PostShow}>
      <Route path=":postId/comments" element={<CommentList />} />
      <Route path=":postId/comments/:commentId" element={<CommentShow />} />
    </Resource>
  </Admin>
);
