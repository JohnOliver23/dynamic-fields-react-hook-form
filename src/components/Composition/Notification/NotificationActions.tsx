import { ReactNode } from "react"

interface NotificationActionsProps {
  children: ReactNode
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return (
    <div className="w-20">
      <div className="flex gap-2 self-center">{children}</div>
    </div>
  )
}
