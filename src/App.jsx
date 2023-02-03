import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";

import BookRoutes from "./pages/BookRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>Extra content</h1>} />{" "}
        {/* Extra content ne render hunxa ra tala ko /books pani render hunxa */}
      </Routes>
      <nav>
        <ul>
          <li>
            {/* <Navlink to="/">Home</Navlink> customize garna sakinxa */}
            <Link to="/">Home</Link>
            {/*Link ma replace property xa ...use garyo bhane tyo bhanda aagadi gako page lai history bata remove garxa
            reloadDocument property reload the entire page
            state={}
            */}
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        {/*<Route path="/books" element={<BookLayout />}>*/}
        {/*//sabai subroutes ma chai booklayout aauxa*/}
        {/* <Route index element={<BookList />} />{" "}*/}
        {/* index bhaneko chai /books ho bhane <booklist> ma janxa*/}
        {/*<Route path=":id" element={<Book />} />*/}
        {/* <Route path="new" element={<NewBook />} />{" "}*/}
        {/*yo path ra mathi ko path same xa so react router le chai v6 dekhe aafai yesma lanxa if user /book/new ma gayo bhane*/}
        {/*</Route>*/}
        <Route path="*" element={<NotFound />} />{" "}
        {/*mathi define gareko bhanda aaru path ma gayo bhane not found page ma janxa*/}
      </Routes>
    </>
  );
}

export default App;
