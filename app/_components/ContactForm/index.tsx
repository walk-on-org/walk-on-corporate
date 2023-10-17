'use client';
import React, { useRef, useState } from 'react';
import styles from './index.module.css';

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: '問い合わせ',
        name: nameRef.current?.value,
        company: companyRef.current?.value,
        email: emailRef.current?.value,
        note: messageRef.current?.value,
      }),
    }).then((res) => res.json());
    if (res.status === 'error') {
      setError(res.message);
    } else {
      setSuccess(true);
    }
  };
  if (success) {
    return (
      <p className="bg-gray-300 text-sm p-10 rounded md:text-center">
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form className="max-w-[600px] mx-auto" onSubmit={onSubmit}>
      <div className="flex flex-col flex-1 py-2">
        <label className="text-sm" htmlFor="name">
          氏名
        </label>
        <input
          className="border p-2 rounded w-full leading-6"
          type="text"
          id="name"
          ref={nameRef}
        />
      </div>
      <div className="flex flex-col flex-1 py-2">
        <label className="text-sm" htmlFor="conpany">
          会社名
        </label>
        <input
          className="border p-2 rounded w-full leading-6"
          type="text"
          id="company"
          ref={companyRef}
        />
      </div>
      <div className="flex flex-col flex-1 py-2">
        <label className="text-sm" htmlFor="email">
          メールアドレス
        </label>
        <input
          className="border p-2 rounded w-full leading-6"
          type="text"
          id="email"
          ref={emailRef}
        />
      </div>
      <div className="flex flex-col flex-1 py-2">
        <label className="text-sm" htmlFor="message">
          メッセージ
        </label>
        <textarea className="border p-2 rounded w-full leading-6" id="message" ref={messageRef} />
      </div>
      <div className="text-center mt-10">
        <p className="text-red-400 text-sm mb-2">{error}</p>
        <input
          type="submit"
          value="送信する"
          className="border-none bg-gray-600 px-10 py-4 rounded cursor-pointer text-white"
        />
      </div>
    </form>
  );
}
