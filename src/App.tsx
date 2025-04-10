import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Course from "./pages/Course/Course";
import Users from "./pages/Users/Users";
import Designer from "./pages/Users/components/Designer/Designer";
import Manager from "./pages/Users/components/Manager/Manager";
import PageNotFound from "./pages/Users/PageNotFound/PageNotFound";
import Lesson18 from "./lessons/Lesson18/Lesson18";

// Lessons imports:
// default import of component Lesson06
// by default import you can use other names of component
// import Task6 from "./lessons/Lesson06/Lesson06";
// import Lesson06 from "./lessons/Lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "./lessons/Lesson09/Lesson09";
// import Lesson10 from "./lessons/Lesson10/Lesson10";
// import Lesson11 from "./lessons/Lesson11/Lesson11";
// import Lesson12 from "./lessons/Lesson12/Lesson12";
// import Lesson13 from "./lessons/Lesson13/Lesson13";
// import Lesson14 from "./lessons/Lesson14/Lesson14";

// Homeworks imports:
// import Homework06 from "./homeworks/Homework06/Homework06";
// import Homework07 from "./homeworks/Homework07/Homework07";
// import Homework08 from "./homeworks/Homework08/Homework08";
// import Homework09 from "./homeworks/Homework09/Homework09";
// import Homework10 from "./homeworks/Homework10/Homework10";
// import Homework11 from "./homeworks/Homework11/Homework11";
// import Homework12 from "./homeworks/Homework12/Homework12";
// import Homework14 from "./homeworks/Homework14/Homework14";
// import Homework15 from "./homeworks/Homework15/Homework15";

// Consultations imports:
// import Consultation04 from "./consultations/Consultation04/Consultation04";
// import Consultation05 from "./consultations/Consultation05/Consultation05";
// import Consultation06 from "./consultations/Consultation06/Consultation06";

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       {/*<Task6 />*/}
//       {/* <Lesson06 /> */}
//       {/* <Lesson07 /> */}
//       {/* <Lesson08 /> */}
//       {/* <Lesson09 /> */}
//       {/* <Lesson10 /> */}
//       {/* <Lesson11 /> */}
//       {/* <Lesson12 /> */}
//       {/* <Lesson13 /> */}
//       {/* <Lesson14 /> */}

//       {/* <Homework06 /> */}
//       {/* <Homework07 /> */}
//       {/* <Homework08 /> */}
//       {/* <Homework09 /> */}
//       {/* <Homework10/> */}
//       {/* <Homework11/> */}
//       {/* <Homework12/> */}
//       {/* <Homework14/> */}
//       {/* <Homework15/> */}

//       {/* <Consultation04 /> */}
//       {/* <Consultation05 /> */}
//       {/* <Consultation06 /> */}
//     </>
//   );
// }
// export default App;

function App() {
  return (
    //BrowserRouter is a global wrapper for the entire application,
    // which allows you to use routing
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - a wrapper that collects all the application routes */}
        <Routes>
          {/* Route - a library component to which the route is passed and the component (page) 
          that should be called if the transition is made along this route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/designer" element={<Designer />} />
          <Route path="/users/manager" element={<Manager />} />
          <Route path="/Lesson18" element={<Lesson18 />} />
          {/* path='*' - a special route that will call the passed component in the case 
          that the route that the user is accessing is not found in the routes above */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
