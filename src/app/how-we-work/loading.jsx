import LoadingSpinner from "@/components/ui/Loading/LoadingSpinner";

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-600">
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
};

export default loading;
