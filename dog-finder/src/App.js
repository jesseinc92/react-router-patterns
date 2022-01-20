import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import AllDogs from "./AllDogs";
import FilterDog from "./FilterDog";
import './App.css';


const whiskey = '/assets/whiskey.jpg';
const perry = '/assets/perry.jpg';
const tubby = '/assets/tubby.jpg';
const duke = '/assets/duke.jpg';


const App = (props) => {
    return (
        <div className="App">
            <Nav />
            <Outlet />

            <Routes>
                <Route path='/'>
                    <Route path='dogs'>
                        <Route path=':dogName' element={<FilterDog dogs={props.dogs} />} />
                        <Route path='*' element={<AllDogs dogs={props.dogs} />} />
                        <Route index element={<AllDogs dogs={props.dogs} />} />
                    </Route>
                    <Route path='*' element={<AllDogs dogs={props.dogs} />} />
                </Route>
            </Routes>
        </div>
    );
}

App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }


export default App;