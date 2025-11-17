/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateOrderMutation } from "@/redux/features/order/order.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// ----------------- Validation Schema -----------------
const productItemZodSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string().min(1, "Product name is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  price: z.number().min(1, "Price must be greater than 0"),
  subtotal: z.number().min(1, "Subtotal must be greater than 0"),
});

const OrderCreateZodSchema = z.object({
  customerName: z.string().min(1, "Customer name is required"),
  customerAddress: z.string().min(1, "Customer address is required"),
  customerPhone: z.string().min(11, "Phone number must be at least 11 digits"),
  thana: z.string().optional(),
  district: z.string().optional(),
  note: z.string().optional(),
  products: z
    .array(productItemZodSchema)
    .min(1, "At least one product is required"),
  deliveryCharge: z.number().min(0, "Delivery charge cannot be negative"),
  subtotal: z.number().min(0, "Subtotal cannot be negative"),
  totalAmount: z.number().min(0, "Total amount cannot be negative"),
});

// ----------------- Component -----------------
const OrderNow = () => {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([
    {
      id: "332423214232",
      name: "পাইলস কেয়ার ড্রিংকিং পাউডার",
      quantity: 1,
      price: 750,
      subtotal: 750,
    },
  ]);
  const [createOrder] = useCreateOrderMutation();

  const form = useForm<z.infer<typeof OrderCreateZodSchema>>({
    resolver: zodResolver(OrderCreateZodSchema),
    defaultValues: {
      customerName: "",
      customerAddress: "",
      customerPhone: "",
      thana: "",
      district: "",
      note: "",
      products: [],
      deliveryCharge: 100, // ← Eta 0 theke 100 kore din
      subtotal: 0,
      totalAmount: 0,
    },
  });

  // Calculate totals
  const calculateTotals = () => {
    const subtotal = products.reduce((sum, p) => sum + p.subtotal, 0);
    const deliveryCharge = 100;
    const totalAmount = subtotal + deliveryCharge;

    form.setValue("subtotal", subtotal);
    form.setValue("totalAmount", totalAmount);
    form.setValue("deliveryCharge", deliveryCharge); // ← Add this line
    form.setValue("products", products as any);
  };

  // ← ADD THIS useEffect
  useEffect(() => {
    calculateTotals();
  }, [products]);

  const onSubmit = async (data: any) => {
    // Validate products
    if (
      products.length === 0 ||
      products.some((p) => !p.name || p.quantity < 1 || p.price < 1)
    ) {
      toast.error("Please fillup all input fields correctly");
      return;
    }

    // Set products to form data
    data.products = products;

    // Update form values for validation
    form.setValue("products", products);
    form.setValue(
      "subtotal",
      products.reduce((sum, p) => sum + p.subtotal, 0)
    );

    const toastId = toast.loading("Creating order...");

    try {
      const res = await createOrder(data).unwrap();
      if (res?.success) {
        toast.success("Order created successfully", { id: toastId });
        form.reset();
        setProducts([
          {
            id: "332423214232",
            name: "পাইলস কেয়ার ড্রিংকিং পাউডার",
            quantity: 1,
            price: 750,
            subtotal: 750,
          },
        ]);
      }
    } catch (error) {
      toast.error("Order creation failed", { id: toastId });
      console.log(error);
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-xl ">
      <h2 className="text-2xl font-semibold mb-6">অর্ডার করুন</h2>

      <div className="w-full ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex md:flex-row flex-col items-start justify-between gap-11 md:gap-8  "
          >
            {/* left side  */}
            <div className="space-y-6 w-full border-2 border-gray-200 rounded p-4">
              {/* Customer Information Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Customer Name */}
                  <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>আপনার নাম *</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  {/* Customer Phone */}
                  <FormField
                    control={form.control}
                    name="customerPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>আপনার ফোন নাম্বার *</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="11"
                            placeholder=""
                            onWheel={(e) => e.currentTarget.blur()}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Customer Address */}
                <FormField
                  control={form.control}
                  name="customerAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>আপনার ঠিকানা *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="" {...field} />
                      </FormControl>
                      <FormMessage className="text-left" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Thana */}
                  <FormField
                    control={form.control}
                    name="thana"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>থানা</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />

                  {/* District */}
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>জেলা</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-left" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Products Section */}
              <div className="text-start   ">
                <label className="text-sm font-medium">পরিমাণ *</label>
                <Input
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="1"
                  type="number"
                  min="1"
                  onWheel={(e) => e.currentTarget.blur()}
                  // value={products.[0].quantity}
                  // onChange={(e) =>
                  //   updateProduct(
                  //     // index,
                  //     "quantity",
                  //     parseInt(e.target.value) || 1
                  //   )
                  // }
                />
              </div>

              {/* Note */}
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>নোট</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="বিশেষ নির্দেশনা বা নোট যোগ করুন"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-left" />
                  </FormItem>
                )}
              />
            </div>

            {/* Right side  */}
            <div className="w-full border-2 border-gray-200 rounded p-4">
              <div className="bg-white ">
                {/* order summary  */}
                <p className="text-[20px] text-left mb-9 font-semibold tracking-tight">
                  Order summary
                </p>
                <div className="text-gray-700">
                  <div className="flex text-[15px] justify-between items-center">
                    <p>Product Name</p>
                    <p>Bangla desher fist clas oushod</p>
                  </div>
                  <div className="flex text-[15px] justify-between items-center">
                    <p>Sub total ({quantity} items)</p>
                    <p>
                      <span className="">
                        {quantity} * {products?.[0]?.price} =
                      </span>

                      <span className="text-2xl"> ৳</span>
                      {quantity * products?.[0]?.price}
                    </p>
                  </div>
                  <div className="flex text-[15px] justify-between items-center">
                    <p>Delivery charge</p>
                    <p>
                      <span className="text-2xl">৳</span>
                      100
                    </p>
                  </div>

                  <hr className="my-3" />
                  <div className="flex text-[15px] justify-between font-semibold items-center">
                    <p>Total</p>
                    <p>
                      <span className="text-2xl">৳</span>
                      {quantity * products?.[0]?.price + 100}
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping method */}
              <div className="bg-white mt-11 rounded-md ">
                <h2 className="text-[20px] text-left mb-1 font-semibold tracking-tight">
                  Cash on delivery
                </h2>

                <p className="text-[15px] text-gray-600 text-left mt-4">
                  ডেলিভারি ম্যান আপনার বাসায় পণ্য পৌঁছে দেবেন। পণ্য হাতে পেয়ে
                  ক্যাশ অন ডেলিভারি পদ্ধতিতে পেমেন্ট করবেন।
                </p>

                {/* payment button  */}
                <Button
                  type="submit"
                  className="w-full mt-11 cursor-pointer"
                  size="lg"
                >
                  অর্ডার করুন
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default OrderNow;
