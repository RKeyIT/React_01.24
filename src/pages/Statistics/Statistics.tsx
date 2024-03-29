import { useNavigate } from 'react-router-dom'
import { ITableRow } from '../../global.types'
import styles from './Statistics.module.css'
import { FC, useState } from 'react'
import { URLS } from '../../router/router.types'
import { Button } from '../../shared/Button/Button'
import { Table } from '../../shared/Table/Table'
import { useAppDispatch, useAppSelector } from '../../store'
import { resetPersistor } from '../../store/persistorSlice'
import { ContainerPortal } from '../../entities/ContainerPortal/ContainerPortal'
import { motion } from 'framer-motion'
import { getFormattedTime } from '../../utils/getFormattedTime'

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
  } = useAppSelector((state) => state.persistor)

  const dispatch = useAppDispatch()
  const [isModalVisible, setModalVisible] = useState<boolean>(false)

  const OveralTableRows: ITableRow[] = [
    { category: 'Overal count of questions', description: OverallQuestionCount },
    { category: 'Count of correct answers', description: CorrectAnswerCount },
    { category: 'Correct answers percentage', description: CorrectAnswerPercentage },
    { category: 'Overal time in quiz app', description: getFormattedTime(OverallTimeSpent) }
  ]

  const DifficultyTableRows: ITableRow[] = [
    { category: 'easy', description: DifficultiesCount.easy },
    { category: 'medium', description: DifficultiesCount.medium },
    { category: 'hard', description: DifficultiesCount.hard }
  ]

  const TypeTableRows: ITableRow[] = [
    { category: 'boolean', description: TypeCount.boolean },
    { category: 'multiple', description: TypeCount.multiple }
  ]

  const CategoryTableRows: ITableRow[] = []

  for (const key in CategoriesCount) {
    CategoryTableRows.push({ category: key, description: CategoriesCount[key] })
  }

  CategoryTableRows.sort((a, b) => +b.description - +a.description)

  const toHome = () => {
    navigate(URLS.HOME)
  }

  const onResetStats = () => {
    setModalVisible(true)
  }

  const onCancelModal = () => {
    setModalVisible(false)
  }

  const onStatRemove = () => {
    dispatch(resetPersistor())
    setModalVisible(false)
  }

  const modalText = 'Are you sure want to delete all of your statistic data?'
  const portal = (
    <ContainerPortal
      textContent={modalText}
      confirmationColor="red"
      cancel={onCancelModal}
      confirm={onStatRemove}
    />
  )

  return (
    <motion.div className={styles.Statistics}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}>
      <div className={styles.tables}>
        <Table name="Overal stats" rows={OveralTableRows} />
        <Table name="Difficulties" rows={DifficultyTableRows} />
        <Table name="Types" rows={TypeTableRows} />
        <Table name="Categories" rows={CategoryTableRows} />
      </div>
      <div className={styles.buttons}>
        <Button callback={toHome} content="To home page" />
        <Button callback={onResetStats} content="Reset stats" style="red" />
      </div>
      {isModalVisible && portal}
    </motion.div>
  )
}

export default Statistics
