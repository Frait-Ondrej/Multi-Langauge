import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


export default function Home() { 
  const t = useTranslations('HomePage');
  return (
    <div>
      {t('title')}
    </div>
  );
}
