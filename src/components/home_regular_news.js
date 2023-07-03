import RegularNews from './regular_news';
function HomeRegularNews ({blogs}) {
    return (
        <div className="grid-container">
            {blogs.map((blog) => {
                return (
                    <div className='grid-item'>
                        <RegularNews 
                        title={blog.title} 
                        description={blog.description}
                        author={blog.author}
                        authorImage={blog.authorImage}
                        authorTitle={blog.authorTitle}
                        category={blog.category}
                        image={blog.image}
                        date={blog.date} />
                    </div>
                );
            })}
            
        </div>
    );
}

export default HomeRegularNews;