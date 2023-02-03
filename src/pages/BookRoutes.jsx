import BookLayout from "./BookLayout";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";
import { Routes, Route } from "react-router-dom";
export default function BookRoutes() {
  return (
    <>
      {/*<BookLayout /> BookLayout bahira rakhyo bhane useContent ko value use garna mildaina*/}
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          {/* index bhaneko chai /books ho bhane <booklist> ma janxa*/}
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
          {/*yo path ra mathi ko path same xa so react router le chai v6 dekhe aafai yesma lanxa if user /book/new ma gayo bhane*/}
        </Route>
      </Routes>
    </>
  );
}
