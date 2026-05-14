"use client";
import { useParams } from 'next/navigation';
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  if(!params.id) return;
  const id = params.id;
  const [year, month, day] = id.toString().split('-');

  return (
    <div>{year}년 {month}월 {day}일</div>
  )
}