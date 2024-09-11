import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import LocalSwitcher from './local-switcher'

const Header = () => {
    const t = useTranslations('Navigation')

  return (
    <header>
        <nav>
            <Link href={'/'} >{t('home')}</Link>
            <LocalSwitcher />
        </nav>
    </header>
  )
}

export default Header