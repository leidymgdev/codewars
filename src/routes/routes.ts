import FormatStringNames  from '../components/FormatStringNames';

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
    }
];