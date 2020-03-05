import React, { Component } from "react";
// import { Link } from "react-router-dom";
import IndexService from "../../services/IndexService";
import { Link } from "react-router-dom";
import "./BoxDetails.scss";

class BoxDetails extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {},
  //     _onlyOne: {}
  //   };
  //   this._isMounted = false;
  //   this._isFetched = false;
  //   this.service = new IndexService();
  // }
  // componentDidMount() {
  //   this._isMounted = true;
  //   this.service.findAll().then(response => {
  //     console.log(response);
  //     this._isMounted &&
  //       this.setState({
  //         data: response
  //       });
  //   });
  // }
  // _onlyOne(id) {
  //   this._isFetched = true;
  //   const { boxes } = this.state.data;
  //   let box = boxes.filter(box => {
  //     return box._id === id;
  //   });
  //   this.setState({
  //     _onlyOne: box
  //   });
  // }

  render() {
    const { box } = this.props;
    if (box) {
      console.log(box);
      return (
        <div className="BoxDetails">
          <h3>
            <small>Tabs with Icons on Card</small>
          </h3>
          <div className="card card-nav-tabs">
            <div className="card-header card-header-primary">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <ul className="nav nav-tabs" data-tabs="tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#profile"
                        data-toggle="tab"
                      >
                        <i className="material-icons">face</i> Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#messages"
                        data-toggle="tab"
                      >
                        <i className="material-icons">chat</i> Messages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#settings"
                        data-toggle="tab"
                      >
                        <i className="material-icons">build</i> Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body ">
              <div className="tab-content text-center">
                <div className="tab-pane active" id="profile">
                  {/* {box.map((box, idx) => (
                    <div key={idx}>
                      <h1>
                        <Link to={box._id}>{box.boxName}</Link>
                      </h1>
                    </div>
                  ))} */}
                </div>
                <div className="tab-pane" id="messages">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam itaque blanditiis ipsum! Minima totam vero
                    voluptatibus in. Iusto consectetur, tempore molestiae
                    suscipit, minus vel quaerat excepturi delectus quae
                    reprehenderit quia!
                  </p>
                </div>
                <div className="tab-pane" id="settings">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat aliquid iusto illo et sed culpa possimus explicabo
                    libero nostrum! Mollitia fuga fugit cumque blanditiis amet
                    minus quae distinctio commodi deserunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="BoxDetails">
          <h3>
            <small>Tabs with Icons on Card</small>
          </h3>
          <div className="card card-nav-tabs">
            <div className="card-header card-header-primary">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <ul className="nav nav-tabs" data-tabs="tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#profile"
                        data-toggle="tab"
                      >
                        <i className="material-icons">face</i> Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#messages"
                        data-toggle="tab"
                      >
                        <i className="material-icons">chat</i> Messages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#settings"
                        data-toggle="tab"
                      >
                        <i className="material-icons">build</i> Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body ">
              <div className="tab-content text-center">
                <div className="tab-pane active" id="profile"></div>
                <div className="tab-pane" id="messages">
                  <p>
                    {" "}
                    I think that&#x2019;s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. I will be the leader of a company that ends up
                    being worth billions of dollars, because I got the answers.
                    I understand culture. I am the nucleus. I think
                    that&#x2019;s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at.
                  </p>
                </div>
                <div className="tab-pane" id="settings">
                  <p>
                    I think that&#x2019;s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it&#x2019;s supposed to be pushing the
                    furthest possibilities. I will be the leader of a company
                    that ends up being worth billions of dollars, because I got
                    the answers. I understand culture. I am the nucleus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BoxDetails;
