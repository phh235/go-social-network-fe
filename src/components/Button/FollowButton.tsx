import React from 'react'
import { Button } from '../ui/button'

interface FollowButtonProps {
  onClick: () => void
  className?: string
  marginTop?: number
}

const FollowButton = ({ onClick, className, marginTop }: FollowButtonProps) => {
  return (
    <>
      <Button
        className={`font-bold px-8 mt-${marginTop} ${className}`}
        onClick={onClick}
      >
        Follow
      </Button>
    </>
  )
}

export default FollowButton
