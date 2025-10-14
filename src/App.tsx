import './App.scss'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider, App as AppContainer } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import Router from './router'

const App = () => {
  return (
    <HelmetProvider>
      <ConfigProvider locale={zhCN}>
        <AppContainer component={false}>
          <Router />
        </AppContainer>
      </ConfigProvider>
    </HelmetProvider>
  )
}

export default App
