/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/components/modules/shared/Loading";
import CommonPagination from "@/components/pagignation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllUserQuery,
  useGetMeQuery,
  useProfileUpdateMutation,
} from "@/redux/features/user/user.api";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AllUser = () => {
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

  const { data, isLoading } = useGetAllUserQuery({ page: currentPage, limit });
  const { data: currentProfile } = useGetMeQuery(undefined);
  const [profileUpdate] = useProfileUpdateMutation();

  const users = data?.data?.data;
  const myProfile = currentProfile?.data;

  const handleUpdateStatus = async (id: string, data: string) => {
    const status = { role: data };
    const superAdminEmail = "super-admin@gmail.com";

    const toastId = toast.loading("Profile update is loading");
    if (myProfile?.email !== superAdminEmail) {
      return toast.error("Only Super Admin Can Update Status", { id: toastId });
    }
    const formData = new FormData();
    formData.append("data", JSON.stringify(status));

    try {
      const res = await profileUpdate({ id, formData });
      console.log(res);
      toast.success("Profile updated ", { id: toastId });
    } catch (error) {
      toast.error("Profile upload failed", { id: toastId });
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
            <TableHead>Name</TableHead>
            <TableHead className="">Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user: any) => (
            <TableRow key={user?._id}>
              <TableCell className="">
                <img
                  className="rounded h-11 w-11"
                  src={
                    user?.picture ||
                    "https://img.freepik.com/premium-vector/profile-interface-icon-vector-art_1015832-3774.jpg"
                  }
                  alt="Profile"
                />
              </TableCell>
              <TableCell className="text-start">{user?.name}</TableCell>
              <TableCell className="text-start">{user?.email}</TableCell>
              {user?.role == "SENDER" ? (
                <TableCell className="text-start">
                  <Badge variant="destructive">Inactive</Badge>
                </TableCell>
              ) : (
                <TableCell className="text-start">
                  {" "}
                  <Badge variant="default" className="bg-green-600">
                    Active
                  </Badge>
                </TableCell>
              )}

              <TableCell className="flex items-center  gap-2 ">
                <Button
                  onClick={() => handleUpdateStatus(user?._id, "SENDER")}
                  variant={"secondary"}
                  className="cursor-pointer "
                >
                  Block
                </Button>
                <Button
                  onClick={() => handleUpdateStatus(user?._id, "ADMIN")}
                  variant={"secondary"}
                  className="cursor-pointer"
                >
                  Unblock
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={10}>
              <CommonPagination
                currentPage={data?.data?.meta?.page}
                totalPages={data?.data?.meta?.totalPage}
                paginationItemsToDisplay={data?.data?.meta?.total}
              ></CommonPagination>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
};

export default AllUser;
