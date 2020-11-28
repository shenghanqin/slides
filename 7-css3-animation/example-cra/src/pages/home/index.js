import React from "react"
import './styles.scss';
import Page from "../../components/page"
import Data999 from "../../data/status-999.json";
// import Data10 from "../../data/status-10.json";
import IntegralSignIn from "./components/integral-sign-in";
import AniCoinFrame from "./components/coin-frame";
import ModuleTitle from "./components/module-title";
import ButtonSignIn from "./components/button-sigin-in";
import DayBgColor from "./components/day-bg-color";
import NumberFly from "./components/number-fly";
import NumberIncrease from "./components/number-increase";
import CoinShoppingCard from "./components/coin-shopping-cart";

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
          <ModuleTitle title="单色动画" />
          <DayBgColor />
          <ModuleTitle title="渐变色动画-签到按钮" tips="按钮可点击" />
          <ButtonSignIn />
          <ModuleTitle title="数字飞扬" />
          <NumberFly />
          <ModuleTitle title="数字翻转" />
          <NumberIncrease />
          <ModuleTitle title="金币-加入购物车" tips="7个色块皆可点击" />
          <CoinShoppingCard />
        </div>
      </Page>
    );
  }
}

export default Home

