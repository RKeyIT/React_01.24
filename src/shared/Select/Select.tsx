import { FC } from 'react'
import { IObjectWithOptions, ISelectOption } from '../../global.types'
import styles from './Select.module.css'

interface IProps {
  callback: (id: string) => void
  optionObject: IObjectWithOptions
  domId: string
}

export const Select: FC<IProps> = ({ callback, optionObject, domId }) => {
  const options: ISelectOption[] = []

  for (const key in optionObject) {
    options.push(optionObject[key])
  }

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    callback(e.target.value)
  }

  return (
    <select id={domId} onChange={handleSelection} title="Selector" className={styles.select}>
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
