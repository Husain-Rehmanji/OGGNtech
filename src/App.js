import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import "./App.css"
import Slider from './Comp/Slider'
import Footer from './Footer'
import Cont from './components/Contact/Cont'
import Events from './components/Events/Events'
import Proj from './components/Projects/Proj'
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
import Blog from './components/blog/Blog'
import BlogDetails from './components/blog/BlogDetails'
import Header from './components/common/heading/Header'
import Faqs from './components/faqs/faqs'
// import Login from './components/login/Login'
import Review from './components/review/review'
import Team from './components/team/Team'

const App = () => {
  return (
    <>
    <Router>
     <Header/>
      <Switch>
        <Route path='/' exact component={Slider} />
        <Route path='/about' exact component={About} />
        <Route path='/courses' exact component={CourseHome} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/contact' exact component={Cont} />
        <Route path='/projects' exact component={Proj} />
        <Route path='/events' exact component={Events} />
        <Route path='/blog/BlogDetails' exact component={BlogDetails} />
        <Route path='/team'  exact component={Team} />
        <Route path='/faqs' exact component={Faqs} />
        <Route path='/review' exact component={Review} />
        {/* <Route path='/login' exact component={Login} /> */}
      </Switch>
     </Router>
     <Footer />
     </>
  )
}

export default App
