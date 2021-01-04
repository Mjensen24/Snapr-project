import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ExplorePage from './components/ExpolorePage';
import SinglePhoto from './components/SinglePhoto'
import PostButton from "./components/Navigation/PostButton";
import UserPhotoStream from "./components/UserPhotos";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className='test'>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/photos/:id">
            <SinglePhoto />
          </Route>
          <Route path="/post">
            <PostButton />
          </Route>
          <Route path='/' exact={true}>
            <ExplorePage />
          </Route>
          <Route path='/user-photos'>
            <UserPhotoStream />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
