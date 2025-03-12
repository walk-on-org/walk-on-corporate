import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // microCMSへ連携
    await fetch(`https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
      },
      body: JSON.stringify({
        type: [formData.get('type')],
        status: ['未対応'],
        name: formData.get('name') || null,
        company: formData.get('company') || null,
        tel: formData.get('tel') || null,
        email: formData.get('email') || null,
        note: formData.get('note') || null,
        job: formData.get('job') || null,
        current_position: formData.get('current_position') || null,
        age: formData.get('age') || null,
        final_education: formData.get('final_education') || null,
        career: formData.get('career') || null,
      }),
    }).then((res) => res.json());

    // チャットワークへ連携
    let message = '';
    if (formData.get('type') == '応募') {
      message = `[toall]
会社HPから応募が入りました。

■氏名：${formData.get('name') || ''}
■メールアドレス：${formData.get('email') || ''}
■現所属：${formData.get('current_position') || ''}
■年齢：${formData.get('age') || ''}
■最終学歴：${formData.get('final_education') || ''}
■電話番号：${formData.get('tel') || ''}
■経歴：${formData.get('career') || ''}
■応募先へのメッセージ：${formData.get('note') || ''}`;
    } else {
      message = `[toall]
会社HPから問い合わせがありました。

■氏名：${formData.get('name') || ''}
■会社名：${formData.get('company') || ''}
■メールアドレス：${formData.get('email') || ''}
■電話番号：${formData.get('tel') || ''}
■問い合わせ内容：${formData.get('note') || ''}`;
    }
    await fetch(`https://api.chatwork.com/v2/rooms/${process.env.CHATWORK_ROOM_ID}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-ChatWorkToken': process.env.CHATWORK_API_TOKEN || '',
      },
      body: new URLSearchParams({
        body: message,
        self_unread: '1',
      }),
    }).then((res) => res.json());

    // 履歴書をチャットワークに投稿
    const resume = formData.get('resume') as File | null;
    if (resume) {
      const form = new FormData();
      form.append('file', resume);
      form.append('message', '応募者の履歴書');
      await fetch(`https://api.chatwork.com/v2/rooms/${process.env.CHATWORK_ROOM_ID}/files`, {
        method: 'POST',
        headers: {
          'X-ChatWorkToken': process.env.CHATWORK_API_TOKEN || '',
        },
        body: form,
      }).then((res) => console.log(res.json()));
    }

    // 職務経歴書をチャットワークに投稿
    const workHisotry = formData.get('work_history') as File | null;
    if (workHisotry) {
      const form = new FormData();
      form.append('file', workHisotry);
      form.append('message', '応募者の職務経歴書');
      await fetch(`https://api.chatwork.com/v2/rooms/${process.env.CHATWORK_ROOM_ID}/files`, {
        method: 'POST',
        headers: {
          'X-ChatWorkToken': process.env.CHATWORK_API_TOKEN || '',
        },
        body: form,
      }).then((res) => console.log(res.json()));
    }

    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: '送信に失敗しました。時間を空けて再度送信してください。' },
      { status: 500 },
    );
  }
}
