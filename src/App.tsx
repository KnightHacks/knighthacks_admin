import { Route } from "wouter";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
}
