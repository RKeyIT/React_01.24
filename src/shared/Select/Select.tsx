import { FC } from 'react'
import { IObjectWithOptions, ISelectOption } from '../../global.types'
import styles from './Select.module.css'

interface IProps {
  optionObject: IObjectWithOptions
}

export const Select: FC<IProps> = ({ optionObject }) => {
  const options: ISelectOption[] = []

  for (const key in optionObject) {
    options.push(optionObject[key])
  }

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }

  return (
    <select onChange={handleSelection} title="Selector" className={styles.select}>
      {options.map((el, index) => {
        return (
          <option value={el.id} className={styles.option} key={el.id + index}>
            {el.name}
          </option>
        )
      })}
    </select>
  )
}
