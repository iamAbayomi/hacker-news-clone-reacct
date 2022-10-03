/* eslint-disable @next/next/no-img-element */
import Headline from "@/components/headline";
import { useGetNews } from "@/hooks/story";

function Index() {
  const { news, isLoading } = useGetNews();
  console.log("news", news);
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="header-section">
            <div className="header-image-section">
              <img alt="gif" className="header-image" src="y18.gif" />
            </div>
            <div className="header-text-section">
              <div className="header-text-content">
                <p className="header-text">Hacker News</p>
              </div>
              <div className="header-menu">
                <p className="menu-item">new |</p>
                <p className="menu-item">past |</p>
                <p className="menu-item">comments |</p>
                <p className="menu-item">ask |</p>
                <p className="menu-item">show |</p>
                <p className="menu-item">jobs |</p>
                <p className="menu-item">submit</p>
              </div>
            </div>
          </div>
          <div className="login-section">
            <p>login</p>
          </div>
        </div>

        <div className="lists-of-headline">
          <Headline
            headline={{
              url: "",
              title: "",
              score: "",
              by: "",
              descendents: ""
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
