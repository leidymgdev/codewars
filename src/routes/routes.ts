import FormatStringNames  from '../components/FormatStringNames';
import FormTheMinimum from '../components/FormTheMinimum';
import FunctionalAddition from '../components/FunctionalAddition';
import FunctionInAFunction from '../components/FunctionInAFunction';
import Mumbling from '../components/Mumbling';
import ReduceButGrow from '../components/ReduceButGrow';
import ReverseWords from '../components/ReverseWords';

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
    },
    {
        to: '/reduce-but-grow',
        path: 'reduce-but-grow',
        Component: ReduceButGrow,
        name: 'Reduce but Grow'
    },
    {
        to: '/reverse-words',
        path: 'reverse-words',
        Component: ReverseWords,
        name: 'Reverse Words'
    },
    {
        to: '/form-the-minimum',
        path: 'form-the-minimum',
        Component: FormTheMinimum,
        name: 'Form the minimum'
    }
];