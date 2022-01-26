export interface Database {
  id: string
  title: string
  details: string
  photos: string[]
  coordinates: number[]
  bookedDates: []
  price: number
}

export interface ParamsForSearch {
  city: string
  heckInDate: Date
  checkOutDate: Date
  priceLimit: string
}

export function cloneDate(date: Date): Date
export function addDays(date: Date, days: number): Date

export const backendPort: number
export const localStorageKey: string

export class FlatRentSdk {
  get(id: string): Object | null
  search(parameters: ParamsForSearch): Object[] 
  book(flatId: number, checkInDate: Date, checkOutDate: Date): number 
}
export function assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void | Error
export function resetTime(date: Date): void 
export function calculateDifferenceInDays(startDate: Date, endDate: Date): number
export function generateDateRange(from: Date, to: Date): Date[] 
export function generateTransactionId(): number 
export function areAllDatesAvailable(flat: Object, dateRange: Date) //здесь непонятно что должен вернуть метод
export function formatFlatObject(flat: Object, nightNumber?: number): Object 
export function readDatabase() //здесь неизвестно чем будет JSON, который придет после запроса
export function writeDatabase(database: Database[]): void
export function syncDatabase(database: Database[]): void
