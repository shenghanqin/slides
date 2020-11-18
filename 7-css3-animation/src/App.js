import React from "react"
import withUiMode from '@xiaoxili/react-ui-mode-cc'
import './App.scss';
import Page from "./components/page";

class App extends React.Component {
  render() {
    const { isPCMode } = this.props
    console.log('isPCMode', isPCMode)
    return (
      <Page
        pageClassName={`page-home ${isPCMode ? 'page-mode-pc' : 'page-mode-mobile'}`}
        title={'融合响应式设计 React 版 - 小溪里'}
        isPCMode={isPCMode}
      >
  
      </Page>
    );
  }
}

export default withUiMode({
  // 区分模式的宽度
  widthMode: 1000,
  // iPad 微信恒定为 Mobile UI
  // isPadWechatMobile: true
})(App)

