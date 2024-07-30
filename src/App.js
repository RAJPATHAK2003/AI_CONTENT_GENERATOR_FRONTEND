import {BrowserRouter,Route,Routes} from "react-router-dom"
import Registration from "./components/Users/Register"
import Login from "./components/Users/Login"
import PublicNavbar from "./components/Navbar/PublicNavbar"
import PrivateNavbar from "./components/Navbar/PrivateNavbar"
import Dashboard from "./components/Users/Dashboard"
import Home from "./components/Home/Home"
import { useAuth } from "./AuthContext/AuthContext"

// import AuthRoute from "./components/AuthRoute.js/AuthRoute"
import BlogPostAIAssistant from "./components/ContentGeneration/ContentGeneration"
import Plans from "./components/Plan/Plan"
import FreePlanSignup from "./components/stripe/freeplansignup"
import CheckoutForm from "./components/stripe/CheckoutForm"
import ContentGenerationHistory from "./components/ContentGeneration/ContentHistory"

import AppFeatures from "./components/Features/Features"
import AboutUs from "./components/About/About"
import PaymentSuccessCard from "./components/SuccessCard.js/SuccessCard"

export default function App() {
  const {isAuthenticated}=useAuth();
  return (
    <>
    <BrowserRouter>
    {isAuthenticated ?<PrivateNavbar/> : <PublicNavbar/>}
    <Routes>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/generate-content" element={<BlogPostAIAssistant/>}/>
      <Route path="/history" element={<ContentGenerationHistory/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/plans" element={<Plans/>}/>
      <Route path="/free-plan" element={<FreePlanSignup/>}/>
      <Route path="checkout/:plan" element={<CheckoutForm/>}/>
      <Route path="/features" element={<AppFeatures/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/paymentsuccess" element={<PaymentSuccessCard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}