import "./App.css";
import Mainpage from "./components/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import TestState from "./Context/Test/testState";
import AuthState from "./Context/Auth/authState";
import AuthContext from "./Context/Auth/authContext";
import { css } from "@emotion/react";
import Login from "./components/Login";
import NewLogin from "./components/newLogin";
import Register from "./components/Register";
import ProtectedRoute from "./components/tools/PrivateRoute";
import Support from "./components/Support";
import Dashboard from "./components/Dashboard";
import Editdashboard from "./components/dashboard/Editdashboard";
import Jobburnout from "./components/exams/Jobburnout";
import Multipleintelligence from "./components/exams/Multipleintelligence";
import Mbbc from "./components/exams/Mbbc";
import Mbti from "./components/exams/Mbti";
import Haland from "./components/exams/Haland";
import ListExams from "./components/dashboard/ListExams";
import Leader from "./components/exams/Leader";
import ActiveWork from "./components/exams/ActiveWork";
import MCI from "./components/exams/MCI";
import Identification from "./components/exams/Package/Identification";
import Disc from "./components/exams/Disc";
import JobStress from "./components/exams/JobStress";
import Driving from "./components/exams/Driving";
import NEO from "./components/exams/NEO";
import PublicHealth from "./components/exams/PublicHealth";
import SolveProblem from "./components/exams/SolveProblem";
import Drugs from "./components/exams/Drugs";
import Question from "./components/exams/Question/Question";
import Gauge from "./components/exams/Question/Gauge";
import JobSatisfaction from "./components/exams/JobSatisfaction";
import EmotionalIntelligence from "./components/exams/EmotionalIntelligence";
import Store from "./components/store/Store";
import Payment from "./components/store/Payment";
import SelectExams from "./components/dashboard/SelectExams";
import CompanyPack from "./components/exams/Package/CompanyPack";
import PageArticles from "./components/tools/PageArticles";
import Resultexam from "./components/exams/Package/Resultexam";
import LoginPhone from "./components/LoginPhone";
import AllUsers from "./components/dashboard/AllUsers";
import ResultexamForDisc from "./components/exams/Package/ResultexamForDisc";
import ResultexamForNameQ6 from "./components/exams/Package/ResultexamForNameQ6";
import Chart3D from "./components/exams/Question/Chart3D";
import SpiderChart from "./components/exams/Question/SpiderChart";
import PieChart from "./components/exams/Question/PieChart";
import ForgetPass from './components/ForgetPass';
import SignUp from './components/SignUp';
import Hexaco from "./components/exams/Hexaco";
import CompanyAdmin from "./components/dashboard/CompanyAdmin";
import Companies from "./components/dashboard/Companies";

function App() {
  //const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(false);
  //const { user } = authContext;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const override = css`
    display: flex;
    margin: 20rem auto;
  `;

  return (
    <div className="App">
      {loading ? (
        <CircleLoader
          color={"#790153"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div className="container">
          <AuthState>
            <TestState>
              <Router>
                <Routes>
                  <Route path="/" element={<Mainpage />} />
                  <Route path="/Login" element={<LoginPhone />} />
                  <Route
                    path="/ResultexamForDisc"
                    element={<ResultexamForDisc />}
                  />
                  <Route
                    path="/ResultexamForNameQ6"
                    element={<ResultexamForNameQ6 />}
                  />
                  <Route path="/NewLogin" element={<NewLogin />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Companies" element={<Companies />} />
                  <Route path="/SelectExams" element={<SelectExams />} />
                  <Route path="/SelectExams/:Id" element={<SelectExams />} />
                  <Route path="/Store" element={<Store />} />
                  <Route path="/Payment" element={<Payment />} />
                  <Route path="/ListExams" element={<ListExams />} />
                  <Route path="/Question1" element={<Question number={3} />} />
                  <Route path="/Question2" element={<Question number={2} />} />
                  <Route path="/Question3" element={<Question number={0} />} />
                  <Route path="/Question4" element={<Question number={5} />} />
                  <Route path="/Question5" element={<Question number={4} />} />
                  <Route path="/Question6" element={<Question number={6} />} />
                  <Route path="/Question7" element={<Question number={7} />} />
                  <Route path="/Question8" element={<Question number={8} />} />
                  <Route path="/Question9" element={<Question number={9} />} />
                  <Route
                    path="/Question18"
                    element={<Question number={118} />}
                  />
                  <Route
                    path="/Question17"
                    element={<Question number={117} />}
                  />
                  <Route
                    path="/Question10"
                    element={<Question number={10} />}
                  />
                  <Route
                    path="/Question11"
                    element={<Question number={111} />}
                  />
                  <Route
                    path="/Question12"
                    element={<Question number={112} />}
                  />
                  <Route
                    path="/Question16"
                    element={<Question number={116} />}
                  />

                  <Route path="/Register" element={<Register />} />
                  {/* <Route element={<ProtectedRoute isAllowed={!!user} />}>
                    <Route path="home" element={<Home />} />
                    <Route path="dashboard" element={<Dashboard />} />
                  </Route> */}
                  <Route element={<ProtectedRoute isAllowed={true} />}>
                    {/* <Route
                      path="/Question5"
                      element={<Question number={4} />}
                    /> */}
                    <Route
                      path="/Question13"
                      element={<Question number={113} />}
                    />
                    <Route
                      path="/Question14"
                      element={<Question number={114} />}
                    />
                    <Route
                      path="/Question15"
                      element={<Question number={115} />}
                    />
                  </Route>

                  <Route path="/Editdashboard" element={<Editdashboard />} />
                  <Route
                    path="/EmotionalIntelligence"
                    element={<EmotionalIntelligence />}
                  />
                  <Route path="/Jobburnout" element={<Jobburnout />} />
                  <Route
                    path="/JobSatisfaction"
                    element={<JobSatisfaction />}
                  />
                  <Route path="/ActiveWork" element={<ActiveWork />} />
                  <Route path="/CompanyPack" element={<CompanyPack />} />
                  <Route path="/MCI" element={<MCI />} />
                  <Route path="/Disc" element={<Disc />} />
                  <Route path="/JobStress" element={<JobStress />} />
                  <Route path="/Driving" element={<Driving />} />
                  <Route path="/Identification" element={<Identification />} />
                  <Route path="/Leader" element={<Leader />} />
                  <Route
                    path="/Multipleintelligence"
                    element={<Multipleintelligence />}
                  />
                  <Route path="/Mbbc" element={<Mbbc />} />
                  <Route path="/Hexaco" element={<Hexaco />} />
                  <Route path="/Haland" element={<Haland />} />
                  <Route path="/Mbti" element={<Mbti />} />
                  <Route path="/NEO" element={<NEO />} />
                  <Route path="/PublicHealth" element={<PublicHealth />} />
                  <Route path="/SolveProblem" element={<SolveProblem />} />
                  <Route path="/Drugs" element={<Drugs />} />
                  <Route path="/Support" element={<Support />} />
                  <Route path="/Articles" element={<PageArticles />} />
                  <Route path="/Gauge" element={<Gauge />} />
                  <Route path="/AllUsers" element={<AllUsers />} />
                  <Route path="/Chart3D" element={<Chart3D />} />
                  <Route path="/Spider" element={<SpiderChart />} />
                  <Route path="/PieChart" element={<PieChart />} />
                  <Route path="/ForgetPass" element={<ForgetPass />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/CompanyAdmin" element={<CompanyAdmin />} />
                </Routes>
              </Router>
            </TestState>
          </AuthState>
        </div>
      )}
    </div>
  );
}

export default App;
