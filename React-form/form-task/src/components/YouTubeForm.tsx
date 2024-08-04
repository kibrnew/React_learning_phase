import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
let renderCount =0 

type FormValues ={
  username:string
  email:string
  channel:string
}
const YouTubeForm = () => {
  const form =useForm<FormValues>();
  const {register,control,handleSubmit,formState }=form;
  const { errors } =formState;
  
  const onSubmit = (data:FormValues) =>{
    console.log("form submitted",data)
  }

  renderCount++
  return (
    <div>
      <h1>YouTube Form {renderCount/2}</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username",{required:"user name is required"})} />
        <p>{errors.username?.message}</p>


        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email", { pattern: {value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "invalid email format",
      },
      validate: () => {

      }

       })} />

      <p>{errors.email?.message}</p>


        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel",{required:"user name is required"})} />
        <p>{errors.channel?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control}/>
    </div>
  );
};

export default YouTubeForm;
