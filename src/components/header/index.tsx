// useSession(Hook) - Para saber se o usuário está ou não logado
// signIn - Para poder fazer o login

import { useSession, signIn, signOut } from 'next-auth/react'

import styles from './styles.module.css'
import Link from 'next/link'

export default function Header() {

    const { data: session, status } = useSession();

    return (
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link href='/'>
                        <h1 className={styles.logo}>
                            Tarefas<span>+</span>
                        </h1>
                    </Link>
                    {session?.user && ( // se tiver usuário logado, vai mostrar o botão "Meu Painel; se não tiver usuário logado não mostra"
                        <Link href='/dashboard' className={styles.link}>
                            Meu Painel
                        </Link>
                    )}
                </nav>

                { status === 'loading' ? (
                    <></>
                ) : session ? (
                    <button className={styles.loginButton} onClick={ () => signOut()}>
                        Olá {session?.user?.name}
                    </button>
                ) : (
                    <button className={styles.loginButton} onClick={ () => signIn('google')}>
                        Acessar
                    </button>
                )}
            </section>
        </header>
    )
}