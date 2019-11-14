import React, { Component, Fragment } from "react";
import {
  Header,
  Title,
  Profile,
  Education,
  Project,
  Work,
  Skill,
  Contact,
  Footer
} from "./layouts";
export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Title />
        <Profile />
        <Education />
        <Project />
        <Work />
        <Skill />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll(event) {
    if (window.scrollY > 0) {
      Header.style.display = "none";
    }
  }
}
