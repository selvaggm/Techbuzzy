import { useState, useEffect } from 'react';
import '../Styles/Blogs.css';
import BlogModal from './BlogModal';
import '../Styles/GlobalStyles.css'


function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedTag, setSelectedTag] = useState('All Posts');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [allTags, setAllTags] = useState([]);
  const [loading, setLoading] = useState(true);

  // Proper CSV parser function
  const parseCSVLine = (line) => {
    const result = [];
    let current = '';
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        result.push(current.trim().replace(/^"|"$/g, ''));
        current = '';
      } else {
        current += char;
      }
    }

    result.push(current.trim().replace(/^"|"$/g, ''));
    return result;
  };

  // Fetch data from Google Sheets
  useEffect(() => {
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTWWm-OR0giR1HD9D1dK7auhoWh_oDI0gYMVg2yObucJ7j6KY6QWBH9yMR1wJJrmS7cKpR5w6Da-8qu/pub?output=csv';

    fetch(SHEET_URL)
      .then(response => response.text())
      .then(data => {
        const rows = data.trim().split('\n');
        
        // Skip header row and parse data
        const blogData = rows.slice(1).map(row => {
          const parsed = parseCSVLine(row);
          
          return {
            id: parsed[0]?.trim() || '',
            title: parsed[1]?.trim() || '',
            content: parsed[2]?.trim() || '',
            image: parsed[3]?.trim() || '',
            tags: parsed[4]?.trim().split(',').map(tag => tag.trim()).filter(tag => tag) || []
          };
        }).filter(blog => blog.title && blog.id);

        setBlogs(blogData);
        setFilteredBlogs(blogData);

        // Extract all unique tags
        const uniqueTags = ['All Posts'];
        blogData.forEach(blog => {
          blog.tags.forEach(tag => {
            if (tag && !uniqueTags.includes(tag)) {
              uniqueTags.push(tag);
            }
          });
        });
        setAllTags(uniqueTags);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  }, []);

  // Handle tag filtering
  const handleFilterClick = (tag) => {
    setSelectedTag(tag);
    
    if (tag === 'All Posts') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.tags.includes(tag)));
    }
  };

  if (loading) return <section className="blog"><div className="loading">Loading blogs...</div></section>;

  return (
    <section className="blog" id="blog">
      <div className="blog-header">
        <h2>Tech Insights & Updates</h2>
        <p>Stay updated with the latest trends, insights, and best practices in technology and software development</p>
      </div>

      {/* Filter Buttons */}
      <div className="blog-filters">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => handleFilterClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {filteredBlogs.length > 0 && (
        <div 
          className="blog-featured"
          onClick={() => setSelectedBlog(filteredBlogs[0])}
        >
          <div className="featured-image">
            {filteredBlogs[0].image ? (
              <img src={filteredBlogs[0].image} alt={filteredBlogs[0].title} onError={(e) => { e.target.style.display = 'none'; }} />
            ) : (
              <div className="no-image-placeholder">No Image</div>
            )}
            <span className="featured-label">Featured Post</span>
          </div>
          <div className="featured-content">
            <h3>{filteredBlogs[0].title}</h3>
            <p>
              {filteredBlogs[0].content.length > 150 
                ? `${filteredBlogs[0].content.substring(0, 150)}...` 
                : filteredBlogs[0].content}
            </p>
            <div className="featured-tags">
              {filteredBlogs[0].tags.map((tag, idx) => (
                <span key={idx} className="tag-badge">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="blog-grid">
        {filteredBlogs.slice(1).map(blog => (
          <div 
            key={blog.id} 
            className="blog-card"
            onClick={() => setSelectedBlog(blog)}
          >
            <div className="blog-card-image">
              {blog.image ? (
                <img src={blog.image} alt={blog.title} onError={(e) => { e.target.style.display = 'none'; }} />
              ) : (
                <div className="no-image-placeholder">No Image</div>
              )}
            </div>
            <div className="blog-card-content">
              <h4>{blog.title}</h4>
              <p>
                {blog.content.length > 100 
                  ? `${blog.content.substring(0, 100)}...` 
                  : blog.content}
              </p>
              <div className="blog-tags">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="tag-small">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </section>
  );
}

export default Blog;
