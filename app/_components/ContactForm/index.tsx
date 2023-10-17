'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const onSubmit = async (data: FormData) => {
    const res = await fetch('/api/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: '問い合わせ',
        name: data.name,
        company: data.company,
        email: data.email,
        note: data.message,
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
    <form className="max-w-[600px] mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="name" className="text-sm">
            氏名
          </label>
          <span className="inline-block px-0.5 text-xs text-red-400 border border-red-400">
            必須
          </span>
        </div>
        <input
          className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
            errors.name && 'border-red-400'
          }`}
          type="text"
          id="name"
          {...register('name', {
            required: '入力してください。',
            maxLength: { value: 30, message: '30文字以内で入力してください。' },
          })}
        />
        {errors.name && <p className="text-sm text-red-400">{errors.name?.message}</p>}
      </div>
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="company" className="text-sm">
            会社名
          </label>
          <span className="inline-block px-0.5 text-xs text-red-400 border border-red-400">
            必須
          </span>
        </div>
        <input
          className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
            errors.company && 'border-red-400'
          }`}
          type="text"
          id="company"
          {...register('company', {
            required: '入力してください。',
            maxLength: { value: 50, message: '50文字以内で入力してください。' },
          })}
        />
        {errors.company && <p className="text-sm text-red-400">{errors.company?.message}</p>}
      </div>
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="email" className="text-sm">
            メールアドレス
          </label>
          <span className="inline-block px-0.5 text-xs text-red-400 border border-red-400">
            必須
          </span>
        </div>
        <input
          className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
            errors.email && 'border-red-400'
          }`}
          type="email"
          id="email"
          {...register('email', {
            required: '入力してください。',
            maxLength: { value: 50, message: '50文字以内で入力してください。' },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
              message: '正しいメールアドレスを入力してください。',
            },
          })}
        />
        {errors.email && <p className="text-sm text-red-400">{errors.email?.message}</p>}
      </div>
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="message" className="text-sm">
            問い合わせ内容
          </label>
          <span className="inline-block px-0.5 text-xs text-red-400 border border-red-400">
            必須
          </span>
        </div>
        <textarea
          className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
            errors.message && 'border-red-400'
          }`}
          rows={6}
          id="message"
          {...register('message', {
            required: '入力してください。',
            maxLength: { value: 300, message: '300文字以内で入力してください。' },
          })}
        />
        {errors.message && <p className="text-sm text-red-400">{errors.message?.message}</p>}
      </div>
      <div className="text-center mt-10">
        <p className="text-red-400 text-sm mb-2">{error}</p>
        <input
          type="submit"
          value="送信する"
          className="px-8 py-4 rounded text-sm bg-indigo-900 text-white text-center cursor-pointer hover:opacity-80"
        />
      </div>
    </form>
  );
}
