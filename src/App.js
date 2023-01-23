import TaskPage from "./pages/TaskPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';



const queryClient = new QueryClient();
// queryClient.invalidateQueries({
//   queryKey: ['new-task']
// });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<TaskPage />} />
          {/* <Route path="/" element={<LoginPage />} /> */}
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
    
  );
}

export default App;
