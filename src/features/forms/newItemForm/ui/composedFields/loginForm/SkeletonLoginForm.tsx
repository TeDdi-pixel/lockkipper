import { Skeleton } from "@mui/material";

export const SkeletonLoginForm = () => {
  const skeletonField = (
    <Skeleton variant="rounded" width={377} height={37.13} animation="wave" />
  );
  return (
    <div className="flex flex-col gap-y-5 px-4">
      <div className="flex gap-5">
        {skeletonField}
        {skeletonField}
      </div>
      <div className="flex gap-5">
        {skeletonField}
        {skeletonField}
      </div>  
      <div className="flex gap-5 max-w-[377px]">{skeletonField}</div>
    </div>
  );
};
