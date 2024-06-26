import React from "react";
import {Link} from "react-router-dom";
const posts=[
    {
        id:1,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eos, incidunt reiciendis dolorum cumque delectus natus iure commodi, asperiores iste tempore beatae modi sunt libero nobis adipisci dignissimos voluptatem. Atque.",
        img:"https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id:2,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eos, incidunt reiciendis dolorum cumque delectus natus iure commodi, asperiores iste tempore beatae modi sunt libero nobis adipisci dignissimos voluptatem. Atque.",
        img:"https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id:3,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eos, incidunt reiciendis dolorum cumque delectus natus iure commodi, asperiores iste tempore beatae modi sunt libero nobis adipisci dignissimos voluptatem. Atque.",
        img:"https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id:4,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque eos, incidunt reiciendis dolorum cumque delectus natus iure commodi, asperiores iste tempore beatae modi sunt libero nobis adipisci dignissimos voluptatem. Atque.",
        img:"https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
];

const Home = () => {
    return (
      <div className="Home">
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                  </Link>
                  <p>{post.desc}</p>
                  <button>Read More</button>
                
              </div>
            </div>
          ))
          }
        </div>

        
      </div>
    );
  };

export default Home;