import { TextDisplayXs } from '../ui/TextDisplay'
import TextLink from '../ui/TextLink'

function NotFound() {
  return (
    <div className="flex justify-center">
      <div className="w-2/6 gap-y-4 flex flex-col text-center">
        <TextDisplayXs>404</TextDisplayXs>
        <TextLink to="/">Home</TextLink>
      </div>
    </div>
  )
}

export default NotFound
