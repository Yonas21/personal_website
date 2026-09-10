import {FC, FormEvent, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
  company: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const CONTACT_EMAIL = 'yonalem21@gmail.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      from_name: '',
      from_email: '',
      message: '',
      company: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [status, setStatus] = useState<FormStatus>('idle');

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const {name, value} = event.target;
    setData(current => ({...current, [name]: value}));
  }, []);

  const handleSendMessage = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (data.company.trim()) {
        setStatus('success');
        setData(defaultData);
        return;
      }

      setStatus('sending');
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.from_name,
            email: data.from_email,
            message: data.message,
            _replyto: data.from_email,
            _subject: `Portfolio message from ${data.from_name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const result = (await response.json()) as {success?: boolean | string; message?: string};
        const succeeded = result.success === true || result.success === 'true';
        const needsActivation =
          typeof result.message === 'string' && result.message.toLowerCase().includes('activation');

        if (!succeeded && !needsActivation) {
          throw new Error(result.message || 'Unable to send message');
        }

        setStatus('success');
        setData(defaultData);
      } catch {
        setStatus('error');
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'w-full rounded-xl border-0 bg-surface text-sm text-fg placeholder:text-fg-subtle focus:ring-1 focus:ring-accent';

  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={handleSendMessage}>
      <input
        autoComplete="name"
        className={inputClasses}
        name="from_name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.from_name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="from_email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.from_email}
      />
      <input
        autoComplete="off"
        className="hidden"
        name="company"
        onChange={onChange}
        tabIndex={-1}
        type="text"
        value={data.company}
      />
      <textarea
        className={inputClasses}
        maxLength={1000}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === 'sending'}
        type="submit">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'success' && <p className="text-sm text-accent">Message sent. I will get back to you soon.</p>}
      {status === 'error' && (
        <p className="text-sm text-red-400">
          Something went wrong.{' '}
          <a className="underline hover:text-accent-hover" href={`mailto:${CONTACT_EMAIL}`}>
            Email me directly
          </a>
          .
        </p>
      )}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
