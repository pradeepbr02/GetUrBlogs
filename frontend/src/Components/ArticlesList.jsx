import { Link } from "react-router-dom"
const ArticlesList = ({articles})=>{
    return (
        <>
        {articles.map(art=>{
            return(
                <div className="article-list-item" key = {art.name}> 
            
                    <h1>{art.title.toUpperCase()}</h1>
                  
                    <p>
                        {art.content.map(c =>c.slice(0 , 150))}
                        <Link to={`/articlelist/${art.name}`}>
                        ..read more
                  </Link>
                    </p>
                    
                 
                
                </div>
            )
        })}
        </>
    )
}
export default ArticlesList