import FormatStringNames  from '../components/FormatStringNames';
import FunctionalAddition from '../components/FunctionalAddition';
import FunctionInAFunction from '../components/FunctionInAFunction';
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
    },
    {
        to: '/function-in-a-function',
        path: 'function-in-a-function',
        Component: FunctionInAFunction,
        name: 'Function in a Function'
    },
    {
        to: '/functional-addition',
        path: 'functional-addition',
        Component: FunctionalAddition,
        name: 'Functional Addition'
    }
];