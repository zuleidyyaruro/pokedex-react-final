import AuthProvider from "./auth/AuthProvider";
import Routes from "./Router/Routes";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </div>
  );
}

export default App;
