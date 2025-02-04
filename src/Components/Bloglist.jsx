import React, {useState} from 'react'


const blogsData = [
    {
      id: 1,
      title: 'How to Live a Purposeful Life',
      date: 'January 10, 2025',
      imageUrl: '/assets/purposelife.jpeg',
      link: '/blog/1',
    },
    {
      id: 2,
      title: 'Overcoming Challenges with Faith',
      date: 'January 15, 2025',
      imageUrl: '/assets/faith.jpeg',
      link: '/blog/2',
    },
    {
      id: 3,
      title: 'The Power of Prayer in Daily Life',
      date: 'January 17, 2025',
      imageUrl: '/assets/prayer.jpeg',
      link: '/blog/3',
    },
    {
      id: 4,
      title: 'Living with Gratitude Every Day',
      date: 'January 20, 2025',
      imageUrl: '/assets/gratitude.jpeg',
      link: '/blog/4',
    },
    {
      id: 5,
      title: 'Strength in Community: Why Church Matters',
      date: 'January 22, 2025',
      imageUrl: '/assets/community.jpg',
      link: '/blog/5',
    },
    {
      id: 6,
      title: 'The Role of Faith in Achieving Success',
      date: 'January 25, 2025',
      imageUrl: '/assets/role.jpeg',
      link: '/blog/6',
    },
    // Add more blog objects if needed
  ];

const Bloglist = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate the index range for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Pagination logic
  const totalPages = Math.ceil(blogsData.length / blogsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-list-container">
      <div className="intro-text">
        <h1>Weekly Articles with Insight Into the Weekend's Message</h1>
        <p>
          Our blog takes the message from the weekend and lays out the next
          right steps, so you can hear a message and do a message in practical
          ways.
        </p>
      </div>

      <div className="blogs">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-details">
              <h2>{blog.title}</h2>
              <p className="blog-date">{blog.date}</p>
              <a href={blog.link} className="read-more">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

  
  


export default Bloglist
