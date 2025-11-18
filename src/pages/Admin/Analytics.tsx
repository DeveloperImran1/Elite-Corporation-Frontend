/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/components/modules/shared/Loading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAdminStatsQuery } from "@/redux/features/user/user.api";
import {
  Ban,
  CalendarDays,
  CalendarRange,
  Clock,
  Package,
  Truck,
} from "lucide-react";

const Analytics = () => {
  const { data, isLoading } = useGetAdminStatsQuery(undefined);

  const stats = data?.data;
  console.log("stats", stats);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          className="shadow-lg rounded-2xl border-t-4"
          style={{ borderColor: "#2492eb" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Package className="text-[#2492eb]" /> Total Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.totalOrder}</p>
          </CardContent>
        </Card>

        <Card
          className="shadow-lg rounded-2xl border-t-4"
          style={{ borderColor: "#2492eb" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="text-[#2492eb]" />
              Pending Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.totalRequestedOrder}</p>
          </CardContent>
        </Card>

        <Card
          className="shadow-lg rounded-2xl border-t-4"
          style={{ borderColor: "#2492eb" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Truck className="text-[#2492eb]" />
              Delivered Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.totalDeliveredOrder}</p>
          </CardContent>
        </Card>

        <Card
          className="shadow-lg rounded-2xl border-t-4"
          style={{ borderColor: "#2492eb" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Ban className="text-[#2492eb]" />
              Canceld Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.totalCancelledOrder}</p>
          </CardContent>
        </Card>

        <Card
          className="shadow-lg rounded-2xl border-t-4"
          style={{ borderColor: "#2492eb" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CalendarDays className="text-[#2492eb]" /> Last 7 Day Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.newOrderInLast7Days}</p>
          </CardContent>
        </Card>

        <Card
          className="shadow-lg rounded-2xl border-t-4"
          style={{ borderColor: "#2492eb" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CalendarRange className="text-[#2492eb]" />
              Last 30 Day Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats?.newOrderInLast30Days}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
