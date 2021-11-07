import m from "mithril";
import "./App.css";

import { Counter } from "./Counter";
import { Friends } from "./Friends";


export const App = () => {
  return {
    view: () => {
      return (
        <>
          <h1>My Mithril App</h1>
          <Counter />
          <Friends />
        </>
      )
    },
  }
}


