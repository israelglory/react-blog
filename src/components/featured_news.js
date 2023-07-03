import featuredImage from './images/featured.png';
function FeaturedNews ({}) {
    return (
        <div className="featured-news">
        <div className='featured-news-item'>
            <img src= "https://images.ctfassets.net/ooa29xqb8tix/5IT8aFdFfBFbclWnPEefKN/184ea164a841f4648dd4b933457b0f6f/1.jpg"  alt="hello" className='featured-img' />
        </div>

        <div className='featured-news-item'>
        <div className="featured-news-content">
        <div style={
            {
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: "1rem",
                flexDirection: "row",
           }
        }>
            <p className='category-text'>UI DESIGN</p>
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
            <p className='category-text'>July 2, 2021</p>
        </div>
            <h2 className="featured-news-title">Understanding color theory: the color wheel and finding complementary colors</h2>
            <p className="featured-news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed cursus blandit, nunc elit vestibulum enim, vitae ultrices velit nunc eget dolor. Donec euismod, nisl sed cursus blandit, nunc elit vestibulum enim, vitae ultrices velit nunc eget dolor.</p>
            <div className='author-div'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXXqjQBMKkHmsC15lP-nFTJF3igtndYCWnfwyUOxJT5xON1YsDXRtH-oxlVKEyTqP9FE&usqp=CAU" alt="Author Avatar" className='author-img'/>
            <div className="author-info">
                <p className="author-name">John Doe</p>
                <p className="author-title category-text">UI Designer</p>
                </div>
            </div>
        </div>
        </div>
        
        

        </div>
    );
}

export default FeaturedNews;