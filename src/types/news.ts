import type { PostModel } from '../generated/prisma/models/Post'

export type NewsCategory = 'Выставка' | 'Мастер-класс' | 'Урок'

export type NewsStatus = 'Скоро' | 'Открыт набор' | 'Вход свободный'

export type NewsItem = Omit<PostModel, 'createdAt'> & { createdAt: string }

export type NewsFormValues = {
  title: string
  image: string
  status: NewsStatus
  date: string
  location: string
  category: NewsCategory
  description: string
}
