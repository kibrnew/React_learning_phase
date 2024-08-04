
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Entered value does not match email format'
            }
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p className="error-message">{errors.message.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
