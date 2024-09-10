import { RoutesConfig } from "@/config/Index";
import { ModalProvider } from "@/features/modals/ModalContext";

function App() {
  return (
    <>
      <ModalProvider>
        <RoutesConfig />
      </ModalProvider>
    </>
  );
}

export default App;
