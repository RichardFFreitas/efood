import { ButtonContainer } from './styles'
export type Props = {
    type?: 'link' | 'tag'
    title?: string
    to?: string
    children: string
    onClick?: () => void
}

const Button = ({ to, children, type = 'tag' }: Props) => (
    <ButtonContainer type={type} to={to as string}>
        {children}
    </ButtonContainer>
)

export default Button