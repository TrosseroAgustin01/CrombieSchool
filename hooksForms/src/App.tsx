import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com"

/* type Inputs = {
  email: string,
  message: string,
  fullname: string,
  phone: string,
}; */

const schema = yup.object({
  email: yup.string().min(10),
  fullname: yup.string(),
  phone: yup.string(),
  message:yup.string().min(10),
})

type Inputs = yup.InferType<typeof schema>

export default function App() {
  //const [inputs, setInputs] = useState<Inputs>();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({resolver:yupResolver(schema)});

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

   console.log(watch("email"))  // watch input value by passing the name of it
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="tronquis@gmail" {...register("email"/* , { required: true } */)} />
      {errors.email && <span>This field is required</span>}
      <input placeholder="tronquisl" {...register("fullname"/* , { required: true } */)} />
      {errors.fullname && <span>This field is required</span>}
      <input placeholder="prueba" {...register("message"/* , { required: true } */)} />
      {errors.message && <span>This field is required</span>}
      <input placeholder="3425154952" {...register("phone"/* , { required: true } */)} />
      {errors.phone && <span>This field is required</span>}


      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("phone", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      
      <input type="submit" />
    </form>
  );
}

