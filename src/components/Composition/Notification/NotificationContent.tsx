interface NotificationContentProps {
  text: string
  time: string
}

export function NotificationContent({ text, time }: NotificationContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <p className="text-sm leading-relexed text-zinc-600 dark:text-zinc-100 max-w-xs">
        {text}
      </p>
      <div className="text-xs text-zinc-400 flex items-center gap-1">
        <span>Convite</span>
        <span>Há {time}</span>
      </div>
    </div>
  )
}
