import { Check } from "lucide-react"

export function NotificationSubmitAction() {
  {
    return (
      <button
        id="submitButton"
        className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bgzinc-500 dark:bg-violet-600"
      >
        <Check className="w-3 h-3 text-zinc-50" />
      </button>
    )
  }
}
