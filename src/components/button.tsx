'use client';

import Link from 'next/link';
import { IoAddSharp, IoPencil, IoTrashOutline } from 'react-icons/io5';
import { useFormStatus } from 'react-dom';
import clsx from 'clsx';
import { deleteContact } from '../../lib/action';

export const CreateButton = () => {
  return (
    <Link
      href="/contact/create"
      className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};
export const HomeContact = () =>{
  return (
    <Link
      href='/contact'
      className="rounded-sm border p-1 hover:bg-gray-100"
    >
      Contact Page
    </Link>
  );
}
export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/contact/edit/${id}`}
      className="rounded-sm border p-1 hover:bg-gray-100"
    >
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteWithId = async () => {
    await deleteContact(id);
  };

  return (
    <form action={deleteWithId}>
      <button className="rounded-sm border p-1 hover:bg-gray-100">
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const className = clsx(
    'text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center',
    { 'opacity-50 cursor-progress': pending }
  );
  return (
    <button type="submit" disabled={pending} className={className}>
      {label === 'save' ? (
        <span>{pending ? 'Saving...' : 'Save'}</span>
      ) : (
        <span>{pending ? 'Update...' : 'Update'}</span>
      )}
    </button>
  );
};
