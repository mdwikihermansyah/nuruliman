import { checkUser } from "@/lib/checkUser";
import HeaderClientWrapper from "./header-client-wrapper";

const HeaderWrapper = async () => {
  const user = await checkUser();
  const role = user?.role ?? "USER";

  return <HeaderClientWrapper role={role} />;
};

export default HeaderWrapper;
