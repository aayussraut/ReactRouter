import { Link, Outlet, useSearchParams } from "react-router-dom";
export default function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const n = searchParams.get("n");
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${n}`}>Book {n} </Link>
      <br />
      <Link to="/books/new">New Book</Link>
      <br />
      <Outlet context={{ hello: "world" }} />
      {/*booklayout chai nested route ko main route ma rakheko bhayera ..sub routes ko content show hudaina tesaile Outlet use garam tyo conetenct show garna*/}
      {/*context chai subroutes ma same data pass garna use huncha*/}

      <input
        type="number"
        name={searchParams}
        onChange={(e) => {
          setSearchParams({ n: e.target.value });
        }}
      />
    </>
  );
}
