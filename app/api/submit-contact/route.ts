import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const json = await request.json();
  const {
    type,
    name,
    company,
    tel,
    email,
    note,
    job,
    current_position,
    age,
    final_education,
    career,
  } = json;

  const result = await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/contact`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
      },
      body: JSON.stringify({
        type: [type],
        status: ['未対応'],
        name: name,
        company: company,
        tel: tel,
        email: email,
        note: note,
        job: job,
        current_position: current_position,
        age: age,
        final_education: final_education,
        career: career,
      }),
    },
  ).then((res) => res.json());
  return NextResponse.json(result);
}
