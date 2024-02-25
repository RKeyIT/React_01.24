import { FC } from 'react'
import { createPortal } from 'react-dom'
import { ButtonColorType } from '../../global.types'
import { ContainerModal } from '../../shared/ContainerModal/ContainerModal'

interface IProps {
  textContent: string
  cancelColor?: ButtonColorType
  confirmationColor?: ButtonColorType
  confirm?: () => void
  cancel?: () => void
}

export const ContainerPortal: FC<IProps> = ({
  textContent,
  cancelColor = 'white',
  confirmationColor = 'white',
  confirm,
  cancel
}) => {
  const portalTarget = document.getElementById('ContentContainer')

  const properties: IProps = { textContent, cancelColor, confirmationColor }

  if (cancel) properties.cancel = cancel
  if (confirm) properties.confirm = confirm

  return <>{portalTarget && createPortal(<ContainerModal {...properties} />, portalTarget)}</>
}
