import 'server-only'
import { i18n } from '../../i18n.config'

const dictionaries = {
  az: () => import('../../dictionaries/az.json').then((module) => module.default),
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()