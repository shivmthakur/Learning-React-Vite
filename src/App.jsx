import './App.css'
import Button from './Button';
import ButtonClicks from './ButtonClicks';
import Footer from './Footer';
import CommonHeader, {containerCount, Header, Navigation} from './Header'; // multi export import from the same file
import ToggleComponent from './ToggleComponent';
import MultipleCondition from './MultipleCondition';
import AdvanceProps from './AdvanceProps';
import InputField from './InputField';
import ControlledComponent from './ControlledComponent'
import FruitLists from './UseStateHook';
import Variables from './Variables';
import { Props } from './Props';
import HandleCheckbox from './HandleCheckbox';
import HandleRadioDropdown from './HandleRadioDropdown'
import Loop from './Loop';
import Clock from './Clock';
import UseEffect from './UseEffect';
import UseEffectProps from './UseEffectProps';
import NestedLooping from './NestedLooping';
import LearnInnerStyle from './LearnInnerStyle';
import LearnExternalStyle from './LearnExternalStyle';
import LearnCSSModule from './LearnCSSModule';
import LearnStyledComponent from './LearnStyledComponent';
import LearnUseRef from './LearnUseRef';
import LearnUncontrolledComponent from './LearnUncontrolledComponent';
import LearnFunctionalProps from './LearnFunctionalProps';
import LearnForwardRef from './LearnForwardRef';
import LearnUseFormStatus from './LearnUseFormStatus';
import LearnUseTransition from './LearnUseTransition';
import LearnPureComponent from './LearnPureComponent';
import LearnDerivedState from './LearnDerivedState';
import LearnLiftingStateUp from './LearnLiftingStateUp';
import LearnUpdatingObjectsInState from './LearnUpdatingObjectsInState';
import LearnUpdatingArrayInState from './LearnUpdatingArrayInState';
import LearnUseActionState from './LearnUseActionState';
import LearnUseId from './LearnUseId';
import LearnFragment from './LearnFragment';
import LearnCustomHook from './LearnCustomHook';
import LearnContextAPI from './LearnContextAPI';
import LearnReactRouter from './LearnReactRouter';

function App() {

	let x = containerCount(40);
	return (
		<>
			<CommonHeader />
			<hr />
			<ButtonClicks />
			<hr />
			<Variables />
			<hr />
			<FruitLists />
			<hr />
			<Button />
			<hr />
			<ToggleComponent />
			<hr />
			<MultipleCondition />
			<hr />
			<Props />
			<hr />
			<AdvanceProps />
			<hr />
			<InputField />
			<hr />
			<ControlledComponent />
			<hr />
			<HandleCheckbox />
			<hr />
			<HandleRadioDropdown />
			<hr />
			<Loop />
			<hr />
			<Clock />
			<hr />
			<NestedLooping />
			<hr />
			<UseEffect />
			<hr />
			<UseEffectProps />
			<hr />
			<LearnInnerStyle />
			<hr />
			<LearnExternalStyle />
			<hr />
			<LearnCSSModule />
			<hr />
			<LearnStyledComponent />
			<hr />
			<LearnUseRef />
			<hr />
			<LearnUncontrolledComponent />
			<hr />
			<LearnFunctionalProps />
			<hr />
			<LearnForwardRef />
			<hr />
			<LearnUseFormStatus />
			<hr />
			<LearnUseTransition />
			<hr />
			<LearnPureComponent />
			<hr />
			<LearnDerivedState />
			<hr />
			<LearnLiftingStateUp />
			<hr />
			<LearnUpdatingObjectsInState />
			<hr />
			<LearnUpdatingArrayInState />
			<hr />
			<LearnUseActionState />
			<hr />
			<LearnUseId />
			<hr />
			<LearnFragment />
			<hr />
			<LearnCustomHook />
			<hr />
			<LearnContextAPI />
			<hr />
			<LearnReactRouter />
			<hr />
			<Footer />
		</>
	)
}

export default App;