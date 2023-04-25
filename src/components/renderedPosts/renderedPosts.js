import './renderedPosts.css'

export default  function RenderedPosts({ renderedPosts }) {
    return (
        <div>
            <div id="cards_landscape_wrap-2">
            <div className="container">
                <div className="row">

                {renderedPosts.map((post) => (
                
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" key={post.id}>
                            <div className="card-flyer">
                                <div className="text-box">
                                    <div className="text-container">
                                        <h6>{post.title}</h6>
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                 ))}
                </div>
            </div>
            </div>        
        </div>
    );
  }
  