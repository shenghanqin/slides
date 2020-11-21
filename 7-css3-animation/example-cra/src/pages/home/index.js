import React from "react"
import withUiMode from '@xiaoxili/react-ui-mode-cc'
import './styles.scss';
import Page from "../../components/page"
import Data999 from "../../data/status-999.json";
import Data10 from "../../data/status-10.json";
import IntegralSignIn from "./components/integral-sign-in";
console.log('Data999', Data999)

class Home extends React.Component {
  render() {
    const { isPCMode } = this.props
    return (
      <Page
        pageClassName={`page-home ${isPCMode ? 'page-mode-pc' : 'page-mode-mobile'}`}
        title={'CSS3 动画实战-积分签到'}
        isPCMode={isPCMode}
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

export default withUiMode({
  // 区分模式的宽度
  widthMode: 1000,
  // iPad 微信恒定为 Mobile UI
  // isPadWechatMobile: true
})(Home)

