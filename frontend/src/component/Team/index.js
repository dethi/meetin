import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          id: 2,
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          id: 3,
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          id: 4,
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          id: 5,
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          id: 6,
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          id: 7,
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <NavBar menuActive="team" />
        <TitleBar title="Mon equipe" />
        <div className="container">
          <div className="columns column is-8 is-offset-2 is-multiline">
            {this.state.users.map((e, i) => {
              return (
                <Link
                  className="column is-4"
                  key={'user-' + i}
                  to={'/user/' + e.id}
                >
                  <div className="card boxed">
                    <div className="card-image">
                      <figure className="image is-square">
                        <img src={e.url} alt="profile_picture" />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">John Smith</p>
                          <p className="subtitle is-6">Director</p>
                          <p className="subtitle is-6">@johnsmith</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
