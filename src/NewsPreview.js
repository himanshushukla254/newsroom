import Social from "./Social";


function NewsPreview(props) {
    const feeds = props.feeds;
    return (
        <div className="news-list">
            {feeds.map((feed, i) => (
                <div className="news-preview" key={i}>
                    <a href={feed.url} target="_blank">
                        <h2> {feed.title}</h2>
                        <p>Written By : {feed.author}</p>
                        <Social shareUrl={feed.url} title={feed.title} />
                    </a>
                </div>
            ))}
        </div>
    );
}
export default NewsPreview;