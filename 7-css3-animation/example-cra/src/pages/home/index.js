import React from "react"
import './styles.scss';
import Page from "../../components/page"
import Data999 from "../../data/status-999.json";
import Data10 from "../../data/status-10.json";
import IntegralSignIn from "./components/integral-sign-in";
console.log('Data999', Data999)

class Home extends React.Component {
  render() {
    return (
      <Page
        pageClassName={`page-home`}
        title={'CSS3 动画实战-积分签到'}
        isShowHeader={false}
      >
        <div className="page-main">
          <IntegralSignIn
            balanceInfo={Data999}
          />

        </div>
      </Page>
    );
  }
}

export default Home

