'use client';
import { Recruit } from '@/app/_libs/microcms';
import Loading from '@/app/loading';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type EntryFormData = {
  name: string;
  email: string;
  current_position: string;
  age: string;
  final_education: string;
  tel: string;
  career: string;
  message: string;
  preferred_step: string;
  application_reason: string[];
  introduction_name: string;
  resume: File;
  work_history: File;
};
type Props = {
  job: Recruit;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const PREFERRED_STEP_OPTIONS = ['面接希望', 'カジュアル面談希望'];

const APPLICATION_REASON_OPTIONS = [
  '会社HPを見て',
  '求人サイトを見て',
  '社員からの紹介',
  'SNSを見て（ X / Wantedly）',
  'その他',
];

export default function EntryForm({ job }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<EntryFormData>({
    mode: 'onSubmit',
  });

  const preferredStep = watch('preferred_step');
  const applicationReason = watch('application_reason');
  const isCasualMeeting = preferredStep === 'カジュアル面談希望';
  const isInputIntroductionName =
    applicationReason && applicationReason?.includes('社員からの紹介');

  const [resume, setResume] = useState<File | null>(null);
  const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResume(event.target.files[0]);
    }
  };
  const [workHistory, setWorkHistory] = useState<File | null>(null);
  const handleWorkHistoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setWorkHistory(event.target.files[0]);
    }
  };

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit = async (data: EntryFormData) => {
    if (!isCasualMeeting && !resume) {
      alert('履歴書をアップロードしてください。');
      return;
    }
    if (
      !isCasualMeeting &&
      String(job.id) !== process.env.NEXT_PUBLIC_OPTIONAL_WORK_HISTORY_JOB_ID &&
      !workHistory
    ) {
      alert('職務経歴書をアップロードしてください。');
      return;
    }
    const formData = new FormData();
    formData.append('type', '応募');
    formData.append('job', String(job.id));
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('current_position', data.current_position);
    formData.append('age', data.age);
    formData.append('final_education', data.final_education);
    formData.append('tel', data.tel);
    formData.append('career', data.career);
    formData.append('note', data.message);
    formData.append('preferred_step', data.preferred_step);
    if (data.application_reason && data.application_reason.length > 0) {
      data.application_reason.forEach((reason) => {
        formData.append('application_reason', reason);
      });
    }
    formData.append('introduction_name', data.introduction_name);
    if (resume) {
      formData.append('resume', resume);
    }
    if (workHistory) {
      formData.append('work_history', workHistory);
    }
    setLoading(true);

    const res = await fetch('/api/submit-contact', {
      method: 'POST',
      body: formData,
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
      {/* 氏名 */}
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
      {/* メールアドレス */}
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
      {/* 現所属 */}
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
      {/* 年齢 */}
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
      {/* 最終学歴 */}
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
      {/* 電話番号 */}
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
      {/* 経歴 */}
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
      {/* 応募先へのメッセージ */}
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
      {/* ご希望ステップ */}
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label className="text-sm">ご希望ステップ</label>
          <span className="inline-block px-0.5 text-xs text-red-400 border border-red-400">
            必須
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {PREFERRED_STEP_OPTIONS.map((option) => (
            <label className="flex items-center gap-2 cursor-pointer" key={option}>
              <input
                type="radio"
                value={option}
                {...register('preferred_step', {
                  required: '選択してください。',
                })}
                className="w-4 h-4"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
        {errors.preferred_step && (
          <p className="text-sm text-red-400">{errors.preferred_step?.message}</p>
        )}
      </div>
      {/* 応募のきっかけ */}
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-2">
          <label className="text-sm">応募のきっかけ</label>
          <span className="inline-block px-0.5 text-xs text-red-400 border border-red-400">
            必須
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {APPLICATION_REASON_OPTIONS.map((option) => (
            <label className="flex items-center gap-2 cursor-pointer" key={option}>
              <input
                type="checkbox"
                value={option}
                {...register('application_reason', {
                  required: '選択してください。',
                })}
                className="w-4 h-4"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>
      {/* 紹介者の氏名 */}
      {isInputIntroductionName && (
        <div className="flex flex-col flex-1 py-2">
          <div className="flex gap-2 mb-1">
            <label htmlFor="introduction_name" className="text-sm">
              紹介者の氏名
            </label>
            <span className="inline-block px-0.5 text-xs text-red-400 border border-red-400">
              必須
            </span>
          </div>
          <input
            className={`border border-gray-600 p-2 rounded w-full leading-6 bg-gray-50 ${
              errors.introduction_name && 'border-red-400'
            }`}
            type="text"
            id="introduction_name"
            placeholder="例）採用 太郎"
            {...register('introduction_name', {
              required: '入力してください。',
              maxLength: { value: 30, message: '30文字以内で入力してください。' },
            })}
          />
          {errors.introduction_name && (
            <p className="text-sm text-red-400">{errors.introduction_name?.message}</p>
          )}
        </div>
      )}
      {/* 履歴書 */}
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="resume" className="text-sm">
            履歴書
          </label>
          <span
            className={`inline-block px-0.5 text-xs ${
              isCasualMeeting
                ? 'text-gray-400 border border-gray-400'
                : 'text-red-400 border border-red-400'
            }`}
          >
            {isCasualMeeting ? '任意' : '必須'}
          </span>
        </div>
        <div className="border border-gray-600 p-2">
          <input
            type="file"
            id="resume"
            accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
            {...register('resume', {
              required: isCasualMeeting ? false : '履歴書をアップロードしてください。',
              validate: {
                lessThan5MB: (files: any) => {
                  const file = files[0];
                  if (!file) return true;
                  console.log(file.size);
                  return (
                    file?.size < MAX_FILE_SIZE || '5MB以下のファイルをアップロードしてください。'
                  );
                },
              },
              onChange: (e) => handleResumeChange(e),
            })}
          />
          {errors.resume && <p className="text-sm text-red-400">{errors.resume?.message}</p>}
        </div>
        <p className="text-sm text-gray-400 mt-1">
          ファイルサイズは 5 MB 以下。
          <br />
          対応ファイル種類：Word、Excel、PPT、PDF
        </p>
      </div>
      {/* 職務経歴書 */}
      <div className="flex flex-col flex-1 py-2">
        <div className="flex gap-2 mb-1">
          <label htmlFor="work_history" className="text-sm">
            職務経歴書
          </label>
          <span
            className={`inline-block px-0.5 text-xs ${
              isCasualMeeting ||
              String(job.id) === process.env.NEXT_PUBLIC_OPTIONAL_WORK_HISTORY_JOB_ID
                ? 'text-gray-400 border border-gray-400'
                : 'text-red-400 border border-red-400'
            }`}
          >
            {isCasualMeeting ||
            String(job.id) === process.env.NEXT_PUBLIC_OPTIONAL_WORK_HISTORY_JOB_ID
              ? '任意'
              : '必須'}
          </span>
        </div>
        <div className="border border-gray-600 p-2">
          <input
            type="file"
            id="work_history"
            accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
            {...register('work_history', {
              required:
                !isCasualMeeting &&
                String(job.id) !== process.env.NEXT_PUBLIC_OPTIONAL_WORK_HISTORY_JOB_ID
                  ? '職務経歴書をアップロードしてください。'
                  : false,
              validate: {
                lessThan5MB: (files: any) => {
                  const file = files[0];
                  if (!file) return true;
                  return (
                    file?.size < MAX_FILE_SIZE || '5MB以下のファイルをアップロードしてください。'
                  );
                },
              },
              onChange: (e) => handleWorkHistoryChange(e),
            })}
          />
          {errors.work_history && (
            <p className="text-sm text-red-400">{errors.work_history?.message}</p>
          )}
        </div>
        <p className="text-sm text-gray-400 mt-1">
          ファイルサイズは 5 MB 以下。
          <br />
          対応ファイル種類：Word、Excel、PPT、PDF
        </p>
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
            className="px-8 py-4 rounded text-sm bg-secondary text-white border border-secondary text-center cursor-pointer duration-500 hover:bg-white hover:text-secondary"
          />
        )}
      </div>
    </form>
  );
}
