import FormatStringNames  from '../components/FormatStringNames';
import Mumbling from '../components/Mumbling';

type JSXComponent = () => JSX.Element

export interface Route {
    to: string,
    path: string,
    Component: JSXComponent
    name: string
}
export const routes: Route[] = [
    {
        to: '/format-string-names',
        path: 'format-string-names',
        Component: FormatStringNames,
        name: 'Format String Names'
    },
    {
        to: '/mumbling',
        path: 'mumbling',
        Component: Mumbling,
        name: 'Mumbling'
    }
];