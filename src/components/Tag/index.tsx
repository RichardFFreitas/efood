import { TagS } from './styles'

type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagS>{children}</TagS>

export default Tag