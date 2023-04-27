import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Wecome from "./features/auth/Wecome";
import NotesList from "./features/notes/NotesList";
import UserList from "./features/users/UserList";
import EditUser from "./features/users/EditUser";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import NewUserForm from "./features/users/NewUserForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Wecome />} />

          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":id" element={<EditUser />} />
            <Route path="new" element={<NewUserForm />} />
          </Route>

          <Route path="notes">
            <Route index element={<NotesList />} />
            <Route path="id" element={<EditNote />} />
            <Route path="new" element={<NewNote />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
