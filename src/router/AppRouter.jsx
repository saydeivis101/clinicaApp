import { Route, Routes } from "react-router-dom"
import { HomePage } from "../clinicazulia/pages"
import { Navbar } from "../ui"

export const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' component={<HomePage/>} />
    </Routes>
    </>
  )
}
