"use client";
import { useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import Button from "../../../components/Button";
import { enable2FA } from "../../../slices/auth";

const Page = () => {
  const router = useRouter();
  // const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { Id } = useParams();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(enable2FA({ Id })).then(() => {
      router.push(`/verfiy2fa/${Id}`);
    });
  };

  return (
    <div className="container mx-auto mt-4">
      <h1>Welcome to Mekedonia Please enable two factor authentication</h1>
      <form onSubmit={handleSubmit}>
        {/* <input type="hidden" name="email" value={email} /> */}
        <Button type="submit" color="bt_primary">
          Enable 2FA
        </Button>
      </form>
    </div>
  );
};

export default Page;
