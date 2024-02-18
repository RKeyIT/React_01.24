import { useNavigate } from 'react-router-dom'
import { PageNames } from '../../global.types'
import { Heading } from '../../shared/Heading/Heading'
import styles from './Statistics.module.css'
import { FC } from 'react'
import { URLS } from '../../router/router.types'
import { Button } from '../../shared/Button/Button'
import { Table } from '../../shared/Table/Table'

export const Statistics: FC = () => {
  const navigate = useNavigate()
  
  const toHome = () => {
    navigate(URLS.HOME)
  }

  return (
    <div className={styles.Statistics}>
      <Heading pageName={PageNames.STATISTICS} />
      <Table name='My general statistic' rows={[]} />
      <Button callback={toHome} content='To home page'/>
    </div>
  )
}
