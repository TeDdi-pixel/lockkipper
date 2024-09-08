import { Skeleton } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

export const SkeletonItems = () => {
  return Array.from({ length: 5 }).map((_, index) => (
      <tr key={index} className="h-[30px] border-t border-border">
        <td className="p-[10.5px] flex items-center justify-between">
          <Skeleton variant="rounded" width={24} height={24} animation="wave" />
          <Skeleton
            variant="rounded"
            width={24}
            height={24}
            style={{ marginLeft: 8 }}
            animation="wave"
          />
        </td>
        <td className="p-[10.5px]">
          <Skeleton variant="text" width={120} height={24} animation="wave" />
          <Skeleton variant="text" width={80} height={24} animation="wave" />
        </td>
        <td className="p-[10.5px]">
          <Skeleton variant="rounded" width={24} height={14} animation="wave" />
        </td>
        <td className="p-[10.5px]">
          <div className="flex justify-end p-[10.5px] text-primary-foreground">
            <BsThreeDotsVertical />
          </div>
        </td>
      </tr>
  ));
};
