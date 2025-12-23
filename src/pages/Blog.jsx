import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    { id: 1, image: "/assets/img/blog/single_blog_1.png", day: "15", month: "Jan", title: "Food Distribution Drive Success", excerpt: "Our recent food distribution drive reached over 500 families in need, providing essential supplies and bringing hope to struggling communities.", category: "Community", comments: 3 },
    { id: 2, image: "/assets/img/blog/single_blog_2.png", day: "20", month: "Jan", title: "Water Project Completion", excerpt: "We successfully completed 5 new water bore drilling projects, ensuring clean drinking water access for multiple communities.", category: "Projects", comments: 5 },
    { id: 3, image: "/assets/img/blog/single_blog_3.png", day: "25", month: "Jan", title: "Business Setup Workshop", excerpt: "A successful workshop was conducted to help widows and needy individuals start their own small businesses.", category: "Education", comments: 2 },
    { id: 4, image: "/assets/img/blog/single_blog_4.png", day: "01", month: "Feb", title: "Ramzan Preparations Begin", excerpt: "We are preparing for the upcoming Ramzan season with special food packages and Iftar dinner arrangements.", category: "Ramzan", comments: 8 },
    { id: 5, image: "/assets/img/blog/single_blog_5.png", day: "10", month: "Feb", title: "Monthly Grocery Distribution", excerpt: "Regular monthly grocery support continues to help over 300 families meet their nutritional needs.", category: "Support", comments: 4 },
  ];

  return (
    <main>
      {/* Hero Banner */}
      <section className="slider-area2 relative h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/img/hero/h1_hero2.png')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="text-center w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Blog</h2>
          </div>
        </div>
      </section>

      {/* Blog Area */}
      <section className="blog_area section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="blog_left_sidebar space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="blog_item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <div className="blog_item_img relative">
                      <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                      <Link to={`/blog/${post.id}`} className="blog_item_date absolute top-4 left-4 bg-white rounded-lg p-4 text-center shadow-lg">
                        <h3 className="text-2xl font-bold text-theme-primary">{post.day}</h3>
                        <p className="text-body text-sm">{post.month}</p>
                      </Link>
                    </div>
                    <div className="blog_details p-6">
                      <Link to={`/blog/${post.id}`} className="d-inline-block">
                        <h2 className="blog-head text-2xl font-semibold text-heading mb-4 hover:text-theme-primary transition">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-body mb-4">{post.excerpt}</p>
                      <ul className="blog-info-link flex gap-4 text-sm text-body">
                        <li className="flex items-center gap-2">
                          <i className="fa fa-user text-theme-primary"></i>
                          <span>{post.category}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <i className="fa fa-comments text-theme-primary"></i>
                          <span>{post.comments} Comments</span>
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                <nav className="blog-pagination flex justify-center">
                  <ul className="pagination flex gap-2">
                    <li className="page-item">
                      <a href="#" className="page-link px-4 py-2 bg-white border border-gray-300 rounded hover:bg-theme-primary hover:text-white transition">
                        <i className="fas fa-angle-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link px-4 py-2 bg-white border border-gray-300 rounded hover:bg-theme-primary hover:text-white transition">1</a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link px-4 py-2 bg-theme-primary text-white rounded">2</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link px-4 py-2 bg-white border border-gray-300 rounded hover:bg-theme-primary hover:text-white transition">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="blog_right_sidebar space-y-8">
                {/* Search */}
                <aside className="single_sidebar_widget bg-white p-6 rounded-lg shadow-md">
                  <h4 className="widget_title text-xl font-semibold text-heading mb-4">Search</h4>
                  <form>
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input 
                          type="text" 
                          className="form-control w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-theme-primary" 
                          placeholder="Search Keyword"
                        />
                        <button className="bg-theme-primary text-white px-4 py-2 rounded-r hover:opacity-90 transition" type="button">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <button className="btn btn-primary w-full" type="submit">Search</button>
                  </form>
                </aside>

                {/* Categories */}
                <aside className="single_sidebar_widget bg-white p-6 rounded-lg shadow-md">
                  <h4 className="widget_title text-xl font-semibold text-heading mb-4">Category</h4>
                  <ul className="list space-y-2">
                    {['Community', 'Projects', 'Education', 'Ramzan', 'Support'].map((cat, index) => (
                      <li key={index}>
                        <a href="#" className="flex justify-between items-center text-body hover:text-theme-primary transition py-2">
                          <span>{cat}</span>
                          <span className="text-theme-primary">({Math.floor(Math.random() * 20) + 1})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>

                {/* Recent Posts */}
                <aside className="single_sidebar_widget bg-white p-6 rounded-lg shadow-md">
                  <h3 className="widget_title text-xl font-semibold text-heading mb-4">Recent Post</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="media post_item flex gap-3">
                        <img src={`/assets/img/post/post_${num}.png`} alt={`Post ${num}`} className="w-20 h-20 object-cover rounded" />
                        <div className="media-body">
                          <Link to={`/blog/${num}`}>
                            <h3 className="text-heading hover:text-theme-primary transition text-sm font-semibold">
                              From life was you fish...
                            </h3>
                          </Link>
                          <p className="text-body text-xs">January 12, 2019</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
