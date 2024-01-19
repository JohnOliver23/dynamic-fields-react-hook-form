import { X } from "lucide-react"

export function NotificationCancelAction() {
  {
    return (
      <button
        id="cancelButton"
        className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bgzinc-500 dark:bg-zinc-800"
      >
        <X className="w-3 h-3 text-zinc-50" />
      </button>
    )
  }
}
