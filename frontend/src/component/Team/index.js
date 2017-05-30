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
          name: 'John Mc Queen',
          role: 'Directeur',
          pseudo: 'johnny',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          id: 2,
          name: 'John Mc Queen',
          role: 'Directeur',
          pseudo: 'johnny',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          id: 3,
          name: 'Marie Tchi',
          role: 'Assistance',
          pseudo: 'maryy',
          url: 'http://www.raoul-gilibert.com/wp-content/uploads/2016/01/portrait-femme-studio-corporate-lorraine-metz-016.jpg'
        },
        {
          id: 4,
          name: 'John Mc Queen',
          role: 'Directeur',
          pseudo: 'johnny',
          url: 'http://blogs.timesofindia.indiatimes.com/wp-content/uploads/2015/12/mark-zuckerberg.jpg'
        },
        {
          id: 5,
          name: 'John Mc Queen',
          role: 'Directeur',
          pseudo: 'johnny',
          url: 'http://www.raoul-gilibert.com/wp-content/uploads/2016/01/portrait-femme-studio-corporate-lorraine-metz-016.jpg'
        },
        {
          id: 6,
          name: 'John Mc Queen',
          role: 'Directeur',
          pseudo: 'johnny',
          url: 'http://www.raoul-gilibert.com/wp-content/uploads/2016/01/portrait-femme-studio-corporate-lorraine-metz-016.jpg'
        },
        {
          id: 7,
          name: 'John Mc Queen',
          role: 'Directeur',
          pseudo: 'johnny',
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
          <div className="columns column is-8-desktop is-offset-2-desktop is-multiline">
            {this.state.users.map((e, i) => {
              return (
                <div
                  className="column is-offset-1-mobile is-10-mobile is-one-third-tablet "
                  key={'user-' + i}
                >
                  <div className="card boxed">
                    <Link className="card-image" to={'/user/' + e.id}>
                      <figure className="image is-square">
                        <img src={e.url} alt="profile_picture" />
                      </figure>
                    </Link>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{e.name}</p>
                          <p className="subtitle is-6">{e.role}</p>
                          <Link className="subtitle is-6" to={'/user/' + e.id}>
                            @{e.pseudo}
                          </Link>
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
