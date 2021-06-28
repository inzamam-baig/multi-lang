import { Suspense } from "react";
import "./i18n";
import Hello from "./Hello";
import LanguageSelector from "./LanguageSelector";
function App() {

  return (
    <div>
      <p>Change Language</p>
      <Suspense fallback={null}>
        <LanguageSelector/>
          <Hello/>
      </Suspense>
    </div>
  );
}

export default App;
