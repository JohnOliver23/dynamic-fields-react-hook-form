import { NotificationActions } from "./NotificationActions"
import { NotificationCancelAction } from "./NotificationCancelAction"
import { NotificationContent } from "./NotificationContent"
import { NotificationIcon } from "./NotificationIcon"
import { NotificationRoot } from "./NotificationRoot"
import { NotificationSubmitAction } from "./NotificationSubmitAction"

export const Notification = {
  Root: NotificationRoot,
  Icon: NotificationIcon,
  Content: NotificationContent,
  Actions: NotificationActions,
  CancelAction: NotificationCancelAction,
  SubmitAction: NotificationSubmitAction,
}
