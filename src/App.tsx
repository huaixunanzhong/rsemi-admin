import './App.scss'
import { LocaleProvider } from '@douyinfe/semi-ui'
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'
import Router from './router'

const App = () => {
  return (
    <LocaleProvider locale={zh_CN}>
      <Router />
    </LocaleProvider>
  )
}

export default App
