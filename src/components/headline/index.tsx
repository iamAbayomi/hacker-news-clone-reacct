import { INewsItem } from "../../types";

type props = {
  newsId: number;
  headline: INewsItem;
};

const Headline = ({ newsId, headline }: props) => {
  let headlineNo = 1;

  const getWebsiteDomain = (url: string) => {
    if (url) {
      let domain = url.split("/");
      return `(${domain[2]})`;
    }
    return "";
  };
  return (
    <div className="headline">
      {}
      <div className="headline-no">
        <p>{newsId}.</p>
        <div className="grayarrow" title="upvote"></div>
      </div>
      <div className="headline-content">
        <div className="headline-section">
          <a
            href={headline.url}
            className="main-headline link-style"
            target="_blank"
            rel="noreferrer"
          >
            {headline.title}
          </a>
          <p className="headline-website">{getWebsiteDomain(headline.url)}</p>
        </div>
        <div className="headline-comments">
          <p>{headline.score} points</p>
          <p>by {headline.by} </p>
          <p>58 minutes ago</p>
          <p>| hide</p>
          <p>| {headline.descendants} comments</p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
