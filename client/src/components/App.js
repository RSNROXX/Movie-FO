import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// import { useState, useEffect } from "react";
// import { getPosts } from "./api/axios";

import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import MovieDetail from "./views/MovieDetail/MovieDetail";
import FavoritePage from "./views/FavoritePage/FavoritePage";

function App() {
  // const [posts, setPosts] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   getPosts().then((json) => {
  //     setPosts(json);
  //     setSearchResults(json);
  //   });
  // }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 72px)" }}>
        {/* <SearchBar posts={posts} setSearchResults={setSearchResults} /> */}
        <Switch>
          {/* <ListPage searchResults={searchResults} /> */}
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/movie/:movieId"
            component={Auth(MovieDetail, null)}
          />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
