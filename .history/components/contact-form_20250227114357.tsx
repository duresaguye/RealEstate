"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormRegisterReturn } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  propertyType: z.string().optional(),
  budget: z.string().optional(),
  newsletter: z.boolean().default(false).optional(),
})

interface ContactFormProps {
  agentName?: string
}

export default function ContactForm({ agentName }: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: agentName
        ? `Hi ${agentName}, I'm interested in learning more about your services.`
        : "I'm interested in learning more about your services.",
      propertyType: "",
      budget: "",
      newsletter: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your server
    console.log(values)

    toast.success("Message sent! We'll get back to you as soon as possible.")

    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }: { field: UseFormRegisterReturn }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: UseFormRegisterReturn }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }: { field: UseFormRegisterReturn }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }: { field: UseFormRegisterReturn }) => (
              <FormItem>
                <FormLabel>Property Type (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Condo, House, Land" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="budget"
          render={({ field }: { field: UseFormRegisterReturn }) => (
            <FormItem>
              <FormLabel>Budget Range (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., $1M - $2M" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }: { field: UseFormRegisterReturn }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about what you're looking for" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newsletter"
          render={({ field }: { field: UseFormRegisterReturn }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Subscribe to our newsletter</FormLabel>
                <FormDescription>Get updates on new properties and market insights.</FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Form>
  )
}