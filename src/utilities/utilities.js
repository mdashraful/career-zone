import toast from "react-hot-toast";

export const handleToApply = (id) => {
  const exists = JSON.parse(localStorage.getItem("applyJobs"));
  let applied = [];
  const job = id;

  if (exists) {
    const alreadyApplied = exists.find((a) => a == id);
    if (alreadyApplied) {
      toast.success("You Already Applied Here.");
      return;
    } else {
      applied.push(...exists, job);
      localStorage.setItem("applyJobs", JSON.stringify(applied));
    }
  } else {
    applied.push(job);
    localStorage.setItem("applyJobs", JSON.stringify(applied));
  }
};
