import React, { Component } from "react";
import axios from "axios";
import styles from "./App.module.sass";

enum PostTypeEnum {
  page = "page",
  post = "post",
}

enum PostStatusEnum {
  publish = "publish",
  draft = "draft",
}

interface IState {
  dismissed: boolean;
  content: string;
}

interface IWordPressPost {
  id: number;
  status: PostStatusEnum;
  type: PostTypeEnum;
  content: {
    rendered: string;
    protected: boolean;
  };
}

// Set these to match your WordPress domain and Page ID
const POST_ID = 9482;
const WORDPRESS_URL = "http:///www.elcentrodelaraza.org";

class App extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { dismissed: false, content: "" };
  }

  componentDidMount() {
    // Check sessionStorage to see if this has been dismissed in this session.
    const dismissed = JSON.parse(
      sessionStorage.getItem("dismissed") || "false"
    );
    if (dismissed) {
      this.setState({
        dismissed,
      });
    }

    // Load the COVID-19 alert dialog from page #9482 (COVID-19 Alert Popup)
    const POST_URL = `${WORDPRESS_URL}/wp-json/wp/v2/pages/${POST_ID}`;
    axios.get(POST_URL).then((res) => {
      const data: IWordPressPost | undefined = res.data;
      if (data && data.status === PostStatusEnum.publish) {
        this.setState({
          content: data.content.rendered,
        });
      }
    });
  }

  handleDismiss = () => {
    sessionStorage.setItem("dismissed", JSON.stringify(true));
    this.setState({
      dismissed: true,
    });
  };

  render() {
    return this.state.dismissed || !this.state.content ? null : (
      <div className={styles.alertPopup}>
        <button onClick={this.handleDismiss} className={styles.dismissible}>
          <span>⨯</span>
        </button>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
      </div>
    );
  }
}

export default App;
