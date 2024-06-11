import { UnControlledOnboardingFlow } from './UnControlledOnboardingFlow';

const StepOne = ({ goToNext }) => (
	<>
		<h1>Step 1</h1>
		<button onClick={goToNext}>Next</button>
	</>
);
const StepTwo = ({ goToNext }) => (
	<>
		<h1>Step 2</h1>
		<button onClick={goToNext}>Next</button>
	</>
);
const StepThree = ({ goToNext }) => (
	<>
		<h1>Step 3</h1>
		<button onClick={goToNext}>Next</button>
	</>
);


function App() {

	return (
		<>
			<UnControlledOnboardingFlow>
				<StepOne />
				<StepTwo />
				<StepThree />
			</UnControlledOnboardingFlow>
		</>
	);
}

export default App;
