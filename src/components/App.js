import React, { Component, Fragment } from "react";
import {
  Header,
  Title,
  Profile,
  Education,
  Project,
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
        <Skill />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}
