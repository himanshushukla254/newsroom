import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from "react-share";
function Social(props) {
    const shareUrl = props.shareUrl;
    const title = props.title;
    return (
        <div className="social-share">
            <FacebookShareButton url={shareUrl} quote={title}><FacebookIcon size={15} round /></FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}><TwitterIcon size={15} round /></TwitterShareButton>
        </div>
    )
}

export default Social;