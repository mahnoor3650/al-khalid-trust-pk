import { useParams, Link } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <main>
      {/* Hero Banner */}
      <section className="slider-area2 relative h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/img/hero/h1_hero2.png')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="text-center w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Blog Details</h2>
          </div>
        </div>
      </section>

      {/* Blog Details */}
      <section className="blog_area section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Content */}
            <div className="lg:col-span-3">
              <article className="blog_item bg-white rounded-lg overflow-hidden shadow-md">
                <div className="blog_item_img relative">
                  <img src="/assets/img/blog/single_blog_1.png" alt="Blog Post" className="w-full h-96 object-cover" />
                </div>
                <div className="blog_details p-8">
                  <div className="blog-info-link flex gap-4 mb-4 text-sm text-body">
                    <span className="flex items-center gap-2">
                      <i className="fa fa-user text-theme-primary"></i>
                      Community
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fa fa-calendar text-theme-primary"></i>
                      January 15, 2021
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="fa fa-comments text-theme-primary"></i>
                      3 Comments
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-6">
                    Food Distribution Drive Success
                  </h2>
                  <div className="prose max-w-none text-body text-lg space-y-4">
                    <p>
                      Our recent food distribution drive reached over 500 families in need, providing essential supplies and bringing hope to struggling communities across Pakistan. The initiative, which took place in multiple locations, demonstrated the power of community support and collective action.
                    </p>
                    <p>
                      Volunteers from Al-Khalid Trust Pakistan worked tirelessly to ensure that food packages containing rice, flour, cooking oil, sugar, tea, and other essential items reached the most vulnerable families. Each package was carefully prepared to provide sufficient nutrition for a family for at least one month.
                    </p>
                    <p>
                      The success of this drive would not have been possible without the generous contributions of our donors and the dedication of our volunteers. We are committed to continuing these efforts and expanding our reach to help even more families in need.
                    </p>
                    <blockquote className="border-l-4 border-theme-primary pl-4 italic text-xl my-6">
                      "Every donation, no matter how small, makes a real difference in someone's life. Together, we can build a better future for those in need."
                    </blockquote>
                    <p>
                      As we move forward, we plan to organize similar distribution drives regularly, ensuring that vulnerable families continue to receive the support they need. We also encourage community members to join us in this noble cause, whether through donations or volunteer work.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="blog_right_sidebar space-y-8">
                {/* Search */}
                <aside className="single_sidebar_widget bg-white p-6 rounded-lg shadow-md">
                  <h4 className="widget_title text-xl font-semibold text-heading mb-4">Search</h4>
                  <form>
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
                              Latest News Post
                            </h3>
                          </Link>
                          <p className="text-body text-xs">January 12, 2021</p>
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

export default BlogDetails;
