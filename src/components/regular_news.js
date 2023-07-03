import featuredImage from './images/featured.png';
function RegularNews ({title, description, author, date, image, authorImage, category, authorTitle}) {
    return (
        <div className="regular-news">
        <img src={image} alt="hello" className='regular-img'/>
        <div className="regular-news-content">
        <div style={
            {
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: "1rem",
                flexDirection: "row",
           }
        }>
            <p className='category-text' style={
                {
                    fontSize: "12px"
                }
            }>{category}</p>
            <div style={
                {
                    width: "4px",
                    height: '4px',
                    borderRadius: "100px",
                    marginLeft: "12px",
                    marginRight: "12px",
                    background: "rgba(255, 255, 255, 0.60)",
                }
            }></div>
            <p className='category-text' style={
                {
                    fontSize: "12px"
                }
            }>{date}</p>
        </div>
            <h2 className="regular-news-title">{title}</h2>
            <p className="regular-news-description">{description}</p>
            <div className='author-div'>
            <img src={authorImage} alt="Author Avatar" className='author-img'/>
            <div className="author-info">
                <p className="author-name">{author}</p>
                <p className="author-title category-text">{authorTitle}</p>
                </div>
            </div>
        </div>

        </div>
    );
}

export default RegularNews;