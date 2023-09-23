import RepositoryInfoLoader from "./components/RepositoryInfoLoader";
import CommitsLoader from "./components/CommitsLoader";
import {FaGithub} from "react-icons/fa6";

function App() {
  return (
    <main className="h-screen bg-dark-gray text-dark-marmol py-2">
      <h1 className="flex items-center gap-2 text-3xl justify-center font-bold"><FaGithub/> GitHub</h1>
      <h2 className="font-semibold text-center text-xl mb-2">Commits</h2>

      <div className="md:flex md:justify-around md:items-center">
        <RepositoryInfoLoader/>
        <CommitsLoader/>
      </div>
    </main>
  )
}

export default App
