import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DynamicFormBuilder from "./DynamicFormBuilder";
import Explanation from "./Explanation";
import styled from "styled-components";

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Full viewport height */
  margin: 0 auto; /* Center content horizontally */
  text-align: center; /* Center text inside */
`;

function App() {
  return (
    <Router>
      <CenterWrapper>
        <Routes>
          {/* Default Route to DynamicFormBuilder */}
          <Route path="/" element={<DynamicFormBuilder />} />
          {/* Route to Explanation */}
          <Route path="/explanation" element={<Explanation />} />
        </Routes>
      </CenterWrapper>
    </Router>
  );
}

export default App;
