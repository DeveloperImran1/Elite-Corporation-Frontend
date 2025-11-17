/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/components/modules/shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
} from "@/redux/features/review/review.api";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AllReview = () => {
  const [currentPage, setCurrentPage] = useState(0);
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

  const { data, isLoading } = useGetAllReviewsQuery({
    page: currentPage,
    limit,
  });
  const [deleteReview] = useDeleteReviewMutation(undefined);

  const reviews = data?.data;
  console.log("reviews", reviews);

  const handleReviewDelete = async (id: string) => {
    const toastId = toast.loading("Profile update is loading");

    try {
      const res = await deleteReview(id);

      if (res?.data?.success) {
        toast.success("Review Deleted ", { id: toastId });
      }
    } catch (error) {
      toast.error("Review delete failed", { id: toastId });
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className=" ">
      <Table className="overflow-hidden">
        <TableHeader>
          <TableRow className="">
            <TableHead className="">Profile</TableHead>
            <TableHead>Customar Name</TableHead>
            <TableHead className="">Content</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews?.map((review: any) => (
            <TableRow key={review?._id}>
              <TableCell className="">
                <img
                  className="rounded h-11 w-11"
                  src={
                    review?.profilePhoto ||
                    "https://img.freepik.com/premium-vector/profile-interface-icon-vector-art_1015832-3774.jpg"
                  }
                  alt="Profile"
                />
              </TableCell>
              <TableCell className="text-start">
                {review?.customerName}
              </TableCell>
              <TableCell className="text-start">
                {review?.content.slice(0, 20)} ....
              </TableCell>

              <TableCell className="flex items-center  gap-2 ">
                <Button
                  onClick={() => handleReviewDelete(review?._id)}
                  variant={"secondary"}
                  className="cursor-pointer "
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default AllReview;
