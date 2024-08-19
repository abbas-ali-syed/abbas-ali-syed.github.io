import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
function App() {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState();
  async function repoDataURL() {
    //Get repo data about github user
    await fetch("https://api.github.com/users/abbas-ali-syed/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank" href={item.svn_url}>
                {item.name}
              </a>
            </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetch("https://api.github.com/users/abbas-ali-syed")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Project />
    <div className="bg-[#0d0220] text-white App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={avatarURL} />
        <Card.Body className="bg-[#8c75b0]">
          <Card.Title className="text-white flex justify-center items-center">{githubUsername}</Card.Title>

          <Button variant="primary" onClick={repoDataURL} className="text-white flex justify-center items-center">
            List my public repos!
          </Button>
        </Card.Body>
      </Card>
      {repoData}
    </div>
    
    <Contact />
  </div>
  );
}

export default App;
