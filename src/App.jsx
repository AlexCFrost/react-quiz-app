import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Result" element={<Result />} />
        </Routes>

      </>
    );
  }
}
