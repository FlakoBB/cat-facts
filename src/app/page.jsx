import Fact from '@/components/Fact'
import utilStyles from '../styles/utils.module.css'

const Main = () => {
  return (
    <div className={`${utilStyles.centerItems} ${utilStyles.container}`}>
      <h1 className={utilStyles.mainTitle}>Cat Facts</h1>
      <Fact />
    </div>
  )
}

export default Main
