export function statusStyle(status: string) {
  if (status === 'В наличии') return 'bg-emerald-50 text-emerald-800'
  if (status === 'Продано'||status === 'Проданно') return 'bg-red-50 text-red-800'
  if (status === 'Зарезервированно'||status === 'Зарезервировано') return 'bg-yellow-50 text-yellow-800'
}