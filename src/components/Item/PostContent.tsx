import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function PostContent() {
  return (
    <>
      <div className="flex px-4">
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col text-[15px] ml-2.5 w-full">
          <span className="font-bold">_andrewhhh</span>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            fringilla, nisi et facilisis convallis, nunc nisl aliquet nunc, eget
            aliquet nunc nisl eget nunc.
          </p>
        </div>
      </div>
    </>
  )
}
