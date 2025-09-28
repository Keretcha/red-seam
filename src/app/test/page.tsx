/** @format */
import { baseFetch } from "@/shared/api/base/base-fetch";

const TestPage = async () => {
  const formData = new FormData();
  formData.append("email", "hello@redberry.ge");
  formData.append("username", "redberry");
  formData.append("avatar", "");
  formData.append("password", "password");
  formData.append("password_confirmation", "password");

  const res = await baseFetch("register", {
    method: "POST",
    body: formData,
  });

  console.log(res, "res");

  return <div>test</div>;
};

export default TestPage;
