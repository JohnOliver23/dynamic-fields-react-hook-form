import { Check, X } from "lucide-react"
/* @jsxImportSource @react/@next */
import { ElementType } from "react"

interface NotificationProps {
  text: string
  time: string
  icon?: ElementType
  hasCancelAction?: boolean
  hasSubmitAction?: boolean
}

export function Notification({
  text,
  time,
  icon: Icon,
  hasCancelAction,
  hasSubmitAction,
}: NotificationProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
      {/**Icon */}

      {Icon && <Icon className="w-6 h-6 text-violet-500 mt-3" />}

      {/**Content */}
      <div className="flex-1 flex flex-col gap-2">
        <p className="text-sm leading-relexed text-zinc-600 dark:text-zinc-100 max-w-xs">
          {text}
        </p>
        <div className="text-xs text-zinc-400 flex items-center gap-1">
          <span>Convite</span>
          <span>Há {time}</span>
        </div>
      </div>

      {/** actions */}
      <div className="w-20">
        <div className="flex gap-2 self-center">
          {/** cancel action */}
          {hasCancelAction && (
            <button
              id="cancelButton"
              className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bgzinc-500 dark:bg-zinc-800"
            >
              <X className="w-3 h-3 text-zinc-50" />
            </button>
          )}

          {/** submit action */}
          {hasSubmitAction && (
            <button
              id="submitButton"
              className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bgzinc-500 dark:bg-violet-600"
            >
              <Check className="w-3 h-3 text-zinc-50" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
