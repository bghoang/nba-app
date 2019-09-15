import React, { Component } from "react";
import "./layout.css";
import Header from "../../components/Header/header";

class Layout extends Component {
  state = {
    showNav: false
  };
  toggleSizenav = action => {
    this.setState({
      showNav: action
    });
  };
  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSizenav(false)}
          onOpenNav={() => this.toggleSizenav(true)}
        />
        {this.props.children}
        Footer
      </div>
    );
  }
}

export default Layout;
