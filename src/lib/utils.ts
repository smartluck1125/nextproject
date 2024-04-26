import { PayloadAction } from '@reduxjs/toolkit';
import clsx, { ClassValue } from 'clsx';
import numeral from 'numeral';
import { twMerge } from 'tailwind-merge';

import LIST_CATEGORY from '@/constant/category';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const assignActionCreator =
  <T>(key: string) =>
  (state: any, action: PayloadAction<T>) => {
    state[key] = action.payload;
  };

export const getCategoryTitle = (value?: string): string => {
  return LIST_CATEGORY.find((item) => item.value === value)?.title || '';
};

export const formatStarCount = (value: number): string => {
  const result = numeral(value / 1000).format('0,0[.]0');
  return `${result}K`;
};
