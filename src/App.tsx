import { AuthProvider } from "./contexts/AuthContext";
import { ModalProvider } from "./contexts/ModalContext";
import { Router } from "./routes";

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <Router/>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
