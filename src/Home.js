import { useState, useEffect } from "react";
import NewsPreview from "./NewsPreview";

function Home(){
    
    const [feeds, setFeeds] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('api')
        .then(res => {
            return res.json();
        }).then(data => {
            setFeeds(data.articles);
            setIsPending(false);
            setError(null);
        }).catch(err => {
            setIsPending(false);
            setError(err);
        })
    },[])
    return (
        <div className="home">
            {isPending && <div> Loading... </div>}
            {error && <div> error </div>}
            {!error && feeds && <NewsPreview feeds={feeds} />}
        </div>
    );
}
export default Home;