/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditOrderStatusModal } from "@/components/modules/modal/EditOrderStatusModal";
import { ViewOrderModal } from "@/components/modules/modal/ViewOrderModal";
import Loader from "@/components/modules/shared/Loading";
import CommonPagination from "@/components/pagignation";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllOrderQuery } from "@/redux/features/order/order.api";
import { useEffect, useState } from "react";

const AllOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5);

  useEffect(() => {
    const handleHashChange = () => {
      const pageFromHash = Number(window.location.hash.split("/")[2]) || 0;
      setCurrentPage(pageFromHash);
    };

    // প্রথমবার call করা
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const { data, isLoading } = useGetAllOrderQuery({
    page: currentPage,
    limit,
  });
  const order = data?.data;

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <section className=" ">
      <div className="">
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead className="">Serial</TableHead>
              <TableHead className="">Tracking ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>District</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order?.data?.map((singleOrder: any, index: number) => (
              <TableRow key={index + 1}>
                <TableCell className=" text-left">
                  {(order?.meta?.page - 1) * order?.meta?.limit + (index + 1)}
                </TableCell>
                <TableCell className=" text-left">
                  {singleOrder?.trackingId}
                </TableCell>
                <TableCell className=" text-left">
                  {singleOrder?.customerName}
                </TableCell>
                <TableCell className=" text-left">
                  {singleOrder?.products?.[0]?.quantity}
                </TableCell>
                <TableCell className=" text-left">
                  {singleOrder?.totalAmount}
                </TableCell>

                <TableCell className=" text-left">
                  {singleOrder.district}
                </TableCell>
                <TableCell className=" text-left">
                  {singleOrder.status}
                </TableCell>
                <TableCell className="flex gap-2">
                  <ViewOrderModal singleOrder={singleOrder}></ViewOrderModal>
                  <EditOrderStatusModal
                    singleOrder={singleOrder}
                  ></EditOrderStatusModal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={10}>
                <CommonPagination
                  currentPage={order?.meta?.page}
                  totalPages={order?.meta?.totalPage}
                  paginationItemsToDisplay={order?.meta?.total}
                ></CommonPagination>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </section>
  );
};

export default AllOrder;
