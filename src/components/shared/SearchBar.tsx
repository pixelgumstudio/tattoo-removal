'use client';

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import clsx from 'clsx';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useSearchClinics } from '@/lib/hooks/useSearchClinics';
import { AsyncStatus } from '../sections/AsynStatus';
import { Clinic } from '@/types/store';
import Link from 'next/link';
import { createSlug } from '@/lib/slug';


interface SearchBarProps {
  type?: 'state' | 'city' | 'service' | ""; // optional with default
  placeholder?: string;
  buttonText?: string;
}

export default function SearchBar({
  // type,
  placeholder = 'state',
  buttonText = 'Search',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const { data, isLoading, isError } = useSearchClinics({
    query: submittedQuery,
    // type,
    limit: 10,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = (
      e.currentTarget.elements.namedItem('search-query') as HTMLInputElement
    )?.value;
    if (value) {
      setSubmittedQuery(value);
    }
  };

  useEffect(() => {
    if (submittedQuery) {
      const timer = setTimeout(() => {
        setSubmittedQuery('');
      }, 30000); // Clear the submitted query after 5 seconds
      return () => clearTimeout(timer); // Cleanup the timer on unmount or when submittedQuery changes
 }
 },[submittedQuery]);

  return (
    <div className="space-y-6 w-full">
      <form
        onSubmit={handleSubmit}
        className={clsx(
          'flex items-center gap-2 w-full max-w-2xl px-1 bg-white rounded-[5px] overflow-hidden shadow-sm border p-2'
        )}
      >
        <div className="pl-2">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <Input
          type="text"
          name="search-query"
          placeholder={`Search for tattoo services ${placeholder}...`}
          defaultValue={query}
          onChange={(handleSearch) => setQuery(handleSearch.target.value)}
          className="flex-1"
        />
        <Button type="submit">{buttonText}</Button>
      </form>

      <AsyncStatus isLoading={isLoading} isError={isError} />

      {!isLoading && !isError && submittedQuery && (
        <ul className="max-w-2xl space-y-3 text-sm bg-white p-4 text-gray-700">
          {data && data.data.map((clinic: Clinic, idx: number) => (
            <li key={idx} className="border-b pb-2">
              <Link href={`/clinic/${createSlug(clinic.name)}?postal=${clinic.postal_code}`} className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
              <strong>{clinic.name}</strong>
              <div className="text-gray-500">
                {clinic.city}, {clinic.state}
              </div>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
