
import articles from "./article-content";
import ArticlesList from "../Components/ArticlesList";
const Article = ()=>{
    
    return (
        <div id="page-body">
          <ArticlesList articles={ articles}/>
        </div>
    )
}

export default Article;