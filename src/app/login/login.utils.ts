import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const loginUtils = () => {
  const useFormUtilities = useForm<FormValues>({
    context: {
      email: "", // default context value (opsional)
    },
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitLogin = (data: FormValues) => {
    console.log('value', data);
  }

  return {
    onSubmitLogin,
    useFormUtilities,
  };
};

export default loginUtils;
