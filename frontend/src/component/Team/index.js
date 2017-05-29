import React, { Component } from 'react';
import NavBar from './../Navbar';
import TitleBar from './../TitleBar';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          name: '',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
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
                <div className="column is-4" key={'user-' + i}>

                  <div className="card pointer">
                    <div className="card-image">
                      <figure className="image is-square">
                        <img src={e.url} alt="profile_picture" />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">John Smith</p>
                          <p className="subtitle is-5">Director</p>
                          <p className="subtitle is-6">@johnsmith</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
