import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Logo from "../shared/Logo";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
const registerSchema = z.object({
  name: z
    .string({ message: "Name must be a string" })
    .min(5, { message: "Name length must be at least 5 characters" })
    .max(100, { message: "Name length must not exceed 100 characters" }),

  email: z
    .string({ message: "Email must be a string" })
    .email({ message: "Invalid email address format" })
    .min(5, { message: "Email length must be at least 5 characters" })
    .max(100, { message: "Email length must not exceed 100 characters" }),

  password: z
    .string({ message: "Password must be a string" })
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: z.infer<typeof registerSchema>) {
    const toastId = toast.loading("Creating user....");
    try {
      const res = await register(data).unwrap();
      if (res?.success && res?.data?.user?.email) {
        const user = {
          name: res?.data?.user?.name,
          email: res?.data?.user?.email,
          role: res?.data?.user?.role,
        };
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("User created successfully", { id: toastId });
        navigate("/admin");
      }
    } catch (error) {
      toast.error("Register error", { id: toastId });
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <Logo></Logo>
                </div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>

                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="demo@gmail.com" {...field} />
                      </FormControl>

                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Password" {...field} />
                      </FormControl>

                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />

                <Button type="submit">Register</Button>

                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <NavLink to="/login" className="underline underline-offset-4">
                    Login
                  </NavLink>
                </div>
              </div>
            </form>
          </Form>

          <div className="bg-muted relative hidden md:block">
            <img
              src="https://pathao.com/wp-content/uploads/2018/12/courier-merchant.jpeg"
              alt="Login page"
              className="absolute inset-0 h-full w-full  dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
