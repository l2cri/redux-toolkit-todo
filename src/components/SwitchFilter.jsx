import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../store/SwitchFilterSlice';

export default function SwitchFilter() {
	const dispatch = useDispatch();
	const filter = useSelector(state => state.switchFilter);

	return (
		<div>
			<label>
				<input 
					type="radio" 
					checked={filter === 'all'} 
					onChange={() => dispatch(changeFilter('all'))} 
				/>
				All
			</label>
			<label>
				<input 
					type="radio" 
					checked={filter === 'completed'}
					onChange={() => dispatch(changeFilter('completed'))} 
				/>
				COMPLETED
			</label>
			<label>
				<input 
					type="radio"  
					checked={filter === 'active'} 
					onChange={() => dispatch(changeFilter('active'))} 
				/>
				ACTIVE
			</label>
		</div>
	)
}
