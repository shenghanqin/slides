import React from "react"
import './styles.scss';
import Page from "../../components/page"
import Data999 from "../../data/status-999.json";
import Data10 from "../../data/status-10.json";
import IntegralSignIn from "./components/integral-sign-in";
import AniCoinFrame from "./components/coin-frame";
import ModuleTitle from "./components/module-title";
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
          <ModuleTitle title="逐帧动画-金币旋转" />
          <AniCoinFrame />

        </div>
      </Page>
    );
  }
}

export default Home

