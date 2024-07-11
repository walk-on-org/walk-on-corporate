import ContactForm from '@/app/_components/ContactForm';

export default function Page() {
  return (
    <div>
      <p className="mb-10 text-sm sm:text-center">
        ご質問、ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認後、担当者より通常3営業日以内にご連絡いたします。
        <br />
        <br />
        <span className="text-red-400 font-bold">※営業目的のお問い合わせはご遠慮ください。</span>
      </p>
      <ContactForm />
    </div>
  );
}
