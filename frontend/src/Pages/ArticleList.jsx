import { useEffect, useState } from "react";
import axios from "axios";
import CommentsList from "../Components/CommentsList";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import CommentForm from "../Components/CommentForm";
import useUser from "../hooks/useUser";

const ArticleList = () => {

  const [showComments, setShowComments] = useState(false);
  const { articleid } = useParams();
  const [articlesInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] , canUpvote : false });

  const {canUpvote} = articlesInfo;
  const {user , isLoading} = useUser();
  useEffect(() => {
    const getUpvotes = async () => {
      const token = user && await user.getIdToken();
    const headers = token ? {authToken : token} : {};
      const resp = await axios.get(`/api/articles/${articleid}`, {headers});
      const newArticleInfo =  resp.data;
      setArticleInfo(newArticleInfo);
      console.log(newArticleInfo.comments);
    };

    if(!isLoading){
      getUpvotes();
    }
 
  }, [isLoading  , user]);

  const handleUpvotes = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? {authToken : token} : {};
    const response = await axios.put(`/api/articles/${articleid}/upvote`,null, {headers});

    const updatedArticle =  response.data;

    setArticleInfo(updatedArticle);
  };

  const article = articles.find((article) => article.name === articleid);
  if (!article) {
    return <NotFound />;
  }

  return (
    <>
      <div id="page-body">
        <h1>{article.title}</h1>
        {user  ? (
           <div id="upvote-section">
           <button onClick={handleUpvotes}>{canUpvote ? "upvote" : "Already upvoted"}</button>
         </div>

        ) : <button>Login to upvote !</button>}
       

        <p>
          <strong>This article has {articlesInfo.upvotes} upvote(s) </strong>
        </p>
        {article.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <div className="comment">
          {/* <button onClick={() => setShowCommentBox(!showCommentBox)}>
            Add Comments
          </button> */}
          {user ? (
            
            <CommentForm
              articleid={articleid}
              onArticleUpdated={(updatedArticle) =>
                setArticleInfo(updatedArticle)
              }
            />
          ) : <button>Login to comment </button>}
        </div>
      </div>
      <div className="comment">
        <button onClick={() => setShowComments(!showComments)}>
          Show Comments
        </button>
        {showComments && <CommentsList comments={articlesInfo.comments} />}
      </div>
    </>
  );
};

export default ArticleList;
