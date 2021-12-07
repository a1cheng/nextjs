import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    return (
    <><header>
            <Image src='/images/laugh.gif' height={144} width={144} alt='muttley laugh'/>
            <h1>
                Laugh generator
            </h1>
        </header>
        <nav>
            <Link href="/">Home</Link> |
            <Link href="/jokes">Jokes</Link> | 
            <Link href="/gifs">Gifs</Link> | 
            <Link href="/matt_special">Special</Link>
        </nav></>
    )
}