import type { Status } from '../app/data';

export default function StatusPill({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    'В наличии': 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    'Продано': 'bg-red-50 text-red-600 border border-red-200',
    'Зарезервировано': 'bg-amber-50 text-amber-700 border border-amber-200',
  }
  return (
    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${styles[status]}`}>
      {status}
    </span>
  )
}