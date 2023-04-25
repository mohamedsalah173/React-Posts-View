import './App.css';
import Posts from './components/posts/posts'
import RenderedPosts from './components/renderedPosts/renderedPosts'
import Search from './components/search/search'
import React, { useEffect, Fragment } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setPosts, setRenderedPosts, setSearchR} from "./slice";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { posts, renderedPosts, searchR } = useSelector(
    (state) => state.posts
  );

    useEffect(() => {
      // Fetch data from API endpoint
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => dispatch(setPosts(data)));
    }, []);
  

    useEffect(() => {
      if (!searchR) {
        dispatch(setRenderedPosts([]));
        return;
      }
  
      const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchR.toLowerCase())
      );
      dispatch(setRenderedPosts(filteredPosts));
    }, [searchR, posts, dispatch]);
  
    return (
      <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Posts posts={posts} />} />
        <Route
          path="/search"
          element={
            <Fragment>
              <Search
                searchR={searchR}
                setSearchR={(keyword) => dispatch(setSearchR(keyword))}
              />
              <RenderedPosts renderedPosts={renderedPosts} />
            </Fragment>
          }
        />
      </Routes>
    </Fragment>

  );
}

export default App;
