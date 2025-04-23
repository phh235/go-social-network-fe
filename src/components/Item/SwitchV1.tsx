import Switch from "../ui/switch"

const SwitchV1 = () => {
  return (
    <>
      <Switch
        className="h-8 w-13"
        thumbClassName="h-7 w-7 data-[state=checked]:translate-x-5"
      />
    </>
  )
}

export default SwitchV1
