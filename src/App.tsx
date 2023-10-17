import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import './App.css'

function Main(){
  return (
    <div>
      <h1>Main</h1>
      <Link to={`inbox`}>To Inbox</Link>
    </div>
  )
}

function Inbox(){
  return (
    <div>
      Inbox
      <Link to={`/`}>To Main</Link>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
