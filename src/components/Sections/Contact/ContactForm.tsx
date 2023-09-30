import emailjs from 'emailjs-com';
import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      from_name: '',
      from_email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  // eslint-disable-next-line react-memo/require-memo
  const Success = () => {
    <div className="border-b border-t border-blue-500 bg-blue-100 px-4 py-3 text-blue-700" role="alert">
      <p className="font-bold">Success</p>
      <p className="text-sm">Sent!!</p>
    </div>;
  };

  console.log('prcess env', process.env.SERVICE_ID);
  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);
      console.log('USER_ID', process.env.USER_ID);
      emailjs
        .sendForm(process.env.SERVICE_ID!, process.env.TEMPLATE_ID!, event.currentTarget, process.env.USER_ID)
        .then(result => {
          console.log('result', result);
          Success();
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
          return (
            <div role="alert">
              <div className="rounded-t bg-red-500 px-4 py-2 font-bold text-white">Error</div>
              <div className="rounded-b border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
                <p>Unable to Sent Email</p>
              </div>
            </div>
          );
        });
    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="from_name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="from_email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
