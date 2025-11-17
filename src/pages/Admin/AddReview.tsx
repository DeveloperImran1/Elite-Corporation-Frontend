/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import SingleImageUploader from "@/components/SingleImageUploader";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCreateReviewMutation } from "@/redux/features/review/review.api";
import { useState } from "react";
import { toast } from "sonner";

export function AddReview() {
  const [image, setImage] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const [createReview] = useCreateReviewMutation();

  // const [{ files }] = useFileUpload({
  //   accept: "image/*",
  // });

  const form = useForm({
    defaultValues: {
      customerName: "",
      content: "",
    },
  });

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Review upload is loading");
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    if (image) {
      formData.append("file", image as File);
    }

    try {
      const res = await createReview({ formData });
      console.log(res);
      toast.success("Review added succefully ", { id: toastId });
      setOpen(false);
    } catch (error) {
      toast.error("Profile upload failed", { id: toastId });

      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <Form {...form}>
        <form
          className=""
          id="add-review"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-[200px] h-[200px] rounded-full mx-auto">
            <SingleImageUploader
              setImage={setImage}
              currentImage={
                image ||
                "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              }
            ></SingleImageUploader>
          </div>

          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Customer Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Customer Name"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full mt-11 cursor-pointer bg-[#00bffe] hover:bg-[#299ad6]"
            size="lg"
          >
            Add Review
          </Button>
        </form>
      </Form>
    </div>
  );
}
