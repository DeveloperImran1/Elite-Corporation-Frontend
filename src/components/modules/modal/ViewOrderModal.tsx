/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { View } from "lucide-react";
import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  CreditCard,
  FileText,
  MapPin,
  Package,
  Phone,
  Truck,
  User,
} from "lucide-react";

export function ViewOrderModal({ singleOrder }: any) {
  const [open, setOpen] = useState(false);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Approved":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-300";
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer ">
          <View></View>
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[90%] max-h-[90vh] overflow-y-auto">
        <div className="w-full mx-auto p-6 bg-white rounded-xl shadow-sm">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-4 border-b-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                অর্ডার বিস্তারিত
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                ট্র্যাকিং আইডি:{" "}
                <span className="font-semibold text-gray-700">
                  {singleOrder?.trackingId}
                </span>
              </p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Badge
                className={`${getStatusColor(
                  singleOrder?.status
                )} text-sm px-4 py-2 border`}
              >
                {singleOrder?.status}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Customer & Address Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <div className="border-2 border-gray-200 rounded-lg p-5 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  ক্রেতার তথ্য
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">নাম</p>
                      <p className="text-base font-semibold text-gray-800">
                        {singleOrder?.customerName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">ফোন নাম্বার</p>
                      <p className="text-base font-semibold text-gray-800">
                        {singleOrder?.customerPhone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="border-2 border-gray-200 rounded-lg p-5 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  ডেলিভারি ঠিকানা
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">সম্পূর্ণ ঠিকানা</p>
                    <p className="text-base font-medium text-gray-800">
                      {singleOrder?.customerAddress}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">থানা</p>
                      <p className="text-base font-medium text-gray-800">
                        {singleOrder?.thana || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">জেলা</p>
                      <p className="text-base font-medium text-gray-800">
                        {singleOrder?.district || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Section */}
              <div className="border-2 border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-green-600" />
                  পণ্য তালিকা
                </h3>
                <div className="space-y-3">
                  {singleOrder?.products?.map((product: any, index: number) => (
                    <div
                      key={product.id}
                      className="p-4 bg-white border border-gray-200 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 text-base">
                            {index + 1}. {product.name}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            পণ্য আইডি: {product.id}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t">
                        <div>
                          <p className="text-xs text-gray-500">মূল্য</p>
                          <p className="text-sm font-semibold text-gray-800">
                            <span className="text-base">৳</span>
                            {product.price}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">পরিমাণ</p>
                          <p className="text-sm font-semibold text-gray-800">
                            {product.quantity} টি
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">সাবটোটাল</p>
                          <p className="text-sm font-semibold text-blue-600">
                            <span className="text-base">৳</span>
                            {product.subtotal}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note Section */}
              {singleOrder?.note && (
                <div className="border-2 border-gray-200 rounded-lg p-5 bg-yellow-50">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-yellow-600" />
                    নোট
                  </h3>
                  <p className="text-base text-gray-700">{singleOrder?.note}</p>
                </div>
              )}
            </div>

            {/* Right Column - Payment & Summary */}
            <div className="space-y-6">
              {/* Payment Summary */}
              <div className="border-2 border-gray-200 rounded-lg p-5 bg-gradient-to-br from-blue-50 to-indigo-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                  পেমেন্ট সারাংশ
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-sm text-gray-600">সাবটোটাল</span>
                    <span className="text-base font-semibold text-gray-800">
                      <span className="text-lg">৳</span>
                      {singleOrder?.subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-sm text-gray-600">
                      ডেলিভারি চার্জ
                    </span>
                    <span className="text-base font-semibold text-gray-800">
                      <span className="text-lg">৳</span>
                      {singleOrder?.deliveryCharge}
                    </span>
                  </div>
                  <hr className="border-gray-300" />
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-base font-semibold text-gray-800">
                      সর্বমোট
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      <span className="text-2xl">৳</span>
                      {singleOrder?.totalAmount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="border-2 border-gray-200 rounded-lg p-5 bg-gray-50">
                <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-orange-600" />
                  পেমেন্ট পদ্ধতি
                </h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 border border-green-300 px-3 py-1">
                    ক্যাশ অন ডেলিভারি
                  </Badge>
                </div>
              </div>

              {/* Date Information */}
              <div className="border-2 border-gray-200 rounded-lg p-5 bg-gray-50">
                <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                  তারিখ তথ্য
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">অর্ডার তৈরি</p>
                    <p className="text-sm font-medium text-gray-800">
                      {formatDate(singleOrder?.createdAt)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">শেষ আপডেট</p>
                    <p className="text-sm font-medium text-gray-800">
                      {formatDate(singleOrder?.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
