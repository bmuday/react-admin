import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostsList from "./components/PostsList";

const App = () => {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource name="posts" list={PostsList} />
    </Admin>
  );
};

export default App;
