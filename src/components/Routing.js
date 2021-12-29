import { Route, Routes } from "react-router-dom";
import { DataContext } from "./Context";
import { useContext } from "react";

export default function Routing() {
  const { routingArray } = useContext(DataContext)

  return (
    <Routes>
      {
        routingArray.map(({path, element}) => (
          <Route key={path + element} path={path} element={element}/>
        ))
      }
    </Routes>
  )
}