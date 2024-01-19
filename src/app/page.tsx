import { Notification } from "@/components/Composition/Notification"
import { Notification as OldNotification } from "@/components/Notification"
import { Rocket } from "lucide-react"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-content gap-1">
        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
            Sem Composition
          </div>

          <OldNotification
            text="Você recebeu um convite pra fazer parte da empresa RocketSeat."
            time="3 min"
            icon={Rocket}
          />
          <OldNotification
            text="Você recebeu um convite pra fazer parte da empresa RocketSeat."
            time="3 min"
            hasSubmitAction
            hasCancelAction
          />
          <OldNotification
            text="Você recebeu um convite pra fazer parte da empresa RocketSeat."
            time="3 min"
            icon={Rocket}
            hasSubmitAction
          />
          <OldNotification
            text="Você recebeu um convite pra fazer parte da empresa RocketSeat."
            time="3 min"
            icon={Rocket}
            hasCancelAction
          />

          <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
            Com Composition
          </div>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content
              text="Você recebeu um convite pra fazer parte da empresa RocketSeat."
              time="3 min"
            />
          </Notification.Root>

          <Notification.Root>
            <Notification.Content
              text="Você recebeu um convite pra fazer parte da empresa RocketSeat."
              time="3 min"
            />
            <Notification.Actions>
              <Notification.CancelAction />
              <Notification.SubmitAction />
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content
              text="Você recebeu um convite pra fazer parte da empresa RocketSeat."
              time="3 min"
            />
            <Notification.Actions>
              <Notification.SubmitAction />
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content
              text="Você recebeu um convite pra fazer parte da empresa RocketSeat."
              time="3 min"
            />
            <Notification.Actions>
              <Notification.CancelAction />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>
    </main>
  )
}
