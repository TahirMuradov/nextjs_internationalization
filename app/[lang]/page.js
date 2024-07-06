
import { getDictionary } from './dictionaries'

import LocaleSwitcher from "./components/locale-switcher";
export default async function Home({params:{lang}}) {
  const dict = await getDictionary(lang)
  return (
    <main className="">
    <button>{dict.products.cart}</button>
<LocaleSwitcher/>
    </main>
  );
}
