/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEditOrderMutation } from "@/redux/features/order/order.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import z from "zod";

// ----------------- Validation Schema -----------------
const parcelSchema = z.object({
  status: z.string().min(1, "Select any status"),
});

export function EditOrderStatusModal({ singleOrder }: any) {
  const [open, setOpen] = useState(false);

  console.log("singleOrder from edit order status modal", singleOrder);

  const [editOrderStatus] = useEditOrderMutation();

  const form = useForm<z.infer<typeof parcelSchema>>({
    resolver: zodResolver(parcelSchema),
    defaultValues: {
      status: singleOrder?.status || "",
    },
  });

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Order status updating...");
    const orderId = singleOrder?.trackingId;
    try {
      const res = await editOrderStatus({ orderId, data }).unwrap();
      if (res?.success) {
        toast.success("Order status updated", { id: toastId });
      }
    } catch (error) {
      toast.error("Order status updating failed", { id: toastId });

      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="cursor-pointer ">
            <Edit></Edit>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Parcel Status</DialogTitle>
          </DialogHeader>
          <div className="w-full mx-auto bg-white rounded-xl ">
            <Form {...form}>
              <form
                id="update-parcel"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Parcel Type */}
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Approved">Approved</SelectItem>
                          <SelectItem value="Delivered">Delivered</SelectItem>
                          <SelectItem value="Cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="update-parcel">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
