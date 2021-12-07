import {Footer} from "./Footer";
import {Header} from "./Header";

type LayoutProps = {
    children: React.ReactNode
}

export function Layout(props: LayoutProps) {
    return <>
        <Header></Header>
        <main>
        {props.children}
        </main>
        <Footer></Footer>
        </>
}