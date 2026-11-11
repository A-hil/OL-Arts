export type Status = 'В наличии' | 'Продано' | 'Зарезервировано';

export type GalleryItem = {
  id: number
  title: string
  category: string
  price: string
  status: Status
  image: string
  year: number
  is_tall: boolean
}

export type GalleryFormValues = {
  title: string
  category: string
  price: string
  status: Status
  image: string
  year: number
  is_tall: boolean
}