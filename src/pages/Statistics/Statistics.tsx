import { useNavigate } from 'react-router-dom'
import { ITableRow, PageNames } from '../../global.types'
import { Heading } from '../../shared/Heading/Heading'
import styles from './Statistics.module.css'
import { FC } from 'react'
import { URLS } from '../../router/router.types'
import { Button } from '../../shared/Button/Button'
import { Table } from '../../shared/Table/Table'
import { useAppSelector } from '../../store'

export const Statistics: FC = () => {
  const navigate = useNavigate()
  const { 
    OverallQuestionCount,
    OverallTimeSpent,
    CorrectAnswerCount,
    CorrectAnswerPercentage,
    CategoriesCount,
    DifficultiesCount,
    TypeCount
  } = useAppSelector(state => state.persistor)

  const getFormattedTime = (sec: number) => {
    const mins = Math.floor(sec / 60)
    const secs = sec % 60

    const minutes = mins < 10 ? `0${mins}` : String(mins)
    const seconds = secs < 10 ? `0${secs}` : String(secs)

    return minutes + ':' + seconds
  }
  
  const OveralTableRows: ITableRow[] = [
    { category: 'Overal count of questions', description: OverallQuestionCount },
    { category: 'Count of correct answers', description: CorrectAnswerCount },
    { category: 'Correct answers percentage', description: CorrectAnswerPercentage },
    { category: 'Overal time in quiz app', description: getFormattedTime(OverallTimeSpent) },
  ]

  const DifficultyTableRows: ITableRow[] = [
    { category: 'easy', description: DifficultiesCount.easy },
    { category: 'medium', description: DifficultiesCount.medium },
    { category: 'hard', description: DifficultiesCount.hard },
  ]

  const TypeTableRows: ITableRow[] = [
    { category: 'boolean', description: TypeCount.boolean },
    { category: 'multiple', description: TypeCount.multiple },
  ]

  const CategoryTableRows: ITableRow[] = []

  for (const key in CategoriesCount) {
    CategoryTableRows.push({ category: key, description: CategoriesCount[key] })
  }

  CategoryTableRows.sort((a, b) => +a.description - +b.description)
  
  const toHome = () => {
    navigate(URLS.HOME)
  }

  return (
    <div className={styles.Statistics}>
      <Heading pageName={PageNames.STATISTICS} />
      <div className={styles.tables}>
        <Table name='Overal stats' rows={OveralTableRows} />
        <Table name='Difficulties' rows={DifficultyTableRows} />
        <Table name='Types' rows={TypeTableRows} />
        <Table name='Categories' rows={CategoryTableRows} />
      </div>
      <Button callback={toHome} content='To home page'/>
    </div>
  )
}
