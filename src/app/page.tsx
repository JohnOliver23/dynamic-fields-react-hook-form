"use client"
import { yupResolver } from "@hookform/resolvers/yup"
import { Trash2 } from "lucide-react"
import { useCallback } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import * as yup from "yup"

type FormValues = {
  cart?: {
    name: string
    amount: number
  }[]
}
const schema = yup.object().shape({
  cart: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Name is required"),
      amount: yup
        .number()
        .typeError("Quantity must be a number")
        .required("Quantity is required")
        .positive("Quantity must be positive")
        .integer("Quantity must be an integer"),
    })
  ),
})

export default function Home() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cart: [{ name: "", amount: 0 }],
    },
    resolver: yupResolver(schema),
  })
  const { fields, append, prepend, remove } = useFieldArray({
    name: "cart",
    control,
  })

  const handleSubmitForm = useCallback((values: FormValues) => {
    alert(JSON.stringify(values))
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-content gap-1">
        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2  text-zinc-500 dark:text-zinc-400">
            <p className="text-xl">Dynamic Fields</p>
            <form onSubmit={handleSubmit(handleSubmitForm)} className="w-full">
              {fields.map((field, index) => {
                return (
                  <section
                    className="flex flex-col  mt-4 text-sm items-center"
                    key={field.id}
                  >
                    <div className="flex gap-3">
                      <label className="flex flex-col">
                        <span>Name</span>
                        <input {...register(`cart.${index}.name`)} />
                        {errors.cart && errors.cart[index] && (
                          <p>{errors.cart[index]?.name?.message}</p>
                        )}
                      </label>
                      <label className="flex flex-col">
                        <span>Amount</span>
                        <input
                          type="number"
                          {...register(`cart.${index}.amount`)}
                        />
                        {errors.cart && errors.cart[index] && (
                          <p>{errors.cart[index]?.amount?.message}</p>
                        )}
                      </label>
                      <Trash2
                        cursor="pointer"
                        className="mt-5"
                        size={20}
                        onClick={() => remove(index)}
                      />
                    </div>
                  </section>
                )
              })}
              <div className="flex items-center w-full gap-3">
                <button
                  className="bg-violet-800 font-medium  mt-4 p-2 rounded-md w-full text-white"
                  type="button"
                  onClick={() => {
                    append({
                      name: "",
                      amount: 0,
                    })
                  }}
                >
                  Append
                </button>
                <button
                  className="bg-violet-800 font-medium  mt-4 p-2 rounded-md w-full text-white"
                  type="button"
                  onClick={() => {
                    prepend({
                      name: "",
                      amount: 0,
                    })
                  }}
                >
                  Prepend
                </button>
                <button
                  className="bg-violet-800 font-medium  mt-4 p-2 rounded-md w-full text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
