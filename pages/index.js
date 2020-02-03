import React, { useState } from 'react';

const InputElement = () => {
	const [inputText, setInputText] = useState('');
	const [historyList, setHistoryList] = useState([]);

	return (
		<div>
			<input
				type='text'
				placeholder='Enter some text'
				onChange={e => {
					setInputText(e.target.value);
					setHistoryList([...historyList, e.target.value]);
				}}
			/>
			<br />
			{inputText}
			<br />
			<ul>
				{historyList.map(rec => (
					<div>{rec}</div>
				))}
			</ul>
		</div>
	);
};

export default InputElement;
