import { FC } from 'react'
import styles from './NumberSelect.module.css'

interface IProps {
  callback: (newValue: number) => void
  min: number
  max: number
  title?: string
}

export const NumberSelect: FC<IProps> = ({ callback, min, max, title }) => {
  if (max < min) {
    throw new Error('Received invalid values: max should be more than min')
  }

  const options: number[] = new Array(max - min + 1).fill(0).map((_, index) => (min + index))
  const defaultValue = options[options.length - 1]

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    callback(+e.target.value)
  }

  return (
    <div className={styles.NumberSelect}>
      {title && (
        <label htmlFor={'NumberSelect'} className={styles.label}>
          {title}
        </label>
      )}
      <select
        id={'NumberSelect'}
        defaultValue={defaultValue}
        onChange={handleSelection}
        title={title}
        className={styles.select}>
        {options.map((el) => {
          return (
            <option value={el} className={styles.option} key={el}>
              {el}
            </option>
          )
        })}
      </select>
    </div>
  )
}
