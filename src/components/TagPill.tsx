import type { Tag } from '../app/data';

export default function TagPill({ tag }: { tag: Tag }) {
  const styles: Record<Tag, string> = {
    'Скоро': 'bg-[#FBF0EC] text-[#C1694F]',
    'Регистрация открыта': 'bg-[#EAF4EC] text-[#2E7D32]',
    'Вход свободный': 'bg-[#F0F4FF] text-[#3B5BDB]',
  }
  return (
    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${styles[tag]}`}>
      {tag}
    </span>
  )
}