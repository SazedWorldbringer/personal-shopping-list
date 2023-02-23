import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./components/Header/Header"
import ListDetail from "./pages/ListDetail"
import ListForm from "./pages/ListForm"
import Lists from "./pages/Lists"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const AppWrapper = styled.div`
  text-align: center;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Lists />} />
            <Route path="/list/:listId/new" element={<ListForm />} />
            <Route path="/list/:listId" element={<ListDetail />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </>
  )
}

export default App
