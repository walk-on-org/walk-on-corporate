'use client';
import { Recruit } from '@/app/_libs/microcms';
import Loading from '@/app/loading';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  current_position: string;
  age: string;
  final_education: string;
  tel: string;
  career: string;
  message: string;
};
type Props = {
  job: Recruit;
};

export default function EntryForm({ job }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const res = await fetch('/api/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: '応募',
        job: job.id,
        name: data.name,
        email: data.email,
        current_position: data.current_position,
        age: data.age,
        final_education: data.final_education,
        tel: data.tel,
        career: data.career,
        note: data.message,
      }),
    }).then((res) => res.json());
    if (res.status === 'error') {
      setError(res.message);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };
  if (success) {
    return (
      <p className="bg-gray-300 text-sm p-10 rounded md:text-center">
        応募いただき、ありがとうございます。
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
          placeholder="例）採用 太郎"
          {...register('name', {
            required: '入力してください。',
            maxLength: { value: 30, message: '30文字以内で入力してください。' },
          })}
        />
        {errors.name && <p className="text-sm text-red-400">{errors.name?.message}</p>}
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
          placeholder="例）〇〇@〇〇.co.jp"
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
          <label htmlFor="current-position" className="text-sm">
            現所属
          </label>
          <span className="inline-block px-0.5 text-xs text-gray-400 border border-gray-400">
            任意
          </span>
        </div>
        <input
          className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
            errors.current_position && 'border-red-400'
          }`}
          type="text"
          id="current-position"
          placeholder="例）株式会社walk-on"
          {...register('current_position', {
            maxLength: { value: 50, message: '50文字以内で入力してください。' },
          })}
        />
        {errors.current_position && (
          <p className="text-sm text-red-400">{errors.current_position?.message}</p>
        )}
      </div>
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="age" className="text-sm">
            年齢
          </label>
          <span className="inline-block px-0.5 text-xs text-red-400 border border-red-400">
            必須
          </span>
        </div>
        <input
          className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
            errors.age && 'border-red-400'
          }`}
          type="text"
          id="age"
          placeholder="例）27"
          {...register('age', {
            required: '入力してください。',
            pattern: {
              value: /^[1-9]{1}[0-9]$/,
              message: '数字で入力してください。',
            },
          })}
        />
        {errors.age && <p className="text-sm text-red-400">{errors.age?.message}</p>}
      </div>
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="final-education" className="text-sm">
            最終学歴
          </label>
          <span className="inline-block px-0.5 text-xs text-gray-400 border border-gray-400">
            任意
          </span>
        </div>
        <input
          className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
            errors.final_education && 'border-red-400'
          }`}
          type="text"
          id="final-education"
          placeholder="例）〇〇大学"
          {...register('final_education', {
            maxLength: { value: 50, message: '50文字以内で入力してください。' },
          })}
        />
        {errors.final_education && (
          <p className="text-sm text-red-400">{errors.final_education?.message}</p>
        )}
      </div>
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="tel" className="text-sm">
            電話番号
          </label>
          <span className="inline-block px-0.5 text-xs text-red-400 border border-red-400">
            必須
          </span>
        </div>
        <input
          className={`border border-gray-600 p-2 rounded w-full leading-8 bg-gray-50 ${
            errors.tel && 'border-red-400'
          }`}
          type="tel"
          id="tel"
          placeholder="例）090-1234-5678"
          {...register('tel', {
            required: '入力してください。',
            pattern: {
              value: /^0[789]0(-)?[0-9]{4}(-)?[0-9]{4}$/,
              message: '電話番号を入力してください。',
            },
          })}
        />
        {errors.tel && <p className="text-sm text-red-400">{errors.tel?.message}</p>}
      </div>
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="career" className="text-sm">
            経歴
          </label>
          <span className="inline-block px-0.5 text-xs text-gray-400 border border-gray-400">
            任意
          </span>
        </div>
        <textarea
          className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
            errors.career && 'border-red-400'
          }`}
          rows={6}
          id="career"
          {...register('career', {
            maxLength: { value: 300, message: '300文字以内で入力してください。' },
          })}
        />
        {errors.career && <p className="text-sm text-red-400">{errors.career?.message}</p>}
      </div>
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="message" className="text-sm">
            応募先へのメッセージ
          </label>
          <span className="inline-block px-0.5 text-xs text-gray-400 border border-gray-400">
            任意
          </span>
        </div>
        <textarea
          className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
            errors.message && 'border-red-400'
          }`}
          rows={6}
          id="message"
          {...register('message', {
            maxLength: { value: 300, message: '300文字以内で入力してください。' },
          })}
        />
        {errors.message && <p className="text-sm text-red-400">{errors.message?.message}</p>}
      </div>
      <div className="text-center mt-10">
        <p className="text-red-400 text-sm mb-2">{error}</p>
        <p className="text-sm mb-4">
          <Link href={`/privacy-policy`} className="text-secondary underline" target="_blank">
            個人情報保護方針
          </Link>
          に同意して
        </p>
        {loading ? (
          <Loading />
        ) : (
          <input
            type="submit"
            value="送信する"
            className="px-8 py-4 rounded text-sm bg-secondary text-white text-center cursor-pointer hover:opacity-80"
          />
        )}
      </div>
    </form>
  );
}
